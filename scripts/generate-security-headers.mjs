import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";

export function inlineScriptHashes(html) {
  return [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)]
    .filter(([, attrs]) => !/\bsrc\s*=/i.test(attrs))
    .map(([, , source]) => `'sha256-${createHash("sha256").update(source).digest("base64")}'`);
}

export function createHeaders(baseline, hashes, mode = "enforce") {
  if (!["enforce", "report-only"].includes(mode)) {
    throw new Error(`Unsupported CSP_MODE: ${mode}`);
  }
  const policy = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'none'",
    `script-src 'self' https://www.googletagmanager.com ${[...new Set(hashes)].sort().join(" ")}`,
    "script-src-attr 'none'",
    // Next/Image and existing React components use style attributes.
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com",
    "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.google.com",
    "frame-src https://maps.google.com https://www.google.com",
  ].join("; ");
  const name =
    mode === "enforce" ? "Content-Security-Policy" : "Content-Security-Policy-Report-Only";
  // frame-ancestors in Report-Only does not prevent embedding.
  const enforcedBaseline =
    mode === "report-only"
      ? "  Content-Security-Policy: base-uri 'self'; object-src 'none'; frame-ancestors 'none'\n"
      : "";
  const result = `${baseline.trimEnd()}\n${enforcedBaseline}  ${name}: ${policy}\n`;
  if (result.split("\n").some((line) => line.length > 2000)) {
    throw new Error(
      "Cloudflare Pages _headers line exceeds 2000 characters. Do not deploy without reviewing CSP."
    );
  }
  return result;
}

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith(".html") ? [path] : [];
    })
  );
  return files.flat();
}

export async function generateHeaders(outputDirectory, mode = "enforce") {
  const files = await htmlFiles(outputDirectory);
  if (files.length === 0) throw new Error("No exported HTML files found; cannot generate CSP.");
  const hashes = (
    await Promise.all(files.map(async (file) => inlineScriptHashes(await readFile(file, "utf8"))))
  ).flat();
  if (hashes.length === 0)
    throw new Error("No inline scripts found; review the exported HTML before deploying.");
  const baseline = await readFile(new URL("../public/_headers", import.meta.url), "utf8");
  await writeFile(join(outputDirectory, "_headers"), createHeaders(baseline, hashes, mode));
  console.log(
    `Security headers: ${mode}, ${files.length} HTML files, ${new Set(hashes).size} script hashes`
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await generateHeaders(resolve("out"), process.env.CSP_MODE ?? "enforce");
}

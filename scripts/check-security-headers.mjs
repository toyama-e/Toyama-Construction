import { createRequire } from "node:module";
import { inlineScriptHashes } from "./generate-security-headers.mjs";

const { SITE_URL } = createRequire(import.meta.url)("../src/constants/site.ts");
const origin = new URL(process.argv[2] ?? SITE_URL);
if (origin.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(origin.hostname)) {
  throw new Error("Use HTTPS for deployed sites; HTTP is only supported for localhost testing.");
}
let failed = false;
for (const path of ["/", "/company", "/recruit", "/privacy"]) {
  try {
    const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const policy = response.headers.get("content-security-policy") ?? "";
    const scripts = policy.match(/(?:^|;)\s*script-src\s+([^;]+)/)?.[1] ?? "";
    const checks = {
      "X-Frame-Options": response.headers.get("x-frame-options")?.toUpperCase() === "DENY",
      HSTS: /(?:^|;)\s*max-age=[1-9]\d*/i.test(
        response.headers.get("strict-transport-security") ?? ""
      ),
      "Permissions-Policy": ["camera=()", "microphone=()", "geolocation=()"].every((value) =>
        (response.headers.get("permissions-policy") ?? "").includes(value)
      ),
      "frame-ancestors": /(?:^|;)\s*frame-ancestors\s+'none'(?:;|$)/.test(policy),
      "enforced hash CSP":
        scripts.includes("'sha256-") &&
        !scripts.includes("'unsafe-inline'") &&
        !scripts.includes("'unsafe-eval'"),
      "inline script coverage": false,
    };
    const html = await response.text();
    const hashes = inlineScriptHashes(html);
    checks["inline script coverage"] =
      hashes.length > 0 && hashes.every((hash) => scripts.split(/\s+/).includes(hash));
    const errors = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);
    if (errors.length) throw new Error(`Failed: ${errors.join(", ")}`);
    console.log(`PASS ${new URL(path, origin)} (${hashes.length} inline scripts covered)`);
  } catch (error) {
    failed = true;
    console.error(`FAIL ${path}: ${error.message}`);
  }
}
if (failed) process.exitCode = 1;

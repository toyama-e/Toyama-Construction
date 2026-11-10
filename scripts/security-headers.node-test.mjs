import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import {
  inlineScriptHashes,
  createHeaders,
  generateHeaders,
} from "./generate-security-headers.mjs";

test("hashes exact script text, including whitespace, and excludes external scripts", () => {
  const source = '\nself.__next_f.push([1,"日本語"]);\n';
  const hashes = inlineScriptHashes(`<script src="/main.js"></script><script>${source}</script>`);
  assert.deepEqual(hashes, [`'sha256-${createHash("sha256").update(source).digest("base64")}'`]);
});

test("report-only retains enforced embedding protection; rejects invalid modes and oversized headers", () => {
  const baseline = "/*\n  X-Frame-Options: DENY\n";
  const headers = createHeaders(baseline, ["'sha256-test'"], "report-only");
  assert.match(headers, /Content-Security-Policy: .*frame-ancestors 'none'/);
  assert.match(headers, /Content-Security-Policy-Report-Only:/);
  assert.throws(() => createHeaders(baseline, [], "typo"));
  assert.throws(
    () =>
      createHeaders(
        baseline,
        Array.from({ length: 50 }, (_, i) => `'sha256-${"x".repeat(44)}${i}'`)
      ),
    /2000/
  );
});

test("generates hashes for nested HTML and regenerates when content changes", async () => {
  const dir = await mkdtemp(join(tmpdir(), "toyama-csp-test-"));
  try {
    await assert.rejects(generateHeaders(dir), /No exported HTML/);
    await mkdir(join(dir, "nested"));
    await writeFile(join(dir, "index.html"), "<script>first()</script>");
    await writeFile(join(dir, "nested", "404.html"), "<script>fallback()</script>");
    await generateHeaders(dir);
    const before = await readFile(join(dir, "_headers"), "utf8");
    assert.ok(
      inlineScriptHashes("<script>fallback()</script>").every((hash) => before.includes(hash))
    );
    await writeFile(join(dir, "index.html"), "<script>changed()</script>");
    await generateHeaders(dir);
    const after = await readFile(join(dir, "_headers"), "utf8");
    assert.notEqual(after, before);
    assert.ok(!after.includes(inlineScriptHashes("<script>first()</script>")[0]));
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test("external GA bootstrap initializes the configured ID without inline execution", async () => {
  const source = await readFile(new URL("../public/analytics-init.js", import.meta.url), "utf8");
  const window = {};
  const scripts = [];
  runInNewContext(source, {
    window,
    document: {
      currentScript: { dataset: { measurementId: "G-TEST123" } },
      createElement: () => ({}),
      head: {
        appendChild: (script) => {
          assert.equal(window.dataLayer[1][0], "config");
          scripts.push(script);
        },
      },
    },
  });
  assert.equal(window.dataLayer[0][0], "js");
  assert.equal(window.dataLayer[1][0], "config");
  assert.equal(window.dataLayer[1][1], "G-TEST123");
  assert.equal(scripts[0].src, "https://www.googletagmanager.com/gtag/js?id=G-TEST123");
  window.gtag("event", "line_call_click");
  assert.equal(window.dataLayer[2][1], "line_call_click");
  const disabled = {};
  runInNewContext(source, { window: disabled, document: { currentScript: null } });
  assert.equal(disabled.gtag, undefined);
});

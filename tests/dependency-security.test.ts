// Regression test for the Aikido / npm audit dependency findings of 2026-11-21.
// Run: npm test
//
// Each rule below is one advisory. The test fails if ANY copy of the package
// in package-lock.json (top-level or nested under another package) is still in
// the vulnerable range. Aikido scans package-lock.json, so that is the file
// checked here; direct dependencies are also checked in node_modules (what
// actually runs).
//
// Findings covered:
// - next < 16.4.5: 78 CVEs incl. RCE via unsafe deserialization (Aikido, critical)
// - sharp < 0.35.5: heap overflow in bundled librsvg/libheif/libvips (via next, high)
// - postcss <= 8.5.22: XSS and file read via source maps (direct, high)
// - zod < 4.6.6: memory exhaustion on oversized collections (npm audit, high)
// - source-map-js 1.0.0 to 1.2.1: event-loop DoS (npm audit, high)
// - glob 9 to 14.0.1: via tailwindcss -> sucrase (npm audit, moderate)
// - yaml 2.0.0 to 2.8.2 (npm audit, moderate)
// - postcss-selector-parser < 6.1.5: via tailwindcss (npm audit, moderate)
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

type Rule = {
  name: string;
  /** First patched version. */
  minimum: string;
  /** Only versions at or above this are affected (older major lines may be safe). */
  affectedFrom?: string;
  /** Also check the installed copy in node_modules (direct dependencies). */
  direct?: boolean;
};

const RULES: Rule[] = [
  { name: "next", minimum: "16.4.5", direct: true },
  { name: "sharp", minimum: "0.35.5" },
  { name: "postcss", minimum: "8.5.23" },
  { name: "zod", minimum: "4.6.6" },
  { name: "source-map-js", minimum: "1.2.2", affectedFrom: "1.0.0" },
  { name: "glob", minimum: "14.0.2", affectedFrom: "9.0.0" },
  { name: "yaml", minimum: "2.8.3", affectedFrom: "2.0.0" },
  { name: "postcss-selector-parser", minimum: "6.1.5" },
];

function parse(version: string): number[] {
  const core = version.split(/[-+]/)[0];
  return core.split(".").map((part) => Number.parseInt(part, 10) || 0);
}

function isAtLeast(version: string, minimum: string): boolean {
  const a = parse(version);
  const b = parse(minimum);
  for (let i = 0; i < 3; i++) {
    if ((a[i] ?? 0) !== (b[i] ?? 0)) return (a[i] ?? 0) > (b[i] ?? 0);
  }
  return true;
}

function isVulnerable(version: string, rule: Rule): boolean {
  if (rule.affectedFrom && !isAtLeast(version, rule.affectedFrom)) return false;
  return !isAtLeast(version, rule.minimum);
}

function readJson(file: string): Record<string, unknown> {
  return JSON.parse(readFileSync(file, "utf8"));
}

const lock = readJson(path.join(ROOT, "package-lock.json")) as {
  packages: Record<string, { version?: string }>;
};

/** Every lockfile entry for a package: "node_modules/x" and "node_modules/a/node_modules/x". */
function lockEntries(name: string): { at: string; version: string }[] {
  const suffix = `node_modules/${name}`;
  return Object.entries(lock.packages)
    .filter(([key, meta]) => (key === suffix || key.endsWith(`/${suffix}`)) && meta.version)
    .map(([key, meta]) => ({ at: key, version: meta.version! }));
}

test("isAtLeast compares semver cores", () => {
  assert.equal(isAtLeast("16.4.5", "16.4.5"), true);
  assert.equal(isAtLeast("16.10.0", "16.4.5"), true);
  assert.equal(isAtLeast("16.2.9", "16.4.5"), false);
  assert.equal(isVulnerable("0.5.0", RULES.find((r) => r.name === "source-map-js")!), false);
});

for (const rule of RULES) {
  test(`package-lock.json has no ${rule.name} below ${rule.minimum}`, () => {
    const bad = lockEntries(rule.name)
      .filter((e) => isVulnerable(e.version, rule))
      .map((e) => `${e.at}@${e.version}`);
    assert.deepEqual(bad, [], `vulnerable ${rule.name}, need >= ${rule.minimum}`);
  });

  if (rule.direct) {
    test(`installed ${rule.name} >= ${rule.minimum}`, () => {
      const installed = readJson(path.join(ROOT, "node_modules", rule.name, "package.json"))
        .version as string;
      assert.equal(
        isVulnerable(installed, rule),
        false,
        `installed ${rule.name} ${installed} is vulnerable, need >= ${rule.minimum}`
      );
    });
  }
}

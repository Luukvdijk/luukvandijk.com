// Keeps lint and the type check green from `npm test`, since this repo has
// no CI that runs them. Both caught real mistakes in the 2026-11-21 security
// update:
// - a test importing next.config.ts made the type check (which `next build`
//   also runs) fail, so the site would not build;
// - the newer eslint-plugin-react-hooks rejects patterns the site used
//   (components created during render, setState called inside effects).
import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";

// npm test runs from the package root.
const ROOT = process.cwd();

function runNodeBin(bin: string, args: string[]) {
  const result = spawnSync(process.execPath, [path.join(ROOT, bin), ...args], {
    cwd: ROOT,
    encoding: "utf8",
  });
  return { code: result.status, output: `${result.stdout}${result.stderr}` };
}

test("tsc --noEmit reports no type errors", () => {
  const { code, output } = runNodeBin("node_modules/typescript/bin/tsc", ["--noEmit"]);
  assert.equal(code, 0, output);
});

test("eslint reports no errors", () => {
  const { code, output } = runNodeBin("node_modules/eslint/bin/eslint.js", ["."]);
  assert.equal(code, 0, output);
});

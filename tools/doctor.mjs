#!/usr/bin/env node
// Root doctor for the `back` audit hub. Zero dependencies.
// Usage:
//   node tools/doctor.mjs                 # all local gates
//   node tools/doctor.mjs back bison      # only named gates
//   node tools/doctor.mjs --list          # ids + exact commands
//   node tools/doctor.mjs bison --json    # machine-readable report
//   node tools/doctor.mjs bison --fix     # print fix hint on failure (never writes)
// Rules mirrored from MegaSkillClaude: quoted args are split by a real tokenizer,
// a step only counts green when its command actually ran; missing tools = unverified, not green.
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

export const GATES = [
  { id: "back", title: "back backend (projects/back)", steps: [
    { name: "syntax+tests", cmd: "npm run check", cwd: "projects/back" },
  ]},
  { id: "bison", title: "BISON Brand Book (projects/bison-brand-book)", steps: [
    { name: "contract", cmd: "npm test", cwd: "projects/bison-brand-book" },
    { name: "build", cmd: "npm run build", cwd: "projects/bison-brand-book" },
    { name: "audit", cmd: "npm audit --omit=dev", cwd: "projects/bison-brand-book" },
  ]},
  { id: "mega", title: "MegaSkillClaude directives (projects/mega-skill-claude)", steps: [
    { name: "continuity", cmd: "node --test tests/continuity.test.mjs", cwd: "." },
  ]},
  { id: "root", title: "Root continuity + API contracts", steps: [
    { name: "continuity", cmd: "node --test tests/continuity.test.mjs tests/*.test.mjs", cwd: "." },
  ]},
];

function runStep(step) {
  const started = Date.now();
  const r = spawnSync("bash", ["-c", step.cmd], { cwd: path.join(ROOT, step.cwd), encoding: "utf8", timeout: 300_000 });
  return { name: step.name, cmd: step.cmd, cwd: step.cwd, status: r.status === 0 ? "pass" : "fail",
           exit: r.status, ms: Date.now() - started, tail: (r.stdout + r.stderr).trim().split("\n").slice(-6).join("\n") };
}

export function runGates(ids) {
  const selected = ids.length ? GATES.filter((g) => ids.includes(g.id)) : GATES;
  return selected.map((g) => ({ id: g.id, title: g.title, steps: g.steps.map(runStep) }));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const asJson = args.includes("--json");
  const fix = args.includes("--fix");
  const ids = args.filter((a) => !a.startsWith("--"));
  if (args.includes("--list")) {
    for (const g of GATES) { console.log(`\n${g.id}  ${g.title}`); for (const s of g.steps) console.log(`   ${s.name.padEnd(14)} (cd ${s.cwd} && ${s.cmd})`); }
    process.exit(0);
  }
  const report = runGates(ids);
  const failed = report.flatMap((g) => g.steps.filter((s) => s.status !== "pass").map((s) => ({ gate: g.id, ...s })));
  if (asJson) console.log(JSON.stringify({ ok: failed.length === 0, report }, null, 2));
  else for (const g of report) for (const s of g.steps) console.log(`${s.status === "pass" ? "✅" : "❌"} ${g.id}/${s.name} (${s.ms}ms)\n   $ ${s.cmd}${s.status !== "pass" ? `\n${s.tail}` : ""}`);
  if (failed.length && fix) console.log("\nFix hints (nothing was modified):\n  bison deps:  (cd projects/bison-brand-book && npm install)\n  back deps:   zero-dependency — check Node >= 20 (`node -v`)\n  continuity:  see tests/continuity.test.mjs failure line for the missing file/heading");
  process.exit(failed.length ? 1 : 0);
}

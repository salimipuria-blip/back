// Continuity contract: every project in this repo carries its own living flow log
// (PROGRESS.md) and an executable directive, so context survives between sessions.
// Adding a project without its docs fails CI here — that is intentional.
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const projectDirs = readdirSync(path.join(ROOT, "projects"), { withFileTypes: true })
  .filter((d) => d.isDirectory()).map((d) => d.name);

test("at least the three audited repos are represented as projects", () => {
  for (const id of ["back", "bison-brand-book", "mega-skill-claude"])
    assert.ok(projectDirs.includes(id), `projects/${id} missing`);
});

for (const id of projectDirs) {
  test(`projects/${id} keeps flow: PROGRESS.md with date, evidence and next steps`, () => {
    const file = path.join(ROOT, "projects", id, "PROGRESS.md");
    assert.ok(existsSync(file), `projects/${id}/PROGRESS.md missing — flow would be lost`);
    const text = readFileSync(file, "utf8");
    assert.match(text, /آخرین به‌روزرسانی:\s*\*\*\d{4}-\d{2}-\d{2}/, "dated header (YYYY-MM-DD) required");
    assert.match(text, /کارهای باز|گام بعدی|Next/, "open/next section required");
    assert.match(text, /```bash/, "at least one executable command block required");
  });

  test(`projects/${id} has a README or DIRECTIVE with its exact gate command`, () => {
    const candidates = ["DIRECTIVE.md", "README.md"].map((f) => path.join(ROOT, "projects", id, f)).filter(existsSync);
    assert.ok(candidates.length > 0, `projects/${id} needs DIRECTIVE.md or README.md`);
    const text = candidates.map((f) => readFileSync(f, "utf8")).join("\n");
    assert.match(text, /doctor\.mjs|npm (test|run check)/, "exact verification command required");
  });
}

test("root flow files exist and cross-link the projects", () => {
  for (const f of ["README.md", "PROGRESS.md", "ROADMAP.md"]) assert.ok(existsSync(path.join(ROOT, f)), `${f} missing`);
  const readme = readFileSync(path.join(ROOT, "README.md"), "utf8");
  for (const id of ["back", "bison-brand-book", "mega-skill-claude"]) assert.ok(readme.includes(id), `README must link ${id}`);
});

test("no secret material is committed in docs or sources", () => {
  const scan = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === "node_modules" || e.name === "dist" || e.name === ".git" ? [] : scan(p);
    return /\.(md|mjs|js|json|html|css)$/.test(e.name) ? [p] : [];
  });
  for (const file of [...scan(path.join(ROOT, "projects")), ...scan(path.join(ROOT, "tools"))]) {
    const text = readFileSync(file, "utf8");
    assert.doesNotMatch(text, /sb_secret_[A-Za-z0-9_-]{20,}|sk-[A-Za-z0-9]{24,}/, `possible secret in ${path.relative(ROOT, file)}`);
  }
});

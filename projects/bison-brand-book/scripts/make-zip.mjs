// Rebuild public/BISON-Brand-Book.zip from dist/ — the ZIP is a *generated* download
// artifact, never a hand-edited source file. Run `npm run build` first.
// No dependencies: shells out to the system `zip` if present, else fails loudly.
import { execFileSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const out = path.join(root, "public", "BISON-Brand-Book.zip");

if (!existsSync(path.join(dist, "index.html"))) {
  console.error("dist/index.html missing — run `npm run build` first.");
  process.exit(1);
}
rmSync(out, { force: true });
try {
  execFileSync("zip", ["-qr", out, "."], { cwd: dist, stdio: "inherit" });
} catch {
  console.error("`zip` binary not found. Install it (apt/brew) or zip dist/ manually into public/BISON-Brand-Book.zip");
  process.exit(1);
}
console.log(`Wrote ${path.relative(root, out)} from dist/`);

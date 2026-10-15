// back — zero-dependency audit-hub backend (Node >= 20, stdlib only).
// Endpoints: GET /health · GET /api/projects · GET /api/repos · GET /api/audit/latest
// Design rules: no secret is ever read or logged; unknown routes are JSON 404;
// errors are JSON with a stable `code`, never an HTML stack page.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PROJECTS, REPOS } from "./projects.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const startedAt = Date.now();
const VERSION = process.env.BACK_VERSION ?? "0.1.0";

function json(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(payload),
    "x-content-type-options": "nosniff",
    "cache-control": "no-store",
  });
  res.end(payload);
}

export function createApp() {
  return createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? "/", "http://localhost");
      if (req.method !== "GET") return json(res, 405, { code: "METHOD_NOT_ALLOWED", path: url.pathname });
      switch (url.pathname) {
        case "/health":
          return json(res, 200, { status: "ok", service: "back", version: VERSION, uptime_s: Math.round((Date.now() - startedAt) / 1000) });
        case "/api/repos":
          return json(res, 200, { repos: REPOS });
        case "/api/projects": {
          const repo = url.searchParams.get("repo");
          const projects = repo ? PROJECTS.filter((p) => p.repo === repo) : PROJECTS;
          return json(res, 200, { count: projects.length, projects });
        }
        case "/api/audit/latest": {
          try {
            const raw = await readFile(path.join(root, "docs", "audit-latest.json"), "utf8");
            return json(res, 200, JSON.parse(raw));
          } catch {
            return json(res, 404, { code: "AUDIT_NOT_RUN", hint: "Run: node tools/audit-repos.mjs" });
          }
        }
        default:
          return json(res, 404, { code: "NOT_FOUND", path: url.pathname });
      }
    } catch (err) {
      return json(res, 500, { code: "INTERNAL", message: String(err?.message ?? err) });
    }
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT ?? 8787);
  createApp().listen(port, "0.0.0.0", () => console.log(`back listening on 0.0.0.0:${port}`));
}

import test from "node:test";
import assert from "node:assert/strict";
import { createApp } from "../src/server.mjs";
import { PROJECTS } from "../src/projects.mjs";

async function withServer(fn) {
  const server = createApp();
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const base = `http://127.0.0.1:${server.address().port}`;
  try { await fn(base); } finally { server.close(); }
}

test("GET /health is ok and never leaks env", async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/health`);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.status, "ok");
    assert.equal(JSON.stringify(body).includes("TOKEN"), false);
  });
});

test("GET /api/projects lists every managed project with a gate command", async () => {
  await withServer(async (base) => {
    const body = await (await fetch(`${base}/api/projects`)).json();
    assert.equal(body.count, PROJECTS.length);
    assert.ok(body.count >= 14);
    for (const p of body.projects) assert.match(p.gate, /doctor/);
    const mega = await (await fetch(`${base}/api/projects?repo=MegaSkillClaude`)).json();
    assert.ok(mega.projects.every((p) => p.repo === "MegaSkillClaude"));
  });
});

test("unknown route and wrong method are stable JSON errors", async () => {
  await withServer(async (base) => {
    const nf = await fetch(`${base}/nope`);
    assert.equal(nf.status, 404);
    assert.equal((await nf.json()).code, "NOT_FOUND");
    const m = await fetch(`${base}/health`, { method: "POST" });
    assert.equal(m.status, 405);
  });
});

test("audit endpoint fails closed with a runnable hint before first audit", async () => {
  await withServer(async (base) => {
    const res = await fetch(`${base}/api/audit/latest`);
    // Either a real report exists (200) or the contract hint is returned — never a stack/HTML page.
    assert.ok([200, 404].includes(res.status));
    if (res.status === 404) assert.match((await res.json()).hint, /audit-repos/);
  });
});

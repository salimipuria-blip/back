// Single source of truth for the project registry served by the API.
// Keep in sync with README.md table and tools/doctor.mjs (continuity test enforces ids).
export const PROJECTS = [
  { id: "back", repo: "back", path: "projects/back", kind: "backend", status: "active", gate: "node tools/doctor.mjs back" },
  { id: "bison-brand-book", repo: "bison-brand-book", path: "projects/bison-brand-book", kind: "site", status: "active", gate: "node tools/doctor.mjs bison" },
  { id: "mega-monorepo", repo: "MegaSkillClaude", path: "projects/mega-skill-claude", kind: "monorepo-directives", status: "active", gate: "node tools/doctor.mjs mega" },
  { id: "psk", repo: "MegaSkillClaude", path: "psk/", kind: "site+api", status: "live-unverified", gate: "node scripts/doctor.mjs psk" },
  { id: "hermes", repo: "MegaSkillClaude", path: "hermes/", kind: "worker", status: "local-green", gate: "node scripts/doctor.mjs hermes" },
  { id: "fjcod", repo: "MegaSkillClaude", path: "fjcod/", kind: "store-os", status: "p0-backend-missing", gate: "node scripts/doctor.mjs fjcod" },
  { id: "lithos", repo: "MegaSkillClaude", path: "lithos/", kind: "dashboard", status: "buffer-unverified", gate: "node scripts/doctor.mjs lithos" },
  { id: "viking-team", repo: "MegaSkillClaude", path: "viking-team/", kind: "pwa+supabase", status: "staging-unverified", gate: "node scripts/doctor.mjs viking-team" },
  { id: "viking-motion", repo: "MegaSkillClaude", path: "viking-team/motion/", kind: "prototype", status: "prototype", gate: "node scripts/doctor.mjs viking-motion" },
  { id: "orchestrator", repo: "MegaSkillClaude", path: "orchestrator/", kind: "legacy", status: "historical", gate: "node scripts/doctor.mjs orchestrator" },
  { id: "router", repo: "MegaSkillClaude", path: ".claude/skills/, library/, plugins/", kind: "skill-library", status: "canonical", gate: "node scripts/doctor.mjs router" },
  { id: "mobile", repo: "MegaSkillClaude", path: "mobile/", kind: "pwa", status: "device-unverified", gate: "node scripts/doctor.mjs mobile" },
  { id: "brand-stickers", repo: "MegaSkillClaude", path: "brands/viking-offroad/", kind: "assets", status: "visual-review-open", gate: "node scripts/doctor.mjs brand-stickers" },
  { id: "brand-viking", repo: "MegaSkillClaude", path: "brand/viking/", kind: "renderer", status: "visual-review-open", gate: "node scripts/doctor.mjs brand-viking" },
];
export const REPOS = [
  { name: "back", url: "https://github.com/salimipuria-blip/back", role: "audit hub + backend (this repo)" },
  { name: "bison-brand-book", url: "https://github.com/salimipuria-blip/bison-brand-book", role: "standalone BISON site" },
  { name: "MegaSkillClaude", url: "https://github.com/salimipuria-blip/MegaSkillClaude", role: "monorepo, 13 managed projects" },
];

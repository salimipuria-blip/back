# back — بک‌اند مرکز ممیزی

API صفر-وابستگی با Node ≥20 (فقط stdlib). نقش: سرویس وضعیت/رجیستری پروژه‌ها و آخرین گزارش ممیزی.

| مسیر | پاسخ |
|---|---|
| `GET /health` | `{status, service, version, uptime_s}` |
| `GET /api/projects?repo=MegaSkillClaude` | رجیستری پروژه‌ها (فیلتر اختیاری repo) |
| `GET /api/repos` | سه ریپو و نقش هرکدام |
| `GET /api/audit/latest` | `docs/audit-latest.json` یا `404 AUDIT_NOT_RUN` با hint اجرایی |

```bash
npm start                 # 0.0.0.0:8787 (PORT قابل تغییر)
npm run check             # سینتکس + تست — معادل: node tools/doctor.mjs back (از ریشه)
```

قواعد: هیچ secret خوانده/log نمی‌شود؛ خطا همیشه JSON با `code` پایدار است؛ پاسخ‌ها `no-store` و `nosniff` دارند.
دستور توسعهٔ کامل: [DIRECTIVE.md](DIRECTIVE.md) · جریان زنده: [PROGRESS.md](PROGRESS.md)

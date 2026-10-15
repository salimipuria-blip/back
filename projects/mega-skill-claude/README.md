# MegaSkillClaude — دستورهای ممیزی (بدون کپی کد)

این پوشه عمداً کپی ۳۶٬۴۳۱ فایل مونوریپو نیست: مرجع زنده upstream است و
`node tools/audit-repos.mjs` آن را در `.cache/repos/MegaSkillClaude` تازه می‌کند.

- برای هر ۱۳ پروژه دستور جدا: [`directives/`](directives/) (`00` مونوریپو تا `12` موشن)
- ترتیب بستن PRهای Dependabot و تصمیم canonical بیسون: [`patches/`](patches/)
- گیت این پوشه: `node tools/doctor.mjs mega` (از ریشهٔ back) — قرارداد جریان همین اسناد را می‌سنجد؛
  گیت واقعی هر زیرپروژه داخل خود مونوریپو است: `node scripts/doctor.mjs <id>`

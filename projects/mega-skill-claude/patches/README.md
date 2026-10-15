# Patches & decisions for MegaSkillClaude

- `dependabot-order.md` — ترتیب اجرایی بستن PRهای باز.
- اصلاح BISON (لینک ZIP، فونت، focus trap، audit) به‌صورت واقعی در
  `../bison-brand-book/` (ریشهٔ همین مخزن: `projects/bison-brand-book`) اعمال و تست شده؛
  برای انتقال به مونوریپو: همان ۴ فایل (`index.html`, `src/main.js`, `src/styles.css`,
  `package.json`/`package-lock.json`, `tests/`) را کپی و `node scripts/doctor.mjs bison-brand-book` را اجرا کن.
- هیچ patch حدسی برای fjcod/hermes/lithos نوشته نشده: گیت آن‌ها به staging/secret/دستگاه واقعی
  نیاز دارد و در PROGRESS هرکدام به‌عنوان «تأییدنشده» ثبت شده، نه سبز جعلی.

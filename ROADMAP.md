# نقشهٔ راه بین‌ریپویی — back / bison-brand-book / MegaSkillClaude

> آخرین به‌روزرسانی: **2026-10-15** · اولویت یعنی ترتیب اجرا، نه آرزو. هر بند یک گیت قابل‌اجرا دارد.

## P0 — ریسک داده و انتشار
1. **منبع canonical بیسون:** مونوریپو مرجع شود؛ Vercel/Pages با Root Directory=`bison-brand-book` به
   MegaSkillClaude وصل، یک deployment واقعی تأیید، بعد ریپوی مستقل Archive شود. گیت: `node scripts/doctor.mjs bison-brand-book` در مونوریپو + URL زنده.
2. **CHAM:** تا backend/Auth/RLS روی staging ثابت نشده، دادهٔ مالی/حساس وارد نشود. گیت: migration+RLS تست‌شده روی staging و restore واقعی.
3. **انتشارهای قدیمی** (fjcod, viking-team): اتصال به مونوریپو قبل از هر Archive.

## P1 — کیفیت و راستی‌آزمایی زنده
- Dependabot مگا طبق `projects/mega-skill-claude/patches/dependabot-order.md`، هر PR جدا.
- Lithos: بستن `TODO(verify)` بافر با پاسخ واقعی؛ Viking: RLS زنده؛ Hermes: انتشار Worker و webhook؛ Mobile: Safari فیزیکی.
- BISON: سنجش LCP موبایل (هدف <۲٫۵s) و smoke مرورگری در CI این مخزن.

## P2 — مقیاس
- استقرار `back` روی سطح رایگان و فعال‌کردن audit زمان‌بندی‌شده.
- کاهش حجم: تفکیک GSAP، بررسی Git LFS/Release برای ZIP بیسون، فشرده‌سازی ایندکس موبایل فقط با اندازه‌گیری.

```bash
node tools/doctor.mjs   # وضعیت فعلی همهٔ گیت‌های محلی
```

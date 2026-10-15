# دستور اجرایی — BISON داخل مونوریپو

> پروژهٔ جدا داخل `MegaSkillClaude` · مرز: `bison-brand-book/ داخل MegaSkillClaude` · آخرین ممیزی: **۲۰۲۶-۱۰-۱۵**
> این فایل «دستور» است؛ تاریخچهٔ زنده در [`../PROGRESS.md`](../PROGRESS.md) ثبت می‌شود و هر دور **همان نوبت** به‌روز می‌شود.

## ۱) دستور دقیق (تنها فرمان مرجع)
```bash
node scripts/doctor.mjs bison-brand-book          # از ریشهٔ MegaSkillClaude
```

## ۲) وضعیت تأییدشده (شواهد، نه حدس)
۸/۸ تست ایستا + build؛ کپی مرجعِ سالم‌تر از ریپوی مستقل بود

## ۳) دیباگ — یافتهٔ این دور
drift با ریپوی مستقل: مستقل ۱ تست رد می‌کرد + audit آن ۱ High داشت (در این ممیزی هر دو در projects/bison-brand-book اصلاح و ۱۲/۱۲+ audit ۰ شد) — حالا باید یک منبع canonical انتخاب شود

## ۴) راه‌حل و پیشنهاد (به ترتیب)
P0: تصمیم canonical (پیشنهاد: همین مونوریپو) و Archive/redirect ریپوی مستقل بعد از اتصال Vercel
P1: smoke لینک/تصویر و سنجش LCP موبایل
P2: تفکیک importهای GSAP

## ۵) Definition of Done
- [ ] فرمان مرجع بالا سبز، با خروجی واقعی (تست ایستا/محلی/زنده از هم جدا نوشته شود)
- [ ] `PROGRESS.md` همین پروژه در همان نوبت append شد (تاریخ، فایل، فرمان، نتیجه، محدودیت، گام بعد)
- [ ] هیچ secret/کلید سرویس در Git، UI یا log نیست؛ migration بدون backup+staging+rollback اجرا نشده

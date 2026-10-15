# دستور اجرایی — Lithos Live Intelligence

> پروژهٔ جدا داخل `MegaSkillClaude` · مرز: `lithos/ — داشبورد خصوصی` · آخرین ممیزی: **۲۰۲۶-۱۰-۱۵**
> این فایل «دستور» است؛ تاریخچهٔ زنده در [`../PROGRESS.md`](../PROGRESS.md) ثبت می‌شود و هر دور **همان نوبت** به‌روز می‌شود.

## ۱) دستور دقیق (تنها فرمان مرجع)
```bash
node scripts/doctor.mjs lithos          # از ریشهٔ MegaSkillClaude
```

## ۲) وضعیت تأییدشده (شواهد، نه حدس)
۴/۴ تست + build ۹٫۲۲kB؛ پاسخ خالی Buffer با 502 BUFFER_SHAPE_UNVERIFIED رد می‌شود (اصلاح درست)

## ۳) دیباگ — یافتهٔ این دور
کوئری GraphQL بافر هنوز TODO(verify) در api/buffer-sync.js:43؛ metric زنده راستی‌آزمایی نشده

## ۴) راه‌حل و پیشنهاد (به ترتیب)
P0: تطبیق کوئری با پاسخ واقعی Buffer و پنل آن
P1: تست UI مرورگری و RLS زنده
P2: —

## ۵) Definition of Done
- [ ] فرمان مرجع بالا سبز، با خروجی واقعی (تست ایستا/محلی/زنده از هم جدا نوشته شود)
- [ ] `PROGRESS.md` همین پروژه در همان نوبت append شد (تاریخ، فایل، فرمان، نتیجه، محدودیت، گام بعد)
- [ ] هیچ secret/کلید سرویس در Git، UI یا log نیست؛ migration بدون backup+staging+rollback اجرا نشده

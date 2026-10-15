# دستور اجرایی — کنسول آیفون مگااسکیل

> پروژهٔ جدا داخل `MegaSkillClaude` · مرز: `mobile/ — PWA` · آخرین ممیزی: **۲۰۲۶-۱۰-۱۵**
> این فایل «دستور» است؛ تاریخچهٔ زنده در [`../PROGRESS.md`](../PROGRESS.md) ثبت می‌شود و هر دور **همان نوبت** به‌روز می‌شود.

## ۱) دستور دقیق (تنها فرمان مرجع)
```bash
node scripts/doctor.mjs mobile          # از ریشهٔ MegaSkillClaude
```

## ۲) وضعیت تأییدشده (شواهد، نه حدس)
۵٬۷۳۸ مهارت؛ Node ۶/۶ + Python ۸/۸؛ fingerprint نسخه‌دار PWA؛ Chromium/iPhone-emu بدون overflow

## ۳) دیباگ — یافتهٔ این دور
Safari/iOS واقعی، Home Screen، offline/update تأیید نشده؛ ایندکس خام ۲٫۲MB

## ۴) راه‌حل و پیشنهاد (به ترتیب)
P0: آزمون فیزیکی Safari: نصب → offline → reconnect → update
P1: فقط با bottleneck اندازه‌گیری‌شده: domain-split/فشرده‌سازی
P2: —

## ۵) Definition of Done
- [ ] فرمان مرجع بالا سبز، با خروجی واقعی (تست ایستا/محلی/زنده از هم جدا نوشته شود)
- [ ] `PROGRESS.md` همین پروژه در همان نوبت append شد (تاریخ، فایل، فرمان، نتیجه، محدودیت، گام بعد)
- [ ] هیچ secret/کلید سرویس در Git، UI یا log نیست؛ migration بدون backup+staging+rollback اجرا نشده

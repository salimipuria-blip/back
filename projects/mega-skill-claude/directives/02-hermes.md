# دستور اجرایی — Hermes — دستیار تلگرام

> پروژهٔ جدا داخل `MegaSkillClaude` · مرز: `hermes/ + tasks/ + observability/` · آخرین ممیزی: **۲۰۲۶-۱۰-۱۵**
> این فایل «دستور» است؛ تاریخچهٔ زنده در [`../PROGRESS.md`](../PROGRESS.md) ثبت می‌شود و هر دور **همان نوبت** به‌روز می‌شود.

## ۱) دستور دقیق (تنها فرمان مرجع)
```bash
node scripts/doctor.mjs hermes          # از ریشهٔ MegaSkillClaude
```

## ۲) وضعیت تأییدشده (شواهد، نه حدس)
۱۷۹/۱۷۹ unit + ۹/۹ integration محلی (workerd)؛ postinstall خطرناک است: همیشه npm ci --ignore-scripts

## ۳) دیباگ — یافتهٔ این دور
انتشار Worker/migration/webhook زنده تأیید نشده؛ setup.sh تک‌فایلی باید بماند

## ۴) راه‌حل و پیشنهاد (به ترتیب)
P0: انتشار کنترل‌شده + health/webhook از چت خصوصی
P1: اجرای W1 تاب‌آوری (failure/retry) از tasks/
P2: —

## ۵) Definition of Done
- [ ] فرمان مرجع بالا سبز، با خروجی واقعی (تست ایستا/محلی/زنده از هم جدا نوشته شود)
- [ ] `PROGRESS.md` همین پروژه در همان نوبت append شد (تاریخ، فایل، فرمان، نتیجه، محدودیت، گام بعد)
- [ ] هیچ secret/کلید سرویس در Git، UI یا log نیست؛ migration بدون backup+staging+rollback اجرا نشده

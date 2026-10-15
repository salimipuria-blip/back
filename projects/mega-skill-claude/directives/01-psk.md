# دستور اجرایی — MEGA SKILLS 3000

> پروژهٔ جدا داخل `MegaSkillClaude` · مرز: `psk/ — Vercel psk-3000` · آخرین ممیزی: **۲۰۲۶-۱۰-۱۵**
> این فایل «دستور» است؛ تاریخچهٔ زنده در [`../PROGRESS.md`](../PROGRESS.md) ثبت می‌شود و هر دور **همان نوبت** به‌روز می‌شود.

## ۱) دستور دقیق (تنها فرمان مرجع)
```bash
node scripts/doctor.mjs psk          # از ریشهٔ MegaSkillClaude
```

## ۲) وضعیت تأییدشده (شواهد، نه حدس)
check ✅ · ۵۳/۵۳ تست · golden ۱۰۸ موردی؛ موتور router.mjs + providers فقط رایگان

## ۳) دیباگ — یافتهٔ این دور
بدون ENGINE_TOKEN/provider زنده Answer Mode تأیید نشده؛ golden ماشینی ۱۰۰٪ جای برچسب انسانی را نمی‌گیرد

## ۴) راه‌حل و پیشنهاد (به ترتیب)
P0: مالک کلید رایگان را فقط در secret manager بگذارد
P1: رشد golden با label انسانی و ثبت accuracy جداگانه
P2: HttpOnly session و RLS فقط با threat model

## ۵) Definition of Done
- [ ] فرمان مرجع بالا سبز، با خروجی واقعی (تست ایستا/محلی/زنده از هم جدا نوشته شود)
- [ ] `PROGRESS.md` همین پروژه در همان نوبت append شد (تاریخ، فایل، فرمان، نتیجه، محدودیت، گام بعد)
- [ ] هیچ secret/کلید سرویس در Git، UI یا log نیست؛ migration بدون backup+staging+rollback اجرا نشده

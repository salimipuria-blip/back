# دستور اجرایی — Viking Experience Command

> پروژهٔ جدا داخل `MegaSkillClaude` · مرز: `viking-team/ (+ team/)` · آخرین ممیزی: **۲۰۲۶-۱۰-۱۵**
> این فایل «دستور» است؛ تاریخچهٔ زنده در [`../PROGRESS.md`](../PROGRESS.md) ثبت می‌شود و هر دور **همان نوبت** به‌روز می‌شود.

## ۱) دستور دقیق (تنها فرمان مرجع)
```bash
node scripts/doctor.mjs viking-team          # از ریشهٔ MegaSkillClaude
```

## ۲) وضعیت تأییدشده (شواهد، نه حدس)
Node ۴/۴ + Python ۵/۵؛ RLS هر ۳ جدول، سقف ۵ عضو با advisory lock؛ فقط anon key در کلاینت

## ۳) دیباگ — یافتهٔ این دور
migration/۵ حساب/HEIC روی Supabase و iPhone زنده تأیید نشده؛ انتشار شاید از ریپوی قدیمی

## ۴) راه‌حل و پیشنهاد (به ترتیب)
P0: اعمال sql/ روی staging + تست RLS با حساب واقعی
P1: آزمون ورود/آپلود از iPhone به‌عنوان گیت جدا
P2: رسانه بیشتر بعد از اثبات authorization

## ۵) Definition of Done
- [ ] فرمان مرجع بالا سبز، با خروجی واقعی (تست ایستا/محلی/زنده از هم جدا نوشته شود)
- [ ] `PROGRESS.md` همین پروژه در همان نوبت append شد (تاریخ، فایل، فرمان، نتیجه، محدودیت، گام بعد)
- [ ] هیچ secret/کلید سرویس در Git، UI یا log نیست؛ migration بدون backup+staging+rollback اجرا نشده

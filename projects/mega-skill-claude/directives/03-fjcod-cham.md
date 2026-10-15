# دستور اجرایی — CHAM Store OS (FJCOD)

> پروژهٔ جدا داخل `MegaSkillClaude` · مرز: `fjcod/ — React 19+TS+Vite 7` · آخرین ممیزی: **۲۰۲۶-۱۰-۱۵**
> این فایل «دستور» است؛ تاریخچهٔ زنده در [`../PROGRESS.md`](../PROGRESS.md) ثبت می‌شود و هر دور **همان نوبت** به‌روز می‌شود.

## ۱) دستور دقیق (تنها فرمان مرجع)
```bash
node scripts/doctor.mjs fjcod          # از ریشهٔ MegaSkillClaude
```

## ۲) وضعیت تأییدشده (شواهد، نه حدس)
۳۳/۳۳ تست + typecheck + build + e2e ۱۹/۱۹ با Chromium؛ داده فقط مرورگر

## ۳) دیباگ — یافتهٔ این دور
⛔ P0 بحرانی: backend/Auth/RLS سروری نیست — برای دادهٔ مالی/حساس production استفاده نشود؛ رمزهای اولیه ریسک

## ۴) راه‌حل و پیشنهاد (به ترتیب)
P0: backup هر دستگاه → تصمیم backend → schema/RLS روی staging → RPC اتمیک idempotent فروش/موجودی → حذف/rotate رمز اولیه
P1: e2e در CI نگه داشته شود
P2: outbox آفلاین فقط بعد از بک‌اند امن

## ۵) Definition of Done
- [ ] فرمان مرجع بالا سبز، با خروجی واقعی (تست ایستا/محلی/زنده از هم جدا نوشته شود)
- [ ] `PROGRESS.md` همین پروژه در همان نوبت append شد (تاریخ، فایل، فرمان، نتیجه، محدودیت، گام بعد)
- [ ] هیچ secret/کلید سرویس در Git، UI یا log نیست؛ migration بدون backup+staging+rollback اجرا نشده

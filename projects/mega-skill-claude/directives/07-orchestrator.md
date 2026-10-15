# دستور اجرایی — Omni LLM Orchestrator (تاریخی)

> پروژهٔ جدا داخل `MegaSkillClaude` · مرز: `orchestrator/` · آخرین ممیزی: **۲۰۲۶-۱۰-۱۵**
> این فایل «دستور» است؛ تاریخچهٔ زنده در [`../PROGRESS.md`](../PROGRESS.md) ثبت می‌شود و هر دور **همان نوبت** به‌روز می‌شود.

## ۱) دستور دقیق (تنها فرمان مرجع)
```bash
node scripts/doctor.mjs orchestrator          # از ریشهٔ MegaSkillClaude
```

## ۲) وضعیت تأییدشده (شواهد، نه حدس)
contract OK · pytest ۱۶ pass/۳ skip مستند · Deno gateway ۷/۷ mock

## ۳) دیباگ — یافتهٔ این دور
محصول فعال نیست؛ قابلیت جدید نسازید؛ skipها آگاهانه‌اند، به تست جعلی تبدیل نشوند

## ۴) راه‌حل و پیشنهاد (به ترتیب)
P0: هیچ
P1: بازنشستگی توابع تکراری skill-router/free-llm-router بعد از پوشش قرارداد در PSK
P2: حذف snapshotهای مرده با تست

## ۵) Definition of Done
- [ ] فرمان مرجع بالا سبز، با خروجی واقعی (تست ایستا/محلی/زنده از هم جدا نوشته شود)
- [ ] `PROGRESS.md` همین پروژه در همان نوبت append شد (تاریخ، فایل، فرمان، نتیجه، محدودیت، گام بعد)
- [ ] هیچ secret/کلید سرویس در Git، UI یا log نیست؛ migration بدون backup+staging+rollback اجرا نشده

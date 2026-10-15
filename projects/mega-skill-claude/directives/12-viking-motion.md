# دستور اجرایی — Viking Cinematic Motion Study

> پروژهٔ جدا داخل `MegaSkillClaude` · مرز: `viking-team/motion/ — Remotion prototype` · آخرین ممیزی: **۲۰۲۶-۱۰-۱۵**
> این فایل «دستور» است؛ تاریخچهٔ زنده در [`../PROGRESS.md`](../PROGRESS.md) ثبت می‌شود و هر دور **همان نوبت** به‌روز می‌شود.

## ۱) دستور دقیق (تنها فرمان مرجع)
```bash
node scripts/doctor.mjs viking-motion          # از ریشهٔ MegaSkillClaude
```

## ۲) وضعیت تأییدشده (شواهد، نه حدس)
typecheck strict + spec؛ محصول زنده نیست، در /team/ ادغام نشده

## ۳) دیباگ — یافتهٔ این دور
۵ PR باز Remotion/React/TS روی همین پوشه؛ typecheck ≠ رندر MP4

## ۴) راه‌حل و پیشنهاد (به ترتیب)
P0: تصمیم ادغام یا توقف صریح
P1: رندر ۱۸۰ فریم + reduced-motion/poster قبل از ادغام
P2: ارتقای Remotion فقط همراه تست رندر

## ۵) Definition of Done
- [ ] فرمان مرجع بالا سبز، با خروجی واقعی (تست ایستا/محلی/زنده از هم جدا نوشته شود)
- [ ] `PROGRESS.md` همین پروژه در همان نوبت append شد (تاریخ، فایل، فرمان، نتیجه، محدودیت، گام بعد)
- [ ] هیچ secret/کلید سرویس در Git، UI یا log نیست؛ migration بدون backup+staging+rollback اجرا نشده

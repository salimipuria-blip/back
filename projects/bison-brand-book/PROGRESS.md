# BISON Brand Book — دفتر جریان پروژه

> توضیح زندهٔ پروژه؛ هر دور کاری همین‌جا append می‌شود. آخرین به‌روزرسانی: **2026-10-15**

## ۱) پروژه در یک نگاه
- **پوشه:** `projects/bison-brand-book/` (نسخهٔ اصلاح‌شدهٔ ریپوی مستقل) · **فناوری:** Vite 6 + GSAP + Lenis
- **منبع canonical پیشنهادی:** نسخهٔ داخل MegaSkillClaude؛ این کپی، اصلاحات ممیزی را حمل می‌کند تا به آنجا منتقل شود.

## ۲) دستور دقیق این پروژه
```bash
node tools/doctor.mjs bison    # از ریشهٔ back: تست + بیلد + audit
cd projects/bison-brand-book && npm test   # معادل دستی
```

## ۳) وضعیت تأییدشده (2026-10-15)
| بررسی | نتیجه |
|---|---|
| `npm test` | ✅ **۱۲/۱۲** (۸ قرارداد قبلی مونوریپو + ۴ قرارداد جدید فونت/هیرو/focus/SEO) |
| `npm run build` | ✅ index 25.08 kB (gzip 5.98) · JS 140.72 kB (gzip 52.99) |
| `npm audit` (کامل) | ✅ **۰** (قبل: ۱ High ‏source-map-js) |

## ۴) دیباگ این دور (B1–B7)
لینک نسبی ZIP اصلاح شد؛ vite به 6.4.4 و lock با audit fix به‌روز شد (۰ آسیب‌پذیری)؛
@import فونت حذف و link+preconnect آمد؛ focus trap و بازگشت فوکوس به دیالوگ اضافه شد؛
fallback کپی برای کانتکست ناامن؛ canonical/OG/JSON-LD و lazy/priority تصاویر. جزئیات: `docs/00-MASTER-AUDIT-2026-10-15.md`.

## ۵) کارهای باز / گام بعدی
- [ ] انتقال همین اصلاحات به `MegaSkillClaude/bison-brand-book` و سبز کردن doctor آنجا.
- [ ] سنجش LCP موبایل واقعی و smoke مرورگری؛ تفکیک importهای GSAP در صورت bottleneck.

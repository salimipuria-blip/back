# دستور اجرایی — BISON Brand Book

## مأموریت و مرز
کتاب برند سینمایی تک‌صفحه‌ای؛ فریم‌ورک عمداً ندارد. تولید ZIP از `dist/` است (`npm run zip`)، هرگز دستی.

## دستور دقیق
```bash
node tools/doctor.mjs bison                 # ریشهٔ back
cd projects/bison-brand-book && npm run check   # تست ۱۲ + بیلد
```

## پروتکل دیباگ
1. قرمز شدن تست «root-absolute» یعنی ارجاع نسبی برگشته — قرارداد Vite ‏`/asset` است.
2. قرمز شدن audit: اول `npm audit` کامل را ببین (نه فقط `--omit=dev`)، بعد `npm audit fix` و اجرای دوبارهٔ تست+بیلد.
3. مشکل حرکت/اسکرول: اول `prefers-reduced-motion` سیستم را چک کن؛ pin فقط ≥900px فعال است.

## Definition of Done
- [ ] ۱۲/۱۲ تست + بیلد + audit صفر · [ ] PROGRESS append شد · [ ] ZIP فقط با `npm run zip` بازسازی شد

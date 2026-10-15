# دستور اجرایی — back backend

## مأموریت و مرز
بک‌اند سبکِ مرکز ممیزی: فقط خواندن رجیستری و گزارش audit. دیتابیس، Auth و نوشتن داده ندارد — تا وقتی نیاز واقعی با threat model نیاید اضافه نمی‌شود.

## دستور دقیق
```bash
node tools/doctor.mjs back     # از ریشه: check+test این پروژه
cd projects/back && npm test   # معادل دستی: ۴ تست node:test روی پورت ephemeral
```

## معماری
- `src/projects.mjs` تنها منبع رجیستری؛ `src/server.mjs` فقط HTTP و نگاشت خطا به `code`.
- وابستگی: صفر. هر وابستگی جدید باید در همین فایل توجیه شود.

## پروتکل دیباگ
1. `curl -s localhost:8787/health` — اگر نبود: `PORT` و bind ‏`0.0.0.0` را چک کن.
2. `/api/audit/latest` ‏404 با `AUDIT_NOT_RUN` یعنی گزارش ساخته نشده: `node tools/audit-repos.mjs`.
3. تست قرمز را با حدس سبز نکن؛ خروجی خام تست را در PROGRESS بچسبان.

## پیشنهاد بعدی
- [ ] استقرار رایگان (Vercel/Cloudflare) پس از تصمیم مالک؛ تا آن زمان «محلی» صریح نوشته شود.
- [ ] افزودن `GET /api/projects/:id` فقط اگر مصرف‌کنندهٔ واقعی پیدا شد.

## Definition of Done
- [ ] `node tools/doctor.mjs back` سبز با خروجی واقعی · [ ] PROGRESS همان نوبت append شد · [ ] secret در log/response نیست

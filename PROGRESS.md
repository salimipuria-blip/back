# دفتر جریان ریشه — back (تغییرات بین‌پروژه‌ای)

> فقط تغییرات cross-repo اینجا می‌آید؛ تاریخچهٔ هر محصول در `PROGRESS.md` خودش است.
> آخرین به‌روزرسانی: **2026-10-15**

## وضعیت مشترک
- هر ۳ ریپو ممیزی شد؛ گزارش شواهد: `docs/00-MASTER-AUDIT-2026-10-15.md`.
- گیت ریشه: `node tools/doctor.mjs` (back + bison + mega-directives + continuity).

## لاگ (append-only)
### 2026-10-15 — ممیزی عمیق هر سه ریپو و ساخت مرکز جریان
- `back`: از README خالی به بک‌اند + doctor + audit upstream + CI تبدیل شد (جزئیات: `projects/back/PROGRESS.md`).
- `bison-brand-book`: نسخهٔ اصلاح‌شده وارد `projects/bison-brand-book` شد؛ ۷ یافته (B1–B7) با تست ۱۲/۱۲ و audit صفر بسته شد.
- `MegaSkillClaude`: برای هر ۱۳ پروژه دستور جدا در `projects/mega-skill-claude/directives/` نوشته شد؛ ترتیب Dependabot و تصمیم canonical ثبت شد. کدی از مونوریپو کپی نشد (۳۶k فایل) — مرجع، upstream است و `tools/audit-repos.mjs` آن را تازه نگه می‌دارد.

## کارهای باز (ریشه)
- [ ] اجرای `node tools/audit-repos.mjs` در CI زمان‌بندی‌شده (هفتگی) و commit گزارش.
- [ ] تصمیم استقرار `back` (بدون آن API فقط محلی است).

```bash
node tools/doctor.mjs        # گیت ریشه
node tools/audit-repos.mjs   # تازه‌سازی گزارش upstream
```

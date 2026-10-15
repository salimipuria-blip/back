# back — مرکز ممیزی، بک‌اند و دفتر جریان همهٔ ریپوهای پوریا

> آخرین به‌روزرسانی: **2026-10-15** · این مخزن از یک README خالی شروع شد؛ حالا «منبع جریان» هر سه ریپوست:
> هر پروژه پوشهٔ جدا، دفتر جریان زنده (`PROGRESS.md`)، دستور اجرایی جدا (`DIRECTIVE.md`) و گیت تست خودش را دارد.
> **قانون حفظ جریان:** هر دور کاری، همان نوبت `PROGRESS.md` پروژهٔ تغییرکرده append می‌شود — تاریخ، فایل، فرمان، خروجی واقعی، محدودیت، گام بعد. لاگ قبلی بازنویسی نمی‌شود.

## نقشهٔ ریپوها و پروژه‌ها

| ریپو | پروژه | پوشه در این مخزن | دستور مرجع (یک فرمان) | دفتر جریان |
|---|---|---|---|---|
| `back` | بک‌اند مرکز ممیزی (Node صفر-وابستگی) | `projects/back/` | `node tools/doctor.mjs back` | [PROGRESS](projects/back/PROGRESS.md) |
| `bison-brand-book` | BISON Brand Book (Vite+GSAP+Lenis) | `projects/bison-brand-book/` | `node tools/doctor.mjs bison` | [PROGRESS](projects/bison-brand-book/PROGRESS.md) |
| `MegaSkillClaude` | مونوریپو — ۱۳ پروژه (PSK, Hermes, CHAM, Lithos, Viking…) | `projects/mega-skill-claude/` | `node tools/doctor.mjs mega` | [PROGRESS](projects/mega-skill-claude/PROGRESS.md) |

جزئیات ۱۳ زیرپروژهٔ مگا: [`projects/mega-skill-claude/directives/`](projects/mega-skill-claude/directives/) (هرکدام دستور جدا دارد).

## شروع سریع

```bash
node tools/doctor.mjs --list     # همهٔ گیت‌ها و فرمان دقیقشان
node tools/doctor.mjs            # اجرای همهٔ گیت‌های محلی (back + bison + mega + root)
node tools/doctor.mjs bison      # فقط یک پروژه
node tools/audit-repos.mjs       # ممیزی upstream: clone/pull هر سه ریپو + گیت ارزان + گزارش docs/audit-latest.*
cd projects/back && npm start    # بک‌اند روی 0.0.0.0:8787 → GET /health /api/projects /api/audit/latest
cd projects/bison-brand-book && npm ci && npm run dev   # سایت روی 0.0.0.0:5173
```

## اسناد

- [ممیزی عمیق ۲۰۲۶-۱۰-۱۵](docs/00-MASTER-AUDIT-2026-10-15.md) — شواهد، باگ‌های پیداشده و اصلاح‌شده، ریسک‌های باز
- [نقشهٔ راه](ROADMAP.md) · [دفتر جریان ریشه](PROGRESS.md) · [گزارش آخرین ممیزی upstream](docs/audit-latest.md)

## قواعد مشترک (از مونوریپو به ارث رسیده، اینجا هم الزامی)

1. تست‌نشده = تأییدنشده؛ «ایستا/محلی/مرورگری/staging/زنده» جدا نوشته می‌شود.
2. هیچ secret در Git/UI/log؛ `.env.example` فقط نام خالی.
3. بودجهٔ صفر: فقط سطح رایگان؛ fallback پولی خودکار ممنوع.
4. خروجی generated (ZIP، ایندکس) دستی ویرایش نمی‌شود؛ از اسکریپت ساخته می‌شود.

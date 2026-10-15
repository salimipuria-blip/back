# MegaSkillClaude — دفتر جریان ممیزی (داخل back)

> دفتر داخلی مونوریپو در upstream است (`PROGRESS.md` هر پروژه)؛ این فایل فقط جریان ممیزی از سمت back را نگه می‌دارد.
> آخرین به‌روزرسانی: **2026-10-15**

## ۱) وضعیت تأییدشده (2026-10-15)
```bash
bash scripts/repo_health_check.sh            # ✅ سبز (psk/lithos/hermes/viking/orchestrator syntax+contract)
python3 scripts/sync_skill_library.py --check # ✅ ۰ اختلاف
node --test tests/doctor.test.mjs             # ✅ رگرسیون سبز-کاذب
python3 -m unittest discover -s tests -p test_repo_normalization.py  # ✅ ۱۶/۱۶
```

## ۲) یافته‌های این دور
- ۱۳ PR باز Dependabot (ترتیب امن: `patches/dependabot-order.md`)؛ ۳ ایشوی بی‌متن (#18/#19/#20) نیازمند triage.
- drift دو نسخهٔ BISON: مستقل ۷/۸ تست و ۱ High داشت؛ اصلاح کامل در `projects/bison-brand-book` انجام و آمادهٔ انتقال است.
- ریسک‌های زندهٔ باز (کد سبز، سرویس تأییدنشده): CHAM backend، Lithos Buffer، Viking RLS، Hermes deploy، Mobile Safari.

## ۳) کارهای باز / گام بعدی
- [ ] تصمیم canonical بیسون و انتقال اصلاحات به مونوریپو.
- [ ] بستن پلکانی Dependabot از گام ۱ (Actions) شروع شود.

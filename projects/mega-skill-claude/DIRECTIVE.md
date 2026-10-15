# دستور اجرایی — MegaSkillClaude (از داخل back)

```bash
node tools/doctor.mjs mega        # قرارداد اسناد/جریان همین پوشه
node tools/audit-repos.mjs        # clone/pull upstream و گیت ارزان ریشهٔ مونوریپو
# داخل checkout مونوریپو (مرجع واقعی هر پروژه):
node scripts/doctor.mjs --list    # ۴۲ گام در ۱۳ دامنه
node scripts/doctor.mjs psk       # نمونه: فقط یک پروژه
```

قاعده: نتیجهٔ این پوشه «ممیزی/دستور» است، نه موفقیت زندهٔ سرویس‌ها. هر زیرپروژه فایل جدا در `directives/` دارد.

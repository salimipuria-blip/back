# ممیزی عمیق همهٔ ریپوها — ۲۰۲۶-۱۰-۱۵

روش: هر سه ریپو clone و با فرمان واقعی بررسی شدند (`build`، `test`، `audit`، `doctor`، `sync --check`).
هر ادعای زیر یا خروجی فرمان دارد یا صریحاً «تأییدنشده» است.

## ۱) `back` (این ریپو) — از صفر
- **وضعیت قبل:** فقط `README.md` با متن `# back`، یک commit. هیچ کد، تست، CI یا جهتی وجود نداشت.
- **اقدام:** به مرکز ممیزی/بک‌اند تبدیل شد: API صفر-وابستگی (`projects/back`)، doctor ریشه
  (`tools/doctor.mjs`)، ممیزی upstream (`tools/audit-repos.mjs`)، تست قرارداد جریان (`tests/`) و CI.
- **ریسک باز:** هنوز deployment ندارد؛ نقش آن فعلاً محلی/CI است. تصمیم استقرار (Vercel/Worker) در ROADMAP.

## ۲) `bison-brand-book` (مستقل) — باگ واقعی پیدا و اصلاح شد
| # | یافته | شواهد | اصلاح (در `projects/bison-brand-book`) |
|---|---|---|---|
| B1 | لینک نسبی ZIP در ناوبری | تست ایستای نسخهٔ مونوریپو: **۷/۸** — `href="BISON-Brand-Book.zip"` از sub-path ‏404 می‌شود | `href="/BISON-Brand-Book.zip"` — حالا **۱۲/۱۲** |
| B2 | آسیب‌پذیری High در درخت کامل | `npm audit`: ‏`source-map-js 1.2.1` (GHSA-68fv-2mgg-jv7q) از postcss/vite | vite `^6.4.4` + `npm audit fix` → **۰ آسیب‌پذیری** (کامل و `--omit=dev`) |
| B3 | تست و CI نداشت | نبود `tests/`، اسکریپت `test` و `.github/` | تست ۱۲ موردی + `check`/`zip` scripts + CI ریشهٔ همین مخزن |
| B4 | فونت render-blocking | `@import` در ابتدای CSS | حذف `@import`؛ `<link>` با preconnect + `display=swap` + preload هیرو |
| B5 | دیالوگ زنده بدون focus trap | فقط Escape بسته می‌شد؛ فوکوس برنمی‌گشت | trap حلقهٔ Tab + بازگردانی فوکوس به opener + `.overlay[hidden]` |
| B6 | کپی رنگ در کانتکست ناامن خراب | `navigator.clipboard` روی http/file تعریف نشده | fallback ‏textarea+`execCommand`، پیام toast در هر دو حالت |
| B7 | SEO/اشتراک ناقص | نبود canonical/og:type/JSON-LD | افزوده شد؛ هیرو `fetchpriority=high` و بقیه `loading=lazy` |
- بیلد مرجع: `index.html 25.08 kB (gzip 5.98)`، JS ‏140.72 kB (gzip 52.99) — قابل قبول؛ تفکیک GSAP پیشنهاد P2 است.
- نکتهٔ انتشار: README مستقل به ZIP روی برنچ `arena/01a016c5-…` لینک می‌دهد؛ برنچ وجود دارد (۲۰۰/۳۰۲) ولی
  لینکِ وابسته به برنچ شکننده است — منبع canonical باید `main`/Release باشد.

## ۳) `MegaSkillClaude` — مونوریپوی بالغ، ریسک‌ها عمدتاً بیرون کدند
- **سلامت تأییدشده امروز:** `repo_health_check.sh` سبز، تست doctor (رگرسیون سبز-کاذب) سبز،
  `sync_skill_library.py --check` صفر اختلاف، تست normalization ‏۱۶/۱۶. معماری doctor/PROGRESS/directive الگوی درست است و به این مخزن هم منتقل شد.
- **۱۳ پروژه:** دستور جدا و وضعیت هرکدام در `projects/mega-skill-claude/directives/00..12`.
  مهم‌ترین ریسک‌ها: CHAM بدون بک‌اند/Auth/RLS (P0 داده)، Lithos ‏Buffer ‏`TODO(verify)`، Viking ‏RLS زنده،
  Hermes انتشار Worker، Mobile روی Safari واقعی — همه «کد سبز، سرویس تأییدنشده»اند و نباید سبز اعلام شوند.
- **۱۳ PR باز Dependabot** روی هم انباشته (دو Major vite، دو TS7، Remotion): ترتیب بستن امن در
  `projects/mega-skill-claude/patches/dependabot-order.md`.
- **۳ ایشوی باز بی‌متن** (`mega`، `megggggga`، `mega ai 3000`): triage لازم — یا بستن با ارجاع یا تبدیل به تسک مشخص.
- **تکثیر:** `triggers.json` ‏(۳٫۲MB) دو کپی، ZIP بیسون ۴٫۲MB در Git، ایندکس موبایل ۲٫۲MB — sync سالم است ولی
  سقف حجم و Git LFS/Release برای ZIP در نقشهٔ راه آمده.
- **دو نسخهٔ BISON** (مستقل و داخل مونوریپو) drift داشتند؛ پیشنهاد: مونوریپو canonical شود، مستقل پس از
  اتصال Vercel با Root Directory=`bison-brand-book`، Archive (نه حذف) شود.

## ۴) جمع‌بندی اولویت بین‌ریپویی
1. **P0:** تصمیم canonical بیسون + اتصال انتشارها به مونوریپو؛ CHAM تا بک‌اند امن نشود با دادهٔ حساس استفاده نشود.
2. **P1:** بستن پلکانی Dependabot؛ راستی‌آزمایی‌های زنده (Buffer، RLS وایکینگ، Worker هرمس، Safari موبایل) هرکدام به‌عنوان گیت جدا.
3. **P2:** بهینه‌سازی حجم (GSAP split، فشرده‌سازی ایندکس موبایل با اندازه‌گیری)، استقرار `back`.

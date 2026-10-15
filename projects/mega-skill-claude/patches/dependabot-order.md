# ترتیب امن بستن ۱۳ PR باز Dependabot در MegaSkillClaude (ممیزی ۲۰۲۶-۱۰-۱۵)

اصل: هر PR جدا، CI همان پروژه سبز، بدون merge گروهی. ارتقای Major هرگز با هم ترکیب نشود.

| گام | PR | ریسک | گیت قبل از merge |
|---|---|---|---|
| 1 | actions/setup-node 4→7, setup-python 5→7, checkout 4→7, upload-artifact 4→7 | کم (CI) | CI ریشه سبز روی همان PR |
| 2 | playwright-core 1.63→1.64 (fjcod) | کم | `node scripts/doctor.mjs fjcod` + e2e |
| 3 | lucide-react 0.540→1.55 (fjcod) ⚠️ Major | متوسط: API آیکون | typecheck+test+build+e2e، بازبینی بصری |
| 4 | vite 6.4.4→8.3.4 (lithos)، vite 6.4.3→8.3.4 (bison) ⚠️ Major | متوسط | doctor هر پروژه + build + تست ایستا |
| 5 | vite 7.3.6→8.3.4 + @vitejs/plugin-react 5→6 (fjcod) ⚠️ Major | بالا | `npm run check` کامل + e2e مرورگری |
| 6 | typescript 5.9→7 (fjcod)، 5.6→7 (motion) ⚠️ Major | بالا | typecheck strict هر دو؛ TS7 را آخر ببرید |
| 7 | remotion 4.0.506→4.0.534 + react/react-dom (motion) | متوسط | typecheck + رندر نمونه، نه فقط CI |

قاعده توقف: اگر گیت قرمز شد، PR را همان‌جا نگه دار؛ با `--admin` یا غیرفعال‌کردن تست رد نشو.

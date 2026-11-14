// Level 2 — Microsoft Excel (assembled from part files)
import { PART1 } from './level02part1.js';
import { PART2 } from './level02part2.js';

export default {
  id: 'L2',
  num: 2,
  name: { en: 'Microsoft Excel', ar: 'مايكروسوفت إكسل' },
  goal: {
    en: 'Become genuinely proficient in Excel for data entry and analysis: organizing, formulas, logic, lookups, text, dates and reporting.',
    ar: 'الإتقان الحقيقي لـ Excel في إدخال البيانات والتحليل: التنظيم، والصيغ، والمنطق، والبحث، والنصوص، والتواريخ، والتقارير.',
  },
  icon: '📗',
  modules: [...PART1, ...PART2],
  exam: {
    questions: [
      {
        type: 'mcq',
        q: { en: 'Which formula totals only Jeddah rows from D2:D100 where city column is C?', ar: 'أي صيغة تجمع صفوف جدة فقط من D2:D100 حيث عمود المدينة C؟' },
        options: [ { en: '=SUMIF(C2:C100, "Jeddah", D2:D100)', ar: '=SUMIF(C2:C100, "Jeddah", D2:D100)' }, { en: '=SUM(D2:D100)', ar: '=SUM(D2:D100)' }, { en: '=COUNTIF(C2:C100, "Jeddah")', ar: '=COUNTIF(C2:C100, "Jeddah")' }, { en: '=SUMIFS(C2:C100, "Jeddah", D2:D100)', ar: '=SUMIFS(C2:C100, "Jeddah", D2:D100)' } ],
        answer: 0,
        explain: { en: 'SUMIF: condition range, criterion, sum range.', ar: '‏SUMIF: نطاق الشرط ثم المعيار ثم نطاق الجمع.' },
      },
      {
        type: 'mcq',
        q: { en: 'In SUMIFS, the sum range is argument number…', ar: 'في SUMIFS يكون نطاق الجمع هو المعامل رقم…' },
        options: [ { en: '1 (first)', ar: '1 (الأول)' }, { en: '2', ar: '2' }, { en: '3', ar: '3' }, { en: 'Last', ar: 'الأخير' } ],
        answer: 0,
        explain: { en: 'SUMIFS(sum_range, range1, criteria1, ...) — sum range first, unlike SUMIF.', ar: 'SUMIFS(نطاق_الجمع، نطاق1، معيار1، ...) — النطاق أولاً بخلاف SUMIF.' },
      },
      {
        type: 'tf',
        q: { en: 'VLOOKUP with FALSE finds exact matches only.', ar: '‏VLOOKUP مع FALSE تجد المطابقات التامة فقط.' },
        options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
        answer: 0,
        explain: { en: 'True — FALSE (or 0) requires an exact match, which is correct for IDs.', ar: 'صح — ‏FALSE (أو 0) تتطلب مطابقة تامة وهو الصواب للمعرفات.' },
      },
      {
        type: 'formula',
        q: { en: 'Write the formula that returns the value in C2:C50 at the position where A2:A50 equals A2 (lowercase).', ar: 'اكتب الصيغة التي تعيد من C2:C50 القيمة عند الموضع الذي يساوي فيه A2:A50 قيمة A2 (أحرف صغيرة).' },
        accept: ['=index(c2:c50,match(a2,a2:a50,0))'],
        explain: { en: 'The INDEX+MATCH pattern.', ar: 'نمط INDEX+MATCH.' },
      },
      {
        type: 'num',
        q: { en: '=ROUND(AVERAGE(10, 25, 45), 0) equals…', ar: 'ما ناتج =ROUND(AVERAGE(10, 25, 45), 0)؟' },
        answer: 27,
        tolerance: 0.01,
        explain: { en: 'Average = 80/3 ≈ 26.67 → rounds to 27.', ar: 'المتوسط = 80/3 ≈ 26.67 ← يقرب إلى 27.' },
      },
      {
        type: 'fill',
        q: { en: 'The Excel feature that summarizes data by dragging fields into rows and values is the ______ Table.', ar: 'الميزة التي تلخص البيانات بسحب الحقول إلى صفوف وقيم هي الجدول ______.', },
        accept: ['pivot'],
        explain: { en: 'Pivot Table.', ar: 'الجدول المحوري (Pivot Table).' },
      },
      {
        type: 'mcq',
        q: { en: 'Which combination removes hidden spaces and line breaks from imported text?', ar: 'أي تركيبة تزيل المسافات المخفية وفواصل الأسطر من النص المستورد؟' },
        options: [ { en: '=TRIM(CLEAN(A2))', ar: '=TRIM(CLEAN(A2))' }, { en: '=UPPER(A2)', ar: '=UPPER(A2)' }, { en: '=LEN(A2)', ar: '=LEN(A2)' }, { en: '=LEFT(A2, 5)', ar: '=LEFT(A2, 5)' } ],
        answer: 0,
        explain: { en: 'CLEAN strips non-printing characters; TRIM strips extra spaces.', ar: '‏CLEAN تزيل الحروف غير القابلة للطباعة وTRIM تزيل المسافات الزائدة.' },
      },
      {
        type: 'mcq',
        q: { en: 'To keep the leading zero in phone numbers you should…', ar: 'للحفاظ على الصفر في أرقام الهواتف يجب…' },
        options: [ { en: 'Store them as text', ar: 'تخزينها كنص' }, { en: 'Use percentage format', ar: 'استخدام تنسيق النسبة' }, { en: 'Multiply by 10', ar: 'الضرب في 10' }, { en: 'Use VLOOKUP', ar: 'استخدام VLOOKUP' } ],
        answer: 0,
        explain: { en: 'Number format drops leading zeros; text keeps them.', ar: 'تنسيق الأرقام يأسق الأصفار؛ والنص يحفظها.' },
      },
    ],
  },
};

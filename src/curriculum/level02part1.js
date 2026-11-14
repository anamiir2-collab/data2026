// Level 2 — Microsoft Excel (part 1: modules 1–5)
export const PART1 = [
  {
    id: 'L2M1',
    name: { en: 'Excel Fundamentals', ar: 'أساسيات Excel' },
    lessons: [
      {
        id: 'L2M1L1',
        title: { en: 'The Excel Interface, Workbooks and Worksheets', ar: 'واجهة Excel والملفات وأوراق العمل' },
        minutes: 11,
        description: {
          en: 'Open Excel for the first time with confidence: the Ribbon, workbooks, worksheets, rows, columns, cells and ranges.',
          ar: 'افتح Excel لأول مرة بثقة: الشريط، وملفات العمل، وأوراق العمل، والصفوف والأعمدة، والخلايا والنطاقات.',
        },
        objectives: [
          { en: 'Navigate the Excel interface: Ribbon, Formula Bar, Name Box', ar: 'التنقل في واجهة Excel: الشريط وشريط الصيغة ومربع الاسم' },
          { en: 'Understand workbooks, worksheets, rows, columns and cells', ar: 'فهم ملفات العمل وأوراق العمل والصفوف والأعمدة والخلايا' },
          { en: 'Reference cells and ranges correctly (A1, B2:B13)', ar: 'الإشارة الصحيحة للخلايا والنطاقات (A1، B2:B13)' },
        ],
        body: {
          en: 'A **workbook** is the Excel file itself (.xlsx). Inside it are **worksheets** (tabs, like Sheet1, Sheet2). Data lives in a grid: **columns** are letters (A, B, C...) and **rows** are numbers (1, 2, 3...).\n\n### Cells and ranges\nA **cell** is one box, addressed by column+row: A1, C7. A **range** is a block of cells written as first:last — B2:B13 means "from B2 down to B13" (12 cells). Ranges are what formulas work on.\n\n### The interface\n- **Ribbon**: tabs (Home, Insert, Data, Formulas...) with grouped commands.\n- **Name Box** (left of the formula bar): shows the selected cell address; type B2 there to jump.\n- **Formula Bar**: shows the real content of the selected cell — when a cell shows 1,250 it may actually contain =SUM(B2:B13).\n- **Status bar** (bottom): instant Sum/Average/Count of selected cells — a free calculator.\n\n### Essential shortcuts\n- Ctrl+Home → jump to A1; Ctrl+arrows → jump to the edge of data.\n- Ctrl+S save; Ctrl+Z undo; Ctrl+C / Ctrl+V copy/paste.\n\n> TIP: Learn addresses early. "=SUM(A1:A9)" is read as: sum the values from cell A1 through cell A9.',
          ar: '**ملف العمل** (Workbook) هو ملف Excel نفسه (.xlsx). داخله **أوراق العمل** (Worksheets، تبويبات مثل Sheet1 وSheet2). تعيش البيانات في شبكة: **الأعمدة** حروف (A، B، C...) و**الصفوف** أرقام (1، 2، 3...).\n\n### الخلايا والنطاقات\n**الخلية** (Cell) مربع واحد، وعنوانها عمود+صف: A1 وC7. **النطاق** (Range) كتلة خلايا تُكتب بالشكل الأول:الأخير — B2:B13 تعني "من B2 حتى B13" (12 خلية). النطاقات هي ما تعمل عليه الصيغ.\n\n### الواجهة\n- **الشريط** (Ribbon): تبويبات (Home وInsert وData وFormulas...) بأوامر مجمعة.\n- **مربع الاسم** (يسار شريط الصيغة): يعرض عنوان الخلية المحددة؛ اكتب B2 فيه للقفز إليها.\n- **شريط الصيغة**: يعرض المحتوى الحقيقي للخلية — الخلية التي تظهر 1,250 قد تحتوي فعلاً =SUM(B2:B13).\n- **شريط الحالة** (أسفل): مجموع/متوسط/عدد فوري للخلايا المحددة — آلة حاسبة مجانية.\n\n### اختصارات أساسية\n- Ctrl+Home للقفز إلى A1؛ وCtrl+الأسهم للقفز إلى حافة البيانات.\n- Ctrl+S حفظ؛ Ctrl+Z تراجع؛ Ctrl+C / Ctrl+V نسخ ولصق.\n\n> TIP: تعلم العناوين مبكراً. "=SUM(A1:A9)" تُقرأ: اجمع القيم من الخلية A1 إلى الخلية A9.',
          },
          terms: [
            { en: 'Workbook', ar: 'ملف العمل', def: { en: 'The Excel file; contains one or more worksheets.', ar: 'ملف Excel؛ يحتوي ورقة عمل واحدة أو أكثر.' } },
            { en: 'Worksheet', ar: 'ورقة العمل', def: { en: 'One tab inside the workbook with its own grid.', ar: 'تبويب واحد داخل ملف العمل بشبكته الخاصة.' } },
            { en: 'Cell Reference', ar: 'مرجع الخلية', def: { en: 'A cell address like A1 used in formulas.', ar: 'عنوان خلية مثل A1 يُستخدم في الصيغ.' } },
            { en: 'Range', ar: 'نطاق', def: { en: 'A block of cells written as B2:B13.', ar: 'كتلة خلايا تُكتب B2:B13.' } },
          ],
          examples: [
            {
              title: { en: 'Reading the status bar', ar: 'قراءة شريط الحالة' },
              body: {
                en: 'Select C2:C9 holding 8 prices. Look at the bottom bar: Sum 12,340, Average 1,542.5, Count 8 — three statistics without typing any formula.',
                ar: 'حدد C2:C9 وفيها 8 أسعار. انظر للشريط السفلي: Sum 12,340، Average 1,542.5، Count 8 — ثلاث إحصائيات دون كتابة أي صيغة.',
              },
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'How do you write (in A1-style) the range from column B row 2 to column B row 13? Type it exactly, no spaces.',
              ar: 'كيف تكتب (بنمط A1) النطاق من العمود B الصف 2 إلى العمود B الصف 13؟ اكتبه تماماً دون مسافات.',
            },
            accept: ['b2:b13'],
            solution: { en: 'B2:B13', ar: '‏B2:B13' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'What does B2:B13 mean?', ar: 'ماذا تعني B2:B13؟' },
              options: [
                { en: 'All cells from B2 to B13 inclusive', ar: 'كل الخلايا من B2 إلى B13 شاملة الطرفين' },
                { en: 'Only cells B2 and B13', ar: 'الخليتان B2 وB13 فقط' },
                { en: 'Cell B2 multiplied by B13', ar: 'خلية B2 مضروبة في B13' },
                { en: 'A worksheet named B13', ar: 'ورقة عمل اسمها B13' },
              ],
              answer: 0,
              explain: { en: 'Colon means "through" — the whole block between the two addresses.', ar: 'النقطتان تعنيان "حتى" — الكتلة كلها بين العنوانين.' },
            },
            {
              type: 'mcq',
              q: { en: 'The bar that shows the REAL content of a cell (like =SUM(A1:A9)) is…', ar: 'الشريط الذي يعرض المحتوى الحقيقي للخلية (مثل =SUM(A1:A9)) هو…' },
              options: [ { en: 'The Formula Bar', ar: 'شريط الصيغة' }, { en: 'The Status Bar', ar: 'شريط الحالة' }, { en: 'The Name Box', ar: 'مربع الاسم' }, { en: 'The Ribbon', ar: 'الشريط الرئيسي' } ],
              answer: 0,
              explain: { en: 'The Formula Bar shows formulas; the grid shows results.', ar: 'شريط الصيغة يعرض الصيغ؛ والشبكة تعرض النتائج.' },
            },
            {
              type: 'tf',
              q: { en: 'Columns are numbered and rows are lettered in Excel.', ar: 'الأعمدة مرقمة والصفوف بحروف في Excel.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — the opposite: columns are letters (A, B, C), rows are numbers (1, 2, 3).', ar: 'خطأ — العكس: الأعمدة حروف (A، B، C) والصفوف أرقام (1، 2، 3).' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L2M1L2',
          title: { en: 'Data Types, Number/Date Formatting and Excel Tables', ar: 'أنواع البيانات وتنسيق الأرقام والتواريخ وجداول Excel' },
          minutes: 12,
          description: {
            en: 'Enter data with the right types and formats, then upgrade ranges into smart Excel Tables.',
            ar: 'أدخل البيانات بأنواعها وصيغها الصحيحة، ثم ارقِ النطاقات إلى جداول Excel الذكية.',
          },
          objectives: [
            { en: 'Enter numbers, text, dates and booleans correctly', ar: 'إدخال الأرقام والنصوص والتواريخ والقيم المنطقية بشكل صحيح' },
            { en: 'Apply number, currency and date formatting', ar: 'تطبيق تنسيق الأرقام والعملة والتواريخ' },
            { en: 'Create an Excel Table and use its benefits', ar: 'إنشاء جدول Excel والاستفادة من مزاياه' },
          ],
          body: {
            en: '### Data types in cells\n- **Numbers**: right-aligned by default; usable in calculations. If a "number" is left-aligned, Excel stored it as text (fix later with Text to Columns or VALUE).\n- **Text**: names, codes, phone numbers (phones keep the leading zero as text!).\n- **Dates**: type 2025-03-14 and Excel makes a real date you can sort and calculate.\n- **TRUE/FALSE**: boolean values.\n\n### Formatting vs value\nFormatting changes appearance, not the stored value. 0.154 formatted as percentage shows 15.4% but stays 0.154 — formulas use the real value. Currency format adds "SAR" display without touching the number.\n\n### Excel Tables\nSelect your range → Insert → Table (or Ctrl+T). Tables give you:\n- Automatic filter buttons on headers.\n- Formulas auto-filling to new rows.\n- Structured references (Table[Price] instead of C2:C500).\n- One-click totals row.\n\n> TIP: Tables are the foundation for sorting, filtering and Pivot Tables. Convert your data to a Table before doing anything else.',
          ar: '### أنواع البيانات في الخلايا\n- **الأرقام**: تُحاذى يميناً افتراضياً وتصلح للحساب. إذا كان "الرقم" محاذى يساراً فقد خزّنه Excel كنص (يُصلح لاحقاً بـ Text to Columns أو VALUE).\n- **النص**: الأسماء والأكواد وأرقام الهواتف (الهواتف تبقي الصفر كنص!).\n- **التواريخ**: اكتب 2025-03-14 فيصنع Excel تاريخاً حقيقياً يمكن ترتيبه وحسابه.\n- **TRUE/FALSE**: قيم منطقية.\n\n### التنسيق مقابل القيمة\nالتنسيق يغير المظهر لا القيمة المخزنة. العدد 0.154 منسقاً كنسبة يظهر 15.4% لكنه يبقى 0.154 — والصيغ تستخدم القيمة الحقيقية. وتنسيق العملة يضيف عرض "SAR" دون المساس بالرقم.\n\n### جداول Excel Tables\nحدد النطاق ← Insert ← Table (أو Ctrl+T). الجداول تمنحك:\n- أزرار فلترة تلقائية على العناوين.\n- امتلاء الصيغ تلقائياً للصفوف الجديدة.\n- مراجع منظمة (Table[Price] بدل C2:C500).\n- صف إجماليات بنقرة واحدة.\n\n> TIP: الجداول هي أساس الترتيب والفلترة وPivot Tables. حوّل بياناتك إلى Table قبل أي شيء آخر.',
          },
          terms: [
            { en: 'Excel Table', ar: 'جدول Excel', def: { en: 'A named, structured range with filters and auto-expanding formulas.', ar: 'نطاق منظم مسمى بفلاتر وصيغ تتوسع تلقائياً.' } },
            { en: 'Number Formatting', ar: 'تنسيق الأرقام', def: { en: 'Changing how a value displays (currency, percent, decimals) without changing the value.', ar: 'تغيير طريقة عرض القيمة (عملة أو نسبة أو كسور) دون تغيير القيمة.' } },
            { en: 'Structured Reference', ar: 'المرجع المنظم', def: { en: 'Table-based reference like Sales[Amount] that survives adding rows.', ar: 'مرجع مبني على الجدول مثل Sales[Amount] يصمد عند إضافة صفوف.' } },
          ],
          examples: [
            {
              title: { en: 'The leading-zero trap', ar: 'مصيدة الصفر المفقود' },
              body: {
                en: 'Typing 0501234567 as a number shows 501234567 — the zero vanished. Phones, ID numbers and invoice codes must be entered as TEXT (format the column as Text first, or start with an apostrophe \u0027501234567\u0027).',
                ar: 'كتابة 0501234567 كرقم تظهر 501234567 — الصفر اختفى. الهواتف وأرقام الهوية وأكواد الفواتير يجب إدخالها كنص (نسّق العمود كنص أولاً، أو ابدأ بعلامة اقتباس مفردة \u0027501234567\u0027).',
              },
            },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'In Excel (or the Excel Lab sheet): create a small table of 5 products with Units and Price columns, convert it to an Excel Table, and format Price with currency.',
              ar: 'في Excel (أو ورقة معمل Excel): أنشئ جدولاً صغيراً من 5 منتجات بأعمدة Units وPrice، وحوّله إلى Excel Table، ونّسق Price كعملة.',
            },
            confirm: [
              { en: 'I created a 5-row table with Units and Price', ar: 'أنشأت جدولاً من 5 صفوف بأعمدة Units وPrice' },
              { en: 'I converted it to an Excel Table with Ctrl+T', ar: 'حولته إلى Excel Table بـ Ctrl+T' },
              { en: 'I applied currency formatting to Price', ar: 'طبقت تنسيق العملة على Price' },
            ],
            solution: {
              en: 'Steps: type headers Product/Units/Price → fill 5 rows → select all → Ctrl+T → OK → select Price column → Home → Number Format → Currency.',
              ar: 'الخطوات: اكتب العناوين Product/Units/Price ← عبّئ 5 صفوف ← حدد الكل ← Ctrl+T ← OK ← حدد عمود Price ← Home ← Number Format ← Currency.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'A cell shows 15.4% after you typed 0.154 and applied percentage format. What is stored?', ar: 'خلية تظهر 15.4% بعد إدخال 0.154 وتطبيق تنسيق النسبة. ما المخزن؟' },
              options: [ { en: '0.154', ar: '0.154' }, { en: '15.4', ar: '15.4' }, { en: '15.4%', ar: '15.4%' }, { en: '154', ar: '154' } ],
              answer: 0,
              explain: { en: 'Formatting changes display only; the stored value stays 0.154.', ar: 'التنسيق يغير العرض فقط؛ القيمة المخزنة تبقى 0.154.' },
              mistake: { en: 'Typing 15.4% then wondering why SUM of percentages is wrong — percent display is cosmetic.', ar: 'كتابة 15.4% ثم التساؤل عن خطأ مجموع النسب — عرض النسبة تجميلي.' },
            },
            {
              type: 'mcq',
              q: { en: 'Which shortcut converts a selected range into an Excel Table?', ar: 'أي اختصار يحول النطاق المحدد إلى Excel Table؟' },
              options: [ { en: 'Ctrl+T', ar: 'Ctrl+T' }, { en: 'Ctrl+P', ar: 'Ctrl+P' }, { en: 'Ctrl+D', ar: 'Ctrl+D' }, { en: 'Ctrl+F', ar: 'Ctrl+F' } ],
              answer: 0,
              explain: { en: 'Ctrl+T opens the Table dialog.', ar: '‏Ctrl+T يفتح نافذة الجدول.' },
            },
            {
              type: 'fill',
              q: { en: 'To keep the leading zero of phone 0501234567, enter it as ______.', ar: 'للحفاظ على الصفر في الهاتف 0501234567 أدخله كـ ______.', },
              accept: ['text', 'نص'],
              explain: { en: 'As text — numbers drop the leading zero.', ar: 'كنص (Text) — الأرقام تسقط الصفر الأول.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L2M2',
      name: { en: 'Data Organization', ar: 'تنظيم البيانات' },
      lessons: [
        {
          id: 'L2M2L1',
          title: { en: 'Sorting, Filtering, Find & Replace, Remove Duplicates and Data Validation', ar: 'الترتيب والفلترة والبحث والاستبدال وإزالة التكرار والتحقق' },
          minutes: 12,
          description: {
            en: 'The daily organizing toolkit: sort, filter, find and replace, remove duplicates, and validation rules.',
            ar: 'صندوق أدوات التنظيم اليومي: الترتيب والفلترة والبحث والاستبدال وإزالة التكرار وقواعد التحقق.',
          },
          objectives: [
            { en: 'Sort by one or multiple columns correctly', ar: 'الترتيب بعمود واحد أو عدة أعمدة بشكل صحيح' },
            { en: 'Filter data and use Find & Replace safely', ar: 'فلترة البيانات واستخدام البحث والاستبدال بأمان' },
            { en: 'Remove duplicates and add validation lists', ar: 'إزالة التكرار وإضافة قوائم تحقق' },
          ],
          body: {
            en: '### Sorting\nSelect one cell in the column → Data → Sort A→Z (or Z→A). For multi-level sorting use Data → Sort → Add Level: e.g. sort by City A→Z, then by Amount largest first. **Danger**: selecting a single COLUMN then sorting can scramble rows — sort from a cell inside the table, or convert to a Table first.\n\n### Filtering\nData → Filter (Ctrl+Shift+L) adds dropdowns on headers. Filter City = Riyadh and you see only Riyadh rows; the hidden rows stay in the file. Number filters (Greater Than 1000) and text filters (Begins With "INV") are equally useful.\n\n### Find & Replace (Ctrl+H)\nFix systematic errors fast: replace "SR " with "" in prices, "Ryiadh" with "Riyadh". **Always click Replace All on a copy first** — replacing "1" with "10" would also hit 112 → 1012.\n\n### Remove Duplicates\nData → Remove Duplicates → tick the columns that identify a real duplicate (e.g. Phone + Name). Excel deletes extra rows and reports how many were removed.\n\n### Data Validation\nData → Data Validation → Allow: List → source: Riyadh,Jeddah,Dammam (or a range). Now the cell only accepts those values — the strongest anti-error tool at entry time.\n\n> TIP: Order matters: filter first to see the problem, then sort to group it, then fix it with validation for the future.',
          ar: '### الترتيب\nحدد خلية واحدة داخل العمود ← Data ← Sort A→Z (أو Z→A). للترتيب متعدد المستويات: Data ← Sort ← Add Level: مثلاً ترتيب بالمدينة A→Z ثم بالمبلغ تنازلياً. **تحذير**: تحديد عمود واحد ثم الترتيب قد يخربط الصفوف — رتّب من خلية داخل الجدول أو حوّل البيانات إلى Table أولاً.\n\n### الفلترة\n‏Data ← Filter (Ctrl+Shift+L) تضيف قوائم منسدلة على العناوين. فلتر City = Riyadh فترى صفوف الرياض فقط؛ والصفوف المخفية تبقى في الملف. وفلاتر الأرقام (Greater Than 1000) والنصوص (Begins With "INV") مفيدة بالمثل.\n\n### البحث والاستبدال (Ctrl+H)\nأصلح الأخطاء المنهجية سريعاً: استبدل "SR " بـ"" في الأسعار، و"الريض" بـ"الرياض". **جرّب Replace All على نسخة أولاً دائماً** — فاستبدال "1" بـ"10" يصيب 112 فتصبح 1012.\n\n### إزالة التكرار\n‏Data ← Remove Duplicates ← علّم الأعمدة التي تحدد التكرار الحقيقي (مثل Phone + Name). يحذف Excel الصفوف الزائدة ويخبرك بعدد ما حذف.\n\n### التحقق من البيانات\n‏Data ← Data Validation ← Allow: List ← source: الرياض,جدة,الدمام (أو نطاق). الآن لا تقبل الخلية إلا هذه القيم — أقوى أداة ضد الأخطاء وقت الإدخال.\n\n> TIP: الترتيب مهم: فلتر أولاً لترى المشكلة، ثم رتّب لتجمعها، ثم أصلح سببها بتحقق مستقبلي.',
          },
          terms: [
            { en: 'Filter', ar: 'الفلتر', def: { en: 'Temporarily hiding rows that do not match a condition.', ar: 'إخفاء مؤقت للصفوف غير المطابقة لشرط.' } },
            { en: 'Remove Duplicates', ar: 'إزالة التكرار', def: { en: 'Excel command that deletes repeated rows based on chosen columns.', ar: 'أمر في Excel يحذف الصفوف المكررة بناءً على أعمدة مختارة.' } },
            { en: 'Data Validation', ar: 'التحقق من البيانات', def: { en: 'Rules restricting what a cell accepts: lists, ranges, dates.', ar: 'قواعد تقيّد ما تقبله الخلية: قوائم أو نطاقات أو تواريخ.' } },
          ],
          examples: [
            {
              title: { en: 'Top 5 cities by sales', ar: 'أفضل 5 مدن بالمبيعات' },
              body: {
                en: 'Sort Amount largest→smallest, then read the first 5 rows: Riyadh 48,200 / Jeddah 39,750 / Dammam 22,300 / Khobar 12,900 / Makkah 9,400. No formula needed.',
                ar: 'رتّب Amount من الأكبر للأصغر ثم اقرأ أول 5 صفوف: الرياض 48,200 / جدة 39,750 / الدمام 22,300 / الخبر 12,900 / مكة 9,400. دون أي صيغة.',
              },
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Which Excel command deletes rows that repeat the same Phone + Name combination? Type the command name (three words, lowercase, starting with remove).',
              ar: 'أي أمر في Excel يحذف الصفوف التي تكرر نفس Phone + Name؟ اكتب اسم الأمر (ثلاث كلمات بأحرف صغيرة تبدأ بـ remove).',
            },
            accept: ['remove duplicates', 'remove duplicate'],
            solution: { en: 'Remove Duplicates (Data tab).', ar: '‏Remove Duplicates (تبويب Data).' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'You selected ONLY column B and sorted it. What risk?', ar: 'حددت العمود B فقط ورتّبته. ما الخطر؟' },
              options: [
                { en: 'Rows become misaligned with their other data', ar: 'تنفصل الصفوف عن بقية بياناتها' },
                { en: 'Excel deletes the column', ar: 'يحذف Excel العمود' },
                { en: 'Nothing can go wrong', ar: 'لا شيء يحدث' },
                { en: 'The file closes automatically', ar: 'يُغلق الملف تلقائياً' },
              ],
              answer: 0,
              explain: { en: 'Sorting a single column sorts it independently, breaking row integrity. Sort from a cell inside the whole table.', ar: 'ترتيب عمود منفصل يرتبه وحده فيفسد اكتمال الصفوف. رتّب من خلية داخل الجدول كاملاً.' },
              mistake: { en: 'Sort with headers included: "City" sorts alphabetically into the data.', ar: 'الترتيب مع تضمين العنوان: كلمة "City" تدخل الترتيب الأبجدي مع البيانات.' },
            },
            {
              type: 'tf',
              q: { en: 'Filtering hides rows permanently — the hidden data is deleted.', ar: 'الفلترة تخفي الصفوف نهائياً — البيانات المخفية تُحذف.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — filters only hide; clearing the filter brings every row back.', ar: 'خطأ — الفلاتر تخفي فقط؛ وإزالة الفلتر تعيد كل الصفوف.' },
            },
            {
              type: 'fill',
              q: { en: 'The Excel shortcut that opens Find and Replace is Ctrl+______.', ar: 'الاختصار الذي يفتح البحث والاستبدال في Excel هو Ctrl+______.', },
              accept: ['h'],
              explain: { en: 'Ctrl+H opens Find and Replace (Ctrl+F only finds).', ar: '‏Ctrl+H يفتح البحث والاستبدال (وCtrl+F للبحث فقط).' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L2M2L2',
          title: { en: 'Conditional Formatting, Text to Columns, Flash Fill, Freeze Panes and Protection', ar: 'التنسيق الشرطي وText to Columns وFlash Fill وتثبيت اللوحات والحماية' },
          minutes: 12,
          description: {
            en: 'Level up your organizing: highlight problems automatically, split text, fill patterns, freeze headers and protect sheets.',
            ar: 'ارتقِ بالتنظيم: أبرز المشكلات تلقائياً، وقسّم النصوص، واملأ الأنماط، وثبّت العناوين، واحمِ الأوراق.',
          },
          objectives: [
            { en: 'Apply conditional formatting rules for highlights', ar: 'تطبيق قواعد التنسيق الشرطي للتظليل' },
            { en: 'Split text with Text to Columns and Flash Fill', ar: 'تقسيم النصوص بـ Text to Columns وFlash Fill' },
            { en: 'Freeze panes and protect worksheets', ar: 'تثبيت اللوحات وحماية الأوراق' },
          ],
          body: {
            en: '### Conditional Formatting\nHome → Conditional Formatting → Highlight Cells Rules → Less Than 0 → red fill. Now every negative number glows instantly. Other rules: Greater Than, Between, Duplicate Values, Top 10. Use it to make problems visually jump out — late payments, low stock, empty cells.\n\n### Text to Columns\nOne column holds "Ahmad Ali, Riyadh, 0501234567". Select it → Data → Text to Columns → Delimited → Comma → Excel splits it into Name / City / Phone across three columns. Also fixes numbers stored as text (Delimited → Finish converts them).\n\n### Flash Fill (Ctrl+E)\nType the desired result for the first row ("Ahmad" from "Ahmad Ali"), press Ctrl+E and Excel learns your pattern and fills the rest. Perfect for extracting first names, codes or reformatting.\n\n### Freeze Panes\nView → Freeze Panes → Freeze Top Row: headers stay visible while you scroll through 3,000 rows.\n\n### Sheet Protection\nReview → Protect Sheet with a password: colleagues can look but not edit — or allow editing only specific unlocked cells. Protects structure, not security against determined attackers.\n\n> TIP: Conditional Formatting "Duplicate Values" + Remove Duplicates = find duplicates visually first, then clean them.',
          ar: '### التنسيق الشرطي\n‏Home ← Conditional Formatting ← Highlight Cells Rules ← Less Than 0 ← تعبئة حمراء. الآن كل رقم سالب يتوهج فوراً. قواعد أخرى: Greater Than وBetween وDuplicate Values وTop 10. استخدمه لجعل المشكلات تقفز للعين — مدفوعات متأخرة، مخزون منخفض، خلايا فارغة.\n\n### Text to Columns\nعمود واحد يحتوي "أحمد علي، الرياض، 0501234567". حدده ← Data ← Text to Columns ← Delimited ← Comma ← يقسمه Excel إلى Name / City / Phone في ثلاثة أعمدة. ويصلح أيضاً الأرقام المخزنة كنص (Delimited ← Finish لتحويلها).\n\n### Flash Fill (Ctrl+E)\nاكتب النتيجة المرادة لأول صف ("أحمد" من "أحمد علي") واضغط Ctrl+E فيتعلم Excel النمط ويملأ الباقي. مثالي لاستخراج الأسماء الأولى أو الأكواد أو إعادة التنسيق.\n\n### تثبيت اللوحات\n‏View ← Freeze Panes ← Freeze Top Row: تبقى العناوين مرئية أثناء التمرير في 3000 صف.\n\n### حماية الورقة\n‏Review ← Protect Sheet بكلمة مرور: الزملاء يرون دون تعديل — أو اسمح بالتعديل في خلايا محددة فقط. تحمي البنية، ولا تحمي من مهاجم متعمد.\n\n> TIP: قاعدة "Duplicate Values" في التنسيق الشرطي + Remove Duplicates = اكتشف التكرار بصرياً أولاً ثم نظّفه.',
          },
          terms: [
            { en: 'Conditional Formatting', ar: 'التنسيق الشرطي', def: { en: 'Automatic cell styling based on rules and values.', ar: 'تنسيق تلقائي للخلايا بناءً على قواعد وقيم.' } },
            { en: 'Text to Columns', ar: 'تقسيم النص إلى أعمدة', def: { en: 'Wizard that splits one column into several by a delimiter or width.', ar: 'معالج يقسم عموداً واحداً إلى عدة أعمدة بفاصل أو بعرض ثابت.' } },
            { en: 'Flash Fill', ar: 'الملء التلقائي الذكي', def: { en: 'Excel feature (Ctrl+E) that learns a pattern from one example and fills the rest.', ar: 'ميزة في Excel (Ctrl+E) تتعلم نمطاً من مثال واحد وتملأ الباقي.' } },
            { en: 'Freeze Panes', ar: 'تثبيت اللوحات', def: { en: 'Keeping rows/columns visible while scrolling.', ar: 'إبقاء صفوف أو أعمدة ظاهرة أثناء التمرير.' } },
          ],
          examples: [
            {
              title: { en: 'Highlighting overdue invoices', ar: 'تظليل الفواتير المتأخرة' },
              body: {
                en: 'Rule: cell value less than TODAY() → red. Applied to the Due Date column, every overdue invoice turns red without any manual marking — and updates itself every day.',
                ar: 'القاعدة: قيمة الخلية أقل من TODAY() ← أحمر. طبقها على عمود تاريخ الاستحقاق فتتحول كل فاتورة متأخرة للأحمر دون تعليم يدوي — وتتحدث ذاتياً كل يوم.',
              },
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Which shortcut triggers Flash Fill? Type it like ctrl+e (lowercase).',
              ar: 'أي اختصار يشغّل Flash Fill؟ اكتبه بالشكل ctrl+e (أحرف صغيرة).',
            },
            accept: ['ctrl+e'],
            solution: { en: 'Ctrl+E — after typing one example of the pattern.', ar: '‏Ctrl+E — بعد كتابة مثال واحد للنمط.' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'A column holds "Riyadh-0501234567". Which feature splits city and phone?', ar: 'عمود يحتوي "الرياض-0501234567". أي ميزة تفصل المدينة عن الهاتف؟' },
              options: [ { en: 'Text to Columns with "-" as delimiter', ar: 'Text to Columns مع الفاصل "-"' }, { en: 'Freeze Panes', ar: 'تثبيت اللوحات' }, { en: 'Protect Sheet', ar: 'حماية الورقة' }, { en: 'Number Format', ar: 'تنسيق الأرقام' } ],
              answer: 0,
              explain: { en: 'Text to Columns splits by any delimiter like dash, comma or space.', ar: '‏Text to Columns يقسم بأي فاصل مثل الشرطة أو الفاصلة أو المسافة.' },
            },
            {
              type: 'mcq',
              q: { en: 'Which feature keeps headers visible while scrolling?', ar: 'أي ميزة تبقي العناوين ظاهرة أثناء التمرير؟' },
              options: [ { en: 'Freeze Panes', ar: 'تثبيت اللوحات' }, { en: 'Filter', ar: 'الفلتر' }, { en: 'Flash Fill', ar: 'الملء الذكي' }, { en: 'Remove Duplicates', ar: 'إزالة التكرار' } ],
              answer: 0,
              explain: { en: 'Freeze Top Row under View → Freeze Panes.', ar: '‏Freeze Top Row من قائمة View ← Freeze Panes.' },
            },
            {
              type: 'tf',
              q: { en: 'Conditional formatting can highlight duplicate values automatically.', ar: 'يمكن للتنسيق الشرطي تظليل القيم المكررة تلقائياً.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: 'Yes — Highlight Cells Rules → Duplicate Values.', ar: 'نعم — Highlight Cells Rules ← Duplicate Values.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L2M3',
      name: { en: 'Basic Formulas', ar: 'الصيغ الأساسية' },
      lessons: [
        {
          id: 'L2M3L1',
          title: { en: 'SUM, AVERAGE, MIN and MAX', ar: 'دوال SUM وAVERAGE وMIN وMAX' },
          minutes: 12,
          description: {
            en: 'The four statistics every worksheet needs: total, average, smallest and largest.',
            ar: 'الإحصائيات الأربع التي يحتاجها كل جدول: الإجمالي والمتوسط والأصغر والأكبر.',
          },
          objectives: [
            { en: 'Write SUM and AVERAGE over ranges', ar: 'كتابة SUM وAVERAGE على النطاقات' },
            { en: 'Use MIN and MAX to find extremes', ar: 'استخدام MIN وMAX لإيجاد القيم المتطرفة' },
            { en: 'Combine functions with cell references', ar: 'دمج الدوال مع مراجع الخلايا' },
          ],
          body: {
            en: 'Every formula starts with **=**. Excel then calculates and shows the result in the cell, while the Formula Bar shows the formula.\n\n### SUM — الإجمالي\n=SUM(B2:B13) adds every number in the range. You can add several ranges: =SUM(B2:B13, D2:D13).\n\n### AVERAGE — المتوسط\n=AVERAGE(B2:B13) sums then divides by how many numbers exist. **Empty cells and text are ignored**, not counted as zero.\n\n### MIN / MAX — الأصغر والأكبر\n=MIN(B2:B13) returns the smallest value; =MAX(B2:B13) the largest. Together they give you the data range at a glance.\n\nSample: monthly sales B2:B13 = 1200, 1450, 980, 1320, 1500, 1100, 990, 1380, 1250, 1600, 1430, 1220 → SUM = 14,420 / AVERAGE ≈ 1,201.67 / MIN = 980 / MAX = 1,600.\n\n> TIP: Never hard-code =SUM(B2:B13)/12 — use AVERAGE, because it keeps working when rows are added or text appears.',
          ar: 'كل صيغة تبدأ بعلامة **=**. يحسبها Excel ويعرض الناتج في الخلية، بينما شريط الصيغة يعرض الصيغة نفسها.\n\n### SUM — الإجمالي\n=SUM(B2:B13) تجمع كل رقم في النطاق. ويمكن جمع عدة نطاقات: =SUM(B2:B13, D2:D13).\n\n### AVERAGE — المتوسط\n=AVERAGE(B2:B13) تجمع ثم تقسم على عدد الأرقام الموجودة. **الخلايا الفارغة والنصوص تُتجاهل** ولا تُحسب صفراً.\n\n### MIN / MAX — الأصغر والأكبر\n=MIN(B2:B13) تعيد أصغر قيمة، و=MAX(B2:B13) أكبرها. معاً تعطيانك مدى البيانات بنظرة.\n\nمثال: مبيعات شهرية B2:B13 = 1200، 1450، 980، 1320، 1500، 1100، 990، 1380، 1250، 1600، 1430، 1220 ← SUM = 14,420 / AVERAGE ≈ 1,201.67 / MIN = 980 / MAX = 1,600.\n\n> TIP: لا تكتب =SUM(B2:B13)/12 يدوياً — استخدم AVERAGE لأنها تبقى صحيحة عند إضافة صفوف أو ظهور نصوص.',
          },
          terms: [
            { en: 'SUM', ar: 'دالة الجمع', def: { en: 'Adds all numbers in a range.', ar: 'تجمع كل الأرقام في النطاق.' } },
            { en: 'AVERAGE', ar: 'دالة المتوسط', def: { en: 'Arithmetic mean of the numbers, ignoring text and blanks.', ar: 'الوسط الحسابي متجاهلة النص والفراغات.' } },
            { en: 'MIN', ar: 'دالة الأصغر', def: { en: 'Returns the smallest number.', ar: 'تعيد أصغر رقم.' } },
            { en: 'MAX', ar: 'دالة الأكبر', def: { en: 'Returns the largest number.', ar: 'تعيد أكبر رقم.' } },
          ],
          examples: [
            {
              title: { en: 'Monthly report line', ar: 'سطر تقرير شهري' },
              body: {
                en: 'B14 =SUM(B2:B13) → 14,420 SAR total. B15 =AVERAGE(B2:B13) → 1,201.67 average order. B16 =MAX(B2:B13)-MIN(B2:B13) → 620 spread between best and worst month.',
                ar: 'B14 =SUM(B2:B13) ← إجمالي 14,420 ريال. B15 =AVERAGE(B2:B13) ← متوسط 1,201.67. B16 =MAX(B2:B13)-MIN(B2:B13) ← مدى 620 بين أفضل وأسوأ شهر.',
              },
            },
          ],
          functions: [
            {
              name: 'SUM', ar: 'دالة SUM تجمع كل الأرقام في النطاق أو النطاقات المحددة وتعيد الإجمالي.',
              syntax: '=SUM(number1, [number2], ...)',
              args: [
                { name: 'number1', desc: { en: 'First number or range to add (required).', ar: 'الرقم أو النطاق الأول للجمع (إلزامي).' } },
                { name: 'number2', desc: { en: 'More numbers or ranges (optional).', ar: 'أرقام أو نطاقات إضافية (اختياري).' } },
              ],
              example: '=SUM(B2:B13)',
              result: { en: '14420 — the total of all monthly sales', ar: '14420 — إجمالي كل المبيعات الشهرية' },
              mistakes: [
                { en: 'Including text cells: SUM ignores text silently, which may hide data problems.', ar: 'إدخال خلايا نصية: تتجاهلها SUM بصمت وقد يخفي ذلك مشكلات في البيانات.' },
                { en: 'Using =B2+B3+B4+... instead of a range — breaks when rows are added.', ar: 'استخدام =B2+B3+B4+... بدل النطاق — ينكسر عند إضافة صفوف.' },
              ],
            },
            {
              name: 'AVERAGE', ar: 'دالة AVERAGE تحسب الوسط الحسابي: مجموع القيم مقسوماً على عددها، متجاهلة الخلايا الفارغة والنصوص.',
              syntax: '=AVERAGE(number1, [number2], ...)',
              args: [
                { name: 'number1', desc: { en: 'First number or range (required).', ar: 'الرقم أو النطاق الأول (إلزامي).' } },
              ],
              example: '=AVERAGE(B2:B13)',
              result: { en: '1201.67 — average monthly sales', ar: '1201.67 — متوسط المبيعات الشهرية' },
              mistakes: [
                { en: 'Assuming blank cells count as zero — they are excluded, not zeroed.', ar: 'افتراض أن الخلايا الفارغة تحسب صفراً — فهي مستثناة وليست صفراً.' },
                { en: 'Dividing SUM by a fixed number of rows instead of using AVERAGE.', ar: 'قسمة SUM على عدد صفوف ثابت بدل استخدام AVERAGE.' },
              ],
            },
            {
              name: 'MIN', ar: 'دالة MIN تعيد أصغر قيمة رقمية في النطاق — مفيدة لإيجاد أقل مبيعات أو أرخص سعر.',
              syntax: '=MIN(number1, [number2], ...)',
              args: [ { name: 'number1', desc: { en: 'Range to inspect (required).', ar: 'النطاق المراد فحصه (إلزامي).' } } ],
              example: '=MIN(B2:B13)',
              result: { en: '980 — the weakest sales month', ar: '980 — أضعف شهر مبيعات' },
              mistakes: [ { en: 'Expecting MIN to find the smallest text — it works on numbers only.', ar: 'توقع أن MIN تجد أصغر نص — فهي تعمل على الأرقام فقط.' } ],
            },
            {
              name: 'MAX', ar: 'دالة MAX تعيد أكبر قيمة رقمية في النطاق — لإيجاد أعلى مبيعات أو أفضل شهر.',
              syntax: '=MAX(number1, [number2], ...)',
              args: [ { name: 'number1', desc: { en: 'Range to inspect (required).', ar: 'النطاق المراد فحصه (إلزامي).' } } ],
              example: '=MAX(B2:B13)',
              result: { en: '1600 — the strongest sales month', ar: '1600 — أقوى شهر مبيعات' },
              mistakes: [ { en: 'Confusing MAX with large ranges: it returns a VALUE, not the month name — pair with INDEX/MATCH to get the label.', ar: 'الخلط: MAX تعيد قيمة لا اسم الشهر — واستخدم INDEX/MATCH للحصول على التسمية.' } ],
            },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'In the Excel Lab sample sales sheet, what is the TOTAL of the Total column? (Open Labs → Excel Lab → Spreadsheet practice → load the sales sample, compute =SUM of the Total column, and type the number here.)',
              ar: 'في ورقة عينة المبيعات بمعمل Excel، ما إجمالي عمود Total؟ (افتح المعامل ← ورقة التدريب ← حمّل عينة المبيعات ← احسب =SUM لعمود Total واكتب الرقم هنا.)',
            },
            accept: ['4200', '4200.00'],
            tolerance: 0.01,
            solution: { en: '4,200 SAR — =SUM(E2:E9) over the 8 order rows.', ar: '‏4,200 ريال — =SUM(E2:E9) على صفوف الطلبات الثمانية.' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Values: 1200, 980, 1600, (one empty cell). What does AVERAGE return?', ar: 'القيم: 1200، 980، 1600، وخلية فارغة. ماذا تعيد AVERAGE؟' },
              options: [ { en: '1260', ar: '1260' }, { en: '945', ar: '945' }, { en: '3780', ar: '3780' }, { en: 'An error', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: '(1200+980+1600)/3 = 1260 — the empty cell is excluded, not zeroed.', ar: '(1200+980+1600)/3 = 1260 — الخلية الفارغة مستثناة لا صفر.' },
              mistake: { en: 'Dividing by 4 including the blank → wrong average 945.', ar: 'القسمة على 4 مع الفارغة ← متوسط خاطئ 945.' },
            },
            {
              type: 'formula',
              q: { en: 'Write the formula for the SUM of range A1:A9 (exact syntax, lowercase).', ar: 'اكتب صيغة مجموع النطاق A1:A9 (بالصيغة الدقيقة بأحرف صغيرة).' },
              accept: ['=sum(a1:a9)'],
              explain: { en: '=SUM(A1:A9) — equals sign, function name, parentheses, range.', ar: '=SUM(A1:A9) — علامة يساوي واسم الدالة والأقواس والنطاق.' },
            },
            {
              type: 'num',
              q: { en: 'Values in B1:B6 are 10, 25, 8, 40, 12, 5. What does =MAX(B1:B6)-=MIN(B1:B6) equal?', ar: 'القيم في B1:B6 هي 10، 25، 8، 40، 12، 5. ما ناتج =MAX(B1:B6)-MIN(B1:B6)؟' },
              answer: 35,
              tolerance: 0.01,
              explain: { en: 'MAX = 40, MIN = 5, difference = 35.', ar: 'الأكبر 40 والأصغر 5 والفرق 35.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L2M3L2',
          title: { en: 'COUNT, COUNTA, PRODUCT and ROUND', ar: 'دوال COUNT وCOUNTA وPRODUCT وROUND' },
          minutes: 11,
          description: {
            en: 'Count what you have, multiply ranges, and control decimal places like a professional.',
            ar: 'عدّ ما لديك، واضرب النطاقات، واضبط المنازل العشرية باحترافية.',
          },
          objectives: [
            { en: 'Distinguish COUNT from COUNTA', ar: 'التمييز بين COUNT وCOUNTA' },
            { en: 'Multiply with PRODUCT', ar: 'الضرب باستخدام PRODUCT' },
            { en: 'Round results to a chosen number of digits', ar: 'تقريب النتائج إلى عدد منازل محدد' },
          ],
          body: {
            en: '### COUNT vs COUNTA\n- **COUNT** counts NUMBERS only: =COUNT(B2:B13) → 12 if all 12 are numeric.\n- **COUNTA** counts anything NON-EMPTY: numbers, text, dates. =COUNTA(A2:A500) tells you how many records exist.\n\nKnowing this pair detects missing data instantly: 500 rows but COUNTA = 487 → 13 records have gaps.\n\n### PRODUCT\n=PRODUCT(C2:C9) multiplies all values — total quantity × price scenarios, compound factors. For row totals it is usually simpler to use =C2*D2.\n\n### ROUND\n=ROUND(value, digits) rounds to a chosen number of decimal places: =ROUND(AVERAGE(B2:B13), 0) → 1202, =ROUND(3.14159, 2) → 3.14. ROUND changes the VALUE (unlike formatting, which only changes display) — important for money: an invoice total of 100.005 SAR displayed as 100.01 but stored as 100.005 can mismatch bank figures by fractions.\n\n> TIP: ROUND(x, 0) rounds to whole numbers; ROUND(x, -3) rounds to thousands (12,345 → 12,000).',
          ar: '### COUNT مقابل COUNTA\n- **COUNT** تعد الأرقام فقط: =COUNT(B2:B13) ← 12 إذا كانت الـ12 كلها رقمية.\n- **COUNTA** تعد أي شيء غير فارغ: أرقاماً ونصوصاً وتواريخ. =COUNTA(A2:A500) تخبرك بعدد السجلات الموجودة.\n\nمعرفة الثنائية تكشف البيانات الناقصة فوراً: 500 صف لكن COUNTA = 487 ← 13 سجلاً فيها فجوات.\n\n### PRODUCT\n=PRODUCT(C2:C9) تضرب كل القيم — سيناريوهات الكمية × السعر الإجمالية أو المعاملات المركبة. ولإجماليات الصفوف عادة أبسط استخدام =C2*D2.\n\n### ROUND\n=ROUND(القيمة، المنازل) تقرب لعدد منازل عشرية محدد: =ROUND(AVERAGE(B2:B13), 0) ← 1202، و=ROUND(3.14159, 2) ← 3.14. تعيد ROUND قيمةً مقربة فعلاً (بعكس التنسيق الذي يغير العرض فقط) — ومهم للمال: فاتورة 100.005 ريال معروضة 100.01 لكنها مخزنة 100.005 قد تختلف عن أرقام البنك بكسور.\n\n> TIP: ‏ROUND(x, 0) تقرب لأقرب عدد صحيح؛ وROUND(x, -3) تقرب للآلاف (12,345 ← 12,000).',
          },
          terms: [
            { en: 'COUNT', ar: 'عدّ الأرقام', def: { en: 'Counts cells containing numbers only.', ar: 'تعد الخلايا التي فيها أرقام فقط.' } },
            { en: 'COUNTA', ar: 'عدّ غير الفارغ', def: { en: 'Counts all non-empty cells.', ar: 'تعد كل الخلايا غير الفارغة.' } },
            { en: 'ROUND', ar: 'التقريب', def: { en: 'Rounds a value to a chosen number of decimal digits.', ar: 'تقرب القيمة إلى عدد منازل عشرية محدد.' } },
          ],
          examples: [
            {
              title: { en: 'Detecting missing data', ar: 'كشف البيانات الناقصة' },
              body: {
                en: 'Column A holds customer names for 500 orders: =COUNTA(A2:A501) → 500. Column B holds emails: =COUNTA(B2:B501) → 463. So 37 customers are missing emails — a follow-up list is ready.',
                ar: 'العمود A فيه أسماء عملاء 500 طلب: =COUNTA(A2:A501) ← 500. والعمود B فيه الإيميلات: =COUNTA(B2:B501) ← 463. إذن 37 عميلاً بلا إيميل — قائمة المتابعة جاهزة.',
              },
            },
          ],
          functions: [
            {
              name: 'COUNT', ar: 'دالة COUNT تعد الخلايا التي تحتوي أرقاماً فقط، وتتجاهل النص والفراغ والتاريخ المخزن كنص.',
              syntax: '=COUNT(value1, [value2], ...)',
              args: [ { name: 'value1', desc: { en: 'Range(s) to count numbers in (required).', ar: 'النطاق أو النطاقات المراد عدّ أرقامها (إلزامي).' } } ],
              example: '=COUNT(B2:B13)',
              result: { en: '12 — twelve numeric sales values', ar: '12 — اثنتا عشرة قيمة مبيعات رقمية' },
              mistakes: [ { en: 'Using COUNT on a text column (names) and getting 0 — use COUNTA.', ar: 'استخدام COUNT على عمود نصي (أسماء) والحصول على 0 — استخدم COUNTA.' } ],
            },
            {
              name: 'COUNTA', ar: 'دالة COUNTA تعد كل خلية غير فارغة: أرقاماً ونصوصاً وتواريخ — لمعرفة عدد السجلات الفعلية.',
              syntax: '=COUNTA(value1, [value2], ...)',
              args: [ { name: 'value1', desc: { en: 'Range(s) to count non-empty cells in (required).', ar: 'النطاق أو النطاقات لعدّ الخلايا غير الفارغة (إلزامي).' } } ],
              example: '=COUNTA(A2:A501)',
              result: { en: '500 — every customer row has a name', ar: '500 — كل صفوف العملاء فيها اسم' },
              mistakes: [ { en: 'Forgetting that a space character counts as content — clean with TRIM first.', ar: 'نسيان أن المسافة تعتبر محتوى — نظّف بـ TRIM أولاً.' } ],
            },
            {
              name: 'PRODUCT', ar: 'دالة PRODUCT تضرب كل الأرقام في النطاق ببعضها وتعيد الناتج.',
              syntax: '=PRODUCT(number1, [number2], ...)',
              args: [ { name: 'number1', desc: { en: 'Numbers or ranges to multiply (required).', ar: 'الأرقام أو النطاقات المراد ضربها (إلزامي).' } } ],
              example: '=PRODUCT(C2, D2)',
              result: { en: 'Quantity × Price for one order line', ar: 'الكمية × السعر لسطر طلب واحد' },
              mistakes: [ { en: 'Multiplying a whole column including headers — text is ignored but headers hint at messy design.', ar: 'ضرب عمود كامل شاملاً العناوين — النص يُتجاهل لكن وجود العناوين يدل على تصميم فوضوي.' } ],
            },
            {
              name: 'ROUND', ar: 'دالة ROUND تقرب رقم إلى عدد منازل عشرية محدد وتعيد القيمة المقربة نفسها (لا مجرد عرض).',
              syntax: '=ROUND(number, num_digits)',
              args: [
                { name: 'number', desc: { en: 'The value to round (required).', ar: 'القيمة المراد تقريبها (إلزامي).' } },
                { name: 'num_digits', desc: { en: 'Digits: 0 = whole number, 2 = two decimals, -3 = thousands (required).', ar: 'المنازل: 0 لعدد صحيح، 2 لمنزلتين، -3 للآلاف (إلزامي).' } },
              ],
              example: '=ROUND(145.567, 2)',
              result: { en: '145.57', ar: '145.57' },
              mistakes: [
                { en: 'Confusing ROUND with number FORMAT: format only changes display, ROUND changes the value.', ar: 'الخلط بين ROUND وتنسيق الأرقام: التنسيق يغير العرض فقط وROUND تغير القيمة.' },
                { en: 'Rounding too early in chained calculations, accumulating drift.', ar: 'التقريب مبكراً في سلسلة حسابات فتتراكم الانحرافات.' },
              ],
            },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'Values: 4, 5, 6 in A1:A3 and 2.5 in B1. What does =ROUND(PRODUCT(A1:A3)*B1, 1) return?',
              ar: 'القيم: 4، 5، 6 في A1:A3 والقيمة 2.5 في B1. ماذا تعيد =ROUND(PRODUCT(A1:A3)*B1, 1)؟',
            },
            accept: ['300'],
            tolerance: 0.01,
            solution: { en: '4×5×6 = 120; 120×2.5 = 300; ROUND to 1 digit → 300.', ar: '‏4×5×6 = 120؛ ثم 120×2.5 = 300؛ والتقريب لمنزلة → 300.' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'A2 is "Ahmad", B2 is 45, C2 is empty. What is =COUNTA(A2:C2)?', ar: 'A2 فيها "Ahmad" وB2 فيها 45 وC2 فارغة. ما ناتج =COUNTA(A2:C2)؟' },
              options: [ { en: '2', ar: '2' }, { en: '3', ar: '3' }, { en: '1', ar: '1' }, { en: '0', ar: '0' } ],
              answer: 0,
              explain: { en: 'COUNTA counts non-empty cells: text and number = 2; the blank is skipped.', ar: 'تعد COUNTA غير الفارغ: نص ورقم = 2؛ والفارغة تُتجاهل.' },
            },
            {
              type: 'num',
              q: { en: 'What does =ROUND(99.456, 1) return?', ar: 'ماذا تعيد =ROUND(99.456, 1)؟' },
              answer: 99.5,
              tolerance: 0.001,
              explain: { en: 'One decimal digit: 99.456 → 99.5.', ar: 'منزلة عشرية واحدة: 99.456 ← 99.5.' },
            },
            {
              type: 'tf',
              q: { en: 'COUNT counts both numbers and text.', ar: 'تعد COUNT الأرقام والنصوص معاً.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — COUNT is numbers only; COUNTA counts everything non-empty.', ar: 'خطأ — COUNT للأرقام فقط؛ وCOUNTA تعد كل شيء غير فارغ.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L2M4',
      name: { en: 'Logical Functions', ar: 'الدوال المنطقية' },
      lessons: [
        {
          id: 'L2M4L1',
          title: { en: 'IF, AND and OR', ar: 'دوال IF وAND وOR' },
          minutes: 12,
          description: {
            en: 'Make your sheet think: IF decisions and the AND/OR conditions that power them.',
            ar: 'اجعل جدولك يفكر: قرارات IF والشروط AND/OR التي تشغّلها.',
          },
          objectives: [
            { en: 'Write IF with test, then, else', ar: 'كتابة IF بالشرط وقيمة صح وقيمة خطأ' },
            { en: 'Combine conditions with AND and OR', ar: 'دمج الشروط باستخدام AND وOR' },
            { en: 'Nest AND/OR inside IF', ar: 'تداخل AND/OR داخل IF' },
          ],
          body: {
            en: '### IF — القرار\n=IF(test, value_if_true, value_if_false)\n\n=IF(D2>=1000, "VIP", "Regular") reads: if the amount in D2 is at least 1000, show VIP; otherwise show Regular. The test produces TRUE or FALSE; Excel picks which text to show.\n\n### AND — كل الشروط\n=AND(D2>=1000, F2="Paid") returns TRUE only when **both** hold. Alone it just shows TRUE/FALSE — its power is inside IF:\n\n=IF(AND(D2>=1000, F2="Paid"), "VIP", "Regular") — VIP requires big amount AND paid.\n\n### OR — أحد الشروط\n=OR(City="Riyadh", City="Jeddah") is TRUE if **any one** condition holds.\n\n=IF(OR(City="Riyadh", City="Jeddah"), "Main Region", "Other")\n\n### Reading tip\nParentheses pair up: IF( AND( cond1, cond2 ), true, false ). Count them when Excel reports an error.\n\n> TIP: Test your logic on 3 rows first (one true-true, one false, one edge case) before filling 3,000 rows.',
          ar: '### IF — القرار\n=IF(الشرط، قيمة_إذا_صح، قيمة_إذا_خطأ)\n\n=IF(D2>=1000, "VIP", "Regular") تُقرأ: إذا كان المبلغ في D2 يساوي 1000 على الأقل أظهر VIP، وإلا أظهر Regular. الشرط ينتج صح أو خطأ، ويختار Excel النص المناسب.\n\n### AND — كل الشروط\n=AND(D2>=1000, F2="Paid") تعيد صح فقط عندما **يتحقق الشرطان معاً**. وحدها تعرض صح/خطأ — وقوتها داخل IF:\n\n=IF(AND(D2>=1000, F2="Paid"), "VIP", "Regular") — العميل VIP بشرط مبلغ كبير **و**دفعة مسددة.\n\n### OR — أحد الشروط\n=OR(City="Riyadh", City="Jeddah") صح إذا تحقق **أي شرط واحد**.\n\n=IF(OR(City="Riyadh", City="Jeddah"), "Main Region", "Other")\n\n### نصيحة قراءة\nالأقواس تترافق: IF( AND( شرط1, شرط2 ), صح, خطأ ). عُدّ الأقواس عندما يبلّغ Excel عن خطأ.',
          },
          terms: [
            { en: 'IF', ar: 'دالة الشرط', def: { en: 'Chooses between two results based on a test.', ar: 'تختار بين نتيجتين بناءً على اختبار.' } },
            { en: 'AND', ar: 'دالة جميع الشروط', def: { en: 'TRUE only when every condition is TRUE.', ar: 'صح فقط عندما تتحقق كل الشروط.' } },
            { en: 'OR', ar: 'دالة أحد الشروط', def: { en: 'TRUE when at least one condition is TRUE.', ar: 'صح عندما يتحقق شرط واحد على الأقل.' } },
          ],
          examples: [
            {
              title: { en: 'Stock alert column', ar: 'عمود تنبيه المخزون' },
              body: {
                en: '=IF(C2<10, "Reorder", "OK") — a whole column of stock alerts appears in seconds. Managers love this pattern: one IF column turns a raw list into a to-do list.',
                ar: '=IF(C2<10, "Reorder", "OK") — عمود كامل من تنبيهات المخزون يظهر في ثوانٍ. هذا النمط يعشقه المديرون: عمود IF واحد يحول القائمة الخام إلى قائمة مهام.',
              },
            },
          ],
          functions: [
            {
              name: 'IF', ar: 'دالة IF تفحص شرطاً وتعيد قيمة إذا تحقق وأخرى إذا لم يتحقق — أساس القرارات داخل الجدول.',
              syntax: '=IF(logical_test, value_if_true, value_if_false)',
              args: [
                { name: 'logical_test', desc: { en: 'Condition like D2>=1000 (required).', ar: 'الشرط مثل D2>=1000 (إلزامي).' } },
                { name: 'value_if_true', desc: { en: 'Result when the test is TRUE (required).', ar: 'الناتج عند تحقق الشرط (إلزامي).' } },
                { name: 'value_if_false', desc: { en: 'Result when the test is FALSE (required).', ar: 'الناتج عند عدم التحقق (إلزامي).' } },
              ],
              example: '=IF(D2>=1000, "VIP", "Regular")',
              result: { en: 'VIP when D2 is 1000 or more, otherwise Regular', ar: 'VIP إذا كان D2 يساوي 1000 أو أكثر، وإلا Regular' },
              mistakes: [
                { en: 'Forgetting quotes around text results: =IF(D2>5, VIP, Regular) fails.', ar: 'نسيان علامات الاقتباس حول النص: =IF(D2>5, VIP, Regular) تفشل.' },
                { en: 'Using = instead of >= when "at least" is intended.', ar: 'استخدام = بدل >= عندما يكون المقصود "على الأقل".' },
              ],
            },
            {
              name: 'AND', ar: 'دالة AND تفحص عدة شروط وتعيد TRUE فقط إذا تحققت كلها — تُستخدم داخل IF عادة.',
              syntax: '=AND(logical1, [logical2], ...)',
              args: [ { name: 'logical1', desc: { en: 'First condition (required); up to 255 allowed.', ar: 'الشرط الأول (إلزامي)؛ ويسمح حتى 255 شرطاً.' } } ],
              example: '=IF(AND(D2>=1000, F2="Paid"), "VIP", "Regular")',
              result: { en: 'VIP only for big AND paid orders', ar: 'VIP فقط للطلبات الكبيرة المدفوعة' },
              mistakes: [ { en: 'Writing =IF(D2>=1000 AND F2="Paid"...) — the word AND is not Excel syntax; use AND(...).', ar: 'كتابة =IF(D2>=1000 AND F2="Paid"...) — كلمة AND ليست صيغة Excel؛ استخدم AND(...).' } ],
            },
            {
              name: 'OR', ar: 'دالة OR تفحص عدة شروط وتعيد TRUE إذا تحقق أي منها — للقبول البديل.',
              syntax: '=OR(logical1, [logical2], ...)',
              args: [ { name: 'logical1', desc: { en: 'First condition (required).', ar: 'الشرط الأول (إلزامي).' } } ],
              example: '=IF(OR(City="Riyadh", City="Jeddah"), "Main", "Other")',
              result: { en: 'Main for either city, Other otherwise', ar: 'Main لأي من المدينتين وOther لغيرهما' },
              mistakes: [ { en: 'Using OR when both conditions must hold — that needs AND.', ar: 'استخدام OR بينما يجب تحقق الشرطين معاً — هنا تحتاج AND.' } ],
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Write an IF formula (lowercase, no spaces after commas) that shows "LOW" when cell C2 is less than 10, otherwise "OK".',
              ar: 'اكتب صيغة IF (بأحرف صغيرة، دون مسافات بعد الفواصل) تعرض "LOW" إذا كانت C2 أقل من 10 وإلا "OK".',
            },
            accept: ['=if(c2<10,"low","ok")', '=if(c2<10, "low", "ok")'],
            solution: { en: '=IF(C2<10, "LOW", "OK")', ar: '=IF(C2<10, "LOW", "OK")' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: '=IF(AND(A1>5, B1<3), "Yes", "No") with A1=7, B1=2 returns…', ar: '=IF(AND(A1>5, B1<3), "Yes", "No") وقيم A1=7 وB1=2 تعيد…' },
              options: [ { en: 'Yes', ar: 'Yes' }, { en: 'No', ar: 'No' }, { en: 'TRUE', ar: 'TRUE' }, { en: 'Error', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: 'A1>5 TRUE and B1<3 TRUE → AND TRUE → "Yes".', ar: 'الشرطان صحيحان ← AND صحيحة ← "Yes".' },
            },
            {
              type: 'mcq',
              q: { en: 'Which formula flags rows where the city is NOT Riyadh or Jeddah?', ar: 'أي صيغة تعلّم الصفوف التي ليست مدينتها الرياض أو جدة؟' },
              options: [
                { en: '=IF(OR(C2="Riyadh", C2="Jeddah"), "OK", "CHECK")', ar: '=IF(OR(C2="Riyadh", C2="Jeddah"), "OK", "CHECK")' },
                { en: '=IF(AND(C2="Riyadh", C2="Jeddah"), "OK", "CHECK")', ar: '=IF(AND(C2="Riyadh", C2="Jeddah"), "OK", "CHECK")' },
                { en: '=IF(C2="Riyadh", "CHECK", "OK")', ar: '=IF(C2="Riyadh", "CHECK", "OK")' },
                { en: '=OR(C2<>"Riyadh", C2<>"Jeddah")', ar: '=OR(C2<>"Riyadh", C2<>"Jeddah")' },
              ],
              answer: 0,
              explain: { en: 'Belonging to either city passes OR; everything else gets CHECK.', ar: 'الانتماء لأي من المدينتين يجتاز OR؛ وكل ما عداها يحصل على CHECK.' },
            },
            {
              type: 'tf',
              q: { en: 'AND returns TRUE if at least one of its conditions is TRUE.', ar: 'تعيد AND قيمة صح إذا تحقق شرط واحد على الأقل من شروطها.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — that is OR. AND requires every condition to be TRUE.', ar: 'خطأ — هذا وصف OR. أما AND فتشترط تحقق جميع الشروط.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L2M4L2',
          title: { en: 'IFS, IFERROR and Nested IF', ar: 'دوال IFS وIFERROR وIF المتداخلة' },
          minutes: 12,
          description: {
            en: 'Handle many categories at once (IFS, nested IF) and make formulas fail gracefully (IFERROR).',
            ar: 'تعامل مع فئات متعددة دفعة واحدة (IFS وIF المتداخلة) واجعل صيغك تتعامل مع الأخطاء بلباقة (IFERROR).',
          },
          objectives: [
            { en: 'Classify values into multiple bands with IFS', ar: 'تصنيف القيم إلى شرائح متعددة باستخدام IFS' },
            { en: 'Write and read nested IF formulas', ar: 'كتابة وقراءة صيغ IF المتداخلة' },
            { en: 'Wrap formulas in IFERROR for clean output', ar: 'تغليف الصيغ بـ IFERROR لمخرجات نظيفة' },
          ],
          body: {
            en: '### IFS — multiple bands\n=IFS(D2>=2000, "Gold", D2>=1000, "Silver", D2>=500, "Bronze", TRUE, "Standard")\n\nExcel checks conditions **in order** and stops at the first TRUE. The final TRUE, "Standard" is the fallback for everything else. Conditions must go from high to low — if you test D2>=500 first, every value 500+ would stop there.\n\n### Nested IF — the classic way\n=IF(D2>=2000, "Gold", IF(D2>=1000, "Silver", IF(D2>=500, "Bronze", "Standard")))\n\nSame result, harder to read. Prefer IFS in modern Excel; learn nested IF because older files and interviews use it.\n\n### IFERROR — graceful failures\n=IFERROR(VLOOKUP(A2, Customers!A:C, 3, FALSE), "Not found")\n\nIf the lookup fails (#N/A), the cell shows "Not found" instead of an error. Use IFERROR to keep reports clean — but do NOT use it to hide real mistakes: an unexplained zero can mask broken data.\n\n> TIP: If your nested IF is deeper than 3 levels, restructure with IFS or a lookup table — deep nesting is where copy-paste errors breed.',
          ar: '### IFS — شرائح متعددة\n=IFS(D2>=2000, "Gold", D2>=1000, "Silver", D2>=500, "Bronze", TRUE, "Standard")\n\nيفحص Excel الشروط **بالترتيب** ويتوقف عند أول شرط صحيح. الشرط الأخير TRUE هو قيمة الاحتياط لكل ما عداها. يجب أن تكون الشروط من الأعلى للأدنى — فإن فحصت D2>=500 أولاً توقف كل شيء عندها.\n\n### IF المتداخلة — الطريقة الكلاسيكية\n=IF(D2>=2000, "Gold", IF(D2>=1000, "Silver", IF(D2>=500, "Bronze", "Standard")))\n\nالنتيجة نفسها لكن أصعب قراءة. فضّل IFS في Excel الحديث، وتعلّم المتداخلة لأن الملفات القديمة والمقابلات تستخدمها.\n\n### IFERROR — فشل أنيق\n=IFERROR(VLOOKUP(A2, Customers!A:C, 3, FALSE), "Not found")\n\nإذا فشل البحث (#N/A) تعرض الخلية "Not found" بدل الخطأ. استخدم IFERROR لإبقاء التقارير نظيفة — لكن لا تستخدمها لإخفاء أخطاء حقيقية: فالصفر غير المُفسّر قد يخفي بيانات معطوبة.\n\n> TIP: إذا تجاوز تداخل IF ثلاثة مستويات فأعد الهيكلة بـ IFS أو جدول بحث — فالتداخل العميق بيئة خصبة لأخطاء النسخ واللصق.',
          },
          terms: [
            { en: 'IFS', ar: 'دالة الشروط المتعددة', def: { en: 'Checks conditions in order and returns the value of the first TRUE one.', ar: 'تفحص الشروط بالترتيب وتعيد قيمة أول شرط صحيح.' } },
            { en: 'Nested IF', ar: 'IF المتداخلة', def: { en: 'An IF placed inside another IF to handle many cases.', ar: 'دالة IF داخل IF أخرى لمعالجة حالات متعددة.' } },
            { en: 'IFERROR', ar: 'دالة التعامل مع الأخطاء', def: { en: 'Replaces a formula error with a friendly value.', ar: 'تستبدل خطأ الصيغة بقيمة ودية.' } },
          ],
          examples: [
            {
              title: { en: 'Grading delivery speed', ar: 'تقييم سرعة التسليم' },
              body: {
                en: '=IFS(E2<=1, "Same day", E2<=3, "Fast", E2<=7, "Normal", TRUE, "Slow") — delivery days converted instantly into service labels for the monthly report.',
                ar: '=IFS(E2<=1, "Same day", E2<=3, "Fast", E2<=7, "Normal", TRUE, "Slow") — تحويل أيام التسليم فوراً إلى وسوم خدمة للتقرير الشهري.',
              },
            },
          ],
          functions: [
            {
              name: 'IFS', ar: 'دالة IFS تقبل أزواجاً من (شرط، قيمة) وتعيد قيمة أول شرط يتحقق — أنظف من IF المتداخلة للفئات المتعددة.',
              syntax: '=IFS(test1, value1, test2, value2, ...)',
              args: [
                { name: 'test1', desc: { en: 'First condition (required).', ar: 'الشرط الأول (إلزامي).' } },
                { name: 'value1', desc: { en: 'Result if test1 is TRUE (required).', ar: 'الناتج إذا تحقق الشرط الأول (إلزامي).' } },
                { name: 'test2/value2', desc: { en: 'Next condition/result pairs; end with TRUE, fallback.', ar: 'أزواج شرط/ناتج التالية؛ وأنهِ بـ TRUE كقيمة احتياطية.' } },
              ],
              example: '=IFS(D2>=2000, "Gold", D2>=1000, "Silver", TRUE, "Bronze")',
              result: { en: 'Gold for 2000+, Silver for 1000–1999, Bronze below', ar: 'Gold من 2000 فأكثر، وSilver من 1000–1999، وBronze دون ذلك' },
              mistakes: [ { en: 'Putting the LOW threshold first: every value satisfies it and stops there.', ar: 'وضع العتبة الأدنى أولاً: كل القيم تحققها وتتوقف عندها.' } ],
            },
            {
              name: 'IFERROR', ar: 'دالة IFERROR تلف صيغة وتعيد بديلاً لطيفاً إذا أخطأت — لتنظيف التقارير من #N/A و#DIV/0!.',
              syntax: '=IFERROR(value, value_if_error)',
              args: [
                { name: 'value', desc: { en: 'The formula to protect (required).', ar: 'الصيغة المراد حمايتها (إلزامي).' } },
                { name: 'value_if_error', desc: { en: 'Replacement shown on any error (required).', ar: 'البديل المعروض عند أي خطأ (إلزامي).' } },
              ],
              example: '=IFERROR(D2/C2, 0)',
              result: { en: 'The ratio — or 0 when C2 is empty (instead of #DIV/0!)', ar: 'النسبة — أو 0 عندما تكون C2 فارغة (بدل #DIV/0!)' },
              mistakes: [ { en: 'Hiding data problems: IFERROR hides ALL errors, including broken references you should fix.', ar: 'إخفاء مشكلات البيانات: IFERROR تخفي كل الأخطاء بما فيها المراجع المعطوبة التي يجب إصلاحها.' } ],
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Write an IFS formula (lowercase, no spaces) that returns "High" when B2>=90, "Mid" when B2>=50, and "Low" otherwise.',
              ar: 'اكتب صيغة IFS (بأحرف صغيرة دون مسافات) تعيد "High" عندما B2>=90 و"Mid" عندما B2>=50 و"Low" في غير ذلك.',
            },
            accept: ['=ifs(b2>=90,"high",b2>=50,"mid",true,"low")', '=ifs(b2>=90,"high",b2>=50,"mid",true,"low")'],
            solution: { en: '=IFS(B2>=90, "High", B2>=50, "Mid", TRUE, "Low")', ar: '=IFS(B2>=90, "High", B2>=50, "Mid", TRUE, "Low")' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: '=IFS(A1>=90, "A", A1>=80, "B", TRUE, "C") with A1=85 returns…', ar: '=IFS(A1>=90, "A", A1>=80, "B", TRUE, "C") وقيمة A1=85 تعيد…' },
              options: [ { en: 'B', ar: 'B' }, { en: 'A', ar: 'A' }, { en: 'C', ar: 'C' }, { en: 'TRUE', ar: 'TRUE' } ],
              answer: 0,
              explain: { en: '85 fails >=90, passes >=80 → "B" — the first TRUE stops the chain.', ar: '‏85 تفشل في >=90 وتنجح في >=80 ← "B" — أول شرط صحيح يوقف السلسلة.' },
            },
            {
              type: 'mcq',
              q: { en: '=IFERROR(1/0, "Check input") displays…', ar: '=IFERROR(1/0, "Check input") تعرض…' },
              options: [ { en: 'Check input', ar: 'Check input' }, { en: '#DIV/0!', ar: '#DIV/0!' }, { en: '0', ar: '0' }, { en: 'TRUE', ar: 'TRUE' } ],
              answer: 0,
              explain: { en: '1/0 raises #DIV/0! which IFERROR replaces with the fallback text.', ar: '‏1/0 يولد #DIV/0! وIFERROR تستبدله بالنص البديل.' },
            },
            {
              type: 'fill',
              q: { en: 'In IFS, the condition ______ is often used as the final catch-all.', ar: 'في IFS يُستخدم الشرط ______ غالباً كقيمة نهائية شاملة.', },
              accept: ['true'],
              explain: { en: 'TRUE — always true, so it catches anything the earlier conditions missed.', ar: 'TRUE — دائماً صحيحة فتلقط كل ما فاته الشروط السابقة.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L2M5',
      name: { en: 'Conditional Functions', ar: 'الدوال الشرطية الإحصائية' },
      lessons: [
        {
          id: 'L2M5L1',
          title: { en: 'COUNTIF, COUNTIFS, SUMIF and SUMIFS', ar: 'دوال COUNTIF وCOUNTIFS وSUMIF وSUMIFS' },
          minutes: 12,
          description: {
            en: 'Count and sum only the rows that matter: conditional counting and adding — the analyst\u2019s favorite tools.',
            ar: 'عدّ واجمع الصفوف المهمة فقط: العد والجمع الشرطي — الأدوات المفضلة لدى المحللين.',
          },
          objectives: [
            { en: 'Count rows matching one or more conditions', ar: 'عدّ الصفوف المطابقة لشرط أو أكثر' },
            { en: 'Sum values under conditions', ar: 'جمع القيم وفق شروط' },
            { en: 'Write criteria like ">1000" and wildcards', ar: 'كتابة معايير مثل ">1000" والرموز البديلة' },
          ],
          body: {
            en: '### COUNTIF — count with one condition\n=COUNTIF(C2:C100, "Riyadh") → how many rows say Riyadh.\n=COUNTIF(D2:D100, ">1000") → how many orders exceed 1,000 SAR.\n\nCriteria can be a value, text (exact match), a comparison in quotes, or wildcards: "INV-*" matches any text starting with INV.\n\n### COUNTIFS — multiple conditions\n=COUNTIFS(C2:C100, "Riyadh", D2:D100, ">1000") → Riyadh orders above 1,000 SAR. All ranges must be the same size; every condition must be TRUE for a row to count.\n\n### SUMIF / SUMIFS — add matching values\n=SUMIF(C2:C100, "Riyadh", D2:D100) → total SAR from Riyadh (condition range, criterion, sum range).\n=SUMIFS(D2:D100, C2:C100, "Riyadh", E2:E100, "Paid") → sum of D where city is Riyadh AND status Paid. **Note the argument order difference**: SUMIFS puts the SUM range FIRST.\n\n> TIP: ">1000" needs quotes because it is a text description of a condition, not a number. Unquoted >1000 is an error.',
          ar: '### COUNTIF — العد بشرط واحد\n=COUNTIF(C2:C100, "Riyadh") ← كم صفاً يقول الرياض.\n=COUNTIF(D2:D100, ">1000") ← كم طلباً يتجاوز 1,000 ريال.\n\nيمكن أن يكون المعيار قيمة أو نصاً (تطابقاً تاماً) أو مقارنة بين علامتي اقتباس أو رموز بديلة: "INV-" يطابق أي نص يبدأ بـ INV.\n\n### COUNTIFS — شروط متعددة\n=COUNTIFS(C2:C100, "Riyadh", D2:D100, ">1000") ← طلبات الرياض فوق 1,000 ريال. يجب أن تكون كل النطاقات بنفس الحجم، وأن يتحقق كل شرط لاحتساب الصف.\n\n### SUMIF / SUMIFS — الجمع الشرطي\n=SUMIF(C2:C100, "Riyadh", D2:D100) ← إجمالي الرياض (نطاق الشرط، المعيار، نطاق الجمع).\n=SUMIFS(D2:D100, C2:C100, "Riyadh", E2:E100, "Paid") ← جمع D حيث المدينة الرياض **و**الحالة مدفوعة. **انتبه لاختلاف ترتيب المعاملات**: SUMIFS تضع نطاق الجمع أولاً.\n\n> TIP: ">1000" تحتاج علامتي اقتباس لأنها وصف نصي لشرط لا رقم. وكتابة >1000 بلا اقتباس خطأ.',
          },
          terms: [
            { en: 'COUNTIF', ar: 'العد الشرطي', def: { en: 'Counts cells matching one condition.', ar: 'تعد الخلايا المطابقة لشرط واحد.' } },
            { en: 'COUNTIFS', ar: 'العد بعدة شروط', def: { en: 'Counts cells matching multiple conditions.', ar: 'تعد الخلايا المطابقة لعدة شروط.' } },
            { en: 'SUMIF', ar: 'الجمع الشرطي', def: { en: 'Sums values where a condition holds.', ar: 'تجمع القيم حيث يتحقق شرط.' } },
            { en: 'Criterion', ar: 'المعيار', def: { en: 'The condition text: "Riyadh", ">1000", "INV-*".', ar: 'نص الشرط: "Riyadh" أو ">1000" أو "INV-*".' } },
          ],
          examples: [
            {
              title: { en: 'Region dashboard numbers', ar: 'أرقام لوحة المناطق' },
              body: {
                en: '=COUNTIF(City,"Riyadh") → 142 orders. =SUMIF(City,"Riyadh",Amount) → 189,450 SAR. =SUMIFS(Amount,City,"Riyadh",Status,"Paid") → 163,200 SAR collected. Three cells, one mini-report.',
                ar: '=COUNTIF(City,"Riyadh") ← 142 طلباً. =SUMIF(City,"Riyadh",Amount) ← 189,450 ريال. =SUMIFS(Amount,City,"Riyadh",Status,"Paid") ← 163,200 ريال محصلة. ثلاث خلايا تصنع تقريراً مصغراً.',
              },
            },
          ],
          functions: [
            {
              name: 'COUNTIF', ar: 'دالة COUNTIF تعد الخلايا المطابقة لمعيار واحد — عدد طلبات مدينة أو عدد القيم فوق حد معين.',
              syntax: '=COUNTIF(range, criteria)',
              args: [
                { name: 'range', desc: { en: 'Cells to test (required).', ar: 'الخلايا المراد فحصها (إلزامي).' } },
                { name: 'criteria', desc: { en: 'Condition: "Riyadh", ">1000", "INV-*" (required).', ar: 'الشرط: "Riyadh" أو ">1000" أو "INV-" (إلزامي).' } },
              ],
              example: '=COUNTIF(D2:D100, ">1000")',
              result: { en: '38 — thirty-eight orders above 1,000 SAR', ar: '38 — ثمانية وثلاثون طلباً فوق 1,000 ريال' },
              mistakes: [
                { en: 'Writing criteria without quotes: =COUNTIF(D2:D100, >1000) is invalid.', ar: 'كتابة المعيار دون اقتباس: =COUNTIF(D2:D100, >1000) غير صالحة.' },
                { en: 'Extra spaces in criteria ("Riyadh ") match nothing — TRIM your data.', ar: 'المسافات الزائدة في المعيار ("Riyadh ") لا تطابق شيئاً — نظّف بياناتك بـ TRIM.' },
              ],
            },
            {
              name: 'COUNTIFS', ar: 'دالة COUNTIFS تعد الصفوف التي تحقق كل الشروط معاً — مثل طلبات الرياض المدفوعة فوق 1000.',
              syntax: '=COUNTIFS(range1, criteria1, [range2, criteria2], ...)',
              args: [
                { name: 'range1', desc: { en: 'First test range (required).', ar: 'نطاق الفحص الأول (إلزامي).' } },
                { name: 'criteria1', desc: { en: 'First condition (required).', ar: 'الشرط الأول (إلزامي).' } },
                { name: 'range2', desc: { en: 'Second test range (optional, repeatable).', ar: 'نطاق الفحص الثاني (اختياري وقابل للتكرار).' } },
              ],
              example: '=COUNTIFS(C2:C100, "Riyadh", D2:D100, ">1000")',
              result: { en: '12 — Riyadh orders above 1,000 SAR', ar: '12 — طلبات الرياض فوق 1,000 ريال' },
              mistakes: [ { en: 'Ranges of different sizes produce an error — all ranges must align row-by-row.', ar: 'النطاقات بأحجام مختلفة تسبب خطأ — يجب أن تتطابق صفاً بصف.' } ],
            },
            {
              name: 'SUMIF', ar: 'دالة SUMIF تجمع قيم نطاق عندما يتحقق شرط على نطاق آخر — إجمالي مبيعات مدينة أو منتج.',
              syntax: '=SUMIF(range, criteria, [sum_range])',
              args: [
                { name: 'range', desc: { en: 'Cells holding the condition (required).', ar: 'الخلايا التي فيها الشرط (إلزامي).' } },
                { name: 'criteria', desc: { en: 'The condition (required).', ar: 'الشرط (إلزامي).' } },
                { name: 'sum_range', desc: { en: 'Cells to add (optional; defaults to range).', ar: 'الخلايا المراد جمعها (اختياري، وتفترض نطاق الشرط).' } },
              ],
              example: '=SUMIF(C2:C100, "Riyadh", D2:D100)',
              result: { en: '189450 — total Riyadh sales', ar: '189450 — إجمالي مبيعات الرياض' },
              mistakes: [ { en: 'Swapping the last two arguments: the sum range comes LAST in SUMIF.', ar: 'تبديل المعاملين الأخيرين: نطاق الجمع يأتي أخيراً في SUMIF.' } ],
            },
            {
              name: 'SUMIFS', ar: 'دالة SUMIFS تجمع القيم التي تحقق عدة شروط — وترتيبها معكوس عن SUMIF: نطاق الجمع أولاً.',
              syntax: '=SUMIFS(sum_range, range1, criteria1, [range2, criteria2], ...)',
              args: [
                { name: 'sum_range', desc: { en: 'Cells to add — FIRST argument (required).', ar: 'الخلايا المراد جمعها — المعامل الأول (إلزامي).' } },
                { name: 'range1', desc: { en: 'First condition range (required).', ar: 'نطاق الشرط الأول (إلزامي).' } },
                { name: 'criteria1', desc: { en: 'First condition (required).', ar: 'الشرط الأول (إلزامي).' } },
              ],
              example: '=SUMIFS(D2:D100, C2:C100, "Riyadh", E2:E100, "Paid")',
              result: { en: '163200 — collected Riyadh revenue', ar: '163200 — إيرادات الرياض المحصلة' },
              mistakes: [ { en: 'The #1 mistake in interviews: putting the sum range last like SUMIF. In SUMIFS it goes FIRST.', ar: 'الخطأ الأول في المقابلات: وضع نطاق الجمع أخيراً كما في SUMIF. في SUMIFS يأتي أولاً.' } ],
            },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'Using the Excel Lab sales sample: what does =SUMIF(Product,"Keyboard",Total) equal? (Load the sample in Spreadsheet practice and compute it.)',
              ar: 'باستخدام عينة المبيعات في معمل Excel: ما ناتج =SUMIF(Product,"Keyboard",Total)؟ (حمّل العينة في ورقة التدريب واحسبها.)',
            },
            accept: ['700'],
            tolerance: 0.01,
            solution: { en: 'Keyboard rows total 700 SAR (two orders: 400 + 300).', ar: 'صفوف Keyboard بإجمالي 700 ريال (طلبان: 400 + 300).' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which SUMIFS is correctly ordered?', ar: 'أي SUMIFS مرتبة بشكل صحيح؟' },
              options: [
                { en: '=SUMIFS(D2:D100, C2:C100, "Riyadh")', ar: '=SUMIFS(D2:D100, C2:C100, "Riyadh")' },
                { en: '=SUMIFS(C2:C100, "Riyadh", D2:D100)', ar: '=SUMIFS(C2:C100, "Riyadh", D2:D100)' },
                { en: '=SUMIF(D2:D100, C2:C100, "Riyadh")', ar: '=SUMIF(D2:D100, C2:C100, "Riyadh")' },
                { en: '=SUMIFS("Riyadh", C2:C100, D2:D100)', ar: '=SUMIFS("Riyadh", C2:C100, D2:D100)' },
              ],
              answer: 0,
              explain: { en: 'SUMIFS = sum range first, then condition ranges and criteria pairs.', ar: '‏SUMIFS = نطاق الجمع أولاً ثم أزواج النطاقات والمعايير.' },
              mistake: { en: 'Reusing SUMIF order inside SUMIFS — the most common conditional-function error.', ar: 'إعادة استخدام ترتيب SUMIF داخل SUMIFS — أكثر أخطاء الدوال الشرطية شيوعاً.' },
            },
            {
              type: 'num',
              q: { en: 'Values D2:D6 = 100, 200, 1500, 800, 1200. What is =COUNTIF(D2:D6, ">900")?', ar: 'القيم D2:D6 = 100، 200، 1500، 800، 1200. ما ناتج =COUNTIF(D2:D6, ">900")؟' },
              answer: 2,
              tolerance: 0.01,
              explain: { en: 'Only 1500 and 1200 exceed 900 → count = 2.', ar: 'فقط 1500 و1200 تتجاوز 900 ← العدد 2.' },
            },
            {
              type: 'formula',
              q: { en: 'Write =COUNTIF over C2:C50 counting "Paid" (lowercase, exact syntax).', ar: 'اكتب =COUNTIF على C2:C50 لعدد "Paid" (أحرف صغيرة وصيغة دقيقة).' },
              accept: ['=countif(c2:c50,"paid")'],
              explain: { en: '=COUNTIF(C2:C50, "Paid") — range then quoted criterion.', ar: '=COUNTIF(C2:C50, "Paid") — النطاق ثم المعيار المقتبس.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L2M5L2',
          title: { en: 'AVERAGEIF and AVERAGEIFS', ar: 'دالتا AVERAGEIF وAVERAGEIFS' },
          minutes: 10,
          description: {
            en: 'Compute averages under conditions — average order value per city, per product, per status.',
            ar: 'احسب المتوسطات بشرط — متوسط قيمة الطلب لكل مدينة أو منتج أو حالة.',
          },
          objectives: [
            { en: 'Average values matching a condition', ar: 'حساب متوسط القيم المطابقة لشرط' },
            { en: 'Use multiple conditions in AVERAGEIFS', ar: 'استخدام شروط متعددة في AVERAGEIFS' },
            { en: 'Interpret conditional averages in business terms', ar: 'تفسير المتوسطات الشرطية بلغة الأعمال' },
          ],
          body: {
            en: '### AVERAGEIF\n=AVERAGEIF(C2:C100, "Riyadh", D2:D100) → the average order value **for Riyadh only**. Same argument order as SUMIF: condition range, criterion, average range.\n\n### AVERAGEIFS\n=AVERAGEIFS(D2:D100, C2:C100, "Riyadh", E2:E100, "Paid") → average of D where city = Riyadh AND status = Paid. Like SUMIFS, the average range comes FIRST.\n\n### Why averages matter more than totals\nTwo cities with equal totals can hide very different behavior: Riyadh total 189,450 over 142 orders (avg ≈ 1,334) vs Jeddah total 185,000 over 60 orders (avg ≈ 3,083). Same money, different customers — Jeddah orders are bigger. Averages reveal that; totals hide it.\n\n> WARN: If NO row matches the criteria, AVERAGEIF returns #DIV/0!. Wrap with IFERROR and show "No data".',
          ar: '### AVERAGEIF\n=AVERAGEIF(C2:C100, "Riyadh", D2:D100) ← متوسط قيمة الطلب **للرياض فقط**. الترتيب نفسه مثل SUMIF: نطاق الشرط، المعيار، نطاق المتوسط.\n\n### AVERAGEIFS\n=AVERAGEIFS(D2:D100, C2:C100, "Riyadh", E2:E100, "Paid") ← متوسط D حيث المدينة = الرياض **و**الحالة = مدفوعة. مثل SUMIFS يأتي نطاق المتوسط أولاً.\n\n### لماذا المتوسطات أهم من الإجماليات\nمدينتان بإجماليات متساوية قد تخفيان سلوكاً مختلفاً جداً: الرياض بإجمالي 189,450 على 142 طلباً (متوسط ≈ 1,334) مقابل جدة بإجمالي 185,000 على 60 طلباً (متوسط ≈ 3,083). نفس المال وعملاء مختلفون — طلبات جدة أكبر. المتوسطات تكشف ذلك والإجماليات تخفيه.\n\n> WARN: إذا لم يطابق أي صف المعايير تعيد AVERAGEIF خطأ #DIV/0!. غلّفها بـ IFERROR واعرض "No data".',
          },
          terms: [
            { en: 'AVERAGEIF', ar: 'المتوسط الشرطي', def: { en: 'Average of values where one condition holds.', ar: 'متوسط القيم حيث يتحقق شرط واحد.' } },
            { en: 'AVERAGEIFS', ar: 'المتوسط بعدة شروط', def: { en: 'Average of values meeting multiple conditions.', ar: 'متوسط القيم التي تحقق عدة شروط.' } },
            { en: 'Average Order Value', ar: 'متوسط قيمة الطلب', def: { en: 'Revenue ÷ number of orders — a core business KPI.', ar: 'الإيراد ÷ عدد الطلبات — مؤشر أعمال أساسي.' } },
          ],
          examples: [
            {
              title: { en: 'Spotting the premium segment', ar: 'إبراز الشريحة المتميزة' },
              body: {
                en: '=AVERAGEIFS(Amount, Product, "Laptop") → 3,450 SAR vs overall average 780 SAR. Laptops pull the average up — report laptop sales separately to see real behavior.',
                ar: '=AVERAGEIFS(Amount, Product, "Laptop") ← 3,450 ريال مقابل متوسط عام 780 ريال. أجهزة اللابتوب ترفع المتوسط — افصل مبيعاتها لترى السلوك الحقيقي.',
              },
            },
          ],
          functions: [
            {
              name: 'AVERAGEIF', ar: 'دالة AVERAGEIF تحسب متوسط القيم التي تحقق شرطاً واحداً — متوسط مبيعات مدينة أو منتج معين.',
              syntax: '=AVERAGEIF(range, criteria, [average_range])',
              args: [
                { name: 'range', desc: { en: 'Cells holding the condition (required).', ar: 'الخلايا التي فيها الشرط (إلزامي).' } },
                { name: 'criteria', desc: { en: 'The condition (required).', ar: 'الشرط (إلزامي).' } },
                { name: 'average_range', desc: { en: 'Cells to average (optional).', ar: 'الخلايا المراد متوسطتها (اختياري).' } },
              ],
              example: '=AVERAGEIF(C2:C100, "Riyadh", D2:D100)',
              result: { en: '1334 — average Riyadh order value', ar: '1334 — متوسط قيمة طلب الرياض' },
              mistakes: [ { en: 'Ignoring #DIV/0! when nothing matches — guard with IFERROR.', ar: 'تجاهل #DIV/0! عند عدم وجود مطابقات — احمِها بـ IFERROR.' } ],
            },
            {
              name: 'AVERAGEIFS', ar: 'دالة AVERAGEIFS تحسب المتوسط لعدة شروط معاً، ونطاق المتوسط يأتي أولاً كما في SUMIFS.',
              syntax: '=AVERAGEIFS(average_range, range1, criteria1, ...)',
              args: [
                { name: 'average_range', desc: { en: 'Cells to average — FIRST (required).', ar: 'خلايا المتوسط — أولاً (إلزامي).' } },
                { name: 'range1', desc: { en: 'First condition range (required).', ar: 'نطاق الشرط الأول (إلزامي).' } },
                { name: 'criteria1', desc: { en: 'First condition (required).', ar: 'الشرط الأول (إلزامي).' } },
              ],
              example: '=AVERAGEIFS(D2:D100, C2:C100, "Riyadh", E2:E100, "Paid")',
              result: { en: 'Average paid Riyadh order value', ar: 'متوسط قيمة طلب الرياض المدفوع' },
              mistakes: [ { en: 'Same classic mistake as SUMIFS: average range must be the FIRST argument.', ar: 'الخطأ الكلاسيكي نفسه مثل SUMIFS: نطاق المتوسط يجب أن يكون المعامل الأول.' } ],
            },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'Riyadh: 189,450 SAR over 142 orders. Jeddah: 185,000 SAR over 60 orders. Which city has the higher AVERAGE order value? Type riyadh or jeddah (lowercase).',
              ar: 'الرياض: 189,450 ريال على 142 طلباً. جدة: 185,000 ريال على 60 طلباً. أي مدينة لديها متوسط قيمة طلب أعلى؟ اكتب riyadh أو jeddah (أحرف صغيرة).',
            },
            accept: ['jeddah', 'جدة'],
            tolerance: 0.01,
            solution: { en: 'Jeddah ≈ 3,083 vs Riyadh ≈ 1,334 — nearly equal totals hide very different customers.', ar: 'جدة ≈ 3,083 مقابل الرياض ≈ 1,334 — إجماليات متقاربة تخفي عملاء مختلفين جداً.' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: '=AVERAGEIF(C2:C100, "Riyadh", D2:D100) — the third argument is…', ar: '=AVERAGEIF(C2:C100, "Riyadh", D2:D100) — المعامل الثالث هو…' },
              options: [ { en: 'The range to average', ar: 'النطاق المراد متوسطته' }, { en: 'The condition', ar: 'الشرط' }, { en: 'The count', ar: 'العدد' }, { en: 'The fallback value', ar: 'القيمة البديلة' } ],
              answer: 0,
              explain: { en: 'Condition range, criterion, then the range to average.', ar: 'نطاق الشرط ثم المعيار ثم نطاق المتوسط.' },
            },
            {
              type: 'tf',
              q: { en: 'AVERAGEIFS returns #DIV/0! when no rows match its criteria.', ar: 'تعيد AVERAGEIFS خطأ #DIV/0! عندما لا يطابق أي صف معاييرها.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: 'True — you cannot average zero values, so guard with IFERROR.', ar: 'صح — لا يمكن متوسط قيم معدومة، فاحمِها بـ IFERROR.' },
            },
            {
              type: 'num',
              q: { en: 'Paid orders in D2:D5: 400, 600, 1000, 800. What is =AVERAGE(D2:D5)?', ar: 'الطلبات المدفوعة في D2:D5: 400، 600، 1000، 800. ما ناتج =AVERAGE(D2:D5)؟' },
              answer: 700,
              tolerance: 0.01,
              explain: { en: '(400+600+1000+800)/4 = 2800/4 = 700.', ar: '(400+600+1000+800)/4 = 2800/4 = 700.' },
            },
          ],
          xp: 25,
        },
      ],
    },
];

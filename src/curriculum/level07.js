// Level 7 — Power BI. Bilingual (en/ar) curriculum data only.
// Single default export; no imports; no template literals.
export default {
  id: 'L7',
  num: 7,
  name: { en: 'Power BI', ar: 'باور بي آي' },
  goal: {
    en: 'Build professional business intelligence dashboards in Power BI — from raw data to interactive reports.',
    ar: 'ابنِ لوحات معلومات احترافية للتحليلات التجارية في Power BI — من البيانات الخام إلى التقارير التفاعلية.',
  },
  icon: '📈',
  modules: [
    {
      id: 'L7M1',
      name: { en: 'Getting Started with Power BI', ar: 'البدء مع Power BI' },
      lessons: [
        {
          id: 'L7M1L1',
          title: { en: 'What Is Power BI? Desktop, Service and Mobile', ar: 'ما هو Power BI؟ Desktop و Service و Mobile' },
          minutes: 12,
          description: {
            en: 'Meet the three Power BI components, learn the typical build-publish-view workflow, and see when Power BI clearly beats Excel.',
            ar: 'تعرّف على المكونات الثلاثة لـ Power BI، وسير العمل المعتاد: البناء ثم النشر ثم المشاهدة، ومتى تتفوق Power BI على Excel بوضوح.',
          },
          objectives: [
            { en: 'Name the three Power BI components and the role of each one.', ar: 'تسمية المكونات الثلاثة لـ Power BI ودور كل منها.' },
            { en: 'Explain the workflow: build in Desktop, publish to the Service, view on Mobile.', ar: 'شرح سير العمل: البناء في Desktop، ثم النشر على Service، ثم المشاهدة على Mobile.' },
            { en: 'Decide when a report belongs in Power BI instead of Excel.', ar: 'الحكم على متى يصبح التقرير أحقاً في Power BI بدلاً من Excel.' },
          ],
          body: {
            en:
              "Power BI is the business intelligence platform from Microsoft: one tool that connects to your data, cleans it, models it, and turns it into interactive reports and dashboards. Instead of copying numbers between spreadsheets every month, you build the report once and it stays connected to the source. For a data analyst it is today the most requested reporting skill in the Gulf job market, alongside Excel.\n\n" +
              "### The three components\n\n" +
              "- **Power BI Desktop**: a free Windows application where all the building happens. You connect to data, transform it with Power Query, build the data model, and design the report pages.\n" +
              "- **Power BI Service**: the cloud workspace at app.powerbi.com. You publish finished reports here, share them with colleagues by link, and schedule automatic refreshes.\n" +
              "- **Power BI Mobile**: the phone and tablet app where managers open published dashboards and check the numbers from anywhere.\n\n" +
              "The workflow is always the same: **built in Desktop**, then **published to the Service**, then **viewed on Mobile**. As a beginner you only need Desktop to start; it installs free from the Microsoft Store or from powerbi.microsoft.com. Inside Desktop, notice the three views on the left edge: **Report** (the visual canvas), **Data** (the tables shown as a grid) and **Model** (the relationships between tables).\n\n" +
              "### When Power BI beats Excel\n\n" +
              "| Situation | Why Power BI wins |\n|---|---|\n| Millions of rows | Excel slows down; Power BI compresses the data and handles it easily |\n| Monthly refresh | Excel needs manual copy-paste; Power BI refreshes from the source in one click |\n| Many managers asking questions | Slicers let each one filter the same report by branch or month |\n| One version of the truth | One data model instead of dozens of personal files with different numbers |\n\n" +
              "Excel is still the better tool for quick one-off calculations, small tables and familiar formulas. The professional habit is: keep Excel for ad-hoc analysis, and move a report into Power BI once it becomes repeated, shared, or too big.\n\n" +
              "### A real use case: Al-Noor Trading\n\n" +
              "Al-Noor Trading sells electrical supplies through three branches in Riyadh, Jeddah and Dammam. Every month the point-of-sale system exports about 180,000 sales rows to CSV files. The manager used to spend two days each month copying the files into Excel, fixing headers and rebuilding pivot tables. Since moving to Power BI, the refresh runs every morning, and one dashboard answers the three questions he actually asks: which branch is ahead, which product is selling, and whether November beat October.\n\n" +
              "> TIP: Install Power BI Desktop first and ignore the Service until your first report is finished. Publishing is one button later — building skills come first.",
            ar:
              'Power BI هي منصة ذكاء الأعمال من Microsoft: أداة واحدة تتصل بمصادر بياناتك، وتنظفها، وتبني منها نموذج بيانات، ثم تحوّلها إلى تقارير ولوحات معلومات تفاعلية. بدلاً من نسخ الأرقام يدوياً بين ملفات Excel كل شهر، تبني التقرير مرة واحدة فيبقى متصلاً بالمصدر. لهذا أصبحت Power BI اليوم أكثر مهارات إعداد التقارير طلباً لمحللي البيانات في سوق الخليج إلى جانب Excel.\n\n' +
              '### المكونات الثلاثة\n\n' +
              '- **Power BI Desktop**: تطبيق مجاني لنظام Windows يتم فيه كل البناء؛ تتصل فيه بالبيانات، وتحوّلها عبر Power Query، وتبني نموذج البيانات، وتصمم صفحات التقرير.\n' +
              '- **Power BI Service**: مساحة العمل السحابية على العنوان app.powerbi.com؛ تنشر فيها التقارير الجاهزة وتشاركها مع الزملاء برابط، وتجدول التحديث التلقائي.\n' +
              '- **Power BI Mobile**: تطبيق الهاتف والجهاز اللوحي الذي يفتح به المدراء اللوحات المنشورة ويتابعون الأرقام من أي مكان.\n\n' +
              'سير العمل واحد دائماً: **البناء في Desktop**، ثم **النشر على Service**، ثم **المشاهدة على Mobile**. كمتدرب جديد يكفيك Desktop للبدء، وهو مجاني ويُثبَّت من Microsoft Store أو من موقع powerbi.microsoft.com. داخل Desktop انتبه للأوضاع الثلاثة على الحافة اليسرى: **Report** (لوحة الرسم المرئية)، و**Data** (الجداول على شكل شبكة)، و**Model** (العلاقات بين الجداول).\n\n' +
              '### متى تتفوق Power BI على Excel\n\n' +
              '| الحالة | لماذا Power BI أفضل |\n|---|---|\n| ملايين الصفوف | Excel يبطئ، بينما Power BI يضغط البيانات ويتعامل معها بسهولة |\n| التحديث الشهري | Excel يحتاج نسخاً ولصقاً يدوياً، وPower BI يحدّث من المصدر بنقرة واحدة |\n| مديرون كثير يسألون | الـ Slicer يتيح لكل مدير تصفية التقرير نفسه حسب الفرع أو الشهر |\n| مصدر حقيقة واحد | نموذج بيانات واحد بدلاً من عشرات الملفات الشخصية بأرقام مختلفة |\n\n' +
              'يبقى Excel أفضل للعمليات السريعة والحسابات المؤقتة والجداول الصغيرة والمعادلات المألوفة. والعادة المهنية الصحيحة: أبقِ Excel للتحليل الآني، وانتقل إلى Power BI عندما يصبح التقرير متكرراً أو مشتركاً أو كبيراً.\n\n' +
              '### حالة واقعية: شركة النور للتجارة\n\n' +
              'شركة النور للتجارة تبيع مستلزمات الكهرباء عبر ثلاثة فروع في الرياض وجدة والدمام. يصدّر نظام نقاط البيع شهرياً نحو 180,000 صف مبيعات في ملفات CSV. كان المدير يقضي يومين كل شهر في نسخ الملفات إلى Excel وإصلاح العناوين وإعادة بناء الجداول المحورية. بعد الانتقال إلى Power BI يعمل التحديث كل صباح، وتجيب لوحة واحدة عن الأسئلة الثلاثة التي يسألها فعلاً: أي فرع متقدم؟ أي منتج يبيع؟ وهل تجاوز شهر نوفمبر شهر أكتوبر؟\n\n' +
              '> TIP: ثبّت Power BI Desktop أولاً ولا تشغل نفسك بـ Service قبل إنهاء أول تقرير؛ النشر لاحقاً زر واحد، والمهارة تُبنى أولاً في Desktop.',
          },
          terms: [
            {
              en: 'Power BI Desktop',
              ar: 'تطبيق Power BI Desktop',
              def: {
                en: 'The free Windows application where you connect, transform, model and design Power BI reports.',
                ar: 'التطبيق المجاني لنظام Windows الذي تتصل فيه بالبيانات وتحوّلها وتبني النموذج وتصمم تقارير Power BI.',
              },
            },
            {
              en: 'Power BI Service',
              ar: 'خدمة Power BI السحابية',
              def: {
                en: 'The cloud workspace (app.powerbi.com) where reports are published, shared and refreshed automatically.',
                ar: 'مساحة العمل السحابية (app.powerbi.com) التي تُنشر فيها التقارير وتُشارك ويُجدول تحديثها التلقائي.',
              },
            },
            {
              en: 'Business Intelligence (BI)',
              ar: 'ذكاء الأعمال',
              def: {
                en: 'The practice of turning raw operational data into reports and dashboards that support decisions.',
                ar: 'تحويل البيانات التشغيلية الخام إلى تقارير ولوحات معلومات تدعم اتخاذ القرار.',
              },
            },
            {
              en: 'Dashboard',
              ar: 'لوحة معلومات',
              def: {
                en: 'A single interactive page that shows the most important measures of a business with visuals and slicers.',
                ar: 'صفحة تفاعلية واحدة تعرض أهم مقاييس النشاط التجاري عبر مرئيات ومقسمات بيانات.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'From Excel chaos to one dashboard', ar: 'من فوضى Excel إلى لوحة واحدة' },
              body: {
                en:
                  'Before: every month, three CSV exports, one Excel file per branch, three days of fixing and merging, and three different totals at the end.\n\n' +
                  'After: one Power BI Desktop file (Training.pbix) connects to the three CSV files, Power Query cleans them with the same recipe, and one dashboard shows sales by branch, by product and by month. The manager opens it on his phone at 8 a.m. and the numbers are already from 6 a.m.\n\n' +
                  '> The lesson: Power BI did not replace the Excel skills — it replaced the monthly repetition of them.',
                ar:
                  'قبل: كل شهر ثلاثة ملفات CSV، وملف Excel لكل فرع، وثلاثة أيام من الإصلاح والدمج، وثلاثة مجاميع مختلفة في النهاية.\n\n' +
                  'بعد: ملف Power BI Desktop واحد (Training.pbix) يتصل بالملفات الثلاثة، وينظفها Power Query بالوصفة نفسها، وتعرض لوحة واحدة المبيعات حسب الفرع والمنتج والشهر. يفتح المدير اللوحة على هاتفه الثامنة صباحاً والأرقام من السادسة أصلاً.\n\n' +
                  '> الدرس: Power BI لم يحُذ مهارات Excel، بل حُذ التكرار الشهري لها.',
              },
            },
          ],
          steps: [
            { en: 'Install Power BI Desktop free from the Microsoft Store or from powerbi.microsoft.com.', ar: 'ثبّت Power BI Desktop مجاناً من Microsoft Store أو من موقع powerbi.microsoft.com.' },
            { en: 'Open it and find the three views on the left edge: Report, Data and Model.', ar: 'افتحه وابحث عن الأوضاع الثلاثة على الحافة اليسرى: Report و Data و Model.' },
            { en: 'Hover over the Home ribbon and locate the Get Data button — every report starts there.', ar: 'مرر فوق شريط Home وحدد موقع زر Get Data؛ منه يبدأ كل تقرير.' },
            { en: 'Press Ctrl+S and save an empty file as Training.pbix to meet the .pbix format.', ar: 'اضغط Ctrl+S واحفظ ملفاً فارغاً باسم Training.pbix لتفهم صيغة .pbix.' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: "Which Power BI component is the free Windows application used to BUILD reports? Answer with the component name in English.",
              ar: 'أي مكوّن من مكوّنات Power BI هو تطبيق Windows المجاني الذي يُبنى فيه التقرير؟ أجب باسم المكوّن بالإنجليزية.',
            },
            accept: ['power bi desktop', 'desktop', 'powerbidesktop'],
            solution: {
              en: 'Power BI Desktop. The Service publishes finished reports, Mobile only views them; Desktop is the free builder.',
              ar: 'Power BI Desktop. أما Service فينشر التقارير الجاهزة، و Mobile يشاهدها فقط؛ و Desktop هو أداة البناء المجانية.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which component is used to BUILD and design the report pages?', ar: 'أي مكوّن يُستخدم لبناء صفحات التقرير وتصميمها؟' },
              options: [
                { en: 'Power BI Desktop', ar: 'Power BI Desktop' },
                { en: 'Power BI Service', ar: 'Power BI Service' },
                { en: 'Power BI Mobile', ar: 'Power BI Mobile' },
                { en: 'Power Pivot', ar: 'Power Pivot' },
              ],
              answer: 0,
              explain: {
                en: 'Power BI Desktop is the free builder application. The Service shares published reports and Mobile only displays them.',
                ar: 'Power BI Desktop هو تطبيق البناء المجاني؛ أما Service فيشارك التقارير المنشورة و Mobile يعرضها فقط.',
              },
              mistake: {
                en: 'Choosing Service is the common mix-up: it receives the finished report, it is not where you design it.',
                ar: 'اختيار Service هو الخلط الشائع: هو مكان استلام التقرير الجاهز لا تصميمه.',
              },
            },
            {
              type: 'tf',
              q: { en: 'Power BI Desktop requires a paid license before you can start building reports.', ar: 'يحتاج Power BI Desktop إلى ترخيص مدفوع قبل البدء ببناء التقارير.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 1,
              explain: {
                en: 'Power BI Desktop is free to download and use. Only advanced sharing features of the Service may need a license.',
                ar: 'Power BI Desktop مجاني التنزيل والاستخدام، وقد تحتاج الترخيص فقط لميزات المشاركة المتقدمة في Service.',
              },
            },
            {
              type: 'fill',
              q: { en: 'A Power BI Desktop report is saved with the file extension .____ (three letters).', ar: 'يُحفظ تقرير Power BI Desktop بامتداد الملف .____ (ثلاثة أحرف).' },
              accept: ['pbix'],
              explain: {
                en: 'The .pbix file stores the data model, the transformations and every report page in one compressed package.',
                ar: 'يحفظ ملف .pbix نموذج البيانات والتحويلات وكل صفحات التقرير في حزمة مضغوطة واحدة.',
              },
            },
          ],
          xp: 25,
        },
        {
          id: 'L7M1L2',
          title: { en: 'Connecting to Data Sources', ar: 'الاتصال بمصادر البيانات' },
          minutes: 12,
          description: {
            en: 'Connect Power BI to Excel, CSV and database sources through Get Data, understand Import mode, and load your first table.',
            ar: 'اتصل بـ Power BI بمصادر Excel و CSV وقواعد البيانات عبر Get Data، وافهم وضع الاستيراد Import mode، وحمل أول جدول لك.',
          },
          objectives: [
            { en: 'Use the Get Data button to connect to Excel, CSV and SQL Server sources.', ar: 'استخدام زر Get Data للاتصال بمصادر Excel و CSV و SQL Server.' },
            { en: 'Select tables in the Navigator window and choose Load or Transform Data deliberately.', ar: 'اختيار الجداول من نافذة Navigator والاختيار بوعي بين Load و Transform Data.' },
            { en: 'Explain what Import mode stores inside the .pbix file and when refresh matters.', ar: 'شرح ما يخزنه وضع الاستيراد داخل ملف .pbix ومتى يصبح التحديث مهماً.' },
          ],
          body: {
            en:
              'Power BI connects to almost anything: Excel workbooks, CSV and text files, SQL Server databases, SharePoint lists, web pages and dozens of cloud services. The full list hides under Home → Get Data → More. In most companies the daily reality is just three sources: **Excel or CSV exports** from internal systems, **a SQL database** for transactional data, and occasionally **a web table** for public figures like currency rates.\n\n' +
              '### The Get Data walkthrough\n\n' +
              '1. On the **Home** ribbon click **Get Data**. A picker opens with the most common sources.\n' +
              '2. Choose **Excel Workbook** (or Text/CSV for .csv files, or SQL Server for a database).\n' +
              '3. Browse to the file — for example C:\\Data\\Sales2026.xlsx — and click Open.\n' +
              '4. The **Navigator** window appears, listing every sheet and table inside the file with a preview on the right.\n' +
              '5. Tick the tables you need, then choose **Load** to import them as they are, or **Transform Data** to open Power Query first — the professional choice, because raw exports almost always need cleaning.\n\n' +
              '### Import mode: what actually happens\n\n' +
              'Power BI Desktop defaults to **Import mode**: on load, a compressed copy of the data is stored inside the .pbix file itself. That copy is why reports open fast and work offline. The numbers change only when you press **Refresh**, which reconnects to the source and replays every transformation. A second mode, **DirectQuery**, leaves the data in the database and queries it live — useful for huge tables, but slower visuals and more load on the server. As a beginner, stay with Import.\n\n' +
              '> TIP: If the numbers in a published report look old, it is not broken: nobody pressed Refresh since the source file changed.\n\n' +
              '### Keeping connections healthy\n\n' +
              'Power BI remembers the **path** of every source. If you move or rename sales.xlsx, refresh fails with a file-not-found error, and you repair it under File → Options and settings → Data source settings. Keep source files in one stable folder — Gulf analysts usually agree on a shared folder like D:\\Reports\\Sources — and treat renaming a source file as an action that breaks reports.',
            ar:
              'تتصل Power BI بأي شيء تقريباً: مصنفات Excel، وملفات CSV والنصوص، وقواعد بيانات SQL Server، وقوائم SharePoint، وصفحات الويب، وعشرات الخدمات السحابية. والقائمة الكاملة تختبئ تحت Home ← Get Data ← More. في معظم الشركات يكون الواقع اليومي ثلاثة مصادر فقط: **تصديرات Excel أو CSV** من الأنظمة الداخلية، و**قاعدة بيانات SQL** للبيانات التشغيلية، وأحياناً **جدول ويب** لأرقام عامة مثل أسعار العملات.\n\n' +
              '### خطوات Get Data بالتفصيل\n\n' +
              '1. من شريط **Home** انقر **Get Data**، فتظهر قائمة بالمصادر الأكثر شيوعاً.\n' +
              '2. اختر **Excel Workbook** (أو Text/CSV لملفات .csv، أو SQL Server لقاعدة البيانات).\n' +
              '3. حدد الملف — مثلاً C:\\Data\\Sales2026.xlsx — وانقر Open.\n' +
              '4. تظهر نافذة **Navigator** وتسرد كل أوراق وجداول الملف مع معاينة على اليمين.\n' +
              '5. اختر الجداول المطلوبة، ثم اختر **Load** لاستيرادها كما هي، أو **Transform Data** لفتح Power Query أولاً — وهو الاختيار المهني، لأن التصديرات الخام تحتاج تنظيفاً دائماً تقريباً.\n\n' +
              '### وضع الاستيراد Import mode: ماذا يحدث فعلاً\n\n' +
              'يعتمد Power BI Desktop وضع **Import mode** افتراضياً: عند التحميل تُخزَّن نسخة مضغوطة من البيانات داخل ملف .pbix نفسه. هذه النسخة سبب سرعة فتح التقارير وعملها دون اتصال. ولا تتغير الأرقام إلا عند الضغط على **Refresh**، الذي يعيد الاتصال بالمصدر ويعيد تشغيل كل التحويلات. وهناك وضع ثانٍ هو **DirectQuery** يترك البيانات في قاعدة البيانات ويستعلم منها مباشرة — مفيد للجداول الضخمة لكنه أبطأ في المرئيات وأثقل على الخادم. كبداية، ابقَ على Import.\n\n' +
              '> TIP: إذا بدت الأرقام في تقرير منشور قديمة فهو ليس معطوباً: أحداً لم يضغط Refresh منذ تغيّر ملف المصدر.\n\n' +
              '### الحفاظ على اتصال سليم\n\n' +
              'تحفظ Power BI **مسار** كل مصدر. فإن نقلت أو غيّرت اسم sales.xlsx فشل التحديث بخطأ عدم وجود الملف، وتصلحه من File ← Options and settings ← Data source settings. أبقِ ملفات المصدر في مجلد ثابت واحد — يتفق المحللون عادة على مجلد مشترك مثل D:\\Reports\\Sources — وتعامل مع تغيير اسم ملف مصدر كفعل يكسر التقارير.',
          },
          terms: [
            {
              en: 'Data Source',
              ar: 'مصدر البيانات',
              def: {
                en: 'Any file, database or service that holds the data your report reads: Excel, CSV, SQL Server, web.',
                ar: 'أي ملف أو قاعدة بيانات أو خدمة تحتفظ بالبيانات التي يقرأها تقريرك: Excel أو CSV أو SQL Server أو الويب.',
              },
            },
            {
              en: 'Get Data',
              ar: 'زر Get Data',
              def: {
                en: 'The Home ribbon button that opens the source picker and starts every Power BI project.',
                ar: 'الزر في شريط Home الذي يفتح قائمة المصادر ويبدأ به كل مشروع Power BI.',
              },
            },
            {
              en: 'Navigator',
              ar: 'نافذة Navigator',
              def: {
                en: 'The window that lists the sheets and tables inside a chosen file, with a preview before you load.',
                ar: 'النافذة التي تسرد أوراق وجداول الملف المختار مع معاينة قبل التحميل.',
              },
            },
            {
              en: 'Import Mode',
              ar: 'وضع الاستيراد Import mode',
              def: {
                en: 'The default mode that stores a compressed copy of the data inside the .pbix file.',
                ar: 'الوضع الافتراضي الذي يخزن نسخة مضغوطة من البيانات داخل ملف .pbix.',
              },
            },
            {
              en: 'Refresh',
              ar: 'التحديث Refresh',
              def: {
                en: 'The action that reconnects to the sources and replays all transformations to bring the model up to date.',
                ar: 'الإجراء الذي يعيد الاتصال بالمصادر ويعيد تشغيل كل التحويلات لتحديث النموذج.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'Connecting the Al-Noor sales workbook', ar: 'الاتصال بمصنف مبيعات شركة النور' },
              body: {
                en:
                  '1. Home → Get Data → Excel Workbook.\n2. Pick Al-Noor-Sales-November.xlsx from the shared folder and click Open.\n3. In the Navigator, tick the sheet named Sales and watch the preview: branch, product, amount, date.\n4. Click **Transform Data** instead of Load — the headers need fixing and the date column arrives as text.\n5. Power Query opens with the table; after cleaning, Home → Close & Apply loads it into the model.\n\n' +
                  'Result: one table called Sales now appears in the Data view, ready for modeling.',
                ar:
                  '1. Home ← Get Data ← Excel Workbook.\n2. اختر الملف Al-Noor-Sales-November.xlsx من المجلد المشترك وانقر Open.\n3. في Navigator اختر الورقة المسماة Sales وراقب المعاينة: branch و product و amount و date.\n4. انقر **Transform Data** بدلاً من Load — لأن العناوين تحتاج إصلاحاً وعمود التاريخ واصل نصياً.\n5. يفتح Power Query بالجدول؛ وبعد التنظيف حمّله عبر Home ← Close & Apply.\n\n' +
                  'النتيجة: جدول واحد اسمه Sales ظهر الآن في وضع Data جاهزاً للنمذجة.',
              },
            },
          ],
          steps: [
            { en: 'Home → Get Data → Excel Workbook.', ar: 'Home ← Get Data ← Excel Workbook.' },
            { en: 'Pick the file Al-Noor-Sales.xlsx and click Open.', ar: 'اختر الملف Al-Noor-Sales.xlsx وانقر Open.' },
            { en: 'In the Navigator, tick the Sales sheet and read the preview columns.', ar: 'في Navigator اختر ورقة Sales واقرأ أعمدة المعاينة.' },
            { en: 'Click Transform Data (not Load) so Power Query opens with the data.', ar: 'انقر Transform Data لا Load ليفتح Power Query مع البيانات.' },
            { en: 'After cleaning, press Home → Close & Apply to load the table into the model.', ar: 'بعد التنظيف اضغط Home ← Close & Apply لتحميل الجدول إلى النموذج.' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Which button on the Home ribbon opens the window for choosing a data source? (Two words, English.)',
              ar: 'أي زر في شريط Home يفتح نافذة اختيار مصدر البيانات؟ (كلمتان بالإنجليزية.)',
            },
            accept: ['get data', 'getdata'],
            solution: {
              en: 'Get Data. It opens the picker with Excel Workbook, Text/CSV, SQL Server and More.',
              ar: 'Get Data. يفتح قائمة المصادر: Excel Workbook و Text/CSV و SQL Server و More.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'You need last month sales.xlsx inside your model. Which Home ribbon button starts this?', ar: 'تحتاج ملف مبيعات الشهر الماضي sales.xlsx داخل نموذجك. أي زر في شريط Home يبدأ ذلك؟' },
              options: [
                { en: 'Get Data', ar: 'Get Data' },
                { en: 'Transform Data', ar: 'Transform Data' },
                { en: 'New Visual', ar: 'New Visual' },
                { en: 'Model View', ar: 'Model View' },
              ],
              answer: 0,
              explain: {
                en: 'Get Data opens the source picker. Transform Data comes after choosing a source, when cleaning is needed.',
                ar: 'زر Get Data يفتح قائمة المصادر؛ أما Transform Data فيأتي بعد اختيار المصدر عند الحاجة إلى التنظيف.',
              },
            },
            {
              type: 'tf',
              q: { en: 'In Import mode, a compressed copy of the data is stored inside the .pbix file.', ar: 'في وضع الاستيراد Import mode تُخزَّن نسخة مضغوطة من البيانات داخل ملف .pbix.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'That local compressed copy is exactly why Import mode reports open fast and work offline.',
                ar: 'هذه النسخة المضغوطة المحلية هي سبب سرعة فتح تقارير Import mode وعملها دون اتصال.',
              },
            },
            {
              type: 'mcq',
              q: { en: 'Before loading, which window lets you tick tables and preview their contents?', ar: 'قبل التحميل، أي نافذة تتيح اختيار الجداول ومعاينة محتواها؟' },
              options: [
                { en: 'Navigator', ar: 'Navigator' },
                { en: 'Filters pane', ar: 'جزء المرشحات' },
                { en: 'Model view', ar: 'وضع Model' },
                { en: 'Fields list', ar: 'قائمة الحقول' },
              ],
              answer: 0,
              explain: {
                en: 'The Navigator lists sheets and tables of the chosen file with a preview on the right.',
                ar: 'نافذة Navigator تسرد أوراق وجداول الملف المختار مع معاينة على اليمين.',
              },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L7M2',
      name: { en: 'Power Query: Cleaning and Transformation', ar: 'Power Query: التنظيف والتحويل' },
      lessons: [
        {
          id: 'L7M2L1',
          title: { en: 'Power Query Basics', ar: 'أساسيات Power Query' },
          minutes: 12,
          description: {
            en: 'Understand ETL, open the Power Query editor, read the Applied Steps list, and fix data types, headers and junk rows.',
            ar: 'افهم مفهوم ETL، وافتح محرر Power Query، واقرأ قائمة Applied Steps، وأصلح أنواع البيانات والعناوين والصفوف الزائدة.',
          },
          objectives: [
            { en: 'Explain what ETL means and why Power Query is the ETL tool of Power BI.', ar: 'شرح معنى ETL ولماذا يُعد Power Query أداة ETL في Power BI.' },
            { en: 'Use the Applied Steps list to review, edit and delete transformations.', ar: 'استخدام قائمة Applied Steps لمراجعة التحويلات وتعديلها وحذفها.' },
            { en: 'Change data types, promote headers and remove unwanted columns and rows.', ar: 'تغيير أنواع البيانات وترقية العناوين وإزالة الأعمدة والصفوف غير المرغوبة.' },
          ],
          body: {
            en:
              '### What Power Query is\n\n' +
              'Power Query is the data cleaning engine built into Power BI (and into Excel). Its job is **ETL**: **Extract** the raw data from the source, **Transform** it into a clean shape, and **Load** the result into the model. Real data is never clean: exports come with junk header rows, dates stored as text, amounts with currency text glued to them, and columns you will never use. Power Query fixes all of this once — and repeats the same fixes automatically on every refresh.\n\n' +
              '### The Applied Steps list\n\n' +
              'Home → Transform Data opens the Power Query editor. Every click you make there is recorded, in order, in the **Applied Steps** pane on the right side. Think of it as a recipe: remove junk row → promote headers → change type → remove columns. On refresh the recipe replays exactly. You can click any step to see the table as it looked at that moment, delete a mistaken step, or insert a new one in the middle — the safest undo system in the BI world.\n\n' +
              '### The operations beginners need first\n\n' +
              '- **Change a data type**: click the small icon at the left of the column header (ABC = text, 123 = whole number, calendar = date) or use the Data Type dropdown in the Home ribbon. Dates must be Date and amounts Decimal Number, or every later calculation fails.\n' +
              '- **Remove columns**: right-click a column → Remove. Removing what you do not need makes the model smaller and faster.\n' +
              '- **Remove rows**: Home → Remove Rows → Top Rows is the classic fix for junk lines at the top of an export.\n' +
              '- **Use First Row as Headers**: Home → Use First Row as Headers, when the export left the column names inside the first data row.\n\n' +
              '> WARN: Changing a data type can fail on dirty values, and Power Query shows Error cells rather than silently breaking. Fix those values with Replace Values or Remove Errors before continuing.\n\n' +
              'When the table looks right, press **Home → Close & Apply**: Power Query writes the clean result into the data model and the report canvas becomes available.',
            ar:
              '### ما هو Power Query\n\n' +
              'Power Query هو محرك تنظيف البيانات المدمج في Power BI (وكذلك في Excel). وظيفته هي **ETL**: **Extract** سحب البيانات الخام من المصدر، ثم **Transform** تحويلها إلى شكل نظيف، ثم **Load** تحميل النتيجة إلى النموذج. البيانات الحقيقية ليست نظيفة أبداً: تأتي التصديرات بصفوف عناوين زائدة، وتواريخ مخزنة كنص، ومبالغ ملصوق بها نص العملة، وأعمدة لن تستخدمها أبداً. يعالج Power Query كل ذلك مرة واحدة — ثم يعيد الإصلاحات نفسها تلقائياً عند كل تحديث.\n\n' +
              '### قائمة Applied Steps\n\n' +
              'يفتح الخيار Home ← Transform Data محرر Power Query. كل نقرة تجريها هناك تُسجَّل بالترتيب في جزء **Applied Steps** على الجهة اليمنى. تعامل معها كوصفة طبخ: حذف الصف الزائد ← ترقية العناوين ← تغيير النوع ← إزالة الأعمدة. وعند التحديث تعاد الوصفة كما هي تماماً. يمكنك النقر على أي خطوة لرؤية الجدول كما كان لحظتها، أو حذف خطوة خاطئة، أو إدخال خطوة جديدة في المنتصف — وهو أأمن نظام تراجع في عالم ذكاء الأعمال.\n\n' +
              '### العمليات الأولى التي يحتاجها المبتدئ\n\n' +
              '- **تغيير نوع البيانات**: انقر الأيقونة الصغيرة على يسار رأس العمود (ABC نص، 123 رقم صحيح، تقويم تاريخ) أو استخدم قائمة Data Type في شريط Home. يجب أن يكون التاريخ Date والمبالغ Decimal Number، وإلا فشلت كل الحسابات لاحقاً.\n' +
              '- **إزالة الأعمدة**: انقر العمود بالزر الأيمن ثم Remove؛ فإزالة غير المفيد تصغّر النموذج ويسرّعه.\n' +
              '- **إزالة الصفوف**: Home ← Remove Rows ← Top Rows هو الحل الكلاسيكي للأسطر الزائدة أعلى التصدير.\n' +
              '- **ترقية العناوين**: Home ← Use First Row as Headers عندما يترك التصدير أسماء الأعمدة داخل صف البيانات الأول.\n\n' +
              '> WARN: قد يفشل تغيير نوع البيانات مع القيم المتسخة، فيعرض Power Query خلايا Error بدلاً من التعطل الصامت. أصلح تلك القيم بـ Replace Values أو Remove Errors قبل المتابعة.\n\n' +
              'عندما يصبح الجدول سليماً اضغط **Home ← Close & Apply**، فيكتب Power Query النتيجة النظيفة إلى نموذج البيانات ويتاح لوحة التقرير للتصميم.',
          },
          terms: [
            {
              en: 'Power Query',
              ar: 'أداة Power Query',
              def: {
                en: 'The transformation engine inside Power BI that cleans and reshapes data before it is loaded into the model.',
                ar: 'محرك التحويل داخل Power BI الذي ينظف البيانات ويعيد تشكيلها قبل تحميلها إلى النموذج.',
              },
            },
            {
              en: 'ETL',
              ar: 'الاستخراج والتحويل والتحميل (ETL)',
              def: {
                en: 'Extract, Transform, Load: pull data from the source, clean and reshape it, then load it into the model.',
                ar: 'استخراج البيانات من المصدر، ثم تنظيفها وإعادة تشكيلها، ثم تحميلها إلى النموذج.',
              },
            },
            {
              en: 'Applied Steps',
              ar: 'قائمة Applied Steps',
              def: {
                en: 'The ordered list of every transformation you applied; it replays automatically on each refresh.',
                ar: 'القائمة المرتبة بكل تحويل طبقته، وتعاد تلقائياً عند كل تحديث.',
              },
            },
            {
              en: 'Data Type',
              ar: 'نوع البيانات',
              def: {
                en: 'The kind of value a column holds: text, whole number, decimal, date. Wrong types break calculations.',
                ar: 'نوع القيم في العمود: نص أو رقم صحيح أو رقم عشري أو تاريخ؛ والأنواع الخاطئة تكسر الحسابات.',
              },
            },
            {
              en: 'Close & Apply',
              ar: 'إغلاق وتطبيق (Close & Apply)',
              def: {
                en: 'The button that saves Power Query work and loads the cleaned tables into the data model.',
                ar: 'الزر الذي يحفظ عمل Power Query ويحمّل الجداول المنظفة إلى نموذج البيانات.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'Cleaning the Al-Noor November export', ar: 'تنظيف تصدير نوفمبر لشركة النور' },
              body: {
                en:
                  'The raw CSV arrives with two junk title rows, headers inside row 3, InvoiceDate stored as text, Amount written like 1,250.00 SAR, and a CashierPhotoLink column nobody needs.\n\n' +
                  '| Problem in the raw file | Applied step |\n|---|---|\n| Two junk title rows at the top | Remove Rows → Remove Top Rows (2) |\n| Column names inside the first data row | Use First Row as Headers |\n| InvoiceDate stored as text | Change Type → Date |\n| Amount written as 1,250.00 SAR | Replace Values to strip SAR, then Change Type → Decimal Number |\n| Unused CashierPhotoLink column | Right-click → Remove |\n\n' +
                  'Six applied steps, one click on Close & Apply — and next month the same six steps run by themselves.',
                ar:
                  'يصل ملف CSV الخام بصفين زائدين للعنوان، وأسماء الأعمدة داخل الصف الثالث، و InvoiceDate مخزنة نصاً، و Amount بصيغة 1,250.00 SAR، وعمود CashierPhotoLink لا يحتاجه أحد.\n\n' +
                  '| المشكلة في الملف الخام | الخطوة المطبقة |\n|---|---|\n| صفان زائدان في الأعلى | Remove Rows ← Remove Top Rows (2) |\n| أسماء الأعمدة داخل صف البيانات الأول | Use First Row as Headers |\n| InvoiceDate مخزن نصاً | Change Type ← Date |\n| Amount بصيغة 1,250.00 SAR | Replace Values لإزالة SAR ثم Change Type ← Decimal Number |\n| عمود CashierPhotoLink غير المستخدم | زر أيمن ← Remove |\n\n' +
                  'ست خطوات مطبقة، ونقرة واحدة على Close & Apply — وفي الشهر القادم تعمل الخطوات الست وحدها.',
              },
            },
          ],
          steps: [
            { en: 'Home → Transform Data to open the Power Query editor.', ar: 'Home ← Transform Data لفتح محرر Power Query.' },
            { en: 'Home → Remove Rows → Remove Top Rows → 2, to delete the junk title lines.', ar: 'Home ← Remove Rows ← Remove Top Rows ← 2 لحذف صفوف العنوان الزائدة.' },
            { en: 'Home → Use First Row as Headers.', ar: 'Home ← Use First Row as Headers.' },
            { en: 'Click the type icon on InvoiceDate and choose Date; on Amount choose Decimal Number.', ar: 'انقر أيقونة النوع على InvoiceDate واختر Date، وعلى Amount اختر Decimal Number.' },
            { en: 'Home → Close & Apply to save the cleaning into the model.', ar: 'Home ← Close & Apply لحفظ التنظيف في النموذج.' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'In Power Query, which pane records every transformation step in order, like a recipe? (Two words, English.)',
              ar: 'في Power Query، أي جزء يسجل كل خطوة تحويل بالترتيب كوصفة طبخ؟ (كلمتان بالإنجليزية.)',
            },
            accept: ['applied steps', 'the applied steps', 'appliedsteps', 'applied step'],
            solution: {
              en: 'The Applied Steps pane. Click a step to revisit the table at that point; delete or reorder steps to change the recipe.',
              ar: 'جزء Applied Steps. انقر أي خطوة لرؤية الجدول عند تلك اللحظة، واحذف الخطوات أو رتبها لتغيير الوصفة.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'What do the letters ETL stand for?', ar: 'ماذا تعني الحروف ETL؟' },
              options: [
                { en: 'Extract, Transform, Load', ar: 'استخراج وتحويل وتحميل' },
                { en: 'Edit, Test, Launch', ar: 'تحرير واختبار وتشغيل' },
                { en: 'Export, Transfer, List', ar: 'تصدير ونقل وإدراج' },
                { en: 'Enter, Type, Link', ar: 'إدخال وكتابة وربط' },
              ],
              answer: 0,
              explain: {
                en: 'Extract from the source, Transform into a clean shape, Load into the model — the three jobs of Power Query.',
                ar: 'الاستخراج من المصدر، ثم التحويل إلى شكل نظيف، ثم التحميل إلى النموذج — وهي وظائف Power Query الثلاث.',
              },
            },
            {
              type: 'tf',
              q: { en: 'You can delete or reorder a step in the Applied Steps list to change the cleaning recipe.', ar: 'يمكنك حذف خطوة من قائمة Applied Steps أو تغيير ترتيبها لتعديل وصفة التنظيف.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'The Applied Steps list is fully editable: click a step to inspect it, delete it, or insert transformations between steps.',
                ar: 'قائمة Applied Steps قابلة للتحرير كلياً: انقر خطوة لفحصها أو احذفها أو أدخل تحويلات بين الخطوات.',
              },
            },
            {
              type: 'mcq',
              q: { en: 'The Amount column shows the text icon (ABC) but holds 1,250.00 SAR. Where do you change its type?', ar: 'عمود Amount يظهر بأيقونة النص (ABC) وقيمه 1,250.00 SAR. أين تغيّر نوعه؟' },
              options: [
                { en: 'The type icon in the column header or the Data Type dropdown in the Home ribbon', ar: 'أيقونة النوع في رأس العمود أو قائمة Data Type في شريط Home' },
                { en: 'The Filters pane of the report', ar: 'جزء المرشحات في التقرير' },
                { en: 'The Model view relationships', ar: 'علاقات وضع Model' },
                { en: 'The Visualizations pane', ar: 'جزء المرئيات' },
              ],
              answer: 0,
              explain: {
                en: 'Data types belong to Power Query: the header icon or the Data Type dropdown, followed by a Replace Values for the SAR text.',
                ar: 'أنواع البيانات من مهام Power Query: أيقونة الرأس أو قائمة Data Type، ثم Replace Values لإزالة نص SAR.',
              },
            },
          ],
          xp: 25,
        },
        {
          id: 'L7M2L2',
          title: { en: 'Transformations That Matter', ar: 'التحويلات المهمة' },
          minutes: 12,
          description: {
            en: 'Merge and append tables, split columns by delimiter, replace values, and turn wide tables into rows with Unpivot.',
            ar: 'ادمج الجداول وألصقها، وقسّم الأعمدة بالفاصل، واستبدل القيم، وحوّل الجداول العريضة إلى صفوف عبر Unpivot.',
          },
          objectives: [
            { en: 'Choose correctly between Merge Queries (join by key) and Append Queries (stack tables).', ar: 'الاختيار الصحيح بين Merge Queries للربط بالمفتاح و Append Queries للتراص.' },
            { en: 'Split columns by delimiter and replace unwanted values.', ar: 'تقسيم الأعمدة بالفاصل واستبدال القيم غير المرغوبة.' },
            { en: 'Recognize when a wide table needs Unpivot.', ar: 'التعرّف على الجداول العريضة التي تحتاج Unpivot.' },
          ],
          body: {
            en:
              '### Merge Queries: joining two tables\n\n' +
              '**Merge Queries** combines two tables through a matching key column, exactly like VLOOKUP in Excel or JOIN in SQL. Example: your sales table has ProductID, and a small products table has ProductID and Category. Home → Merge Queries → pick the products table → select ProductID in both tables → OK. Power Query adds a column holding the matching product row; click the expand icon (two arrows) and choose which columns to keep. The default join, **Left Outer**, keeps every sales row and brings the category wherever a match exists.\n\n' +
              '### Append Queries: stacking tables\n\n' +
              '**Append Queries** stacks tables with the same columns on top of each other. When the POS system exports one CSV per month, you append January, February and March into one Sales table and the row count simply adds up. Rule: column names must match; extra or missing columns become null in the result.\n\n' +
              '### Split, Replace and Unpivot\n\n' +
              '- **Split Column**: a Region column contains Riyadh-Store1. Transform → Split Column → By Delimiter → "-" gives two clean columns: City and Store.\n' +
              '- **Replace Values**: right-click the column → Replace Values; change N/A to null, or null to 0 when zero is the honest number.\n' +
              '- **Unpivot**: wide tables with one column per month (Jan, Feb, Mar sales) are a nightmare to analyze. Select the month columns → Transform → Unpivot Columns → you get tidy Month and Value rows. This single transformation saves hours.\n\n' +
              '### A cleaning example, end to end\n\n' +
              'The Al-Noor export has Region values like Riyadh-Store1, some ProductID values missing, and three monthly files. The recipe: Append the three files → Split Region by "-" into City and Store → Merge the products table on ProductID → Replace null Category with Unknown → Close & Apply. Five transformations, all replayed automatically next month.\n\n' +
              '> TIP: Do heavy reshaping (append, merge, unpivot) in Power Query, never in Excel before loading. The refresh then stays fully automatic.',
            ar:
              '### دمج الجداول Merge Queries\n\n' +
              'يجمع **Merge Queries** جدولين عبر عمود مفتاح متطابق، تماماً كـ VLOOKUP في Excel أو JOIN في SQL. مثال: جدول مبيعاتك فيه ProductID، وجدول منتجات صغير فيه ProductID و Category. المسار: Home ← Merge Queries ← اختر جدول المنتجات ← حدد ProductID في الجدولين ← OK. يضيف Power Query عموداً يحمل صف المنتج المطابق؛ انقر أيقونة التوسيع (سهمان) واختر الأعمدة التي تريدها. والربط الافتراضي **Left Outer** يُبقي كل صفوف المبيعات ويعلب الفئة حيثما وُجد تطابق.\n\n' +
              '### التراص Append Queries\n\n' +
              'يرصّ **Append Queries** الجداول ذات الأعمدة نفسها فوق بعضها. عندما يصدّر نظام نقاط البيع ملف CSV لكل شهر، ترصّ يناير وفبراير ومارس في جدول Sales واحد ويجمع عدد الصفوف. القاعدة: أن تتطابق أسماء الأعمدة؛ والأعمدة الزائدة أو الناقصة تصبح null في النتيجة.\n\n' +
              '### التقسيم والاستبدال و Unpivot\n\n' +
              '- **Split Column**: عمود Region يحتوي Riyadh-Store1. المسار: Transform ← Split Column ← By Delimiter ← الرمز "-"، فتحصل على عمودين نظيفين: City و Store.\n' +
              '- **Replace Values**: زر أيمن على العمود ← Replace Values؛ غيّر N/A إلى null، أو null إلى 0 عندما يكون الصفر هو الرقم الصادق.\n' +
              '- **Unpivot**: الجداول العريضة بعمود لكل شهر (مبيعات يناير وفبراير ومارس) كابوس في التحليل. حدد أعمدة الأشهر ← Transform ← Unpivot Columns ← فتحصل على صفوف مرتبة: Month و Value. هذا التحويل وحده يوفر ساعات.\n\n' +
              '### مثال تنظيف كامل\n\n' +
              'تصدير شركة النور فيه قيم Region مثل Riyadh-Store1، وبعض قيم ProductID ناقصة، وثلاثة ملفات شهرية. الوصفة: ارصّ الملفات الثلاثة ← قسّم Region بـ "-" إلى City و Store ← ادمج جدول المنتجات على ProductID ← استبدل فئة null بكلمة Unknown ← Close & Apply. خمس تحويلات، تُعاد كلها تلقائياً الشهر القادم.\n\n' +
              '> TIP: اجعل إعادة التشكيل الثقيل (التراص والدمج و Unpivot) في Power Query لا في Excel قبل التحميل؛ فيبقى التحديث آلياً بالكامل.',
          },
          terms: [
            {
              en: 'Merge Queries',
              ar: 'دمج الاستعلامات (Merge Queries)',
              def: {
                en: 'Joining two tables through a matching key column, like VLOOKUP or SQL JOIN.',
                ar: 'ربط جدولين عبر عمود مفتاح متطابق، شبيه بـ VLOOKUP أو JOIN في SQL.',
              },
            },
            {
              en: 'Append Queries',
              ar: 'تراص الاستعلامات (Append Queries)',
              def: {
                en: 'Stacking tables with identical columns on top of each other into one long table.',
                ar: 'رصّ جداول بأعمدة متطابقة فوق بعضها في جدول طويل واحد.',
              },
            },
            {
              en: 'Split Column',
              ar: 'تقسيم العمود (Split Column)',
              def: {
                en: 'Breaking one column into several using a delimiter such as a dash, comma or space.',
                ar: 'تفكيك عمود واحد إلى عدة أعمدة عبر فاصل مثل الشرطة أو الفاصلة أو المسافة.',
              },
            },
            {
              en: 'Replace Values',
              ar: 'استبدال القيم (Replace Values)',
              def: {
                en: 'Swapping a value for another inside a column, e.g. N/A to null or null to 0.',
                ar: 'تبديل قيمة بأخرى داخل عمود، مثل تحويل N/A إلى null أو null إلى 0.',
              },
            },
            {
              en: 'Unpivot',
              ar: 'فك التبسيط (Unpivot)',
              def: {
                en: 'Turning wide month-per-column tables into long rows of Month and Value for proper analysis.',
                ar: 'تحويل الجداول العريضة (عمود لكل شهر) إلى صفوف طويلة من Month و Value تصلح للتحليل.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'Merging products into sales', ar: 'دمج جدول المنتجات في المبيعات' },
              body: {
                en:
                  'Sales (after append): 45,000 rows with ProductID, Amount. Products: 120 rows with ProductID, Category, Brand.\n\n' +
                  '1. Select Sales → Home → Merge Queries.\n2. Choose Products as the second table.\n3. Click ProductID in Sales, then ProductID in Products (both highlight).\n4. Keep Join Kind = Left Outer → OK.\n5. Expand the new Products column; tick Category and Brand only.\n\n' +
                  'Result: every one of the 45,000 sales rows now carries its Category, so a slicer on Category works. Rows that found no match show null — check that count with a filter before deciding to Replace Values.',
                ar:
                  'المبيعات (بعد التراص): 45,000 صف فيها ProductID و Amount. المنتجات: 120 صف فيها ProductID و Category و Brand.\n\n' +
                  '1. حدد Sales ← Home ← Merge Queries.\n2. اختر Products كالجدول الثاني.\n3. انقر ProductID في Sales ثم ProductID في Products (يبرز الاثنان).\n4. أبقِ Join Kind = Left Outer ← OK.\n5. وسّع عمود Products الجديد واختر Category و Brand فقط.\n\n' +
                  'النتيجة: كل صف من الصفوف 45,000 يحمل فئته الآن، فيعمل الـ Slicer على الفئة. والصفوف التي لم تجد تطابقاً تظهر null — تحقق من عددها بمرشح قبل أن تقرر الاستبدال.',
              },
            },
          ],
          steps: [
            { en: 'Select the Sales query, then Home → Merge Queries.', ar: 'حدد استعلام Sales ثم Home ← Merge Queries.' },
            { en: 'Pick the Products table as the second table in the dialog.', ar: 'اختر جدول Products كجدول ثانٍ في نافذة الدمج.' },
            { en: 'Click ProductID in both tables so both highlight, keep Left Outer, then OK.', ar: 'انقر ProductID في الجدولين ليبرز الاثنان، وأبقِ Left Outer، ثم OK.' },
            { en: 'Click the expand icon on the new column and tick Category and Brand.', ar: 'انقر أيقونة التوسيع على العمود الجديد واختر Category و Brand.' },
            { en: 'Close & Apply and test a Category slicer on the report.', ar: 'Close & Apply ثم اختبر Slicer للفئة على التقرير.' },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'Al-Noor sends 12 monthly CSV files with identical columns, plus one products table with ProductID and Category. Which actions are the right ones? Tick all that apply.',
              ar: 'ترسل شركة النور 12 ملف CSV شهرياً بأعمدة متطابقة، وجدول منتجات فيه ProductID و Category. أي الأفعال التالية صحيحة؟ اختر كل ما ينطبق.',
            },
            solution: {
              en: 'Append the 12 files into one table, merge products on ProductID, replace missing categories, and keep the work in Power Query so it repeats on refresh.',
              ar: 'ارصّ الملفات الـ 12 في جدول واحد، وادمج المنتجات على ProductID، واستبدل الفئات الناقصة، وأبقِ العمل في Power Query ليتكرر عند التحديث.',
            },
            confirm: [
              { en: 'Append the 12 monthly files into one sales table', ar: 'ترصّ الملفات الـ 12 الشهرية في جدول مبيعات واحد' },
              { en: 'Merge the products table into sales using ProductID', ar: 'تدمج جدول المنتجات في المبيعات باستخدام ProductID' },
              { en: 'Replace missing Category values with Unknown', ar: 'تستبدل قيم الفئة الناقصة بكلمة Unknown' },
              { en: 'Do the reshaping in Power Query so it repeats on every refresh', ar: 'تجري إعادة التشكيل في Power Query ليتكرر عند كل تحديث' },
            ],
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'You have 12 monthly files with the same columns. Which operation stacks them into one table?', ar: 'لديك 12 ملفاً شهرياً بالأعمدة نفسها. أي عملية ترصّها في جدول واحد؟' },
              options: [
                { en: 'Append Queries', ar: 'Append Queries' },
                { en: 'Merge Queries', ar: 'Merge Queries' },
                { en: 'Unpivot Columns', ar: 'Unpivot Columns' },
                { en: 'Group By', ar: 'Group By' },
              ],
              answer: 0,
              explain: {
                en: 'Append stacks rows of tables with matching columns. Merge would try to join them through a key, which is not the case here.',
                ar: 'التراص Append يرصّ صفوف الجداول المتطابقة الأعمدة؛ أما Merge فيحاول ربطها بمفتاح، وهو ليس الحال هنا.',
              },
            },
            {
              type: 'tf',
              q: { en: 'Merge Queries matches rows between two tables using a shared key column.', ar: 'يوافق Merge Queries الصفوف بين جدولين باستخدام عمود مفتاح مشترك.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'Merge is the VLOOKUP of Power Query: pick the key in both tables and the matched columns arrive through the expand icon.',
                ar: 'الدمج Merge هو VLOOKUP الخاص بـ Power Query: تختار المفتاح في الجدولين وتصل الأعمدة المطابقة عبر أيقونة التوسيع.',
              },
            },
            {
              type: 'fill',
              q: { en: 'A table has one column per month (Jan, Feb, Mar). The transformation that turns these into Month and Value rows is called ____ (one word, English).', ar: 'جدول فيه عمود لكل شهر (Jan و Feb و Mar). التحويل الذي يحوّلها إلى صفوف Month و Value يسمى ____ (كلمة واحدة بالإنجليزية).' },
              accept: ['unpivot'],
              explain: {
                en: 'Unpivot Columns converts wide column-per-month layouts into long rows, the shape analysis tools expect.',
                ar: 'خيار Unpivot Columns يحوّل التخطيط العريض (عمود لكل شهر) إلى صفوف طويلة، وهو الشكل الذي تتوقعه أدوات التحليل.',
              },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L7M3',
      name: { en: 'Data Modeling', ar: 'نمذجة البيانات' },
      lessons: [
        {
          id: 'L7M3L1',
          title: { en: 'Relationships and the Data Model', ar: 'العلاقات ونموذج البيانات' },
          minutes: 12,
          description: {
            en: 'Separate fact tables from dimension tables, build a star schema, and create one-to-many relationships in Model view.',
            ar: 'فرّق بين جداول الحقائق وجداول الأبعاد، وابنِ نموذج النجمة، وأنشئ علاقات واحد إلى متعدد في وضع Model.',
          },
          objectives: [
            { en: 'Classify tables as fact tables or dimension tables.', ar: 'تصنيف الجداول إلى جداول حقائق وجداول أبعاد.' },
            { en: 'Build a star schema with one-to-many relationships in Model view.', ar: 'بناء نموذج نجمة بعلاقات واحد إلى متعدد في وضع Model.' },
            { en: 'Explain why a proper model beats one giant flat table.', ar: 'شرح لماذا يتفوق النموذج الصحيح على الجدول المسطح الضخم.' },
          ],
          body: {
            en:
              '### Two kinds of tables\n\n' +
              'A good model separates **fact tables** from **dimension tables**. The fact table holds the transactions: one row per sale, numeric amounts, and key columns (ProductID, StoreID, Date). Dimension tables hold the descriptive lists those keys point to: one row per product (name, category, brand), one per store (city, manager), one per date. Facts are many and numeric; dimensions are few and descriptive.\n\n' +
              '### The star schema\n\n' +
              'Put the fact table in the middle and the dimensions around it, each connected by a one-to-many relationship, and you have drawn the **star schema** — the recommended shape for BI models. Sales sits in the center; Dim_Product, Dim_Store and Dim_Date surround it. The name comes from the picture: relationship lines radiate from the middle like star rays.\n\n' +
              '### One-to-many: the relationship you need first\n\n' +
              'A **1:N relationship** means one dimension row matches many fact rows: one product appears in thousands of sales rows. In the Model view, drag the key from the dimension onto the key in the fact table (Dim_Product[ProductID] onto Sales[ProductID]) and Power BI creates the relationship, with the 1 side on the dimension and the many side on the fact. Filters travel from the 1 side down to the many side: choose a product in a slicer and the sales visuals recalculate for that product only.\n\n' +
              '### Why modeling matters\n\n' +
              '- **Correct totals**: sums happen in one place instead of duplicated lookup formulas in five files.\n' +
              '- **One list to maintain**: rename a product once in Dim_Product and every report updates.\n' +
              '- **Clean filtering**: every visual answers by city, category or month without extra formulas.\n' +
              '- **Performance**: a compact star model is far faster than one giant flat table with repeated text columns.\n\n' +
              '> WARN: Two fact tables must never connect directly to each other; connect them through the shared dimensions instead.',
            ar:
              '### نوعان من الجداول\n\n' +
              'يفصل النموذج الجيد بين **جداول الحقائق** و**جداول الأبعاد**. جدول الحقائق يحمل المعاملات: صف لكل عملية بيع، ومبالغ رقمية، وأعمدة مفاتيح (ProductID و StoreID و Date). وجداول الأبعاد تحمل القوائم الوصفية التي تشير إليها المفاتيح: صف لكل منتج (الاسم والفئة والعلامة)، وصف لكل فرع (المدينة والمدير)، وصف لكل تاريخ. الحقائق كثيرة ورقمية، والأبعاد قليلة ووصفية.\n\n' +
              '### نموذج النجمة\n\n' +
              'ضع جدول الحقائق في الوسط والأبعاد حوله، كل منها متصل بعلاقة واحد إلى متعدد، فترسم **نموذج النجمة** — وهو الشكل الموصى به لنماذج ذكاء الأعمال. جدول Sales في المركز، ويحيط به Dim_Product و Dim_Store و Dim_Date. والاسم من الصورة نفسها: خطوط العلاقات تشع من الوسط كأشعة نجمة.\n\n' +
              '### واحد إلى متعدد: العلاقة الأولى التي تحتاجها\n\n' +
              'تعني علاقة **1:N** أن صفاً واحداً في جدول الأبعاد يطابق صفوفاً كثيرة في جدول الحقائق: منتج واحد يظهر في آلاف صفوف البيع. في وضع Model اسحب المفتاح من جدول الأبعاد فوق المفتاح في جدول الحقائق (من Dim_Product[ProductID] إلى Sales[ProductID])، فتنشأ العلاقة بجهة 1 على الأبعاد وجهة المتعدد على الحقائق. وتنتقل المرشحات من جهة 1 إلى جهة المتعدد: اختر منتجاً في Slicer فتعيد المرئيات حساب المبيعات لهذا المنتج وحده.\n\n' +
              '### لماذا تهم النمذجة\n\n' +
              '- **مجاميع صحيحة**: تجري الجمع في مكان واحد بدل معادلات البحث المكررة في خمسة ملفات.\n' +
              '- **قائمة واحدة للصيانة**: غيّر اسم منتج مرة في Dim_Product فتتحدث كل التقارير.\n' +
              '- **تصفية نظيفة**: يجيب كل مرئي حسب المدينة أو الفئة أو الشهر دون معادلات إضافية.\n' +
              '- **أداء**: النموذج النجمي المضغوط أسرع بكثير من جدول مسطح ضخم بأعمدة نصية مكررة.\n\n' +
              '> WARN: يجب ألا يتصل جدول حقائق بجدول حقائق آخر مباشرة أبداً؛ اربطهما عبر الأبعاد المشتركة.',
          },
          terms: [
            {
              en: 'Fact Table',
              ar: 'جدول الحقائق',
              def: {
                en: 'The central table of transactions: one row per event, with numeric measures and key columns.',
                ar: 'الجدول المركزي للمعاملات: صف لكل حدث، فيه المقاييس الرقمية وأعمدة المفاتيح.',
              },
            },
            {
              en: 'Dimension Table',
              ar: 'جدول الأبعاد',
              def: {
                en: 'A descriptive lookup table (product, store, date) that the fact table points to through keys.',
                ar: 'جدول بحث وصفي (منتج أو فرع أو تاريخ) يشير إليه جدول الحقائق عبر المفاتيح.',
              },
            },
            {
              en: 'Star Schema',
              ar: 'نموذج النجمة',
              def: {
                en: 'The recommended model shape: one fact table in the middle, dimension tables around it.',
                ar: 'الشكل الموصى به للنموذج: جدول حقائق في الوسط وجداول أبعاد حوله.',
              },
            },
            {
              en: 'Relationship (1:N)',
              ar: 'علاقة واحد إلى متعدد',
              def: {
                en: 'The link where one dimension row matches many fact rows, letting filters flow from dimension to facts.',
                ar: 'الرابط الذي يطابق فيه صفاً واحداً من الأبعاد صفوفاً كثيرة من الحقائق، فتتدفق المرشحات من الأبعاد إلى الحقائق.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'The Al-Noor star', ar: 'نجمة شركة النور' },
              body: {
                en:
                  '| Table | Kind | Example columns |\n|---|---|---|\n| Sales | Fact | SaleID, ProductID, StoreID, Date, Amount |\n| Dim_Product | Dimension | ProductID, ProductName, Category, Brand |\n| Dim_Store | Dimension | StoreID, StoreName, City, Manager |\n| Dim_Date | Dimension | Date, Month, Quarter, Year |\n\n' +
                  'Relationships: Dim_Product 1→N Sales (ProductID), Dim_Store 1→N Sales (StoreID), Dim_Date 1→N Sales (Date). Sales holds 180,000 rows; the three dimensions together hold fewer than 2,000. Clicking Riyadh in a slicer flows through Dim_Store down to the Sales rows of that city only.',
                ar:
                  '| الجدول | النوع | أعمدة مثال |\n|---|---|---|\n| Sales | حقائق | SaleID, ProductID, StoreID, Date, Amount |\n| Dim_Product | أبعاد | ProductID, ProductName, Category, Brand |\n| Dim_Store | أبعاد | StoreID, StoreName, City, Manager |\n| Dim_Date | أبعاد | Date, Month, Quarter, Year |\n\n' +
                  'العلاقات: Dim_Product من 1 إلى N مع Sales عبر ProductID، و Dim_Store من 1 إلى N مع Sales عبر StoreID، و Dim_Date من 1 إلى N مع Sales عبر Date. جدول Sales فيه 180,000 صف، والأبعاد الثلاثة مجتمعة أقل من 2,000. والنقر على Riyadh في Slicer يتدفق عبر Dim_Store إلى صفوف مبيعات تلك المدينة وحدها.',
              },
            },
          ],
          steps: [
            { en: 'Load Sales, Dim_Product and Dim_Store, then open the Model view (third icon on the left edge).', ar: 'حمّل الجداول Sales و Dim_Product و Dim_Store ثم افتح وضع Model (الأيقونة الثالثة على الحافة اليسرى).' },
            { en: 'Drag Dim_Product[ProductID] onto Sales[ProductID].', ar: 'اسحب Dim_Product[ProductID] إلى Sales[ProductID].' },
            { en: 'In the relationship dialog confirm cardinality One to Many, with 1 on the dimension side.', ar: 'في نافذة العلاقة أكد الاتجاه One to Many بجهة 1 على جدول الأبعاد.' },
            { en: 'Repeat for Dim_Store[StoreID] onto Sales[StoreID].', ar: 'أعد الأمر من Dim_Store[StoreID] إلى Sales[StoreID].' },
            { en: 'Arrange the tables so the fact sits in the middle: your star is ready.', ar: 'رتّب الجداول بحيث يقع جدول الحقائق في الوسط: نجمتك جاهزة.' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'In a star schema, the large central table that stores the transactions is called the ____ table. (One word, English.)',
              ar: 'في نموذج النجمة، الجدول المركزي الكبير الذي يخزن المعاملات يسمى جدول ____. (كلمة واحدة بالإنجليزية.)',
            },
            accept: ['fact'],
            solution: {
              en: 'The fact table. Dimension tables surround it and answer the questions: which product, which city, which date.',
              ar: 'جدول الحقائق (Fact). وتحيط به جداول الأبعاد لتجيب عن الأسئلة: أي منتج وأي مدينة وأي تاريخ.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which table holds one row per transaction with numeric amounts and key columns?', ar: 'أي جدول يحمل صفاً لكل معاملة فيه مبالغ رقمية وأعمدة مفاتيح؟' },
              options: [
                { en: 'The fact table', ar: 'جدول الحقائق' },
                { en: 'A dimension table', ar: 'جدول الأبعاد' },
                { en: 'The Navigator', ar: 'نافذة Navigator' },
                { en: 'The measure table', ar: 'جدول المقاييس' },
              ],
              answer: 0,
              explain: {
                en: 'Fact tables store events (sales, orders); dimensions store descriptive lists (products, cities, dates).',
                ar: 'جداول الحقائق تخزن الأحداث (مبيعات وطلبات)، والأبعاد تخزن القوائم الوصفية (منتجات ومدن وتواريخ).',
              },
            },
            {
              type: 'tf',
              q: { en: 'In a 1:N relationship between Dim_Product and Sales, one product row can match many sales rows.', ar: 'في علاقة 1:N بين Dim_Product و Sales يمكن لصف منتج واحد أن يطابق صفوف مبيعات كثيرة.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'That is exactly what one-to-many means, and it is the standard direction between a dimension and a fact table.',
                ar: 'هذا هو معنى واحد إلى متعدد تماماً، وهو الاتجاه المعياري بين جدول الأبعاد وجدول الحقائق.',
              },
            },
            {
              type: 'mcq',
              q: { en: 'Which model shape is recommended for Power BI projects?', ar: 'أي شكل نموذج موصى به لمشاريع Power BI؟' },
              options: [
                { en: 'Star schema', ar: 'نموذج النجمة' },
                { en: 'One giant flat table', ar: 'جدول مسطح ضخم واحد' },
                { en: 'Fact connected to fact', ar: 'حقائق متصلة بحقائق' },
                { en: 'No relationships at all', ar: 'بلا علاقات إطلاقاً' },
              ],
              answer: 0,
              explain: {
                en: 'The star schema: dimensions around one fact table. It filters cleanly and calculates fast.',
                ar: 'نموذج النجمة: أبعاد حول جدول حقائق واحد؛ يصفّي بنظافة ويحسب بسرعة.',
              },
            },
          ],
          xp: 25,
        },
        {
          id: 'L7M3L2',
          title: { en: 'DAX Fundamentals: Measures and Calculated Columns', ar: 'أساسيات DAX: المقاييس والأعمدة المحسوبة' },
          minutes: 14,
          description: {
            en: 'Write your first DAX measures with SUM, AVERAGE, CALCULATE and DIVIDE, and understand the measure versus column difference.',
            ar: 'اكتب أول مقاييس DAX بالدوال SUM و AVERAGE و CALCULATE و DIVIDE، وافهم الفرق بين المقياس والعمود المحسوب.',
          },
          objectives: [
            { en: 'Create measures with SUM and AVERAGE and format them properly.', ar: 'إنشاء مقاييس بالدالتين SUM و AVERAGE وتنسيقها جيداً.' },
            { en: 'Explain the difference between a measure and a calculated column.', ar: 'شرح الفرق بين المقياس Measure والعمود المحسوب Calculated Column.' },
            { en: 'Use CALCULATE to change filter context and DIVIDE for safe division.', ar: 'استخدام CALCULATE لتغيير سياق المرشح و DIVIDE للقسمة الآمنة.' },
          ],
          body: {
            en:
              '### What DAX is\n\n' +
              '**DAX** (Data Analysis Expressions) is the formula language of Power BI. It looks like Excel formulas, but it calculates against tables and columns and — this is the key difference — it is aware of the filters active at the moment of calculation. You write DAX in two places: **measures** (Home → New Measure) and **calculated columns** (Home → New Column).\n\n' +
              '### Measure versus calculated column\n\n' +
              '- A **measure** is one number computed on the spot, every time a visual or slicer asks for it. Nothing is stored per row; the value recalculates for whatever is filtered: the whole year, one month, one city.\n' +
              '- A **calculated column** is computed row by row at load time and stored in the table, like adding a column in Excel. It does not change with slicers.\n\n' +
              'Rule of thumb: aggregations (sums, averages, ratios) belong in measures; row-by-row values (Price minus Cost for each row) may be a column.\n\n' +
              '### The four functions to start with\n\n' +
              '```dax\nTotal Sales = SUM(Sales[Amount])\nAverage Sale = AVERAGE(Sales[Amount])\nRiyadh Sales = CALCULATE([Total Sales], Stores[City] = "Riyadh")\nMargin % = DIVIDE([Profit], [Total Sales])\n```\n\n' +
              'SUM and AVERAGE do what their names say over a column. **DIVIDE** is the safe division: instead of producing an error on a zero denominator the way the / operator does, it returns blank or the alternate result you give it. Format measures on the Measure tools ribbon: Currency with 0 decimals for sales, Percentage for ratios.\n\n' +
              '### CALCULATE, explained simply\n\n' +
              'Every visual asks its question inside a **filter context**: the set of filters active at that moment (a slicer says Riyadh, an axis says November). **CALCULATE** answers the question inside a NEW context that you write yourself. Riyadh Sales means: compute Total Sales, but replace the current city filter with Riyadh. So on a table where each row is a city, the Riyadh Sales column repeats 520,000 on every row — the context was swapped, on purpose. That one idea (change the context, then calculate) powers most real DAX work.\n\n' +
              '> TIP: Always reference an existing measure with square brackets, like [Total Sales] — never retype SUM(Sales[Amount]) inside another formula.',
            ar:
              '### ما هو DAX\n\n' +
              '**DAX** (Data Analysis Expressions) هي لغة المعادلات في Power BI. تشبه معادلات Excel، لكنها تحسب على مستوى الجداول والأعمدة — وهذا هو الفرق الجوهري — وتدرك المرشحات النشطة لحظة الحساب. تكتب DAX في مكانين: **المقاييس Measures** (Home ← New Measure) و**الأعمدة المحسوبة Calculated Columns** (Home ← New Column).\n\n' +
              '### المقياس مقابل العمود المحسوب\n\n' +
              '- **المقياس Measure** رقم واحد يحسب لحظياً في كل مرة يطلبه مرئي أو Slicer. لا يخزن شيء لكل صف؛ بل يعيد الحساب وفق المرشح الساري: السنة كلها، أو شهر واحد، أو مدينة واحدة.\n' +
              '- **العمود المحسوب Calculated Column** يحسب صفاً بصف وقت التحميل ويخزن في الجدول، كأن تضيف عموداً في Excel. ولا يتغير مع الـ Slicers.\n\n' +
              'قاعدة عملية: التجميعات (المجاميع والمتوسطات والنسب) مقاييس؛ والقيم الصفية (سعر ناقص تكلفة لكل صف) قد تكون عموداً.\n\n' +
              '### الدوال الأربع للبداية\n\n' +
              '```dax\nTotal Sales = SUM(Sales[Amount])\nAverage Sale = AVERAGE(Sales[Amount])\nRiyadh Sales = CALCULATE([Total Sales], Stores[City] = "Riyadh")\nMargin % = DIVIDE([Profit], [Total Sales])\n```\n\n' +
              'تجري SUM و AVERAGE ما يقوله اسمانهما على عمود. و **DIVIDE** هي القسمة الآمنة: بدلاً من إنتاج خطأ عند المقام الصفر كما يفعل معامل /، تعيد قيمة فارغة أو النتيجة البديلة التي تحددها. نسّق المقاييس من شريط Measure tools: عملة بلا كسور للمبيعات، ونسبة مئوية للنسب.\n\n' +
              '### CALCULATE بشرح مبسط\n\n' +
              'يطرح كل مرئي سؤاله داخل **سياق مرشح Filter Context**: مجموعة المرشحات النشطة في تلك اللحظة (Slicer يقول Riyadh، ومحور يقول November). و **CALCULATE** يجيب عن السؤال داخل سياق جديد تكتبه أنت بنفسك. المقصود بـ Riyadh Sales: احسب Total Sales لكن استبدل مرشح المدينة الحالي بـ Riyadh. لذلك في جدول كل صف فيه مدينة تتكرر القيمة 520,000 في كل صف لعمود Riyadh Sales — استبدل السياق عمداً. هذه الفكرة الواحدة (غيّر السياق ثم احسب) تقف وراء معظم عمل DAX الحقيقي.\n\n' +
              '> TIP: أشِر إلى مقياس قائم دائماً بالأقواس المربعة مثل [Total Sales] — ولا تعيد كتابة SUM(Sales[Amount]) داخل معادلة أخرى.',
          },
          terms: [
            {
              en: 'DAX',
              ar: 'لغة DAX',
              def: {
                en: 'Data Analysis Expressions: the formula language of Power BI for measures and calculated columns.',
                ar: 'لغة المعادلات في Power BI لكتابة المقاييس والأعمدة المحسوبة.',
              },
            },
            {
              en: 'Measure',
              ar: 'المقياس (Measure)',
              def: {
                en: 'A single calculation that recomputes for the active filters; nothing is stored per row.',
                ar: 'حساب واحد يعاد وفق المرشحات النشطة، ولا يخزن قيمة لكل صف.',
              },
            },
            {
              en: 'Calculated Column',
              ar: 'العمود المحسوب',
              def: {
                en: 'A DAX formula computed row by row at load time and stored in the table.',
                ar: 'معادلة DAX تحسب صفاً بصف وقت التحميل وتخزن النتيجة في الجدول.',
              },
            },
            {
              en: 'Filter Context',
              ar: 'سياق المرشح',
              def: {
                en: 'The set of filters active when a measure is evaluated: slicers, axes, rows and columns.',
                ar: 'مجموعة المرشحات النشطة عند تقييم المقياس: الـ Slicers والمحاور والصفوف والأعمدة.',
              },
            },
            {
              en: 'CALCULATE',
              ar: 'دالة CALCULATE',
              def: {
                en: 'The function that evaluates an expression inside a new filter context you specify.',
                ar: 'الدالة التي تقيّم تعبيراً داخل سياق مرشح جديد تحدده أنت.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'Three measures for the Al-Noor report', ar: 'ثلاثة مقاييس لتقرير شركة النور' },
              body: {
                en:
                  '```dax\nTotal Sales = SUM(Sales[Amount])\nAverage Sale = AVERAGE(Sales[Amount])\nMargin % = DIVIDE([Profit], [Total Sales])\n```\n\n' +
                  'Drop Total Sales on a card: it shows 1,240,000 for November. Add a City slicer and pick Jeddah: the same card now shows 430,000 — no formula changed, the filter context did. Then format Margin % as Percentage and it reads 20.0%.',
                ar:
                  '```dax\nTotal Sales = SUM(Sales[Amount])\nAverage Sale = AVERAGE(Sales[Amount])\nMargin % = DIVIDE([Profit], [Total Sales])\n```\n\n' +
                  'اسحب Total Sales على Card: تظهر 1,240,000 لشهر نوفمبر. أضف Slicer للمدينة واختر Jeddah: تعرض البطاقة نفسها 430,000 — لم تتغير المعادلة، بل تغير سياق المرشح. ثم نسّق Margin % كنسبة مئوية فتقرأ 20.0%.',
              },
            },
            {
              title: { en: 'CALCULATE in action', ar: 'CALCULATE في الواقع العملي' },
              body: {
                en:
                  'A table visual with City rows, Total Sales and Riyadh Sales:\n\n' +
                  '| City | Total Sales | Riyadh Sales |\n|---|---|---|\n| Riyadh | 520,000 | 520,000 |\n| Jeddah | 430,000 | 520,000 |\n| Dammam | 290,000 | 520,000 |\n\n' +
                  'The second column changes with each row; the third repeats 520,000 everywhere, because CALCULATE replaced the city filter with Riyadh inside the formula.',
                ar:
                  'مرئي جدول بصفوف المدن وعمودي Total Sales و Riyadh Sales:\n\n' +
                  '| المدينة | Total Sales | Riyadh Sales |\n|---|---|---|\n| Riyadh | 520,000 | 520,000 |\n| Jeddah | 430,000 | 520,000 |\n| Dammam | 290,000 | 520,000 |\n\n' +
                  'العمود الثاني يتغير مع كل صف؛ والثالث يكرر 520,000 في كل مكان، لأن CALCULATE استبدلت مرشح المدينة بـ Riyadh داخل المعادلة.',
              },
            },
          ],
          steps: [
            { en: 'Select the Sales table in the Data pane, then Home → New Measure.', ar: 'حدد جدول Sales من جزء Data ثم Home ← New Measure.' },
            { en: 'Type Total Sales = SUM(Sales[Amount]) and press Enter.', ar: 'اكتب Total Sales = SUM(Sales[Amount]) واضغط Enter.' },
            { en: 'On the Measure tools ribbon set Format to Currency and decimals to 0.', ar: 'من شريط Measure tools اجعل التنسيق Currency بلا كسور.' },
            { en: 'Create Margin % = DIVIDE([Profit], [Total Sales]) and format it as Percentage.', ar: 'أنشئ Margin % = DIVIDE([Profit], [Total Sales]) ونسّقه كنسبة مئوية.' },
            { en: 'Drag Total Sales onto a card, add a City slicer, and watch the number change with the filter.', ar: 'اسحب Total Sales على Card وأضف Slicer للمدينة وراقب تغيّر الرقم مع المرشح.' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Which DAX function performs division safely, returning blank instead of an error when the denominator is zero? (Function name only, English.)',
              ar: 'أي دالة DAX تجري القسمة بأمان، فتعيد قيمة فارغة بدل الخطأ عندما يكون المقام صفراً؟ (اسم الدالة فقط بالإنجليزية.)',
            },
            accept: ['divide'],
            solution: {
              en: 'DIVIDE. DIVIDE([Profit], [Total Sales]) never crashes on zero; the / operator would.',
              ar: 'DIVIDE. فالمعادلة DIVIDE([Profit], [Total Sales]) لا تتعطل عند الصفر، بعكس معامل /.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'A user changes a City slicer. Which object recalculates automatically at that moment?', ar: 'غيّر المستخدم Slicer للمدينة. أي كائن يعيد حسابه تلقائياً في تلك اللحظة؟' },
              options: [
                { en: 'A measure', ar: 'المقياس Measure' },
                { en: 'A calculated column', ar: 'العمود المحسوب' },
                { en: 'The imported table', ar: 'الجدول المستورد' },
                { en: 'The Applied Steps list', ar: 'قائمة Applied Steps' },
              ],
              answer: 0,
              explain: {
                en: 'Measures recompute for every filter context. Calculated columns were fixed at load time and never react.',
                ar: 'المقاييس تعاد وفق كل سياق مرشح؛ أما الأعمدة المحسوبة فثبتت وقت التحميل ولا تتفاعل أبداً.',
              },
            },
            {
              type: 'mcq',
              q: { en: 'Which function evaluates an expression inside a NEW filter context you specify?', ar: 'أي دالة تقيّم تعبيراً داخل سياق مرشح جديد تحدده أنت؟' },
              options: [
                { en: 'CALCULATE', ar: 'CALCULATE' },
                { en: 'SUM', ar: 'SUM' },
                { en: 'AVERAGE', ar: 'AVERAGE' },
                { en: 'DIVIDE', ar: 'DIVIDE' },
              ],
              answer: 0,
              explain: {
                en: 'CALCULATE swaps the filter context first, then evaluates the expression — for example forcing City = Riyadh.',
                ar: 'تستبدل CALCULATE سياق المرشح أولاً ثم تقيّم التعبير — مثل فرض City = Riyadh.',
              },
            },
            {
              type: 'tf',
              q: { en: 'DIVIDE returns an error when the denominator is zero, just like the / operator.', ar: 'تعيد DIVIDE خطأً عندما يكون المقام صفراً، تماماً كمعامل /.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 1,
              explain: {
                en: 'That is the point of DIVIDE: it returns blank (or the alternate result you provide) instead of an error.',
                ar: 'وهذا هو الغرض من DIVIDE: تعيد قيمة فارغة أو النتيجة البديلة بدلاً من الخطأ.',
              },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L7M4',
      name: { en: 'Visualizations', ar: 'المرئيات' },
      lessons: [
        {
          id: 'L7M4L1',
          title: { en: 'Choosing the Right Chart', ar: 'اختيار الرسم البياني المناسب' },
          minutes: 12,
          description: {
            en: 'Match bar, column, line, pie, card, KPI and matrix visuals to the question they answer — and avoid the classic chart mistakes.',
            ar: 'وافق بين مرئيات الأعمدة والخط والدائرة والبطاقة و KPI والمصفوفة وبين الأسئلة التي تجيب عنها — وتجنب أخطاء الرسوم الكلاسيكية.',
          },
          objectives: [
            { en: 'Pick the right visual for comparison, trend, composition and single-number questions.', ar: 'اختيار المرئي المناسب لأسئلة المقارنة والاتجاه والتكوين والرقم الواحد.' },
            { en: 'Use the matrix visual for cross-tab detail like a pivot table.', ar: 'استخدام مرئي المصفوفة Matrix للتفاصيل المتقاطعة كالجدول المحوري.' },
            { en: 'Recognize and avoid common bad chart practices.', ar: 'التعرّف على الممارسات الرسومية السيئة وتجنبها.' },
          ],
          body: {
            en:
              '### Match the chart to the question\n\n' +
              'A chart is a tool that answers one specific question. Pick the question first, then the chart:\n\n' +
              '- **Comparison between categories** (which branch sells more?): bar chart (horizontal) or column chart (vertical). Sorted bars, largest first, read fastest.\n' +
              '- **Trend over time** (how did sales move across 12 months?): line chart, with time on the horizontal axis.\n' +
              '- **Composition of a whole** (what share is each category?): stacked bar, or pie ONLY with 5 slices or fewer and clearly different shares.\n' +
              '- **One big number** (total sales today?): card. **Target versus actual**: KPI visual.\n' +
              '- **Cross-tab detail** (city by product with numbers): matrix — the BI cousin of the Excel pivot table.\n\n' +
              '### The rules that save dashboards\n\n' +
              '1. One chart answers one question; if you cannot name the question, the chart is decoration.\n' +
              '2. Bars beat pies for comparison, because people compare lengths far better than angles.\n' +
              '3. Start the value axis at zero for bars and columns, otherwise differences lie.\n' +
              '4. Sort bars by value, not alphabetically, unless the order itself carries meaning.\n\n' +
              '### Common bad practices\n\n' +
              '- 3D pies and exploded doughnuts distort proportions and belong in 2005.\n' +
              '- Twelve series on one line chart become spaghetti; split into small charts instead.\n' +
              '- Rainbow palettes carry no meaning; color should highlight, not decorate.\n' +
              '- Truncated axes exaggerate tiny differences into fake drama.\n\n' +
              '> TIP: When in doubt, a sorted bar chart answers almost any comparison question honestly.',
            ar:
              '### وافق بين الرسم والسؤال\n\n' +
              'الرسم البياني أداة تجيب عن سؤال محدد واحد. اختر السؤال أولاً ثم الرسم:\n\n' +
              '- **المقارنة بين الفئات** (أي فرع يبيع أكثر؟): رسم أعمدة أفقي Bar أو عمودي Column، مرتب من الأكبر للأصغر ليقرأ بأسرع.\n' +
              '- **الاتجاه عبر الزمن** (كيف تحركت المبيعات عبر 12 شهراً؟): رسم خطي Line والزمن على المحور الأفقي.\n' +
              '- **تكوين الكل** (ما نصيب كل فئة؟): أعمدة مكدسة، أو دائرة Pie فقط مع 5 شرائح أو أقل وحصص متمايزة بوضوح.\n' +
              '- **رقم واحد كبير** (مبيعات اليوم؟): بطاقة Card. و **الهدف مقابل الفعلي**: مرئي KPI.\n' +
              '- **تفاصيل متقاطعة** (مدينة × منتج بالأرقام): مصفوفة Matrix — قريبة الجدول المحوري في Excel.\n\n' +
              '### القواعد التي تنقذ اللوحات\n\n' +
              '1. رسم واحد يجيب عن سؤال واحد؛ فإن لم تستطع تسمية السؤال فالرسم زينة لا أكثر.\n' +
              '2. الأعمدة تتفوق على الدائرة في المقارنة، لأن العين تقارن الأطوال أفضل بكثير من الزوايا.\n' +
              '3. ابدأ محور القيم من الصفر للأعمدة والشرائط، وإلا كذبت الفروق.\n' +
              '4. رتّب الشرائط بالقيمة لا أبجدياً، إلا إذا كان الترتيب نفسه ذا معنى.\n\n' +
              '### ممارسات سيئة شائعة\n\n' +
              '- الدوائر ثلاثية الأبعاد والدونات المنفلقة تشوه النسب وانتهى زمنها منذ 2005.\n' +
              '- اثنتا عشرة سلسلة في خط واحد تصنع معكرونة؛ فقسّمها رسوماً صغيرة.\n' +
              '- لوحة قوس قزح لا تحمل معنى؛ اللون للتشديد لا للتزيين.\n' +
              '- المحاور المبتورة تحوّل الفروق الصغيرة إلى دراما زائفة.\n\n' +
              '> TIP: عند الشك، رسم الأعمدة المرتب يجيب بصدق عن سؤال المقارنة تقريباً في كل الأحوال.',
          },
          terms: [
            {
              en: 'Bar Chart',
              ar: 'رسم الأعمدة الأفقية (Bar Chart)',
              def: {
                en: 'Horizontal bars, the safest chart for comparing categories; read from largest to smallest.',
                ar: 'شرائط أفقية، وأأمن رسم لمقارنة الفئات؛ يُقرأ من الأكبر إلى الأصغر.',
              },
            },
            {
              en: 'Line Chart',
              ar: 'الرسم الخطي (Line Chart)',
              def: {
                en: 'A connected line over time, the standard chart for trends and seasonality.',
                ar: 'خط متصل عبر الزمن، وهو الرسم المعياري للاتجاهات والموسمية.',
              },
            },
            {
              en: 'Card',
              ar: 'البطاقة (Card)',
              def: {
                en: 'A visual that shows one big number only, like Total Sales = 1,240,000.',
                ar: 'مرئي يعرض رقماً واحداً كبيراً فقط، مثل Total Sales = 1,240,000.',
              },
            },
            {
              en: 'KPI Visual',
              ar: 'مرئي مؤشر الأداء (KPI)',
              def: {
                en: 'A visual that shows a value against a target, with a trend strip and a color signal.',
                ar: 'مرئي يعرض قيمة مقابل هدف، مع شريط اتجاه وإشارة لونية.',
              },
            },
            {
              en: 'Matrix',
              ar: 'المصفوفة (Matrix)',
              def: {
                en: 'A cross-tab visual: categories on rows, categories on columns, values inside — like a pivot table.',
                ar: 'مرئي متقاطع: فئات في الصفوف وفئات في الأعمدة وقيم بالداخل — شبيه بالجدول المحوري.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'Mapping Al-Noor questions to visuals', ar: 'مطابقة أسئلة شركة النور بالمرئيات' },
              body: {
                en:
                  '| The manager asks | The right visual |\n|---|---|\n| Are we growing month over month? | Line chart, sales over 12 months |\n| Which branch leads? | Sorted bar chart by city |\n| What share is Air Conditioners? | Stacked bar or pie with 5 product lines |\n| How much did we sell in total? | Card: 1,240,000 SAR |\n| Did each branch hit its target? | KPI visual with monthly targets |\n| Show me city and product with numbers | Matrix: city rows, product columns |\n\n' +
                  'Six questions, six honest visuals, one page.',
                ar:
                  '| ما يسأله المدير | المرئي الصحيح |\n|---|---|\n| هل ننمو شهرياً؟ | رسم خطي للمبيعات عبر 12 شهراً |\n| أي فرع يتقدم؟ | رسم أعمدة مرتب حسب المدينة |\n| ما نصيب المكيفات؟ | أعمدة مكدسة أو دائرة بخمس فئات منتجات |\n| كم باعنا إجمالاً؟ | بطاقة Card: 1,240,000 ريال |\n| هل حقق كل فرع هدفه؟ | مرئي KPI بأهداف شهرية |\n| أرني المدينة والمنتج بالأرقام | مصفوفة Matrix: مدن في الصفوف ومنتجات في الأعمدة |\n\n' +
                  'ستة أسئلة، وستة مرئيات صادقة، وصفحة واحدة.',
              },
            },
          ],
          steps: [
            { en: 'Write the question of each visual in its title before drawing anything.', ar: 'اكتب سؤال كل مرئي في عنوانه قبل رسم أي شيء.' },
            { en: 'Insert → Bar chart for the branch comparison; sort it by value, largest first.', ar: 'Insert ← Bar chart لمقارنة الفروع؛ رتبه بالقيمة من الأكبر.' },
            { en: 'Insert → Line chart for the 12-month trend.', ar: 'Insert ← Line chart لاتجاه الـ 12 شهراً.' },
            { en: 'Insert → Card for Total Sales and a KPI visual for target versus actual.', ar: 'Insert ← Card لـ Total Sales ومرئي KPI للهدف مقابل الفعلي.' },
            { en: 'Insert → Matrix for the city-by-product numbers.', ar: 'Insert ← Matrix لأرقام المدينة × المنتج.' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Which visual shows one big number such as Total Sales = SAR 1.24M, with no axes at all? (One word, English.)',
              ar: 'أي مرئي يعرض رقماً واحداً كبيراً مثل Total Sales = 1.24 مليون ريال، دون أي محاور؟ (كلمة واحدة بالإنجليزية.)',
            },
            accept: ['card', 'card visual'],
            solution: {
              en: 'The card visual. For a target-versus-actual number you would use the KPI visual instead.',
              ar: 'مرئي Card. ولمقارنة قيمة بهدف تستخدم مرئي KPI بدلاً منه.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which visual best shows Total Sales moving across the 12 months of 2026?', ar: 'أي مرئي يعرض تطور Total Sales عبر أشهر 2026 الاثني عشر بأفضل صورة؟' },
              options: [
                { en: 'Line chart', ar: 'الرسم الخطي' },
                { en: 'Pie chart', ar: 'الدائرة' },
                { en: 'Card', ar: 'البطاقة' },
                { en: 'Slicer', ar: 'مقسم البيانات Slicer' },
              ],
              answer: 0,
              explain: {
                en: 'Trend over time belongs in a line chart. A card shows one number; a pie shows shares of one moment.',
                ar: 'اتجاه الزمن يخص الرسم الخطي؛ والبطاقة تظهر رقماً واحداً، والدائرة تعرض حصص لحظة واحدة.',
              },
            },
            {
              type: 'tf',
              q: { en: 'A pie chart with 12 slices is a good choice for comparing many categories.', ar: 'الدائرة ذات 12 شريحة خيار جيد لمقارنة فئات كثيرة.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 1,
              explain: {
                en: 'Beyond about 5 slices, angles become unreadable. A sorted bar chart compares honestly.',
                ar: 'ما بعد خمس شرائح تقريباً تجعل الزوايا غير مقروءة؛ ورسم الأعمدة المرتب يقارن بصدق.',
              },
            },
            {
              type: 'mcq',
              q: { en: 'You need city rows and product columns with the numbers inside. Which visual?', ar: 'تحتاج مدناً في الصفوف ومنتجات في الأعمدة والأرقام بالداخل. أي مرئي؟' },
              options: [
                { en: 'Matrix', ar: 'المصفوفة Matrix' },
                { en: 'Line chart', ar: 'الرسم الخطي' },
                { en: 'Pie chart', ar: 'الدائرة' },
                { en: 'Card', ar: 'البطاقة' },
              ],
              answer: 0,
              explain: {
                en: 'The matrix is the cross-tab visual, the modern replacement of the pivot table.',
                ar: 'المصفوفة هي المرئي المتقاطع، والبديل الحديث للجدول المحوري.',
              },
            },
          ],
          xp: 25,
        },
        {
          id: 'L7M4L2',
          title: { en: 'Slicers, Filters and Interactivity', ar: 'مقسمات البيانات والمرشحات والتفاعلية' },
          minutes: 12,
          description: {
            en: 'Add slicers, work with visual, page and report filters, use cross-filtering, and open the door to drillthrough and tooltips.',
            ar: 'أضف مقسمات البيانات Slicers، واعمل بمرشحات المرئي والصفحة والتقرير، واستخدم التصفية المتقاطعة، وافتح باب Drillthrough والتلميحات Tooltips.',
          },
          objectives: [
            { en: 'Insert slicers and set their style and position.', ar: 'إدراج مقسمات البيانات وضبط نمطها وموضعها.' },
            { en: 'Apply visual-level, page-level and report-level filters.', ar: 'تطبيق مرشحات المرئي والصفحة والتقرير.' },
            { en: 'Control cross-filtering with Edit interactions and mention drillthrough and tooltips.', ar: 'التحكم بالتصفية المتقاطعة عبر Edit interactions وذكر Drillthrough و Tooltips.' },
          ],
          body: {
            en:
              '### Slicers: filtering buttons on the canvas\n\n' +
              'A **slicer** is a visual whose only job is filtering other visuals. Insert → Slicer, then drag a field into it (City or Year). Style it as a list, a dropdown or tiles, and give the slicers users touch most (City, Month) a fixed panel on the left or a strip at the top. Every visual on the page reacts instantly. One caution: a slicer filters the whole page, so on a page built for Jeddah, a visible City slicer lets users accidentally switch to Riyadh.\n\n' +
              '### The Filters pane: three levels\n\n' +
              'The **Filters** pane works at three levels:\n' +
              '- **Visual-level filters** affect one visual only, e.g. this chart shows products only.\n' +
              '- **Page-level filters** affect every visual on the page, e.g. the whole page is November only.\n' +
              '- **Report-level filters** affect all pages of the report, e.g. cancelled orders never appear anywhere.\n\n' +
              '### Cross-filtering: the click is a filter\n\n' +
              'Clicking a bar or slice on any visual cross-filters the other visuals on the page: click Riyadh on the branch chart and the product chart, the trend and the cards all recalculate for Riyadh. Ctrl-click adds a second value. If one visual should NOT react (usually the KPI cards), select it → Format → **Edit interactions** and turn the filtering off for that pair.\n\n' +
              '### Drillthrough and tooltips\n\n' +
              '**Drillthrough** builds a detail page behind the report: right-click any data point → Drill through → detail page, and the user lands there filtered to exactly that product and month. **Tooltips** are hover cards: hovering a bar shows a small panel of extra numbers, and you can even design a whole report page as a custom tooltip and attach it to a visual.\n\n' +
              '> TIP: Interactivity is the reason to leave Excel for Power BI — let the manager ask the next question by clicking, not by requesting a new file.',
            ar:
              '### المقسمات Slicers: أزرار التصفية على اللوحة\n\n' +
              '**المقسم Slicer** مرئي وظيفته الوحيدة تصفية المرئيات الأخرى. المسار: Insert ← Slicer ثم اسحب حقلاً إليه (City أو Year). نسّقه كقائمة أو قائمة منسدلة أو بلاطات، وامنح المقسمات الأكثر استخداماً (City و Month) لوحة ثابتة يساراً أو شريطاً أعلى. ويتفاعل كل مرئي في الصفحة فوراً. وتحذير واحد: الـ Slicer يصفّي الصفحة كلها، ففي صفحة مبنية لجدة يجعل Slicer المدينة المرئي المستخدمين ينتقلون بلا قصد إلى الرياض.\n\n' +
              '### جزء المرشحات: ثلاثة مستويات\n\n' +
              'يعمل جزء **Filters** على ثلاثة مستويات:\n' +
              '- **مرشح المرئي Visual-level** يخص مرئياً واحداً فقط، مثل إظهار المنتجات في هذا الرسم وحده.\n' +
              '- **مرشح الصفحة Page-level** يخص كل مرئيات الصفحة، مثل جعل الصفحة كلها لشهر نوفمبر.\n' +
              '- **مرشح التقرير Report-level** يخص كل صفحات التقرير، كإخفاء الطلبات الملغاة من كل مكان.\n\n' +
              '### التصفية المتقاطعة: النقرة مرشح\n\n' +
              'النقر على شريط أو شريحة في أي مرئي يصفّي المرئيات الأخرى في الصفحة: انقر Riyadh في رسم الفروع فتعيد رسوم المنتجات والاتجاه والبطاقات حسابها للرياض وحدها. والنقر مع Ctrl يضيف قيمة ثانية. وإن كان مرئي يجب ألا يتفاعل (البطاقات عادة)، فحدده ← Format ← **Edit interactions** وأطفئ التصفية بينه وبين الرسم المعني.\n\n' +
              '### Drillthrough و Tooltips\n\n' +
              '**Drillthrough** يبني صفحة تفاصيل خلف التقرير: زر أيمن على أي نقطة ← Drill through ← صفحة التفاصيل، فيهبط المستخدم إليها مرشحةً لنفس المنتج والشهر بالضبط. و **Tooltips** بطاقات تظهر عند المرور: مرور المؤشر على شريط يعرض لوحة صغيرة بأرقام إضافية، ويمكنك تصميم صفحة تقرير كاملة لتكون Tooltip مخصصة وربطها بمرئي.\n\n' +
              '> TIP: التفاعلية هي سبب الانتقال من Excel إلى Power BI — اترك المدير يسأل سؤاله التالي بالنقر لا بطلب ملف جديد.',
          },
          terms: [
            {
              en: 'Slicer',
              ar: 'مقسم البيانات (Slicer)',
              def: {
                en: 'A visual that exists only to filter other visuals, usually for City, Year or Month.',
                ar: 'مرئي وظيفته الوحيدة تصفية غيره، وعادة للحقول مثل City أو Year أو Month.',
              },
            },
            {
              en: 'Visual-Level Filter',
              ar: 'مرشح المرئي',
              def: {
                en: 'A filter that affects one visual only, set in the Filters pane.',
                ar: 'مرشح يخص مرئياً واحداً فقط، ويضبط من جزء Filters.',
              },
            },
            {
              en: 'Cross-Filtering',
              ar: 'التصفية المتقاطعة',
              def: {
                en: 'Clicking a data point in one visual filters the other visuals on the page.',
                ar: 'النقر على نقطة في مرئي يصفّي بقية المرئيات في الصفحة.',
              },
            },
            {
              en: 'Drillthrough',
              ar: 'التنقل التفصيلي (Drillthrough)',
              def: {
                en: 'Right-clicking a data point to jump to a detail page filtered to that exact selection.',
                ar: 'النقر بالزر الأيمن على نقطة للانتقال إلى صفحة تفاصيل مرشحة لنفس الاختيار.',
              },
            },
            {
              en: 'Tooltip',
              ar: 'التلميح (Tooltip)',
              def: {
                en: 'The hover card that shows extra numbers when the cursor rests on a data point.',
                ar: 'البطاقة التي تظهر عند مرور المؤشر على نقطة بيانات وتعرض أرقاماً إضافية.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'An interactive page for Al-Noor', ar: 'صفحة تفاعلية لشركة النور' },
              body: {
                en:
                  'The November page has: a City slicer (dropdown, top left), a Month slicer (tiles, top), four KPI cards, the branch bar chart and the product line chart.\n\n' +
                  'Click Riyadh in the branch chart: the product chart narrows to Riyadh products, and the trend follows. The Total Sales card was set to not react (Edit interactions → None), so the November total stays visible for comparison.\n\n' +
                  'Right-click the Jeddah bar → Drill through → Product Detail page: it opens filtered to Jeddah, showing the top products table for that city only.',
                ar:
                  'صفحة نوفمبر فيها: Slicer للمدينة (قائمة منسدلة أعلى اليسار)، و Slicer للشهر (بلاطات أعلى)، وأربع بطاقات KPI، ورسم أعمدة للفروع ورسم خطي للمنتجات.\n\n' +
                  'انقر Riyadh في رسم الفروع: يضيق رسم المنتجات إلى منتجات الرياض، ويتبعه الاتجاه. أما بطاقة Total Sales فضُبطت على عدم التفاعل (Edit interactions ← None) فيبقى إجمالي نوفمبر ظاهراً للمقارنة.\n\n' +
                  'زر أيمن على شريط جدة ← Drill through ← صفحة Product Detail: تفتح مرشحة لجدة وتعرض جدول أفضل المنتجات لتلك المدينة وحدها.',
              },
            },
          ],
          steps: [
            { en: 'Insert → Slicer; drag City into it; in Format choose Dropdown style.', ar: 'Insert ← Slicer؛ اسحب City إليه؛ من Format اختر نمط Dropdown.' },
            { en: 'Select the trend chart and set a visual-level filter in the Filters pane (e.g. show one product line only).', ar: 'حدد رسم الاتجاه وضع له مرشح مرئي من جزء Filters (مثل إظهار خط منتج واحد).' },
            { en: 'Click the Riyadh bar and watch the other visuals filter.', ar: 'انقر شريط Riyadh وراقب تصفية بقية المرئيات.' },
            { en: 'Select the Total Sales card → Format → Edit interactions → None for the branch chart.', ar: 'حدد بطاقة Total Sales ← Format ← Edit interactions ← None تجاه رسم الفروع.' },
            { en: 'Build a Product Detail page and enable Drillthrough from the branch chart.', ar: 'ابنِ صفحة Product Detail وفعّل Drillthrough من رسم الفروع.' },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'You are making the Al-Noor page interactive. Which actions are correct? Tick all that apply.',
              ar: 'تريد جعل صفحة شركة النور تفاعلية. أي الأفعال التالية صحيحة؟ اختر كل ما ينطبق.',
            },
            solution: {
              en: 'A City slicer for the page, cross-filtering by clicking, a card protected from cross-filtering, and a drillthrough page for detail.',
              ar: 'Slicer للمدينة للصفحة، وتصفية متقاطعة بالنقر، وبطاقة محمية من التصفية المتقاطعة، وصفحة Drillthrough للتفاصيل.',
            },
            confirm: [
              { en: 'Add a City slicer so users can filter the whole page', ar: 'تضيف Slicer للمدينة ليصفّي المستخدمون الصفحة كلها' },
              { en: 'Let clicking a bar cross-filter the other visuals', ar: 'تسمح للنقر على شريط بتصفية بقية المرئيات' },
              { en: 'Set the Total Sales card to not react to cross-filtering', ar: 'تضبط بطاقة Total Sales على عدم التفاعل مع التصفية المتقاطعة' },
              { en: 'Add a drillthrough page for product-level detail', ar: 'تضيف صفحة Drillthrough لتفاصيل مستوى المنتج' },
            ],
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which visual gives users buttons to filter the whole page, for example by year?', ar: 'أي مرئي يمنح المستخدمين أزراراً لتصفية الصفحة كلها، مثلاً حسب السنة؟' },
              options: [
                { en: 'Slicer', ar: 'مقسم البيانات Slicer' },
                { en: 'Card', ar: 'البطاقة' },
                { en: 'Matrix', ar: 'المصفوفة' },
                { en: 'KPI visual', ar: 'مرئي KPI' },
              ],
              answer: 0,
              explain: {
                en: 'The slicer is the filtering visual: list, dropdown or tiles, and every visual on the page reacts.',
                ar: 'الـ Slicer هو المرئي المرشِّح: قائمة أو منسدلة أو بلاطات، ويتفاعل كل مرئي في الصفحة.',
              },
            },
            {
              type: 'tf',
              q: { en: 'Clicking a bar in one visual can cross-filter the other visuals on the page.', ar: 'النقر على شريط في مرئي يمكن أن يصفّي بقية المرئيات في الصفحة.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'That is cross-filtering, and Edit interactions lets you exempt chosen visuals from it.',
                ar: 'هذه هي التصفية المتقاطعة، ويطل لك Edit interactions إعفاء مرئيات مختارة منها.',
              },
            },
            {
              type: 'fill',
              q: { en: 'Right-clicking a data point → ____ sends users to a detail page filtered to that selection. (One word, English.)', ar: 'النقر بالزر الأيمن على نقطة بيانات ← ____ يرسل المستخدم إلى صفحة تفاصيل مرشحة لنفس الاختيار. (كلمة واحدة بالإنجليزية.)' },
              accept: ['drillthrough', 'drill through'],
              explain: {
                en: 'Drillthrough builds a hidden detail page and filters it to the exact data point that was clicked.',
                ar: 'خيار Drillthrough يبني صفحة تفاصيل مخفية ويرشحها لنقطة البيانات التي نُقرت بالضبط.',
              },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L7M5',
      name: { en: 'Dashboard Design and Insights', ar: 'تصميم لوحات المعلومات والاستنتاجات' },
      lessons: [
        {
          id: 'L7M5L1',
          title: { en: 'Dashboard Layout and Design Principles', ar: 'تخطيط لوحة المعلومات ومبادئ التصميم' },
          minutes: 12,
          description: {
            en: 'Apply the five-second rule, build the KPI row, group with zones and color, avoid clutter, and design the mobile layout.',
            ar: 'طبّق قاعدة الخمس ثوان، وابنِ صف المؤشرات، وجمّع المناطق بالألوان، وتجنب الفوضى، وصمّم تخطيط الهاتف.',
          },
          objectives: [
            { en: 'Arrange a dashboard so the key answer appears within five seconds.', ar: 'ترتيب اللوحة بحيث يظهر الجواب الأهم في خمس ثوان.' },
            { en: 'Use zones, one accent color and consistent number formats.', ar: 'استخدام المناطق ولون تشديد واحد وتنسيقات أرقام متسقة.' },
            { en: 'Build the phone version in the Mobile layout view.', ar: 'بناء نسخة الهاتف من وضع Mobile layout.' },
          ],
          body: {
            en:
              '### The five-second rule\n\n' +
              'A manager opens the dashboard and, within **five seconds**, must see the answer to the question she actually opened it for: are we on track? That answer belongs in the top-left area, where the eye lands first. Everything else — trends, rankings, detail tables — is arranged behind it in decreasing order of importance. If a user needs a tour guide to find the main number, the layout has failed.\n\n' +
              '### The classic layout skeleton\n\n' +
              '1. **Top row: KPI cards** — Total Sales, Growth %, Orders, Stock Value: four or five cards, big numbers, no chart junk.\n' +
              '2. **Middle: the main trend** — one line chart of the key measure over time, wide, not squeezed beside six others.\n' +
              '3. **Left rail or top strip: slicers** — City and Month, in the same place on every page.\n' +
              '4. **Bottom: supporting breakdowns** — by product and by branch; two or three visuals, not nine.\n\n' +
              '### Color, clutter and alignment\n\n' +
              'Use **one accent color** for what matters (a strong blue or the brand color) and gray for context; color is a highlighter, not a rainbow. Remove heavy borders, drop shadows and background images; white space separates groups better than boxes do. Align visuals to an invisible grid, give every title a real sentence (Sales by Branch — November, not Chart 3), and keep a page to about six visuals. Consistent formats finish the job: SAR currency, 0 decimals for totals, 1 decimal for percentages.\n\n' +
              '### The mobile layout\n\n' +
              'Most managers will open this on a phone. Power BI Desktop has a **Mobile layout** view (View ribbon → Mobile layout): stack the visuals in a single column, put the KPI cards first, and drop anything that needs a wide screen. Ten minutes on the phone layout often doubles the real usage of a dashboard.\n\n' +
              '> WARN: A dashboard is not a storage room. If a visual has no owner and no question, delete it; you can always add it back.',
            ar:
              '### قاعدة الخمس ثوان\n\n' +
              'يفتح المدير اللوحة، ويجب أن يرى خلال **خمس ثوان** جواب السؤال الذي فتحها لأجله: هل نحن على المسار الصحيح؟ ذلك الجواب يوضع أعلى يسار الصفحة حيث تهبط العين أولاً. وكل ما عدا ذلك — الاتجاهات والترتيب وجداول التفاصيل — يرتّب خلفه بترتيب أهمية تنازلي. وإن احتاج المستخدم مرشداً ليجد الرقم الرئيسي فقد فشل التخطيط.\n\n' +
              '### الهيكل الكلاسيكي للتخطيط\n\n' +
              '1. **الصف الأعلى: بطاقات KPI** — Total Sales و Growth % و Orders و Stock Value: أربع أو خمس بطاقات بأرقام كبيرة بلا زينة رسومية.\n' +
              '2. **الوسط: الاتجاه الرئيسي** — رسم خطي واحد للمقياس الأساسي عبر الزمن، عريض، لا مضغوطاً بجوار ستة رسوم.\n' +
              '3. **الشريط الأيسر أو الأعلى: المقسمات** — City و Month، في المكان نفسه بكل صفحة.\n' +
              '4. **الأسفل: التفصيلات المساندة** — حسب المنتج وحسب الفرع؛ مرئيان أو ثلاثة لا تسعة.\n\n' +
              '### اللون والفوضى والمحاذاة\n\n' +
              'استخدم **لون تشديد واحداً** لما يهم (أزرق قوي أو لون العلامة) والرمادي للسياق؛ فاللون قلم تشديد لا قوس قزح. واحذف الحدود الثقيلة والظلال وصور الخلفية؛ فالمساحة البيضاء تفصل المجموعات أفضل من الصناديق. حاذِ المرئيات على شبكة غير مرئية، واجعل كل عنوان جملة حقيقية (المبيعات حسب الفرع — نوفمبر، لا Chart 3)، وأبق الصفحة على ستة مرئيات تقريباً. وتُختم المهمة بالتنسيقات المتسقة: عملة SAR، ولا كسور للمجاميع، وكسر واحد للنسب.\n\n' +
              '### تخطيط الهاتف\n\n' +
              'معظم المدراء سيفتحون اللوحة على الهاتف. وفي Power BI Desktop وضع **Mobile layout** (شريط View ← Mobile layout): رصّ المرئيات في عمود واحد، وابدأ ببطاقات KPI، واحذف ما يحتاج شاشة عريضة. وعشر دقائق على تخطيط الهاتف تضاعف غالباً الاستخدام الحقيقي للوحة.\n\n' +
              '> WARN: اللوحة ليست مخزناً؛ إن لم يكن للمرئي مالك وسؤال فاحذفه، ويمكنك إعادته متى شئت.',
          },
          terms: [
            {
              en: 'Five-Second Rule',
              ar: 'قاعدة الخمس ثوان',
              def: {
                en: 'The design rule that the most important answer must be visible within five seconds of opening the page.',
                ar: 'قاعدة تصميم تقضي بأن يظهر الجواب الأهم خلال خمس ثوان من فتح الصفحة.',
              },
            },
            {
              en: 'KPI Row',
              ar: 'صف مؤشرات الأداء',
              def: {
                en: 'The top band of the dashboard holding four or five cards with the key numbers.',
                ar: 'الشريط الأعلى من اللوحة وفيه أربع أو خمس بطاقات للأرقام الرئيسية.',
              },
            },
            {
              en: 'Accent Color',
              ar: 'لون التشديد',
              def: {
                en: 'The single strong color reserved for what matters, while everything else stays gray.',
                ar: 'اللون القوي الوحيد المحجوز لما يهم، بينما يبقى الباقي رمادياً.',
              },
            },
            {
              en: 'Mobile Layout',
              ar: 'تخطيط الهاتف (Mobile Layout)',
              def: {
                en: 'The phone-specific arrangement of visuals, built in the View → Mobile layout screen.',
                ar: 'ترتيب المرئيات الخاص بالهاتف، ويُبنى من شاشة View ← Mobile layout.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'The Al-Noor November page, laid out', ar: 'صفحة نوفمبر لشركة النور بعد التخطيط' },
              body: {
                en:
                  '- Top-left zone: City and Month slicers, small and gray.\n' +
                  '- Top row: four cards — Total Sales 1,240,000 SAR, Growth +18.1%, Orders 3,120, Stock Value 214,000 SAR — all in the same font and format.\n' +
                  '- Center: one wide line chart, sales across the last 12 months, drawn in the single accent blue.\n' +
                  '- Bottom: one sorted bar chart by branch and one matrix by city and product.\n' +
                  '- Titles read as sentences; no borders, no shadows; everything aligned to the grid.\n\n' +
                  'Opened on a phone, the Mobile layout shows the four cards, then the trend, then the bar chart — in that order.',
                ar:
                  '- منطقة أعلى اليسار: Slicer للمدينة والشهر، صغير ورمادي.\n' +
                  '- الصف الأعلى: أربع بطاقات — Total Sales بـ 1,240,000 ريال، و Growth بـ +18.1%، و Orders بـ 3,120، و Stock Value بـ 214,000 ريال — بخط وتنسيق واحد.\n' +
                  '- الوسط: رسم خطي عريض واحد لمبيعات الأشهر الاثني عشر الأخيرة بلون أزرق التشديد الوحيد.\n' +
                  '- الأسفل: رسم أعمدة مرتب حسب الفرع، ومصفوفة للمدينة × المنتج.\n' +
                  '- العناوين جمل حقيقية؛ بلا حدود ولا ظلال؛ وكل شيء محاذاً على الشبكة.\n\n' +
                  'وفتحاً على الهاتف يعرض تخطيط الهاتف البطاقات الأربع ثم الاتجاه ثم رسم الأعمدة — بهذا الترتيب.',
              },
            },
          ],
          steps: [
            { en: 'Sketch four zones on paper first: KPI row, main trend, slicer rail, breakdowns.', ar: 'ارسم أربع مناطق على ورق أولاً: صف KPI، والاتجاه الرئيسي، وشريط المقسمات، والتفصيلات.' },
            { en: 'Add the four cards and format every number identically (SAR, 0 decimals).', ar: 'أضف البطاقات الأربع ونسّق كل الأرقام بنفس الشكل (SAR بلا كسور).' },
            { en: 'Apply one accent color; set everything else to shades of gray.', ar: 'طبّق لون تشديد واحداً واجعل الباقي درجات رمادي.' },
            { en: 'Align visuals to the grid and rewrite every title as a full sentence.', ar: 'حاذِ المرئيات على الشبكة وأعد كتابة كل عنوان كجملة كاملة.' },
            { en: 'Switch to View → Mobile layout and stack the essentials for the phone.', ar: 'انتقل إلى View ← Mobile layout ورصّ الأساسيات للهاتف.' },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'Design checklist for the Al-Noor dashboard. Which actions follow the design principles? Tick all that apply.',
              ar: 'قائمة مراجعة التصميم للوحة شركة النور. أي الأفعال التالية تلتزم مبادئ التصميم؟ اختر كل ما ينطبق.',
            },
            solution: {
              en: 'KPI cards on top, one accent color with gray context, about six aligned visuals per page, and a real Mobile layout for phones.',
              ar: 'بطاقات KPI أعلى، ولون تشديد واحد مع سياق رمادي، ونحو ستة مرئيات محاذاة في الصفحة، وتخطيط حقيقي للهاتف.',
            },
            confirm: [
              { en: 'Put the four KPI cards across the top row', ar: 'تضع بطاقات KPI الأربع في الصف الأعلى' },
              { en: 'Use one accent color and gray for context', ar: 'تستخدم لون تشديد واحداً والرمادي للسياق' },
              { en: 'Keep about six visuals per page, aligned to a grid', ar: 'تبقي نحو ستة مرئيات في الصفحة محاذاة على شبكة' },
              { en: 'Build the phone version in the Mobile layout view', ar: 'تبني نسخة الهاتف من وضع Mobile layout' },
            ],
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'What does the five-second rule require?', ar: 'ماذا تتطلب قاعدة الخمس ثوان؟' },
              options: [
                { en: 'The most important answer is visible within five seconds of opening the page', ar: 'ظهور الجواب الأهم خلال خمس ثوان من فتح الصفحة' },
                { en: 'The dashboard loads in five seconds', ar: 'تحميل اللوحة في خمس ثوان' },
                { en: 'Five visuals per page maximum', ar: 'خمسة مرئيات كحد أقصى في الصفحة' },
                { en: 'Five slicers on every page', ar: 'خمسة مقسمات في كل صفحة' },
              ],
              answer: 0,
              explain: {
                en: 'It is about reading, not loading: the key number greets the eye immediately, at the top.',
                ar: 'المعيار قراءة لا تحميل: يرحب الرقم الرئيسي بالعين فوراً في الأعلى.',
              },
            },
            {
              type: 'tf',
              q: { en: 'Using eight bright clashing colors improves a dashboard.', ar: 'استخدام ثمانية ألوان صارخة متضاربة يحسّن لوحة المعلومات.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 1,
              explain: {
                en: 'Color should highlight what matters: one accent color and gray for the rest.',
                ar: 'اللون للتشديد على المهم: لون واحد للتمييز ورمادي للباقي.',
              },
            },
            {
              type: 'mcq',
              q: { en: 'Where do you arrange the phone version of a report page?', ar: 'أين ترتب النسخة المخصصة للهاتف من صفحة التقرير؟' },
              options: [
                { en: 'View → Mobile layout', ar: 'View ← Mobile layout' },
                { en: 'Model view', ar: 'وضع Model' },
                { en: 'Power Query editor', ar: 'محرر Power Query' },
                { en: 'Navigator window', ar: 'نافذة Navigator' },
              ],
              answer: 0,
              explain: {
                en: 'The Mobile layout screen stacks visuals in one column for phones, separate from the desktop page.',
                ar: 'شاشة Mobile layout ترصّ المرئيات في عمود واحد للهاتف، منفصلة عن صفحة سطح المكتب.',
              },
            },
          ],
          xp: 25,
        },
        {
          id: 'L7M5L2',
          title: { en: 'From Dashboard to Business Insights', ar: 'من لوحة المعلومات إلى الرؤى التجارية' },
          minutes: 14,
          description: {
            en: 'Read the Al-Noor sales dashboard layer by layer — trend, ranking, composition — and convert visuals into recommendations.',
            ar: 'اقرأ لوحة مبيعات شركة النور طبقة طبقة — الاتجاه والترتيب والتكوين — وحوّل المرئيات إلى توصيات.',
          },
          objectives: [
            { en: 'Read a dashboard in the order: trend, then ranking, then composition.', ar: 'قراءة اللوحة بالترتيب: الاتجاه ثم الترتيب ثم التكوين.' },
            { en: 'Verify dashboard numbers are internally consistent.', ar: 'التحقق من الاتساق الداخلي لأرقام اللوحة.' },
            { en: 'Turn an observation into a recommendation with action, owner and effect.', ar: 'تحويل الملاحظة إلى توصية بفعل ومالك وأثر متوقع.' },
          ],
          body: {
            en:
              '### Reading a dashboard is a skill\n\n' +
              'The dashboard is not the deliverable; the decision is. Reading it well means walking the same three layers every time: the **trend** (is the number going up or down, and since when?), the **ranking** (who or what is at the top and at the bottom?), and the **composition** (where is the money concentrated?). Walk them in order and the story of the month appears by itself.\n\n' +
              '### The Al-Noor November dashboard, read aloud\n\n' +
              '- **Trend**: Total Sales reached **SAR 1,240,000** in November versus **SAR 1,050,000** in October — growth of **18.1%**.\n' +
              '- **Ranking**: Air Conditioners lead with **SAR 312,000** (**25.2%** of total); Fans are last with **SAR 84,000** (**6.8%**).\n' +
              '- **Composition**: Riyadh **SAR 520,000** (**41.9%**), Jeddah **SAR 430,000** (**34.7%**), Dammam **SAR 290,000** (**23.4%**).\n' +
              '- **Consistency check**: 520,000 + 430,000 + 290,000 = 1,240,000, and the five product lines (312,000 + 298,000 + 292,000 + 254,000 + 84,000) also sum to 1,240,000 — the dashboard is internally consistent.\n' +
              '- **Detail worth noticing**: AC sales grew from **SAR 246,000** in October to **SAR 312,000** — up **26.8%** in one month, faster than the company average.\n\n' +
              '### From observation to recommendation\n\n' +
              'An insight is only finished when it survives the **so-what test** and becomes a recommendation: an action, an owner and an expected effect. Weak: AC sales are up. Strong: AC grew 26.8% month-over-month, driven by Riyadh hotel fit-out orders; recommend that the sales team contact the five largest Riyadh contractors before the December project cycle, targeting about SAR 100,000 of additional orders.\n\n' +
              '> TIP: Write the insight sentence first, then open the dashboard and find the numbers that prove it. If the numbers refuse, the sentence was an opinion.',
            ar:
              '### قراءة اللوحة مهارة\n\n' +
              'اللوحة ليست المخرج النهائي؛ القرار هو المخرج. وقراءتها جيداً تعني المرور بالطبقات الثلاث نفسها في كل مرة: **الاتجاه** (هل الرقم يصعد أم يهبط، ومنذ متى؟)، ثم **الترتيب** (من أو ماذا يتصدر ويؤخر؟)، ثم **التكوين** (أين يتركز المال؟). امش عليها بالترتيب فتظهر قصة الشهر وحدها.\n\n' +
              '### لوحة نوفمبر لشركة النور، مقروءة بصوت عالٍ\n\n' +
              '- **الاتجاه**: بلغ Total Sales **1,240,000 ريال** في نوفمبر مقابل **1,050,000 ريال** في أكتوبر — بنمو **18.1%**.\n' +
              '- **الترتيب**: المكيفات في الصدارة بـ **312,000 ريال** (**25.2%** من الإجمالي)، والمراوح في الأخير بـ **84,000 ريال** (**6.8%**).\n' +
              '- **التكوين**: الرياض **520,000 ريال** (**41.9%**)، وجدة **430,000 ريال** (**34.7%**)، والدمام **290,000 ريال** (**23.4%**).\n' +
              '- **فحص الاتساق**: 520,000 + 430,000 + 290,000 = 1,240,000، كما أن خطوط المنتجات الخمسة (312,000 + 298,000 + 292,000 + 254,000 + 84,000) تجمع إلى 1,240,000 أيضاً — فاللوحة متسقة داخلياً.\n' +
              '- **تفصيلة تлужر الانتباه**: نمت مبيعات المكيفات من **246,000 ريال** في أكتوبر إلى **312,000** — بزيادة **26.8%** في شهر واحد، أسرع من متوسط الشركة.\n\n' +
              '### من الملاحظة إلى التوصية\n\n' +
              'لا تكتمل الرؤية إلا إذا عبرت **اختبار وماذا بعد (So-What)** وصارت توصية: فعل ومالك وأثر متوقع. الضعيفة: مبيعات المكيفات ارتفعت. والقوية: نمت المكيفات 26.8% شهرياً بفعل طلبات تجهيز الفنادق في الرياض؛ نوصي بفريق المبيعات يتصل بأكبر خمسة مقاولي الرياض قبل دورة مشاريع ديسمبر، مستهدفاً نحو 100,000 ريال من الطلبات الإضافية.\n\n' +
              '> TIP: اكتب جملة الرؤية أولاً ثم افتح اللوحة وابحث عن الأرقام التي تثبتها؛ فإن رفضت الأرقام فالجملة كانت رأياً لا رؤية.',
          },
          terms: [
            {
              en: 'Business Insight',
              ar: 'الرؤية التجارية',
              def: {
                en: 'A finding from the data that changes or confirms a decision, stated with numbers.',
                ar: 'نتيجة من البيانات تغيّر قراراً أو تؤكده، وتُصاغ بأرقام.',
              },
            },
            {
              en: 'Trend Analysis',
              ar: 'تحليل الاتجاه',
              def: {
                en: 'Comparing a measure across time to see direction, speed and turning points.',
                ar: 'مقارنة مقياس عبر الزمن لرؤية الاتجاه والسرعة ونقاط الانعطاف.',
              },
            },
            {
              en: 'So-What Test',
              ar: 'اختبار وماذا بعد',
              def: {
                en: 'Asking so what? of every observation until an action, an owner and an expected effect appear.',
                ar: 'طرح سؤال وماذا بعد؟ على كل ملاحظة حتى يظهر فعل ومالك وأثر متوقع.',
              },
            },
            {
              en: 'Recommendation',
              ar: 'التوصية',
              def: {
                en: 'The sentence that follows an insight: what to do, who does it, what result to expect.',
                ar: 'الجملة التي تلي الرؤية: ماذا نفعل، ومن ينفذ، وما النتيجة المتوقعة.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'One insight, written properly', ar: 'رؤية واحدة مصاغة باحتراف' },
              body: {
                en:
                  'Observation: Fans sold SAR 84,000 in November, 6.8% of total — the lowest of the five product lines.\n\n' +
                  'So what? Fans are a summer product; November demand in Saudi Arabia is naturally low, and the warehouse still holds stock bought for summer prices.\n\n' +
                  'Recommendation: bundle one fan free with every three AC units sold in December (owner: sales manager, Al-Noor Trading), expected effect: clear about SAR 60,000 of fan stock before the season ends, at no extra purchase cost.',
                ar:
                  'الملاحظة: باعت المراوح 84,000 ريال في نوفمبر، أي 6.8% من الإجمالي — الأدنى بين خطوط المنتجات الخمسة.\n\n' +
                  'وماذا بعد؟ المراوح منتج صيفي؛ وطلب نوفمبر في السعودية منخفض طبيعياً، والمستودع ما زال يحمل مخزوناً اشتري بأسعار الصيف.\n\n' +
                  'التوصية: مروحة مجانية مع كل ثلاثة مكيفات تُباع في ديسمبر (المالك: مدير المبيعات، شركة النور)، والأثر المتوقع: تصريف نحو 60,000 ريال من مخزون المراوح قبل نهاية الموسم دون تكلفة شراء إضافية.',
              },
            },
          ],
          steps: [
            { en: 'Start with the trend: compare this month to last month at the top of the dashboard.', ar: 'ابدأ بالاتجاه: قارن هذا الشهر بالشهر الماضي أعلى اللوحة.' },
            { en: 'Read the rankings: which products and branches lead, which lag.', ar: 'اقرأ الترتيب: أي المنتجات والفروع تتقدم وأيها تتأخر.' },
            { en: 'Check composition: what share of the total does each region carry.', ar: 'افحص التكوين: ما نصيب كل منطقة من الإجمالي.' },
            { en: 'Verify the pieces sum to the total before trusting the numbers.', ar: 'تحقق من أن الأجزاء تجمع إلى الإجمالي قبل الوثوق بالأرقام.' },
            { en: 'Test each observation with so what? and attach an action, an owner, an effect.', ar: 'اختبر كل ملاحظة بسؤال وماذا بعد؟ وأرفق فعل ومالكاً وأثراً.' },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'From the dashboard: October sales were SAR 1,050,000 and November sales were SAR 1,240,000. What is the month-over-month growth rate, in percent? Round to one decimal.',
              ar: 'من اللوحة: مبيعات أكتوبر 1,050,000 ريال ومبيعات نوفمبر 1,240,000 ريال. ما معدل النمو الشهري بالنسبة المئوية؟ قرّب لكسر واحد.',
            },
            answer: 18.1,
            tolerance: 0.05,
            solution: {
              en: '(1,240,000 - 1,050,000) / 1,050,000 * 100 = 190,000 / 1,050,000 * 100 = 18.1%.',
              ar: '(1,240,000 - 1,050,000) ÷ 1,050,000 × 100 = 190,000 ÷ 1,050,000 × 100 = 18.1%.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which sentence is a real business insight rather than a number reading?', ar: 'أي جملة رؤية تجارية حقيقية وليست قراءة رقماً؟' },
              options: [
                { en: 'AC grew 26.8% driven by Riyadh hotel orders; recommend contacting the five largest Riyadh contractors before December.', ar: 'نمت المكيفات 26.8% بفعل طلبات فنادق الرياض؛ نوصي بالاتصال بأكبر خمسة مقاولي الرياض قبل ديسمبر.' },
                { en: 'Total Sales is 1,240,000 SAR.', ar: 'إجمالي المبيعات 1,240,000 ريال.' },
                { en: 'The line chart shows a line.', ar: 'الرسم الخطي يعرض خطاً.' },
                { en: 'November is a month.', ar: 'نوفمبر شهر من السنة.' },
              ],
              answer: 0,
              explain: {
                en: 'An insight names the cause and the action. The other three sentences are raw readings, not decisions.',
                ar: 'الرؤية تسمي السبب والفعل؛ والجمل الأخرى قراءات خام لا قرارات.',
              },
            },
            {
              type: 'num',
              q: { en: 'AC sales were SAR 246,000 in October and SAR 312,000 in November. What is the growth rate in percent? Round to one decimal.', ar: 'مبيعات المكيفات 246,000 ريال في أكتوبر و 312,000 ريال في نوفمبر. ما معدل النمو بالنسبة المئوية؟ قرّب لكسر واحد.' },
              answer: 26.8,
              tolerance: 0.05,
              explain: {
                en: '(312,000 - 246,000) / 246,000 * 100 = 66,000 / 246,000 * 100 = 26.83%, rounded to 26.8%.',
                ar: '(312,000 - 246,000) ÷ 246,000 × 100 = 66,000 ÷ 246,000 × 100 = 26.83% وتقرب إلى 26.8%.',
              },
            },
            {
              type: 'tf',
              q: { en: 'A complete recommendation names an action, an owner and an expected effect.', ar: 'التوصية المكتملة تسمي فعلاً ومالكاً وأثراً متوقعاً.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'Those three parts are what turns an observation into something a manager can approve and schedule.',
                ar: 'هذه الأجزاء الثلاثة هي ما يحوّل الملاحظة إلى شيء يستطيع المدير الموافقة عليه وجدولته.',
              },
            },
          ],
          xp: 25,
        },
      ],
    },
  ],
  exam: {
    questions: [
      {
        type: 'mcq',
        q: { en: 'Your manager in Jeddah must open the finished report in his browser through a link, without installing anything. Which component do you publish to?', ar: 'مديرك في جدة يجب أن يفتح التقرير الجاهز في المتصفح عبر رابط دون تثبيت أي شيء. إلى أي مكوّن تنشر؟' },
        options: [
          { en: 'Power BI Desktop', ar: 'Power BI Desktop' },
          { en: 'Power BI Service', ar: 'Power BI Service' },
          { en: 'Power Query', ar: 'Power Query' },
          { en: 'Power Pivot', ar: 'Power Pivot' },
        ],
        answer: 1,
        explain: {
          en: 'The Power BI Service is the cloud workspace: publish there and share the link. Desktop builds; Mobile only views.',
          ar: 'خدمة Power BI Service هي مساحة العمل السحابية: انشر إليها وشارك الرابط. و Desktop للبناء، و Mobile للمشاهدة فقط.',
        },
        mistake: {
          en: 'Choosing Desktop is the trap: it is the builder on your machine, not the sharing platform.',
          ar: 'اختيار Desktop هو الفخ: فهو أداة البناء على جهازك لا منصة المشاركة.',
        },
      },
      {
        type: 'mcq',
        q: { en: 'Where does Power BI record every cleaning step, in order, so it repeats automatically on refresh?', ar: 'أين تسجل Power BI كل خطوة تنظيف بالترتيب لتتكرر تلقائياً عند التحديث؟' },
        options: [
          { en: 'The Filters pane', ar: 'جزء المرشحات Filters' },
          { en: 'The Applied Steps list in Power Query', ar: 'قائمة Applied Steps في Power Query' },
          { en: 'The Model view', ar: 'وضع Model' },
          { en: 'The Navigator window', ar: 'نافذة Navigator' },
        ],
        answer: 1,
        explain: {
          en: 'Applied Steps is the recorded recipe; refresh replays it exactly. You can edit or delete any step.',
          ar: 'قائمة Applied Steps هي الوصفة المسجلة؛ ويعيد التحديث تشغيلها كما هي، ويمكنك تعديل أي خطوة أو حذفها.',
        },
      },
      {
        type: 'mcq',
        q: { en: 'You must combine a sales table with a products table using the shared ProductID column. Which Power Query operation?', ar: 'تحتاج إلى جمع جدول المبيعات بجدول المنتجات عبر عمود ProductID المشترك. أي عملية Power Query تختار؟' },
        options: [
          { en: 'Append Queries', ar: 'Append Queries' },
          { en: 'Merge Queries', ar: 'Merge Queries' },
          { en: 'Unpivot Columns', ar: 'Unpivot Columns' },
          { en: 'Remove Rows', ar: 'Remove Rows' },
        ],
        answer: 1,
        explain: {
          en: 'Merge joins two tables through a matching key, like VLOOKUP. Append stacks tables with the same columns instead.',
          ar: 'الدمج Merge يربط جدولين عبر مفتاح متطابق كالـ VLOOKUP؛ أما التراص Append فيرصّ الجداول المتطابقة الأعمدة.',
        },
        similar: {
          en: 'Related question: you receive 12 monthly files with identical columns and must stack them into one table — that is Append Queries.',
          ar: 'سؤال مرافق: تستلم 12 ملفاً شهرياً بأعمدة متطابقة وتريد رصّها في جدول واحد — هذا هو Append Queries.',
        },
      },
      {
        type: 'mcq',
        q: { en: 'A user changes a City slicer. Which object recalculates automatically at that moment?', ar: 'غيّر المستخدم Slicer للمدينة. أي كائن يعيد حسابه تلقائياً في تلك اللحظة؟' },
        options: [
          { en: 'A measure like Total Sales', ar: 'مقياس مثل Total Sales' },
          { en: 'A calculated column', ar: 'عمود محسوب' },
          { en: 'The imported raw table', ar: 'الجدول الخام المستورد' },
          { en: 'The Power Query applied steps', ar: 'خطوات Power Query المطبقة' },
        ],
        answer: 0,
        explain: {
          en: 'Measures recompute for the active filter context. Calculated columns were fixed at load time and never react to slicers.',
          ar: 'المقاييس تعاد وفق سياق المرشح النشط؛ أما الأعمدة المحسوبة فثبتت وقت التحميل ولا تتفاعل مع الـ Slicers.',
        },
        mistake: {
          en: 'The calculated column trap: it was computed row by row once, at load time, and stays frozen.',
          ar: 'فخ العمود المحسوب: حسب صفاً بصف مرة واحدة وقت التحميل ثم تجمّد.',
        },
      },
      {
        type: 'mcq',
        q: { en: 'Which visual best shows Total Sales moving across the 12 months of 2026?', ar: 'أي مرئي يعرض تطور Total Sales عبر أشهر 2026 الاثني عشر بأفضل صورة؟' },
        options: [
          { en: 'Pie chart', ar: 'الدائرة' },
          { en: 'Line chart', ar: 'الرسم الخطي' },
          { en: 'Card', ar: 'البطاقة' },
          { en: 'Matrix', ar: 'المصفوفة' },
        ],
        answer: 1,
        explain: {
          en: 'Trend over time belongs in a line chart: time on the horizontal axis, one line, easy turning points.',
          ar: 'اتجاه الزمن يخص الرسم الخطي: الزمن على المحور الأفقي وخط واحد ونقاط انعطاف واضحة.',
        },
      },
      {
        type: 'tf',
        q: { en: 'A pie chart with 12 slices is a good choice for comparing many categories.', ar: 'الدائرة ذات 12 شريحة خيار جيد لمقارنة فئات كثيرة.' },
        options: [
          { en: 'True', ar: 'صح' },
          { en: 'False', ar: 'خطأ' },
        ],
        answer: 1,
        explain: {
          en: 'Beyond about five slices, angles become unreadable. Use a sorted bar chart instead.',
          ar: 'ما بعد خمس شرائح تقريباً يجعل الزوايا غير مقروءة؛ فاستخدم رسم الأعمدة المرتب.',
        },
      },
      {
        type: 'fill',
        q: { en: 'One row in Dim_Product matches many rows in Sales. This is called a ______ relationship (write it as 1:N or in words).', ar: 'صف واحد في Dim_Product يطابق صفوفاً كثيرة في Sales. هذا يسمى علاقة ______ (اكتبها 1:N أو بالكلمات).' },
        accept: ['1:n', 'one-to-many', 'one to many', '1 to many', '1-n'],
        explain: {
          en: 'One-to-many is the standard dimension-to-fact relationship, and it lets filters flow from the dimension into the facts.',
          ar: 'علاقة واحد إلى متعدد هي العلاقة المعيارية بين الأبعاد والحقائق، وهي التي تتيح تدفق المرشحات من الأبعاد إلى الحقائق.',
        },
      },
      {
        type: 'num',
        q: { en: 'November Profit is SAR 248,000 and Total Sales is SAR 1,240,000. The measure Margin % = DIVIDE([Profit], [Total Sales]) is on a card formatted as percentage. What number does the card show, in percent?', ar: 'ربح نوفمبر 248,000 ريال و Total Sales تساوي 1,240,000 ريال. وُضع المقياس Margin % = DIVIDE([Profit], [Total Sales]) على بطاقة منسقة كنسبة مئوية. ما الرقم الذي تعرضه البطاقة بالنسبة المئوية؟' },
        answer: 20,
        tolerance: 0.05,
        explain: {
          en: '248,000 / 1,240,000 * 100 = 20%. DIVIDE returns 0.2, and the percentage format shows it as 20.0%.',
          ar: '248,000 ÷ 1,240,000 × 100 = 20%. تعيد DIVIDE القيمة 0.2، ويعرضها التنسيق النسبي 20.0%.',
        },
      },
    ],
  },
};

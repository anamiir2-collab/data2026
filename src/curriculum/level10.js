// Level 10 — Junior Data Analyst Readiness
export default {
  id: 'L10',
  num: 10,
  name: { en: 'Junior Data Analyst Readiness', ar: 'الجاهزية لوظيفة محلل بيانات مبتدئ' },
  goal: {
    en: 'Run the complete analyst workflow end to end — from business requirements to insights — and prove your readiness with the final and practical examinations.',
    ar: 'تشغيل سير عمل المحلل كاملاً من البداية للنهاية — من متطلبات الأعمال إلى الرؤى — وإثبات جاهزيتك بالتقييمين النهائي والعملي.',
  },
  icon: '🚀',
  modules: [
    {
      id: 'L10M1',
      name: { en: 'The Analyst Workflow', ar: 'سير عمل المحلل' },
      lessons: [
        {
          id: 'L10M1L1',
          title: { en: 'Understanding Business Requirements and Receiving Raw Data', ar: 'فهم متطلبات الأعمال واستلام البيانات الخام' },
          minutes: 12,
          description: {
            en: 'Start every analysis the professional way: clarify the question before touching any data.',
            ar: 'ابدأ كل تحليل بالطريقة المهنية: وضّح السؤال قبل لمس أي بيانات.',
          },
          objectives: [
            { en: 'Translate vague requests into answerable questions', ar: 'تحويل الطلبات الغامضة إلى أسئلة قابلة للإجابة' },
            { en: 'Define scope, period and success criteria', ar: 'تحديد النطاق والفترة ومعايير النجاح' },
            { en: 'Receive and inventory raw data properly', ar: 'استلام البيانات الخام وجردها بشكل صحيح' },
          ],
          body: {
            en: 'A manager says: "Sales are down, tell me why." That is not a question — it is a worry. Your first skill is turning it into something answerable: "Which month, which region, which product category shows the drop, and compared to what baseline?"\n\n### The requirement checklist\n- **Question**: exactly what must be known?\n- **Period**: which dates (March 2025? The full year?)\n- **Scope**: which regions, products, channels?\n- **Definition**: what does "down" mean — vs last month, vs last year?\n- **Deliverable**: a one-page summary? A dashboard? A meeting?\n\n### Receiving raw data\nWhen the file arrives, inventory it BEFORE analyzing: how many rows and columns, what does each column mean, which period it covers, where the obvious gaps are. Make a working COPY — the original file is never modified.\n\n> TIP: Five minutes of questions saves five days of wrong analysis. "Compared to what?" is the most powerful analyst question there is.',
          ar: 'يقول المدير: "المبيعات هابطة، أخبرني لماذا". هذا ليس سؤالاً — بل قلق. مهارتك الأولى تحويله إلى شيء قابل للإجابة: "أي شهر، وأي منطقة، وأي فئة منتجات يظهر فيها الهبوط، ومقارنة بأي أساس؟"\n\n### قائمة فهم المتطلبات\n- **السؤال**: ما الذي يجب معرفته بالضبط؟\n- **الفترة**: أي تواريخ (مارس 2025؟ السنة كاملة؟)\n- **النطاق**: أي مناطق أو منتجات أو قنوات؟\n- **التعريف**: ماذا يعني "هبوط" — مقارنة بالشهر الماضي أم بنفس الشهر من العام السابق؟\n- **المخرج**: ملخص من صفحة؟ لوحة بيانات؟ اجتماع؟\n\n### استلام البيانات الخام\nعند وصول الملف اعمله جرداً **قبل** التحليل: كم صفاً وعموداً؟ ماذا يعني كل عمود؟ أي فترة يغطي؟ أين الفجوات الواضحة؟ واصنع **نسخة عمل** — فالملف الأصلي لا يُعدَّل أبداً.\n\n> TIP: خمس دقائق من الأسئلة توفر خمسة أيام من تحليل خاطئ. "مقارنة بماذا؟" هي أقوى سؤال في يد المحلل.',
          },
          terms: [
            { en: 'Business Requirement', ar: 'متطلب الأعمال', def: { en: 'The precise question the analysis must answer.', ar: 'السؤال الدقيق الذي يجب أن يجيب عنه التحليل.' } },
            { en: 'Baseline', ar: 'خط الأساس', def: { en: 'The reference period/value you compare against.', ar: 'الفترة أو القيمة المرجعية التي تقارن بها.' } },
            { en: 'Scope', ar: 'النطاق', def: { en: 'The boundaries: period, regions, products included.', ar: 'الحدود: الفترة والمناطق والمنتجات المشمولة.' } },
          ],
          examples: [
            {
              title: { en: 'A vague request made precise', ar: 'طلب غامض صار دقيقاً' },
              body: {
                en: '"Sales are down" → "Compare total sales for February 2025 against January 2025 and February 2024, split by region and product category, and list the top 5 declining products." Now the analysis has a shape.',
                ar: '"المبيعات هابطة" ← "قارن إجمالي مبيعات فبراير 2025 مع يناير 2025 وفبراير 2024، مفصلةً حسب المنطقة وفئة المنتج، واذكر أعلى 5 منتجات متراجعة." الآن للتحليل شكل واضح.',
              },
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Rewrite "report on our customers" into a precise analysis question including a period and a metric. Type any answer that contains a period (like 2025) and a metric (like sales or orders).',
              ar: 'أعد صياغة "تقرير عن عملائنا" إلى سؤال تحليلي دقيق يتضمن فترة ومقياساً. اكتب أي إجابة تحتوي فترة (مثل 2025) ومقياساً (مثل المبيعات أو الطلبات).',
            },
            accept: ['2025', 'sales', 'orders', 'customers', 'مبيعات', 'طلبات', 'عملاء'],
            solution: {
              en: 'Example: "How many active customers did we gain and lose in the first quarter of 2025, measured by monthly orders?"',
              ar: 'مثال: "كم عميلاً نشطاً كسبنا وخسرنا في الربع الأول من 2025، مقاساً بالطلبات الشهرية؟"',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'The most important clarifying question before starting analysis is…', ar: 'أهم سؤال توضيحي قبل بدء التحليل هو…' },
              options: [
                { en: 'Compared to what (baseline and period)?', ar: 'مقارنة بماذا (الأساس والفترة)؟' },
                { en: 'Which font should the report use?', ar: 'أي خط يستخدمه التقرير؟' },
                { en: 'Can I do this in Excel?', ar: 'هل يمكن ذلك في Excel؟' },
                { en: 'Who typed the data?', ar: 'من كتب البيانات؟' },
              ],
              answer: 0,
              explain: { en: 'Without a baseline, "up" and "down" are meaningless.', ar: 'دون أساس مقارنة تصبح "الزيادة" و"الهبوط" بلا معنى.' },
            },
            {
              type: 'tf',
              q: { en: 'You should analyze directly in the original file the manager sent.', ar: 'يجب التحليل مباشرة في الملف الأصلي الذي أرسله المدير.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — always work on a copy; the original is the evidence.', ar: 'خطأ — اعمل دائماً على نسخة؛ فالأصل هو الدليل.' },
            },
            {
              type: 'fill',
              q: { en: 'The reference period you compare against is called the ______.', ar: 'الفترة المرجعية التي تقارن بها تسمى ______.', },
              accept: ['baseline', 'خط الأساس'],
              explain: { en: 'Baseline.', ar: 'خط الأساس (Baseline).' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L10M1L2',
          title: { en: 'Organizing, Cleaning and Validating the Dataset', ar: 'تنظيم وتنظيف والتحقق من مجموعة البيانات' },
          minutes: 12,
          description: {
            en: 'Rehearse the full preparation stage: organize columns, run the cleaning pipeline, validate the result.',
            ar: 'تدرب على مرحلة التحضير الكاملة: تنظيم الأعمدة، وتشغيل خط التنظيف، والتحقق من الناتج.',
          },
          objectives: [
            { en: 'Structure a raw file into tidy columns', ar: 'هيكلة ملف خام إلى أعمدة مرتبة' },
            { en: 'Run the standard cleaning pipeline', ar: 'تشغيل خط التنظيف القياسي' },
            { en: 'Validate before analysis starts', ar: 'التحقق قبل بدء التحليل' },
          ],
          body: {
            en: '### Organizing\nGive every column: a clear name (Amount_SAR not Column4), one data type, one meaning. Split combined fields ("Riyadh-0501234567") into separate columns. One record per row, one attribute per column — the tidy data rule from Level 3.\n\n### The cleaning pipeline (in order)\n1. Remove exact duplicate rows.\n2. Fix types: text numbers → real numbers; text dates → real dates.\n3. Trim whitespace and standardize case.\n4. Handle missing values deliberately (fill or remove — never zero-blind).\n5. Range-check numeric columns (no negative ages, no impossible prices).\n\n### Validation before analysis\nCount rows before and after cleaning and keep the difference explained ("removed 12 duplicates, dropped 3 rows with missing city"). Verify totals: the sum of cleaned amounts must equal the sum of valid original amounts. If they differ beyond rounding, you lost data somewhere.\n\n> TIP: Document every cleaning decision in a log column or a notes sheet — auditors, managers and future-you will all ask.',
          ar: '### التنظيم\nأعطِ كل عمود: اسماً واضحاً (Amount_SAR لا Column4)، ونوع بيانات واحداً، ومعنى واحداً. قسّم الحقول المدمجة ("الرياض-0501234567") إلى أعمدة منفصلة. سجل واحد لكل صف وصفة واحدة لكل عمود — قاعدة البيانات المرتبة من المستوى الثالث.\n\n### خط التنظيف (بالترتيب)\n1. إزالة الصفوف المكررة تماماً.\n2. إصلاح الأنواع: أرقام نصية ← أرقام حقيقية؛ وتواريخ نصية ← تواريخ حقيقية.\n3. إزالة المسافات الزائدة وتوحيد حالة الأحرف.\n4. التعامل المتعمد مع القيم الناقصة (تعبئة أو حذف — لا صفر أعمى أبداً).\n5. فحص نطاق الأعمدة الرقمية (لا أعمار سالبة ولا أسعار مستحيلة).\n\n### التحقق قبل التحليل\nعدّ الصفوف قبل التنظيف وبعده واحتفظ بتفسير الفرق ("أزلنا 12 تكراراً، وحذفنا 3 صفوف بمدينة ناقصة"). تحقق من الإجماليات: مجموع المبالغ النظيفة يجب أن يساوي مجموع المبالغ الأصلية الصالحة. فإن اختلفا أكثر من التقريب فقدت بيانات في مكان ما.\n\n> TIP: وثّق كل قرار تنظيف في عمود سجل أو ورقة ملاحظات — سيسأل المدققون والمديرون وأنت في المستقبل.',
          },
          terms: [
            { en: 'Tidy Data', ar: 'البيانات المرتبة', def: { en: 'One row per record, one column per attribute.', ar: 'صف لكل سجل وعمود لكل صفة.' } },
            { en: 'Cleaning Log', ar: 'سجل التنظيف', def: { en: 'A documented list of every change made to the data.', ar: 'قائمة موثقة بكل تغيير أُجري على البيانات.' } },
            { en: 'Reconciliation', ar: 'المطابقة المالية', def: { en: 'Proving totals before and after processing still agree.', ar: 'إثبات تطابق الإجماليات قبل المعالجة وبعدها.' } },
          ],
          examples: [
            {
              title: { en: 'Reconciliation catching a loss', ar: 'المطابقة تكشف فقداً' },
              body: {
                en: 'Original valid total: 412,800 SAR. After cleaning: 401,300 SAR. Missing 11,500 SAR → one deleted row actually held a valid 11,500 order. Restored. Reconciliation saved a real order from silent deletion.',
                ar: 'الإجمالي الصالح الأصلي: 412,800 ريال. بعد التنظيف: 401,300 ريال. الفاقد 11,500 ريال ← صف محذوف كان يحمل فعلاً طلباً صالحاً بقيمة 11,500. استُعيد. المطابقة أنقذت طلباً حقيقياً من حذف صامت.',
              },
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Name the FIRST step of the standard cleaning pipeline (lowercase, starts with remove).',
              ar: 'سمّ الخطوة الأولى من خط التنظيف القياسي (أحرف صغيرة وتبدأ بـ remove).',
            },
            accept: ['remove duplicates', 'remove duplicate rows'],
            solution: { en: 'Remove duplicates — deduplication first prevents double-counting everywhere later.', ar: 'إزالة التكرار — فالبدء بها يمنع العد المزدوج في كل ما بعده.' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Cleaned total is 12,000 SAR lower than the original valid total. What does that mean?', ar: 'الإجمالي بعد التنظيف أقل بـ12,000 ريال من الإجمالي الأصلي الصالح. ماذا يعني ذلك؟' },
              options: [
                { en: 'Rows carrying valid data were likely deleted by mistake', ar: 'احتمال حذف صفوف كانت تحمل بيانات صالحة بالخطأ' },
                { en: 'The cleaning worked perfectly', ar: 'أن التنظيف نجح تماماً' },
                { en: 'Normal rounding noise', ar: 'ضوضاء تقريب عادية' },
                { en: 'Excel is broken', ar: 'أن Excel معطوب' },
              ],
              answer: 0,
              explain: { en: 'Cleaning may only remove INVALID data; a big drop means valid rows were lost.', ar: 'التنظيف يزيل غير الصالح فقط؛ والانخفاض الكبير يعني فقد صفوف صالحة.' },
            },
            {
              type: 'tf',
              q: { en: 'Filling all missing values with zero is a safe default strategy.', ar: 'تعبئة كل القيم الناقصة بصفر استراتيجية افتراضية آمنة.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — zero distorts averages and totals; missing must be handled deliberately.', ar: 'خطأ — الصفر يشوه المتوسطات والإجماليات؛ والناقص يحتاج قراراً متعمداً.' },
            },
            {
              type: 'fill',
              q: { en: 'One row per record and one column per attribute is called ______ data.', ar: 'صف لكل سجل وعمود لكل صفة يسمى بيانات ______.', },
              accept: ['tidy', 'مرتبة'],
              explain: { en: 'Tidy data.', ar: 'البيانات المرتبة (Tidy Data).' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L10M1L3',
          title: { en: 'Analysis, KPIs and Trend Identification', ar: 'التحليل ومؤشرات الأداء وتحديد الاتجاهات' },
          minutes: 12,
          description: {
            en: 'Compute the KPIs that matter and read the direction of your numbers over time.',
            ar: 'احسب المؤشرات المهمة واقرأ اتجاه أرقامك عبر الزمن.',
          },
          objectives: [
            { en: 'Calculate the core business KPIs', ar: 'حساب مؤشرات الأعمال الأساسية' },
            { en: 'Identify trends and turning points', ar: 'تحديد الاتجاهات ونقاط التحول' },
            { en: 'Separate signal from seasonal noise', ar: 'التمييز بين الإشارة والضوضاء الموسمية' },
          ],
          body: {
            en: '### Core KPIs\n- **Total revenue** and its growth rate vs the baseline period.\n- **Average order value (AOV)** = revenue ÷ orders.\n- **Conversion proxies**: delivered ÷ ordered, paid ÷ invoiced.\n- **Error rate** for operations: bad records ÷ total records.\n\n### Reading trends\nPlot monthly values and describe them in words FIRST: "rising steadily since June", "stable with one spike in Ramadan", "declining for 3 consecutive months". Three months in the same direction is a trend; one month is an event.\n\n### Seasonality\nRetail spikes in Ramadan and before Eid; office demand drops in summer. Compare month-to-month WITHIN the same season, or year-over-year (March 2025 vs March 2024), before declaring growth or decline.\n\n> TIP: Every KPI needs three things: a definition, a period, and a comparison. "AOV 1,450 SAR in Q1 2025, up 8% vs Q1 2024" is analysis. "AOV 1,450" alone is trivia.',
          ar: '### المؤشرات الأساسية\n- **الإيراد الإجمالي** ومعدل نموه مقابل فترة الأساس.\n- **متوسط قيمة الطلب (AOV)** = الإيراد ÷ الطلبات.\n- **نسب الإنجاز**: المُسلَّم ÷ المطلوب، والمحصَّل ÷ المفوتر.\n- **معدل الخطأ** للعمليات: السجلات السيئة ÷ الإجمالي.\n\n### قراءة الاتجاهات\nارسم القيم الشهرية ووصفها بالكلمات **أولاً**: "صعود مستمر منذ يونيو"، "استقرار مع قمة واحدة في رمضان"، "هبوط 3 أشهر متتالية". ثلاثة أشهر في الاتجاه نفسه اتجاه؛ وشهر واحد حادثة.\n\n### الموسمية\nقفز التجزئة في رمضان وقبل العيد؛ وانخفاض الطلب المكتبي في الصيف. قارن شهراً بشهر **داخل الموسم نفسه**، أو سنة بسنة (مارس 2025 مقابل مارس 2024)، قبل الحكم بالنمو أو الانخفاض.\n\n> TIP: كل مؤشر يحتاج ثلاثة أشياء: تعريفاً وفترة ومقارنة. "متوسط الطلب 1,450 ريال في الربع الأول 2025 بارتفاع 8% مقابل الربع الأول 2024" هذا تحليل. أما "متوسط الطلب 1,450" وحده فهو معلومة عابرة.',
          },
          terms: [
            { en: 'KPI', ar: 'مؤشر الأداء الرئيسي', def: { en: 'A metric chosen because it answers a key business question.', ar: 'مقياس مختار لأنه يجيب سؤالاً أعمالياً رئيسياً.' } },
            { en: 'Trend', ar: 'الاتجاه', def: { en: 'Sustained direction of movement over multiple periods.', ar: 'اتجاه حركة مستمر عبر فترات متعددة.' } },
            { en: 'Seasonality', ar: 'الموسمية', def: { en: 'Regular, predictable patterns tied to seasons or events.', ar: 'أنماط منتظمة متوقعة مرتبطة بالمواسم أو الأحداث.' } },
          ],
          examples: [
            {
              title: { en: 'Event or trend?', ar: 'حادثة أم اتجاه؟' },
              body: {
                en: 'March sales fell 40%. Panic? No — the trend shows February was an unusual corporate bulk order. March actually matches the 6-month average. Reading the trend prevented a wrong "sales crisis" conclusion.',
                ar: 'هبطت مبيعات مارس 40%. هل هو انهيار؟ لا — يظهر الاتجاه أن فبراير كان طلباً شركياً بالجملة غير معتاد. ومارس فعلياً يطابق متوسط 6 أشهر. قراءة الاتجاه منعت استنتاج "أزمة مبيعات" خاطئاً.',
              },
            },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'Revenue Q1 2024 = 850,000 SAR; Q1 2025 = 918,000 SAR. What is the growth rate in % (one decimal)?',
              ar: 'إيراد الربع الأول 2024 = 850,000 ريال؛ والربع الأول 2025 = 918,000 ريال. ما معدل النمو بالنسبة المئوية (منزلة عشرية)؟',
            },
            accept: ['8'],
            tolerance: 0.15,
            solution: { en: '(918,000 − 850,000) ÷ 850,000 × 100 = 8.0%.', ar: '(918,000 − 850,000) ÷ 850,000 × 100 = 8.0%.' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'AOV = 145,000 ÷ 100 orders equals…', ar: 'متوسط قيمة الطلب = 145,000 ÷ 100 طلب يساوي…' },
              options: [ { en: '1,450 SAR', ar: '1,450 ريال' }, { en: '14,500 SAR', ar: '14,500 ريال' }, { en: '145 SAR', ar: '145 ريال' }, { en: '100 SAR', ar: '100 ريال' } ],
              answer: 0,
              explain: { en: 'Revenue ÷ orders = 1,450 SAR.', ar: 'الإيراد ÷ الطلبات = 1,450 ريال.' },
            },
            {
              type: 'mcq',
              q: { en: 'One month spike after which values return to normal is…', ar: 'قمة شهر واحد تعود بعدها القيم لطبيعتها هي…' },
              options: [ { en: 'An event, not a trend', ar: 'حادثة لا اتجاه' }, { en: 'A permanent trend', ar: 'اتجاه دائم' }, { en: 'A data error', ar: 'خطأ بيانات' }, { en: 'A KPI', ar: 'مؤشر أداء' } ],
              answer: 0,
              explain: { en: 'Trends need sustained direction across periods; single spikes are events.', ar: 'الاتجاهات تحتاج استمرارية عبر الفترات؛ والقمم المنفردة حوادث.' },
            },
            {
              type: 'fill',
              q: { en: 'Comparing March 2025 with March 2024 is a ______-over-______ comparison.', ar: 'مقارنة مارس 2025 بمارس 2024 هي مقارنة ______ بـ ______.', },
              accept: ['year over year', 'year-over-year', 'year', 'سنة بسنة'],
              explain: { en: 'Year-over-year — the fair comparison across seasons.', ar: 'سنة بسنة (Year-over-Year) — المقارنة العادلة عبر المواسم.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L10M1L4',
          title: { en: 'Reports, Dashboards and Communicating Insights', ar: 'التقارير ولوحات المعلومات وتوصيل الرؤى' },
          minutes: 12,
          description: {
            en: 'Finish the workflow: build the deliverable and write recommendations a manager can act on.',
            ar: 'أنهِ سير العمل: ابنِ المخرج واكتب توصيات يستطيع المدير التصرف بناءً عليها.',
          },
          objectives: [
            { en: 'Structure a one-page analytical report', ar: 'هيكلة تقرير تحليلي من صفحة واحدة' },
            { en: 'Turn findings into recommendations', ar: 'تحويل النتائج إلى توصيات' },
            { en: 'Communicate with numbers plus plain language', ar: 'التواصل بالأرقام واللغة الواضحة معاً' },
          ],
          body: {
            en: '### The one-page report structure\n1. **Headline** — the answer in one sentence: "Q1 revenue grew 8% driven by Riyadh laptops."\n2. **KPI row** — 3–5 numbers with their comparison.\n3. **Two charts maximum** — trend + comparison.\n4. **Findings** — 3 bullets with evidence.\n5. **Recommendations** — 2–3 actions, each tied to a finding.\n6. **Method notes** — period, sources, cleaning decisions.\n\n### From finding to recommendation\nA finding is information: "Jeddah average order value is 2.3× Riyadh\u0027s." A recommendation is a decision: "Pilot a premium bundle in Jeddah next quarter and measure AOV impact." Every recommendation must connect to a finding, or it is just an opinion.\n\n### Communicating\nLead with the answer, not the process. Use plain language with precise numbers: "Revenue up 8%, driven by 12 new corporate customers in Riyadh" — not "various positive trends were observed in the data".\n\n> TIP: Test: if your recommendation was deleted, would the report still change decisions? If not, make it concrete or remove it.',
          ar: '### هيكل تقرير الصفحة الواحدة\n1. **العنوان الرئيسي** — الإجابة في جملة: "نما إيراد الربع الأول 8% بقيادة أجهزة اللابتوب في الرياض."\n2. **صف المؤشرات** — 3–5 أرقام مع مقارنتها.\n3. **رسمان كحد أقصى** — اتجاه ومقارنة.\n4. **النتائج** — 3 نقاط مدعومة بالأدلة.\n5. **التوصيات** — 2–3 إجراءات، كل واحدة مربوطة بنتيجة.\n6. **ملاحظات المنهج** — الفترة والمصادر وقرارات التنظيف.\n\n### من نتيجة إلى توصية\nالنتيجة معلومة: "متوسط قيمة الطلب في جدة يعادل 2.3 ضعف الرياض". والتوصية قرار: "جرّب حزمة متميزة في جدة الربع القادم وقس أثرها على المتوسط". كل توصية يجب أن ترتبط بنتيجة، وإلا فهي رأي فقط.\n\n### التواصل\nابدأ بالإجابة لا بالعملية. استخدم لغة واضحة بأرقام دقيقة: "ارتفع الإيراد 8% بقيادة 12 عميلاً شركياً جديداً في الرياض" — لا "لوحظت اتجاهات إيجابية متعددة في البيانات".\n\n> TIP: اختبار: لو حذفت توصيتك، هل يبقى التقرير قادراً على تغيير القرارات؟ إن لا فاجعلها ملموسة أو احذفها.',
          },
          terms: [
            { en: 'Finding', ar: 'النتيجة', def: { en: 'A fact extracted from the analysis, with evidence.', ar: 'حقيقة مستخرجة من التحليل مدعومة بدليل.' } },
            { en: 'Recommendation', ar: 'التوصية', def: { en: 'A suggested action tied to a finding.', ar: 'إجراء مقترح مرتبط بنتيجة.' } },
            { en: 'Executive Summary', ar: 'الملخص التنفيذي', def: { en: 'The one-paragraph answer at the top of a report.', ar: 'إجابة الفقرة الواحدة أعلى التقرير.' } },
          ],
          examples: [
            {
              title: { en: 'Weak vs strong recommendation', ar: 'توصية ضعيفة مقابل قوية' },
              body: {
                en: 'Weak: "Improve marketing." Strong: "Reallocate 20% of the Dammam ad budget to Jeddah for Q2 — Jeddah\u0027s AOV is 2.3× Dammam\u0027s with equal spend."',
                ar: 'ضعيفة: "تحسين التسويق". قوية: "حوّل 20% من ميزانية إعلانات الدمام إلى جدة في الربع الثاني — متوسط الطلب في جدة يعادل 2.3 ضعف الدمام بنفس الإنفاق".',
              },
            },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'Draft a 5-line mini report for any dataset you know: headline, 2 KPIs, 1 finding, 1 recommendation.',
              ar: 'اكتب تقريراً مصغراً من 5 أسطر لأي بيانات تعرفها: عنوان، ومؤشران، ونتيجة، وتوصية.',
            },
            confirm: [
              { en: 'I wrote a one-sentence headline with the answer', ar: 'كتبت عنواناً من جملة واحدة يحمل الإجابة' },
              { en: 'My finding has a number in it', ar: 'نتيجتي تحتوي رقماً' },
              { en: 'My recommendation is tied to the finding', ar: 'توصيتي مرتبطة بالنتيجة' },
            ],
            solution: {
              en: 'Example: "Q1 revenue grew 8% to 918,000 SAR. KPIs: AOV 1,450 (+8%); orders 633 (+15%). Finding: growth comes from new corporate accounts. Recommendation: assign one account manager to corporate clients in Riyadh."',
              ar: 'مثال: "نما إيراد الربع الأول 8% ليصل 918,000 ريال. المؤشرات: متوسط الطلب 1,450 (+8%)؛ الطلبات 633 (+15%). النتيجة: النمو من حسابات شركات جديدة. التوصية: تكليف مدير حساب واحد لعملاء الشركات في الرياض."',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Where does the final answer go in a report?', ar: 'أين توضع الإجابة النهائية في التقرير؟' },
              options: [
                { en: 'At the top, in the headline', ar: 'في الأعلى ضمن العنوان الرئيسي' },
                { en: 'On the last page', ar: 'في الصفحة الأخيرة' },
                { en: 'In an appendix only', ar: 'في ملحق فقط' },
                { en: 'Nowhere, readers find it', ar: 'لا مكان، والقارئ يكتشفها' },
              ],
              answer: 0,
              explain: { en: 'Answer-first structure respects busy readers.', ar: 'هيكل "الإجابة أولاً" يحترم قراءاً مشغولين.' },
            },
            {
              type: 'mcq',
              q: { en: 'Which is a proper recommendation?', ar: 'أيها توصية سليمة؟' },
              options: [
                { en: 'Pilot premium bundles in Jeddah and measure AOV impact next quarter', ar: 'تجربة حزم متميزة في جدة وقياس الأثر على متوسط الطلب الربع القادم' },
                { en: 'Sales should improve', ar: 'ينبغي تحسين المبيعات' },
                { en: 'The data looks fine', ar: 'البيانات تبدو سليمة' },
                { en: 'Consider possibly maybe doing something about trends', ar: 'النظر ربما في فعل شيء حول الاتجاهات' },
              ],
              answer: 0,
              explain: { en: 'Concrete action + measurable effect + timeframe.', ar: 'إجراء ملموس + أثر قابل للقياس + إطار زمني.' },
            },
            {
              type: 'tf',
              q: { en: 'A recommendation must be connected to a finding backed by evidence.', ar: 'يجب أن ترتبط التوصية بنتيجة مدعومة بدليل.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: 'True — otherwise it is opinion, not analysis.', ar: 'صح — وإلا فهي رأي لا تحليل.' },
            },
          ],
          xp: 25,
        },
      ],
    },
  ],
  finalExam: {
    questions: [
      {
        type: 'mcq',
        q: { en: 'A manager asks "sales are down". Your first action is…', ar: 'يطلب مدير "المبيعات هابطة". أول إجراء لك هو…' },
        options: [ { en: 'Clarify period, scope and baseline', ar: 'توضيح الفترة والنطاق والأساس' }, { en: 'Open the data and start charting', ar: 'فتح البيانات والبدء بالرسم' }, { en: 'Blame the marketing team', ar: 'اتهام فريق التسويق' }, { en: 'Wait for better data', ar: 'انتظار بيانات أفضل' } ],
        answer: 0,
        explain: { en: 'Requirements first — analysis without a baseline is guesswork.', ar: 'المتطلبات أولاً — فالتحليل بلا أساس تخمين.' },
      },
      {
        type: 'mcq',
        q: { en: 'Which sequence is the correct analyst workflow?', ar: 'أي تسلسل يمثل سير عمل المحلل الصحيح؟' },
        options: [
          { en: 'Requirements → clean → analyze → KPIs → insights', ar: 'المتطلبات ← التنظيف ← التحليل ← المؤشرات ← الرؤى' },
          { en: 'Charting → cleaning → requirements', ar: 'الرسم ← التنظيف ← المتطلبات' },
          { en: 'Cleaning → requirements → charts → delete', ar: 'التنظيف ← المتطلبات ← الرسم ← الحذف' },
          { en: 'KPIs → raw data → requirements', ar: 'المؤشرات ← البيانات الخام ← المتطلبات' },
        ],
        answer: 0,
        explain: { en: 'Understand, prepare, analyze, measure, conclude.', ar: 'افهم، جهّز، حلّل، قِس، استنتج.' },
      },
      {
        type: 'num',
        q: { en: 'Revenue fell from 250,000 to 220,000 SAR. Reduction rate (%, 1 decimal)?', ar: 'انخفض الإيراد من 250,000 إلى 220,000 ريال. معدل الانخفاض (%، منزلة عشرية)؟' },
        answer: 12,
        tolerance: 0.15,
        explain: { en: '(250,000−220,000)/250,000 × 100 = 12%.', ar: '(250,000−220,000)/250,000 × 100 = 12%.' },
      },
      {
        type: 'mcq',
        q: { en: 'Which check proves cleaning did not destroy valid data?', ar: 'أي فحص يثبت أن التنظيف لم يدمر بيانات صالحة؟' },
        options: [ { en: 'Reconciling totals before vs after cleaning', ar: 'مطابقة الإجماليات قبل التنظيف وبعده' }, { en: 'Changing the file name', ar: 'تغيير اسم الملف' }, { en: 'Adding more columns', ar: 'إضافة أعمدة أكثر' }, { en: 'Formatting cells nicely', ar: 'تنسيق الخلايا بشكل جميل' } ],
        answer: 0,
        explain: { en: 'Reconciliation: valid total must survive cleaning.', ar: 'المطابقة: الإجمالي الصالح يجب أن ينجو من التنظيف.' },
      },
      {
        type: 'tf',
        q: { en: 'Three consecutive monthly declines indicate a trend worth reporting.', ar: 'ثلاثة هبوطات شهرية متتالية تشير إلى اتجاه يستحق الإبلاغ.' },
        options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
        answer: 0,
        explain: { en: 'True — sustained direction across periods is a trend.', ar: 'صح — الاتجاه المستمر عبر الفترات اتجاه.' },
      },
      {
        type: 'mcq',
        q: { en: 'The fair comparison for March 2025 performance is…', ar: 'المقارنة العادلة لأداء مارس 2025 هي…' },
        options: [ { en: 'March 2024 (year-over-year)', ar: 'مارس 2024 (سنة بسنة)' }, { en: 'Random month', ar: 'شهر عشوائي' }, { en: 'The best month ever', ar: 'أفضل شهر على الإطلاق' }, { en: 'No comparison', ar: 'لا مقارنة' } ],
        answer: 0,
        explain: { en: 'Same month, previous year — controls for seasonality.', ar: 'نفس الشهر في العام السابق — يضبط الموسمية.' },
      },
      {
        type: 'mcq',
        q: { en: 'Which is a KPI with proper structure?', ar: 'أيها مؤشر ببنية سليمة؟' },
        options: [
          { en: 'AOV 1,450 SAR in Q1 2025, +8% vs Q1 2024', ar: 'متوسط الطلب 1,450 ريال في الربع الأول 2025، +8% مقابل الربع الأول 2024' },
          { en: 'AOV 1,450', ar: 'متوسط الطلب 1,450' },
          { en: 'Sales are good', ar: 'المبيعات جيدة' },
          { en: 'Lots of orders happened', ar: 'حدثت طلبات كثيرة' },
        ],
        answer: 0,
        explain: { en: 'Definition + period + comparison = analysis-grade KPI.', ar: 'تعريف + فترة + مقارنة = مؤشر بمستوى تحليلي.' },
      },
      {
        type: 'mcq',
        q: { en: 'A dashboard should open with…', ar: 'يجب أن تبدأ لوحة المعلومات بـ…' },
        options: [ { en: 'Headline KPIs answering the main question', ar: 'مؤشرات رئيسية تجيب السؤال الأساسي' }, { en: 'The full raw data table', ar: 'جدول البيانات الخام كاملاً' }, { en: 'A photo of the CEO', ar: 'صورة المدير التنفيذي' }, { en: '20 charts at once', ar: '20 رسماً دفعة واحدة' } ],
        answer: 0,
        explain: { en: 'Answer first, then support.', ar: 'الإجابة أولاً ثم السند.' },
      },
      {
        type: 'fill',
        q: { en: 'Revenue ÷ number of orders is called ______ order value.', ar: 'الإيراد ÷ عدد الطلبات يسمى ______ قيمة الطلب.', },
        accept: ['average', 'متوسط'],
        explain: { en: 'Average order value (AOV).', ar: 'متوسط قيمة الطلب (AOV).' },
      },
      {
        type: 'mcq',
        q: { en: 'Which recommendation is professional?', ar: 'أي توصية تعتبر مهنية؟' },
        options: [
          { en: 'Shift 20% of Dammam budget to Jeddah in Q2 and measure AOV change', ar: 'تحويل 20% من ميزانية الدمام إلى جدة في الربع الثاني وقياس تغير المتوسط' },
          { en: 'Do more marketing', ar: 'المزيد من التسويق' },
          { en: 'Maybe trends should be considered', ar: 'ربما يجب النظر في الاتجاهات' },
          { en: 'The team should work harder', ar: 'يجب أن يعمل الفريق بجهد أكبر' },
        ],
        answer: 0,
        explain: { en: 'Specific action, measurable target, timeframe.', ar: 'إجراء محدد وهدف قابل للقياس وإطار زمني.' },
      },
      {
        type: 'num',
        q: { en: 'Orders: 633 this quarter vs 550 last quarter. Growth rate (% , 1 decimal)?', ar: 'الطلبات: 633 هذا الربع مقابل 550 الربع الماضي. معدل النمو (%، منزلة عشرية)؟' },
        answer: 15.1,
        tolerance: 0.2,
        explain: { en: '(633−550)/550 × 100 ≈ 15.1%.', ar: '(633−550)/550 × 100 ≈ 15.1%.' },
      },
      {
        type: 'tf',
        q: { en: 'Working on a copy and preserving the original file is standard practice.', ar: 'العمل على نسخة والحفاظ على الملف الأصلي ممارسة قياسية.' },
        options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
        answer: 0,
        explain: { en: 'True — the original is your evidence and rollback.', ar: 'صح — فالأصل هو دليلك وخطتك للتراجع.' },
      },
      {
        type: 'mcq',
        q: { en: 'First step when receiving a raw dataset?', ar: 'أول خطوة عند استلام مجموعة بيانات خام؟' },
        options: [ { en: 'Inventory: rows, columns, meanings, gaps', ar: 'جرد: الصفوف والأعمدة والمعاني والفجوات' }, { en: 'Build the dashboard', ar: 'بناء لوحة المعلومات' }, { en: 'Send it to the manager', ar: 'إرسالها للمدير' }, { en: 'Delete nulls immediately', ar: 'حذف الفارغ فوراً' } ],
        answer: 0,
        explain: { en: 'Know what you received before touching it.', ar: 'اعرف ما استلمته قبل لمسه.' },
      },
      {
        type: 'mcq',
        q: { en: '"AOV is 2.3× higher in Jeddah" is a…', ar: '"متوسط الطلب أعلى 2.3 ضعف في جدة" هي…' },
        options: [ { en: 'Finding', ar: 'نتيجة' }, { en: 'Recommendation', ar: 'توصية' }, { en: 'KPI', ar: 'مؤشر' }, { en: 'Baseline', ar: 'أساس' } ],
        answer: 0,
        explain: { en: 'It is evidence extracted from the analysis — a finding. The pilot plan would be the recommendation.', ar: 'إنها نتيجة (Finding) مستخرجة من التحليل. أما خطة التجربة فهي التوصية.' },
      },
      {
        type: 'fill',
        q: { en: 'The one-sentence answer at the top of a report is the ______ summary.', ar: 'إجابة الجملة الواحدة أعلى التقرير هي الملخص ______.', },
        accept: ['executive', 'التنفيذي'],
        explain: { en: 'Executive summary.', ar: 'الملخص التنفيذي (Executive Summary).' },
      },
      {
        type: 'mcq',
        q: { en: 'Best way to handle seasonality in monthly comparisons?', ar: 'أفضل طريقة للتعامل مع الموسمية في المقارنات الشهرية؟' },
        options: [ { en: 'Compare same month across years', ar: 'مقارنة الشهر نفسه عبر السنوات' }, { en: 'Ignore all comparisons', ar: 'تجاهل كل المقارنات' }, { en: 'Compare summer to Ramadan', ar: 'مقارنة الصيف برمضان' }, { en: 'Delete peak months', ar: 'حذف أشهر القمم' } ],
        answer: 0,
        explain: { en: 'Year-over-year comparison neutralizes seasonality.', ar: 'مقارنة سنة بسنة تعادل أثر الموسمية.' },
      },
      {
        type: 'num',
        q: { en: 'Revenue 918,000 SAR from 633 orders. AOV to the nearest whole SAR?', ar: 'إيراد 918,000 ريال من 633 طلباً. متوسط قيمة الطلب لأقرب ريال؟' },
        answer: 1450,
        tolerance: 1,
        explain: { en: '918,000 ÷ 633 ≈ 1,450 SAR.', ar: '‏918,000 ÷ 633 ≈ 1,450 ريال.' },
      },
      {
        type: 'mcq',
        q: { en: 'Which belongs in the method notes section?', ar: 'أي مما يلي يوضع في قسم ملاحظات المنهج؟' },
        options: [ { en: 'Period, sources and cleaning decisions', ar: 'الفترة والمصادر وقرارات التنظيف' }, { en: 'Your personal opinions about the team', ar: 'آراؤك الشخصية عن الفريق' }, { en: 'The company logo', ar: 'شعار الشركة' }, { en: 'Nothing, notes are optional', ar: 'لا شيء، فالملاحظات اختيارية' } ],
        answer: 0,
        explain: { en: 'Method notes make the analysis auditable.', ar: 'ملاحظات المنهج تجعل التحليل قابلاً للتدقيق.' },
      },
      {
        type: 'tf',
        q: { en: 'A single-month spike should immediately be reported as a crisis.', ar: 'قمة شهر واحد يجب الإبلاغ عنها فوراً كأزمة.' },
        options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
        answer: 1,
        explain: { en: 'False — check trend context first; spikes are often events (bulk orders, seasons).', ar: 'خطأ — افحص سياق الاتجاه أولاً؛ فالقمم غالباً أحداث (طلبات جملة، مواسم).' },
      },
      {
        type: 'mcq',
        q: { en: 'The final deliverable of the analyst workflow is…', ar: 'المخرج النهائي لسير عمل المحلل هو…' },
        options: [ { en: 'Insights and recommendations a manager can act on', ar: 'رؤى وتوصيات يستطيع المدير التصرف بها' }, { en: 'A cleaned file with no conclusions', ar: 'ملف نظيف بلا استنتاجات' }, { en: 'A bigger dataset', ar: 'مجموعة بيانات أكبر' }, { en: 'A list of formulas', ar: 'قائمة صيغ' } ],
        answer: 0,
        explain: { en: 'The workflow exists to produce decisions, not just files.', ar: 'سير العمل موجود لإنتاج قرارات لا ملفات فقط.' },
      },
    ],
  },
};

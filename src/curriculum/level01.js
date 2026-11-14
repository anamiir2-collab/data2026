// Level 1 — Data Entry Specialist
export default {
  id: 'L1',
  num: 1,
  name: { en: 'Data Entry Specialist', ar: 'أخصائي إدخال البيانات' },
  goal: {
    en: 'Develop the professional data entry skills that companies actually hire for: accuracy, quality control, tools, organization and workplace discipline.',
    ar: 'تطوير مهارات إدخال البيانات المهنية التي تبحث عنها الشركات فعلاً: الدقة، وضبط الجودة، والأدوات، والتنظيم، والانضباط المهني.',
  },
  icon: '⌨️',
  modules: [
    {
      id: 'L1M1',
      name: { en: 'Introduction to Data Entry', ar: 'مقدمة في إدخال البيانات' },
      lessons: [
        {
          id: 'L1M1L1',
          title: { en: 'What Is Data Entry?', ar: 'ما هو إدخال البيانات؟' },
          minutes: 10,
          description: {
            en: 'Understand what data entry work really is, what a Data Entry Specialist does all day, and why this role is the first step of your data career.',
            ar: 'افهم ما هو عمل إدخال البيانات فعلاً، وماذا يفعل أخصائي إدخال البيانات يومياً، ولماذا هذه الوظيفة هي الخطوة الأولى في مسارك المهني مع البيانات.',
          },
          objectives: [
            { en: 'Define data entry and explain its role inside a company', ar: 'تعريف إدخال البيانات وشرح دوره داخل الشركة' },
            { en: 'List the core responsibilities of a Data Entry Specialist', ar: 'سرد المسؤوليات الأساسية لأخصائي إدخال البيانات' },
            { en: 'Explain how data entry connects to analysis roles', ar: 'شرح ارتباط إدخال البيانات بوظائف التحليل' },
          ],
          body: {
            en: 'Data entry is the process of taking information — from paper documents, forms, emails, invoices or voice notes — and recording it accurately into a computer system so the business can use it. The system might be Excel, an online form, a company database, or a business management platform.\n\n### Why it matters\nEvery report, dashboard and business decision starts with data that someone had to enter. If the entry is wrong, everything built on top of it is wrong. This is why companies care so much about **accuracy**: an invoice entered as 2,850 SAR instead of 2,580 SAR silently changes revenue reports, customer balances and VAT filing.\n\n### What a Data Entry Specialist does\nA typical day includes:\n- **Transcribing** information from source documents into the target system.\n- **Verifying** entries against the source to catch mistakes.\n- **Organizing** files, folders and records so colleagues can find things.\n- **Updating** existing records when customers move, change numbers, or place new orders.\n- **Reporting** problems: unreadable documents, missing fields, suspicious duplicates.\n\n### Where the job fits in the data career path\nData entry is the foundation of the whole data ladder. You learn how data is born, how it gets messy, and why analysts complain about "dirty data". After mastering entry, you add Excel, cleaning, SQL, Power BI and Python — and that ladder is exactly what this Academy will climb with you, level by level.\n\n> TIP: Employers hire Data Entry Specialists who type fast **and** are careful. Speed impresses in week one; accuracy keeps you employed.',
            ar: 'إدخال البيانات هو عملية أخذ المعلومات — من مستندات ورقية أو نماذج أو رسائل بريد أو فواتير أو ملاحظات صوتية — وتسجيلها بدقة داخل نظام حاسوبي حتى تستطيع الشركة استخدامها. قد يكون النظام Excel أو نموذجاً إلكترونياً أو قاعدة بيانات الشركة أو منصة إدارة أعمال.\n\n### لماذا يهم إدخال البيانات؟\nكل تقرير ولوحة بيانات وقرار عمل يبدأ من بيانات أدخلها شخص ما. إذا كان الإدخال خاطئاً فكل ما بُني فوقه خاطئ. لهذا تهتم الشركات كثيراً بـ**الدقة**: فاتورة أُدخلت 2,850 ريال بدلاً من 2,580 ريال تغيّر بصمت تقارير الإيرادات وأرصدة العملاء وملف ضريبة القيمة المضافة.\n\n### ماذا يفعل أخصائي إدخال البيانات\nيوم عمل نموذجي يشمل:\n- **النسخ**: نقل المعلومات من المستند المصدر إلى النظام الهدف.\n- **التحقق**: مطابقة المدخلات مع المصدر لاكتشاف الأخطاء.\n- **التنظيم**: ترتيب الملفات والمجلدات والسجلات حتى يجدها الزملاء بسهولة.\n- **التحديث**: تعديل السجلات القائمة عند تغيّر بيانات العميل أو طلبه.\n- **إبلاغ المشكلات**: مستندات غير مقروءة، حقول ناقصة، تكرار مشبوه.\n\n### موقع الوظيفة في مسار البيانات\nإدخال البيانات هو أساس السلم المهني للبيانات كله. ستتعلم كيف تُولد البيانات، وكيف تصبح فوضوية، ولماذا يشتكي المحللون من "البيانات القذرة". بعد إتقان الإدخال تضيف Excel ثم التنظيف ثم SQL وPower BI وPython — وهذا هو بالضبط ما ستصعد معه في هذه الأكاديمية مستوى بعد مستوى.\n\n> TIP: توظّف الشركات من يجمع بين سرعة الكتابة **والدقة**. السرعة تنال الإعجاب في الأسبوع الأول، لكن الدقة هي ما يبقيك في الوظيفة.',
          },
          terms: [
            { en: 'Data Entry', ar: 'إدخال البيانات', def: { en: 'Recording information into a computer system accurately and completely.', ar: 'تسجيل المعلومات في نظام حاسوبي بشكل دقيق وكامل.' } },
            { en: 'Source Document', ar: 'المستند المصدر', def: { en: 'The original paper or digital file the information comes from.', ar: 'الملف الأصلي الورقي أو الرقمي الذي تأتي منه المعلومات.' } },
            { en: 'Record', ar: 'سجل', def: { en: 'One complete set of information about a single item, like one customer.', ar: 'مجموعة كاملة من المعلومات عن عنصر واحد، مثل عميل واحد.' } },
            { en: 'Transcribing', ar: 'النسخ الحرفي', def: { en: 'Converting information from its original form into typed digital text.', ar: 'تحويل المعلومات من شكلها الأصلي إلى نص رقمي مكتوب.' } },
          ],
          examples: [
            {
              title: { en: 'Invoice entry at Al-Noor Trading', ar: 'إدخال فواتير في شركة النور للتجارة' },
              body: {
                en: 'A sales rep drops 40 paper invoices on your desk. You type each one into the sales system: invoice number, customer name, date, items, amounts in SAR. By the end, the finance team can see total daily sales without touching a single paper.',
                ar: 'يضع مندوب المبيعات 40 فاتورة ورقية على مكتبك. تقوم بإدخال كل واحدة في نظام المبيعات: رقم الفاتورة، واسم العميل، والتاريخ، والبنود، والمبالغ بالريال. وفي نهاية اليوم يرى قسم المالية إجمالي مبيعات اليوم دون لمس أي ورقة.',
              },
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'A customer invoice shows the amount 4,560 SAR but you typed 4,650 SAR. What skill failed here? Answer with one word (lowercase).',
              ar: 'فاتورة عميل تظهر بمبلغ 4,560 ريال لكنك أدخلت 4,650 ريال. أي مهارة تغلبت عليها هنا؟ أجب بكلمة واحدة بأحرف صغيرة.',
            },
            accept: ['accuracy', 'الدقة', 'دقة'],
            solution: {
              en: 'Accuracy. The digits were correct but in the wrong order — verification against the source document catches exactly this kind of error.',
              ar: 'الدقة (Accuracy). الأرقام صحيحة لكن ترتيبها خاطئ — والتحقق من المستند المصدر يكشف بالضبط هذا النوع من الأخطاء.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which of these is NOT a typical responsibility of a Data Entry Specialist?', ar: 'أي مما يلي ليس من مسؤوليات أخصائي إدخال البيانات النموذجية؟' },
              options: [
                { en: 'Building company-wide marketing strategy', ar: 'بناء استراتيجية التسويق للشركة كلها' },
                { en: 'Verifying entries against source documents', ar: 'التحقق من المدخلات مقابل المستندات المصدر' },
                { en: 'Updating customer records when details change', ar: 'تحديث سجلات العملاء عند تغيّر بياناتهم' },
                { en: 'Reporting missing fields in documents', ar: 'الإبلاغ عن الحقول الناقصة في المستندات' },
              ],
              answer: 0,
              explain: {
                en: 'Data entry work is about accurate recording, verification, updating and reporting problems — not company strategy.',
                ar: 'عمل إدخال البيانات يدور حول التسجيل الدقيق والتحقق والتحديث والإبلاغ عن المشكلات — وليس استراتيجية الشركة.',
              },
              mistake: { en: 'Confusing the data entry role with the data analyst role; analysts consume entered data, they rarely type it.', ar: 'الخلط بين دور إدخال البيانات ودور المحلل؛ فالمحلل يستهلك البيانات المُدخلة ولا يكتبها عادة.' },
            },
            {
              type: 'tf',
              q: { en: 'One wrong digit in an entered invoice amount can change official financial reports.', ar: 'رقم واحد خاطئ في مبلغ فاتورة مُدخلة يمكن أن يغيّر التقارير المالية الرسمية.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: 'Yes — entered values feed inventory, revenue, tax and customer balance reports directly.', ar: 'نعم — فالقيم المُدخلة تتغذى مباشرة على تقارير المخزون والإيرادات والضرائب وأرصدة العملاء.' },
            },
            {
              type: 'fill',
              q: { en: 'The original paper or digital file that information comes from is called the ______ document.', ar: 'الملف الأصلي الذي تأتي منه المعلومات يسمى المستند ______.' },
              accept: ['source', 'المصدر'],
              explain: { en: 'Source document — the reference you always verify your entry against.', ar: 'المستند المصدر (Source Document) — وهو المرجع الذي تطابق إدخالك معه دائماً.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L1M1L2',
          title: { en: 'Types of Data, Sources and Collection', ar: 'أنواع البيانات ومصادرها وطرق جمعها' },
          minutes: 11,
          description: {
            en: 'Learn the data types you will handle, where business data comes from, and the correct ways to collect it.',
            ar: 'تعرّف على أنواع البيانات التي ستتعامل معها، ومن أين تأتي بيانات الشركات، والطرق الصحيحة لجمعها.',
          },
          objectives: [
            { en: 'Distinguish text, numeric, date and boolean data types', ar: 'التمييز بين أنواع البيانات: نصية ورقمية وتاريخية ومنطقية' },
            { en: 'Identify common internal and external data sources', ar: 'تحديد مصادر البيانات الداخلية والخارجية الشائعة' },
            { en: 'Apply correct data collection habits', ar: 'تطبيق عادات صحيحة في جمع البيانات' },
          ],
          body: {
            en: '### Data types you will meet\n- **Text** (String): names, addresses, product descriptions — "Ahmad Ali", "Office chair".\n- **Numeric**: quantities, prices, salaries — 12, 450.75, 9500. Numbers you can calculate with.\n- **Date/Time**: order dates, birth dates — 2025-03-14.\n- **Boolean**: Yes/No, True/False — "Is the invoice paid? No".\n\nChoosing the correct type matters because a date stored as text cannot be sorted properly, and a phone number stored as a number loses its leading zero.\n\n### Where data comes from\n**Internal sources** are created inside the company: sales invoices, HR records, customer forms, delivery notes. **External sources** come from outside: supplier catalogs, government portals, market reports, customer emails.\n\n### Data collection in practice\n- **Forms** (paper or online): structured fields like Name, Phone, City.\n- **Scanned documents**: paper converted to images, then often to text via OCR.\n- **System exports**: reports downloaded from business software as Excel or CSV files.\n- **Manual transcription**: reading letters, contracts or emails and typing the key values.\n\n> WARN: Never mix data types in one column. A "Price" column containing "450 SAR", "450" and "not available" will break every calculation later. Use 450 and leave notes in a separate column.',
            ar: '### أنواع البيانات التي ستقابلها\n- **النصية** (Text): الأسماء والعناوين وأوصاف المنتجات — "أحمد علي"، "كرسي مكتبي".\n- **الرقمية** (Numeric): الكميات والأسعار والرواتب — 12، 450.75، 9500. أرقام يمكن الحساب عليها.\n- **التاريخ/الوقت** (Date/Time): تواريخ الطلبات والميلاد — 2025-03-14.\n- **المنطقية** (Boolean): نعم/لا، صح/خطأ — "هل الفاتورة مدفوعة؟ لا".\n\nاختيار النوع الصحيح مهم لأن التاريخ المخزن كنص لا يُرتب بشكل صحيح، ورقم الهاتف المخزن كرقم يفقد الصفر في البداية.\n\n### من أين تأتي البيانات\n**المصادر الداخلية** تُنشأ داخل الشركة: فواتير المبيعات، سجلات الموارد البشرية، نماذج العملاء، إشعارات التسليم. **المصادر الخارجية** تأتي من خارج الشركة: كتالوجات الموردين، البوابات الحكومية، تقارير السوق، رسائل العملاء.\n\n### جمع البيانات عملياً\n- **النماذج** (ورقية أو إلكترونية): حقول منظمة مثل الاسم والهاتف والمدينة.\n- **المستندات الممسوحة**: ورق تحول إلى صور ثم غالباً إلى نص عبر OCR.\n- **تصدير الأنظمة**: تقارير تنزّل من برامج الأعمال بصيغة Excel أو CSV.\n- **النسخ اليدوي**: قراءة الخطابات أو العقود أو الرسائل وكتابة القيم المهمة.\n\n> WARN: لا تخلط أنواع البيانات في عمود واحد. عمود "السعر" يحتوي "450 ريال" و"450" و"غير متوفر" سيفسد كل الحسابات لاحقاً. اكتب 450 وضع الملاحظات في عمود منفصل.',
          },
          terms: [
            { en: 'Data Type', ar: 'نوع البيانات', def: { en: 'The kind of value stored: text, number, date or boolean.', ar: 'نوع القيمة المخزنة: نص أو رقم أو تاريخ أو منطقية.' } },
            { en: 'Data Source', ar: 'مصدر البيانات', def: { en: 'The origin of the data: forms, documents, systems or external providers.', ar: 'أصل البيانات: نماذج أو مستندات أو أنظمة أو مزودون خارجيون.' } },
            { en: 'CSV', ar: 'ملف CSV', def: { en: 'Comma-Separated Values — a plain text format for tables that every tool can open.', ar: 'قيم مفصولة بفواصل — صيغة نصية بسيطة للجداول تفتحها كل الأدوات.' } },
            { en: 'Field', ar: 'حقل', def: { en: 'A single piece of information in a record, like "Phone".', ar: 'قطعة معلومة واحدة داخل السجل، مثل "الهاتف".' } },
          ],
          examples: [
            {
              title: { en: 'Classifying customer data', ar: 'تصنيف بيانات العملاء' },
              body: {
                en: 'Customer record: Name "Sara Hassan" (text), Phone "0501234567" (text, keeps the zero), City "Riyadh" (text), Total purchases 12,400 (numeric), Joined 2024-11-02 (date), Newsletter "Yes" (boolean).',
                ar: 'سجل عميل: الاسم "سارة حسن" (نص)، الهاتف "0501234567" (نص للحفاظ على الصفر)، المدينة "الرياض" (نص)، إجمالي المشتريات 12,400 (رقمي)، تاريخ الانضمام 2024-11-02 (تاريخ)، النشرة البريدية "نعم" (منطقية).',
              },
            },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'Open any notebook or notes app and list 5 pieces of data about yourself, writing the correct data type next to each one (text, numeric, date, boolean).',
              ar: 'افتح أي دفتر أو تطبيق ملاحظات واكتب 5 بيانات عن نفسك مع تحديد نوع البيانات الصحيح لكل منها (نص، رقم، تاريخ، منطقية).',
            },
            confirm: [
              { en: 'I listed 5 data items about myself', ar: 'أدرجت 5 بيانات عن نفسي' },
              { en: 'I wrote the correct data type next to each item', ar: 'كتبت نوع البيانات الصحيح بجانب كل بيان' },
              { en: 'I included at least one numeric and one date item', ar: 'أضفت على الأقل بياناً رقمياً وبياناً بتاريخ' },
            ],
            solution: {
              en: 'Example: Name "Khaled" (text), Age 27 (numeric), Birthday 1998-05-12 (date), Has driving license "Yes" (boolean), Phone "0555551234" (text).',
              ar: 'مثال: الاسم "خالد" (نص)، العمر 27 (رقمي)، تاريخ الميلاد 1998-05-12 (تاريخ)، لديه رخصة قيادة "نعم" (منطقية)، الهاتف "0555551234" (نص).',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which column mixes data types incorrectly?', ar: 'أي عمود يخلط أنواع البيانات بشكل خاطئ؟' },
              options: [
                { en: 'Price: 450 / 320 / "not available" / 980', ar: 'السعر: 450 / 320 / "غير متوفر" / 980' },
                { en: 'City: Riyadh / Jeddah / Dammam', ar: 'المدينة: الرياض / جدة / الدمام' },
                { en: 'Paid: Yes / No / Yes', ar: 'مدفوع: نعم / لا / نعم' },
                { en: 'Phone: "0501112233" / "0509998877"', ar: 'الهاتف: "0501112233" / "0509998877"' },
              ],
              answer: 0,
              explain: { en: 'Text mixed into a numeric column breaks SUM, AVERAGE and every report. Put notes in a separate column.', ar: 'النص المخلوط بعمود رقمي يفسد الجمع والمتوسط وكل التقارير. ضع الملاحظات في عمود منفصل.' },
              mistake: { en: 'Storing phones as numbers; leading zeros disappear, so phones stay text.', ar: 'تخزين الهواتف كأرقام؛ الصفر في البداية يختفي، لذا تبقى الهواتف نصاً.' },
            },
            {
              type: 'mcq',
              q: { en: 'A supplier catalog you received by email is what kind of data source?', ar: 'كتالوج مورد استلمته بالبريد الإلكتروني يُعد أي نوع من مصادر البيانات؟' },
              options: [
                { en: 'External source', ar: 'مصدر خارجي' },
                { en: 'Internal source', ar: 'مصدر داخلي' },
                { en: 'System export', ar: 'تصدير من نظام' },
                { en: 'Boolean field', ar: 'حقل منطقي' },
              ],
              answer: 0,
              explain: { en: 'It originates outside the company, so it is external. Sales invoices would be internal.', ar: 'أصله من خارج الشركة فهو خارجي. أما فواتير المبيعات فهي داخلية.' },
            },
            {
              type: 'tf',
              q: { en: 'A date stored as plain text can still be sorted in true calendar order automatically.', ar: 'التاريخ المخزن كنص عادي يمكن ترتيبه تلقائياً بالترتيب الزمني الصحيح.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — text dates sort alphabetically (03/12 before 10/01), producing wrong order. Store real dates as date type.', ar: 'خطأ — التواريخ النصية تُرتب أبجدياً فينتج ترتيب خاطئ. احفظ التواريخ كنوع تاريخ.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L1M2',
      name: { en: 'Data Accuracy and Quality', ar: 'دقة وجودة البيانات' },
      lessons: [
        {
          id: 'L1M2L1',
          title: { en: 'Accuracy, Validation and Verification', ar: 'الدقة والتحقق والمطابقة' },
          minutes: 11,
          description: {
            en: 'Learn the three pillars of trustworthy entry: accuracy, validation and verification — and how they work together.',
            ar: 'تعلّم الركائز الثلاث للإدخال الموثوق: الدقة، والتحقق المسبق، والمطابقة اللاحقة — وكيف تعمل معاً.',
          },
          objectives: [
            { en: 'Define accuracy, validation and verification and tell them apart', ar: 'تعريف الدقة والتحقق والمطابقة والتمييز بينها' },
            { en: 'Use validation rules to stop errors before they happen', ar: 'استخدام قواعد التحقق لمنع الأخطاء قبل حدوثها' },
            { en: 'Build a simple verification routine', ar: 'بناء روتين بسيط للمطابقة' },
          ],
          body: {
            en: '### Accuracy\nAccuracy means the entered value equals the real value. "Riyadh" not "Ryiadh", 12,400 not 12,040. Accuracy errors are silent: nobody sees them at entry time, they explode later in reports.\n\n### Validation (stop errors at the gate)\nValidation is a rule the system applies **while you type**. Examples:\n- A quantity field refuses negative numbers.\n- A date field only accepts real dates.\n- A city field only accepts values from a list (Riyadh, Jeddah, Dammam).\n- An email field requires the @ symbol.\n\nGood validation means impossible entries cannot be saved. Excel offers this with **Data Validation** (Data tab → Data Validation → choose Whole number, List, Date...).\n\n### Verification (catch what slipped through)\nVerification is a human check **after** entry: you compare the entered record against the source document. Professionals verify:\n- 100% of critical records (payments, legal data).\n- A random sample (e.g. 1 in every 10) for normal volume work.\n\n> TIP: Validation protects the door; verification patrols the room. You need both.',
            ar: '### الدقة\nالدقة تعني أن القيمة المُدخلة مطابقة للقيمة الحقيقية. "الرياض" لا "الريض"، و12,400 لا 12,040. أخطاء الدقة صامتة: لا يراها أحد وقت الإدخال، ثم تنفجر لاحقاً في التقارير.\n\n### التحقق المسبق (Validation) — سد البوابة\nالتحقق قاعدة يطبقها النظام **أثناء الكتابة**. أمثلة:\n- حقل الكمية يرفض الأرقام السالبة.\n- حقل التاريخ يقبل التواريخ الحقيقية فقط.\n- حقل المدينة يقبل قيماً من قائمة محددة (الرياض، جدة، الدمام).\n- حقل البريد يتطلب وجود علامة @.\n\nالتحقق الجيد يعني أن الإدخالات المستحيلة لا يمكن حفظها. في Excel يوفر ذلك خيار **Data Validation** (تبويب Data ← Data Validation ← اختر Whole number أو List أو Date...).\n\n### المطابقة اللاحقة (Verification)\nالمطابقة تدقيق بشري **بعد** الإدخال: تقارن السجل المُدخل مع المستند المصدر. يطابق المحترفون:\n- 100% من السجلات الحرجة (المدفوعات، البيانات القانونية).\n- عينة عشوائية (مثل 1 من كل 10) في العمل ذي الحجم الكبير.\n\n> TIP: التحقق المسبق يحمي الباب، والمطابقة اللاحقة تدور داخل الغرفة. تحتاج إلى الاثنين معاً.',
          },
          terms: [
            { en: 'Accuracy', ar: 'الدقة', def: { en: 'The entered value matches the true value exactly.', ar: 'القيمة المُدخلة تطابق القيمة الحقيقية تماماً.' } },
            { en: 'Validation', ar: 'التحقق المسبق', def: { en: 'Rules applied during entry to reject impossible values.', ar: 'قواعد تُطبق أثناء الإدخال لرفض القيم المستحيلة.' } },
            { en: 'Verification', ar: 'المطابقة اللاحقة', def: { en: 'Checking entered data against the source after entry.', ar: 'مطابقة البيانات المُدخلة مع المصدر بعد الإدخال.' } },
            { en: 'Data Validation (Excel)', ar: 'أداة التحقق في Excel', def: { en: 'Excel feature that restricts what a cell accepts: lists, ranges, dates.', ar: 'ميزة في Excel تقيّد ما تقبله الخلية: قوائم أو نطاقات أو تواريخ.' } },
          ],
          examples: [
            {
              title: { en: 'Validation saving the day', ar: 'التحقق المسبق ينقذ الموقف' },
              body: {
                en: 'Al-Noor Trading added a list-validation rule on the "City" column. Within one month, misspelled cities ("Ryiadh", "Jeddahh") dropped to zero, and the monthly sales-by-city report matched for the first time.',
                ar: 'أضافت شركة النور قائمة تحقق على عمود "المدينة". خلال شهر واحد انخفضت المدن الخاطئة ("الريض"، "جده") إلى الصفر، وتطابق تقرير المبيعات حسب المدينة لأول مرة.',
              },
            },
          ],
          steps: [
            { en: 'Before entry: confirm which fields are critical (money, IDs, contacts).', ar: 'قبل الإدخال: حدد الحقول الحرجة (المبالغ، المعرفات، بيانات التواصل).' },
            { en: 'During entry: apply validation lists and ranges in the tool you use.', ar: 'أثناء الإدخال: طبّق قوائم ونطاقات التحقق في الأداة التي تستخدمها.' },
            { en: 'After entry: verify critical records 100% and sample the rest.', ar: 'بعد الإدخال: طابق السجلات الحرجة بالكامل واعين عينة من الباقي.' },
            { en: 'Log every error you catch and its cause — patterns show you where to add validation.', ar: 'سجّل كل خطأ تكتشفه وسببه — الأنماط تدلك على مواضع إضافة التحقق.' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Which technique compares ALREADY ENTERED data against the source document — validation or verification? One word, lowercase.',
              ar: 'أي أسلوب يقارن البيانات التي دخلت بالفعل مع المستند المصدر — التحقق المسبق أم المطابقة اللاحقة؟ أجب بكلمة واحدة بأحرف صغيرة بالإنجليزية.',
            },
            accept: ['verification', 'المطابقة'],
            solution: {
              en: 'Verification. Validation works during entry; verification is the after-entry check against the source.',
              ar: 'المطابقة اللاحقة (Verification). التحقق المسبق يعمل أثناء الإدخال، أما المطابقة فهي الفحص بعد الإدخال مقابل المصدر.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'A rule that rejects quantities below zero is an example of…', ar: 'القاعدة التي ترفض الكميات الأقل من صفر هي مثال على…' },
              options: [
                { en: 'Validation', ar: 'التحقق المسبق' },
                { en: 'Verification', ar: 'المطابقة اللاحقة' },
                { en: 'Standardization', ar: 'التوحيد' },
                { en: 'Backup', ar: 'النسخ الاحتياطي' },
              ],
              answer: 0,
              explain: { en: 'It blocks impossible values during entry, which is exactly what validation does.', ar: 'إنها تمنع القيم المستحيلة أثناء الإدخال، وهذا بالضبط عمل التحقق المسبق.' },
            },
            {
              type: 'tf',
              q: { en: 'Verifying 100% of records is usually necessary for all routine data entry work.', ar: 'مطابقة 100% من السجلات ضرورية عادة في كل أعمال الإدخال الروتينية.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — full verification is reserved for critical data; routine work uses sampling to stay efficient.', ar: 'خطأ — المطابقة الكاملة مخصصة للبيانات الحرجة؛ أما الروتين فيعتمد العينات للحفاظ على الكفاءة.' },
            },
            {
              type: 'fill',
              q: { en: 'Entering "Ryiadh" instead of "Riyadh" is an ______ error.', ar: 'إدخال "الريض" بدلاً من "الرياض" هو خطأ ______.', },
              accept: ['accuracy', 'spelling', 'typo', 'الدقة', 'إملائي'],
              explain: { en: 'An accuracy error — the value does not match reality.', ar: 'خطأ دقة (Accuracy) — القيمة لا تطابق الواقع.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L1M2L2',
          title: { en: 'Error Prevention, Detection and Correction', ar: 'منع الأخطاء واكتشافها وتصحيحها' },
          minutes: 12,
          description: {
            en: 'Learn a professional system for handling errors: prevent them, detect them, correct them — plus duplicates and missing information.',
            ar: 'تعلّم نظاماً مهنياً للتعامل مع الأخطاء: منعها واكتشافها وتصحيحها — بالإضافة إلى التكرار والمعلومات الناقصة.',
          },
          objectives: [
            { en: 'Apply the prevent → detect → correct cycle', ar: 'تطبيق دورة: منع ← اكتشاف ← تصحيح' },
            { en: 'Spot duplicate records and handle them correctly', ar: 'اكتشاف السجلات المكررة والتعامل معها بشكل صحيح' },
            { en: 'Handle missing information professionally', ar: 'التعامل مع المعلومات الناقصة باحترافية' },
          ],
          body: {
            en: '### The error-handling cycle\n1. **Prevent** — validation lists, careful typing posture, quiet environment, double-checking before Enter.\n2. **Detect** — sorting columns to spot oddities, counting blanks, using filters, cross-checking totals ("the invoice says 3 items but I entered 3 rows?").\n3. **Correct** — fix the value, note what caused it, and fix the cause (add validation, improve lighting, slow down).\n\n### Duplicate records\nA duplicate is the same real entity entered twice: "Ahmad Ali" with the same phone 0501234567 appearing on two rows. Duplicates poison reports: the same customer counted twice means revenue and counts inflate. Handle them by:\n- Searching for the same key values (phone, national ID, email).\n- In Excel: **Remove Duplicates** (Data tab) after selecting key columns.\n- Keeping ONE master record and merging extra information into it.\n\n### Missing information\nNever hide missing values with fake data. Instead:\n- Leave the field empty or mark "N/A" following your company rule.\n- Report systematic gaps ("every scanned form misses the ZIP code").\n- Never invent a phone number or date to make a row look complete.\n\n> WARN: Filling missing prices with 0 makes averages lie. Zero is a value — "missing" is not. Keep them separate.',
            ar: '### دورة التعامل مع الأخطاء\n1. **المنع** — قوائم التحقق، وبيئة عمل هادئة، والتدقيق قبل الضغط على Enter.\n2. **الاكتشاف** — ترتيب الأعمدة لملاحظة الغرائب، وعد الفراغات، واستخدام الفلاتر، ومطابقة الإجماليات ("الفاتورة تقول 3 بنود وأدخلت 3 صفوف؟").\n3. **التصحيح** — أصلح القيمة، وسجل سببها، وأصلح السبب (أضف تحققاً، حسّن الإضاءة، خفّف السرعة).\n\n### السجلات المكررة\nالتكرار هو الكيان الحقيقي نفسه مُدخل مرتين: "أحمد علي" بنفس الهاتف 0501234567 في صفين. التكرار يسمّم التقارير: عدّ العميل مرتين يعني تضخيم الإيرادات والأعداد. تعامل معها بـ:\n- البحث بنفس القيم المفتاحية (الهاتف، رقم الهوية، البريد).\n- في Excel: خيار **Remove Duplicates** (تبويب Data) بعد تحديد الأعمدة المفتاحية.\n- الاحتفاظ بسجل رئيسي واحد ودمج المعلومات الإضافية فيه.\n\n### المعلومات الناقصة\nلا تخفِ القيم الناقصة ببيانات وهمية أبداً. بدلاً من ذلك:\n- اترك الحقل فارغاً أو ضع "N/A" حسب قاعدة شركتك.\n- أبلغ عن الفجوات المنهجية ("كل النماذج الممسوحة تنقصها الرمز البريدي").\n- لا تختلق رقم هاتف أو تاريخ لتبدو الصفوف كاملة.\n\n> WARN: تعبئة الأسعار الناقصة بصفر يكذب على المتوسطات. الصفر قيمة — و"ناقص" ليس قيمة. أبقِهما منفصلين.',
          },
          terms: [
            { en: 'Duplicate Record', ar: 'سجل مكرر', def: { en: 'The same entity entered more than once in the dataset.', ar: 'الكيان نفسه مُدخل أكثر من مرة في مجموعة البيانات.' } },
            { en: 'Missing Value', ar: 'قيمة مفقودة', def: { en: 'A field that should have data but is empty or unknown.', ar: 'حقل يجب أن يحتوي بيانات لكنه فارغ أو غير معروف.' } },
            { en: 'Data Integrity', ar: 'سلامة البيانات', def: { en: 'The overall correctness and completeness of data across its life.', ar: 'الصحة والاكتمال الكلي للبيانات عبر دورة حياتها.' } },
          ],
          examples: [
            {
              title: { en: 'Finding duplicates with a phone number', ar: 'إيجاد التكرار عبر رقم الهاتف' },
              body: {
                en: 'Two rows: "A. Ali, 0501234567, Riyadh" and "Ahmad Ali, 0501234567, Riyadh". The names differ slightly but the phone is identical — same customer entered twice. Keep one row, merge any unique info, report the entry that caused it.',
                ar: 'صفان: "أحمد علي، 0501234567، الرياض" و"أ. علي، 0501234567، الرياض". الاسمان مختلفان قليلاً لكن الهاتف متطابق — نفس العميل أُدخل مرتين. احتفظ بصف واحد، وادمج أي معلومة فريدة، وأبلغ عن مصدر الخطأ.',
              },
            },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'A list of 50 customer rows contains the same phone number 0501234567 on exactly 3 rows. After removing duplicates, how many rows remain for this customer?',
              ar: 'قائمة من 50 صف عميل تحتوي رقم الهاتف 0501234567 في 3 صفوف بالضبط. بعد إزالة التكرار، كم يتبقى من صفوف لهذا العميل؟',
            },
            accept: ['1'],
            solution: {
              en: '1. Three identical entries of the same customer become one master record; duplicates are removed.',
              ar: '1. ثلاثة إدخالات متطابقة لنفس العميل تصبح سجلاً رئيسياً واحداً ويُزال التكرار.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'What is the professional way to handle a missing customer phone number?', ar: 'ما الطريقة المهنية للتعامل مع رقم هاتف عميل مفقود؟' },
              options: [
                { en: 'Leave it empty or "N/A" and report the gap', ar: 'تركه فارغاً أو "N/A" والإبلاغ عن الفجوة' },
                { en: 'Type 0000000000 to fill the space', ar: 'كتابة 0000000000 لتعبئة الفراغ' },
                { en: 'Copy the phone from another customer', ar: 'نسخ الهاتف من عميل آخر' },
                { en: 'Delete the whole customer row', ar: 'حذف صف العميل بالكامل' },
              ],
              answer: 0,
              explain: { en: 'Missing must stay distinguishable from real values; faking or copying data creates worse errors.', ar: 'يجب أن يبقى "المفقود" مميزاً عن القيم الحقيقية؛ وتزوير البيانات أو نسخها يخلق أخطاء أسوأ.' },
              mistake: { en: 'Filling with zeros: zero is a real value and will corrupt averages.', ar: 'التعبئة بالأصفار: الصفر قيمة حقيقية وسيفسد المتوسطات.' },
            },
            {
              type: 'mcq',
              q: { en: 'Sorting a "City" column alphabetically helps you detect…', ar: 'الترتيب الأبجدي لعمود "المدينة" يساعدك على اكتشاف…' },
              options: [
                { en: 'Spelling inconsistencies grouping near each other', ar: 'عدم اتساق الكتابة لأن الصيغ المتشابهة تتجاور' },
                { en: 'Missing dates', ar: 'التواريخ الناقصة' },
                { en: 'Duplicate invoice amounts', ar: 'تكرار مبالغ الفواتير' },
                { en: 'Negative quantities', ar: 'الكميات السالبة' },
              ],
              answer: 0,
              explain: { en: 'Sorting groups similar spellings together, so "Riyadh / Ryiadh / riyadh" appear side by side.', ar: 'الترتيب يجمع الصيغ المتشابهة معاً فتظهر "الرياض / الريض / الرياض" جنبًا إلى جنب.' },
            },
            {
              type: 'num',
              q: { en: 'Monthly reports double-counted 4 duplicate customers worth 3,200 SAR each. By how much (SAR) is revenue overstated?', ar: 'احتسبت التقارير الشهرية 4 عملاء مكررين بقيمة 3,200 ريال لكل منهم. بمقدار كم (ريال) تضخمت الإيرادات؟' },
              answer: 12800,
              tolerance: 0.01,
              explain: { en: '4 × 3,200 = 12,800 SAR counted twice — the excess is one extra count of each: 12,800 SAR.', ar: '‏4 × 3,200 = 12,800 ريال حُسبت مرتين — الزيادة هي عدّ إضافي واحد لكل عميل: 12,800 ريال.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L1M3',
      name: { en: 'Data Entry Tools', ar: 'أدوات إدخال البيانات' },
      lessons: [
        {
          id: 'L1M3L1',
          title: { en: 'Word, Excel, PDFs and Online Forms', ar: '‏Word وExcel وملفات PDF والنماذج الإلكترونية' },
          minutes: 12,
          description: {
            en: 'Meet the everyday toolbox: Microsoft Word, Microsoft Excel, PDF documents and online forms — and when to use each.',
            ar: 'تعرّف على صندوق الأدوات اليومي: Microsoft Word وMicrosoft Excel وملفات PDF والنماذج الإلكترونية — ومتى تستخدم كل واحدة.',
          },
          objectives: [
            { en: 'Choose the right tool for each data entry task', ar: 'اختيار الأداة المناسبة لكل مهمة إدخال' },
            { en: 'Describe what Excel does best for data work', ar: 'وصف ما يتفوق فيه Excel في أعمال البيانات' },
            { en: 'Handle PDF sources professionally', ar: 'التعامل مع ملفات PDF كمصادر باحترافية' },
          ],
          body: {
            en: '### Microsoft Word\nWord is for documents: letters, reports, contracts. In data entry you use it when the OUTPUT is a document — typing letters from templates, preparing reports. It is not for storing lists of records; tables in Word are awkward to sort or calculate.\n\n### Microsoft Excel\nExcel is the data workhorse: rows and columns of records you can sort, filter, validate and calculate. Customer lists, inventory, monthly sales — all live happily in Excel. This Academy dedicates its entire Level 2 to Excel because it is the #1 tool in data entry job ads.\n\n### PDF documents\nPDFs preserve formatting for sharing and printing. As an entry specialist you receive PDFs constantly: scanned invoices, signed contracts, statements. You cannot edit them directly (that is the point of PDF), so you:\n- Read values and type them into Excel or the company system.\n- Copy selectable text when the PDF allows it.\n- Export PDF tables to Excel when the file has clean tables.\n\n### Online forms\nGoogle Forms, Microsoft Forms and company web systems present structured fields — the best possible input, because validation is built in and answers land in a neat table automatically.\n\n> TIP: Rule of thumb: letters and reports → Word. Lists and numbers → Excel. Fixed-layout sharing → PDF. Collecting from people → forms.',
            ar: '### Microsoft Word\nWord مخصص للمستندات: الرسائل والتقارير والعقود. تستخدمه في إدخال البيانات عندما يكون الناتج **مستنداً** — كتابة خطابات من قوالب أو إعداد تقارير. إنه ليس مكاناً لتخزين قوائم السجلات؛ فجداول Word صعبة الترتيب والحساب.\n\n### Microsoft Excel\nExcel هو حصان العمل للبيانات: صفوف وأعمدة من السجلات يمكن ترتيبها وفلترتها والتحقق منها وحسابها. قوائم العملاء والمخزون والمبيعات الشهرية — كلها تعيش بسعادة في Excel. ستخصص هذه الأكاديمية مستواها الثاني كاملاً لـ Excel لأنه الأداة الأولى في إعلانات وظائف إدخال البيانات.\n\n### ملفات PDF\nتحافظ ملفات PDF على التنسيق للمشاركة والطباعة. بصفتك أخصائي إدخال ستستلم ملفات PDF باستمرار: فواتير ممسوحة، عقود موقعة، كشوف حسابات. لا يمكنك تعديلها مباشرة (وهذا جوهر PDF)، لذا:\n- تقرأ القيم وتكتبها في Excel أو نظام الشركة.\n- تنسخ النص القابل للتحديد عندما يسمح الملف.\n- تصدّر جداول PDF إلى Excel عندما تكون الجداول نظيفة.\n\n### النماذج الإلكترونية\nGoogle Forms وMicrosoft Forms وأنظمة الويب في الشركات تقدم حقولاً منظمة — أفضل إدخال ممكن، لأن التحقق مدمج وتنتقل الإجابات تلقائياً إلى جدول مرتب.\n\n> TIP: قاعدة ذهبية: الخطابات والتقارير ← Word. القوائم والأرقام ← Excel. المشاركة بتنسيق ثابت ← PDF. جمع البيانات من الأشخاص ← النماذج.',
          },
          terms: [
            { en: 'Spreadsheet', ar: 'جدول بيانات', def: { en: 'A grid of rows and columns (like Excel) designed for records and calculations.', ar: 'شبكة من صفوف وأعمدة (مثل Excel) مصممة للسجلات والحسابات.' } },
            { en: 'PDF', ar: 'ملف PDF', def: { en: 'Portable Document Format — a fixed-layout file that looks the same everywhere.', ar: 'صيغة المستندات المحمولة — ملف بتنسيق ثابت يظهر بنفس الشكل في كل مكان.' } },
            { en: 'Online Form', ar: 'نموذج إلكتروني', def: { en: 'A web page with structured input fields that collects data directly into a table.', ar: 'صفحة ويب بحقول إدخال منظمة تجمع البيانات مباشرة في جدول.' } },
          ],
          examples: [
            {
              title: { en: 'Choosing the right tool', ar: 'اختيار الأداة الصحيحة' },
              body: {
                en: 'Task 1: type a thank-you letter to a client → Word. Task 2: record 300 customer phone numbers → Excel. Task 3: send the signed contract to the client → PDF. Task 4: collect new staff details from 50 employees → online form.',
                ar: 'المهمة 1: كتابة خطاب شكر لعميل ← Word. المهمة 2: تسجيل 300 رقم هاتف للعملاء ← Excel. المهمة 3: إرسال العقد الموقع للعميل ← PDF. المهمة 4: جمع بيانات 50 موظفاً ← نموذج إلكتروني.',
              },
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'You must record 500 product names, prices and quantities that will later be sorted and totaled. Which tool: Word, Excel, PDF or Form? One word, lowercase.',
              ar: 'عليك تسجيل 500 اسم منتج وسعر وكمية سيُرتب ويُجمع لاحقاً. أي أداة: Word أم Excel أم PDF أم Form؟ أجب بكلمة واحدة بأحرف صغيرة بالإنجليزية.',
            },
            accept: ['excel'],
            solution: {
              en: 'Excel — it handles lists with sorting, filtering and formulas.',
              ar: '‏Excel — يتولى القوائم مع الترتيب والفلترة والصيغ.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which tool is BEST for collecting structured answers from 100 people?', ar: 'أي أداة هي الأفضل لجمع إجابات منظمة من 100 شخص؟' },
              options: [
                { en: 'An online form', ar: 'نموذج إلكتروني' },
                { en: 'A Word letter', ar: 'خطاب Word' },
                { en: 'A PDF file', ar: 'ملف PDF' },
                { en: 'A scanned paper', ar: 'ورقة ممسوحة ضوئياً' },
              ],
              answer: 0,
              explain: { en: 'Forms collect into a structured table automatically and can validate answers as people type.', ar: 'النماذج تجمع الإجابات في جدول منظّم تلقائياً ويمكنها التحقق أثناء الكتابة.' },
            },
            {
              type: 'tf',
              q: { en: 'PDF is the best format for storing a growing list of 5,000 sales records.', ar: '‏PDF هو الأفضل لتخزين قائمة مبيعات متنامية من 5000 سجل.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — PDF is fixed layout, not a data store. Use Excel or a database.', ar: 'خطأ — ‏PDF تنسيق ثابت وليس مخزن بيانات. استخدم Excel أو قاعدة بيانات.' },
            },
            {
              type: 'fill',
              q: { en: 'The spreadsheet tool used for lists, sorting and formulas is ______.', ar: 'أداة الجداول المستخدمة للقوائم والترتيب والصيغ هي ______.', },
              accept: ['excel'],
              explain: { en: 'Microsoft Excel — the core tool of data entry and analysis.', ar: '‏Microsoft Excel — الأداة الأساسية لإدخال البيانات والتحليل.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L1M3L2',
          title: { en: 'Scanning, OCR and Document Management', ar: 'المسح الضوئي وOCR وإدارة المستندات' },
          minutes: 11,
          description: {
            en: 'Understand how paper becomes digital: scanning, OCR fundamentals and digital document management systems.',
            ar: 'افهم كيف يتحول الورق إلى بيانات رقمية: المسح الضوئي، وأساسيات OCR، وأنظمة إدارة المستندات الرقمية.',
          },
          objectives: [
            { en: 'Explain what OCR does and when it fails', ar: 'شرح ما يفعله OCR ومتى يفشل' },
            { en: 'Follow correct scanning quality practices', ar: 'اتباع ممارسات صحيحة لجودة المسح الضوئي' },
            { en: 'Describe document management systems', ar: 'وصف أنظمة إدارة المستندات' },
          ],
          body: {
            en: '### Scanning\nScanning converts paper into an image. Quality matters: 300 DPI is the standard for documents, straight (not tilted) pages, good lighting, and no fingers covering corners. A bad scan creates entry errors later — you cannot verify what you cannot read.\n\n### OCR (Optical Character Recognition)\nOCR reads the scanned image and converts visible characters into selectable, editable text. Modern OCR is impressive, but it is not perfect. It struggles with:\n- Handwriting (especially numbers).\n- Poor scans (blur, skew, shadows).\n- Mixed columns and stamps over text.\n\nThis is why OCR output is a **draft**, not a final record: a professional always verifies OCR results against the original — especially amounts, dates and reference numbers.\n\n### Digital document management\nCompanies store scanned and digital documents in systems (SharePoint, dedicated DMS software) where you:\n- Follow the folder structure and naming conventions.\n- Attach metadata: document type, date, department, customer.\n- Control versions and access permissions.\n\nGood management means any document is findable in seconds — by name, type or date — instead of "check the blue folder".\n\n> TIP: OCR accuracy falls sharply with handwriting. Never trust OCR for money amounts without human verification.',
            ar: '### المسح الضوئي\nيحوّل المسح الضوئي الورق إلى صورة. الجودة مهمة: 300 نقطة/بوصة هي المعيار للمستندات، وصفحات مستقيمة (غير مائلة)، وإضاءة جيدة، ولا أصابع تغطي الزوايا. المسح السيئ يخلق أخطاء إدخال لاحقاً — فلا يمكنك التحقق مما لا يمكنك قراءته.\n\n### OCR (التعرف الضوئي على الحروف)\nيقرأ OCR الصورة الممسوحة ويحوّل الحروف المرئية إلى نص قابل للتحديد والتعديل. تقنيات OCR الحديثة مبهرجة لكنها ليست مثالية. تعاني مع:\n- الخط اليدوي (خاصة الأرقام).\n- المسح السيئ (الضبابية والميل والظلال).\n- الأعمدة المختلطة والأختام فوق النص.\n\nلهذا تُعد نتيجة OCR **مسودة** وليس سجلاً نهائياً: يتحقق المحترف دائماً من مخرجات OCR مقابل الأصل — خاصة المبالغ والتواريخ والأرقام المرجعية.\n\n### إدارة المستندات الرقمية\nتخزن الشركات المستندات الممسوحة والرقمية في أنظمة (SharePoint أو برامج DMS مخصصة) حيث:\n- تتبع هيكل المجلدات واصطلاحات التسمية.\n- ترفق البيانات الوصفية: نوع المستند، التاريخ، القسم، العميل.\n- تضبط الإصدارات وصلاحيات الوصول.\n\nالإدارة الجيدة تعني إمكانية إيجاد أي مستند في ثوانٍ — بالاسم أو النوع أو التاريخ — بدلاً من "شوف المجلد الأزرق".\n\n> TIP: تدقيق OCR ينخفض بشدة مع الخط اليدوي. لا تثق أبداً في OCR لمبالغ المال دون تحقق بشري.',
          },
          terms: [
            { en: 'OCR', ar: 'التعرف الضوئي على الحروف', def: { en: 'Optical Character Recognition — technology that reads text from images.', ar: 'تقنية تقرأ النص من الصور وتحوله إلى نص رقمي.' } },
            { en: 'DPI', ar: 'دقة المسح', def: { en: 'Dots per inch — scan resolution; 300 DPI is the document standard.', ar: 'نقطة لكل بوصة — دقة المسح؛ و300 هي المعيار للمستندات.' } },
            { en: 'DMS', ar: 'نظام إدارة المستندات', def: { en: 'Document Management System — software for storing, naming and finding documents.', ar: 'برنامج لتخزين المستندات وتسميتها وإيجادها.' } },
            { en: 'Metadata', ar: 'البيانات الوصفية', def: { en: 'Information about a document: type, date, owner, department.', ar: 'معلومات عن المستند: النوع والتاريخ والمالك والقسم.' } },
          ],
          examples: [
            {
              title: { en: 'OCR almost-cost', ar: 'OCR كاد أن يتسبب بخطأ مكلف' },
              body: {
                en: 'An OCR run read invoice amount "14,800 SAR" as "14,500 SAR" because of a blurry scan. The entry clerk verified against the original and corrected it — avoiding a 300 SAR error in customer balance.',
                ar: 'قرأ نظام OCR مبلغ الفاتورة "14,800 ريال" كـ"14,500 ريال" بسبب مسح ضبابي. تحقق الموظف من الأصل وصححه — متجنباً خطأ 300 ريال في رصيد العميل.',
              },
            },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'If you have access to a scanner or scanning app, scan one paper document at 300 DPI, straight and well-lit, and check whether its OCR output is 100% identical to the paper.',
              ar: 'إن توفر لديك ماسح ضوئي أو تطبيق مسح، امسح مستنداً ورقياً بدقة 300 وأفقي وإضاءة جيدة، ثم تحقق إن كانت نتيجة OCR مطابقة 100% للورقة.',
            },
            confirm: [
              { en: 'I scanned a document at 300 DPI, straight and well-lit', ar: 'مسحت مستنداً بدقة 300 ومستوياً وبإضاءة جيدة' },
              { en: 'I checked the OCR output against the paper', ar: 'تحققت من نتيجة OCR مقابل الورقة' },
              { en: 'I noted any characters OCR read incorrectly', ar: 'سجلت أي حروف قرأها OCR بشكل خاطئ' },
            ],
            solution: {
              en: 'Typical failures: 1 (l) vs I, 0 vs O, 5 vs S, 8 vs B. Note them — these are exactly the characters to double-check in real work.',
              ar: 'الفشل المعتاد: 1 مقابل I، و0 مقابل O، و5 مقابل S، و8 مقابل B. سجّلها — فهذه بالضبط الحروف التي تحتاج تدقيقًا مزدوجًا في العمل الحقيقي.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'OCR output should be treated as…', ar: 'يجب التعامل مع مخرجات OCR بوصفها…' },
              options: [
                { en: 'A draft that needs verification against the original', ar: 'مسودة تحتاج تحققاً مقابل الأصل' },
                { en: 'A final record ready for reports', ar: 'سجلاً نهائياً جاهزاً للتقارير' },
                { en: 'A backup of the paper', ar: 'نسخة احتياطية من الورق' },
                { en: 'An encrypted file', ar: 'ملفاً مشفراً' },
              ],
              answer: 0,
              explain: { en: 'OCR makes mistakes with blur, handwriting and stamps — verification is mandatory.', ar: 'يخطئ OCR مع الضبابية والخط اليدوي والأختام — والتحقق إلزامي.' },
            },
            {
              type: 'fill',
              q: { en: 'The standard scan resolution for text documents is ______ DPI.', ar: 'دقة المسح القياسية للمستندات النصية هي ______ نقطة/بوصة.', },
              accept: ['300'],
              explain: { en: '300 DPI balances readability and file size.', ar: '‏300 نقطة/بوصة توازن بين الوضوح وحجم الملف.' },
            },
            {
              type: 'tf',
              q: { en: 'OCR reads handwriting as reliably as printed text.', ar: 'يقرأ OCR الخط اليدوي بموثوقية النص المطبوع.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — handwriting is a major OCR weakness, especially for numbers.', ar: 'خطأ — الخط اليدوي من أضعف نقاط OCR، خاصة الأرقام.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L1M4',
      name: { en: 'Professional Data Organization', ar: 'التنظيم الاحترافي للبيانات' },
      lessons: [
        {
          id: 'L1M4L1',
          title: { en: 'Classification, Categorization and File Organization', ar: 'التصنيف وتنظيم الملفات' },
          minutes: 11,
          description: {
            en: 'Learn how professionals classify data, categorize records and organize files so nothing is ever lost.',
            ar: 'تعلّم كيف يصنف المحترفون البيانات ويصنفون السجلات وينظمون الملفات بحيث لا يضيع شيء أبداً.',
          },
          objectives: [
            { en: 'Classify data by type and sensitivity', ar: 'تصنيف البيانات حسب النوع والحساسية' },
            { en: 'Apply clear file and folder naming conventions', ar: 'تطبيق اصطلاحات تسمية واضحة للملفات والمجلدات' },
            { en: 'Structure folders for fast retrieval', ar: 'بناء هيكل مجلدات يسهّل الوصول السريع' },
          ],
          body: {
            en: '### Data classification\nClassify by **type** (customers, invoices, employees, products) and by **sensitivity** (public, internal, confidential). Classification decides where data lives and who may see it.\n\n### Categorization\nCategorization puts each record into a business category: customer type (retail/wholesale), region (Riyadh/Jeddah/Dammam), status (active/inactive). Consistent categories make reports possible — "sales by region" only works if every row has exactly one clean region value.\n\n### File and folder organization\nThe professional pattern:\n\n```\nSales/\n  2025/\n    01-January/\n      Invoices/\n      Reports/\n```\n\nYear folder → month folder → document type. Anyone can find "the January invoices" in seconds without asking.\n\n### Naming conventions\nA convention is a fixed format everyone follows:\n\n```\nINV_2025-01-15_AlnNoor_0042.pdf\nTYPE_DATE_SUBJECT_NUMBER\n```\n\n- **Never** use "final", "final2", "new_final_REAL".\n- Dates go YYYY-MM-DD so they sort correctly.\n- No spaces in system files; use underscores.\n\n> TIP: The test of good organization: a stranger can find any document in under 30 seconds using only the folder structure.',
            ar: '### تصنيف البيانات\nصنّف حسب **النوع** (العملاء، الفواتير، الموظفون، المنتجات) وحسب **الحساسية** (عام، داخلي، سري). التصنيف يحدد أين تعيش البيانات ومن يراها.\n\n### التصنيف داخل الأعمال\nالتصنيف يضع كل سجل في فئة عمل: نوع العميل (تجزئة/جملة)، المنطقة (الرياض/جدة/الدمام)، الحالة (نشط/غير نشط). الفئات المتسقة تجعل التقارير ممكنة — فتقرير "المبيعات حسب المنطقة" لا يعمل إلا إذا كان لكل صف قيمة منطقة واحدة نظيفة.\n\n### تنظيم الملفات والمجلدات\nالنمط المهني:\n\n```\nSales/\n  2025/\n    01-January/\n      Invoices/\n      Reports/\n```\n\nمجلد السنة ← مجلد الشهر ← نوع المستند. يستطيع أي شخص إيجاد "فواتير يناير" في ثوانٍ دون سؤال أحد.\n\n### اصطلاحات التسمية\nالاصطلاح هو صيغة ثابتة يتبعها الجميع:\n\n```\nINV_2025-01-15_AlnNoor_0042.pdf\nTYPE_DATE_SUBJECT_NUMBER\n```\n\n- **لا تستخدم أبداً** "final" و"final2" و"new_final_REAL".\n- التواريخ بصيغة YYYY-MM-DD حتى تُرتب بشكل صحيح.\n- لا مسافات في ملفات الأنظمة؛ استخدم الشرطة السفلية _.\n\n> TIP: اختبار التنظيم الجيد: يستطيع شخص غريب إيجاد أي مستند في أقل من 30 ثانية بالاعتماد على هيكل المجلدات فقط.',
          },
          terms: [
            { en: 'Classification', ar: 'التصنيف', def: { en: 'Grouping data by type and sensitivity level.', ar: 'تجميع البيانات حسب النوع ومستوى الحساسية.' } },
            { en: 'Naming Convention', ar: 'اصطلاح التسمية', def: { en: 'A fixed, agreed format for naming files and folders.', ar: 'صيغة ثابتة ومتفق عليها لتسمية الملفات والمجلدات.' } },
            { en: 'Category', ar: 'الفئة', def: { en: 'A business label assigned to each record, like region or status.', ar: 'وسم أعمال يُعطى لكل سجل، مثل المنطقة أو الحالة.' } },
          ],
          examples: [
            {
              title: { en: 'Before and after naming', ar: 'قبل وبعد التسمية' },
              body: {
                en: 'Before: "report new FINAL (2).xlsx". After: "SALES_RPT_2025-01_Jeddah.xlsx". The second name tells you type, subject, date and branch — even one year later.',
                ar: 'قبل: "تقرير جديد نهائي (2).xlsx". بعد: "SALES_RPT_2025-01_Jeddah.xlsx". الاسم الثاني يخبرك بالنوع والموضوع والتاريخ والفرع — حتى بعد سنة.',
              },
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Rewrite this file name using a professional convention, typing it in the answer: "invoice march FINAL (3).pdf" — start with INV, use YYYY-MM for the date (March 2025), then the customer name AlNoor, then the number 0057, separated by underscores.',
              ar: 'أعد صياغة اسم الملف التالي باصطلاح مهني واكتبه في الإجابة: "invoice march FINAL (3).pdf" — ابدأ بـ INV، واستخدم YYYY-MM للتاريخ (مارس 2025)، ثم اسم العميل AlNoor، ثم الرقم 0057، مفصولة بشرطة سفلية.',
            },
            accept: ['inv_2025-03_alnoor_0057.pdf'],
            solution: {
              en: 'INV_2025-03_AlNoor_0057.pdf — type, date, subject, number. Lowercase accepted.',
              ar: '‏INV_2025-03_AlNoor_0057.pdf — النوع والتاريخ والموضوع والرقم. تُقبل الأحرف الصغيرة.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which file name follows a professional convention?', ar: 'أي اسم ملف يتبع اصطلاحاً مهنياً؟' },
              options: [
                { en: 'INVOICE_2025-02-11_Jeddah_0341.pdf', ar: 'INVOICE_2025-02-11_Jeddah_0341.pdf' },
                { en: 'invoice final FINAL (2).pdf', ar: 'invoice final FINAL (2).pdf' },
                { en: 'new doc.pdf', ar: 'new doc.pdf' },
                { en: ' untitled 3 copy.pdf', ar: ' untitled 3 copy.pdf' },
              ],
              answer: 0,
              explain: { en: 'Type, ISO date, subject, number — predictable and sortable.', ar: 'النوع والتاريخ القياسي والموضوع والرقم — متوقع وقابل للترتيب.' },
            },
            {
              type: 'tf',
              q: { en: 'Dates in file names should use YYYY-MM-DD so they sort chronologically.', ar: 'يجب أن تستخدم التواريخ في أسماء الملفات صيغة YYYY-MM-DD حتى تُرتب زمنياً.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: 'Yes — ISO format sorts correctly in every system.', ar: 'نعم — الصيغة القياسية تُرتب بشكل صحيح في كل الأنظمة.' },
            },
            {
              type: 'fill',
              q: { en: 'A fixed format that everyone follows when naming files is called a naming ______.', ar: 'الصيغة الثابتة التي يتبعها الجميع عند تسمية الملفات تسمى اصطلاح ______.', },
              accept: ['convention', 'اصطلاح'],
              explain: { en: 'Naming convention.', ar: 'اصطلاح التسمية (Naming Convention).' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L1M4L2',
          title: { en: 'Standardization, Storage and Administrative Reporting', ar: 'التوحيد والتخزين والتقارير الإدارية' },
          minutes: 11,
          description: {
            en: 'Standardize values across records, store data safely, and produce the small administrative reports managers rely on.',
            ar: 'وحّد القيم عبر السجلات، وخزّن البيانات بأمان، وأنتج التقارير الإدارية الصغيرة التي يعتمد عليها المديرون.',
          },
          objectives: [
            { en: 'Standardize formats for units, phones and dates', ar: 'توحيد صيغ الوحدات والهواتف والتواريخ' },
            { en: 'Apply safe storage and backup habits', ar: 'تطبيق عادات تخزين ونسخ احتياطي آمنة' },
            { en: 'Build a simple daily/weekly administrative report', ar: 'إعداد تقرير إداري يومي/أسبوعي بسيط' },
          ],
          body: {
            en: '### Standardization\nStandardization makes every value in a column follow ONE format:\n- Phones: 05XXXXXXXX (10 digits, no spaces or dashes).\n- Dates: 2025-03-14 everywhere — not 14/3/2025, 3-14-25 and "14 Mar" mixed.\n- Units: SAR not SR, r.s, ريال (pick one and apply it to all rows).\n- Names: consistent capitalization, no extra spaces.\n\nStandard columns let sorting, filtering and formulas work correctly the first time.\n\n### Storage and backup\n- Store working files in the agreed company location (shared drive/system), not only your desktop.\n- Follow the **3-2-1 habit**: important data — 3 copies, 2 different media, 1 off-site/cloud.\n- Never store customer data on personal devices or personal cloud accounts.\n\n### Administrative reporting\nManagers need small, honest, regular summaries. A good daily entry report contains:\n- Records processed today (e.g. 142 invoices).\n- Errors caught and fixed (e.g. 6 wrong amounts, 2 duplicates).\n- Blocking problems (e.g. 4 unreadable scans waiting for the sales team).\n\nKeep it factual: numbers, not feelings. A short standardized report builds trust fast.\n\n> TIP: A report you send every day at the same time becomes something managers rely on — reliability is a career asset.',
            ar: '### التوحيد (Standardization)\nالتوحيد يجعل كل قيمة في العمود تتبع صيغة واحدة:\n- الهواتف: 05XXXXXXXX (10 أرقام، دون مسافات أو شرطات).\n- التواريخ: 2025-03-14 في كل مكان — لا 14/3/2025 و3-14-25 و"14 مارس" مختلطة.\n- الوحدات: SAR وليس SR أو r.s أو ريال (اختر واحدة وطبّقها على كل الصفوف).\n- الأسماء: أحرف متسقة وبلا مسافات زائدة.\n\nالأعمدة الموحدة تجعل الترتيب والفلترة والصيغ تعمل صحيحةً من أول مرة.\n\n### التخزين والنسخ الاحتياطي\n- خزّن ملفات العمل في موقع الشركة المتفق عليه (القرص المشترك/النظام)، وليس على سطح مكتبك فقط.\n- اتبع **عادة 3-2-1**: البيانات المهمة — 3 نسخ، على وسطين مختلفين، ونسخة واحدة خارج الموقع/في السحابة.\n- لا تخزّن بيانات العملاء على أجهزتك الشخصية أو حسابات سحابية شخصية أبداً.\n\n### التقارير الإدارية\nيحتاج المديرون ملخصات صغيرة صادقة منتظمة. التقرير اليومي الجيد للإدخال يحتوي:\n- السجلات المعالجة اليوم (مثال: 142 فاتورة).\n- الأخطاء المكتشفة والمُصلحة (مثال: 6 مبالغ خاطئة، تكراران).\n- المشكلات المعرقلة (مثال: 4 مسوحات غير مقروءة بانتظار فريق المبيعات).\n\nاجعله وقائياً: أرقام لا مشاعر. تقرير قصير موحد يبني الثقة بسرعة.\n\n> TIP: التقرير الذي ترسله يومياً في نفس الوقت يصبح شيئاً يعتمد عليه المديرون — والموثوقية رأسمال مهني.',
          },
          terms: [
            { en: 'Standardization', ar: 'التوحيد', def: { en: 'Applying one consistent format to all values in a column.', ar: 'تطبيق صيغة واحدة متسقة على كل قيم العمود.' } },
            { en: 'Backup', ar: 'النسخ الاحتياطي', def: { en: 'An extra saved copy used to recover data after loss or damage.', ar: 'نسخة إضافية محفوظة تُستخدم لاستعادة البيانات بعد الفقدان أو التلف.' } },
            { en: 'Administrative Report', ar: 'تقرير إداري', def: { en: 'A short regular summary of work done, problems and status.', ar: 'ملخص منتظم قصير عن العمل المنجز والمشكلات والحالة.' } },
          ],
          examples: [
            {
              title: { en: 'A one-line daily report', ar: 'تقرير يومي من سطر واحد' },
              body: {
                en: '"2025-03-14 — processed 142 invoices; fixed 6 amount errors and 2 duplicates; 4 scans pending from Sales." That single line keeps the manager informed and documents your reliability.',
                ar: '"2025-03-14 — عولجت 142 فاتورة؛ صُححت 6 أخطاء مبالغ وتكرارين؛ 4 مسوحات بانتظار المبيعات." هذا السطر الواحد يبقي المدير على اطلاع ويوثق موثوقيتك.',
              },
            },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'Draft a daily entry report for an imaginary day: records processed, errors caught, pending problems. Keep it to 3 lines.',
              ar: 'اكتب تقرير إدخال يومي ليوم وهمي: السجلات المعالجة، الأخطاء المكتشفة، المشكلات المعلقة. اجعله في 3 أسطر.',
            },
            confirm: [
              { en: 'I wrote a 3-line report with real numbers', ar: 'كتبت تقريراً من 3 أسطر بأرقام حقيقية' },
              { en: 'I included processed records, errors and pending items', ar: 'أضفت السجلات المعالجة والأخطاء والمعلقات' },
              { en: 'I used a date in YYYY-MM-DD format', ar: 'استخدمت تاريخاً بصيغة YYYY-MM-DD' },
            ],
            solution: {
              en: '"2025-03-15 — processed 98 orders; fixed 3 wrong quantities, 1 duplicate customer; 2 forms missing signatures (notified HR)."',
              ar: '"2025-03-15 — عولجت 98 طلبية؛ صُححت 3 كميات خاطئة وعميل مكرر واحد؛ نموذجان ناقصا التوقيع (أبلغ الموارد البشرية)."',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which date set is standardized?', ar: 'أي مجموعة تواريخ موحّدة؟' },
              options: [
                { en: '2025-03-01, 2025-03-02, 2025-03-03', ar: '2025-03-01، 2025-03-02، 2025-03-03' },
                { en: '01/03/2025, 3-2-2025, "March 3rd"', ar: '01/03/2025، 3-2-2025، "3 مارس"' },
                { en: '2025/3/1, 1-3-25, 03.03.2025', ar: '2025/3/1، 1-3-25، 03.03.2025' },
                { en: 'Mar 1, 1 Mar, 1/3', ar: '1 مارس، 1 مارس، 1/3' },
              ],
              answer: 0,
              explain: { en: 'One format (ISO YYYY-MM-DD) used consistently is the definition of standardization.', ar: 'صيغة واحدة (YYYY-MM-DD) مستخدمة باتساق هي تعريف التوحيد.' },
            },
            {
              type: 'fill',
              q: { en: 'The backup habit "3 copies, 2 media, 1 offsite" is called the ______ rule.', ar: 'عادة النسخ الاحتياطي "3 نسخ، وسطيان، ونسخة خارجية" تسمى قاعدة ______.', },
              accept: ['3-2-1'],
              explain: { en: 'The 3-2-1 backup rule.', ar: 'قاعدة النسخ الاحتياطي 3-2-1.' },
            },
            {
              type: 'tf',
              q: { en: 'A good administrative report focuses on numbers and facts, not feelings.', ar: 'التقرير الإداري الجيد يركز على الأرقام والحقائق لا المشاعر.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: 'Yes — factual, regular, standardized reporting is what builds professional trust.', ar: 'نعم — التقارير الوقائية المنتظمة الموحدة هي ما يبني الثقة المهنية.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L1M5',
      name: { en: 'Workplace Skills', ar: 'مهارات مكان العمل' },
      lessons: [
        {
          id: 'L1M5L1',
          title: { en: 'Attention to Detail, Time Management and Productivity', ar: 'دقة التفاصيل وإدارة الوقت والإنتاجية' },
          minutes: 10,
          description: {
            en: 'Build the habits that separate professionals from typists: detail focus, realistic planning and measurable productivity.',
            ar: 'ابنِ العادات التي تفرق بين المحترف والكاتب: التركيز على التفاصيل، والتخطيط الواقعي، والإنتاجية القابلة للقياس.',
          },
          objectives: [
            { en: 'Apply techniques that raise attention to detail', ar: 'تطبيق تقنيات ترفع الانتباه للتفاصيل' },
            { en: 'Plan entry work with realistic time blocks', ar: 'تخطيط أعمال الإدخال بفترات زمنية واقعية' },
            { en: 'Measure your own productivity honestly', ar: 'قياس إنتاجيتك بصدق' },
          ],
          body: {
            en: '### Attention to detail\nSmall habits create accuracy:\n- **Chunk checking**: after every 10 records, verify all 10 quickly.\n- **Read aloud** critical numbers in your head as you compare.\n- **Blink break**: every 20 minutes, look 20 feet away for 20 seconds — tired eyes misread 5s and 6s.\n- **One task at a time**: switching between WhatsApp and entry multiplies errors.\n\n### Time management\nEstimate honestly: at a sustainable pace, a careful specialist processes about 60–100 simple records per hour. Plan blocks: "9:00–10:30 invoices batch A, 10:45 verification, 11:00 report". Finish blocks before starting new work.\n\n### Productivity\nProductivity = useful output per unit time **without sacrificing quality**. Track three numbers daily: records processed, errors caught, time spent. Improve one at a time. Speed without accuracy is negative productivity — rework costs more than slowness.\n\n> TIP: The 10-record chunk check typically catches 90% of typos at the moment they happen, when the source is still on your desk.',
            ar: '### الانتباه للتفاصيل\nعادات صغيرة تصنع الدقة:\n- **التدقيق بالدفعات**: بعد كل 10 سجلات، دقق العشرة سريعاً.\n- **اقرأ الأرقام الحرجة** بصوتك الداخلي أثناء المقارنة.\n- **استراحة النظر**: كل 20 دقيقة، انظر لبعيد 20 قدماً لمدة 20 ثانية — العيون المتعبة تخلط بين 5 و6.\n- **مهمة واحدة في المرة**: التبديل بين الواتساب والإدخال يضاعف الأخطاء.\n\n### إدارة الوقت\nقدّر بصدق: بوتيرة مستدامة يعالج الأخصائي الدقيق نحو 60–100 سجل بسيط في الساعة. خطط بفترات: "9:00–10:30 دفعة فواتير A، 10:45 المطابقة، 11:00 التقرير". أنهِ الفترة قبل بدء عمل جديد.\n\n### الإنتاجية\nالإنتاجية = الناتج المفيد لكل وحدة زمن **دون التضحية بالجودة**. تتبع ثلاثة أرقام يومياً: السجلات المعالجة، والأخطاء المكتشفة، والوقت المستغرق. حسّن واحداً في كل مرة. السرعة دون دقة إنتاجية سلبية — فتكلفة إعادة العمل أكبر من التمهّل.\n\n> TIP: التدقيق بدفعات العشرة سجلات يمسك عادة 90% من الأخطاء لحظة حدوثها، بينما المستند المصدر لا يزال على مكتبك.',
          },
          terms: [
            { en: 'Attention to Detail', ar: 'الانتباه للتفاصيل', def: { en: 'The habit of noticing and caring about small differences and errors.', ar: 'عادة ملاحظة الفروق والأخطاء الصغيرة والاهتمام بها.' } },
            { en: 'Time Blocking', ar: 'تقسيم الوقت', def: { en: 'Planning work in fixed, dedicated time blocks.', ar: 'تخطيط العمل بفترات زمنية ثابتة مخصصة.' } },
            { en: 'Rework', ar: 'إعادة العمل', def: { en: 'Effort spent fixing something that was done wrong the first time.', ar: 'الجهد المستغرق لإصلاح شيء أُنجز خطأً من أول مرة.' } },
          ],
          examples: [
            {
              title: { en: 'Speed that cost more', ar: 'سرعة كلفت أكثر' },
              body: {
                en: 'Ali typed 200 records in 2 hours but made 14 errors; finding and fixing them took 3 hours with a colleague checking. Sara typed 160 records in 2.2 hours with 2 errors fixed in 10 minutes. Sara delivered accurate data sooner.',
                ar: 'كتب علي 200 سجل في ساعتين لكنه أخطأ في 14؛ استغرق إصلاحها 3 ساعات مع زميل للمراجعة. كتبت سارة 160 سجلاً في 2.2 ساعة بخطين أصلحتهما في 10 دقائق. سارة سلّمت بيانات دقيقة أسبق.',
              },
            },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'For your next study or work session, apply: no phone, one task only, and a chunk check every 10 items.',
              ar: 'في جلسة دراستك أو عملك القادمة، طبّق: بلا هاتف، ومهمة واحدة فقط، وتدقيق دفعة كل 10 عناصر.',
            },
            confirm: [
              { en: 'I worked one full session without switching tasks', ar: 'عملت جلسة كاملة دون التبديل بين المهام' },
              { en: 'I applied a chunk check every 10 items', ar: 'طبقت تدقيق دفعة كل 10 عناصر' },
              { en: 'I counted how many items I completed', ar: 'عددت عدد العناصر التي أنجزتها' },
            ],
            solution: {
              en: 'Note your records/hour number. Watching it over days — not pushing it in one heroic hour — is how professionals improve.',
              ar: 'سجّل رقم السجلات/ساعة عندك. مراقبته عبر الأيام — لا دفعه في ساعة بطولية — هو ما يحسّن المحترفين.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'You notice you make more errors in the last 30 minutes of a session. Best response?', ar: 'لاحظت أن أخطاءك تزيد في آخر 30 دقيقة من الجلسة. أفضل تصرف؟' },
              options: [
                { en: 'Take a short break and verify that segment more carefully', ar: 'خذ استراحة قصيرة ودقق تلك الفترة بعناية أكبر' },
                { en: 'Type faster to finish sooner', ar: 'اكتب أسرع لتنتهي أسرع' },
                { en: 'Skip verification because you are tired of it', ar: 'تجاهل التدقيق لأنك تعبت منه' },
                { en: 'Delete everything and start from zero', ar: 'احذف كل شيء وابدأ من الصفر' },
              ],
              answer: 0,
              explain: { en: 'Fatigue causes predictable errors; rest plus extra verification in the risky segment is the professional fix.', ar: 'الإرهاق يسبب أخطاء متوقعة؛ فالراحة مع تدقيق إضافي للفترة الخطرة هو الحل المهني.' },
            },
            {
              type: 'tf',
              q: { en: 'Typing faster is always more productive, even if errors increase.', ar: 'الكتابة الأسرع أكثر إنتاجية دائماً حتى لو زادت الأخطاء.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — rework makes error-heavy speed slower overall than careful steady pace.', ar: 'خطأ — إعادة العمل تجعل السرعة المليئة بالأخطاء أبطأ إجمالاً من الوتيرة الدقيقة المنتظمة.' },
            },
            {
              type: 'num',
              q: { en: 'Sara processed 160 records in 132 minutes. What is her records-per-hour rate (round to the nearest whole number)?', ar: 'عالجت سارة 160 سجلاً في 132 دقيقة. ما معدلها بالسجلات/ساعة (لأقرب عدد صحيح)؟' },
              answer: 73,
              tolerance: 0.5,
              explain: { en: '160 ÷ (132/60) = 160 ÷ 2.2 ≈ 73 records/hour.', ar: '‏160 ÷ (132/60) = 160 ÷ 2.2 ≈ 73 سجلاً في الساعة.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L1M5L2',
          title: { en: 'Confidentiality, Reporting and Quality Control', ar: 'السرية والتقارير وضبط الجودة' },
          minutes: 10,
          description: {
            en: 'Handle sensitive data responsibly, report professionally, and run simple quality control on your own work.',
            ar: 'تعامل مع البيانات الحساسة بمسؤولية، وأبلغ باحترافية، وطبّق ضبط جودة بسيطاً على عملك.',
          },
          objectives: [
            { en: 'Apply confidentiality rules for personal and business data', ar: 'تطبيق قواعد السرية للبيانات الشخصية وبيانات الأعمال' },
            { en: 'Write clear, honest problem reports', ar: 'كتابة تقارير مشكلات واضحة وصادقة' },
            { en: 'Run a personal quality control checklist', ar: 'تنفيذ قائمة تدقيق جودة شخصية' },
          ],
          body: {
            en: '### Confidentiality\nAs an entry specialist you see salaries, customer phones, contracts and health notes. Professional rules:\n- Access data only for your task; never browse records out of curiosity.\n- Never share, screenshot or forward company data to personal accounts.\n- Lock your screen when leaving the desk.\n- Report suspicious requests ("send me the full customer list by WhatsApp") to your manager immediately.\n\nTrust is the entire job: one leak can end a career.\n\n### Professional reporting\nWhen you hit a problem, report with 4 elements: **what** (the issue), **where** (record/document reference), **impact** (what it blocks), **need** (what you need from whom). Example: "3 scanned invoices (INV_2025-03-12_*, numbers 0231–0233) are unreadable; I cannot enter their amounts until Sales resends them — estimated 8,400 SAR pending."\n\n### Quality control (QC)\nQC is the routine that keeps your output trustworthy:\n- **Sample check**: verify 10% of each batch against sources.\n- **Totals check**: column sums and counts match control documents.\n- **Spot patterns**: same error 3 times = a process problem, not a personal one; raise it.\n\n> TIP: Reporting a problem early with numbers is not weakness — it is exactly what reliable employees do.',
            ar: '### السرية\nبصفتك أخصائي إدخال ترى الرواتب وهواتف العملاء والعقود والملاحظات الصحية. القواعد المهنية:\n- اطلع على البيانات لمهمتك فقط؛ ولا تتصفح السجلات بدافع الفضول أبداً.\n- لا تشارك أو تصوّر أو تحوّل بيانات الشركة إلى حساباتك الشخصية.\n- اقفل شاشتك عند مغادرة المكتب.\n- أبلغ مديرك فوراً عن أي طلب مشبوه ("أرسل لي قائمة العملاء كاملة على الواتساب").\n\nالثقة هي الوظيفة كلها: تسريب واحد قد ينهي مساراً مهنياً.\n\n### الإبلاغ الاحترافي\nعند مواجهة مشكلة أبلغ بأربعة عناصر: **ما** (المشكلة)، **أين** (مرجع السجل/المستند)، **الأثر** (ماذا تعرقِل)، **الاحتياج** (ماذا تحتاج ومن). مثال: "3 فواتير ممسوحة (INV_2025-03-12_، الأرقام 0231–0233) غير مقروءة؛ لا أستطيع إدخال مبالغها حتى يعيد المبيعات إرسالها — ما يقدر بـ8,400 ريال معلّق."\n\n### ضبط الجودة (QC)\nضبط الجودة هو الروتين الذي يبقي مخرجاتك موثوقة:\n- **فحص العينة**: طابق 10% من كل دفعة مع المصادر.\n- **فحص الإجماليات**: مطابقة مجاميع الأعمدة والأعداد مع مستندات الرقابة.\n- **رصد الأنماط**: نفس الخطأ 3 مرات = مشكلة في العملية لا في الشخص؛ ارفعها.\n\n> TIP: الإبلاغ المبكر عن مشكلة بالأرقام ليس ضعفاً — إنه بالضبط ما يفعله الموظفون الموثوقون.',
          },
          terms: [
            { en: 'Confidentiality', ar: 'السرية', def: { en: 'Keeping sensitive information protected and private.', ar: 'الحفاظ على المعلومات الحساسة محمية وخاصة.' } },
            { en: 'Quality Control', ar: 'ضبط الجودة', def: { en: 'Routine checks that keep output meeting the agreed standard.', ar: 'فحوصات منتظمة تُبقي المخرجات مطابقة للمعيار المتفق عليه.' } },
            { en: 'Escalation', ar: 'تصعيد المشكلة', def: { en: 'Raising a problem to the right person when it exceeds your authority.', ar: 'رفع المشكلة للشخص المناسب عندما تتجاوز صلاحياتك.' } },
          ],
          examples: [
            {
              title: { en: 'A confidentiality decision', ar: 'قرار سرية' },
              body: {
                en: 'A colleague asks you to "quickly print the salaries sheet for a meeting". You are not authorized. Correct action: politely decline and tell the manager — even between friends. This is what confidentiality training expects.',
                ar: 'يطلب زميل أن "تطبع بسرعة كشف الرواتب لاجتماع". لست مخولاً. التصرف الصحيح: اعتذار مهذب وإبلاغ المدير — حتى بين الأصدقاء. هذا ما تتوقعه تدريبات السرية.',
              },
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Write the 4-element report for this situation: 2 customer forms arrived without signature dates. Include what, where, impact, need (one or two sentences, English or Arabic).',
              ar: 'اكتب تقرير العناصر الأربعة لهذه الحالة: وصلت نموذجا عميل دون تاريخ توقيع. اذكر ما وأين والأثر والاحتياج (جملة أو جملتان).',
            },
            accept: ['missing', 'signature', 'forms', 'توقيع', 'نموذج'],
            solution: {
              en: 'Example: "2 customer forms (CUS-2025-0314-07, -08) are missing signature dates; I cannot complete their records until the sales rep reconfirms dates — 2 records on hold."',
              ar: 'مثال: "نموذجا عميل (CUS-2025-0314-07 و-08) ناقصا تاريخ التوقيع؛ لا أستطيع إكمال سجلهما حتى يؤكد مندوب المبيعات التاريخين — سجلان معلّقان."',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'A friend outside work asks for a screenshot of customer data "just to check". You should…', ar: 'طلب صديق خارج العمل صورة من بيانات العملاء "للتأكد فقط". يجب أن…' },
              options: [
                { en: 'Refuse — company data never leaves through personal channels', ar: 'ترفض — بيانات الشركة لا تخرج عبر قنوات شخصية أبداً' },
                { en: 'Send it but ask them to delete it later', ar: 'ترسلها وتطلب حذفها لاحقاً' },
                { en: 'Send only half the data', ar: 'ترسل نصف البيانات فقط' },
                { en: 'Send it if the friend also works in data', ar: 'ترسلها إن كان صديقك يعمل في البيانات' },
              ],
              answer: 0,
              explain: { en: 'Confidentiality has no "small" exceptions; personal-channel sharing is prohibited.', ar: 'السرية لا تعرف "استثناءات صغيرة"； ومشاركة القنوات الشخصية ممنوعة.' },
            },
            {
              type: 'fill',
              q: { en: 'Verifying 10% of every batch against sources is a ______ check.', ar: 'مطابقة 10% من كل دفعة مع المصادر هي فحص ______.', },
              accept: ['sample', 'spot', 'عينة'],
              explain: { en: 'A sample check — standard quality control in data entry.', ar: 'فحص عينة (Sample Check) — ضبط جودة قياسي في إدخال البيانات.' },
            },
            {
              type: 'tf',
              q: { en: 'If the same error appears 3 times, it usually signals a process problem worth reporting.', ar: 'إذا ظهر الخطأ نفسه 3 مرات فهو عادة إشارة لمشكلة عملية تستحق الإبلاغ.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: 'Repeated identical errors point to a cause in the process — form design, scan quality, training.', ar: 'الأخطاء المتكررة المتطابقة تشير لسبب في العملية — تصميم النموذج أو جودة المسح أو التدريب.' },
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
        q: { en: 'The entered value must match the true value exactly. This is the definition of…', ar: 'يجب أن تطابق القيمة المُدخلة القيمة الحقيقية تماماً. هذا تعريف…' },
        options: [ { en: 'Accuracy', ar: 'الدقة' }, { en: 'Productivity', ar: 'الإنتاجية' }, { en: 'Storage', ar: 'التخزين' }, { en: 'Transcription speed', ar: 'سرعة النسخ' } ],
        answer: 0,
        explain: { en: 'Accuracy = entered value equals real value.', ar: 'الدقة = تطابق القيمة المُدخلة مع القيمة الحقيقية.' },
      },
      {
        type: 'mcq',
        q: { en: 'Which tool should store a growing customer list that needs sorting and filtering?', ar: 'أي أداة يجب أن تخزن قائمة عملاء متنامية تحتاج ترتيباً وفلترة؟' },
        options: [ { en: 'Excel', ar: 'Excel' }, { en: 'Word', ar: 'Word' }, { en: 'PDF', ar: 'PDF' }, { en: 'A scanner', ar: 'ماسح ضوئي' } ],
        answer: 0,
        explain: { en: 'Excel is designed for records, sorting, filtering and formulas.', ar: '‏Excel مصمم للسجلات والترتيب والفلترة والصيغ.' },
      },
      {
        type: 'tf',
        q: { en: 'Filling missing prices with 0 keeps averages correct.', ar: 'تعبئة الأسعار الناقصة بصفر تبقي المتوسطات صحيحة.' },
        options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
        answer: 1,
        explain: { en: 'False — zero is a real value and corrupts averages; missing must stay marked as missing.', ar: 'خطأ — الصفر قيمة حقيقية ويفسد المتوسطات؛ ويجب أن يبقى "المفقود" معلماً كمفقود.' },
      },
      {
        type: 'mcq',
        q: { en: 'Same customer entered twice with identical phone 0501234567 is a…', ar: 'نفس العميل أُدخل مرتين برقم هاتف متطابق 0501234567 هذا…' },
        options: [ { en: 'Duplicate record', ar: 'سجل مكرر' }, { en: 'Missing value', ar: 'قيمة مفقودة' }, { en: 'Validation rule', ar: 'قاعدة تحقق' }, { en: 'Boolean field', ar: 'حقل منطقي' } ],
        answer: 0,
        explain: { en: 'A duplicate record — remove one and merge any unique info.', ar: 'سجل مكرر — أزل واحداً وادمج أي معلومة فريدة.' },
      },
      {
        type: 'fill',
        q: { en: 'Rules that reject impossible values WHILE typing are called ______.', ar: 'القواعد التي ترفض القيم المستحيلة أثناء الكتابة تسمى ______.', },
        accept: ['validation', 'التحقق المسبق'],
        explain: { en: 'Validation — e.g. list of allowed cities, non-negative quantity.', ar: 'التحقق المسبق (Validation) — مثل قائمة المدن المسموحة والكمية غير السالبة.' },
      },
      {
        type: 'mcq',
        q: { en: 'Which file name is correctly formatted for a professional archive?', ar: 'أي اسم ملف منسق بشكل صحيح للأرشفة المهنية؟' },
        options: [ { en: 'INV_2025-03-14_Jeddah_0031.pdf', ar: 'INV_2025-03-14_Jeddah_0031.pdf' }, { en: 'invoice new (2) FINAL.pdf', ar: 'invoice new (2) FINAL.pdf' }, { en: 'doc march.pdf', ar: 'doc march.pdf' }, { en: '14-3-25 inv.pdf', ar: '14-3-25 inv.pdf' } ],
        answer: 0,
        explain: { en: 'TYPE_DATE_SUBJECT_NUMBER in ISO date format — predictable and sortable.', ar: 'النوع_التاريخ_الموضوع_الرقم بصيغة تاريخ قياسية — متوقع وقابل للترتيب.' },
      },
      {
        type: 'num',
        q: { en: 'A batch has 60 records; QC requires verifying 10%. How many records do you verify?', ar: 'دفعة فيها 60 سجلاً وضبط الجودة يتطلب مطابقة 10%. كم سجلاً تطابق؟' },
        answer: 6,
        tolerance: 0.01,
        explain: { en: '60 × 10% = 6 records.', ar: '‏60 × 10% = 6 سجلات.' },
      },
      {
        type: 'mcq',
        q: { en: 'OCR read "14,800" as "14,500". What should the specialist do?', ar: 'قرأ OCR الرقم "14,800" كـ"14,500". ماذا يفعل الأخصائي؟' },
        options: [ { en: 'Verify against the original document and correct it', ar: 'يطابق مع المستند الأصل ويصححه' }, { en: 'Accept OCR output as final', ar: 'يقبل ناتج OCR كنهائي' }, { en: 'Delete the invoice', ar: 'يحذف الفاتورة' }, { en: 'Estimate the amount', ar: 'يقدّر المبلغ' } ],
        answer: 0,
        explain: { en: 'OCR output is a draft; verification against the source is mandatory, especially for amounts.', ar: 'ناتج OCR مسودة؛ والمطابقة مع المصدر إلزامية، خاصة للمبالغ.' },
      },
    ],
  },
};

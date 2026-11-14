// Level 8 — Python for Data Analysis. Bilingual (en/ar) curriculum data only.
// Single default export; no imports; no template literals.
export default {
  id: 'L8',
  num: 8,
  name: { en: 'Python for Data Analysis', ar: 'بايثون لتحليل البيانات' },
  goal: {
    en: 'Learn the programming fundamentals and the pandas workflow used in real data analysis.',
    ar: 'تعلّم أساسيات البرمجة وسير عمل pandas المستخدم في تحليل البيانات الحقيقي.',
  },
  icon: '🐍',
  modules: [
    {
      id: 'L8M1',
      name: { en: 'Python Fundamentals', ar: 'أساسيات بايثون' },
      lessons: [
        {
          id: 'L8M1L1',
          title: { en: 'Variables, Data Types and Strings', ar: 'المتغيرات وأنواع البيانات والنصوص' },
          minutes: 12,
          description: {
            en: 'Store values in variables, meet int, float, str and bool, build messages with f-strings, and clean text with string methods.',
            ar: 'خزّن القيم في المتغيرات، وتعرّف على int و float و str و bool، وابنِ الرسائل بـ f-strings، ونظّف النصوص بطرق السلاسل.',
          },
          objectives: [
            { en: 'Create variables and identify the type of each value.', ar: 'إنشاء المتغيرات وتحديد نوع كل قيمة.' },
            { en: 'Build output messages with f-strings.', ar: 'بناء رسائل المخرجات باستخدام f-strings.' },
            { en: 'Use strip, upper, lower, replace and len on text.', ar: 'استخدام strip و upper و lower و replace و len على النصوص.' },
          ],
          body: {
            en:
              '### What a program is, in one sentence\n\n' +
              'A program is a list of instructions that the computer runs from top to bottom. Python instructions look almost like plain English, which is exactly why analysts use it: instead of clicking through menus, you write once a short script that cleans, sums and charts a thousand files without a single typo.\n\n' +
              '### Variables: labeled boxes for values\n\n' +
              "A variable is a name that stores a value for later. You create one with the = sign: the name on the left, the value on the right. Names must start with a letter or underscore, contain no spaces, and are case-sensitive — sales and Sales are two different boxes.\n\n" +
              "```python\nbranch = 'Riyadh'      # str\nunits = 42             # int\nprice = 12500.5        # float\nis_open = True         # bool\nprint(type(price))     # <class 'float'>\n```\n\n" +
              '### The four data types you need first\n\n' +
              '- **int** — whole numbers: 42, -7, 180000\n' +
              "- **float** — decimal numbers: 12500.5, 0.02\n" +
              "- **str** — text inside quotes: 'Riyadh', 'AC-100'\n" +
              '- **bool** — truth values: True, False\n\n' +
              'The function type() reveals the type of any value. Numbers can be compared and added; text can be searched, cut and glued.\n\n' +
              '### f-strings: values inside text\n\n' +
              "An f-string builds a message by dropping variable values into text. Put the letter f before the quotes and wrap each variable in curly braces. The tag :.2f rounds a float to 2 decimals — perfect for SAR amounts.\n\n" +
              "```python\nbranch = 'Riyadh'\nsales = 12500.5\nprint(f'{branch} sold {sales:.2f} SAR')\n# Riyadh sold 12500.50 SAR\n```\n\n" +
              '### Useful string methods\n\n' +
              "```python\nname = '  al-noor trading  '\nprint(name.strip())           # 'al-noor trading'\nprint(name.strip().upper())   # 'AL-NOOR TRADING'\nprint('Riyadh'.replace('a', '@'))  # 'Riy@dh'\nprint(len('Jeddah'))          # 6\n```\n" +
              'strip() removes spaces from both ends (always apply it to imported text), upper() and lower() change the case, replace() swaps characters, and len() counts characters.\n\n' +
              '> TIP: print() is your window into the program. When something looks wrong, print the variable and look at it.',
            ar:
              '### ما هو البرنامج في جملة واحدة\n\n' +
              'البرنامج قائمة تعليمات يشغّلها الحاسوب من الأعلى إلى الأسفل. وتشبه تعليمات بايثون اللغة الإنجليزية السهلة، وهذا سبب تفضيل المحللين لها: بدلاً من النقر داخل القوائم، تكتب مرة واحدة نصاً قصيراً ينظف ويجمع ويرسم ألف ملف دون خطأ مطبعي واحد.\n\n' +
              '### المتغيرات: صناديق معنونة للقيم\n\n' +
              'المتغير اسم يخزن قيمة لاستخدامها لاحقاً. وتنشئه بعلامة =: الاسم على اليسار والقيمة على اليمين. يجب أن يبدأ الاسم بحرف أو شرطة سفلية، وأن يخلو من المسافات، وهو حساس لحالة الأحرف — فـ sales و Sales صندوقان مختلفان.\n\n' +
              "```python\nbranch = 'Riyadh'      # str\nunits = 42             # int\nprice = 12500.5        # float\nis_open = True         # bool\nprint(type(price))     # <class 'float'>\n```\n\n" +
              '### أنواع البيانات الأربعة الأولى\n\n' +
              '- **int** — الأعداد الصحيحة: 42 و -7 و 180000\n' +
              '- **float** — الأعداد العشرية: 12500.5 و 0.02\n' +
              "- **str** — النص داخل علامتي تنصيص: 'Riyadh' و 'AC-100'\n" +
              '- **bool** — قيم الصحة: True و False\n\n' +
              'وتكشف الدالة type() نوع أي قيمة. الأرقام تُقارن وتُجمع، والنصوص تُبحث وتُقطع وتُلصق.\n\n' +
              '### f-strings: القيم داخل النص\n\n' +
              'تبني f-string رسالة بحقن قيم المتغيرات داخل نص. ضع حرف f قبل علامتي التنصيص وأحط كل متغير بأقواس معقوفة. والوسم :.2f يقرّب العدد العشري إلى كسرين — مثالي لمبالغ الريال.\n\n' +
              "```python\nbranch = 'Riyadh'\nsales = 12500.5\nprint(f'{branch} sold {sales:.2f} SAR')\n# Riyadh sold 12500.50 SAR\n```\n\n" +
              '### طرق النصوص المفيدة\n\n' +
              "```python\nname = '  al-noor trading  '\nprint(name.strip())           # 'al-noor trading'\nprint(name.strip().upper())   # 'AL-NOOR TRADING'\nprint('Riyadh'.replace('a', '@'))  # 'Riy@dh'\nprint(len('Jeddah'))          # 6\n```\n" +
              'تزيل strip() المسافات من الطرفين (طبقها دائماً على النص المستورد)، وتغير upper() و lower() حالة الأحرف، وتستبدل replace() المحارف، وتعد len() المحارف.\n\n' +
              '> TIP: الدالة print() نافذتك على البرنامج؛ متى بدا شيء خاطئاً اطبع المتغير وانظر إليه.',
          },
          terms: [
            {
              en: 'Variable',
              ar: 'المتغير (Variable)',
              def: {
                en: 'A named box that stores one value for later use in the program.',
                ar: 'صندوق معنون يخزن قيمة واحدة لاستخدامها لاحقاً في البرنامج.',
              },
            },
            {
              en: 'int and float',
              ar: 'العدد الصحيح والعشري (int و float)',
              def: {
                en: 'The two numeric types: int for whole numbers, float for decimals.',
                ar: 'نوعا الأرقام: int للأعداد الصحيحة و float للأعداد العشرية.',
              },
            },
            {
              en: 'String (str)',
              ar: 'النص (str)',
              def: {
                en: 'Text inside quotes, with methods like strip, upper and replace.',
                ar: 'نص داخل علامتي تنصيص، وله طرق مثل strip و upper و replace.',
              },
            },
            {
              en: 'Boolean (bool)',
              ar: 'القيمة المنطقية (bool)',
              def: {
                en: 'A value that is either True or False; it drives conditions later.',
                ar: 'قيمة إما True أو False، وهي التي تحرك الشروط لاحقاً.',
              },
            },
            {
              en: 'f-string',
              ar: 'النص المنسق (f-string)',
              def: {
                en: 'A text that embeds variable values inside curly braces, like f{branch}: {sales:.2f} SAR.',
                ar: 'نص يدمج قيم المتغيرات داخل أقواس معقوفة، مثل f{branch}: {sales:.2f} SAR.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'A receipt line for Al-Noor', ar: 'سطر فاتورة لشركة النور' },
              body: {
                en:
                  "```python\nbranch = 'Riyadh'\nproduct = 'AC'\nunits = 3\nprice = 1450.0\ntotal = units * price\n\nprint(f'{branch} | {product} | {units} units | {total:.2f} SAR')\n# Riyadh | AC | 3 units | 4350.00 SAR\n```\n\n" +
                  'One line of arithmetic (units times price) and one f-string produce a formatted receipt row. Change the variables and the same two lines serve the next sale.',
                ar:
                  "```python\nbranch = 'Riyadh'\nproduct = 'AC'\nunits = 3\nprice = 1450.0\ntotal = units * price\n\nprint(f'{branch} | {product} | {units} units | {total:.2f} SAR')\n# Riyadh | AC | 3 units | 4350.00 SAR\n```\n\n" +
                  'سطر حساب واحد (الوحدات مضروبة بالسعر) وسطر f-string واحد ينتجان صف فاتورة منسقاً. غيّر المتغيرات فيخدم السطران البيع التالي.',
              },
            },
          ],
          steps: [
            { en: 'Open a new file variables.py and create the four variables from the body.', ar: 'افتح ملفاً جديداً variables.py وأنشئ المتغيرات الأربعة من الدرس.' },
            { en: 'Print type() of each variable and read the class names.', ar: 'اطبع type() لكل متغير واقرأ أسماء الأنواع.' },
            { en: 'Build the f-string message and print it.', ar: 'ابنِ رسالة f-string واطبعها.' },
            { en: "Test strip(), upper() and len() on '  Jeddah  ' and on 'Jeddah'.", ar: "اختبر strip() و upper() و len() على النص '  Jeddah  ' ثم 'Jeddah'." },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: "What does len('Jeddah') return? Enter the number.",
              ar: "ماذا تعيد len('Jeddah')؟ أدخل الرقم.",
            },
            answer: 6,
            tolerance: 0.01,
            solution: {
              en: 'len counts characters: J-e-d-d-a-h is 6 characters, so len returns 6.',
              ar: 'تعد len المحارف: كلمة Jeddah فيها 6 محارف فتعيد الدالة 6.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'What is the type of the value 3.14 in Python?', ar: 'ما نوع القيمة 3.14 في بايثون؟' },
              options: [
                { en: 'float', ar: 'float' },
                { en: 'int', ar: 'int' },
                { en: 'str', ar: 'str' },
                { en: 'bool', ar: 'bool' },
              ],
              answer: 0,
              explain: {
                en: 'A number with a decimal point is a float. Whole numbers like 42 are int.',
                ar: 'العدد الذي فيه فاصلة عشرية هو float؛ والأعداد الصحيحة مثل 42 هي int.',
              },
            },
            {
              type: 'tf',
              q: { en: 'In Python, a variable name can start with a number.', ar: 'في بايثون يمكن أن يبدأ اسم المتغير برقم.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 1,
              explain: {
                en: 'Names must start with a letter or underscore; 2sales is invalid, sales2 is fine.',
                ar: 'يجب أن يبدأ الاسم بحرف أو شرطة سفلية؛ فالاسم 2sales غير صالح و sales2 صحيح.',
              },
            },
            {
              type: 'fill',
              q: { en: 'Which built-in function displays a value on the screen? (One word, English.)', ar: 'أي دالة جاهزة تعرض قيمة على الشاشة؟ (كلمة واحدة بالإنجليزية.)' },
              accept: ['print'],
              explain: {
                en: 'print() writes the value (or the f-string) to the output — the analysts flashlight.',
                ar: 'الدالة print() تكتب القيمة أو النص المنسق إلى المخرجات — وهي مصباح المحلل.',
              },
            },
          ],
          xp: 25,
        },
        {
          id: 'L8M1L2',
          title: { en: 'Lists and Dictionaries', ar: 'القوائم والقواميس' },
          minutes: 12,
          description: {
            en: 'Store many values in lists, read them by index, and store labeled records in dictionaries — the shape of real business data.',
            ar: 'خزّن قيماً كثيرة في القوائم واقرأها بالفهرس، وخزّن السجلات الموسومة في القواميس — شكل بيانات الأعمال الحقيقية.',
          },
          objectives: [
            { en: 'Create lists, read elements by index, and append new items.', ar: 'إنشاء القوائم وقراءة العناصر بالفهرس وإضافة عناصر جديدة.' },
            { en: 'Read and update dictionary values by key.', ar: 'قراءة قيم القاموس وتحديثها بالمفتاح.' },
            { en: 'Recognize a list of dictionaries as the shape of real records.', ar: 'التعرّف على قائمة القواميس كشكل السجلات الحقيقية.' },
          ],
          body: {
            en:
              '### Lists: ordered collections\n\n' +
              "A **list** stores several values in order, inside square brackets. Python counts positions from **zero**: the first element is index 0, the second is 1. The method append() adds to the end, len() counts, and negative indexes count from the end, so -1 is the last element.\n\n" +
              "```python\nbranches = ['Riyadh', 'Jeddah', 'Dammam']\nprint(branches[0])     # Riyadh\nbranches.append('Abha')\nprint(len(branches))   # 4\nprint(branches[-1])    # Abha\n```\n\n" +
              '### Dictionaries: labeled values\n\n' +
              "A **dictionary** stores key → value pairs inside curly braces. You read a value by its key, not by position — perfect when every record has named fields. Add a new pair by assigning to a new key, and inspect the parts with .keys() and .values().\n\n" +
              "```python\nsale = {'branch': 'Riyadh', 'product': 'AC', 'amount': 3500}\nprint(sale['amount'])      # 3500\nsale['month'] = 'November'\nprint(sale.keys())         # dict_keys(['branch', 'product', 'amount', 'month'])\n```\n\n" +
              '### The real business pattern: a list of records\n\n' +
              "Real data usually arrives as a list of dictionaries — one dictionary per sale. This is exactly the shape pandas will later turn into a DataFrame, so learn to read it now:\n\n" +
              "```python\nsales = [\n    {'branch': 'Riyadh', 'amount': 3500},\n    {'branch': 'Jeddah', 'amount': 2100},\n    {'branch': 'Dammam', 'amount': 1800},\n]\n\ntotal = sum(s['amount'] for s in sales)\nprint(total)   # 7400\n```\n" +
              "The last line pulls the amount of every record and sums it (3500 + 2100 + 1800 = 7400). We study loops properly in the next lesson; for now, read it as: add the amount of every record.\n\n" +
              "> TIP: Choose a list when order matters (a queue of files). Choose a dictionary when a name makes the value findable, like sale['branch'].",
            ar:
              '### القوائم: مجموعات مرتبة\n\n' +
              '**القائمة list** تخزن عدة قيم بترتيبها داخل أقواس مربعة. وتعد بايثون المواضع من **الصفر**: العنصر الأول فهرسه 0 والثاني 1. وتضيف append() إلى النهاية، وتعد len() العناصر، وتعد الفهارس السالبة من النهاية فـ -1 هو العنصر الأخير.\n\n' +
              "```python\nbranches = ['Riyadh', 'Jeddah', 'Dammam']\nprint(branches[0])     # Riyadh\nbranches.append('Abha')\nprint(len(branches))   # 4\nprint(branches[-1])    # Abha\n```\n\n" +
              '### القواميس: قيم موسومة\n\n' +
              '**القاموس dictionary** يخزن أزواج مفتاح ← قيمة داخل أقواس معقوفة. وتقرأ القيمة بمفتاحها لا بموضعها — مثالي عندما يكون لكل سجل حقول مسماة. وتضيف زوجاً جديداً بالإسناد إلى مفتاح جديد، وتفحص الأجزاء بـ .keys() و .values().\n\n' +
              "```python\nsale = {'branch': 'Riyadh', 'product': 'AC', 'amount': 3500}\nprint(sale['amount'])      # 3500\nsale['month'] = 'November'\nprint(sale.keys())         # dict_keys(['branch', 'product', 'amount', 'month'])\n```\n\n" +
              '### النمط التجاري الحقيقي: قائمة سجلات\n\n' +
              'تصل البيانات الحقيقية غالباً كقائمة قواميس — قاموس لكل عملية بيع. وهذا هو الشكل الذي ستحوله pandas لاحقاً إلى DataFrame، فتعلم قراءته الآن:\n\n' +
              "```python\nsales = [\n    {'branch': 'Riyadh', 'amount': 3500},\n    {'branch': 'Jeddah', 'amount': 2100},\n    {'branch': 'Dammam', 'amount': 1800},\n]\n\ntotal = sum(s['amount'] for s in sales)\nprint(total)   # 7400\n```\n" +
              'يسحب السطر الأخير مبلغ كل سجل ويجمعه (3500 + 2100 + 1800 = 7400). وسندرس الحلقات جيداً في الدرس القادم؛ اقرأه الآن كالتالي: اجمع مبلغ كل سجل.\n\n' +
              "> TIP: اختر القائمة عندما يهم الترتيب (طابور ملفات)، والقاموس عندما يجعل الاسم القيمة قابلة للإيجاد مثل sale['branch'].",
          },
          terms: [
            {
              en: 'List',
              ar: 'القائمة (List)',
              def: {
                en: 'An ordered collection of values in square brackets, readable by position.',
                ar: 'مجموعة مرتبة من القيم داخل أقواس مربعة، تُقرأ بالموضع.',
              },
            },
            {
              en: 'Index (zero-based)',
              ar: 'الفهرس (يبدأ من الصفر)',
              def: {
                en: 'The position of an element: the first element has index 0, the last can be reached with -1.',
                ar: 'موضع العنصر: الأول فهرسه 0، والأخير يُصل إليه بـ -1.',
              },
            },
            {
              en: 'Dictionary',
              ar: 'القاموس (Dictionary)',
              def: {
                en: 'A collection of key → value pairs in curly braces, readable by key name.',
                ar: 'مجموعة أزواج مفتاح ← قيمة داخل أقواس معقوفة، تُقرأ باسم المفتاح.',
              },
            },
            {
              en: 'Key-Value Pair',
              ar: 'زوج المفتاح والقيمة',
              def: {
                en: 'One labeled slot in a dictionary, e.g. branch: Riyadh.',
                ar: 'خانة موسومة واحدة في القاموس، مثل branch: Riyadh.',
              },
            },
            {
              en: 'append()',
              ar: 'الطريقة append()',
              def: {
                en: 'The list method that adds one item at the end of the list.',
                ar: 'طريقة القائمة التي تضيف عنصراً واحداً إلى نهايته.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'One day of sales at Al-Noor', ar: 'يوم مبيعات في شركة النور' },
              body: {
                en:
                  "```python\nsales = [\n    {'branch': 'Riyadh', 'product': 'AC',    'amount': 3500},\n    {'branch': 'Jeddah', 'product': 'Fan',   'amount': 450},\n    {'branch': 'Dammam', 'product': 'Light', 'amount': 900},\n]\n\nprint(sales[0]['branch'])    # Riyadh\nprint(sales[2]['amount'])    # 900\nprint(sales[1]['product'])   # Fan\n```\n\n" +
                  "Read it inside-out: sales[2] is the third record, and ['amount'] pulls one field from it. This two-step reading is the same habit you will use on DataFrames.",
                ar:
                  "```python\nsales = [\n    {'branch': 'Riyadh', 'product': 'AC',    'amount': 3500},\n    {'branch': 'Jeddah', 'product': 'Fan',   'amount': 450},\n    {'branch': 'Dammam', 'product': 'Light', 'amount': 900},\n]\n\nprint(sales[0]['branch'])    # Riyadh\nprint(sales[2]['amount'])    # 900\nprint(sales[1]['product'])   # Fan\n```\n\n" +
                  "اقرأها من الداخل للخارج: sales[2] هو السجل الثالث، و ['amount'] يسحب حقلاً واحداً منه. وهذه العادة نفسها ستستخدمها مع DataFrames.",
              },
            },
          ],
          steps: [
            { en: 'Create the branches list and print branches[0] and branches[-1].', ar: 'أنشئ قائمة branches واطبع branches[0] و branches[-1].' },
            { en: 'Append Abha and print len(branches) to confirm 4.', ar: 'أضف Abha بـ append واطبع len(branches) للتأكد من 4.' },
            { en: "Create the sale dictionary and print sale['amount'].", ar: "أنشئ قاموس sale واطبع sale['amount']." },
            { en: "Add a month key and print sale.keys().", ar: 'أضف مفتاح month واطبع sale.keys().' },
            { en: 'Build the 3-record sales list and print the total 7400.', ar: 'ابنِ قائمة السجلات الثلاثة واطبع الإجمالي 7400.' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Which list method adds an item at the end of a list? (Method name only, English.)',
              ar: 'أي طريقة قائمة تضيف عنصراً إلى نهاية القائمة؟ (اسم الطريقة فقط بالإنجليزية.)',
            },
            accept: ['append'],
            solution: {
              en: 'append(). branches.append(Abha) grows the list from 3 to 4 items.',
              ar: 'append(). فالسطر branches.append(Abha) يكبر القائمة من 3 عناصر إلى 4.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: "branches = ['Riyadh', 'Jeddah', 'Dammam']. Which expression returns 'Riyadh'?", ar: "لدينا branches = ['Riyadh', 'Jeddah', 'Dammam']. أي تعبير يعيد 'Riyadh'؟" },
              options: [
                { en: 'branches[0]', ar: 'branches[0]' },
                { en: 'branches[1]', ar: 'branches[1]' },
                { en: 'branches[3]', ar: 'branches[3]' },
                { en: 'branches[-3]', ar: 'branches[-3]' },
              ],
              answer: 0,
              explain: {
                en: 'Lists count from zero, so the first element is index 0. branches[-3] is valid too and also returns Riyadh.',
                ar: 'تعد القائمة من الصفر فالعنصر الأول فهرسه 0؛ و branches[-3] صالح أيضاً ويعيد Riyadh.',
              },
            },
            {
              type: 'tf',
              q: { en: 'Dictionary keys must be unique inside one dictionary.', ar: 'يجب أن تكون مفاتيح القاموس فريدة داخل القاموس الواحد.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'A key identifies its value, so writing it twice would overwrite, not duplicate.',
                ar: 'المفتاح يعيّن قيمته، فكتابته مرتين تستبدل القيمة لا تكررها.',
              },
            },
            {
              type: 'num',
              q: { en: "sale = {'branch': 'Dammam', 'amount': 1800}. What is sale['amount'] + 200?", ar: "لدينا sale = {'branch': 'Dammam', 'amount': 1800}. ما ناتج sale['amount'] + 200؟" },
              answer: 2000,
              tolerance: 0.01,
              explain: {
                en: "sale['amount'] reads the value 1800, and 1800 + 200 = 2000.",
                ar: "يعيد sale['amount'] القيمة 1800، و 1800 + 200 = 2000.",
              },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L8M2',
      name: { en: 'Logic and Flow', ar: 'المنطق والتحكم في التدفق' },
      lessons: [
        {
          id: 'L8M2L1',
          title: { en: 'Conditions: if, elif, else', ar: 'الشروط: if و elif و else' },
          minutes: 12,
          description: {
            en: 'Ask questions with comparison operators and branch the program with if, elif and else — classify stock and grades like an analyst.',
            ar: 'اطرح الأسئلة بمعاملات المقارنة وتفرّع بالبرنامج عبر if و elif و else — وصنّف المخزون والدرجات كالمحلل.',
          },
          objectives: [
            { en: 'Compare values with ==, !=, >, <, >= and <=.', ar: 'مقارنة القيم بالمعاملات == و != و > و < و >= و <=.' },
            { en: 'Write if / elif / else branches with correct indentation.', ar: 'كتابة فروع if و elif و else بمسافات بادئة صحيحة.' },
            { en: 'Classify business values, like stock levels, into named categories.', ar: 'تصنيف القيم التجارية مثل مستويات المخزون إلى فئات مسماة.' },
          ],
          body: {
            en:
              '### Comparisons produce True or False\n\n' +
              "A condition is a question with a yes/no answer. Python answers it with a **bool**: stock == 0 is True when stock is exactly 0. The comparison operators are == (equal), != (not equal), > , < , >= , <= . Classic trap: one = assigns a value, two == compare values.\n\n" +
              '### if, elif, else\n\n' +
              "```python\nstock = 8\n\nif stock == 0:\n    print('Out of stock')\nelif stock < 10:\n    print('Low stock - reorder')\nelse:\n    print('In stock')\n# Low stock - reorder\n```\n" +
              "Python checks top to bottom and runs the FIRST branch whose condition is True, skipping the rest. The colon : opens the block, and the indented lines under it belong to that branch. Indentation (4 spaces) is not decoration in Python — it is the grammar.\n\n" +
              '### A classification example: grades\n\n' +
              "```python\nscore = 78\n\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'D'\n\nprint(grade)   # C\n```\n" +
              "Order matters. With score = 78, the 90 test fails, the 80 test fails, the 70 test passes and grade becomes C. If you had written >= 70 first, every score from 70 upward would stop there and never reach A.\n\n" +
              '### Combining conditions\n\n' +
              "Use and when both must hold, or when either is enough, and not to flip a result:\n\n" +
              "```python\nstock = 8\nprice = 1200\n\nif stock < 10 and price > 500:\n    print('Priority reorder')\n# Priority reorder\n```\n\n" +
              '> TIP: Conditions are how analysts classify data: stock levels, credit risk, VIP customers — every business rule is an if in disguise.',
            ar:
              '### المقارنات تنتج True أو False\n\n' +
              'الشرط سؤال جوابه نعم أو لا. ويجيب بايثون بقيمة **bool**: التعبير stock == 0 صادق عندما يكون stock يساوي 0 تماماً. ومعاملات المقارنة هي == (يساوي) و != (لا يساوي) و > و < و >= و <= . والفخ الكلاسيكي: علامة واحدة = تُسند قيمة، وعلامتان == تقارنان قيمتين.\n\n' +
              "### if و elif و else\n\n" +
              "```python\nstock = 8\n\nif stock == 0:\n    print('Out of stock')\nelif stock < 10:\n    print('Low stock - reorder')\nelse:\n    print('In stock')\n# Low stock - reorder\n```\n" +
              'يفحص بايثون من الأعلى إلى الأسفل وينفذ أول فرع يتحقق شرطه ثم يتجاوز البقية. والنقطتان : تفتحان الكتلة، والأسطر المسافة بادئة تحتها تعود لهذا الفرع. والمسافة البادئة (4 مسافات) ليست زينة في بايثون — إنها القواعد النحوية نفسها.\n\n' +
              '### مثال تصنيف: الدرجات\n\n' +
              "```python\nscore = 78\n\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'D'\n\nprint(grade)   # C\n```\n" +
              'الترتيب مهم. مع score = 78 يفشل اختبار 90، ثم يفشل اختبار 80، ثم ينجح اختبار 70 فتصبح grade بـ C. ولو كتبت >= 70 أولاً لوقف كل درجة من 70 صعوداً عند ذلك الفرع ولما وصلت إلى A أبداً.\n\n' +
              '### دمج الشروط\n\n' +
              'استخدم and عندما يجب تحقق الشرطين معاً، و or عندما يكفي أحدهما، و not لعكس النتيجة:\n\n' +
              "```python\nstock = 8\nprice = 1200\n\nif stock < 10 and price > 500:\n    print('Priority reorder')\n# Priority reorder\n```\n\n" +
              '> TIP: الشروط هي أسلوب المحلل في تصنيف البيانات: مستويات المخزون ومخاطر الائتمان وعملاء VIP — كل قاعدة عمل هي if متنكرة.',
          },
          terms: [
            {
              en: 'Condition',
              ar: 'الشرط (Condition)',
              def: {
                en: 'An expression that evaluates to True or False and decides which branch runs.',
                ar: 'تعبير ينتج True أو False ويقرر أي فرع يُنفذ.',
              },
            },
            {
              en: 'Comparison Operator',
              ar: 'معامل المقارنة',
              def: {
                en: 'Symbols like ==, !=, >, <, >=, <= that compare two values.',
                ar: 'رموز مثل == و != و > و < و >= و <= تقارن قيمتين.',
              },
            },
            {
              en: 'elif',
              ar: 'فرع elif',
              def: {
                en: 'An additional branch checked only when all previous conditions were False.',
                ar: 'فرع إضافي يفحص فقط عندما تكون كل الشروط السابقة خاطئة.',
              },
            },
            {
              en: 'Indentation',
              ar: 'المسافة البادئة',
              def: {
                en: 'The 4 spaces that mark which lines belong to an if block; Python reads them as structure.',
                ar: 'المسافات الأربع التي تحدد الأسطر التابعة لكتلة if؛ وبايثون يقرؤها كبنية للكود.',
              },
            },
            {
              en: 'Boolean (bool)',
              ar: 'القيمة المنطقية (bool)',
              def: {
                en: 'The True/False result type of every comparison.',
                ar: 'نوع نتيجة كل مقارنة: True أو False.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'Stock alerts for the Al-Noor warehouse', ar: 'تنبيهات المخزون لمستودع شركة النور' },
              body: {
                en:
                  "```python\nstock = 120\n\nif stock == 0:\n    status = 'Out of stock'\nelif stock < 10:\n    status = 'Low stock - reorder'\nelif stock > 100:\n    status = 'Overstocked - stop buying'\nelse:\n    status = 'Healthy'\n\nprint(status)   # Overstocked - stop buying\n```\n\n" +
                  'Same structure, more realistic: a warehouse wants the overstock branch too. Change stock to 8 and the second branch fires; to 55 and the else fires.',
                ar:
                  "```python\nstock = 120\n\nif stock == 0:\n    status = 'Out of stock'\nelif stock < 10:\n    status = 'Low stock - reorder'\nelif stock > 100:\n    status = 'Overstocked - stop buying'\nelse:\n    status = 'Healthy'\n\nprint(status)   # Overstocked - stop buying\n```\n\n" +
                  'البنية نفسها بواقعية أكبر: المستودع يحتاج فرع التكدس أيضاً. غيّر stock إلى 8 فيشتغل الفرع الثاني، وإلى 55 فيشتغل else.',
              },
            },
          ],
          steps: [
            { en: 'Write the stock example exactly as shown and run it; read which branch printed.', ar: 'اكتب مثال المخزون كما هو وشغّله؛ واقرأ أي فرع طُبع.' },
            { en: 'Change stock to 0 and run again; then to 25.', ar: 'غيّر stock إلى 0 وشغّل مرة أخرى؛ ثم إلى 25.' },
            { en: 'Add a fourth branch: elif stock > 100: with its own message.', ar: 'أضف فرعاً رابعاً: elif stock > 100: مع رسالته الخاصة.' },
            { en: 'Write the grade classifier and test scores 90, 85, 71 and 40.', ar: 'اكتب مصنف الدرجات واختبر الدرجات 90 و 85 و 71 و 40.' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'score = 85 runs through the grade classifier in the lesson. Which grade letter is assigned?',
              ar: 'القيمة score = 85 تمر عبر مصنف الدرجات في الدرس. أي حرف درجة يُسند؟',
            },
            accept: ['b'],
            solution: {
              en: 'B. The 90 test fails, the >= 80 test passes first for 85, so grade becomes B and the later elifs are skipped.',
              ar: 'B. يفشل اختبار 90، وينجح اختبار >= 80 أولاً للقيمة 85، فتصبح grade بـ B وتتجاوز بقية الفروع.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which operator compares two values for equality?', ar: 'أي معامل يقارن قيمتين من حيث التساوي؟' },
              options: [
                { en: '==', ar: '==' },
                { en: '=', ar: '=' },
                { en: '=>', ar: '=>' },
                { en: '++', ar: '++' },
              ],
              answer: 0,
              explain: {
                en: '== compares; = assigns. Writing stock = 0 inside an if is a syntax error in Python.',
                ar: 'علامة == للمقارنة و = للإسناد؛ وكتابة stock = 0 داخل if خطأ نحوي في بايثون.',
              },
            },
            {
              type: 'tf',
              q: { en: 'An elif branch is checked only when all the conditions before it were False.', ar: 'يُفحص فرع elif فقط عندما تكون كل الشروط قبله خاطئة.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'The chain stops at the first True branch; later elifs never run in that pass.',
                ar: 'تتوقف السلسلة عند أول فرع صادق؛ فلا تعمل elifs اللاحقة في تلك الدورة.',
              },
            },
            {
              type: 'mcq',
              q: { en: 'In the stock example, what prints when stock = 25?', ar: 'في مثال المخزون، ماذا يُطبع عندما stock = 25؟' },
              options: [
                { en: 'In stock', ar: 'In stock' },
                { en: 'Low stock - reorder', ar: 'Low stock - reorder' },
                { en: 'Out of stock', ar: 'Out of stock' },
                { en: 'Nothing at all', ar: 'لا شيء إطلاقاً' },
              ],
              answer: 0,
              explain: {
                en: '25 is not 0 and not under 10, so the else branch prints In stock.',
                ar: 'القيمة 25 ليست 0 ولا تحت 10، فيطبع فرع else الرسالة In stock.',
              },
            },
          ],
          xp: 25,
        },
        {
          id: 'L8M2L2',
          title: { en: 'Loops and Functions', ar: 'الحلقات والدوال' },
          minutes: 12,
          description: {
            en: 'Repeat work with for loops, accumulate totals, and wrap calculations into reusable def functions with return.',
            ar: 'أعد العمل بحلقات for، وجمّع الإجماليات، ولفّ الحسابات في دوال def قابلة لإعادة الاستخدام مع return.',
          },
          objectives: [
            { en: 'Iterate over a list with for and print each item.', ar: 'المرور على قائمة بـ for وطباعة كل عنصر.' },
            { en: 'Accumulate a running total inside a loop.', ar: 'تجميع إجمالي متزايد داخل حلقة.' },
            { en: 'Define functions with parameters and return values.', ar: 'تعريف الدوال بمعاملات وقيم مرجعة.' },
          ],
          body: {
            en:
              '### for loops: do it for every item\n\n' +
              "A **for loop** repeats a block once per item of a list — the workhorse of data work, because analysis usually means: do the same thing to every row.\n\n" +
              "```python\nbranches = ['Riyadh', 'Jeddah', 'Dammam']\nfor b in branches:\n    print(b)\n# Riyadh\n# Jeddah\n# Dammam\n```\n\n" +
              '### Accumulating a total\n\n' +
              "```python\nsales = [3500, 2100, 1800]\n\ntotal = 0\nfor s in sales:\n    total = total + s\n\nprint(total)   # 7400\n```\n" +
              "This is the accumulator pattern: start total at 0, and each pass of the loop adds one value. After the loop, total holds 7400. Python also offers the shortcut sum(sales), and you will meet both in real code.\n\n" +
              '### Functions: name a calculation, reuse it\n\n' +
              "A **function** is a named, reusable block. The keyword def gives it a name and **parameters** (its inputs), and **return** sends the result back to whoever called it.\n\n" +
              "```python\ndef commission(amount, rate):\n    return amount * rate\n\nprint(commission(3500, 0.02))    # 70.0\nprint(commission(12000, 0.05))   # 600.0\n```\n\n" +
              '### Why analysts need functions\n\n' +
              '1. **Reuse**: write the VAT calculation once, call it on every invoice.\n' +
              '2. **Testing**: check one small function against known numbers instead of a 300-line script.\n' +
              '3. **Reading**: a name like clean_amount tells the reader what happens, without the details.\n\n' +
              '> WARN: Lines inside a function must be indented under the def line, and return ends the function immediately — code after return in the same block never runs.',
            ar:
              '### حلقات for: نفّذه لكل عنصر\n\n' +
              '**حلقة for** تعيد كتلة مرة لكل عنصر من القائمة — وهي حصان العمل في البيانات، لأن التحليل عادة يعني: افعل الشيء نفسه مع كل صف.\n\n' +
              "```python\nbranches = ['Riyadh', 'Jeddah', 'Dammam']\nfor b in branches:\n    print(b)\n# Riyadh\n# Jeddah\n# Dammam\n```\n\n" +
              '### تجميع الإجمالي\n\n' +
              "```python\nsales = [3500, 2100, 1800]\n\ntotal = 0\nfor s in sales:\n    total = total + s\n\nprint(total)   # 7400\n```\n" +
              'هذا هو نمط المجمّع: ابدأ total بالصفر، وكل دورة من الحلقة تضيف قيمة. وبعد الحلقة يحمل total القيمة 7400. وتوفر بايثون أيضاً الاختصار sum(sales)، وستقابل الاثنين في الكود الحقيقي.\n\n' +
              '### الدوال: سمِّ الحساب وأعد استخدامه\n\n' +
              '**الدالة function** كتلة مسماة قابلة لإعادة الاستخدام. وتمنحها الكلمة def اسمها و**معاملاتها** (مدخلاتها)، وترسل **return** النتيجة إلى من استدعاها.\n\n' +
              "```python\ndef commission(amount, rate):\n    return amount * rate\n\nprint(commission(3500, 0.02))    # 70.0\nprint(commission(12000, 0.05))   # 600.0\n```\n\n" +
              '### لماذا يحتاجها المحلل\n\n' +
              '1. **إعادة الاستخدام**: اكتب حساب ضريبة القيمة المضافة مرة واطبقه على كل فاتورة.\n' +
              '2. **الاختبار**: افحص دالة صغيرة على أرقام معلومة بدل نص من 300 سطر.\n' +
              '3. **القراءة**: اسم مثل clean_amount يخبر القارئ بما يحدث دون التفاصيل.\n\n' +
              '> WARN: الأسطر داخل الدالة يجب أن تكون مسافة بادئة تحت سطر def، وتنهي return الدالة فوراً — فالكود الذي بعد return في الكتلة نفسها لا يعمل أبداً.',
          },
          terms: [
            {
              en: 'for Loop',
              ar: 'حلقة for',
              def: {
                en: 'A block that runs once per item of a list (or other iterable).',
                ar: 'كتلة تعمل مرة لكل عنصر من قائمة أو أي كائن قابل للتكرار.',
              },
            },
            {
              en: 'def',
              ar: 'الكلمة المفتاحية def',
              def: {
                en: 'The keyword that starts a function definition: def commission(amount, rate):',
                ar: 'الكلمة التي تبدأ تعريف الدالة: def commission(amount, rate):',
              },
            },
            {
              en: 'Parameter',
              ar: 'المعامل (Parameter)',
              def: {
                en: 'A named input of a function, filled by the caller with an argument.',
                ar: 'مدخل مسمى للدالة، يملؤه المستدعي بقيمة.',
              },
            },
            {
              en: 'return',
              ar: 'الكلمة المفتاحية return',
              def: {
                en: 'The statement that sends a value back from the function and ends it.',
                ar: 'الجملة التي ترد قيمة من الدالة وتنهيها.',
              },
            },
            {
              en: 'Accumulator',
              ar: 'المجمّع (Accumulator)',
              def: {
                en: 'A variable that starts at 0 and grows inside a loop, like total.',
                ar: 'متغير يبدأ بالصفر وينمو داخل الحلقة، مثل total.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'average() for the Al-Noor team', ar: 'دالة average لفريق شركة النور' },
              body: {
                en:
                  "```python\ndef average(numbers):\n    return sum(numbers) / len(numbers)\n\nprint(round(average([3500, 2100, 1800]), 2))   # 2466.67\nprint(round(average([520000, 430000, 290000]), 1))  # 413333.3\n```\n\n" +
                  'One small function serves any list of amounts. The first call averages three branch totals; the second averages the three branch sales of the November dashboard.',
                ar:
                  "```python\ndef average(numbers):\n    return sum(numbers) / len(numbers)\n\nprint(round(average([3500, 2100, 1800]), 2))   # 2466.67\nprint(round(average([520000, 430000, 290000]), 1))  # 413333.3\n```\n\n" +
                  'دالة صغيرة واحدة تخدم أي قائمة مبالغ. الاستدعاء الأول يوسطّ ثلاثة مجاميع فروع؛ والثاني يوسطّ مبيعات الفروع الثلاثة في لوحة نوفمبر.',
              },
            },
          ],
          steps: [
            { en: 'Run the branches loop and watch one line print per item.', ar: 'شغّل حلقة branches وراقب طباعة سطر لكل عنصر.' },
            { en: 'Build the accumulator and confirm it prints 7400.', ar: 'ابنِ المجمّع وتأكد من طباعة 7400.' },
            { en: 'Define commission(amount, rate) and print commission(3500, 0.02).', ar: 'عرّف commission(amount, rate) واطبع commission(3500, 0.02).' },
            { en: 'Define average(numbers) and print round(average([3500, 2100, 1800]), 2).', ar: 'عرّف average(numbers) واطبع round(average([3500, 2100, 1800]), 2).' },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'Using the commission function from the lesson, what does commission(12000, 0.05) return? Enter the number.',
              ar: 'باستخدام دالة commission من الدرس، ماذا تعيد commission(12000, 0.05)؟ أدخل الرقم.',
            },
            answer: 600,
            tolerance: 0.01,
            solution: {
              en: 'amount * rate = 12000 * 0.05 = 600.0. The function returns it to the caller.',
              ar: 'amount * rate = 12000 × 0.05 = 600.0، فتعيدها الدالة إلى المستدعي.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which keyword defines a function in Python?', ar: 'أي كلمة مفتاحية تعرّف دالة في بايثون؟' },
              options: [
                { en: 'def', ar: 'def' },
                { en: 'function', ar: 'function' },
                { en: 'define', ar: 'define' },
                { en: 'lambda', ar: 'lambda' },
              ],
              answer: 0,
              explain: {
                en: 'def name(parameters): starts the definition; lambda exists for tiny one-line functions only.',
                ar: 'الكلمة def name(parameters): تبدأ التعريف؛ و lambda موجودة للدوال الصغيرة بسطر واحد فقط.',
              },
            },
            {
              type: 'num',
              q: { en: 'sales = [3500, 2100, 1800]. After the accumulator loop, what does total hold?', ar: 'لدينا sales = [3500, 2100, 1800]. بعد حلقة المجمّع، ماذا يحمل total؟' },
              answer: 7400,
              tolerance: 0.01,
              explain: {
                en: 'The loop adds 3500, then 2100, then 1800: 3500 + 2100 + 1800 = 7400.',
                ar: 'تضيف الحلقة 3500 ثم 2100 ثم 1800: أي 3500 + 2100 + 1800 = 7400.',
              },
            },
            {
              type: 'tf',
              q: { en: 'return sends a value back to the code that called the function.', ar: 'ترد return قيمة إلى الكود الذي استدعى الدالة.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'That returned value is what makes functions reusable building blocks instead of printing side effects.',
                ar: 'هذه القيمة المرجعة هي ما يجعل الدوال وحدات بناء قابلة لإعادة الاستخدام بدل آثار طباعة.',
              },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L8M3',
      name: { en: 'Working with Files', ar: 'التعامل مع الملفات' },
      lessons: [
        {
          id: 'L8M3L1',
          title: { en: 'CSV and Excel Files', ar: 'ملفات CSV و Excel' },
          minutes: 10,
          description: {
            en: 'Understand what a CSV really is, load CSV and Excel files with pandas, and export results with to_csv.',
            ar: 'افهم ما هو ملف CSV حقاً، وحمل ملفات CSV و Excel عبر pandas، وصدّر النتائج بـ to_csv.',
          },
          objectives: [
            { en: 'Describe the structure of a CSV file.', ar: 'وصف بنية ملف CSV.' },
            { en: 'Load CSV and Excel files into DataFrames with pandas.', ar: 'تحميل ملفات CSV و Excel إلى DataFrames عبر pandas.' },
            { en: 'Export a DataFrame to CSV with index=False.', ar: 'تصدير DataFrame إلى CSV مع index=False.' },
          ],
          body: {
            en:
              '### What a CSV file is\n\n' +
              "A **CSV** (Comma-Separated Values) file stores a table as plain text: the first line holds the column names, and every following line is a row, with commas separating the values. It opens in Excel, in notepads, in pandas — which makes it the universal exchange format between systems. The POS of Al-Noor exports sales exactly like this:\n\n" +
              "```\nbranch,product,amount\nRiyadh,AC,3500\nJeddah,Fan,450\n```\n\n" +
              '### Reading it the pure-Python way (conceptually)\n\n' +
              "Python can open any file with open():\n\n" +
              "```python\nwith open('sales.csv', 'r') as f:\n    header = f.readline().strip()\n    print(header)   # branch,product,amount\n```\n" +
              'You will rarely need this for tables — but understanding that a CSV is just lines of text explains every encoding and delimiter problem you will ever meet.\n\n' +
              '### The pandas way: read_csv and read_excel\n\n' +
              '**pandas** is the analysis library you will use every day, imported as pd by convention:\n\n' +
              "```python\nimport pandas as pd\n\ndf = pd.read_csv('sales.csv')\nprint(df.head())\n\n# Excel files: pick the sheet by name\ndf2 = pd.read_excel('sales_report.xlsx', sheet_name='Sales')\n```\n" +
              'read_csv turns the text file into a DataFrame in one line; read_excel does the same for .xlsx and can target a named sheet. df.head() then prints the first rows so you can sanity-check the load before any analysis.\n\n' +
              '### Exporting results: to_csv\n\n' +
              "```python\ndf.to_csv('sales_copy.csv', index=False)\n```\n" +
              'index=False stops pandas from writing its row numbers as an extra column — a detail you will forget once and never again.\n\n' +
              "> TIP: Keep data files in the same folder as your script (or use the full path). Most FileNotFoundError crashes are just the file living somewhere else.",
            ar:
              '### ما هو ملف CSV\n\n' +
              'يخزن ملف **CSV** (Comma-Separated Values) الجدول كنص عادي: السطر الأول فيه أسماء الأعمدة، وكل سطر لاحق صف، والفواصل تفصل القيم. ويُفتح في Excel وفي المفكرة وفي pandas — وهذا يجعله صيغة التبادل العالمية بين الأنظمة. ونظام نقاط البيع لشركة النور يصدّر المبيعات هكذا بالضبط:\n\n' +
              "```\nbranch,product,amount\nRiyadh,AC,3500\nJeddah,Fan,450\n```\n\n" +
              '### قراءته بطريقة بايثون الخالصة (مفهومياً)\n\n' +
              'يستطيع بايثون فتح أي ملف بدالة open():\n\n' +
              "```python\nwith open('sales.csv', 'r') as f:\n    header = f.readline().strip()\n    print(header)   # branch,product,amount\n```\n" +
              'ولن تحتاج هذا كثيراً للجداول — لكن فهم أن CSV ليس إلا أسطراً من النص يفسر كل مشكلة ترميز وفواصل ستقابلها في حياتك.\n\n' +
              '### طريقة pandas: الدالتان read_csv و read_excel\n\n' +
              '**pandas** هي مكتبة التحليل التي ستستخدمها كل يوم، وتُستورد باسم pd بالعادة:\n\n' +
              "```python\nimport pandas as pd\n\ndf = pd.read_csv('sales.csv')\nprint(df.head())\n\n# ملفات Excel: اختر الورقة بالاسم\ndf2 = pd.read_excel('sales_report.xlsx', sheet_name='Sales')\n```\n" +
              'تحوّل read_csv الملف النصي إلى DataFrame في سطر واحد؛ وتبذل read_excel الشيء نفسه مع .xlsx وتستطيع استهداف ورقة بالاسم. ثم يطبع df.head() الصفوف الأولى لتتأكد من صحة التحميل قبل أي تحليل.\n\n' +
              '### تصدير النتائج: to_csv\n\n' +
              "```python\ndf.to_csv('sales_copy.csv', index=False)\n```\n" +
              'يمنع index=False الدالة من كتابة أرقام الصفوف كعمود إضافي — تفصيل ستنسيه مرة واحدة ولن تنساه بعد ذلك أبداً.\n\n' +
              '> TIP: أبقِ ملفات البيانات في مجلد نصك نفسه (أو استخدم المسار الكامل)؛ فمعظم أخطاء FileNotFoundError سببها أن الملف يسكن مكاناً آخر.',
          },
          terms: [
            {
              en: 'CSV',
              ar: 'ملف CSV',
              def: {
                en: 'Comma-Separated Values: a table stored as plain text lines, readable by every tool.',
                ar: 'قيم مفصولة بفواصل: جدول مخزن كأسطر نص عادي تقرأه كل الأدوات.',
              },
            },
            {
              en: 'pandas',
              ar: 'مكتبة pandas',
              def: {
                en: 'The Python library for tables and analysis, imported as pd by convention.',
                ar: 'مكتبة بايثون للجداول والتحليل، وتستورد باسم pd بالعادة.',
              },
            },
            {
              en: 'read_csv()',
              ar: 'الدالة read_csv()',
              def: {
                en: 'The pandas function that loads a CSV file into a DataFrame.',
                ar: 'دالة pandas التي تحمل ملف CSV إلى DataFrame.',
              },
            },
            {
              en: 'read_excel()',
              ar: 'الدالة read_excel()',
              def: {
                en: 'The pandas function that loads an .xlsx file, optionally from a named sheet.',
                ar: 'دالة pandas التي تحمل ملف .xlsx، ويمكنها استهداف ورقة بالاسم.',
              },
            },
            {
              en: 'to_csv()',
              ar: 'الدالة to_csv()',
              def: {
                en: 'The pandas method that writes a DataFrame to a CSV file, usually with index=False.',
                ar: 'طريقة pandas التي تكتب DataFrame إلى ملف CSV، وعادة مع index=False.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'The weekly routine at Al-Noor', ar: 'الروتين الأسبوعي في شركة النور' },
              body: {
                en:
                  "```python\nimport pandas as pd\n\ndf = pd.read_csv('sales_week.csv')\nprint(df.head())          # sanity check\nprint(df.shape)           # (rows, columns)\n\ntotals = df.groupby('branch')['amount'].sum()   # a preview of the next module\ntotals.to_csv('branch_totals.csv', index=False)\n```\n\n" +
                  'Load, check, summarize, export — the same four beats as every real analysis, at any scale.',
                ar:
                  "```python\nimport pandas as pd\n\ndf = pd.read_csv('sales_week.csv')\nprint(df.head())          # فحص أولي\nprint(df.shape)           # (الصفوف، الأعمدة)\n\ntotals = df.groupby('branch')['amount'].sum()   # معاينة من الوحدة القادمة\ntotals.to_csv('branch_totals.csv', index=False)\n\n```\n\n" +
                  'تحميل، فحص، تلخيص، تصدير — الإيقاعات الأربعة نفسها لكل تحليل حقيقي وبأي حجم.',
              },
            },
          ],
          steps: [
            { en: 'Save the POS export as sales.csv next to your script.', ar: 'احفظ تصدير نقاط البيع باسم sales.csv بجوار نصك البرمجي.' },
            { en: "Write import pandas as pd, then df = pd.read_csv('sales.csv').", ar: "اكتب import pandas as pd ثم df = pd.read_csv('sales.csv')." },
            { en: 'print(df.head()) and print(df.shape) to check rows and columns.', ar: 'اطبع print(df.head()) و print(df.shape) لفحص الصفوف والأعمدة.' },
            { en: "Read any .xlsx with pd.read_excel('file.xlsx', sheet_name='Sales').", ar: "اقرأ أي ملف .xlsx بالأمر pd.read_excel('file.xlsx', sheet_name='Sales')." },
            { en: "Save a result with df.to_csv('summary.csv', index=False).", ar: "احفظ النتيجة بالأمر df.to_csv('summary.csv', index=False)." },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Which pandas function reads an Excel .xlsx file? (Function name, English.)',
              ar: 'أي دالة pandas تقرأ ملف Excel بامتداد .xlsx؟ (اسم الدالة بالإنجليزية.)',
            },
            accept: ['read_excel', 'pd.read_excel'],
            solution: {
              en: 'read_excel(). It takes the file path and optionally sheet_name, and returns a DataFrame.',
              ar: 'read_excel(). تستقبل مسار الملف واختيارياً sheet_name وتعيد DataFrame.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'What do the letters CSV stand for?', ar: 'ماذا تعني الحروف CSV؟' },
              options: [
                { en: 'Comma-Separated Values', ar: 'قيم مفصولة بفواصل' },
                { en: 'Central Saved Variable', ar: 'متغير مركزي محفوظ' },
                { en: 'Column Sheet Version', ar: 'نسخة ورقة أعمدة' },
                { en: 'Calculated Sum Value', ar: 'قيمة مجموع محسوبة' },
              ],
              answer: 0,
              explain: {
                en: 'Comma-Separated Values: one header line, then one line per row, commas between values.',
                ar: 'قيم مفصولة بفواصل: سطر عناوين ثم سطر لكل صف وفاصلة بين كل قيمتين.',
              },
            },
            {
              type: 'tf',
              q: { en: 'pd.read_csv returns a DataFrame.', ar: 'الدالة pd.read_csv تعيد DataFrame.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'That DataFrame is the table object everything in the next module operates on.',
                ar: 'ذلك الـ DataFrame هو كائن الجدول الذي سيعمل عليه كل شيء في الوحدة القادمة.',
              },
            },
            {
              type: 'fill',
              q: { en: 'Which pandas method writes a DataFrame to a CSV file? (Method name, English.)', ar: 'أي طريقة pandas تكتب DataFrame إلى ملف CSV؟ (اسم الطريقة بالإنجليزية.)' },
              accept: ['to_csv'],
              explain: {
                en: 'to_csv(path, index=False) exports the table; index=False avoids the extra row-number column.',
                ar: 'الأمر to_csv(path, index=False) يصدّر الجدول؛ و index=False يمنع عمود أرقام الصفوف الزائد.',
              },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L8M4',
      name: { en: 'Pandas and NumPy', ar: 'pandas و NumPy' },
      lessons: [
        {
          id: 'L8M4L1',
          title: { en: 'Pandas: Series, DataFrame and First Analysis', ar: 'pandas: السلاسل و DataFrames وأول تحليل' },
          minutes: 14,
          description: {
            en: 'Meet the Series and the DataFrame, inspect tables with head, info and describe, select columns, filter rows, and touch NumPy underneath.',
            ar: 'تعرّف على Series و DataFrame، وافحص الجداول بـ head و info و describe، واختر الأعمدة ورشّح الصفوف، وتعرف على NumPy تحتها.',
          },
          objectives: [
            { en: 'Explain the anatomy of a DataFrame: index, columns, values.', ar: 'شرح بنية DataFrame: الفهرس والأعمدة والقيم.' },
            { en: 'Inspect a table with head(), info() and describe().', ar: 'فحص الجدول بالدوال head() و info() و describe().' },
            { en: 'Select columns and filter rows with boolean conditions.', ar: 'اختيار الأعمدة وترشيح الصفوف بالشروط المنطقية.' },
          ],
          body: {
            en:
              '### Series and DataFrame\n\n' +
              'In pandas a **Series** is one labeled column of data, and a **DataFrame** is the full table: rows with an **index**, columns with names. You can build one from a dictionary of lists — every key becomes a column:\n\n' +
              "```python\nimport pandas as pd\n\ndata = {\n    'branch':  ['Riyadh', 'Jeddah', 'Dammam', 'Riyadh'],\n    'product': ['AC', 'AC', 'Fan', 'Light'],\n    'amount':  [3500, 2100, 450, 1200],\n}\ndf = pd.DataFrame(data)\nprint(df)\n```\n" +
              'print(df) shows a small table with the index 0, 1, 2, 3 on the left and the three columns beside it. That grid — index plus columns plus values — is the anatomy of every DataFrame you will ever meet, from four rows to four million.\n\n' +
              '### First look: head, info, describe\n\n' +
              "```python\nprint(df.head())      # first 5 rows\nprint(df.info())      # column names, types, missing counts\nprint(df.describe())  # count, mean, std, min, max of numeric columns\n```\n" +
              'df.describe() on the amounts prints count 4, mean 1812.5, std about 1311.7, min 450 and max 3500 — a ten-second health check of any table.\n\n' +
              '### Selecting columns and filtering rows\n\n' +
              "```python\nprint(df['amount'])              # one column -> a Series\nprint(df[['branch', 'amount']])  # two columns -> a DataFrame\n\nbig = df[df['amount'] > 2000]    # boolean filter\nprint(big)\n```\n" +
              "The filter df[df['amount'] > 2000] keeps only the rows where the condition is True — here the Riyadh AC row (3500) and the Jeddah AC row (2100). Chain conditions with & and | , and wrap each condition in its own parentheses.\n\n" +
              '### NumPy: the engine underneath\n\n' +
              '**NumPy** (imported as np) provides fast arrays and the math pandas builds on. A NumPy array is like a list without labels, but with instant math on all elements at once:\n\n' +
              "```python\nimport numpy as np\n\nvalues = np.array([3500, 2100, 450, 1200])\nprint(values.mean())   # 1812.5\nprint(values.std())    # about 1136.0\nprint(np.sqrt(16))     # 4.0\n```\n\n" +
              'One subtlety worth knowing: NumPy computes the population std (about 1136.0), while the describe() above showed the sample std (about 1311.7). Same data, slightly different formula — just know which one your tool uses.\n\n' +
              '> TIP: mean is the average; std (standard deviation) says how spread out the values are. A small std means steady sales, a big std means erratic ones.',
            ar:
              '### السلسلة Series والإطار DataFrame\n\n' +
              'في pandas تكون **Series** عموداً واحداً موسوماً من البيانات، و **DataFrame** هو الجدول الكامل: صفوف بـ **فهرس index** وأعمدة بأسماء. ويمكنك بناؤه من قاموس قوائم — يصبح كل مفتاح عموداً:\n\n' +
              "```python\nimport pandas as pd\n\ndata = {\n    'branch':  ['Riyadh', 'Jeddah', 'Dammam', 'Riyadh'],\n    'product': ['AC', 'AC', 'Fan', 'Light'],\n    'amount':  [3500, 2100, 450, 1200],\n}\ndf = pd.DataFrame(data)\nprint(df)\n```\n" +
              'يعرض print(df) جدولاً صغيراً بالفهرس 0 و 1 و 2 و 3 على اليسار والأعمدة الثلاثة بجواره. هذه الشبكة — الفهرس مع الأعمدة والقيم — هي بنية كل DataFrame ستقابله، من أربعة صفوف إلى أربعة ملايين.\n\n' +
              '### النظرة الأولى: head و info و describe\n\n' +
              "```python\nprint(df.head())      # أول 5 صفوف\nprint(df.info())      # أسماء الأعمدة والأنواع وعدد الناقص\nprint(df.describe())  # العدد والمتوسط والانحراف والأصغر والأكبر\n```\n" +
              'يطبع df.describe() على المبالغ: العدد 4، والمتوسط 1812.5، والانحراف نحو 1311.7، والأصغر 450 والأكبر 3500 — فحص صحة من عشر ثوان لأي جدول.\n\n' +
              '### اختيار الأعمدة وترشيح الصفوف\n\n' +
              "```python\nprint(df['amount'])              # عمود واحد -> Series\nprint(df[['branch', 'amount']])  # عمودان -> DataFrame\n\nbig = df[df['amount'] > 2000]    # ترشيح منطقي\nprint(big)\n```\n" +
              "يُبقي المرشح df[df['amount'] > 2000] الصفوف التي شرطها صادق فقط — هنا صف مكيف الرياض (3500) وصف مكيف جدة (2100). واربط الشروط بـ & و | وأحط كل شرط بأقواسه الخاصة.\n\n" +
              '### NumPy: المحرك الذي تحته\n\n' +
              '**NumPy** (تستورد باسم np) توفر مصفوفات سريعة والرياضيات التي تبنى عليها pandas. والمصفوفة تشبه قائمة بلا تسميات، لكن بحساب فوري على كل العناصر دفعة واحدة:\n\n' +
              "```python\nimport numpy as np\n\nvalues = np.array([3500, 2100, 450, 1200])\nprint(values.mean())   # 1812.5\nprint(values.std())    # نحو 1136.0\nprint(np.sqrt(16))     # 4.0\n```\n\n" +
              'وتفصيلة تستحق المعرفة: تحسب NumPy الانحراف المجتمعي (نحو 1136.0)، بينما أظهر describe() أعلاه الانحراف النموذجي (نحو 1311.7). البيانات نفسها ومعادلة تختلف قليلاً — اعرف أيهما تستخدم أداتك.\n\n' +
              '> TIP: المتوسط mean هو معدل القيم؛ والانحراف المعياري std يخبرك بمدى تباعد القيم: انحراف صغير مبيعات مستقرة، وانحراف كبير مبيعات متقلبة.',
          },
          terms: [
            {
              en: 'Series',
              ar: 'السلسلة (Series)',
              def: {
                en: 'One labeled column of data in pandas.',
                ar: 'عمود واحد موسوم من البيانات في pandas.',
              },
            },
            {
              en: 'DataFrame',
              ar: 'الإطار DataFrame',
              def: {
                en: 'The pandas table object: rows with an index and named columns.',
                ar: 'كائن الجدول في pandas: صفوف بفهرس وأعمدة مسماة.',
              },
            },
            {
              en: 'Index',
              ar: 'الفهرس (Index)',
              def: {
                en: 'The row labels on the left of a DataFrame, 0, 1, 2 by default.',
                ar: 'تسميات الصفوف على يسار DataFrame، وهي 0 و 1 و 2 افتراضياً.',
              },
            },
            {
              en: 'NumPy',
              ar: 'المكتبة NumPy',
              def: {
                en: 'The fast array and math library underneath pandas, imported as np.',
                ar: 'مكتبة المصفوفات والرياضيات السريعة التي تحتها pandas، وتستورد باسم np.',
              },
            },
            {
              en: 'Boolean Mask',
              ar: 'القناع المنطقي (Boolean Mask)',
              def: {
                en: "A True/False column used to filter rows, as in df[df['amount'] > 2000].",
                ar: "عمود True/False يرشح الصفوف، كما في df[df['amount'] > 2000].",
              },
            },
          ],
          examples: [
            {
              title: { en: 'The ten-second health check', ar: 'فحص الصحة في عشر ثوان' },
              body: {
                en:
                  "```python\nprint(df['amount'].describe())\n# count       4.000000\n# mean     1812.500000\n# std     1311.725962\n# min      450.000000\n# 25%     1012.500000\n# 50%     1650.000000\n# 75%     2450.000000\n# max     3500.000000\n# Name: amount, dtype: float64\n```\n\n" +
                  'Read it like a doctor: count 4 means no missing values; min 450 to max 3500 is a sensible range for branch sales; the middle half of the sales sits between about 1012 and 2450 (the 25% and 75% rows); and std 1311.7 is large against mean 1812.5, meaning the values are quite spread out — one big sale (3500) and one small one (450).',
                ar:
                  "```python\nprint(df['amount'].describe())\n# count       4.000000\n# mean     1812.500000\n# std     1311.725962\n# min      450.000000\n# 25%     1012.500000\n# 50%     1650.000000\n# 75%     2450.000000\n# max     3500.000000\n# Name: amount, dtype: float64\n```\n\n" +
                  'اقرأه كطبيب: العدد 4 يعني لا قيم ناقصة؛ والمدى من 450 إلى 3500 منطقي لمبيعات الفروع؛ والنصف الأوسط من المبيعات يقع بين نحو 1012 و 2450 (سطرا 25% و 75%)؛ والانحراف 1311.7 كبير أمام المتوسط 1812.5، أي أن القيم متباعدة — عملية كبيرة (3500) وصغيرة (450).',
              },
            },
          ],
          steps: [
            { en: 'Build the 4-row DataFrame from the dictionary and print it.', ar: 'ابنِ الـ DataFrame بأربعة صفوف من القاموس واطبعه.' },
            { en: 'Run df.head(), df.info() and df.describe() and read each output.', ar: 'شغّل df.head() و df.info() و df.describe() واقرأ كل مخرجات.' },
            { en: "Select one column with df['amount'] and two with df[['branch', 'amount']].", ar: "اختر عموداً واحداً بـ df['amount'] وعمودين بـ df[['branch', 'amount']]." },
            { en: "Filter df[df['amount'] > 2000] and count the surviving rows (2).", ar: "رشّح df[df['amount'] > 2000] وعُدّ الصفوف الباقية (2)." },
            { en: 'Repeat mean and std with a NumPy array and compare the numbers.', ar: 'أعد حساب المتوسط والانحراف بمصفوفة NumPy وقارن الأرقام.' },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: "For amounts [3500, 2100, 450, 1200], what does df['amount'].mean() return? Enter the number.",
              ar: "للمبالغ [3500, 2100, 450, 1200]، ماذا تعيد df['amount'].mean()؟ أدخل الرقم.",
            },
            answer: 1812.5,
            tolerance: 0.01,
            solution: {
              en: 'The mean is the sum over the count: (3500 + 2100 + 450 + 1200) / 4 = 7250 / 4 = 1812.5.',
              ar: 'المتوسط هو المجموع مقسوماً على العدد: (3500 + 2100 + 450 + 1200) ÷ 4 = 7250 ÷ 4 = 1812.5.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'In pandas, one labeled column of data is called a ...', ar: 'في pandas، عمود بيانات واحد موسوم يسمى ...' },
              options: [
                { en: 'Series', ar: 'Series' },
                { en: 'DataFrame', ar: 'DataFrame' },
                { en: 'List', ar: 'List' },
                { en: 'Dictionary', ar: 'Dictionary' },
              ],
              answer: 0,
              explain: {
                en: 'A Series is one column with labels; a DataFrame is the whole table of Series.',
                ar: 'الـ Series عمود واحد بتسميات؛ والـ DataFrame هو الجدول الكامل من السلاسل.',
              },
            },
            {
              type: 'tf',
              q: { en: 'df.head() shows the first 5 rows of the DataFrame by default.', ar: 'الدالة df.head() تعرض أول 5 صفوف من DataFrame افتراضياً.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'head(5) is the default; pass another number, like df.head(10), for more rows.',
                ar: 'الافتراضي head(5)؛ ومرر رقماً آخر مثل df.head(10) لمزيد من الصفوف.',
              },
            },
            {
              type: 'mcq',
              q: { en: "What does df[df['amount'] > 2000] return?", ar: "ماذا يعيد df[df['amount'] > 2000]؟" },
              options: [
                { en: 'Only the rows where the condition is True', ar: 'الصفوف التي شرطها صادق فقط' },
                { en: 'A new column with the threshold', ar: 'عموداً جديداً بالحد' },
                { en: 'The column names as a list', ar: 'أسماء الأعمدة كقائمة' },
                { en: 'An error, always', ar: 'خطأ دائماً' },
              ],
              answer: 0,
              explain: {
                en: 'The boolean mask keeps the matching rows and drops the rest — here two rows.',
                ar: 'القناع المنطقي يبقي الصفوف المطابقة ويسقط الباقي — وهنا صفان.',
              },
            },
          ],
          xp: 25,
        },
        {
          id: 'L8M4L2',
          title: { en: 'Pandas: Cleaning and Grouping', ar: 'التنظيف والتجميع في pandas' },
          minutes: 14,
          description: {
            en: 'Find missing values and duplicates, clean with dropna, fillna and drop_duplicates, then summarize with groupby, agg and sort_values.',
            ar: 'اعثر على القيم الناقصة والمكررات، ونظّف بـ dropna و fillna و drop_duplicates، ثم لخّص بـ groupby و agg و sort_values.',
          },
          objectives: [
            { en: 'Diagnose missing values with isnull().sum().', ar: 'تشخيص القيم الناقصة بـ isnull().sum().' },
            { en: 'Clean duplicates and missing values in a deliberate order.', ar: 'تنظيف المكررات والقيم الناقصة بترتيب مدروس.' },
            { en: 'Summarize per group with groupby and agg, and rank with sort_values.', ar: 'التلخيص لكل مجموعة بـ groupby و agg والترتيب بـ sort_values.' },
          ],
          body: {
            en:
              '### Finding the dirt first\n\n' +
              'Real tables arrive with missing values (shown as NaN) and duplicated rows. Always diagnose before treating:\n\n' +
              "```python\nimport pandas as pd\n\ndf = pd.DataFrame({\n    'branch':  ['Riyadh', 'Jeddah', 'Dammam', 'Jeddah', 'Riyadh', 'Jeddah'],\n    'product': ['AC', 'AC', 'Fan', 'Light', 'AC', 'Light'],\n    'amount':  [3500, 2100, 450, None, 3500, 900],\n})\n\nprint(df.isnull().sum())   # amount -> 1 missing\n```\n" +
              'isnull() marks missing cells as True; summing per column counts them. Row 3 has no amount, and row 4 repeats row 0 exactly (same branch, product and amount) — the classic double entry that exports produce.\n\n' +
              '### Cleaning: drop duplicates, fill sensibly\n\n' +
              "```python\ndf = df.drop_duplicates()                 # row 4 removed\ndf['amount'] = df['amount'].fillna(df['amount'].mean())\nprint(df)\n```\n" +
              'Order matters. drop_duplicates() runs FIRST, so the mean is computed on the four honest values (3500, 2100, 450, 900 → mean 1737.5) and not on a duplicated one. fillna() then replaces NaN with that mean. dropna() would instead delete the row entirely — choose fillna when the row matters (a sale happened, only its amount is unknown), dropna when it does not.\n\n' +
              '### Grouping: groupby + agg\n\n' +
              "```python\nby_branch = df.groupby('branch')['amount'].agg(['sum', 'mean', 'count'])\nprint(by_branch)\n```\n" +
              'The cleaned rows carry these amounts: Riyadh 3500; Jeddah 2100, 1737.5, 900; Dammam 450. So the grouped table shows Jeddah sum 4737.5 (mean 1579.2, count 3), Riyadh sum 3500.0 (count 1), Dammam sum 450.0 (count 1). groupby splits the rows by the key column, and agg computes one statistic per group.\n\n' +
              '### Ranking: sort_values\n\n' +
              "```python\nsums = df.groupby('branch')['amount'].sum()\nprint(sums.sort_values(ascending=False))\n# Jeddah    4737.5\n# Riyadh    3500.0\n# Dammam     450.0\n```\n\n" +
              '> WARN: Filling with the mean is a decision, not a law. For accounting totals, filling a missing sale with 0 may be more honest than inventing 1737.5 — always state what you filled and why.',
            ar:
              '### اعثر على الاتساخ أولاً\n\n' +
              'تصل الجداول الحقيقية بقيم ناقصة (تظهر NaN) وصفوف مكررة. وشخّص دائماً قبل العلاج:\n\n' +
              "```python\nimport pandas as pd\n\ndf = pd.DataFrame({\n    'branch':  ['Riyadh', 'Jeddah', 'Dammam', 'Jeddah', 'Riyadh', 'Jeddah'],\n    'product': ['AC', 'AC', 'Fan', 'Light', 'AC', 'Light'],\n    'amount':  [3500, 2100, 450, None, 3500, 900],\n})\n\nprint(df.isnull().sum())   # amount -> قيمة ناقصة واحدة\n```\n" +
              'توسم isnull() الخلايا الناقصة بقيمة True؛ وجمعها لكل عمود يعدّها. الصف الثالث بلا مبلغ، والصف الرابع يكرر الصف الأول تماماً (الفرع والمنتج والمبلغ نفسها) — وهي القيد المزدوج الكلاسيكي الذي تنتجه التصديرات.\n\n' +
              '### التنظيف: احذف المكرر واملأ بحكمة\n\n' +
              "```python\ndf = df.drop_duplicates()                 # أُزيل الصف الرابع\ndf['amount'] = df['amount'].fillna(df['amount'].mean())\nprint(df)\n```\n" +
              'الترتيب مهم. تعمل drop_duplicates() أولاً، فيُحسب المتوسط على القيم الأربع الصادقة (3500 و 2100 و 450 و 900 ← المتوسط 1737.5) لا على قيمة مكررة. ثم تستبدل fillna() قيمة NaN بهذا المتوسط. ولو استخدمت dropna() لحذفت الصف كله — اختر fillna عندما يهم الصف (حدثت عملية والمبلغ مجهول فقط)، و dropna عندما لا يهم.\n\n' +
              '### التجميع: groupby مع agg\n\n' +
              "```python\nby_branch = df.groupby('branch')['amount'].agg(['sum', 'mean', 'count'])\nprint(by_branch)\n```\n" +
              'تحمل الصفوف المنظفة هذه المبالغ: الرياض 3500؛ وجدة 2100 و 1737.5 و 900؛ والدمام 450. فيعرض الجدول المجمع: مجموع جدة 4737.5 (متوسط 1579.2 بعدد 3)، ومجموع الرياض 3500.0 (عدد 1)، ومجموع الدمام 450.0 (عدد 1). تفرّق groupby الصفوف حسب عمود المفتاح، وتحسب agg إحصاءة لكل مجموعة.\n\n' +
              '### الترتيب: sort_values\n\n' +
              "```python\nsums = df.groupby('branch')['amount'].sum()\nprint(sums.sort_values(ascending=False))\n# Jeddah    4737.5\n# Riyadh    3500.0\n# Dammam     450.0\n```\n\n" +
              '> WARN: ملء القيمة بالمتوسط قرار وليس قانوناً. لمجاميع المحاسبة قد يكون ملء البيع الناقص بصفر أكثر صدقاً من ابتكار قيمة مثل 1737.5 — واذكر دائماً بماذا ملأت ولماذا.',
          },
          terms: [
            {
              en: 'NaN / Missing Value',
              ar: 'القيمة الناقصة (NaN)',
              def: {
                en: 'An empty cell, produced by None or blanks; counted with isnull().sum().',
                ar: 'خلية فارغة تنتج عن None أو فراغات، وتعد بـ isnull().sum().',
              },
            },
            {
              en: 'fillna()',
              ar: 'الطريقة fillna()',
              def: {
                en: 'Replaces missing values with a chosen value, such as the column mean.',
                ar: 'تستبدل القيم الناقصة بقيمة مختارة مثل متوسط العمود.',
              },
            },
            {
              en: 'dropna()',
              ar: 'الطريقة dropna()',
              def: {
                en: 'Deletes the rows (or columns) that contain missing values.',
                ar: 'تحذف الصفوف أو الأعمدة التي فيها قيم ناقصة.',
              },
            },
            {
              en: 'drop_duplicates()',
              ar: 'الطريقة drop_duplicates()',
              def: {
                en: 'Removes rows identical to an earlier row.',
                ar: 'تحذف الصفوف المطابقة تماماً لصف سابق.',
              },
            },
            {
              en: 'groupby()',
              ar: 'الطريقة groupby()',
              def: {
                en: "Splits rows by a key column, ready for agg statistics, as in groupby('branch').",
                ar: "تفرّق الصفوف حسب عمود مفتاح استعداداً لإحصاءات agg، كما في groupby('branch').",
              },
            },
          ],
          examples: [
            {
              title: { en: 'The full cleaning recipe', ar: 'وصفة التنظيف الكاملة' },
              body: {
                en:
                  "```python\ndf = df.drop_duplicates()\nprint(df['amount'].mean())    # 1737.5 (on the 4 known values)\ndf['amount'] = df['amount'].fillna(df['amount'].mean())\nprint(df['amount'].sum())     # 8687.5\nprint(df['amount'].count())   # 5\n```\n\n" +
                  'Six raw rows became five clean ones. The printed mean 1737.5 was computed before filling, then used to fill; the final total 8687.5 covers all five rows, and count confirms no NaN remains.',
                ar:
                  "```python\ndf = df.drop_duplicates()\nprint(df['amount'].mean())    # 1737.5 (على القيم الأربع المعلومة)\ndf['amount'] = df['amount'].fillna(df['amount'].mean())\nprint(df['amount'].sum())     # 8687.5\nprint(df['amount'].count())   # 5\n```\n\n" +
                  'تحولت ستة صفوف خام إلى خمسة نظيفة. طُبع المتوسط 1737.5 محسوباً قبل الملء ثم استخدم للملء؛ والإجمالي النهائي 8687.5 يغطي الصفوف الخمسة، ويؤكد count بقاء بلا NaN.',
              },
            },
          ],
          steps: [
            { en: 'Build the 6-row table with None and a duplicate row.', ar: 'ابنِ الجدول بستة صفوف فيه None وصف مكرر.' },
            { en: 'Print df.isnull().sum() and locate the dirty column.', ar: 'اطبع df.isnull().sum() وحدد العمود المتسخ.' },
            { en: 'Run df = df.drop_duplicates() and check the row count is now 5.', ar: 'شغّل df = df.drop_duplicates() وتأكد أن العدد صار 5.' },
            { en: "Fill missing amounts with df['amount'].fillna(df['amount'].mean()).", ar: "املأ المبالغ الناقصة بـ df['amount'].fillna(df['amount'].mean())." },
            { en: "Group with df.groupby('branch')['amount'].agg(['sum', 'mean', 'count']) and sort the sums.", ar: "جمّع بـ df.groupby('branch')['amount'].agg(['sum', 'mean', 'count']) ورتّب المجاميع." },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: "After drop_duplicates() and fillna(mean), the cleaned table has amounts 3500, 2100, 450, 1737.5, 900. What does df['amount'].sum() return? Enter the number.",
              ar: "بعد drop_duplicates() و fillna(المتوسط)، يحمل الجدول المنظف المبالغ 3500 و 2100 و 450 و 1737.5 و 900. ماذا تعيد df['amount'].sum()؟ أدخل الرقم.",
            },
            answer: 8687.5,
            tolerance: 0.01,
            solution: {
              en: '3500 + 2100 + 450 + 1737.5 + 900 = 8687.5.',
              ar: '3500 + 2100 + 450 + 1737.5 + 900 = 8687.5.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'A row is a real sale but its amount cell is empty. Which method keeps the row?', ar: 'الصف عملية بيع حقيقية لكن خانة مبلغه فارغة. أي طريقة تبقي الصف؟' },
              options: [
                { en: 'fillna()', ar: 'fillna()' },
                { en: 'dropna()', ar: 'dropna()' },
                { en: 'drop_duplicates()', ar: 'drop_duplicates()' },
                { en: 'sort_values()', ar: 'sort_values()' },
              ],
              answer: 0,
              explain: {
                en: 'fillna keeps the row and replaces the empty cell; dropna would delete the whole sale.',
                ar: 'تحفظ fillna الصف وتستبدل الخانة الفارغة؛ أما dropna فتحذف البيع كله.',
              },
            },
            {
              type: 'tf',
              q: { en: 'drop_duplicates() removes rows that are identical to an earlier row.', ar: 'الطريقة drop_duplicates() تحذف الصفوف المطابقة تماماً لصف سابق.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'It keeps the first occurrence and drops later exact copies — the classic export double entry.',
                ar: 'تحفظ أول ظهور وتسقط النسخ المطابقة اللاحقة — وهو القيد المزدوج الكلاسيكي للتصديرات.',
              },
            },
            {
              type: 'num',
              q: { en: "The cleaned Jeddah rows have amounts 2100, 1737.5 and 900. What does df[df['branch'] == 'Jeddah']['amount'].sum() return?", ar: "تحمل صفوف جدة المنظفة المبالغ 2100 و 1737.5 و 900. ماذا تعيد df[df['branch'] == 'Jeddah']['amount'].sum()؟" },
              answer: 4737.5,
              tolerance: 0.01,
              explain: {
                en: '2100 + 1737.5 + 900 = 4737.5.',
                ar: '2100 + 1737.5 + 900 = 4737.5.',
              },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L8M5',
      name: { en: 'Visualization and Mini-Project', ar: 'التصور والمشروع المصغر' },
      lessons: [
        {
          id: 'L8M5L1',
          title: { en: 'Matplotlib: Your First Charts', ar: 'matplotlib: رسومك الأولى' },
          minutes: 12,
          description: {
            en: 'Draw bar, line and histogram charts with matplotlib, add titles and axis labels, and know when a chart beats a table.',
            ar: 'ارسم الأعمدة والخط والمدرج التكراري بـ matplotlib، وأضف العناوين وتسميات المحاور، واعرف متى يتفوق الرسم على الجدول.',
          },
          objectives: [
            { en: 'Draw bar, line and histogram charts with pyplot.', ar: 'رسم رسوم الأعمدة والخط والمدرج التكراري عبر pyplot.' },
            { en: 'Add titles and axis labels to every chart.', ar: 'إضافة العناوين وتسميات المحاور لكل رسم.' },
            { en: 'Decide when a chart communicates better than a table.', ar: 'الحكم على متى يوصل الرسم أفضل من الجدول.' },
          ],
          body: {
            en:
              '### Why charts beat tables\n\n' +
              'A table of 12 monthly numbers forces the reader to compute the trend in her head; a line chart shows it in one glance. Charts answer shape questions — up or down, peak where, outlier which — while tables answer lookup questions. Professional reports do both: the chart tells the story, the table keeps the audit.\n\n' +
              '### The pyplot pattern\n\n' +
              'Matplotlib is the classic plotting library, and pyplot inside it is the drawing interface, imported as plt by convention. The pattern never changes: give it the data, add labels, show it.\n\n' +
              "```python\nimport matplotlib.pyplot as plt\n\nbranches = ['Riyadh', 'Jeddah', 'Dammam']\nsales = [520000, 430000, 290000]\n\nplt.bar(branches, sales, color='steelblue')\nplt.title('Al-Noor Sales by Branch - November')\nplt.xlabel('Branch')\nplt.ylabel('Sales (SAR)')\nplt.show()\n```\n\n" +
              '### Three charts, three questions\n\n' +
              '- **Bar** (plt.bar): compare categories — branches, products.\n' +
              "- **Line** (plt.plot): trend over time; marker='o' dots every point.\n" +
              '- **Histogram** (plt.hist): the distribution of one numeric column — how many sales fall in each price band.\n\n' +
              "```python\nmonths = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']\nsales = [890000, 940000, 1010000, 960000, 1050000, 1240000]\n\nplt.plot(months, sales, marker='o')\nplt.title('Al-Noor Monthly Sales (SAR)')\nplt.ylabel('Sales (SAR)')\nplt.show()\n```\n" +
              'The line answers instantly: sales climb overall, dip in September, then jump in November.\n\n' +
              '> TIP: A chart without a title and axis labels is unfinished work. plt.title, plt.xlabel and plt.ylabel take one line each and make the chart self-explanatory. Save a copy with plt.savefig(chart.png) when you need the file.',
            ar:
              '### لماذا يتفوق الرسم على الجدول\n\n' +
              'جدول من 12 رقماً شهرياً يرغم القارئ على حساب الاتجاه في رأسه؛ والرسم الخطي يبيّنه في نظرة. الرسوم تجيب عن أسئلة الشكل — صعود أم هبوط، وأين القمة، وأي قيمة شاذة — بينما الجداول تجيب عن أسئلة البحث. والتقارير المهنية تجمع الاثنين: الرسم يحكي القصة والجدول يحفظ التدقيق.\n\n' +
              '### نمط pyplot\n\n' +
              'Matplotlib هي مكتبة الرسم الكلاسيكية، و pyplot داخلها هي واجهة الرسم وتستورد باسم plt بالعادة. والنمط لا يتغير: مرر البيانات، وأضف التسميات، ثم اعرض.\n\n' +
              "```python\nimport matplotlib.pyplot as plt\n\nbranches = ['Riyadh', 'Jeddah', 'Dammam']\nsales = [520000, 430000, 290000]\n\nplt.bar(branches, sales, color='steelblue')\nplt.title('Al-Noor Sales by Branch - November')\nplt.xlabel('Branch')\nplt.ylabel('Sales (SAR)')\nplt.show()\n```\n\n" +
              '### ثلاثة رسوم، ثلاثة أسئلة\n\n' +
              '- **الأعمدة** (plt.bar): مقارنة الفئات — الفروع والمنتجات.\n' +
              "- **الخط** (plt.plot): الاتجاه عبر الزمن؛ و marker='o' يضع نقطة عند كل قيمة.\n" +
              '- **المدرج التكراري** (plt.hist): توزيع عمود رقمي واحد — كم عملية تسقط في كل نطاق سعري.\n\n' +
              "```python\nmonths = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']\nsales = [890000, 940000, 1010000, 960000, 1050000, 1240000]\n\nplt.plot(months, sales, marker='o')\nplt.title('Al-Noor Monthly Sales (SAR)')\nplt.ylabel('Sales (SAR)')\nplt.show()\n```\n" +
              'يجيب الخط فوراً: المبيعات تصعد إجمالاً، وتهبط في سبتمبر، ثم تقفز في نوفمبر.\n\n' +
              '> TIP: الرسم بلا عنوان وتسميات محاور عمل غير مكتمل؛ فـ plt.title و plt.xlabel و plt.ylabel يأخذ كل منها سطراً واحداً ويجعل الرسم مفهوماً بذاته. واحفظ نسخة بـ plt.savefig(chart.png) عندما تحتاج الملف.',
          },
          terms: [
            {
              en: 'Matplotlib',
              ar: 'مكتبة Matplotlib',
              def: {
                en: 'The classic Python plotting library used to draw charts from data.',
                ar: 'مكتبة الرسم الكلاسيكية في بايثون المستخدمة لرسم الرسوم من البيانات.',
              },
            },
            {
              en: 'pyplot',
              ar: 'الواجهة pyplot',
              def: {
                en: 'The drawing interface inside matplotlib, imported as plt by convention.',
                ar: 'واجهة الرسم داخل matplotlib وتستورد باسم plt بالعادة.',
              },
            },
            {
              en: 'Bar Chart',
              ar: 'رسم الأعمدة (Bar Chart)',
              def: {
                en: 'Compares categories side by side; drawn with plt.bar.',
                ar: 'يقارن الفئات جنباً إلى جنب؛ يرسم بـ plt.bar.',
              },
            },
            {
              en: 'Line Chart',
              ar: 'الرسم الخطي (Line Chart)',
              def: {
                en: 'Shows the trend of one measure across time; drawn with plt.plot.',
                ar: 'يعرض اتجاه مقياس عبر الزمن؛ يرسم بـ plt.plot.',
              },
            },
            {
              en: 'Histogram',
              ar: 'المدرج التكراري (Histogram)',
              def: {
                en: 'Shows the distribution of one numeric column in bins; drawn with plt.hist.',
                ar: 'يعرض توزيع عمود رقمي واحد في فئات مدى؛ يرسم بـ plt.hist.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'Price distribution of 12 sales', ar: 'توزيع أسعار 12 عملية بيع' },
              body: {
                en:
                  "```python\namounts = [3500, 2100, 450, 1200, 3100, 2200, 500, 1150, 3400, 2400, 430, 1250]\n\nplt.hist(amounts, bins=4)\nplt.title('Distribution of Sale Amounts (SAR)')\nplt.xlabel('Amount (SAR)')\nplt.ylabel('Number of sales')\nplt.show()\n```\n\n" +
                  'bins=4 splits the range 430 up to 3500 into four equal bands of 767.5 SAR each, with edges at 1197.5, 1965 and 2732.5. The tallest band is the lowest one, 430 up to 1197.5, holding 4 of the 12 sales — small frequent purchases — while the last band holds the 3 big ones (3100, 3400, 3500).',
                ar:
                  "```python\namounts = [3500, 2100, 450, 1200, 3100, 2200, 500, 1150, 3400, 2400, 430, 1250]\n\nplt.hist(amounts, bins=4)\nplt.title('Distribution of Sale Amounts (SAR)')\nplt.xlabel('Amount (SAR)')\nplt.ylabel('Number of sales')\nplt.show()\n```\n\n" +
                  'تقسم bins=4 المدى من 430 إلى 3500 إلى أربع فئات متساوية عرض كل منها 767.5 ريال وحدودها عند 1197.5 و 1965 و 2732.5. وأطول فئة هي الفئة الأدنى من 430 إلى 1197.5 وفيها 4 من أصل 12 عملية — مشتريات صغيرة متكررة — بينما تحمل الفئة الأخيرة العمليات الثلاث الكبيرة (3100 و 3400 و 3500).',
              },
            },
          ],
          steps: [
            { en: 'Run the bar chart and read which branch wins.', ar: 'شغّل رسم الأعمدة واقرأ أي فرع يفوز.' },
            { en: 'Run the line chart and find the September dip.', ar: 'شغّل الرسم الخطي واعثر على هبوط سبتمبر.' },
            { en: 'Add plt.grid(True) and run again.', ar: 'أضف plt.grid(True) وشغّل مرة أخرى.' },
            { en: 'Draw a histogram of 12 sale amounts with plt.hist.', ar: 'ارسم مدرجاً تكرارياً لـ 12 مبلغ بيع بـ plt.hist.' },
            { en: 'Save one chart with plt.savefig(chart.png).', ar: 'احفظ رسماً واحداً بـ plt.savefig(chart.png).' },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Which matplotlib function actually displays the chart window? (Name only, English.)',
              ar: 'أي دالة matplotlib تعرض نافذة الرسم فعلياً؟ (الاسم فقط بالإنجليزية.)',
            },
            accept: ['show', 'plt.show'],
            solution: {
              en: 'plt.show(). The lines before it only build the chart; show() renders it.',
              ar: 'plt.show(). فالأسطر قبلها تبني الرسم فقط؛ و show() هي التي تعرضه.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which chart type best shows sales moving month by month?', ar: 'أي نوع رسم يعرض تطور المبيعات شهراً بشهر بأفضل صورة؟' },
              options: [
                { en: 'Line chart', ar: 'الرسم الخطي' },
                { en: 'Histogram', ar: 'المدرج التكراري' },
                { en: 'Pie chart', ar: 'الدائرة' },
                { en: 'Box plot', ar: 'صندوق البيانات' },
              ],
              answer: 0,
              explain: {
                en: 'Trend over time belongs in a line chart, drawn with plt.plot.',
                ar: 'اتجاه الزمن يخص الرسم الخطي المرسوم بـ plt.plot.',
              },
            },
            {
              type: 'tf',
              q: { en: 'A histogram shows the distribution of one numeric column.', ar: 'المدرج التكراري يعرض توزيع عمود رقمي واحد.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'It counts how many values fall in each band (bin) of the range.',
                ar: 'يعد كم قيمة تسقط في كل فئة مدى من مدى القيم.',
              },
            },
            {
              type: 'fill',
              q: { en: "Which function sets the chart title? plt.____('Sales by Branch') (One word, English.)", ar: "أي دالة تضع عنوان الرسم؟ plt.____('Sales by Branch') (كلمة واحدة بالإنجليزية.)" },
              accept: ['title'],
              explain: {
                en: 'plt.title writes the heading above the chart; plt.xlabel and plt.ylabel label the axes.',
                ar: 'تكتب plt.title العنوان فوق الرسم؛ و plt.xlabel و plt.ylabel تسميان المحورين.',
              },
            },
          ],
          xp: 25,
        },
        {
          id: 'L8M5L2',
          title: { en: 'End-to-End Mini Analysis', ar: 'تحليل مصغر من البداية إلى النهاية' },
          minutes: 16,
          description: {
            en: 'Run a complete load → clean → analyze → visualize → conclude script on a small SAR sales dataset, and read its output like an analyst.',
            ar: 'شغّل نصاً كاملاً من التحميل إلى التنظيف إلى التحليل إلى التصور إلى الاستنتاج على بيانات مبيعات بالريال، واقرأ مخرجاته كالمحلل.',
          },
          objectives: [
            { en: 'Run the five-step workflow in one script.', ar: 'تشغيل سير العمل بخطواته الخمس في نص واحد.' },
            { en: 'Explain how cleaning decisions change the final numbers.', ar: 'شرح كيف تغير قرارات التنظيف الأرقام النهائية.' },
            { en: 'Write a conclusion with numbers and an action.', ar: 'كتابة استنتاج بأرقام وفعل مقترح.' },
          ],
          body: {
            en:
              '### The five-step workflow\n\n' +
              'Every real analysis, small or huge, follows the same skeleton: **load → clean → analyze → visualize → conclude**. Keep the order; analyzing dirty data produces confident nonsense. Below is one complete, runnable script — copy it into a file, run it, and read the output.\n\n' +
              '### The complete script\n\n' +
              "```python\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 1. LOAD - one week of Al-Noor sales (SAR)\ndf = pd.DataFrame({\n    'branch':  ['Riyadh', 'Jeddah', 'Dammam', 'Jeddah',\n                'Riyadh', 'Jeddah', 'Dammam'],\n    'product': ['AC', 'AC', 'Fan', 'Light', 'AC', 'Light', 'AC'],\n    'amount':  [3500, 2100, 450, None, 3500, 900, 1200],\n})\n\n# 2. CLEAN\ndf = df.drop_duplicates()                       # row 4 = copy of row 0\ndf['amount'] = df['amount'].fillna(df['amount'].mean())\n\n# 3. ANALYZE\nby_branch = df.groupby('branch')['amount'].sum().sort_values(ascending=False)\nprint(by_branch)\n\n# 4. VISUALIZE\nplt.bar(by_branch.index, by_branch.values, color='steelblue')\nplt.title('Sales by Branch (SAR)')\nplt.ylabel('Sales (SAR)')\nplt.show()\n\n# 5. CONCLUDE\nprint('Top branch:', by_branch.idxmax(), '-', round(by_branch.max(), 1), 'SAR')\n```\n\n" +
              '### Reading the output\n\n' +
              'Cleaning removed the duplicated Riyadh row (3500), leaving amounts 3500, 2100, 450, 900, 1200 with a known mean of 1630 — that mean fills the missing Jeddah Light sale. The grouped sums print as: Jeddah 4630.0, Riyadh 3500.0, Dammam 1650.0. The bar chart shows the same ranking. idxmax() returns the label of the biggest value — Jeddah — and max() gives 4630.0, so the last line prints: Top branch: Jeddah - 4630.0 SAR.\n\n' +
              '### The conclusion, written like an analyst\n\n' +
              "Numbers first, action second, one sentence each: Jeddah leads the week with SAR 4,630 of sales, driven by its AC and Light lines, while Dammam trails at SAR 1,650 despite selling the second AC unit. Recommendation: check whether Dammam's AC stock ran out during the week before concluding anything about demand.\n\n" +
              '> WARN: The missing amount was filled with the mean 1630 — every conclusion about Jeddah carries that assumption. State your cleaning decisions; silent cleaning is how wrong decisions get made.',
            ar:
              '### سير العمل بخمس خطوات\n\n' +
              'يتبع كل تحليل حقيقي صغيراً أو ضخماً الهيكل نفسه: **تحميل ← تنظيف ← تحليل ← تصور ← استنتاج**. حافظ على الترتيب؛ فتحليل بيانات متسخة ينتج هراء واثقاً. وفي الأسفل نص كامل قابل للتشغيل — انسخه في ملف وشغّله واقرأ المخرجات.\n\n' +
              '### النص الكامل\n\n' +
              "```python\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 1. التحميل - أسبوع واحد من مبيعات النور (ريال)\ndf = pd.DataFrame({\n    'branch':  ['Riyadh', 'Jeddah', 'Dammam', 'Jeddah',\n                'Riyadh', 'Jeddah', 'Dammam'],\n    'product': ['AC', 'AC', 'Fan', 'Light', 'AC', 'Light', 'AC'],\n    'amount':  [3500, 2100, 450, None, 3500, 900, 1200],\n})\n\n# 2. التنظيف\ndf = df.drop_duplicates()                       # الصف الرابع نسخة من الأول\ndf['amount'] = df['amount'].fillna(df['amount'].mean())\n\n# 3. التحليل\nby_branch = df.groupby('branch')['amount'].sum().sort_values(ascending=False)\nprint(by_branch)\n\n# 4. التصور\nplt.bar(by_branch.index, by_branch.values, color='steelblue')\nplt.title('Sales by Branch (SAR)')\nplt.ylabel('Sales (SAR)')\nplt.show()\n\n# 5. الاستنتاج\nprint('Top branch:', by_branch.idxmax(), '-', round(by_branch.max(), 1), 'SAR')\n```\n\n" +
              '### قراءة المخرجات\n\n' +
              'أزال التنظيف صف الرياض المكرر (3500)، وبقيت المبالغ 3500 و 2100 و 450 و 900 و 1200 بمتوسط معلوم قدره 1630 — وهو ما يملأ عملية جدة الناقصة. وتُطبع المجاميع المجلمة: جدة 4630.0، والرياض 3500.0، والدمام 1650.0. ويعرض رسم الأعمدة الترتيب نفسه. وتعيد idxmax() تسمية أكبر قيمة — جدة — ويعيد max() القيمة 4630.0، فيطبع السطر الأخير: Top branch: Jeddah - 4630.0 SAR.\n\n' +
              '### الاستنتاج بأسلوب المحلل\n\n' +
              "الأرقام أولاً والفعل ثانياً، جملة لكل منهما: تتقدم جدة في الأسبوع بمبيعات 4,630 ريال تقودها خطوطا المكيفات والإضاءة، بينما تتأخر الدمام بـ 1,650 ريال رغم أنها باعت ثاني وحدة مكيف. التوصية: تحقق أولاً من نفاد مخزون المكيفات في الدمام خلال الأسبوع قبل أي حكم على الطلب.\n\n" +
              '> WARN: ملئت المبلغ الناقص بالمتوسط 1630 — فكل استنتاج عن جدة يحمل هذا الافتراض. اذكر قرارات التنظيف؛ فالتنظيف الصامت هو الطريق إلى القرارات الخاطئة.',
          },
          terms: [
            {
              en: 'End-to-End Workflow',
              ar: 'سير العمل الكامل',
              def: {
                en: 'The five steps of any analysis: load, clean, analyze, visualize, conclude.',
                ar: 'خطوات التحليل الخمس: تحميل، تنظيف، تحليل، تصور، استنتاج.',
              },
            },
            {
              en: 'idxmax()',
              ar: 'الطريقة idxmax()',
              def: {
                en: 'Returns the label of the largest value in a Series, here the top branch name.',
                ar: 'تعيد تسمية أكبر قيمة في سلسلة، وهنا اسم الفرع المتقدم.',
              },
            },
            {
              en: 'sort_values()',
              ar: 'الطريقة sort_values()',
              def: {
                en: 'Orders a Series or DataFrame by value, with ascending=False for largest first.',
                ar: 'ترتب سلسلة أو إطاراً بالقيمة، و ascending=False تجعل الأكبر أولاً.',
              },
            },
            {
              en: 'Business Conclusion',
              ar: 'الاستنتاج التجاري',
              def: {
                en: 'The final sentences: what the numbers say and what to do about it.',
                ar: 'الجمل الأخيرة: ماذا تقول الأرقام وماذا نفعل حيال ذلك.',
              },
            },
          ],
          examples: [
            {
              title: { en: 'From notebook to email', ar: 'من دفتر الملاحظات إلى البريد الإلكتروني' },
              body: {
                en:
                  'The same numbers become a three-line email to the manager:\n\n' +
                  '1. Sales this week: SAR 9,780 across three branches (after cleaning one duplicate and one missing amount).\n' +
                  '2. Jeddah leads with SAR 4,630; Dammam trails at SAR 1,650.\n' +
                  '3. Proposed action: verify Dammam AC stock before judging demand.\n\n' +
                  'One script, one chart, three sentences — that is a finished analysis.',
                ar:
                  'تصبح الأرقام نفسها رسالة بريد من ثلاثة أسطر إلى المدير:\n\n' +
                  '1. مبيعات الأسبوع: 9,780 ريال عبر ثلاثة فروع (بعد تنظيف مكرر وقيمة ناقصة).\n' +
                  '2. تتقدم جدة بـ 4,630 ريال؛ وتتأخر الدمام بـ 1,650 ريال.\n' +
                  '3. الفعل المقترح: التحقق من مخزون مكيفات الدمام قبل الحكم على الطلب.\n\n' +
                  'نص واحد، ورسم واحد، وثلاث جمل — هذا تحليل مكتمل.',
              },
            },
          ],
          steps: [
            { en: 'Create analysis.py and paste the complete script.', ar: 'أنشئ ملف analysis.py والصق النص الكامل.' },
            { en: 'Run it and match every printed number to the reading section.', ar: 'شغّله وطابق كل رقم مطبوع مع قسم القراءة.' },
            { en: 'Comment out the fillna line and rerun; watch the result change, then restore it.', ar: 'علّق سطر fillna وأعد التشغيل؛ وراقب تغير النتيجة ثم أعده.' },
            { en: 'Change sort_values(ascending=False) to True and see the bars flip.', ar: 'غيّر sort_values(ascending=False) إلى True ولاحظ انقلاب الأعمدة.' },
            { en: 'Write your two-sentence conclusion as a comment at the end of the file.', ar: 'اكتب استنتاجك بجملتين كتعليق في نهاية الملف.' },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'Which steps belong to the end-to-end mini analysis workflow? Tick all that apply.',
              ar: 'أي الخطوات التالية تنتمي إلى سير العمل الكامل للتحليل المصغر؟ اختر كل ما ينطبق.',
            },
            solution: {
              en: 'Load and inspect, clean before analyzing, group and sort, visualize, then conclude with numbers and an action.',
              ar: 'التحميل والفحص، والتنظيف قبل التحليل، والتجميع والترتيب، والتصور، ثم الاستنتاج بأرقام وفعل.',
            },
            confirm: [
              { en: 'Load the raw data and inspect it', ar: 'تحميل البيانات الخام وفحصها' },
              { en: 'Clean missing values and duplicates before analyzing', ar: 'تنظيف القيم الناقصة والمكررات قبل التحليل' },
              { en: 'Group by branch and sort the sums', ar: 'التجميع حسب الفرع وترتيب المجاميع' },
              { en: 'Visualize and write a conclusion with numbers and an action', ar: 'التصور وكتابة استنتاج بأرقام وفعل' },
            ],
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'What is the correct order of the analysis workflow?', ar: 'ما الترتيب الصحيح لسير عمل التحليل؟' },
              options: [
                { en: 'Load, clean, analyze, visualize, conclude', ar: 'تحميل، تنظيف، تحليل، تصور، استنتاج' },
                { en: 'Clean, load, visualize, analyze, conclude', ar: 'تنظيف، تحميل، تصور، تحليل، استنتاج' },
                { en: 'Visualize, conclude, load, clean, analyze', ar: 'تصور، استنتاج، تحميل، تنظيف، تحليل' },
                { en: 'Analyze, visualize, load, conclude, clean', ar: 'تحليل، تصور، تحميل، استنتاج، تنظيف' },
              ],
              answer: 0,
              explain: {
                en: 'Load first, clean before anything else, then analyze, visualize and conclude. Reordering produces nonsense.',
                ar: 'التحميل أولاً والتنظيف قبل كل شيء، ثم التحليل والتصور والاستنتاج؛ وأي تغيير للترتيب ينتج هراء.',
              },
            },
            {
              type: 'num',
              q: { en: 'In the mini project, the cleaned Jeddah amounts are 2100, 1630 and 900. What is the Jeddah sum that by_branch prints?', ar: 'في المشروع المصغر، تحمل صفوف جدة المنظفة المبالغ 2100 و 1630 و 900. ما مجموع جدة الذي يطبع by_branch؟' },
              answer: 4630,
              tolerance: 0.01,
              explain: {
                en: '2100 + 1630 + 900 = 4630.0, and idxmax() names Jeddah as the top branch.',
                ar: '2100 + 1630 + 900 = 4630.0، وتسمي idxmax() جدة الفرع المتقدم.',
              },
            },
            {
              type: 'tf',
              q: { en: 'A good conclusion quotes numbers and states what to do next.', ar: 'الاستنتاج الجيد يستشهد بالأرقام ويذكر ما يجب فعله لاحقاً.' },
              options: [
                { en: 'True', ar: 'صح' },
                { en: 'False', ar: 'خطأ' },
              ],
              answer: 0,
              explain: {
                en: 'Numbers give the evidence; the action gives the value. A conclusion with neither is decoration.',
                ar: 'الأرقام تقدم الدليل والفعل يقدم القيمة؛ والاستنتاج بلا منهما زينة.',
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
        q: { en: 'Which of these values is a float?', ar: 'أي القيم التالية عدد عشري float؟' },
        options: [
          { en: '42', ar: '42' },
          { en: "3.14", ar: '3.14' },
          { en: "'42'", ar: "'42'" },
          { en: 'True', ar: 'True' },
        ],
        answer: 1,
        explain: {
          en: 'A number with a decimal point is a float. 42 is int, the quoted 42 is a string, True is bool.',
          ar: 'العدد الذي فيه فاصلة عشرية هو float؛ فالرقم 42 عدد صحيح int، والرقم المقتبس 42 نص str، و True قيمة منطقية bool.',
        },
      },
      {
        type: 'mcq',
        q: { en: "Which pandas function loads the file sales_report.xlsx?", ar: "أي دالة pandas تحمل الملف sales_report.xlsx؟" },
        options: [
          { en: 'pd.read_csv', ar: 'pd.read_csv' },
          { en: 'pd.read_excel', ar: 'pd.read_excel' },
          { en: 'df.head', ar: 'df.head' },
          { en: 'np.array', ar: 'np.array' },
        ],
        answer: 1,
        explain: {
          en: 'read_excel loads .xlsx files and accepts sheet_name; read_csv is for text CSV files.',
          ar: 'الدالة read_excel تحمل ملفات .xlsx وتقبل sheet_name؛ و read_csv لملفات CSV النصية.',
        },
      },
      {
        type: 'mcq',
        q: { en: 'Which chart shows the distribution of one numeric column — how many sales fall in each price band?', ar: 'أي رسم يعرض توزيع عمود رقمي واحد — كم عملية تسقط في كل نطاق سعري؟' },
        options: [
          { en: 'Pie chart', ar: 'الدائرة' },
          { en: 'Histogram', ar: 'المدرج التكراري' },
          { en: 'Line chart', ar: 'الرسم الخطي' },
          { en: 'Scatter plot', ar: 'النقاط المبعثرة' },
        ],
        answer: 1,
        explain: {
          en: 'The histogram bins one numeric column and counts the values per band; plt.hist draws it.',
          ar: 'المدرج التكراري يقسم عموداً رقمياً واحداً إلى فئات ويعد القيم في كل فئة؛ ويرسمه plt.hist.',
        },
      },
      {
        type: 'mcq',
        q: { en: "What does df.groupby('branch')['amount'].sum() produce?", ar: "ماذا ينتج df.groupby('branch')['amount'].sum()؟" },
        options: [
          { en: 'Total sales per branch', ar: 'إجمالي المبيعات لكل فرع' },
          { en: 'One grand total for all rows', ar: 'إجمالياً واحداً لكل الصفوف' },
          { en: 'The rows sorted by branch name', ar: 'الصفوف مرتبة باسم الفرع' },
          { en: 'The first 5 rows of the table', ar: 'أول 5 صفوف من الجدول' },
        ],
        answer: 0,
        explain: {
          en: 'groupby splits by the key column and sum aggregates per group: one total per branch.',
          ar: 'تفرّق groupby حسب عمود المفتاح ويجمع sum لكل مجموعة: إجمالي لكل فرع.',
        },
        similar: {
          en: 'Related question: one grand total without grouping is df[amount].sum() on the whole column.',
          ar: 'سؤال مرافق: الإجمالي الواحد دون تجميع هو df[amount].sum() على العمود كله.',
        },
      },
      {
        type: 'mcq',
        q: { en: "What does df[df['amount'] > 2000] return?", ar: "ماذا يعيد df[df['amount'] > 2000]؟" },
        options: [
          { en: 'A new column with the threshold values', ar: 'عموداً جديداً بقيم الحد' },
          { en: 'Only the rows where the condition is True', ar: 'الصفوف التي شرطها صادق فقط' },
          { en: 'The column names as a list', ar: 'أسماء الأعمدة كقائمة' },
          { en: 'Every row of the table unchanged', ar: 'كل صفوف الجدول دون تغيير' },
        ],
        answer: 1,
        explain: {
          en: 'The boolean mask filters the table: only rows passing the condition survive.',
          ar: 'القناع المنطقي يرشّح الجدول: تبقى الصفوف التي تجتاز الشرط فقط.',
        },
        mistake: {
          en: 'The column trap: square brackets here select rows through the mask, not new columns.',
          ar: 'فخ الأعمدة: الأقواس المربعة هنا تختار صفوفاً عبر القناع لا أعمدة جديدة.',
        },
      },
      {
        type: 'tf',
        q: { en: "In Python, the names sales and Sales refer to two different variables.", ar: 'في بايثون، يشير الاسمان sales و Sales إلى متغيرين مختلفين.' },
        options: [
          { en: 'True', ar: 'صح' },
          { en: 'False', ar: 'خطأ' },
        ],
        answer: 0,
        explain: {
          en: 'Python is case-sensitive: sales and Sales are two separate boxes, a classic silent bug.',
          ar: 'بايثون حساس لحالة الأحرف: sales و Sales صندوقان منفصلان — وهو خطأ صامت كلاسيكي.',
        },
      },
      {
        type: 'fill',
        q: { en: 'Write the Python keyword that starts a function definition: ____ commission(amount, rate):', ar: 'اكتب الكلمة المفتاحية في بايثون التي تبدأ تعريف الدالة: ____ commission(amount, rate):' },
        accept: ['def'],
        explain: {
          en: 'def starts every function definition; the colon and the indented block follow.',
          ar: 'تبدأ def كل تعريف دالة؛ ثم تتبعها النقطتان والكتلة المسافة بادئة.',
        },
      },
      {
        type: 'num',
        q: { en: 'sales = [3500, 2100, 1800]. After the accumulator loop (total = total + s for each s), what does total hold?', ar: 'لدينا sales = [3500, 2100, 1800]. بعد حلقة المجمّع (total = total + s لكل s)، ماذا يحمل total؟' },
        answer: 7400,
        tolerance: 0.01,
        explain: {
          en: 'The loop adds every amount: 3500 + 2100 + 1800 = 7400.',
          ar: 'تضيف الحلقة كل مبلغ: 3500 + 2100 + 1800 = 7400.',
        },
      },
    ],
  },
};

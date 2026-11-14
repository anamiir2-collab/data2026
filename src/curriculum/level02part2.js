// Level 2 — Microsoft Excel (part 2: modules 6–9)
export const PART2 = [
  {
    id: 'L2M6',
    name: { en: 'Lookup Functions', ar: 'دوال البحث' },
    lessons: [
      {
        id: 'L2M6L1',
        title: { en: 'VLOOKUP and XLOOKUP', ar: 'دالتا VLOOKUP وXLOOKUP' },
        minutes: 13,
        description: {
          en: 'Pull information from other tables automatically: the legendary VLOOKUP and its modern replacement XLOOKUP.',
          ar: 'اسحب المعلومات من جداول أخرى تلقائياً: الأسطورية VLOOKUP والبديلة الحديثة XLOOKUP.',
        },
        objectives: [
          { en: 'Write a VLOOKUP with exact match', ar: 'كتابة VLOOKUP بمطابقة تامة' },
          { en: 'Understand the lookup-column limitation', ar: 'فهم قيد عمود البحث' },
          { en: 'Use XLOOKUP for flexible lookups', ar: 'استخدام XLOOKUP للبحث المرن' },
        ],
        body: {
          en: '### VLOOKUP\n=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])\n\nYou have an order ID in A2; the price list lives in Prices!A:C. =VLOOKUP(A2, Prices!A:C, 3, FALSE) walks down the FIRST column of the table looking for A2, then returns the value from the 3rd column of that row. **FALSE means exact match** — always use it for IDs and codes.\n\nThe famous limitation: VLOOKUP only looks RIGHT — the return column must be to the right of the first column. And col_index_num is a fragile number: inserting a column silently shifts results.\n\n### XLOOKUP — the modern way\n=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])\n\n=XLOOKUP(A2, Prices!A:A, Prices!C:C, "Not found") — looks in column A, returns from column C, and shows "Not found" instead of #N/A. It looks in any direction, has no fragile column numbers, and handles missing values gracefully.\n\n> TIP: #N/A from VLOOKUP usually means: the ID exists in your sheet but not in the price table (typo, leading space, or genuinely new). Find which before blaming the formula.',
          ar: '### VLOOKUP\n=VLOOKUP(قيمة_البحث، جدول، رقم_العمود، [نوع_المطابقة])\n\nلديك معرّف طلب في A2 وقائمة الأسعار في Prices!A:C. تعبر =VLOOKUP(A2, Prices!A:C, 3, FALSE) في العمود **الأول** من الجدول تبحث عن A2، ثم تعيد القيمة من العمود الثالث في ذلك الصف. **FALSE تعني مطابقة تامة** — استخدمها دائماً للمعرفات والأكواد.\n\nالقيد الشهير: VLOOKUP تنظر لليمين فقط — يجب أن يكون عمود النتيجة يمين عمود البحث. ورقم العمود هش: إدخال عمود جديد يزيح النتائج بصمت.\n\n### XLOOKUP — الطريقة الحديثة\n=XLOOKUP(قيمة_البحث، نطاق_البحث، نطاق_النتيجة، [إن_لم_يوجد])\n\n=XLOOKUP(A2, Prices!A:A, Prices!C:C, "Not found") — تبحث في العمود A وتعيد من العمود C وتعرض "Not found" بدل #N/A. تنظر في أي اتجاه، بلا أرقام أعمدة هشة، وتعامل مع القيم المفقودة بلباقة.\n\n> TIP: خطأ #N/A من VLOOKUP يعني عادة: المعرّف موجود في ورقتك لكنه غير موجود في جدول الأسعار (خطأ كتابة أو مسافة زائدة أو عنصر جديد فعلاً). اكتشف السبب قبل لوم الصيغة.',
          },
          terms: [
            { en: 'VLOOKUP', ar: 'دالة البحث العمودي', def: { en: 'Searches the first column of a table and returns a value from another column.', ar: 'تبحث في العمود الأول من جدول وتعيد قيمة من عمود آخر.' } },
            { en: 'XLOOKUP', ar: 'دالة البحث الحديثة', def: { en: 'Modern lookup: search any column, return any column, with a not-found fallback.', ar: 'بحث حديث: ابحث في أي عمود وعد من أي عمود مع قيمة احتياطية للعدم.' } },
            { en: 'Exact Match', ar: 'المطابقة التامة', def: { en: 'Requires the lookup value to equal the table value exactly (FALSE / 0).', ar: 'تتطلب تساوي قيمة البحث مع قيمة الجدول تماماً (FALSE / 0).' } },
            { en: '#N/A', ar: 'خطأ عدم التوفر', def: { en: 'Excel error meaning the lookup value was not found.', ar: 'خطأ في Excel يعني أن قيمة البحث غير موجودة.' } },
          ],
          examples: [
            {
              title: { en: 'Auto-filling product names', ar: 'تعبئة أسماء المنتجات تلقائياً' },
              body: {
                en: 'Orders sheet has Product Code in B. Products sheet maps codes to names in columns A-B. =VLOOKUP(B2, Products!A:B, 2, FALSE) fills the readable product name for every order — no manual typing for 3,000 rows.',
                ar: 'ورقة الطلبات فيها كود المنتج في B. وورقة Products تربط الأكواد بالأسماء في A-B. تعبر =VLOOKUP(B2, Products!A:B, 2, FALSE) بملء اسم المنتج المقروء لكل طلب — بلا كتابة يدوية لـ3000 صف.',
              },
            },
          ],
          functions: [
            {
              name: 'VLOOKUP', ar: 'دالة VLOOKUP تبحث عن قيمة في العمود الأول من جدول وتعيد قيمة من عمود آخر في نفس الصف — أشهر دالة بحث في سوق العمل.',
              syntax: '=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
              args: [
                { name: 'lookup_value', desc: { en: 'The value to search for (required).', ar: 'القيمة المراد البحث عنها (إلزامي).' } },
                { name: 'table_array', desc: { en: 'The table; its FIRST column must hold the lookup values (required).', ar: 'الجدول؛ ويجب أن يحمل عموده الأول قيم البحث (إلزامي).' } },
                { name: 'col_index_num', desc: { en: 'Which column of the table to return (1 = first) (required).', ar: 'رقم عمود الجدول المراد إرجاعه (1 = الأول) (إلزامي).' } },
                { name: 'range_lookup', desc: { en: 'FALSE = exact match; TRUE = approximate (required for IDs).', ar: '‏FALSE للمطابقة التامة؛ TRUE للتقريبية (إلزامي للمعرفات).' } },
              ],
              example: '=VLOOKUP(A2, Prices!A:C, 3, FALSE)',
              result: { en: 'The price from column C for the row where column A equals A2', ar: 'السعر من العمود C للصف الذي يساوي عموده A قيمة A2' },
              mistakes: [
                { en: 'Forgetting FALSE: approximate match returns wrong row silently.', ar: 'نسيان FALSE: المطابقة التقريبية تعيد صفاً خاطئاً بصمت.' },
                { en: 'Lookup column not the first column of table_array.', ar: 'عدم جعل عمود البحث هو العمود الأول في الجدول.' },
                { en: 'Hard-coded col_index breaks after inserting a column.', ar: 'رقم العمود الثابت ينكسر بعد إدخال عمود جديد.' },
              ],
            },
            {
              name: 'XLOOKUP', ar: 'دالة XLOOKUP البديلة الحديثة: تبحث في أي نطاق وتعيد من أي نطاق آخر مع قيمة احتياطية عند عدم العثور.',
              syntax: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])',
              args: [
                { name: 'lookup_value', desc: { en: 'Value to search for (required).', ar: 'القيمة المراد البحث عنها (إلزامي).' } },
                { name: 'lookup_array', desc: { en: 'Column/row to search IN (required).', ar: 'العمود أو الصف المراد البحث فيه (إلزامي).' } },
                { name: 'return_array', desc: { en: 'Column/row to return FROM (required).', ar: 'العمود أو الصف المراد الإرجاع منه (إلزامي).' } },
                { name: 'if_not_found', desc: { en: 'Fallback text/value when missing (optional).', ar: 'القيمة البديلة عند عدم العثور (اختياري).' } },
              ],
              example: '=XLOOKUP(A2, Prices!A:A, Prices!C:C, "Not found")',
              result: { en: 'Price from C, or "Not found" when the ID is missing', ar: 'السعر من C أو "Not found" إذا كان المعرّف مفقوداً' },
              mistakes: [ { en: 'Lookup and return arrays must have the same number of rows, or results misalign.', ar: 'يجب تساوي عدد صفوف نطاقي البحث والنتيجة وإلا اختل النتائج.' } ],
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'Write (lowercase) the exact VLOOKUP that searches A2 in range A1:C20 and returns column 3 with exact match.',
              ar: 'اكتب (بأحرف صغيرة) صيغة VLOOKUP الدقيقة التي تبحث عن A2 في النطاق A1:C20 وتعيد العمود 3 بمطابقة تامة.',
            },
            accept: ['=vlookup(a2,a1:c20,3,false)'],
            solution: { en: '=VLOOKUP(A2, A1:C20, 3, FALSE)', ar: '=VLOOKUP(A2, A1:C20, 3, FALSE)' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Why did =VLOOKUP(B2, Prices!A:D, 2, TRUE) return the WRONG row?', ar: 'لماذا أعادت =VLOOKUP(B2, Prices!A:D, 2, TRUE) صفاً خاطئاً؟' },
              options: [
                { en: 'TRUE means approximate match, not exact', ar: 'لأن TRUE تعني مطابقة تقريبية لا تامة' },
                { en: 'The table is too small', ar: 'لأن الجدول صغير جداً' },
                { en: 'Column 2 does not exist', ar: 'لأن العمود 2 غير موجود' },
                { en: 'VLOOKUP cannot search tables', ar: 'لأن VLOOKUP لا تبحث في الجداول' },
              ],
              answer: 0,
              explain: { en: 'TRUE (approximate) grabs the nearest smaller value — for IDs you must use FALSE.', ar: '‏TRUE (تقريبية) تلتقط أقرب قيمة أصغر — للمعرفات يجب FALSE.' },
              mistake: { en: 'Leaving the 4th argument empty also means approximate — write FALSE explicitly.', ar: 'ترك المعامل الرابع فارغاً يعني تقريبية أيضاً — اكتب FALSE صراحة.' },
            },
            {
              type: 'mcq',
              q: { en: 'Which lookup can return a value from a column LEFT of the search column?', ar: 'أي دالة بحث يمكنها إرجاع قيمة من عمود يسار عمود البحث؟' },
              options: [ { en: 'XLOOKUP', ar: 'XLOOKUP' }, { en: 'VLOOKUP', ar: 'VLOOKUP' }, { en: 'COUNTIF', ar: 'COUNTIF' }, { en: 'SUMIF', ar: 'SUMIF' } ],
              answer: 0,
              explain: { en: 'XLOOKUP searches and returns from independent ranges — any direction. VLOOKUP only goes right.', ar: '‏XLOOKUP تبحث وتعيد من نطاقات مستقلة في أي اتجاه. أما VLOOKUP فليمين فقط.' },
            },
            {
              type: 'fill',
              q: { en: 'The Excel error shown when a lookup value does not exist is ______.', ar: 'الخطأ الذي يظهر في Excel عندما لا توجد قيمة البحث هو ______.', },
              accept: ['#n/a', 'n/a'],
              explain: { en: '#N/A — wrap in IFERROR or supply XLOOKUP\u2019s fallback.', ar: '‏#N/A — غلّفها بـ IFERROR أو استخدم قيمة XLOOKUP الاحتياطية.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L2M6L2',
          title: { en: 'INDEX, MATCH and Their Combination', ar: 'دالتا INDEX وMATCH ودمجهما' },
          minutes: 12,
          description: {
            en: 'The professional lookup pair: MATCH finds the position, INDEX returns the value — flexible in every direction.',
            ar: 'ثنائي البحث الاحترافي: MATCH تجد الموضع وINDEX تعيد القيمة — مرونة في كل الاتجاهات.',
          },
          objectives: [
            { en: 'Use MATCH to find a position', ar: 'استخدام MATCH لإيجاد الموضع' },
            { en: 'Use INDEX to return a value by position', ar: 'استخدام INDEX لإرجاع قيمة بموضع' },
            { en: 'Combine INDEX+MATCH as a VLOOKUP alternative', ar: 'دمج INDEX+MATCH كبديل لـ VLOOKUP' },
          ],
          body: {
            en: '### MATCH — أين؟\n=MATCH(1004, A2:A50, 0) returns the POSITION of 1004 inside the range: 7 means it is the 7th item. The 0 means exact match. It returns a position, not a value.\n\n### INDEX — ماذا؟\n=INDEX(C2:C50, 7) returns the 7th value of column C. Give it a position, it gives you the content.\n\n### INDEX + MATCH — القوة الثنائية\n=INDEX(C2:C50, MATCH(1004, A2:A50, 0))\n\nMATCH finds WHERE 1004 sits; INDEX fetches WHAT sits in C at the same position. Together they are a lookup that:\n- Returns from columns on ANY side (left included).\n- Does not break when columns are inserted.\n- Is the answer interviewers expect when they say "lookup without VLOOKUP".\n\n> TIP: Read the combination out loud: "INDEX the C column AT the position where A equals 1004."',
          ar: '### MATCH — أين؟\n=MATCH(1004, A2:A50, 0) تعيد **موضع** 1004 داخل النطاق: 7 تعني أنه العنصر السابع. والصفر يعني مطابقة تامة. تعيد موضعاً لا قيمة.\n\n### INDEX — ماذا؟\n=INDEX(C2:C50, 7) تعيد القيمة السابعة من العمود C. أعطها موضعاً فتعطيك المحتوى.\n\n### INDEX + MATCH — القوة الثنائية\n=INDEX(C2:C50, MATCH(1004, A2:A50, 0))\n\n‏MATCH تجد **أين** يقع 1004؛ وINDEX تجلب **ماذا** يقع في C بالموضع نفسه. معاً تشكلان بحثاً:\n- يعيد من أعمدة أي جهة (يسار كذلك).\n- لا ينكسر عند إدخال أعمدة جديدة.\n- وهما الإجابة التي يتوقعها المحاور حين يقول "بحث دون VLOOKUP".\n\n> TIP: اقرأ التركيبة بصوت مسموع: "أعطني من العمود C عند الموضع الذي يساوي فيه A القيمة 1004".',
          },
          terms: [
            { en: 'MATCH', ar: 'دالة الموضع', def: { en: 'Returns the position of a value inside a range.', ar: 'تعيد موضع قيمة داخل نطاق.' } },
            { en: 'INDEX', ar: 'دالة الإحضار', def: { en: 'Returns the value at a given position inside a range.', ar: 'تعيد القيمة عند موضع معين داخل نطاق.' } },
            { en: 'Position', ar: 'الموضع', def: { en: 'The order number of an item in a list (3rd, 7th...).', ar: 'رقم ترتيب العنصر في القائمة (الثالث، السابع...).' } },
          ],
          examples: [
            {
              title: { en: 'Best month name', ar: 'اسم أفضل شهر' },
              body: {
                en: 'Months in A2:A13, sales in B2:B13. =INDEX(A2:A13, MATCH(MAX(B2:B13), B2:B13, 0)) returns the NAME of the best sales month — something MAX alone cannot do.',
                ar: 'الأشهر في A2:A13 والمبيعات في B2:B13. تعبر =INDEX(A2:A13, MATCH(MAX(B2:B13), B2:B13, 0)) باسم **أفضل** شهر مبيعات — وهو ما لا تستطيع MAX وحدها فعله.',
              },
            },
          ],
          functions: [
            {
              name: 'MATCH', ar: 'دالة MATCH تعيد موضع قيمة داخل نطاق — لا القيمة نفسها، بل ترتيبها (مثل 7 للعنصر السابع).',
              syntax: '=MATCH(lookup_value, lookup_array, [match_type])',
              args: [
                { name: 'lookup_value', desc: { en: 'Value to find (required).', ar: 'القيمة المراد إيجادها (إلزامي).' } },
                { name: 'lookup_array', desc: { en: 'Single row or column to search (required).', ar: 'صف أو عمود واحد للبحث فيه (إلزامي).' } },
                { name: 'match_type', desc: { en: '0 = exact (use this); 1/-1 = approximate (required for IDs).', ar: '‏0 للمطابقة التامة (استخدمها)؛ و1/-1 للتقريبية.' } },
              ],
              example: '=MATCH(1004, A2:A50, 0)',
              result: { en: '7 — the value 1004 is the 7th item', ar: '7 — القيمة 1004 هي العنصر السابع' },
              mistakes: [ { en: 'Forgetting 0 and getting a strange position from approximate matching.', ar: 'نسيان الصفر والحصول على موضع غريب من المطابقة التقريبية.' } ],
            },
            {
              name: 'INDEX', ar: 'دالة INDEX تعيد القيمة عند موضع محدد داخل نطاق — "أعطني العنصر السابع".',
              syntax: '=INDEX(array, row_num, [column_num])',
              args: [
                { name: 'array', desc: { en: 'Range to fetch from (required).', ar: 'النطاق المراد الجلب منه (إلزامي).' } },
                { name: 'row_num', desc: { en: 'Position inside the range (required).', ar: 'الموضع داخل النطاق (إلزامي).' } },
                { name: 'column_num', desc: { en: 'Column when the range is 2D (optional).', ar: 'العمود عندما يكون النطاق ثنائي الأبعاد (اختياري).' } },
              ],
              example: '=INDEX(C2:C50, 7)',
              result: { en: 'The 7th value in C2:C50', ar: 'القيمة السابعة في C2:C50' },
              mistakes: [ { en: 'Positions are relative to the RANGE, not the whole sheet — row 7 of the range may be sheet row 8.', ar: 'المواضع نسبية للنطاق لا للورقة — الصف السابع في النطاق قد يكون الصف الثامن في الورقة.' } ],
            },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'A2:A5 = Riyadh, Jeddah, Dammam, Makkah. B2:B5 = 100, 200, 300, 400. What does =INDEX(B2:B5, MATCH("Dammam", A2:A5, 0)) return?',
              ar: '‏A2:A5 = الرياض، جدة، الدمام، مكة. وB2:B5 = 100، 200، 300، 400. ماذا تعيد =INDEX(B2:B5, MATCH("Dammam", A2:A5, 0))؟',
            },
            accept: ['300'],
            tolerance: 0.01,
            solution: { en: 'Dammam is the 3rd item → INDEX returns the 3rd value = 300.', ar: 'الدمام هي العنصر الثالث ← تعيد INDEX القيمة الثالثة = 300.' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'MATCH returns…', ar: 'تعيد MATCH…' },
              options: [ { en: 'The position of the value', ar: 'موضع القيمة' }, { en: 'The value itself', ar: 'القيمة نفسها' }, { en: 'TRUE or FALSE', ar: 'صح أو خطأ' }, { en: 'The sum of matches', ar: 'مجموع المطابقات' } ],
              answer: 0,
              explain: { en: 'MATCH returns a position number; INDEX converts it into a value.', ar: 'تعيد MATCH رقم موضع؛ وINDEX تحوله إلى قيمة.' },
            },
            {
              type: 'formula',
              q: { en: 'Write (lowercase) the combination that returns from C2:C50 the row where A2:A50 equals A2.', ar: 'اكتب (بأحرف صغيرة) التركيبة التي تعيد من C2:C50 الصف الذي يساوي فيه A2:A50 قيمة A2.' },
              accept: ['=index(c2:c50,match(a2,a2:a50,0))'],
              explain: { en: '=INDEX(C2:C50, MATCH(A2, A2:A50, 0)) — the professional pattern.', ar: '=INDEX(C2:C50, MATCH(A2, A2:A50, 0)) — النمط الاحترافي.' },
            },
            {
              type: 'tf',
              q: { en: 'INDEX+MATCH can look up values located to the left of the search column.', ar: 'يمكن لـ INDEX+MATCH البحث عن قيم تقع يسار عمود البحث.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 0,
              explain: { en: 'True — INDEX and MATCH use independent ranges, so direction does not matter.', ar: 'صح — فـ INDEX وMATCH تستخدمان نطاقات مستقلة فلا يهم الاتجاه.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L2M7',
      name: { en: 'Text Functions', ar: 'دوال النصوص' },
      lessons: [
        {
          id: 'L2M7L1',
          title: { en: 'Cleaning Text: LEFT, RIGHT, MID, TRIM, CLEAN, LEN', ar: 'تنظيف النصوص: LEFT وRIGHT وMID وTRIM وCLEAN وLEN' },
          minutes: 12,
          description: {
            en: 'Extract parts of text, measure it, and strip invisible junk — the everyday cleaning kit.',
            ar: 'استخرج أجزاء النص واقسه وأزل المخلفات غير المرئية — عدّة التنظيف اليومية.',
          },
          objectives: [
            { en: 'Extract characters with LEFT, RIGHT and MID', ar: 'استخراج الحروف بـ LEFT وRIGHT وMID' },
            { en: 'Remove spaces and non-printing characters', ar: 'إزالة المسافات والحروف غير القابلة للطباعة' },
            { en: 'Measure text length with LEN', ar: 'قياس طول النص بـ LEN' },
          ],
          body: {
            en: '### LEFT / RIGHT / MID — استخراج الأجزاء\n- =LEFT("INV-2025-0042", 3) → "INV" (first 3 characters).\n- =RIGHT("0501234567", 4) → "4567" (last 4).\n- =MID("INV-2025-0042", 5, 4) → "2025" (start at position 5, take 4).\n\nPerfect for pulling codes, years and phone tails out of mixed strings.\n\n### TRIM — المسافات الزائدة\n=TRIM(A2) removes leading/trailing spaces and collapses double spaces to one. Invisible spaces are the #1 reason VLOOKUP "fails" while both values look identical on screen.\n\n### CLEAN — الحروف غير المرئية\n=CLEAN(A2) removes non-printing characters (line breaks inside cells from imported data).\n\n### LEN — الطول\n=LEN(A2) counts characters: 10 for a phone, 13 for "INV-2025-0042". Combined with filtering it exposes anomalies: a city of length 0 is empty; length 20 in a 6-digit code column means paste damage.\n\n> TIP: The cleaning combo =TRIM(CLEAN(A2)) fixes most imported-text problems in one step.',
          ar: '### LEFT / RIGHT / MID — استخراج الأجزاء\n- =LEFT("INV-2025-0042", 3) ← "INV" (أول 3 حروف).\n- =RIGHT("0501234567", 4) ← "4567" (آخر 4).\n- =MID("INV-2025-0042", 5, 4) ← "2025" (ابدأ من الموضع 5 وخذ 4).\n\nمثالية لسحب الأكواد والسنوات وآذان الهواتف من النصوص المختلطة.\n\n### TRIM — المسافات الزائدة\n=TRIM(A2) تزيل المسافات الطرفية وتحول المسافات المزدوجة إلى واحدة. المسافات الخفية هي السبب الأول لفشل VLOOKUP "ظاهرياً" رغم تطابق القيمتين على الشاشة.\n\n### CLEAN — الحروف غير المرئية\n=CLEAN(A2) تزيل الحروف غير القابلة للطباعة (مثل فواصل الأسطر داخل الخلايا من بيانات مستوردة).\n\n### LEN — الطول\n=LEN(A2) تعد الحروف: 10 لهاتف، و13 لـ"INV-2025-0042". ومع الفلترة تكشف الشواذ: مدينة بطول 0 فارغة، وطول 20 في عمود أكواد من 6 خانات يعني تلف لصق.\n\n> TIP: التركيبة =TRIM(CLEAN(A2)) تصلح معظم مشكلات النص المستورد في خطوة واحدة.',
          },
          terms: [
            { en: 'String', ar: 'النص', def: { en: 'A sequence of characters stored as text.', ar: 'سلسلة حروف مخزنة كنص.' } },
            { en: 'Whitespace', ar: 'المسافة البيضاء', def: { en: 'Invisible space characters that break exact matches.', ar: 'حروف مسافات غير مرئية تفسد المطابقات التامة.' } },
            { en: 'Substring', ar: 'جزء من النص', def: { en: 'A piece of a longer text, like "INV" inside an invoice code.', ar: 'قطعة من نص أطول، مثل INV داخل كود فاتورة.' } },
          ],
          examples: [
            {
              title: { en: 'Why lookup failed', ar: 'لماذا فشل البحث' },
              body: {
                en: 'Both cells show "Riyadh" but =LEN gives 6 and 7 — the second carries a trailing space. =TRIM fixes it and VLOOKUP starts matching. This 60-second check solves a classic "the data is right but the formula is broken" mystery.',
                ar: 'الخليتان تعرضان "الرياض" لكن =LEN تعطي 6 و7 — فالثانية تحمل مسافة زائدة في النهاية. تصلحها TRIM وتبدأ VLOOKUP في المطابقة. هذا الفحص 60 ثانية يحل لغز "البيانات صحيحة لكن الصيغة معطوبة".',
              },
            },
          ],
          functions: [
            {
              name: 'LEFT', ar: 'دالة LEFT تعيد أول عدد محدد من الحروف من بداية النص — لاستخراج بادئات الأكواد.',
              syntax: '=LEFT(text, [num_chars])',
              args: [
                { name: 'text', desc: { en: 'The source text (required).', ar: 'النص المصدر (إلزامي).' } },
                { name: 'num_chars', desc: { en: 'How many characters from the start (default 1).', ar: 'عدد الحروف من البداية (الافتراضي 1).' } },
              ],
              example: '=LEFT("INV-2025-0042", 3)',
              result: { en: 'INV', ar: 'INV' },
              mistakes: [ { en: 'Spaces count as characters — " INV" trimmed differently than you expect.', ar: 'المسافات تعد حروفًا — فـ" INV" تُقص على غير المتوقع.' } ],
            },
            {
              name: 'RIGHT', ar: 'دالة RIGHT تعيد آخر عدد محدد من الحروف من نهاية النص — لآذان الهواتف أو أرقام التسلسل.',
              syntax: '=RIGHT(text, [num_chars])',
              args: [
                { name: 'text', desc: { en: 'The source text (required).', ar: 'النص المصدر (إلزامي).' } },
                { name: 'num_chars', desc: { en: 'How many characters from the end (default 1).', ar: 'عدد الحروف من النهاية (الافتراضي 1).' } },
              ],
              example: '=RIGHT("0501234567", 4)',
              result: { en: '4567', ar: '4567' },
              mistakes: [ { en: 'Using it on numbers stored as numbers — trailing zeros may be lost; keep as text.', ar: 'استخدامها على أرقام مخزنة كأرقام — قد تُفقد الأصفار النهائية؛ أبقِها نصاً.' } ],
            },
            {
              name: 'MID', ar: 'دالة MID تعيد عدد حروف من وسط النص بدءاً من موضع محدد — لاستخراج السنة من كود مثل INV-2025-0042.',
              syntax: '=MID(text, start_num, num_chars)',
              args: [
                { name: 'text', desc: { en: 'The source text (required).', ar: 'النص المصدر (إلزامي).' } },
                { name: 'start_num', desc: { en: 'Position to start from (1 = first character) (required).', ar: 'موضع البدء (1 = الحرف الأول) (إلزامي).' } },
                { name: 'num_chars', desc: { en: 'How many characters to take (required).', ar: 'عدد الحروف المأخوذة (إلزامي).' } },
              ],
              example: '=MID("INV-2025-0042", 5, 4)',
              result: { en: '2025', ar: '2025' },
              mistakes: [ { en: 'Counting positions from 0 — Excel starts at 1.', ar: 'العد من 0 — بينما يبدأ Excel من 1.' } ],
            },
            {
              name: 'TRIM', ar: 'دالة TRIM تزيل المسافات الزائدة من طرفي النص وتحوّل المسافات المزدوجة إلى واحدة — الخطوة الأولى في أي تنظيف نصوص.',
              syntax: '=TRIM(text)',
              args: [ { name: 'text', desc: { en: 'The text to clean (required).', ar: 'النص المراد تنظيفه (إلزامي).' } } ],
              example: '=TRIM(" Riyadh ")',
              result: { en: 'Riyadh', ar: 'Riyadh' },
              mistakes: [ { en: 'Expecting TRIM to fix non-breaking spaces from web data — those need SUBSTITUTE.', ar: 'توقع أن TRIM تصلح المسافات غير القابلة للكسر من بيانات الويب — تحتاج تلك SUBSTITUTE.' } ],
            },
            {
              name: 'CLEAN', ar: 'دالة CLEAN تزيل الحروف غير القابلة للطباعة مثل فواصل الأسطر المخبأة في الخلايا المستوردة.',
              syntax: '=CLEAN(text)',
              args: [ { name: 'text', desc: { en: 'The text to clean (required).', ar: 'النص المراد تنظيفه (إلزامي).' } } ],
              example: '=CLEAN(A2)',
              result: { en: 'The text without hidden control characters', ar: 'النص دون حروف التحكم المخفية' },
              mistakes: [ { en: 'CLEAN does NOT remove spaces — combine with TRIM.', ar: '‏CLEAN لا تزيل المسافات — ادمجها مع TRIM.' } ],
            },
            {
              name: 'LEN', ar: 'دالة LEN تعد عدد حروف النص — لتدقيق أطوال الأكواد والهواتف واكتشاف الفروق الخفية.',
              syntax: '=LEN(text)',
              args: [ { name: 'text', desc: { en: 'The text to measure (required).', ar: 'النص المراد قياسه (إلزامي).' } } ],
              example: '=LEN("0501234567")',
              result: { en: '10', ar: '10' },
              mistakes: [ { en: 'LEN counts spaces too — "Riyadh " is 7.', ar: 'تعد LEN المسافات أيضاً — "Riyadh " طولها 7.' } ],
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'What does =MID("SALE-2025-Q1-088", 6, 4) return? Type the 4 characters.',
              ar: 'ماذا تعيد =MID("SALE-2025-Q1-088", 6, 4)؟ اكتب الحروف الأربعة.',
            },
            accept: ['2025'],
            solution: { en: 'Starting at position 6, take 4 characters → 2025.', ar: 'من الموضع السادس خذ 4 حروف ← 2025.' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: '=RIGHT("INV-2025-0042", 4) returns…', ar: '=RIGHT("INV-2025-0042", 4) تعيد…' },
              options: [ { en: '0042', ar: '0042' }, { en: '2025', ar: '2025' }, { en: 'INV-', ar: 'INV-' }, { en: '42', ar: '42' } ],
              answer: 0,
              explain: { en: 'RIGHT takes from the end: the last 4 characters are 0042.', ar: '‏RIGHT تأخذ من النهاية: آخر 4 حروف هي 0042.' },
            },
            {
              type: 'num',
              q: { en: 'What does =LEN(" Riyadh ") return (both spaces included)?', ar: 'ماذا تعيد =LEN(" Riyadh ") (مع احتساب المسافتين)؟' },
              answer: 8,
              tolerance: 0.01,
              explain: { en: 'Space + 6 letters + space = 8 characters.', ar: 'مسافة + 6 حروف + مسافة = 8 حروف.' },
            },
            {
              type: 'fill',
              q: { en: 'The function that removes extra spaces is ______.', ar: 'الدالة التي تزيل المسافات الزائدة هي ______.', },
              accept: ['trim'],
              explain: { en: 'TRIM.', ar: '‏TRIM.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L2M7L2',
          title: { en: 'Joining and Changing Text: CONCAT, TEXTJOIN, SUBSTITUTE, UPPER, LOWER, PROPER', ar: 'وصل النص وتغييره: CONCAT وTEXTJOIN وSUBSTITUTE وUPPER وLOWER وPROPER' },
          minutes: 12,
          description: {
            en: 'Build readable text from pieces and standardize capitalization across thousands of rows.',
            ar: 'ابنِ نصوصاً مقروءة من قطع ووحّد حالة الأحرف عبر آلاف الصفوف.',
          },
          objectives: [
            { en: 'Join texts with CONCAT and TEXTJOIN', ar: 'وصل النصوص بـ CONCAT وTEXTJOIN' },
            { en: 'Replace text with SUBSTITUTE', ar: 'الاستبدال باستخدام SUBSTITUTE' },
            { en: 'Standardize case with UPPER, LOWER, PROPER', ar: 'توحيد حالة الأحرف بـ UPPER وLOWER وPROPER' },
          ],
          body: {
            en: '### CONCAT — الدمج\n=CONCAT(A2, " - ", B2) → "INV-0042 - Ahmad Ali". You can also join with the & operator: =A2&" - "&B2. Useful for building display labels.\n\n### TEXTJOIN — الدمج الذكي\n=TEXTJOIN(", ", TRUE, A2:A10) joins a whole range with a separator, and TRUE skips empty cells. Result: "Riyadh, Jeddah, Dammam". Far cleaner than chaining dozens of &.\n\n### SUBSTITUTE — الاستبدال\n=SUBSTITUTE(A2, "SR ", "") removes every "SR " from prices. With nested substitutes you clean chains: =SUBSTITUTE(SUBSTITUTE(A2, " ", ""), "-", "").\n\n### Case standardization\n- =UPPER(A2) → "RIYADH"\n- =LOWER(A2) → "riyadh"\n- =PROPER(A2) → "Riyadh" (capitalize each word)\n\nStandardizing case before Remove Duplicates is critical: Excel treats "riyadh" and "Riyadh" as DIFFERENT values in COUNTIF and duplicates checks.\n\n> TIP: Cleaning pipeline for a messy text column: =PROPER(TRIM(CLEAN(SUBSTITUTE(A2,";","")))) — each function peels one problem.',
          ar: '### CONCAT — الدمج\n=CONCAT(A2, " - ", B2) ← "INV-0042 - Ahmad Ali". ويمكن الدمج بمعامل & أيضًا: =A2&" - "&B2. مفيد لبناء وسوم عرض.\n\n### TEXTJOIN — الدمج الذكي\n=TEXTJOIN(", ", TRUE, A2:A10) تدمج نطاقاً كاملاً بفاصل، وTRUE تتجاهل الخلايا الفارغة. الناتج: "Riyadh, Jeddah, Dammam". أنظف بكثير من سلسلة علامات & طويلة.\n\n### SUBSTITUTE — الاستبدال\n=SUBSTITUTE(A2, "SR ", "") تزيل كل "SR " من الأسعار. وبالتداخل تنظف سلاسل: =SUBSTITUTE(SUBSTITUTE(A2, " ", ""), "-", "").\n\n### توحيد الحالة\n- =UPPER(A2) ← "RIYADH"\n- =LOWER(A2) ← "riyadh"\n- =PROPER(A2) ← "Riyadh" (أحرف كبيرة لبداية كل كلمة)\n\nتوحيد الحالة قبل Remove Duplicates حرج: يعتبر Excel "riyadh" و"Riyadh" قيمتين **مختلفتين** في COUNTA وفحوص التكرار.\n\n> TIP: خط تنظيف عمود نصي فوضوي: =PROPER(TRIM(CLEAN(SUBSTITUTE(A2,";","")))) — كل دالة تقشر مشكلة واحدة.',
          },
          terms: [
            { en: 'Concatenation', ar: 'الدمج', def: { en: 'Joining several text pieces into one string.', ar: 'وصل عدة نصوص في نص واحد.' } },
            { en: 'Delimiter', ar: 'الفاصل', def: { en: 'The character placed between joined pieces, like ", ".', ar: 'الحرف الموضوع بين القطع المدموجة مثل "، ".' } },
            { en: 'Case', ar: 'حالة الأحرف', def: { en: 'Upper, lower or capitalized form of letters.', ar: 'شكل الحروف: كبير أو صغير أو مبدوء بكبيرة.' } },
          ],
          examples: [
            {
              title: { en: 'Building full addresses', ar: 'بناء العناوين الكاملة' },
              body: {
                en: '=TEXTJOIN(", ", TRUE, Street, District, City) turns three columns into one mailing address: "King Fahd Rd, Al Olaya, Riyadh" — ready for label printing.',
                ar: '=TEXTJOIN("، ", TRUE, Street, District, City) تحول ثلاثة أعمدة إلى عنوان بريدي واحد: "طريق الملك فهد، العليا، الرياض" — جاهز لطباعة الملصقات.',
              },
            },
          ],
          functions: [
            {
              name: 'CONCAT', ar: 'دالة CONCAT تدمج نصوصاً من خلايا متعددة في نص واحد.',
              syntax: '=CONCAT(text1, [text2], ...)',
              args: [ { name: 'text1', desc: { en: 'First piece: text, cell or number (required).', ar: 'القطعة الأولى: نص أو خلية أو رقم (إلزامي).' } } ],
              example: '=CONCAT(A2, " - ", B2)',
              result: { en: 'INV-0042 - Ahmad Ali', ar: 'INV-0042 - Ahmad Ali' },
              mistakes: [ { en: 'Numbers lose leading zeros when joined — keep codes as text.', ar: 'تفقد الأرقام أصفارها عند الدمج — أبقِ الأكواد نصاً.' } ],
            },
            {
              name: 'TEXTJOIN', ar: 'دالة TEXTJOIN تدمج نطاقاً كاملاً بفاصل واحد وتتجاهل الفارغ إن أردت — الأفضل لدمج قوائم.',
              syntax: '=TEXTJOIN(delimiter, ignore_empty, text1, ...)',
              args: [
                { name: 'delimiter', desc: { en: 'Separator text like ", " (required).', ar: 'نص الفاصل مثل "، " (إلزامي).' } },
                { name: 'ignore_empty', desc: { en: 'TRUE skips empty cells (required).', ar: '‏TRUE لتجاهل الخلايا الفارغة (إلزامي).' } },
                { name: 'text1', desc: { en: 'Cells or ranges to join (required).', ar: 'الخلايا أو النطاقات المراد دمجها (إلزامي).' } },
              ],
              example: '=TEXTJOIN(", ", TRUE, A2:A10)',
              result: { en: 'Riyadh, Jeddah, Dammam', ar: 'Riyadh, Jeddah, Dammam' },
              mistakes: [ { en: 'Setting ignore_empty FALSE and getting doubles from blank cells.', ar: 'ضبط ignore_empty على FALSE والحصول على تكرارات من الخلايا الفارغة.' } ],
            },
            {
              name: 'SUBSTITUTE', ar: 'دالة SUBSTITUTE تستبدل نصاً بنص آخر داخل خلية — لإزالة "SR" أو تغيير الفواصل.',
              syntax: '=SUBSTITUTE(text, old_text, new_text, [instance_num])',
              args: [
                { name: 'text', desc: { en: 'Source text (required).', ar: 'النص المصدر (إلزامي).' } },
                { name: 'old_text', desc: { en: 'What to replace (required).', ar: 'ما سيُستبدل (إلزامي).' } },
                { name: 'new_text', desc: { en: 'Replacement; "" deletes (required).', ar: 'البديل؛ و"" تعني الحذف (إلزامي).' } },
              ],
              example: '=SUBSTITUTE(A2, "SR ", "")',
              result: { en: '450 SAR → 450', ar: '450 SR ← 450' },
              mistakes: [ { en: 'Case-sensitive: substituting "sr" will not touch "SR".', ar: 'حساسة لحالة الأحرف: استبدال "sr" لا يمس "SR".' } ],
            },
            {
              name: 'UPPER', ar: 'دالة UPPER تحول النص إلى أحرف كبيرة — لتوحيد الأكواد.',
              syntax: '=UPPER(text)',
              args: [ { name: 'text', desc: { en: 'Text to capitalize (required).', ar: 'النص المراد تحويله (إلزامي).' } } ],
              example: '=UPPER("inv-0042")',
              result: { en: 'INV-0042', ar: 'INV-0042' },
              mistakes: [ { en: 'Applies to the whole cell — Arabic text is unaffected, Latin text changes.', ar: 'تنطبق على الخلية كلها — النص العربي لا يتأثر واللاتيني يتغير.' } ],
            },
            {
              name: 'LOWER', ar: 'دالة LOWER تحول النص إلى أحرف صغيرة — لتوحيد الإيميلات مثلًا.',
              syntax: '=LOWER(text)',
              args: [ { name: 'text', desc: { en: 'Text to lowercase (required).', ar: 'النص المراد تحويله (إلزامي).' } } ],
              example: '=LOWER("Ahmad@Mail.COM")',
              result: { en: 'ahmad@mail.com', ar: 'ahmad@mail.com' },
              mistakes: [ { en: 'Emails are case-insensitive in practice but duplicates checks are not — standardize with LOWER first.', ar: 'الإيميلات لا تفرق عملياً لكن فحوص التكرار تفرق — وحّد بـ LOWER أولاً.' } ],
            },
            {
              name: 'PROPER', ar: 'دالة PROPER تبدأ كل كلمة بحرف كبير — "ahmad ali" تصبح "Ahmad Ali"، لتنسيق الأسماء والمدن.',
              syntax: '=PROPER(text)',
              args: [ { name: 'text', desc: { en: 'Text to capitalize (required).', ar: 'النص المراد تنسيقه (إلزامي).' } } ],
              example: '=PROPER("ahmad ali")',
              result: { en: 'Ahmad Ali', ar: 'Ahmad Ali' },
              mistakes: [ { en: 'PROPER mangles codes: "inv-0042" becomes "Inv-0042" — use UPPER for codes.', ar: '‏PROPER تخرب الأكواد: "inv-0042" تصبح "Inv-0042" — استخدم UPPER للأكواد.' } ],
            },
          ],
          exercise: {
            kind: 'input',
            prompt: {
              en: 'What does =PROPER(TRIM(" riyadh ")) return? Type the result exactly.',
              ar: 'ماذا تعيد =PROPER(TRIM(" riyadh "))؟ اكتب الناتج كما هو.',
            },
            accept: ['riyadh'],
            solution: { en: 'TRIM removes spaces, PROPER capitalizes → "Riyadh". (Accepted lowercase or capitalized.)', ar: '‏TRIM تزيل المسافات وPROPER تبدّل الحرف الأول ← "Riyadh". (يُقبل الناتج بأي حالة حروف.)' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which formula joins city cells A2:A6 with ", " skipping blanks?', ar: 'أي صيغة تدمج خلايا المدن A2:A6 بفاصل "، " متجاهلة الفراغ؟' },
              options: [
                { en: '=TEXTJOIN(", ", TRUE, A2:A6)', ar: '=TEXTJOIN("، ", TRUE, A2:A6)' },
                { en: '=CONCAT(A2:A6, ", ")', ar: '=CONCAT(A2:A6, "، ")' },
                { en: '=UPPER(A2:A6)', ar: '=UPPER(A2:A6)' },
                { en: '=LEN(A2:A6)', ar: '=LEN(A2:A6)' },
              ],
              answer: 0,
              explain: { en: 'TEXTJOIN takes a delimiter, an ignore-empty flag, and the whole range.', ar: '‏TEXTJOIN تأخذ الفاصل وعلامة تجاهل الفراغ والنطاق كاملاً.' },
            },
            {
              type: 'mcq',
              q: { en: 'Why standardize case BEFORE Remove Duplicates?', ar: 'لماذا نوحّد حالة الأحرف قبل Remove Duplicates؟' },
              options: [
                { en: '"Riyadh" and "riyadh" are treated as different values', ar: 'لأن "Riyadh" و"riyadh" تُعاملان كقيمتين مختلفتين' },
                { en: 'It makes the file smaller', ar: 'لأن ذلك يصغر حجم الملف' },
                { en: 'Excel refuses duplicates otherwise', ar: 'لأن Excel يرفض التكرار غير ذلك' },
                { en: 'No reason, order does not matter', ar: 'لا سبب، والترتيب غير مهم' },
              ],
              answer: 0,
              explain: { en: 'Duplicates and COUNTIF are case-sensitive-ish in practice — normalize first, dedupe second.', ar: 'فحوص التكرار وCOUNTIF حساسة عملياً لحالة الأحرف — وحّد أولاً ثم أزل التكرار.' },
            },
            {
              type: 'fill',
              q: { en: 'The function that capitalizes the first letter of every word is ______.', ar: 'الدالة التي تجعل أول حرف من كل كلمة كبيراً هي ______.', },
              accept: ['proper'],
              explain: { en: 'PROPER.', ar: '‏PROPER.' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L2M8',
      name: { en: 'Date Functions', ar: 'دوال التواريخ' },
      lessons: [
        {
          id: 'L2M8L1',
          title: { en: 'TODAY, NOW, YEAR, MONTH, DAY, DATE, DATEDIF and EOMONTH', ar: 'دوال التواريخ: TODAY وNOW وYEAR وMONTH وDAY وDATE وDATEDIF وEOMONTH' },
          minutes: 13,
          description: {
            en: 'Master dates: today\u2019s date, splitting dates into parts, building dates, age/duration calculation and month ends.',
            ar: 'أتقن التواريخ: تاريخ اليوم، وتفكيك التاريخ إلى أجزاء، وبناء التواريخ، وحساب المدد ونهايات الشهور.',
          },
          objectives: [
            { en: 'Insert today\u2019s date and understand date serials', ar: 'إدراج تاريخ اليوم وفهم الأرقام المسلسلة للتواريخ' },
            { en: 'Extract year, month and day from dates', ar: 'استخراج السنة والشهر واليوم من التواريخ' },
            { en: 'Calculate durations with DATEDIF and month ends with EOMONTH', ar: 'حساب المدد بـ DATEDIF ونهايات الشهور بـ EOMONTH' },
          ],
          body: {
            en: '### How Excel stores dates\nA date is a NUMBER: the count of days since 1899-12-30. 2025-03-14 is serial 45730. That is why dates sort correctly and why 2025-03-14 + 7 gives another date. If a date is left-aligned, it is TEXT — calculations will fail until converted.\n\n### TODAY and NOW\n=TODAY() → today\u2019s date, refreshing every day. =NOW() → date and time. Neither takes arguments. Great for "days since order": =TODAY()-B2.\n\n### Splitting dates\n=YEAR(B2) → 2025, =MONTH(B2) → 3, =DAY(B2) → 14. Grouping monthly reports always starts with =YEAR(A2)&"-"&TEXT(MONTH(A2),"00").\n\n### Building dates\n=DATE(2025, 3, 14) → the real date. DATE also handles overflow: =DATE(2025, 13, 1) becomes 2026-01-01 — handy for "next month" math.\n\n### DATEDIF — المدد\n=DATEDIF(start, end, "Y") years, "M" months, "D" days between two dates. Employee age: =DATEDIF(H2, TODAY(), "Y").\n\n### EOMONTH — نهاية الشهر\n=EOMONTH(B2, 0) → last day of that month; =EOMONTH(B2, 1) → last day of NEXT month. Perfect for due-date rules like "payment at month end".\n\n> TIP: Compare dates with > and <: =IF(B2<TODAY(), "Overdue", "OK") — but only when B2 is a real date, not text.',
          ar: '### كيف يخزن Excel التواريخ\nالتاريخ رقم: عدد الأيام منذ 1899-12-30. التاريخ 2025-03-14 هو الرقم المسلسل 45730. لهذا تُرتب التواريخ صحيحةً ولهذا يعطي 2025-03-14 + 7 تاريخاً آخر. وإذا كان التاريخ محاذىً يساراً فهو نص — وستفشل الحسابات حتى تحوّله.\n\n### TODAY وNOW\n=TODAY() ← تاريخ اليوم ويتجدد كل يوم. =NOW() ← التاريخ والوقت. ولا تأخذان معاملات. مفيدتان لـ"الأيام منذ الطلب": =TODAY()-B2.\n\n### تفكيك التواريخ\n=YEAR(B2) ← 2025، و=MONTH(B2) ← 3، و=DAY(B2) ← 14. وتقارير التجميع الشهري تبدأ دائماً بـ=YEAR(A2)&"-"&TEXT(MONTH(A2),"00").\n\n### بناء التواريخ\n=DATE(2025, 3, 14) ← التاريخ الحقيقي. وتتعامل DATE مع الفائض: =DATE(2025, 13, 1) تصبح 2026-01-01 — مفيدة لحساب "الشهر التالي".\n\n### DATEDIF — المدد\n=DATEDIF(البداية، النهاية، "Y") سنوات، و"M" أشهر، و"D" أيام بين تاريخين. عمر الموظف: =DATEDIF(H2, TODAY(), "Y").\n\n### EOMONTH — نهاية الشهر\n=EOMONTH(B2, 0) ← آخر يوم في ذلك الشهر؛ و=EOMONTH(B2, 1) ← آخر يوم في الشهر التالي. مثالية لقواعد مثل "السداد نهاية الشهر".\n\n> TIP: قارن التواريخ بـ > و <: =IF(B2<TODAY(), "Overdue", "OK") — لكن فقط عندما يكون B2 تاريخاً حقيقياً لا نصاً.',
          },
          terms: [
            { en: 'Date Serial', ar: 'الرقم المسلسل للتاريخ', def: { en: 'The internal number Excel uses to store a date.', ar: 'الرقم الداخلي الذي يستخدمه Excel لتخزين التاريخ.' } },
            { en: 'DATEDIF', ar: 'دالة الفارق الزمني', def: { en: 'Returns the difference between dates in years, months or days.', ar: 'تعيد الفرق بين تاريخين بالسنوات أو الأشهر أو الأيام.' } },
            { en: 'EOMONTH', ar: 'نهاية الشهر', def: { en: 'Returns the last day of a month, offset by N months.', ar: 'تعيد آخر يوم في الشهر بإزاحة N شهر.' } },
          ],
          examples: [
            {
              title: { en: 'Invoice aging report', ar: 'تقرير أعمار الفواتير' },
              body: {
                en: 'Invoice date in B: =TODAY()-B2 gives days outstanding. =IFS(TODAY()-B2<=30, "Current", TODAY()-B2<=60, "30-60", TRUE, "Over 60") builds an aging column that updates itself every morning.',
                ar: 'تاريخ الفاتورة في B: تعطي =TODAY()-B2 عدد الأيام المتأخرة. و=IFS(TODAY()-B2<=30, "Current", TODAY()-B2<=60, "30-60", TRUE, "Over 60") تبني عمود أعمار يتجدد تلقائياً كل صباح.',
              },
            },
          ],
          functions: [
            {
              name: 'TODAY', ar: 'دالة TODAY تعيد تاريخ اليوم وتتجدد تلقائياً كل يوم — بلا معاملات.',
              syntax: '=TODAY()',
              args: [ { name: '—', desc: { en: 'No arguments.', ar: 'بلا معاملات.' } } ],
              example: '=TODAY()-B2',
              result: { en: 'Days since the date in B2', ar: 'عدد الأيام منذ التاريخ في B2' },
              mistakes: [ { en: 'Copying TODAY() as a fixed value vs formula — Paste Values freezes it.', ar: 'نسخ TODAY() كقيمة ثابتة بدل صيغة — اللصق كقيمة يجمد التاريخ.' } ],
            },
            {
              name: 'NOW', ar: 'دالة NOW تعيد التاريخ والوقت الحاليين وتتجددان مع كل إعادة حساب.',
              syntax: '=NOW()',
              args: [ { name: '—', desc: { en: 'No arguments.', ar: 'بلا معاملات.' } } ],
              example: '=NOW()',
              result: { en: 'Current date and time', ar: 'التاريخ والوقت الحاليان' },
              mistakes: [ { en: 'NOW changes on every recalculation — do not use it for timestamps you must keep.', ar: 'تتغير NOW مع كل إعادة حساب — لا تستخدمها لأثر زمني يجب حفظه.' } ],
            },
            {
              name: 'YEAR', ar: 'دالة YEAR تستخرج السنة من تاريخ — أساس تجميع التقارير السنوية.',
              syntax: '=YEAR(serial_number)',
              args: [ { name: 'serial_number', desc: { en: 'A real date cell (required).', ar: 'خلية تاريخ حقيقية (إلزامي).' } } ],
              example: '=YEAR(B2)',
              result: { en: '2025 for 2025-03-14', ar: '2025 للتاريخ 2025-03-14' },
              mistakes: [ { en: 'On TEXT dates it returns #VALUE! — convert first.', ar: 'على تواريخ نصية تعيد #VALUE! — حوّل أولاً.' } ],
            },
            {
              name: 'MONTH', ar: 'دالة MONTH تستخرج رقم الشهر (1-12) من تاريخ — لجمع المبيعات شهرياً.',
              syntax: '=MONTH(serial_number)',
              args: [ { name: 'serial_number', desc: { en: 'A real date cell (required).', ar: 'خلية تاريخ حقيقية (إلزامي).' } } ],
              example: '=MONTH(B2)',
              result: { en: '3 for March', ar: '3 لشهر مارس' },
              mistakes: [ { en: 'Month 3 is a NUMBER — format it as "00" for tidy "2025-03" labels.', ar: 'الشهر 3 رقم — نسّقه "00" للحصول على وسوم "2025-03" مرتبة.' } ],
            },
            {
              name: 'DAY', ar: 'دالة DAY تستخرج رقم اليوم من الشهر (1-31) من تاريخ.',
              syntax: '=DAY(serial_number)',
              args: [ { name: 'serial_number', desc: { en: 'A real date cell (required).', ar: 'خلية تاريخ حقيقية (إلزامي).' } } ],
              example: '=DAY(B2)',
              result: { en: '14 for 2025-03-14', ar: '14 للتاريخ 2025-03-14' },
              mistakes: [ { en: 'Confusing DAY (day of month) with DATEDIF(...,"D") (days between dates).', ar: 'الخلط بين DAY (يوم الشهر) وDATEDIF(...,"D") (الأيام بين تاريخين).' } ],
            },
            {
              name: 'DATE', ar: 'دالة DATE تبني تاريخاً حقيقياً من سنة وشهر ويوم — وتعالج الفائض مثل الشهر 13.',
              syntax: '=DATE(year, month, day)',
              args: [
                { name: 'year', desc: { en: 'Four-digit year (required).', ar: 'السنة بأربعة أرقام (إلزامي).' } },
                { name: 'month', desc: { en: 'Month number; values >12 roll over (required).', ar: 'رقم الشهر؛ والقيم فوق 12 تتجاوز للسنة التالية (إلزامي).' } },
                { name: 'day', desc: { en: 'Day number (required).', ar: 'رقم اليوم (إلزامي).' } },
              ],
              example: '=DATE(2025, 3, 14)',
              result: { en: 'The date 2025-03-14', ar: 'التاريخ 2025-03-14' },
              mistakes: [ { en: 'Two-digit years: DATE(25,...) means 1925 in some systems — always write 4 digits.', ar: 'سنوات برقمين: قد تعني DATE(25,...) عام 1925 — اكتب 4 أرقام دائماً.' } ],
            },
            {
              name: 'DATEDIF', ar: 'دالة DATEDIF تحسب الفرق بين تاريخين بالسنوات "Y" أو الأشهر "M" أو الأيام "D" — لحساب الأعمار والمدد.',
              syntax: '=DATEDIF(start_date, end_date, unit)',
              args: [
                { name: 'start_date', desc: { en: 'Earlier date (required).', ar: 'التاريخ الأسبق (إلزامي).' } },
                { name: 'end_date', desc: { en: 'Later date (required).', ar: 'التاريخ الأحدث (إلزامي).' } },
                { name: 'unit', desc: { en: '"Y", "M" or "D" in quotes (required).', ar: '‏"Y" أو "M" أو "D" بين اقتباسين (إلزامي).' } },
              ],
              example: '=DATEDIF(H2, TODAY(), "Y")',
              result: { en: 'Employee age in full years', ar: 'عمر الموظف بالسنوات الكاملة' },
              mistakes: [ { en: 'DATEDIF is hidden — it exists but is not in the function list; type it manually.', ar: '‏DATEDIF مخفية — موجودة لكنها ليست في قائمة الدوال؛ اكتبها يدوياً.' } ],
            },
            {
              name: 'EOMONTH', ar: 'دالة EOMONTH تعيد آخر يوم في الشهر مع إمكانية الإزاحة N شهراً — لاستحقاقات نهاية الشهر.',
              syntax: '=EOMONTH(start_date, months)',
              args: [
                { name: 'start_date', desc: { en: 'Any date inside the target month (required).', ar: 'أي تاريخ داخل الشهر المستهدف (إلزامي).' } },
                { name: 'months', desc: { en: '0 = this month, 1 = next, -1 = previous (required).', ar: '‏0 هذا الشهر، 1 التالي، -1 السابق (إلزامي).' } },
              ],
              example: '=EOMONTH(B2, 1)',
              result: { en: 'Last day of the following month', ar: 'آخر يوم في الشهر التالي' },
              mistakes: [ { en: 'EOMONTH returns a real date — format the cell as Date or you will see a serial number.', ar: 'تعيد EOMONTH تاريخاً حقيقياً — نسّق الخلية كتاريخ وإلا رأيت رقماً مسلسلاً.' } ],
            },
          ],
          exercise: {
            kind: 'value',
            prompt: {
              en: 'H2 holds 1998-05-12 and today is 2025-03-14. What does =DATEDIF(H2, DATE(2025,3,14), "Y") return?',
              ar: '‏H2 تحمل 1998-05-15 واليوم 2025-03-14. ماذا تعيد =DATEDIF(H2, DATE(2025,3,14), "Y")؟',
            },
            accept: ['26'],
            tolerance: 0.01,
            solution: { en: 'From 1998 to 2025 is 26 full years (birthday not yet reached in 2025 at the comparison date).', ar: 'من 1998 إلى 2025 هناك 26 سنة كاملة (لم يصل عيد الميلاد بعد عند تاريخ المقارنة).' },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: '=EOMONTH(DATE(2025,2,10), 0) returns…', ar: '=EOMONTH(DATE(2025,2,10), 0) تعيد…' },
              options: [ { en: '2025-02-28', ar: '2025-02-28' }, { en: '2025-02-10', ar: '2025-02-10' }, { en: '2025-03-01', ar: '2025-03-01' }, { en: '2025-02-30', ar: '2025-02-30' } ],
              answer: 0,
              explain: { en: 'February 2025 has 28 days — EOMONTH returns its last day.', ar: 'فبراير 2025 فيه 28 يوماً — وتعيد EOMONTH آخر يوم فيه.' },
            },
            {
              type: 'num',
              q: { en: '=YEAR(DATE(2030, 7, 1)) equals…?', ar: 'ما ناتج =YEAR(DATE(2030, 7, 1))؟' },
              answer: 2030,
              tolerance: 0.01,
              explain: { en: 'DATE builds 2030-07-01; YEAR extracts 2030.', ar: 'تبني DATE التاريخ 2030-07-01 وتستخرجه YEAR كـ 2030.' },
            },
            {
              type: 'fill',
              q: { en: 'The hidden function that computes the difference between two dates is ______.', ar: 'الدالة المخفية التي تحسب الفرق بين تاريخين هي ______.', },
              accept: ['datedif'],
              explain: { en: 'DATEDIF — with units "Y", "M", "D".', ar: '‏DATEDIF — بوحدات "Y" و"M" و"D".' },
            },
          ],
          xp: 25,
        },
      ],
    },
    {
      id: 'L2M9',
      name: { en: 'Advanced Excel Reporting', ar: 'التقارير المتقدمة في Excel' },
      lessons: [
        {
          id: 'L2M9L1',
          title: { en: 'Pivot Tables, Pivot Charts and Slicers', ar: 'الجداول المحورية والرسوم المحورية والمقسمات' },
          minutes: 13,
          description: {
            en: 'The single most valuable Excel skill: summarize thousands of rows in seconds with Pivot Tables.',
            ar: 'أهم مهارة في Excel: تلخيص آلاف الصفوف في ثوانٍ باستخدام Pivot Tables.',
          },
          objectives: [
            { en: 'Build a Pivot Table from raw data', ar: 'بناء Pivot Table من بيانات خام' },
            { en: 'Configure Rows, Values and Filters', ar: 'ضبط الصفوف والقيم والفلاتر' },
            { en: 'Add slicers for interactive filtering', ar: 'إضافة Slicers للفلترة التفاعلية' },
          ],
          body: {
            en: '### What a Pivot Table does\nIt re-arranges (pivots) your data into a summary: rows = categories, values = aggregated numbers. Instead of writing 20 SUMIFS formulas, drag fields and Excel writes the math for you.\n\n### Building one\n1. Click any cell in your Excel Table.\n2. Insert → PivotTable → New Worksheet → OK.\n3. In the field list:\n   - **Rows**: City\n   - **Values**: Amount (Sum)\n   - **Columns**: Status (optional split)\n   - **Filters**: Year\n4. Right-click a value → Value Field Settings to switch Sum → Average → Count.\n\nResult: total and average sales per city per status, recalculated whenever the source data changes (right-click → Refresh).\n\n### Pivot Charts and Slicers\nPivotChart (Insert → PivotChart) draws the same summary. **Slicers** (Insert → Slicer) add clickable buttons — clicking "Riyadh" filters the whole dashboard instantly. Slicers are what make a sheet feel like an app.\n\n> TIP: Always build pivots from an Excel Table, not a plain range — new rows then flow into the pivot automatically after Refresh.',
          ar: '### ماذا تفعل Pivot Table\nتعيد ترتيب بياناتك (محورها) في ملخص: الصفوف فئات، والقيم أرقام مجمعة. بدل كتابة 20 صيغة SUMIFS، اسحب الحقول فيكتب Excel الحساب عنك.\n\n### بناؤها\n1. اضغط أي خلية داخل Excel Table.\n2. Insert ← PivotTable ← New Worksheet ← OK.\n3. في قائمة الحقول:\n   - **Rows**: City\n   - **Values**: Amount (Sum)\n   - **Columns**: Status (تقسيم اختياري)\n   - **Filters**: Year\n4. اضغط بالزر الأيمن على قيمة ← Value Field Settings للتحويل من Sum إلى Average إلى Count.\n\nالنتيجة: إجمالي ومتوسط المبيعات لكل مدينة ولكل حالة، وتُحسب من جديد كلما تغيرت البيانات (زر أيمن ← Refresh).\n\n### الرسوم والمقسمات\n‏PivotChart (‏Insert ← PivotChart) يرسم الملخص نفسه. و**المقسمات** Slicers (‏Insert ← Slicer) تضيف أزراراً قابلة للنقر — الضغط على "الرياض" يفلتر لوحة كاملة فوراً. المقسمات هي ما يجعل الورقة تشبه التطبيقات.\n\n> TIP: ابنِ المحاور دائماً من Excel Table لا من نطاق عادي — فالصفوف الجديدة تدخل المحور تلقائياً بعد Refresh.',
          },
          terms: [
            { en: 'Pivot Table', ar: 'الجدول المحوري', def: { en: 'Excel tool that summarizes data by dragging fields into rows/columns/values.', ar: 'أداة تلخص البيانات بسحب الحقول إلى صفوف وأعمدة وقيم.' } },
            { en: 'Slicer', ar: 'المقسم', def: { en: 'Clickable filter buttons connected to pivots/charts.', ar: 'أزرار فلترة قابلة للنقر متصلة بالمحاور والرسوم.' } },
            { en: 'Aggregation', ar: 'التجميع', def: { en: 'Rolling many rows into one number: sum, count, average.', ar: 'ضم صفوف كثيرة في رقم واحد: مجموع أو عدد أو متوسط.' } },
          ],
          examples: [
            {
              title: { en: 'One pivot instead of 40 formulas', ar: 'محور واحد بدل 40 صيغة' },
              body: {
                en: '5 cities × 4 product categories × 2 statuses = 40 SUMIFS cells to maintain. A Pivot Table builds the same grid in 30 seconds and never misaligns.',
                ar: '‏5 مدن × 4 فئات منتجات × حالتان = 40 خلية SUMIFS تحتاج صيانة. وPivot Table تبني الشبكة نفسها في 30 ثانية ولا تنحرف أبداً.',
              },
            },
          ],
          steps: [
            { en: 'Convert raw data to an Excel Table (Ctrl+T) and name it.', ar: 'حوّل البيانات الخام إلى Excel Table (Ctrl+T) وسمّها.' },
            { en: 'Insert → PivotTable → place on a new sheet.', ar: '‏Insert ← PivotTable ← ضعها في ورقة جديدة.' },
            { en: 'Drag City to Rows, Amount to Values, Status to Columns.', ar: 'اسحب City إلى Rows وAmount إلى Values وStatus إلى Columns.' },
            { en: 'Insert a Slicer for City and try clicking it.', ar: 'أدرج Slicer للمدينة وجرّب النقر عليه.' },
            { en: 'When source data changes: right-click the pivot → Refresh.', ar: 'عند تغير البيانات: زر أيمن على المحور ← Refresh.' },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'In real Excel: build a Pivot Table from any list showing total sales by city, and add one slicer.',
              ar: 'في Excel الحقيقي: ابنِ Pivot Table من أي قائمة تعرض إجمالي المبيعات حسب المدينة وأضف مقسماً واحداً.',
            },
            confirm: [
              { en: 'I built a Pivot Table with Rows and Values', ar: 'بنيت Pivot Table بصفوف وقيم' },
              { en: 'I changed an aggregation to Average or Count', ar: 'غيرت تجميعاً إلى Average أو Count' },
              { en: 'I inserted and used a Slicer', ar: 'أدرجت واستخدمت Slicer' },
            ],
            solution: {
              en: 'Field list: drag fields between the four boxes. Value Field Settings changes Sum→Average→Count. Refresh keeps results current.',
              ar: 'قائمة الحقول: اسحب الحقول بين الصناديق الأربعة. وValue Field Settings تغير Sum←Average←Count. وRefresh تبقي النتائج حديثة.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'A Pivot Table summarizing Amount by City belongs in which areas?', ar: '‏Pivot Table تلخص Amount حسب City — أين تضع الحقلين؟' },
              options: [
                { en: 'City → Rows, Amount → Values', ar: 'City إلى Rows وAmount إلى Values' },
                { en: 'City → Values, Amount → Rows', ar: 'City إلى Values وAmount إلى Rows' },
                { en: 'Both in Filters', ar: 'كلاهما في Filters' },
                { en: 'Both in Columns', ar: 'كلاهما في Columns' },
              ],
              answer: 0,
              explain: { en: 'The category goes to Rows, the number to Values (aggregated).', ar: 'الفئة إلى Rows والرقم إلى Values (مجمعاً).' },
            },
            {
              type: 'mcq',
              q: { en: 'Your pivot ignores rows you added yesterday. What did you forget?', ar: 'يتجاهل المحور الصفوف التي أضفتها أمس. ماذا نسيت؟' },
              options: [ { en: 'Refresh the Pivot Table', ar: 'تحديث Pivot Table' }, { en: 'Saving the file', ar: 'حفظ الملف' }, { en: 'Adding a slicer', ar: 'إضافة مقسم' }, { en: 'Formatting the values', ar: 'تنسيق القيم' } ],
              answer: 0,
              explain: { en: 'Pivots cache data — Refresh pulls in the new rows (a Table source picks them up automatically).', ar: 'المحاور تخزن البيانات — وRefresh تجلب الصفوف الجديدة (ومصدر Table يلتقطها تلقائياً).' },
            },
            {
              type: 'fill',
              q: { en: 'The interactive filter buttons connected to pivots are called ______.', ar: 'أزرار الفلترة التفاعلية المتصلة بالمحاور تسمى ______.', },
              accept: ['slicers', 'slicer'],
              explain: { en: 'Slicers — one click filters every connected pivot/chart.', ar: 'المقسمات (Slicers) — نقرة واحدة تفلتر كل المحاور والرسوم المتصلة.' },
            },
          ],
          xp: 25,
        },
        {
          id: 'L2M9L2',
          title: { en: 'Charts, Basic Dashboards and Report Formatting', ar: 'الرسوم البيانية ولوحات المعلومات الأساسية وتنسيق التقارير' },
          minutes: 12,
          description: {
            en: 'Turn tables into visuals: choose the right chart, assemble a simple dashboard, format like a pro.',
            ar: 'حوّل الجداول إلى مرئيات: اختر الرسم المناسب، واجمع لوحة معلومات بسيطة، ونّسق باحترافية.',
          },
          objectives: [
            { en: 'Select the correct chart for each data story', ar: 'اختيار الرسم الصحيح لكل قصة بيانات' },
            { en: 'Assemble a simple KPI dashboard sheet', ar: 'تجميع ورقة لوحة مؤشرات بسيطة' },
            { en: 'Apply clean report formatting rules', ar: 'تطبيق قواعد تنسيق نظيفة للتقارير' },
          ],
          body: {
            en: '### Choosing the chart\n- **Column/Bar**: compare categories (sales per city).\n- **Line**: change over time (monthly trend).\n- **Pie**: parts of ONE whole (share by region — max 5 slices).\n- **Card/Big number**: single KPI (total revenue).\n- **Table with conditional formatting**: many details at once.\n\n### The mini-dashboard layout\nA dashboard sheet answers "how are we doing?" in one screen:\n\n```\n[ TOTAL REVENUE ] [ ORDERS ] [ AVG ORDER ]\n[ Sales trend line chart          ]\n[ Sales by city bar chart         ]\n[ Slicer: Year | City | Status    ]\n```\n\nTop KPI row, one trend, one comparison, slicers for interaction. Everything else is clutter.\n\n### Report formatting rules\n- Freeze headers; format numbers consistently (1,250 SAR).\n- One accent color; red only for problems.\n- Meaningful sheet names ("Sales_2025_03" not "Sheet3").\n- Put assumptions and source notes at the bottom.\n\n> TIP: A chart without a clear title ("Sales by City — 2025") forces readers to guess. Titles are part of the data.',
          ar: '### اختيار الرسم\n- **الأعمدة/الأشرطة** (Column/Bar): مقارنة فئات (المبيعات لكل مدينة).\n- **الخط** (Line): التغير عبر الزمن (اتجاه شهري).\n- **الدائرة** (Pie): أجزاء من كل واحد (حصة كل منطقة — 5 شرائح كحد أقصى).\n- **البطاقة/الرقم الكبير**: مؤشر واحد (إجمالي الإيراد).\n- **جدول بتنسيق شرطي**: تفاصيل كثيرة دفعة واحدة.\n\n### تخطيط اللوحة المصغرة\nورقة اللوحة تجيب عن "كيف حالنا؟" في شاشة واحدة:\n\n```\n[ الإيراد الإجمالي ] [ الطلبات ] [ متوسط الطلب ]\n[ رسم اتجاه المبيعات الخطي       ]\n[ رسم أعمدة المبيعات حسب المدينة ]\n[ مقسمات: السنة | المدينة | الحالة ]\n```\n\nصف مؤشرات أعلى اللوحة، ثم اتجاه واحد، ومقارنة واحدة، ومقسمات للتفاعل. كل ما عدا ذلك ضجيج.\n\n### قواعد تنسيق التقارير\n- ثبّت العناوين، ونّسق الأرقام باستمرار (1,250 ريال).\n- لون أساسي واحد؛ والأحمر للمشكلات فقط.\n- أسماء أوراق ذات معنى ("Sales_2025_03" لا "Sheet3").\n- ضع الافتراضات ومصادر البيانات أسفل التقرير.\n\n> TIP: الرسم بلا عنوان واضح ("المبيعات حسب المدينة — 2025") يجبر القارئ على التخمين. العناوين جزء من البيانات.',
          },
          terms: [
            { en: 'Dashboard', ar: 'لوحة المعلومات', def: { en: 'One screen of charts and KPIs answering key business questions.', ar: 'شاشة واحدة من الرسوم والمؤشرات تجيب أسئلة العمل الأساسية.' } },
            { en: 'KPI', ar: 'مؤشر الأداء', def: { en: 'Key Performance Indicator — the number that matters most.', ar: 'مؤشر أداء رئيسي — الرقم الأهم في القياس.' } },
            { en: 'Trend', ar: 'الاتجاه', def: { en: 'The general direction of values over time.', ar: 'الاتجاه العام للقيم عبر الزمن.' } },
          ],
          examples: [
            {
              title: { en: 'The 5-slice pie rule', ar: 'قاعدة الشرائح الخمس' },
              body: {
                en: 'A pie of 14 product categories is unreadable. Keep the top 4 + "Other". Same information, instantly readable — dashboards respect the reader\u2019s time.',
                ar: 'دائرة من 14 فئة منتجات غير مقروءة. أبقِ أعلى 4 + "أخرى". نفس المعلومة ومقروءة فوراً — فاللوحات تحترم وقت القارئ.',
              },
            },
          ],
          exercise: {
            kind: 'checklist',
            prompt: {
              en: 'In the Excel Lab (or real Excel): build the mini-dashboard layout — one KPI cell, one chart, one slicer or filter.',
              ar: 'في معمل Excel (أو Excel الحقيقي): ابنِ تخطيط اللوحة المصغرة — خلية مؤشر، ورسم واحد، ومقسم أو فلتر.',
            },
            confirm: [
              { en: 'I created a KPI cell with a formula', ar: 'أنشأت خلية مؤشر بصيغة' },
              { en: 'I inserted a chart with a clear title', ar: 'أدرجت رسماً بعنوان واضح' },
              { en: 'I added a slicer or filter for interaction', ar: 'أضفت مقسماً أو فلتراً للتفاعل' },
            ],
            solution: {
              en: 'KPI: =SUM(Table[Amount]) in a big formatted cell. Chart: select the pivot → Insert → Column. Slicer: Insert → Slicer.',
              ar: 'المؤشر: =SUM(Table[Amount]) في خلية كبيرة منسقة. الرسم: حدد المحور ← Insert ← Column. المقسم: Insert ← Slicer.',
            },
          },
          quiz: [
            {
              type: 'mcq',
              q: { en: 'Which chart best shows monthly sales trends across 12 months?', ar: 'أي رسم يُظهر اتجاه المبيعات الشهرية عبر 12 شهراً بأفضل شكل؟' },
              options: [ { en: 'Line chart', ar: 'رسم خطي' }, { en: 'Pie chart', ar: 'رسم دائري' }, { en: 'Scatter', ar: 'انتشار' }, { en: 'Single card', ar: 'بطاقة واحدة' } ],
              answer: 0,
              explain: { en: 'Line charts are made for change over time.', ar: 'الرسوم الخطية مصممة للتغير عبر الزمن.' },
            },
            {
              type: 'mcq',
              q: { en: 'What belongs at the TOP of a mini dashboard?', ar: 'ماذا يوضع أعلى اللوحة المصغرة؟' },
              options: [
                { en: 'The headline KPI numbers', ar: 'أرقام المؤشرات الرئيسية' },
                { en: 'The raw 3,000-row table', ar: 'الجدول الخام من 3000 صف' },
                { en: 'A 14-slice pie', ar: 'دائرة من 14 شريحة' },
                { en: 'The formula list', ar: 'قائمة الصيغ' },
              ],
              answer: 0,
              explain: { en: 'KPIs first — the reader needs the answer before the detail.', ar: 'المؤشرات أولاً — فالقارئ يحتاج الإجابة قبل التفاصيل.' },
            },
            {
              type: 'tf',
              q: { en: 'Pie charts work well with 14 categories.', ar: 'الرسوم الدائرية تعمل جيداً مع 14 فئة.' },
              options: [ { en: 'True', ar: 'صح' }, { en: 'False', ar: 'خطأ' } ],
              answer: 1,
              explain: { en: 'False — beyond ~5 slices they become unreadable; use a bar chart instead.', ar: 'خطأ — بعد نحو 5 شرائح تصبح غير مقروءة؛ استخدم رسم أعمدة.' },
            },
          ],
          xp: 25,
        },
      ],
    },
];

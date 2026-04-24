const DATA = {
  subjects: [
    {
      id: "web_programming",
      name: "Web Programming",
      nameAr: "برمجة المواقع",
      icon: "🌐",
      color: "#EEFF00",
      lectures: [
        {
          id: "lec1",
          title: "Lecture 1: HTML Basics",
          titleAr: "المحاضرة ١: أساسيات HTML",
          summary: `تعد لغة HTML الهيكل الأساسي لأي موقع ويب. تتكون من عناصر (Elements) تُكتب باستخدام الوسوم (Tags) لتحديد بنية المحتوى مثل العناوين، الفقرات، والروابط. المتصفح يقوم بقراءة هذه الوسوم ليعرض المحتوى بشكل مرئي للمستخدم.`,
         codes: [
            {
              title: "مثال 1: الهيكل الأساسي لـ HTML",
              content: `<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>`
            },
              {
              title: "مثال 2: إضافة الروابط",
              content: `<a href="https://google.com">اضغط هنا للذهاب لجوجل</a>`,
            },
          ],
          
         
          glossary: [
            { en: "Tag", ar: "وسم", pron: "tag" },
            { en: "Element", ar: "عنصر", pron: "el-uh-muhnt" },
            { en: "Attribute", ar: "صفة / خاصية", pron: "ah-truh-byoot" },
            { en: "Hyperlink", ar: "ارتباط تشعبي", pron: "hy-per-link" },
            { en: "Structure", ar: "هيكل", pron: "struk-cher" },
            {
              en: "Web Server",
              ar: "خادم الويب",
              definition:
                "جهاز كمبيوتر قوي يخزن ملفات المواقع ويرسلها للمستخدمين عند الطلب.",
              pron: "web ser-ver",
            },
            {
              en: "Client",
              ar: "العميل",
              definition:
                "الجهاز أو المتصفح الذي يطلب عرض صفحة الويب من السيرفر.",
              pron: "kly-ent",
            },

            {
              en: "Frontend",
              ar: "الواجهة الأمامية",
              definition:
                "كل ما يراه المستخدم ويتفاعل معه في الموقع (ألوان، نصوص، أزرار).",
              pron: "frunt-end",
            },
            {
              en: "Backend",
              ar: "الواجهة الخلفية",
              definition:
                "العمليات التي تحدث في السيرفر مثل معالجة البيانات والاتصال بقاعدة البيانات.",
              pron: "bak-end",
            },
            {
              en: "Static Website",
              ar: "موقع ثابت",
              definition:
                "موقع يعرض نفس المحتوى لكل الزوار ولا يتغير إلا بتعديل الكود يدوياً.",
              pron: "sta-tik web-syt",
            },
            {
              en: "Dynamic Website",
              ar: "موقع ديناميكي",
              definition:
                "موقع يتغير محتواه تلقائياً بناءً على تفاعل المستخدم أو البيانات المخزنة.",
              pron: "dy-nam-ik web-syt",
            },

            {
              en: "Attribute",
              ar: "صفة / خاصية",
              definition:
                "معلومات إضافية توضع داخل وسم HTML لتعطيه ميزات معينة (مثل رابط الصورة).",
              pron: "ah-truh-byoot",
            },
            {
              en: "Hyperlink",
              ar: "ارتباط تشعبي",
              definition:
                "نص أو صورة عند الضغط عليها تنقلك إلى صفحة أخرى أو موقع آخر.",
              pron: "hy-per-link",
            },
          ],
          mcq: [
            {
              q: "What does HTML stand for ?",
              options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Tool Multi Language",
                "None of the above",
              ],
              answer: 0,
            },
            {
              q: "Which tag is used for the largest heading? ",
              options: ["h6", "head", "h1", "heading"],
              answer: 2,
            },
            {
              q: "Which element is used to create a hyperlink ?",
              options: ["link", "a", "href", "url"],
              answer: 1,
            },
          ],
        },
        {
          id: "lec2",
          title: "Lecture 2: Introduction to CSS",
          titleAr: "المحاضرة ٢: مقدمة في CSS",
          summary: `لغة CSS هي المسؤولة عن تصميم وتنسيق صفحات الويب. تتيح للمبرمج التحكم في الألوان، الخطوط، والمساحات، وتوزيع العناصر في الصفحة. تعمل CSS من خلال اختيار عنصر HTML وتطبيق "قواعد تنسيق" (Rules) عليه.`,
          glossary: [
            { en: "Selector", ar: "مُحدد", pron: "suh-lek-ter" },
            { en: "Property", ar: "خاصية", pron: "prah-per-tee" },
            { en: "Layout", ar: "مخطط / تخطيط", pron: "lay-out" },
            { en: "Responsive", ar: "متجاوب", pron: "ri-spawn-siv" },
          ],
          mcq: [
            {
              q: "What does CSS stand for ?",
              options: [
                "Creative Style Sheets",
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Colorful Style Sheets",
              ],
              answer: 2,
            },
            {
              q: "Which property is used to change the background color ?",
              options: ["color", "background-color", "bgcolor", "fill"],
              answer: 1,
            },
          ],
          codes: [
            {
              title: "مثال 1: تلوين الخلفية والعناوين",
               lang: "css",
              content: `body {\n  background-color: #0b0f1a;\n}\nh1 {\n  color: #7eb8f7;\n}`,
            },
            {
              title: "مثال 2: إضافة الحدود (Border)",
              lang: "css",
              content: `.card {\n  border: 1px solid white;\n  border-radius: 10px;\n}`,
            },
          ],
          // داخل المحاضرة الأولى بملف data.js
        },
      ],
    },

    {
      id: "compiler_design",
      name: "Compiler Design",
      nameAr: "تصميم المترجمات",
      icon: "⚙️",
      color: "#E5FF00",
      lectures: [
        {
          id: "lec1",
          title: "Lecture 1: Introduction to Compilers",
          titleAr: "المحاضرة ١: مقدمة عن المترجمات",
          summary: `المترجم هو برنامج يحول الكود المكتوب بلغة برمجة عالية المستوى إلى لغة الآلة. تمر هذه العملية بعدة مراحل تبدأ بالتحليل اللغوي (Lexical Analysis) ثم التحليل النحوي (Syntax Analysis) وصولاً إلى توليد الكود النهائي وتحسينه.`,
          glossary: [
            { en: "Compiler", ar: "مترجم", pron: "kum-py-ler" },
            {
              en: "Lexical Analysis",
              ar: "التحليل اللغوي",
              pron: "lek-si-kul uh-nal-i-sis",
            },
            { en: "Token", ar: "وحدة رمزية", pron: "toh-ken" },
            { en: "Syntax Tree", ar: "شجرة الإعراب", pron: "sin-taks tree" },
            {
              en: "Optimization",
              ar: "تحسين / أمثلة",
              pron: "op-tuh-muh-zay-shun",
            },
          ],
          mcq: [
            {
              q: "What is the first phase of a compiler ?",
              options: [
                "Syntax Analysis",
                "Code Generation",
                "Lexical Analysis",
                "Semantic Analysis",
              ],
              answer: 2,
            },
            {
              q: "A Lexical Analyzer produces a stream of:",
              options: ["Characters", "Tokens", "Sentences", "Instructions"],
              answer: 1,
            },
            {
              q: "The output of a compiler is usually:",
              options: [
                "Source Code",
                "High-level language",
                "Machine Code",
                "Plain Text",
              ],
              answer: 2,
            },
          ],
        },
      ],
    },
  ],
};

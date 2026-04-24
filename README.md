# 🎓 Yalla-Study

منصة تعليمية بسيطة وخفيفة مبنية بـ HTML + CSS + JavaScript خالص — بدون أي framework.

## ✨ المميزات

- 📋 **ملخص** لكل محاضرة بالعربي
- 📖 **قاموس مصطلحات** عربي/إنجليزي مع نطق صوتي (Web Speech API)
- ✏️ **أسئلة MCQ** مع تصحيح فوري وحساب الدرجة
- 💻 **أمثلة برمجية** مع تلوين تركيبي (Prism.js)
- 🌙 تصميم داكن كامل وعربي بالكامل

## 🗂️ هيكل المشروع

```
yalla-study/
├── index.html       ← الصفحة الرئيسية (قائمة المواد)
├── subject.html     ← قائمة محاضرات المادة
├── lecture.html     ← محتوى المحاضرة (ملخص / قاموس / MCQ / أكواد)
├── css/
│   ├── main.css     ← الستايل المشترك وmتغيرات التصميم
│   ├── home.css
│   ├── subject.css
│   └── lecture.css
└── js/
    ├── data.js      ← ✏️ هنا تُضاف كل المواد والمحاضرات
    ├── home.js
    ├── subject.js
    ├── glossary.js
    ├── mcq.js
    └── lecture.js
```


## ➕ إضافة مادة جديدة

افتح `js/data.js` فقط، وأضف كتلة جديدة داخل مصفوفة `subjects`:

```js
{
  id:     "my_subject",
  name:   "Subject Name",
  nameAr: "اسم المادة",
  icon:   "📘",
  color:  "#7eb8f7",
  lectures: [
    {
      id:      "lec1",
      title:   "Lecture 1: ...",
      titleAr: "المحاضرة ١: ...",
      summary: `نص الملخص هنا...`,
      glossary: [
        { en: "Term", ar: "المصطلح", pron: "term" },
      ],
      mcq: [
        {
          q: "السؤال هنا?",
          options: ["أ", "ب", "ج", "د"],
          answer: 0,
        },
      ],
      codes: [
        {
          title:   "عنوان المثال",
          lang:    "html",
          content: `<p>مثال هنا</p>`,
        },
      ],
    },
  ],
},
```

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|-----------|
| HTML5   | هيكل الصفحات |
| CSS3    | التصميم والرسوم المتحركة |
| JavaScript (Vanilla) | المنطق والتفاعل |
| [Prism.js](https://prismjs.com/) | تلوين الأكواد البرمجية |
| Web Speech API | النطق الصوتي للمصطلحات |
| Google Fonts (Tajawal + DM Mono) | الخطوط |

https://pa5xx.github.io/yalla-study/

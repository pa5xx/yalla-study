document.addEventListener('DOMContentLoaded', () => {

  // ── قراءة المعاملات ──
  const params  = new URLSearchParams(window.location.search);
  const subId   = params.get('sub');
  const lecId   = params.get('lec');

  const subject = DATA.subjects.find(s => s.id === subId);

  if (!subject) {
    document.body.innerHTML = '<p style="padding:40px;color:#f87171">المادة غير موجودة.</p>';
    return;
  }

  const lecture = subject.lectures.find(l => l.id === lecId);

  if (!lecture) {
    document.body.innerHTML = '<p style="padding:40px;color:#f87171">المحاضرة غير موجودة.</p>';
    return;
  }

  // ── اللون ──
  if (subject.color) {
    document.documentElement.style.setProperty('--c', subject.color);
  }

  // ── العنوان ──
  document.title = `${lecture.titleAr} — MedLearn`;
  document.getElementById('lec-title-ar').textContent = lecture.titleAr;
  document.getElementById('lec-title-en').textContent = lecture.title;

  // ── زر الرجوع ──
  document.getElementById('back-link').href = `subject.html?id=${subId}`;

  // ── الملخص ──
  document.getElementById('summary-text').textContent = lecture.summary;

  // ── الأكواد ──
  const codesContainer = document.getElementById('codes-container');

  if (lecture.codes && Array.isArray(lecture.codes)) {
    codesContainer.innerHTML = '';

    lecture.codes.forEach(item => {
      const wrapper = document.createElement('div');

      wrapper.innerHTML = `
        <div class="code-title" style="margin-bottom:8px;font-weight:bold;">
          ${item.title}
        </div>
        <pre class="code-block"><code></code></pre>
      `;

      const codeEl = wrapper.querySelector('code');

      codeEl.className = `language-${item.lang || 'html'}`;
      codeEl.textContent = item.content;

      codesContainer.appendChild(wrapper);
    });

    // ── تفعيل Prism ──
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }

  } else {
    codesContainer.innerHTML = "<p>لا توجد أكواد لهذه المحاضرة.</p>";
  }

  // ── القاموس و MCQ ──
  buildGlossary(lecture.glossary || []);
  buildMCQ(lecture.mcq || []);

  // ── التبويبات ──
  const tabs   = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === target));
      panels.forEach(p => p.classList.toggle('active', p.id === `panel-${target}`));
    });
  });

});
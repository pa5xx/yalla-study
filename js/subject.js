// ============================================================
//  subject.js  —  يعرض محاضرات المادة المختارة
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // ── قراءة ?id= من الرابط ──
  const params  = new URLSearchParams(window.location.search);
  const subId   = params.get('id');
  const subject = DATA.subjects.find(s => s.id === subId);

  if (!subject) {
    document.body.innerHTML = '<p style="padding:40px;color:#f87171">المادة غير موجودة.</p>';
    return;
  }

  // ── اللون ──
  document.documentElement.style.setProperty('--c', subject.color);

  // ── العنوان ──
  document.title = `${subject.nameAr} — MedLearn`;
  document.getElementById('subject-icon').textContent  = subject.icon;
  document.getElementById('subject-name').textContent  = subject.nameAr;
  document.getElementById('subject-en').textContent    = subject.name;

  // ── قائمة المحاضرات ──
  const list = document.getElementById('lectures-list');

  subject.lectures.forEach(lec => {
    const a = document.createElement('a');
    a.className = 'lecture-item';
    a.href = `lecture.html?sub=${subId}&lec=${lec.id}`;

    a.innerHTML = `
      <div class="lec-icon">📚</div>
      <div class="lec-info">
        <div class="lec-title-ar">${lec.titleAr}</div>
        <div class="lec-title-en ltr">${lec.title}</div>
      </div>
      <div class="lec-badges">
        <span class="badge">ملخص</span>
        <span class="badge">قاموس</span>
        <span class="badge">MCQ</span>
      </div>
      <span class="lec-arrow">→</span>
    `;

    list.appendChild(a);
  });
});

// ============================================================
//  home.js  —  يبني قائمة المواد من data.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('subjects-grid');

  DATA.subjects.forEach(subject => {
    const a = document.createElement('a');
    a.className = 'subject-card';
    a.href = `subject.html?id=${subject.id}`;
    a.style.setProperty('--c', subject.color);

    a.innerHTML = `
      <div class="subject-card-icon">${subject.icon}</div>
      <div class="subject-card-name">${subject.nameAr}</div>
      <div class="subject-card-en ltr">${subject.name}</div>
      <div class="subject-card-count">${subject.lectures.length} محاضرات</div>
    `;

    grid.appendChild(a);
  });
});

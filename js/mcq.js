// ============================================================
//  mcq.js  —  منطق أسئلة الاختيار من متعدد
// ============================================================

let _mcqData    = [];   // المصفوفة الأصلية
let _userAnswer = {};   // { questionIndex: optionIndex }
let _submitted  = false;

/**
 * يبني الأسئلة ويضيفها إلى #mcq-list
 * @param {Array} mcq — مصفوفة الأسئلة من data.js
 */
function buildMCQ(mcq) {
  _mcqData    = mcq;
  _userAnswer = {};
  _submitted  = false;

  const list   = document.getElementById('mcq-list');
  const banner = document.getElementById('score-banner');
  const btnSubmit = document.getElementById('btn-submit');
  const btnReset  = document.getElementById('btn-reset');

  list.innerHTML   = '';
  banner.innerHTML = '';
  banner.className = 'score-banner';
  banner.hidden    = true;
  btnSubmit.hidden = false;
  btnReset.hidden  = true;
  btnSubmit.disabled = true;

  mcq.forEach((q, qIdx) => {
    const card = document.createElement('div');
    card.className = 'mcq-card';
    card.id = `q-${qIdx}`;

    const letters = ['A','B','C','D'];

    const optsHTML = q.options.map((opt, oIdx) => `
      <button class="mcq-opt" data-q="${qIdx}" data-o="${oIdx}">
        <span class="opt-letter">${letters[oIdx]}</span>
        ${opt}
      </button>
    `).join('');

    card.innerHTML = `
      <div class="mcq-question">
        <span class="mcq-num">س${qIdx + 1}</span>
        ${q.q}
      </div>
      <div class="mcq-options">${optsHTML}</div>
    `;

    list.appendChild(card);
  });

  // ── تحديد الإجابة ──
  list.addEventListener('click', e => {
    const btn = e.target.closest('.mcq-opt');
    if (!btn || _submitted) return;

    const qIdx = +btn.dataset.q;
    const oIdx = +btn.dataset.o;

    // إزالة التحديد السابق
    document.querySelectorAll(`.mcq-opt[data-q="${qIdx}"]`)
            .forEach(b => b.classList.remove('selected'));

    btn.classList.add('selected');
    _userAnswer[qIdx] = oIdx;

    // تفعيل زر التسليم إذا أجاب على الكل
    btnSubmit.disabled = Object.keys(_userAnswer).length < _mcqData.length;
  });

  // ── تسليم ──
  btnSubmit.onclick = submitMCQ;

  // ── إعادة ──
  btnReset.onclick = () => buildMCQ(_mcqData);
}

function submitMCQ() {
  if (Object.keys(_userAnswer).length < _mcqData.length) return;

  _submitted = true;
  let correct = 0;

  _mcqData.forEach((q, qIdx) => {
    const userOpt = _userAnswer[qIdx];
    const isRight = userOpt === q.answer;
    if (isRight) correct++;

    document.querySelectorAll(`.mcq-opt[data-q="${qIdx}"]`).forEach(btn => {
      btn.disabled = true;
      const oIdx = +btn.dataset.o;

      if (oIdx === q.answer) {
        btn.classList.add('correct');
      } else if (oIdx === userOpt) {
        btn.classList.add('wrong');
      }
      btn.classList.remove('selected');
    });
  });

  // ── لافتة النتيجة ──
  const pct    = Math.round((correct / _mcqData.length) * 100);
  const pass   = pct >= 70;
  const banner = document.getElementById('score-banner');

  banner.className = `score-banner ${pass ? 'pass' : 'fail'}`;
  banner.hidden    = false;
  banner.innerHTML = `
    <div class="score-emoji">${pass ? '🎉' : '📚'}</div>
    <div class="score-info">
      <div class="score-fraction">${correct} / ${_mcqData.length}</div>
      <div class="score-pct">${pct}%</div>
    </div>
    <div class="score-msg">${pass ? 'ممتاز! أداء رائع 🌟' : 'راجع المادة وحاول مجدداً 💪'}</div>
  `;

  document.getElementById('btn-submit').hidden = true;
  document.getElementById('btn-reset').hidden  = false;

  // Scroll للنتيجة
  banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

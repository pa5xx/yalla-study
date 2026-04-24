// ============================================================
//  glossary.js  —  قاموس المصطلحات مع النطق الصوتي
// ============================================================

/**
 * ينشئ بطاقات القاموس ويضيفها إلى #glossary-grid
 * @param {Array} glossary  — مصفوفة المصطلحات من data.js
 */
function buildGlossary(glossary) {
  const grid = document.getElementById('glossary-grid');
  grid.innerHTML = '';

  glossary.forEach((term, i) => {
    const card = document.createElement('div');
    card.className = 'glossary-card';

    card.innerHTML = `
      <button class="btn-speak" data-idx="${i}" title="استمع للنطق">🔈</button>
      <div class="g-en ltr">${term.en}</div>
      <div class="g-ar">${term.ar}</div>
      <div class="g-pron ltr">/${term.pron}/</div>
    `;

    grid.appendChild(card);
  });

  // ── ربط أزرار النطق ──
  grid.querySelectorAll('.btn-speak').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx  = +btn.dataset.idx;
      const term = glossary[idx];
      speakTerm(term, btn);
    });
  });
}

/**
 * ينطق المصطلح باستخدام Web Speech API
 */
function speakTerm(term, btn) {
  if (!('speechSynthesis' in window)) {
    alert('متصفحك لا يدعم النطق الصوتي.');
    return;
  }

  window.speechSynthesis.cancel();

  const utter   = new SpeechSynthesisUtterance(`${term.en}`);
  utter.lang    = 'en-US';
  utter.rate    = 0.82;
  utter.pitch   = 1;

  // تأثير الزر
  btn.classList.add('speaking');
  btn.textContent = '🔊';

  utter.onend = utter.onerror = () => {
    btn.classList.remove('speaking');
    btn.textContent = '🔈';
  };

  window.speechSynthesis.speak(utter);
}

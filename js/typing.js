/**
 * Typing effect for hero role text
 */
(function () {
  const el = document.getElementById('typing-text');
  if (!el || typeof PORTFOLIO_DATA === 'undefined') return;

  const phrases = PORTFOLIO_DATA.typingPhrases;
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 2000;
  const pauseStart = 500;

  function tick() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === current.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = pauseStart;
    }

    setTimeout(tick, delay);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    tick();
  } else {
    el.textContent = phrases[0];
  }
})();

/**
 * Main entry — loader, footer year, initial hero reveal
 */
(function () {
  const loader = document.getElementById('loader');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  document.body.classList.add('loading');

  function hideLoader() {
    if (!loader) return;
    loader.classList.add('hidden');
    document.body.classList.remove('loading');

    document.querySelectorAll('.hero .reveal').forEach((el) => {
      setTimeout(() => el.classList.add('visible'), 100);
    });
  }

  window.addEventListener('load', () => {
    setTimeout(hideLoader, 2000);
  });

  setTimeout(hideLoader, 3500);
})();

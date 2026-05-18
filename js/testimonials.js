/**
 * Testimonials auto-slider with dots navigation
 */
(function () {
  const track = document.getElementById('testimonials-track');
  const dotsContainer = document.getElementById('testimonials-dots');
  if (!track || !dotsContainer || typeof PORTFOLIO_DATA === 'undefined') return;

  const testimonials = PORTFOLIO_DATA.testimonials;
  let currentIndex = 0;
  let autoplayInterval;
  const autoplayDelay = 5000;

  const starSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

  function renderStars(count) {
    return Array(count).fill(starSvg).join('');
  }

  testimonials.forEach((t) => {
    const card = document.createElement('article');
    card.className = 'testimonial-card glass';
    card.innerHTML = `
      <img
        class="testimonial-card__avatar"
        src="${t.avatar}"
        alt="${t.name}"
        width="96"
        height="96"
        loading="lazy"
        decoding="async"
        onerror="this.src='assets/images/avatar-placeholder.svg'"
      >
      <div class="testimonial-card__stars" aria-label="${t.rating} out of 5 stars">
        ${renderStars(t.rating)}
      </div>
      <blockquote class="testimonial-card__text">"${t.text}"</blockquote>
      <p class="testimonial-card__author">${t.name}</p>
      <p class="testimonial-card__role">${t.role}</p>
    `;
    track.appendChild(card);
  });

  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `testimonials__dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.setAttribute('role', 'tab');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.testimonials__dot');

  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function nextSlide() {
    goToSlide((currentIndex + 1) % testimonials.length);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
  }

  track.parentElement.addEventListener('mouseenter', stopAutoplay);
  track.parentElement.addEventListener('mouseleave', startAutoplay);

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    startAutoplay();
  }
})();

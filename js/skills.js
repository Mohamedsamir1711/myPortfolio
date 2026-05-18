/**
 * Skills grid with category filtering and progress bars
 */
(function () {
  const grid = document.getElementById('skills-grid');
  const filters = document.querySelectorAll('.skills__filter');
  if (!grid || typeof PORTFOLIO_DATA === 'undefined') return;

  function renderSkills(filter = 'all') {
    grid.innerHTML = '';

    const skills = PORTFOLIO_DATA.skills.filter(
      (s) => filter === 'all' || s.category === filter
    );

    skills.forEach((skill, i) => {
      const card = document.createElement('article');
      card.className = `skill-card glass reveal`;
      card.dataset.category = skill.category;
      card.innerHTML = `
        <div class="skill-card__header">
          <span class="skill-card__name">${skill.name}</span>
          <span class="skill-card__percent">${skill.level}%</span>
        </div>
        <div class="skill-card__bar">
          <div class="skill-card__progress" data-level="${skill.level}"></div>
        </div>
        <span class="skill-card__category">${skill.category}</span>
      `;
      grid.appendChild(card);

      requestAnimationFrame(() => {
        card.classList.add('visible');
        const bar = card.querySelector('.skill-card__progress');
        setTimeout(() => {
          bar.style.width = `${skill.level}%`;
        }, 100 + i * 80);
      });
    });

  }

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderSkills(btn.dataset.filter);
    });
  });

  renderSkills('all');
})();

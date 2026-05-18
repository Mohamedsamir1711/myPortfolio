/**
 * Projects grid — renders cards from PORTFOLIO_DATA
 */
(function () {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof PORTFOLIO_DATA === 'undefined') return;

  function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = `project-card glass reveal${project.featured ? ' project-card--featured' : ''}`;

    const demoBtn = project.demo
      ? `<a href="${project.demo}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">Live Demo</a>`
      : `<button class="btn btn--outline" disabled title="Demo coming soon">Live Demo</button>`;

    const imageMarkup = project.image
      ? `<img
          src="${project.image}"
          alt="${project.title} project preview"
          class="project-card__image"
          loading="lazy"
          width="640"
          height="400"
        >`
      : `<div
          class="project-card__image project-card__image--gradient"
          role="img"
          aria-label="${project.title} project preview"
          style="background: ${project.gradient}"
        ></div>`;

    card.innerHTML = `
      <div class="project-card__image-wrap">
        ${project.featured ? '<span class="project-card__featured-badge">Featured</span>' : ''}
        ${imageMarkup}
        <div class="project-card__overlay" aria-hidden="true"></div>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__description">${project.description}</p>
        <div class="project-card__tags">
          ${project.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-card__actions">
          <a href="${project.github}" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          ${demoBtn}
        </div>
      </div>
    `;

    requestAnimationFrame(() => card.classList.add('visible'));
    return card;
  }

  PORTFOLIO_DATA.projects.forEach((project) => {
    grid.appendChild(createProjectCard(project));
  });

})();

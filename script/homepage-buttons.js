(() => {
  const selector = [
    '.mjks-master-hero__button',
    '.mjks-master-hero__panel-cta',
    '.mjks-impact-action__cta',
    '.mjk-vision__cta',
    '.mjk-impact__cta',
    '.mjks-causes__view-all',
    '.mjks-cause-card__donate',
    '.explore-link',
    '.mjks-blogs__view-all'
  ].join(',');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll(selector).forEach((button) => {
    button.dataset.mjksDelayedNavigation = 'true';

    button.addEventListener('click', (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
        button.hasAttribute('download') ||
        button.target === '_blank'
      ) return;

      const href = button.getAttribute('href');
      if (!href) return;

      if (reduceMotion.matches) return;

      event.preventDefault();
      if (button.dataset.mjksAnimating === 'true') return;

      button.dataset.mjksAnimating = 'true';
      button.classList.remove('is-swipe-reset');
      void button.offsetWidth;
      button.classList.add('is-swipe-active');

      window.setTimeout(() => {
        window.location.assign(href);
      }, 700);
    });
  });
})();

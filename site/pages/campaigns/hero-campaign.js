(() => {
  const hero = document.querySelector('#mjks-shelter');
  if (!hero || hero.dataset.initialized) return;
  hero.dataset.initialized = 'true';
  const status = hero.querySelector('[role="status"]');
  const notice = message => { status.textContent = message; status.hidden = false; };
  const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  hero.querySelectorAll('.mjks-liquid-btn').forEach(button => {
    let busy = false;
    button.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const href = button.getAttribute('href');
      const localAnchor = href?.startsWith('#');
      let target = null;
      if (localAnchor) {
        target = document.getElementById(href.slice(1));
        event.preventDefault();
        if (!target) { notice('Connect this button to your campaign donation form before publishing.'); return; }
      }
      if (busy) return;
      const go = () => {
        if (!target) return;
        history.pushState(null, '', href);
        target.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      };
      if (reduceMotion()) { go(); return; }
      busy = true;
      button.classList.add('is-swipe-active');
      setTimeout(() => {
        button.classList.add('is-swipe-reset');
        button.classList.remove('is-swipe-active');
        requestAnimationFrame(() => requestAnimationFrame(() => button.classList.remove('is-swipe-reset')));
        busy = false; go();
      }, 1100);
    });
  });
  const trigger = hero.querySelector('.mjks-shelter__video');
  const dialog = hero.querySelector('dialog');
  const video = dialog.querySelector('video');
  trigger.addEventListener('click', () => {
    const source = hero.dataset.videoSrc?.trim();
    if (!source) { notice('The campaign video has not been connected yet.'); return; }
    if (video.getAttribute('src') !== source) video.src = source;
    dialog.showModal();
  });
  dialog.querySelector('.mjks-shelter__close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { video.pause(); trigger.focus(); });
})();

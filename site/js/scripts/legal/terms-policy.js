const sections = [...document.querySelectorAll('[data-legal-section]')];
const sectionLinks = [...document.querySelectorAll('.section-strip a, .contents-list a')];
const progressFill = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');
const progressPercent = document.getElementById('progress-percent');

function updateReadingPosition() {
  const threshold = window.innerHeight * 0.38;
  let activeIndex = 0;

  sections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= threshold) activeIndex = index;
  });

  const activeId = sections[activeIndex].id;
  const percentage = Math.round(((activeIndex + 1) / sections.length) * 100);

  sectionLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('is-current', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });

  progressFill.style.width = `${percentage}%`;
  progressLabel.textContent = `${activeIndex + 1} of ${sections.length} sections`;
  progressPercent.textContent = `${percentage}%`;
  progressFill.parentElement.setAttribute('aria-valuenow', percentage);
}

let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    updateReadingPosition();
    scheduled = false;
  });
}, { passive: true });
window.addEventListener('resize', updateReadingPosition);
window.addEventListener('load', updateReadingPosition);
updateReadingPosition();

const dialog = document.getElementById('search-dialog');
const searchInput = document.getElementById('terms-search');
const results = document.getElementById('search-results');
const searchItems = sections.map((section, index) => ({
  id: section.id,
  title: section.querySelector('h2').textContent,
  number: String(index + 1).padStart(2, '0')
}));

function showResults(query = '') {
  const matches = searchItems.filter((item) => item.title.toLowerCase().includes(query.toLowerCase().trim()));
  results.replaceChildren();
  if (!matches.length) {
    const item = document.createElement('li');
    item.textContent = 'No matching sections';
    results.append(item);
    return;
  }
  matches.forEach(({ id, title, number }) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = `${number}  ${title}`;
    link.addEventListener('click', () => dialog.close());
    item.append(link);
    results.append(item);
  });
}

document.getElementById('open-search').addEventListener('click', () => {
  showResults();
  dialog.showModal();
  searchInput.focus();
});
searchInput.addEventListener('input', (event) => showResults(event.target.value));
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const hero = document.querySelector('.hero');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reduceMotion.matches && window.matchMedia('(pointer: fine)').matches) {
  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
    hero.style.setProperty('--my', `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
  }, { passive: true });
  hero.addEventListener('pointerleave', () => {
    hero.style.removeProperty('--mx');
    hero.style.removeProperty('--my');
  });
}

document.querySelectorAll('.mjk-header__donate, .mjks-liquid-btn').forEach((button) => {
  let swipeTimer;

  button.addEventListener('click', (event) => {
    if (
      reduceMotion.matches ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    const targetId = button.getAttribute('href')?.slice(1);
    const target = targetId && document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    window.clearTimeout(swipeTimer);
    button.classList.remove('is-swipe-active', 'is-swipe-reset');
    void button.offsetWidth;
    button.classList.add('is-swipe-active');
    swipeTimer = window.setTimeout(() => {
      button.classList.add('is-swipe-reset');
      button.classList.remove('is-swipe-active');
      window.history.pushState(null, '', `#${targetId}`);
      target.scrollIntoView({ behavior: 'smooth' });
      window.requestAnimationFrame(() => button.classList.remove('is-swipe-reset'));
    }, 1100);
  });
});

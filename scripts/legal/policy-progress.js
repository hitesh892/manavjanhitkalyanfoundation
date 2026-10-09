const policySections = [...document.querySelectorAll('[data-legal-section]')];
const policyLinks = [...document.querySelectorAll('.contents-list a, .section-strip a')];
const progressBar = document.querySelector('.progress-bar');
const progressFill = progressBar?.querySelector('span');
const progressLabel = document.querySelector('.aside-card--progress small');
const progressPercent = document.querySelector('.aside-card--progress p');

function updatePolicyProgress() {
  if (!policySections.length || !progressBar) return;
  const threshold = window.innerHeight * 0.38;
  let activeIndex = 0;
  policySections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= threshold) activeIndex = index;
  });
  const percent = Math.round(((activeIndex + 1) / policySections.length) * 100);
  const activeId = policySections[activeIndex].id;
  policyLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('is-current', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  progressFill.style.width = `${percent}%`;
  progressBar.setAttribute('aria-valuenow', percent);
  progressLabel.textContent = `${activeIndex + 1} of ${policySections.length} sections`;
  progressPercent.textContent = `${percent}%`;
}

let progressScheduled = false;
window.addEventListener('scroll', () => {
  if (progressScheduled) return;
  progressScheduled = true;
  requestAnimationFrame(() => { updatePolicyProgress(); progressScheduled = false; });
}, { passive: true });
window.addEventListener('resize', updatePolicyProgress);
window.addEventListener('load', updatePolicyProgress);
updatePolicyProgress();

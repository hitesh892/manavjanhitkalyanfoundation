(() => {
  const root = document.querySelector('.mjks-csr');
  if (!root) return;

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.querySelectorAll('.mjks-csr__button').forEach((button) => {
      let resetTimer;

      button.addEventListener('click', () => {
        window.clearTimeout(resetTimer);
        button.classList.remove('is-swipe-active', 'is-swipe-reset');
        void button.offsetWidth;
        button.classList.add('is-swipe-active');

        resetTimer = window.setTimeout(() => {
          button.classList.add('is-swipe-reset');
          button.classList.remove('is-swipe-active');
          window.requestAnimationFrame(() => button.classList.remove('is-swipe-reset'));
        }, 1100);
      });
    });
  }

  const form = root?.querySelector('[data-csr-form]');
  if (!form) return;

  const summary = form.querySelector('[data-form-summary]');
  const status = form.querySelector('[data-form-status]');
  const fields = [...form.querySelectorAll('input, select, textarea')];

  const messages = {
    'csr-name': 'Enter your name.',
    'csr-phone': 'Enter a valid phone number.',
    'csr-organisation': 'Enter your organisation name.',
    'csr-interest': 'Select an area of interest.',
    'csr-email': 'Enter a valid email address.',
    'csr-message': 'Tell us briefly how you would like to collaborate.'
  };

  const isValidPhone = (value) => /^[+]?[-()\s0-9]{8,18}$/.test(value.trim());

  const fieldIsValid = (field) => {
    if (!field.value.trim()) return false;
    if (field.type === 'email') return field.validity.valid;
    if (field.type === 'tel') return isValidPhone(field.value);
    return field.validity.valid;
  };

  const showFieldState = (field) => {
    const error = form.querySelector(`[data-error-for="${field.id}"]`);
    const valid = fieldIsValid(field);
    field.setAttribute('aria-invalid', String(!valid));
    if (error) error.textContent = valid ? '' : messages[field.id];
    return valid;
  };

  const clearSummary = () => {
    summary.hidden = true;
    summary.replaceChildren();
  };

  const showSummary = (invalidFields) => {
    const heading = document.createElement('strong');
    const list = document.createElement('ul');
    heading.textContent = 'Please check the following fields:';

    invalidFields.forEach((field) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${field.id}`;
      link.textContent = messages[field.id];
      link.addEventListener('click', () => field.focus());
      item.append(link);
      list.append(item);
    });

    summary.replaceChildren(heading, list);
    summary.hidden = false;
    summary.focus();
  };

  fields.forEach((field) => {
    field.addEventListener('blur', () => showFieldState(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') showFieldState(field);
      status.textContent = '';
    });
    field.addEventListener('change', () => {
      if (field.getAttribute('aria-invalid') === 'true') showFieldState(field);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearSummary();
    status.textContent = '';

    const invalidFields = fields.filter((field) => !showFieldState(field));
    if (invalidFields.length) {
      showSummary(invalidFields);
      return;
    }

    const detail = Object.fromEntries(new FormData(form).entries());
    form.dispatchEvent(new CustomEvent('mjks:csr-enquiry', { bubbles: true, detail }));
    status.textContent = 'Thank you. Your partnership enquiry has been received.';
    form.reset();
    fields.forEach((field) => field.removeAttribute('aria-invalid'));
  });
})();

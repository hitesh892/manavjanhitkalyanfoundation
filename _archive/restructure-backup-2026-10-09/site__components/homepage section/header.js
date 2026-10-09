   (() => {
      const root = document.currentScript?.previousElementSibling;
      if (!root?.matches('.mjk-header[data-mjk-header]') || root.dataset.mjkHeaderReady) return;
      root.dataset.mjkHeaderReady = 'true';
      const dropdownItems = [...root.querySelectorAll('.mjk-header__nav-item--dropdown')];
      const mobileToggle = root.querySelector('.mjk-header__menu-toggle');
      const mobileMenu = root.querySelector('.mjk-header__mobile-panel');
      const mobileDisclosures = [...root.querySelectorAll('.mjk-header__mobile-dropdown-trigger')];

      root.querySelectorAll('.mjk-header__donate').forEach((button) => {
        let swipeTimer;
        button.addEventListener('click', () => {
          window.clearTimeout(swipeTimer);
          button.classList.remove('is-swipe-active', 'is-swipe-reset');
          void button.offsetWidth;
          button.classList.add('is-swipe-active');
          swipeTimer = window.setTimeout(() => {
            button.classList.add('is-swipe-reset');
            button.classList.remove('is-swipe-active');
            window.requestAnimationFrame(() => button.classList.remove('is-swipe-reset'));
          }, 1100);
        });
      });

      const updateScrolledState = () => root.classList.toggle('is-scrolled', window.scrollY > 40);
      window.addEventListener('scroll', updateScrolledState, { passive: true });
      updateScrolledState();

      const closeDropdown = (item, returnFocus = false) => {
        const button = item.querySelector('.mjk-header__dropdown-trigger');
        const menu = item.querySelector('.mjk-header__dropdown');
        if (!button || !menu) return;
        button.setAttribute('aria-expanded', 'false');
        item.classList.remove('is-open');
        menu.classList.remove('is-open');
        menu.setAttribute('inert', '');
        if (returnFocus) button.focus();
      };
      const openDropdown = (item) => {
        dropdownItems.forEach((other) => { if (other !== item) closeDropdown(other); });
        const button = item.querySelector('.mjk-header__dropdown-trigger');
        const menu = item.querySelector('.mjk-header__dropdown');
        if (!button || !menu) return;
        button.setAttribute('aria-expanded', 'true');
        item.classList.add('is-open');
        menu.classList.add('is-open');
        menu.removeAttribute('inert');
      };
      dropdownItems.forEach((item) => {
        const button = item.querySelector('.mjk-header__dropdown-trigger');
        button?.addEventListener('click', () => {
          if (button.getAttribute('aria-expanded') === 'true') closeDropdown(item);
          else openDropdown(item);
        });
        button?.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            openDropdown(item);
            item.querySelector('.mjk-header__dropdown-link, .mjk-header__cause-card')?.focus();
          }
        });
        item.addEventListener('pointerenter', (event) => {
          if (event.pointerType === 'mouse') openDropdown(item);
        });
        item.addEventListener('pointerleave', (event) => {
          if (event.pointerType === 'mouse' && !item.contains(document.activeElement)) closeDropdown(item);
        });
        item.addEventListener('focusin', () => openDropdown(item));
        item.addEventListener('focusout', (event) => {
          if (!item.contains(event.relatedTarget)) closeDropdown(item);
        });
      });

      const setMobileMenu = (open) => {
        mobileToggle?.setAttribute('aria-expanded', String(open));
        mobileToggle?.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
        mobileMenu?.classList.toggle('is-open', open);
        mobileMenu?.toggleAttribute('inert', !open);
        if (!open) mobileDisclosures.forEach((button) => setMobileDisclosure(button, false));
      };
      const setMobileDisclosure = (button, open) => {
        const submenu = button.closest('li')?.querySelector('.mjk-header__mobile-submenu');
        button.setAttribute('aria-expanded', String(open));
        submenu?.classList.toggle('is-open', open);
        submenu?.toggleAttribute('inert', !open);
      };
      mobileToggle?.addEventListener('click', () => setMobileMenu(mobileToggle.getAttribute('aria-expanded') !== 'true'));
      mobileDisclosures.forEach((button) => button.addEventListener('click', () => {
        setMobileDisclosure(button, button.getAttribute('aria-expanded') !== 'true');
      }));

      root.addEventListener('pointerdown', (event) => {
        if (!event.target.closest('.mjk-header__nav-item--dropdown')) {
          dropdownItems.forEach((item) => closeDropdown(item));
        }
      });
      root.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        const openItem = dropdownItems.find((item) => item.querySelector('.mjk-header__dropdown-trigger')?.getAttribute('aria-expanded') === 'true');
        const mobileWasOpen = mobileToggle?.getAttribute('aria-expanded') === 'true';
        const openMobileDisclosure = mobileDisclosures.find((button) => button.getAttribute('aria-expanded') === 'true');
        if (openItem) closeDropdown(openItem, true);
        else if (openMobileDisclosure) {
          setMobileDisclosure(openMobileDisclosure, false);
          openMobileDisclosure.focus();
        } else if (mobileWasOpen) {
          setMobileMenu(false);
          mobileToggle?.focus();
        }
      });
      root.querySelectorAll('.mjk-header__dropdown a, .mjk-header__mobile-panel a').forEach((link) => {
        link.addEventListener('click', () => {
          dropdownItems.forEach((item) => closeDropdown(item));
          setMobileMenu(false);
        });
      });
    })();
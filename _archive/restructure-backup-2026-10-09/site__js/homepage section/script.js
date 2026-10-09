
/* ==========================================================
   Source: gallery.js
   Consolidated from the original file; original preserved.
   ========================================================== */

 (() => {
      const track = document.querySelector('.track');
      if (!track) return;
      const cards = [...track.children];
      const dots = [...document.querySelectorAll('.dot')];
      const status = document.querySelector('#carousel-status');
      let active = 2;

      function show(index) {
        active = (index + cards.length) % cards.length;
        const ordered = cards.map((_, offset) => cards[(active - 2 + offset + cards.length) % cards.length]);
      ordered.forEach((card, position) => {
        track.append(card);
        card.classList.toggle('is-featured', position === 2);
        card.dataset.slot = String(position);
        card.setAttribute('aria-hidden', window.matchMedia('(max-width: 767px)').matches && (position === 0 || position === 4) ? 'true' : 'false');
        });
        dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === active)));
        status.textContent = `Video ${active + 1} of ${cards.length} featured.`;
      }
      document.querySelector('.arrow-prev').addEventListener('click', () => show(active - 1));
      document.querySelector('.arrow-next').addEventListener('click', () => show(active + 1));
      dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
      window.addEventListener('resize', () => show(active));
      show(active);
    })();

/* ==========================================================
   Source: work-on-ground.js
   Consolidated from the original file; original preserved.
   ========================================================== */

 (() => {
      const strip = document.querySelector('#work-ground-gallery');
      if (!strip) return;
      const originals = [...strip.children];
      const before = originals.map(item => item.cloneNode(true));
      const after = originals.map(item => item.cloneNode(true));
      strip.prepend(...before);
      strip.append(...after);
      strip.classList.add('is-looping');

      const cloneWidth = () => before.reduce((total, item) => total + item.offsetWidth + parseFloat(getComputedStyle(item).marginRight), 0);
      const jumpTo = position => {
        const previousBehavior = strip.style.scrollBehavior;
        strip.style.scrollBehavior = 'auto';
        strip.scrollLeft = position;
        strip.style.scrollBehavior = previousBehavior;
      };
      const jumpToMiddle = () => jumpTo(cloneWidth());
      requestAnimationFrame(jumpToMiddle);

      let settleTimer;
      strip.addEventListener('scroll', () => {
        clearTimeout(settleTimer);
        settleTimer = setTimeout(() => {
          const sectionWidth = cloneWidth();
          if (strip.scrollLeft < 1 || strip.scrollLeft >= sectionWidth * 2) jumpTo(sectionWidth);
        }, 100);
      }, { passive:true });

      const step = () => strip.querySelector('.work-item').offsetWidth + parseFloat(getComputedStyle(strip.querySelector('.work-item')).marginRight);
      let autoplayTimer;
      const startAutoplay = () => {
        clearTimeout(autoplayTimer);
        autoplayTimer = setTimeout(() => {
          strip.scrollBy({ left: step(), behavior: 'smooth' });
          startAutoplay();
        }, 2800);
      };
      const pauseAutoplay = () => clearTimeout(autoplayTimer);
      const move = direction => {
        strip.scrollBy({ left: direction * step(), behavior: 'smooth' });
        startAutoplay();
      };
      document.querySelector('.work-prev').addEventListener('click', () => move(-1));
      document.querySelector('.work-next').addEventListener('click', () => move(1));

      let pointerStart = 0;
      let scrollStart = 0;
      let dragged = false;
      strip.addEventListener('pointerdown', event => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        pointerStart = event.clientX;
        scrollStart = strip.scrollLeft;
        dragged = false;
        strip.setPointerCapture(event.pointerId);
        pauseAutoplay();
      });
      strip.addEventListener('pointermove', event => {
        if (!strip.hasPointerCapture(event.pointerId)) return;
        const delta = event.clientX - pointerStart;
        if (Math.abs(delta) > 4) {
          dragged = true;
          strip.classList.add('is-dragging');
          strip.scrollLeft = scrollStart - delta;
        }
      });
      const finishDrag = event => {
        if (strip.hasPointerCapture(event.pointerId)) strip.releasePointerCapture(event.pointerId);
        strip.classList.remove('is-dragging');
        if (dragged) event.preventDefault();
        startAutoplay();
      };
      strip.addEventListener('pointerup', finishDrag);
      strip.addEventListener('pointercancel', finishDrag);
      startAutoplay();
      window.addEventListener('resize', jumpToMiddle);
    })();


/* ==========================================================
   Source: header.js
   Consolidated from the original file; original preserved.
   ========================================================== */

   (() => {
      const root = document.querySelector('.mjk-header[data-mjk-header]');
      if (!root?.matches('.mjk-header[data-mjk-header]') || root.dataset.mjkHeaderReady) return;
      root.dataset.mjkHeaderReady = 'true';
      const dropdownItems = [...root.querySelectorAll('.mjk-header__nav-item--dropdown')];
      const mobileToggle = root.querySelector('.mjk-header__menu-toggle');
      const mobileMenu = root.querySelector('.mjk-header__mobile-panel');
      const mobileDisclosures = [...root.querySelectorAll('.mjk-header__mobile-dropdown-trigger')];

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

/* ==========================================================
   Source: our-impact.js
   Consolidated from the original file; original preserved.
   ========================================================== */

 (() => {
    const section = document.querySelector('.impact-section');
    if (!section) return;

    const counters = Array.from(section.querySelectorAll('[data-count]'));
    const format = new Intl.NumberFormat('en-US');

    const finish = () => {
      counters.forEach((counter) => {
        const value = Number(counter.dataset.count);
        counter.textContent = `${format.format(value)}+`;
      });
    };

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      section.classList.add('is-visible');
      finish();
      return;
    }

    let played = false;

    const observer = new IntersectionObserver((entries) => {
      if (played || !entries.some((entry) => entry.isIntersecting)) return;

      played = true;
      section.classList.add('is-visible');

      const start = performance.now();
      const duration = 1700;

      const animate = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);

        counters.forEach((counter) => {
          const value = Number(counter.dataset.count);
          counter.textContent = `${format.format(Math.round(value * eased))}${progress === 1 ? '+' : ''}`;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          observer.disconnect();
        }
      };

      requestAnimationFrame(animate);
    }, { threshold: 0.28 });

    observer.observe(section);
  })();


/* ==========================================================
   Source: blog-testimonial.js
   Consolidated from the original file; original preserved.
   ========================================================== */

 (() => {
      const carousel = document.querySelector(".mjks-testimonials__carousel");
      if (!carousel) return;

      const slides = Array.from(carousel.querySelectorAll(".mjks-testimonials__slide"));
      const prevButton = document.querySelector("[data-mjks-prev]");
      const nextButton = document.querySelector("[data-mjks-next]");
      const states = ["is-active", "is-prev", "is-next", "is-far-prev", "is-far-next", "is-hidden"];
      let activeIndex = 1;
      let autoplayTimer;

      const updateCarousel = () => {
        const total = slides.length;

        slides.forEach((slide, index) => {
          slide.classList.remove(...states);
          const forward = (index - activeIndex + total) % total;

          if (forward === 0) slide.classList.add("is-active");
          else if (forward === 1) slide.classList.add("is-next");
          else if (forward === 2) slide.classList.add("is-far-next");
          else if (forward === total - 1) slide.classList.add("is-prev");
          else if (forward === total - 2) slide.classList.add("is-far-prev");
          else slide.classList.add("is-hidden");
        });
      };

      const goTo = (direction) => {
        activeIndex = (activeIndex + direction + slides.length) % slides.length;
        updateCarousel();
      };

      const startAutoplay = () => {
        window.clearInterval(autoplayTimer);
        autoplayTimer = window.setInterval(() => goTo(1), 5000);
      };
      const pauseAutoplay = () => window.clearInterval(autoplayTimer);

      prevButton?.addEventListener("click", () => { goTo(-1); startAutoplay(); });
      nextButton?.addEventListener("click", () => { goTo(1); startAutoplay(); });

      carousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(-1);
          startAutoplay();
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(1);
          startAutoplay();
        }
      });

      carousel.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        carousel.dataset.dragStart = String(event.clientX);
        carousel.classList.add("is-dragging");
        carousel.setPointerCapture(event.pointerId);
        pauseAutoplay();
      });

      carousel.addEventListener("pointermove", (event) => {
        if (!carousel.hasPointerCapture(event.pointerId)) return;
        if (Math.abs(event.clientX - Number(carousel.dataset.dragStart)) > 5) event.preventDefault();
      });

      const finishSwipe = (event) => {
        if (carousel.hasPointerCapture(event.pointerId)) carousel.releasePointerCapture(event.pointerId);
        carousel.classList.remove("is-dragging");
        const distance = event.clientX - Number(carousel.dataset.dragStart);
        if (event.type === "pointerup" && Math.abs(distance) > 45) goTo(distance > 0 ? -1 : 1);
        delete carousel.dataset.dragStart;
        startAutoplay();
      };

      carousel.addEventListener("pointerup", finishSwipe);
      carousel.addEventListener("pointercancel", (event) => {
        carousel.classList.remove("is-dragging");
        finishSwipe(event);
      });
      startAutoplay();

      updateCarousel();
    })();


/* Master Hero Slider behavior — transferred from hero-slider.html */
(()=>{const root=document.querySelector('.mjks-master-hero');if(!root)return;const reduce=matchMedia('(prefers-reduced-motion: reduce)'),slides=[...root.querySelectorAll('.mjks-master-hero__slide')],dots=[...root.querySelectorAll('.mjks-master-hero__dot')],prev=root.querySelector('.mjks-master-hero__control--prev'),next=root.querySelector('.mjks-master-hero__control--next');let current=0,autoplay,resume,startX=null;const pause=()=>{clearInterval(autoplay);autoplay=null;clearTimeout(resume)},start=()=>{if(!reduce.matches&&!autoplay)autoplay=setInterval(()=>show(current+1),7000)},restart=()=>{pause();if(!reduce.matches)resume=setTimeout(start,7000)},show=i=>{current=(i+slides.length)%slides.length;slides.forEach((slide,n)=>{const active=n===current;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active));slide.inert=!active});dots.forEach((dot,n)=>{const active=n===current;dot.classList.toggle('is-active',active);active?dot.setAttribute('aria-current','true'):dot.removeAttribute('aria-current')})};prev.addEventListener('click',()=>{show(current-1);restart()});next.addEventListener('click',()=>{show(current+1);restart()});dots.forEach((dot,n)=>dot.addEventListener('click',()=>{show(n);restart()}));root.addEventListener('pointerenter',pause);root.addEventListener('pointerleave',start);root.addEventListener('focusin',pause);root.addEventListener('focusout',()=>setTimeout(()=>{if(!root.contains(document.activeElement))start()},0));root.addEventListener('keydown',e=>{if(e.target.closest('.mjks-hero2-gallery'))return;if(e.key==='ArrowLeft'){e.preventDefault();show(current-1);restart()}if(e.key==='ArrowRight'){e.preventDefault();show(current+1);restart()}});root.addEventListener('pointerdown',e=>{if(!e.target.closest('.mjks-hero2-gallery'))startX=e.clientX});root.addEventListener('pointerup',e=>{if(startX===null||e.target.closest('.mjks-hero2-gallery'))return;const d=e.clientX-startX;startX=null;if(Math.abs(d)>55){show(current+(d<0?1:-1));restart()}});const gallery=root.querySelector('.mjks-hero2-gallery'),items=gallery?[...gallery.querySelectorAll('.mjks-hero2-gallery__item')]:[];let gi=0,gx=null;const showGallery=i=>{if(!items.length)return;const visible=innerWidth>780?3:1,max=Math.max(0,items.length-visible);gi=Math.min(Math.max(0,i),max);if(i<0)gi=max;if(i>max)gi=0;gallery?.querySelector('.mjks-hero2-gallery__items')?.style.setProperty('--gallery-shift','calc(-'+(gi*100)+'% - '+(gi*12)+'px)');items.forEach((item,n)=>item.classList.toggle('is-current',n===gi))};gallery?.querySelector('.mjks-hero2-gallery__control--prev').addEventListener('click',e=>{e.stopPropagation();showGallery(gi-1);restart()});gallery?.querySelector('.mjks-hero2-gallery__control--next').addEventListener('click',e=>{e.stopPropagation();showGallery(gi+1);restart()});gallery?.addEventListener('pointerdown',e=>{e.stopPropagation();gx=e.clientX});gallery?.addEventListener('pointerup',e=>{e.stopPropagation();if(gx===null)return;const d=e.clientX-gx;gx=null;if(Math.abs(d)>35){showGallery(gi+(d<0?1:-1));restart()}});reduce.addEventListener?.('change',()=>{pause();if(!reduce.matches)start()});show(0);showGallery(0);start()})();
/* Master Hero dynamic accent text and filled button icons */
/* Keep only the icon inside hero buttons static; title and slider timing remain untouched. */
(()=>{const root=document.querySelector('.mjks-master-hero');if(!root)return;root.querySelectorAll('.mjks-master-hero__button svg[data-icon-cycle],.mjks-master-hero__panel-cta svg[data-icon-cycle]').forEach(icon=>{icon.classList.add('mjks-static-button-icon');icon.removeAttribute('data-icon-cycle')})})();
(()=>{const root=document.querySelector('.mjks-master-hero');if(!root)return;const reduce=matchMedia('(prefers-reduced-motion: reduce)');const phrases=[...root.querySelectorAll('[data-title-cycle]')].map(el=>({el,items:el.dataset.titleCycle.split('|').filter(Boolean),index:0})).filter(item=>item.items.length>1);const icons={donate:['<path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"/>','<path d="M11 21v-6H7.5A5.5 5.5 0 0 1 2 9.5V8h1.5A5.5 5.5 0 0 1 9 13.5V15h2V3h2v12h2v-1.5A5.5 5.5 0 0 1 20.5 8H22v1.5a5.5 5.5 0 0 1-5.5 5.5H13v6h-2Z"/>','<path d="M12 2 4 5.5v6.15c0 5.05 3.41 9.77 8 10.85 4.59-1.08 8-5.8 8-10.85V5.5L12 2Zm3.7 7.7-4.55 4.55-2.2-2.2 1.4-1.4.8.79 3.15-3.14 1.4 1.4Z"/>'],learn:['<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z"/>','<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H7a3 3 0 0 0-3 3V5.5Zm3 0v10.6c.32-.07.65-.1 1-.1h10V5H6.5a.5.5 0 0 0-.5.5Z"/>','<path d="M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2Zm-3 18h6v2H9v-2Z"/>'],join:['<path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3ZM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z"/>','<path d="M12 2 2 7l10 5 10-5-10-5Zm-7 8.18V14c0 2.76 3.13 5 7 5s7-2.24 7-5v-3.82l-7 3.5-7-3.5Z"/>','<path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"/>'],work:['<path d="M10 4h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v3H2v-3a2 2 0 0 1 2-2h4V6a2 2 0 0 1 2-2Zm4 4V6h-4v2h4Zm8 7v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3h8v1.5h4V15h8Z"/>','<path d="M12 2 3 6v6c0 5 3.8 9.4 9 10 5.2-.6 9-5 9-10V6l-9-4Zm4.2 8.2-5.2 5.2-2.7-2.7 1.4-1.4 1.3 1.3 3.8-3.8 1.4 1.4Z"/>','<path d="M4 4h16v4H4V4Zm0 6h7v10H4V10Zm9 0h7v10h-7V10Z"/>'],journey:['<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>','<path d="M5 3 3 4v17l6-3 6 3 6-3V1l-6 3-6-3-4 2Zm4 .2 6 3v12.6l-6-3V3.2Z"/>','<path d="M12 2 4 5.5v6.15c0 5.05 3.41 9.77 8 10.85 4.59-1.08 8-5.8 8-10.85V5.5L12 2Zm0 5.5a3.5 3.5 0 0 1 3.5 3.5c0 2.6-3.5 6-3.5 6s-3.5-3.4-3.5-6A3.5 3.5 0 0 1 12 7.5Z"/>']};const iconEls=[...root.querySelectorAll('svg[data-icon-cycle]')].map(el=>({el,items:icons[el.dataset.iconCycle]||[],index:0})).filter(item=>item.items.length>1);const showIcon=item=>{item.el.innerHTML=item.items[item.index];item.el.setAttribute('viewBox','0 0 24 24')};iconEls.forEach(showIcon);if(reduce.matches)return;let tick=0;setInterval(()=>{tick++;phrases.forEach(item=>{item.index=(item.index+1)%item.items.length;item.el.classList.remove('is-scroll-in');item.el.classList.add('is-scroll-out');setTimeout(()=>{item.el.textContent=item.items[item.index];item.el.classList.remove('is-scroll-out');item.el.classList.add('is-scroll-in');setTimeout(()=>item.el.classList.remove('is-scroll-in'),420)},220)});iconEls.forEach(item=>{item.index=(item.index+1)%item.items.length;item.el.classList.remove('is-scroll-in');item.el.classList.add('is-scroll-out');setTimeout(()=>{showIcon(item);item.el.classList.remove('is-scroll-out');item.el.classList.add('is-scroll-in');setTimeout(()=>item.el.classList.remove('is-scroll-in'),420)},220)})},3600)})();

(() => {
  const root = document.querySelector('.mjks-master-hero');
  if (!root) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const cyclingImages = [...root.querySelectorAll('img[data-image-cycle]')]
    .map((img) => {
      const sources = (img.dataset.imageCycle || '').split('|').filter(Boolean);
      const alts = (img.dataset.altCycle || '').split('|');
      sources.forEach((src) => {
        const preload = new Image();
        preload.src = src;
      });
      return { img, sources, alts, index: Math.max(0, sources.indexOf(img.getAttribute('src') || '')) };
    })
    .filter((item) => item.sources.length > 1);

  if (!cyclingImages.length || reduce.matches) return;

  setInterval(() => {
    cyclingImages.forEach((item, order) => {
      item.index = (item.index + 1) % item.sources.length;
      const nextSource = item.sources[item.index];
      const nextImage = new Image();
      nextImage.onload = () => {
        item.img.classList.remove('is-image-scroll-in');
        item.img.classList.add('is-image-scroll-out');
        item.img.src = nextSource;
        if (item.alts[item.index]) item.img.alt = item.alts[item.index];
        requestAnimationFrame(() => {
          item.img.classList.remove('is-image-scroll-out');
          item.img.classList.add('is-image-scroll-in');
          setTimeout(() => item.img.classList.remove('is-image-scroll-in'), 560);
        });
      };
      nextImage.src = nextSource;
    });
  }, 4200);
})();

(() => {
  const root = document.querySelector('.mjks-master-hero');
  const gallery = root?.querySelector('.mjks-hero2-gallery');
  const track = gallery?.querySelector('.mjks-hero2-gallery__items');
  const items = track ? [...track.querySelectorAll('.mjks-hero2-gallery__item')] : [];
  if (!root || !gallery || !track || items.length < 4) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const slide = gallery.closest('.mjks-master-hero__slide');
  const prev = gallery.querySelector('.mjks-hero2-gallery__control--prev');
  const next = gallery.querySelector('.mjks-hero2-gallery__control--next');
  let index = 0;
  let timer = null;

  const visibleCount = () => innerWidth > 780 ? 3 : 1;
  const maxIndex = () => Math.max(0, items.length - visibleCount());
  const apply = (value) => {
    const max = maxIndex();
    index = value < 0 ? max : value > max ? 0 : value;
    track.style.setProperty('--gallery-shift', `calc(-${index * 100}% - ${index * 12}px)`);
    items.forEach((item, itemIndex) => item.classList.toggle('is-current', itemIndex === index));
  };
  const isHero2Visible = () => !slide || slide.classList.contains('is-active');
  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => {
    if (reduce.matches || timer) return;
    timer = setInterval(() => {
      if (isHero2Visible()) apply(index + 1);
    }, 1900);
  };
  const restart = () => { stop(); start(); };

  prev?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    apply(index - 1);
    restart();
  }, true);
  next?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    apply(index + 1);
    restart();
  }, true);
  addEventListener('resize', () => apply(Math.min(index, maxIndex())), { passive: true });
  reduce.addEventListener?.('change', () => { stop(); if (!reduce.matches) start(); });

  apply(0);
  start();
})();

(() => {
  const buttons = document.querySelectorAll(
    '.mjks-master-hero__button, .mjks-master-hero__panel-cta, .mjk-header__donate, ' +
    '.mjks-impact-action__cta, .mjk-vision__cta, .mjk-impact__cta, .mjks-cause-card__donate'
  );

  buttons.forEach((button) => {
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
})();

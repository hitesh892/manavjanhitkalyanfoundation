 (() => {
      const strip = document.querySelector('#work-ground-gallery');
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

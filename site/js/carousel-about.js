(() => {
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach((root) => {
    const track = root.querySelector('[data-track]');
    const items = track ? Array.from(track.children) : [];
    const previousButton = root.querySelector('[data-prev]');
    const nextButton = root.querySelector('[data-next]');
    const section = root.closest('.mjks-ground');
    const dotsRoot = section?.querySelector('[data-dots]');
    const status = section?.querySelector('[data-status]');

    if (!track || !items.length || !previousButton || !nextButton) return;

    let index = 0;
    let startX = 0;
    let deltaX = 0;
    let resizeFrame = 0;

    const visibleCount = () => {
      if (window.matchMedia('(max-width: 767px)').matches) return 1;
      if (window.matchMedia('(max-width: 1023px)').matches) return 2;
      return 3;
    };

    const maximumIndex = () => Math.max(0, items.length - visibleCount());
    const itemStep = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return items[0].getBoundingClientRect().width + gap;
    };

    const buildDots = () => {
      if (!dotsRoot) return;
      dotsRoot.replaceChildren();
      const total = maximumIndex() + 1;

      for (let dotIndex = 0; dotIndex < total; dotIndex += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'mjks-ground__dot';
        dot.setAttribute('aria-label', `Show carousel position ${dotIndex + 1} of ${total}`);
        dot.addEventListener('click', () => {
          index = dotIndex;
          render();
        });
        dotsRoot.append(dot);
      }
    };

    const render = () => {
      index = Math.max(0, Math.min(index, maximumIndex()));
      track.style.transform = `translate3d(${-index * itemStep()}px, 0, 0)`;
      previousButton.disabled = index === 0;
      nextButton.disabled = index === maximumIndex();

      if (dotsRoot && dotsRoot.children.length !== maximumIndex() + 1) buildDots();
      dotsRoot?.querySelectorAll('.mjks-ground__dot').forEach((dot, dotIndex) => {
        dot.setAttribute('aria-current', String(dotIndex === index));
      });

      items.forEach((item, itemIndex) => {
        const isVisible = itemIndex >= index && itemIndex < index + visibleCount();
        item.setAttribute('aria-hidden', String(!isVisible));
      });

      if (status) {
        const first = index + 1;
        const last = Math.min(items.length, index + visibleCount());
        status.textContent = `Showing initiatives ${first} to ${last} of ${items.length}`;
      }
    };

    const goPrevious = () => { index -= 1; render(); };
    const goNext = () => { index += 1; render(); };

    previousButton.addEventListener('click', goPrevious);
    nextButton.addEventListener('click', goNext);

    root.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); goPrevious(); }
      if (event.key === 'ArrowRight') { event.preventDefault(); goNext(); }
      if (event.key === 'Home') { event.preventDefault(); index = 0; render(); }
      if (event.key === 'End') { event.preventDefault(); index = maximumIndex(); render(); }
    });

    root.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse') return;
      startX = event.clientX;
      deltaX = 0;
      root.setPointerCapture(event.pointerId);
    });

    root.addEventListener('pointermove', (event) => {
      if (!root.hasPointerCapture(event.pointerId)) return;
      deltaX = event.clientX - startX;
    });

    root.addEventListener('pointerup', (event) => {
      if (Math.abs(deltaX) > 45) deltaX > 0 ? goPrevious() : goNext();
      deltaX = 0;
      if (root.hasPointerCapture(event.pointerId)) root.releasePointerCapture(event.pointerId);
    });

    window.addEventListener('resize', () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        buildDots();
        render();
      });
    }, { passive: true });

    buildDots();
    render();
  });
})();

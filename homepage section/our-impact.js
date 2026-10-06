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

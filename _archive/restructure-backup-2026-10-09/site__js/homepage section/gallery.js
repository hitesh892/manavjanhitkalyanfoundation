 (() => {
      const track = document.querySelector('.track');
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
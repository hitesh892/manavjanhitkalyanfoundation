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
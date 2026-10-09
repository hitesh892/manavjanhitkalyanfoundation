(() => {
  const carousel = document.querySelector(".mjks-causes__carousel");
  if (!carousel) return;

  const viewport = carousel.querySelector(".mjks-causes__viewport");
  const track = carousel.querySelector(".mjks-causes__grid");
  const previousButton = carousel.querySelector("[data-causes-prev]");
  const nextButton = carousel.querySelector("[data-causes-next]");
  const pagination = carousel.querySelector("[data-causes-pagination]");
  const status = carousel.querySelector("[data-causes-status]");
  let slides = Array.from(track.querySelectorAll(".mjks-cause-card"));
  let pageOffsets = [];
  let activePage = 0;
  let pointerStartX = null;

  const getGap = () => Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
  const visibleSlides = () => {
    if (!slides.length) return 1;
    const step = slides[0].getBoundingClientRect().width + getGap();
    return Math.max(1, Math.round((viewport.clientWidth + getGap()) / step));
  };

  const createPagination = () => {
    pagination.replaceChildren();

    pageOffsets.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "mjks-causes__dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Show causes page ${index + 1} of ${pageOffsets.length}`);
      dot.addEventListener("click", () => update(index));
      pagination.append(dot);
    });
  };

  const update = (page) => {
    if (!pageOffsets.length) return;

    activePage = (page + pageOffsets.length) % pageOffsets.length;
    const offset = pageOffsets[activePage];
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${offset * (slideWidth + getGap())}px)`;

    slides.forEach((slide, index) => {
      const isVisible = index >= offset && index < offset + visibleSlides();
      slide.setAttribute("aria-hidden", String(!isVisible));
      slide.inert = !isVisible;
    });

    Array.from(pagination.children).forEach((dot, index) => {
      const isActive = index === activePage;
      dot.classList.toggle("is-active", isActive);
      if (isActive) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });

    previousButton.disabled = pageOffsets.length < 2;
    nextButton.disabled = pageOffsets.length < 2;
    status.textContent = `Causes page ${activePage + 1} of ${pageOffsets.length}`;
  };

  const refresh = () => {
    slides = Array.from(track.querySelectorAll(".mjks-cause-card"));
    if (!slides.length) {
      carousel.classList.remove("is-ready");
      pagination.replaceChildren();
      return;
    }

    const visible = visibleSlides();
    const previousOffset = pageOffsets[activePage] || 0;
    pageOffsets = [];

    for (let offset = 0; offset < Math.max(1, slides.length - visible + 1); offset += visible) {
      pageOffsets.push(offset);
    }

    const lastOffset = Math.max(0, slides.length - visible);
    if (pageOffsets[pageOffsets.length - 1] !== lastOffset) pageOffsets.push(lastOffset);

    activePage = Math.max(0, pageOffsets.findIndex((offset) => offset >= previousOffset));
    if (activePage === pageOffsets.length) activePage = pageOffsets.length - 1;

    createPagination();
    carousel.classList.add("is-ready");
    update(activePage);
  };

  previousButton.addEventListener("click", () => update(activePage - 1));
  nextButton.addEventListener("click", () => update(activePage + 1));

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      update(activePage - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      update(activePage + 1);
    }
  });

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" || event.target.closest("a, button")) return;
    pointerStartX = event.clientX;
  });

  viewport.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) > 45) update(activePage + (distance < 0 ? 1 : -1));
  });

  viewport.addEventListener("pointercancel", () => {
    pointerStartX = null;
  });

  let resizeFrame = 0;
  window.addEventListener("resize", () => {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(refresh);
  });
  new ResizeObserver(refresh).observe(viewport);
  new MutationObserver(refresh).observe(track, { childList: true });
  refresh();
})();

(function () {
  "use strict";

  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
  }

  const menuButton = document.querySelector(".mjks-news-header__menu");
  const navigation = document.querySelector(".mjks-news-header__nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  const tabList = document.querySelector(".mjks-news-tabs");
  const tabs = Array.from(document.querySelectorAll(".mjks-news-tabs [role='tab']"));
  const storyGrid = document.querySelector(".mjks-story-grid");
  const storyItems = Array.from(document.querySelectorAll(".mjks-story-grid [data-category]"));
  const supportingGroup = document.querySelector(".mjks-supporting-stories");
  const briefsGroup = document.querySelector(".mjks-briefs");

  function updateTab(tab) {
    const filter = tab.dataset.filter;

    tabs.forEach(function (item) {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });

    if (filter === "awards") {
      storyItems.forEach(function (item) { item.hidden = false; });
      storyGrid.classList.remove("is-filtered");
      supportingGroup.hidden = false;
      briefsGroup.hidden = false;
      document.querySelector("#awards").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    storyItems.forEach(function (item) {
      item.hidden = filter !== "all" && item.dataset.category !== filter;
    });

    storyGrid.classList.toggle("is-filtered", filter !== "all");
    supportingGroup.hidden = !Array.from(supportingGroup.querySelectorAll("[data-category]")).some(function (item) { return !item.hidden; });
    briefsGroup.hidden = !Array.from(briefsGroup.querySelectorAll("[data-category]")).some(function (item) { return !item.hidden; });
  }

  tabs.forEach(function (tab, index) {
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.addEventListener("click", function () { updateTab(tab); });
  });

  if (tabList) {
    tabList.addEventListener("keydown", function (event) {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const current = tabs.indexOf(document.activeElement);
      let next = current;
      if (event.key === "ArrowRight") next = (current + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      tabs[next].focus();
      updateTab(tabs[next]);
    });
  }

  const galleryTrack = document.querySelector(".mjks-gallery__track");
  const galleryPrevious = document.querySelector(".mjks-gallery__arrow--prev");
  const galleryNext = document.querySelector(".mjks-gallery__arrow--next");

  function moveGallery(direction) {
    if (!galleryTrack) return;
    galleryTrack.scrollBy({ left: direction * galleryTrack.clientWidth * 0.72, behavior: "smooth" });
  }

  if (galleryPrevious) galleryPrevious.addEventListener("click", function () { moveGallery(-1); });
  if (galleryNext) galleryNext.addEventListener("click", function () { moveGallery(1); });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  let pointerFrame = 0;

  if (precisePointer.matches && !reduceMotion.matches) {
    document.addEventListener("pointermove", function (event) {
      if (pointerFrame) return;
      pointerFrame = window.requestAnimationFrame(function () {
        document.documentElement.style.setProperty("--cursor-x", event.clientX + "px");
        document.documentElement.style.setProperty("--cursor-y", event.clientY + "px");
        pointerFrame = 0;
      });
    }, { passive: true });

    const playControl = document.querySelector(".mjks-gallery__play");
    const videoCard = document.querySelector(".mjks-gallery__video");

    if (playControl && videoCard) {
      videoCard.addEventListener("pointermove", function (event) {
        const bounds = videoCard.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
        playControl.style.translate = x + "px " + y + "px";
      });
      videoCard.addEventListener("pointerleave", function () {
        playControl.style.translate = "0 0";
      });
    }
  }

  const videoPreview = document.querySelector(".mjks-gallery__video");
  if (videoPreview) {
    videoPreview.addEventListener("click", function () {
      window.location.href = "gallery.html";
    });
  }

  document.querySelectorAll("[data-delay-link]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const target = button.href;
      button.classList.remove("is-swipe-reset");
      button.classList.add("is-swipe-active");
      window.setTimeout(function () {
        button.classList.remove("is-swipe-active");
        button.classList.add("is-swipe-reset");
      }, 620);
      window.setTimeout(function () {
        window.location.href = target;
      }, 1100);
    });
  });
})();

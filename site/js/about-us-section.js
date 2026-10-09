const impactGlassSurface = document.querySelector("#mjk-impact-section .mjk-impact__surface");

if (impactGlassSurface) {
  liquidGlass(impactGlassSurface, {
    displacementScale: 200,
    chroma: 10,
    turbulenceBaseFrequency: "0.012 0.012",
    turbulenceSeed: 5,
    blur: 4,
    saturate: 1.22,
    border: 0.055,
    mapBlur: 22,
    fallbackBlur: 4,
    svgFilter: false,
  });
}

const impactCta = document.querySelector("#mjk-impact-section .mjk-impact__cta");

if (impactCta) {
  impactCta.addEventListener("click", () => {
    impactCta.classList.remove("is-swipe-active", "is-swipe-reset");
    void impactCta.offsetWidth;
    impactCta.classList.add("is-swipe-active");

    window.setTimeout(() => {
      impactCta.classList.add("is-swipe-reset");
      impactCta.classList.remove("is-swipe-active");
      window.requestAnimationFrame(() => impactCta.classList.remove("is-swipe-reset"));
    }, 1100);
  });
}

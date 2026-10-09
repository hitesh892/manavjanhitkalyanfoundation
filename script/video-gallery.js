(() => {
  const ids = [
    "mmKt6uUTJHk","1yFvYEuGlz0","hVDFYCGU2y0","GnQ2r1eB0SA","yWtnQjUJa7s","E3Bob2YbvKk","Lhdv8tD3sXg","pzNAotvbwmk","S0BY8h5ZTrE","KjQWi-ayNW8","6dfyAmQQdpY","ToJZYB9To70","I9GJWvVB8mI","eg6dlMrjjsc","izk8Hl7hHaY","oz-4Qm2UClA","8ET42piDF88","20c1iPS-3gA","zxgvZuM_vag","86OQb2DXciA","3RozwRuvdGk","nnLQ--qgtuc","paSWHiP8r88","FqGIswzdwQU","g3q6zAfnPRU","F3RFSky85U4","Z20VEthIWnk","kNsf0KSVqb0","LHX_T8vHjBw","NHPTqOOHvGo","jYbKSwTQXMA","-amp19vZGnQ","iqIXZrdiWhA","y9eHJNdWFho","pzuHLyLlWRw","CIYnsWAxdng","ZMjkKhUahnw","TRRSfN71GSI","h3baE3PhBGQ","gVu8pZKHWpM","YMtaphXZz60","kvlBFu7Q7Nw","lpe2pZjGGzA","uortVFIVQJQ","Xx6v-GiG4lU","Oe3xCIkK798","2XovmimuGRw","jlOsEyFGgjM","IvaXvGVrpGo","3buokdLrXQM","C8mH88QxgzE","axISSBMSgGo","X7H959J-GFg","G9B71y03-OI","Vtrcb25E_DI","UFEYqwUzeP4","duZj4iAGhNg","XqSg1j-i-MI","wmIudzPiHG4","8VSe1EMvWTg","pB_nQkN9kCU","bHuxx_wnJtA","sl_4XM3VfbE","F0rW8YORr5Q","zR5Ep5WIOOo","A-G9MNWuOo8","E5s6vFGccuA","FRbavlheTCI","2CWwx8dk19A","WXf9A5ReH6A","GZsrIdcDXP8","of9X050tP5E","CZUTKyymUVw"
  ];
  const root = document.querySelector("#video-gallery-items");
  if (!root) return;
  const track = root.querySelector(".track");
  const previous = root.querySelector(".arrow-prev");
  const next = root.querySelector(".arrow-next");
  const dots = root.querySelector(".dots");
  const status = root.querySelector("#carousel-status");
  let active = 0;
  let locked = false;

  const wrap = index => (index + ids.length) % ids.length;
  const title = index => index === 0 ? "Bringing Hope Through Community Support" : "Manav Janhit community story";

  function card(index, slot) {
    const actual = wrap(index);
    const article = document.createElement("article");
    article.className = `video-card${slot === 0 ? " is-featured" : ""}${slot === 1 ? " is-preloading" : ""}`;
    article.dataset.slot = String(slot + 2);
    article.dataset.videoId = ids[actual];
    article.dataset.index = String(actual);
    article.setAttribute("aria-label", `${title(actual)}, video ${actual + 1} of ${ids.length}`);
    article.innerHTML = `<div class="poster"><img class="video-thumb" src="https://i.ytimg.com/vi/${ids[actual]}/hqdefault.jpg" alt="" loading="${slot === 0 ? "eager" : "lazy"}"><button class="video-play-control" type="button" aria-label="Play ${title(actual)}"><svg class="video-progress-ring" viewBox="0 0 54 54" aria-hidden="true"><circle class="video-progress-ring__track" cx="27" cy="27" r="24"></circle><circle class="video-progress-ring__value" cx="27" cy="27" r="24"></circle></svg><svg class="video-play-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.8c0-.7.8-1.1 1.4-.7l9.2 6.2a.9.9 0 0 1 0 1.4l-9.2 6.2c-.6.4-1.4 0-1.4-.7V5.8Z"></path></svg></button><strong class="video-card-title">${title(actual)}</strong></div>`;
    article.querySelector("img").addEventListener("error", event => {
      const image = event.currentTarget;
      if (!image.dataset.fallback) { image.dataset.fallback = "true"; image.src = `https://i.ytimg.com/vi/${ids[actual]}/mqdefault.jpg`; }
    });
    article.querySelector("button").addEventListener("click", () => play(article, actual));
    return article;
  }

  function render() {
    track.replaceChildren(...[-2,-1,0,1,2].map(offset => card(active + offset, offset)));
    if (dots) {
      dots.innerHTML = `<span class="dot" aria-hidden="true"></span><span class="dot" aria-hidden="true"></span><span class="dot" aria-hidden="true"></span><strong aria-label="Current video">${active + 1} / ${ids.length}</strong>`;
    }
    if (status) status.textContent = `Video ${active + 1} of ${ids.length} featured.`;
    const preload = new Image();
    preload.src = `https://i.ytimg.com/vi/${ids[wrap(active + 1)]}/hqdefault.jpg`;
  }

  function play(article, index) {
    const oldFrame = track.querySelector("iframe");
    if (oldFrame) oldFrame.remove();
    article.classList.add("is-loading");
    const frame = document.createElement("iframe");
    frame.className = "video-player";
    frame.title = title(index);
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.src = `https://www.youtube-nocookie.com/embed/${ids[index]}?autoplay=1&rel=0&playsinline=1`;
    frame.addEventListener("load", () => article.classList.remove("is-loading"), { once: true });
    article.querySelector(".poster").prepend(frame);
  }

  function move(step) {
    if (locked) return;
    locked = true;
    active = wrap(active + step);
    render();
    window.setTimeout(() => { locked = false; }, 520);
  }

  previous?.addEventListener("click", () => move(-1));
  next?.addEventListener("click", () => move(1));
  root.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  });
  render();
})();

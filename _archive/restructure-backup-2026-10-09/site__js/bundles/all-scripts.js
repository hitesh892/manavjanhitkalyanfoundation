/* Safe script entry point. It loads page-specific scripts on demand instead of executing every page script together. */
(function(){
  const root = "../";
  const scripts = {
    home: ["homepage%20section/header.js", "homepage%20section/script.js"],
    legal: ["scripts/legal/terms-policy.js", "scripts/legal/policy-progress.js"],
    csr: ["pages/csr/csr.js"],
    blog: ["pages/blog/single-blog.js"],
    media: ["pages/media/gallery.js", "pages/media/news-media.js"],
    campaign: ["pages/campaigns/hero-campaign.js"]
  };
  window.MJKBundle = { scripts };
  window.MJKBundle.load = function(name){
    (scripts[name] || []).forEach(function(src){
      const script = document.createElement("script");
      script.src = root + src;
      script.defer = true;
      document.head.appendChild(script);
    });
  };
})();

(function () {
  'use strict';

  function shareUrl(network) {
    var url = encodeURIComponent(window.location.href);
    var title = encodeURIComponent(document.title);
    if (network === 'facebook') return 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    return 'https://wa.me/?text=' + title + '%20' + url;
  }

  function setCopyState(button, message) {
    var label = button.querySelector('[data-copy-label]');
    var status = document.querySelector('[data-share-status]');
    if (label) label.textContent = message;
    if (status) status.textContent = message === 'Copied' ? 'Article link copied to clipboard.' : '';
    window.setTimeout(function () {
      if (label) label.textContent = 'Copy Link';
    }, 1800);
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-share]');
    if (!button) return;
    var network = button.getAttribute('data-share');
    if (network === 'copy') {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(window.location.href).then(function () { setCopyState(button, 'Copied'); });
      } else {
        var input = document.createElement('textarea');
        input.value = window.location.href;
        input.setAttribute('readonly', '');
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
        setCopyState(button, 'Copied');
      }
      return;
    }
    window.open(shareUrl(network), '_blank', 'noopener,noreferrer,width=720,height=620');
  });
}());

// Mobile menu toggle. The site works without JavaScript; this only tidies the menu on phones.
(function () {
  document.documentElement.classList.add('js');
  var button = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  w
  const nav = document.querySelector('.navigation');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.toggle('open');
  });

  // Close nav when a link is clicked
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
});

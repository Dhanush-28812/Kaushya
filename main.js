// Make the hero thread draw smoothly
document.querySelectorAll('.thread ellipse').forEach(function (e) { e.setAttribute('pathLength', '1'); });

// Gold thread on the left edge fills as you scroll
var bar = document.getElementById('bar');
function onScroll() {
  var h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.height = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Highlight the current section in the navigation
var links = document.querySelectorAll('.nav nav a');
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (en) {
    if (en.isIntersecting) {
      links.forEach(function (l) { l.classList.toggle('on', l.getAttribute('href') === '#' + en.target.id); });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(function (s) { io.observe(s); });

document.documentElement.classList.add('js');

// ── Highlight the nav link for the section in view ───────────
const navLinks = [...document.querySelectorAll('.nav-links a')];
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const spy = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }),
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach(s => spy.observe(s));

// ── Scroll fade-in ───────────────────────────────────────────
const fadeTargets = document.querySelectorAll('.card, .pub, .timeline li, .skill-group, .facts');

const io = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);

fadeTargets.forEach(el => { el.classList.add('fade-in'); io.observe(el); });

// ── Mark active nav link based on current page ───────────────
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();

// ── Scroll fade-in ───────────────────────────────────────────
const fadeTargets = document.querySelectorAll(
  '.pub, .post-card, .fade-in, .contact-note, .contact-row, .about-body p'
);

fadeTargets.forEach(el => {
  if (!el.classList.contains('fade-in')) el.classList.add('fade-in');
});

const io = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);

fadeTargets.forEach(el => io.observe(el));
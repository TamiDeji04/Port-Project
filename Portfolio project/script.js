const revealed = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section[id]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.16 }
);

revealed.forEach((item, idx) => {
  item.style.transitionDelay = `${idx * 80}ms`;
  revealObserver.observe(item);
});

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const targetId = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${targetId}`;
        link.classList.toggle('active', active);
      });
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => navObserver.observe(section));

/* Hamburger menu toggle */
const hamburger = document.querySelector('.navbar__hamburger');
const menu      = document.querySelector('.navbar__menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('navbar__menu--open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('navbar__menu--open')) {
      menu.classList.remove('navbar__menu--open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });

  /* Close menu when a link is clicked on mobile */
  menu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('navbar__menu--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* Scroll: add .header--scrolled after 80px */
const header = document.querySelector('.header');

if (header) {
  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* Dynamic copyright year */
const yearEl = document.getElementById('copyright-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

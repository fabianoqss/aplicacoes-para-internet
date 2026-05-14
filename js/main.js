/* ── Hamburger menu toggle ────────────────────────────────────────── */
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

  menu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('navbar__menu--open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Scroll: adiciona .header--scrolled após 80px ───────────────── */
const header = document.querySelector('.header');

if (header) {
  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ── Dark Mode toggle ────────────────────────────────────────────── */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = themeToggle?.querySelector('.navbar__theme-icon');
const htmlEl      = document.documentElement;

const applyTheme = (isDark) => {
  htmlEl.setAttribute('data-theme', isDark ? 'dark' : 'light');
  if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
  themeToggle?.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

/* Restaura preferência salva ou usa preferência do sistema */
const savedTheme  = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    applyTheme(htmlEl.getAttribute('data-theme') !== 'dark');
  });
}

/* ── Ano de copyright dinâmico ───────────────────────────────────── */
const yearEl = document.getElementById('copyright-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

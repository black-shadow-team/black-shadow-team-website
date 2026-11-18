document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const langButton = document.querySelector('.language-toggle');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
      menuButton.focus();
    }
  });
}

const translations = [...document.querySelectorAll('[data-en][data-bn]')];
let currentLanguage = 'en';
try {
  const savedLanguage = localStorage.getItem('bst-language');
  if (savedLanguage === 'bn' || savedLanguage === 'en') currentLanguage = savedLanguage;
} catch (_) {
  // Storage may be disabled; the language control still works for this visit.
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.body.classList.toggle('lang-bn', language === 'bn');
  translations.forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  if (langButton) {
    langButton.textContent = language === 'en' ? 'বাংলা' : 'English';
    langButton.setAttribute('aria-label', language === 'en' ? 'Switch to Bangla' : 'Switch to English');
    langButton.lang = language === 'en' ? 'bn' : 'en';
  }
  try {
    localStorage.setItem('bst-language', language);
  } catch (_) {
    // Ignore storage restrictions without breaking the language switch.
  }
}

if (langButton) {
  langButton.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'bn' : 'en'));
}
if (currentLanguage !== 'en') setLanguage(currentLanguage);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px 40px 0px' });
  revealItems.forEach((element) => revealObserver.observe(element));
} else {
  revealItems.forEach((element) => element.classList.add('visible'));
}

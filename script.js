document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const langButton = document.querySelector('.language-toggle');

function closeNavigation(returnFocus = false) {
  if (!menuButton || !nav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('open');
  if (returnFocus) menuButton.focus();
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeNavigation());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeNavigation(true);
    }
  });

  // Do not leave a mobile dropdown open if the viewport becomes desktop-sized.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) closeNavigation();
  }, { passive: true });
}

let currentLanguage = 'en';
try {
  const savedLanguage = localStorage.getItem('bst-language');
  if (savedLanguage === 'bn' || savedLanguage === 'en') currentLanguage = savedLanguage;
} catch (_) {
  // Storage may be disabled; the language control still works for this visit.
}

function setLanguage(language) {
  if (language !== 'bn' && language !== 'en') return;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.body.classList.toggle('lang-bn', language === 'bn');
  document.querySelectorAll('[data-en][data-bn]').forEach((element) => {
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
window.setBstLanguage = setLanguage;

if (langButton) {
  langButton.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'bn' : 'en'));
}
if (currentLanguage !== 'en') setLanguage(currentLanguage);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reducedMotion) {
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
  // Keep the content visible if animations or IntersectionObserver are unavailable.
  revealItems.forEach((element) => element.classList.add('visible'));
}

// Load the portfolio as progressive enhancement; the rest of the site remains usable if it fails.
const portfolioStylesheet = document.createElement('link');
portfolioStylesheet.rel = 'stylesheet';
portfolioStylesheet.href = new URL('./portfolio.css', document.baseURI).href;
document.head.appendChild(portfolioStylesheet);

const portfolioScript = document.createElement('script');
portfolioScript.src = new URL('./portfolio.js', document.baseURI).href;
portfolioScript.async = true;
portfolioScript.addEventListener('error', () => {
  console.error('The optional portfolio section could not be loaded.');
});
document.body.appendChild(portfolioScript);

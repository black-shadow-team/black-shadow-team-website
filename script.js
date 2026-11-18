const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const langButton = document.querySelector('.language-toggle');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  });
});

let currentLanguage = 'en';
langButton.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
  document.documentElement.lang = currentLanguage;
  document.body.classList.toggle('lang-bn', currentLanguage === 'bn');
  document.querySelectorAll('[data-en][data-bn]').forEach((element) => {
    element.innerHTML = element.dataset[currentLanguage];
  });
  langButton.textContent = currentLanguage === 'en' ? 'বাংলা' : 'English';
  langButton.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Bangla' : 'Switch to English');
});

document.getElementById('year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

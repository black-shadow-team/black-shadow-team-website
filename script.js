const logoUrl = new URL('./Black Shadow Team logo.png', document.baseURI).href;
const founderPhotoUrl = new URL('./ceo.jpg.jpeg', document.baseURI).href;

// Use the image assets stored alongside this site so they work on the deployed domain too.
document.querySelectorAll('.brand img, .emblem-card img').forEach((image) => {
  image.src = logoUrl;
  image.decoding = 'async';
  image.style.objectFit = 'contain';
});

const founderPhoto = document.querySelector('.founder-photo img');
if (founderPhoto) {
  founderPhoto.src = founderPhotoUrl;
  founderPhoto.loading = 'lazy';
  founderPhoto.decoding = 'async';
  founderPhoto.style.objectFit = 'cover';
  founderPhoto.style.objectPosition = 'center 35%';
}

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

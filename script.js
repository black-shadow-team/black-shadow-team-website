(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const languageButton = document.querySelector('.language-toggle');
  const year = document.querySelector('#year');

  if (year) year.textContent = String(new Date().getFullYear());

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      navigation.classList.toggle('is-open', !open);
    });
    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      navigation.classList.remove('is-open');
    }));
  }

  if (languageButton) languageButton.addEventListener('click', () => {
    const language = document.documentElement.lang === 'en' ? 'bn' : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-en][data-bn]').forEach((element) => {
      element.innerHTML = element.dataset[language];
    });
    languageButton.textContent = language === 'en' ? 'বাংলা' : 'English';
    languageButton.setAttribute('aria-label', language === 'en' ? 'Switch to Bangla' : 'Switch to English');
    languageButton.lang = language === 'en' ? 'bn' : 'en';
  });
})();

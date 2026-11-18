(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const languageButton = document.querySelector('.language-toggle');
  const year = document.querySelector('#year');

  if (year) year.textContent = String(new Date().getFullYear());

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
        navigation.classList.remove('is-open');
      });
    });
  }

  if (languageButton) {
    languageButton.addEventListener('click', () => {
      const nextLanguage = document.documentElement.lang === 'en' ? 'bn' : 'en';
      document.documentElement.lang = nextLanguage;
      document.querySelectorAll('[data-en][data-bn]').forEach((element) => {
        element.innerHTML = element.dataset[nextLanguage];
      });
      languageButton.textContent = nextLanguage === 'en' ? 'বাংলা' : 'English';
      languageButton.setAttribute('aria-label', nextLanguage === 'en' ? 'Switch to Bangla' : 'Switch to English');
      languageButton.lang = nextLanguage === 'en' ? 'bn' : 'en';
    });
  }
})();

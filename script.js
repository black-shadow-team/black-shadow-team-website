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

  // Show the team's supplied public profile links in one responsive section.
  const contactSection = document.querySelector('#contact');
  if (contactSection && !document.querySelector('#social-profiles')) {
    const profiles = [
      ['Crunchbase', 'https://www.crunchbase.com/organization/black-shadow-team'],
      ['Musfiqur Rahim · GitHub', 'https://github.com/musfiqur-rahim-dev'],
      ['Black Shadow Team · GitHub', 'https://github.com/black-shadow-team'],
      ['LinkedIn', 'https://www.linkedin.com/in/musfiqur-rahim-bst/'],
      ['Official website', 'https://black-shadow-team.vercel.app/'],
      ['Substack · @blackshadowteam', 'https://substack.com/@blackshadowteam'],
      ['Projects · GitHub', 'https://github.com/blackshadowteamnet-netizen'],
      ['DEV Community', 'https://dev.to/black_shadow_team'],
      ['Medium', 'https://medium.com/@blackshadowteam.net'],
      ['X', 'https://x.com/BlackShadoTeam'],
      ['Bluesky', 'https://bsky.app/profile/black-shadow-team.bsky.social'],
      ['Facebook · Profile', 'https://www.facebook.com/profile.php?id=61591268330812'],
      ['Facebook · Page', 'https://www.facebook.com/profile.php?id=100090580510673'],
      ['Instagram', 'https://www.instagram.com/black_shadow_team_x/'],
      ['Threads', 'https://www.threads.net/@blacky_mahin_x'],
      ['Reddit', 'https://www.reddit.com/user/blackshadowteamoffic/'],
      ['Mix', 'https://mix.com/black_shadow_team'],
      ['Quora', 'https://bn.quora.com/profile/Black-Shadow-Team'],
      ['HackerNoon', 'https://hackernoon.com/u/black-shadow-team'],
      ['Hashnode', 'https://hashnode.com/@black-shadow-team'],
      ['WordPress', 'https://profiles.wordpress.org/blackshadowteam'],
      ['Blogspot', 'https://black-shadow-team.blogspot.com/'],
      ['freeCodeCamp', 'https://www.freecodecamp.org/blackshadowteam'],
      ['Kaggle', 'https://www.kaggle.com/musfiqurrahim'],
      ['DZone', 'https://dzone.com/users/5577855/blackshadowteam.html']
    ];

    const section = document.createElement('section');
    section.id = 'social-profiles';
    section.className = 'page-wrap social-profiles';
    section.setAttribute('aria-labelledby', 'social-profiles-title');

    const heading = document.createElement('div');
    heading.className = 'social-profiles-heading';
    const label = document.createElement('p');
    label.className = 'section-label';
    label.textContent = '05 / CONNECT';
    const title = document.createElement('h2');
    title.id = 'social-profiles-title';
    title.textContent = 'Find us online';
    const description = document.createElement('p');
    description.className = 'social-profiles-description';
    description.textContent = 'Follow Black Shadow Team and explore our work across the web.';
    heading.append(label, title, description);

    const grid = document.createElement('div');
    grid.className = 'social-profiles-grid';
    profiles.forEach(([name, url]) => {
      const link = document.createElement('a');
      link.className = 'social-profile-link';
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.append(document.createTextNode(name));
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '↗';
      link.append(arrow);
      grid.append(link);
    });
    section.append(heading, grid);
    contactSection.before(section);

    const styles = document.createElement('style');
    styles.textContent = `
      .social-profiles{padding-top:76px;padding-bottom:84px;border-top:1px solid rgba(255,255,255,.11)}
      .social-profiles-heading{max-width:680px;margin-bottom:28px}
      .social-profiles-heading h2{margin:14px 0;font:500 clamp(36px,5vw,58px)/1.08 Manrope,'Noto Sans Bengali',sans-serif;letter-spacing:-.055em}
      .social-profiles-description{color:#a9a7a1}
      .social-profiles-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
      .social-profile-link{display:flex;justify-content:space-between;align-items:center;gap:12px;min-height:54px;padding:12px 15px;border:1px solid rgba(255,255,255,.11);background:rgba(255,255,255,.025);font-size:13px;transition:border-color .2s,transform .2s,color .2s}
      .social-profile-link:hover{transform:translateY(-2px);border-color:rgba(216,180,93,.55);color:#f0d283}
      .social-profile-link span{color:#d8b45d}
      @media(max-width:850px){.social-profiles-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
      @media(max-width:600px){.social-profiles{padding-top:60px;padding-bottom:64px}.social-profiles-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.social-profile-link{padding:10px;font-size:12px}}
      @media(max-width:360px){.social-profiles-grid{grid-template-columns:1fr}}
    `;
    document.head.append(styles);
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

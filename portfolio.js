(() => {
  const focusSection = document.querySelector('#focus');
  const nav = document.querySelector('.main-nav');
  if (!focusSection || !nav || document.querySelector('#portfolio')) return;

  const navLink = document.createElement('a');
  navLink.href = '#portfolio';
  navLink.dataset.en = 'Projects';
  navLink.dataset.bn = 'প্রকল্প';
  navLink.textContent = document.documentElement.lang === 'bn' ? 'প্রকল্প' : 'Projects';
  navLink.addEventListener('click', () => {
    const menuButton = document.querySelector('.menu-toggle');
    nav.classList.remove('open');
    if (menuButton) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }
  });
  nav.insertBefore(navLink, nav.querySelector('.nav-contact'));

  const section = document.createElement('section');
  section.className = 'portfolio-section';
  section.id = 'portfolio';
  section.setAttribute('aria-labelledby', 'portfolio-title');
  section.innerHTML = `
    <div class="section-wrap">
      <div class="section-heading portfolio-heading">
        <div class="section-label"><span>03 /</span><span data-en="RESEARCH & PROJECTS" data-bn="গবেষণা ও প্রকল্প">RESEARCH & PROJECTS</span></div>
        <h2 id="portfolio-title" data-en="Ideas in progress.<br><em>Work in public.</em>" data-bn="ধারণা এগিয়ে চলে।<br><em>কাজ সবার জন্য।</em>">Ideas in progress.<br><em>Work in public.</em></h2>
        <p data-en="A grounded overview of the team's public research, writing, and digital work—clearly distinguishing proposals from implemented products." data-bn="দলের প্রকাশ্য গবেষণা, লেখা ও ডিজিটাল কাজের সংক্ষিপ্ত পরিচয়—প্রস্তাবনা ও বাস্তবায়িত পণ্যের পার্থক্য স্পষ্ট রেখে।">A grounded overview of the team's public research, writing, and digital work—clearly distinguishing proposals from implemented products.</p>
      </div>
      <p class="portfolio-intro" data-en="Black Shadow Team was founded by Musfiqur Rahim in 2022, with a broader public presence in 2025–2026. Our visible work is currently centered on independent research notes, long-form technical writing, conceptual AI-system designs, and our web presence. We share work as it develops and avoid presenting research proposals as finished or experimentally proven systems." data-bn="Black Shadow Team ২০২২ সালে Musfiqur Rahim প্রতিষ্ঠা করেন; ২০২৫–২০২৬ সালে দলের প্রকাশ্য উপস্থিতি বিস্তৃত হয়। বর্তমানে আমাদের প্রকাশ্য কাজের মূল ক্ষেত্র স্বাধীন গবেষণা-নোট, দীর্ঘ প্রযুক্তিগত লেখা, AI সিস্টেমের ধারণাগত নকশা এবং ওয়েব উপস্থিতি। কাজ এগোনোর সঙ্গে তা প্রকাশ করি; গবেষণা প্রস্তাবকে সম্পূর্ণ বা পরীক্ষায় প্রমাণিত সিস্টেম হিসেবে উপস্থাপন করি না।">Black Shadow Team was founded by Musfiqur Rahim in 2022, with a broader public presence in 2025–2026. Our visible work is currently centered on independent research notes, long-form technical writing, conceptual AI-system designs, and our web presence. We share work as it develops and avoid presenting research proposals as finished or experimentally proven systems.</p>
      <div class="portfolio-grid">
        <article class="portfolio-card">
          <div class="portfolio-card-top"><span class="portfolio-index">01 / RESEARCH</span><span class="portfolio-status" data-en="Research manuscript" data-bn="গবেষণা পাণ্ডুলিপি">Research manuscript</span></div>
          <h3>AI Safety Research Encyclopedia</h3>
          <p data-en="A public, long-form research manuscript covering LLM safety foundations, threat categories, prompt injection, instruction hierarchy, multilingual and multimodal evaluation, defense in depth, and responsible research. The manuscript distinguishes its own observations from cited literature." data-bn="LLM নিরাপত্তার ভিত্তি, ঝুঁকির ধরন, prompt injection, instruction hierarchy, বহুভাষিক ও multimodal মূল্যায়ন, layered defense এবং দায়িত্বশীল গবেষণা নিয়ে প্রকাশ্য দীর্ঘ পাণ্ডুলিপি। এতে নিজস্ব পর্যবেক্ষণ ও উদ্ধৃত গবেষণাকে আলাদা করে দেখানো হয়েছে।">A public, long-form research manuscript covering LLM safety foundations, threat categories, prompt injection, instruction hierarchy, multilingual and multimodal evaluation, defense in depth, and responsible research. The manuscript distinguishes its own observations from cited literature.</p>
          <div class="portfolio-tags"><span>AI safety</span><span>LLM security</span><span>Research writing</span></div>
          <a class="portfolio-card-link" href="https://github.com/blackshadowteamnet-netizen/AI-Safety-Research-Encyclopedia" target="_blank" rel="noopener noreferrer"><span data-en="Read the manuscript" data-bn="পাণ্ডুলিপি পড়ুন">Read the manuscript</span><span aria-hidden="true">↗</span></a>
        </article>
        <article class="portfolio-card">
          <div class="portfolio-card-top"><span class="portfolio-index">02 / ARCHITECTURE</span><span class="portfolio-status" data-en="Concept proposal" data-bn="ধারণাগত প্রস্তাব">Concept proposal</span></div>
          <h3>Adaptive Cognitive AI (ACAI)</h3>
          <p data-en="An engineering blueprint proposing a modular AI workflow: intent and goal analysis, task planning, semantic memory, retrieval, context optimization, specialist agents, verification, and monitoring. It is a proposal; the repository explicitly says its performance has not been independently implemented or validated." data-bn="intent ও goal বিশ্লেষণ, task planning, semantic memory, retrieval, context optimization, specialist agent, verification ও monitoring-সহ modular AI workflow-এর engineering blueprint। এটি একটি প্রস্তাবনা; repository-তে স্পষ্ট বলা আছে, এর কার্যকারিতা স্বাধীনভাবে বাস্তবায়ন বা যাচাই করা হয়নি।">An engineering blueprint proposing a modular AI workflow: intent and goal analysis, task planning, semantic memory, retrieval, context optimization, specialist agents, verification, and monitoring. It is a proposal; the repository explicitly says its performance has not been independently implemented or validated.</p>
          <div class="portfolio-tags"><span>AI architecture</span><span>Planning & memory</span><span>Research proposal</span></div>
          <a class="portfolio-card-link" href="https://github.com/blackshadowteamnet-netizen/adaptive-cognitive-ai" target="_blank" rel="noopener noreferrer"><span data-en="Explore the proposal" data-bn="প্রস্তাবনাটি দেখুন">Explore the proposal</span><span aria-hidden="true">↗</span></a>
        </article>
        <article class="portfolio-card">
          <div class="portfolio-card-top"><span class="portfolio-index">03 / DEFENSIVE AI</span><span class="portfolio-status" data-en="Research documentation" data-bn="গবেষণা নথি">Research documentation</span></div>
          <h3>AI Security Research</h3>
          <p data-en="Defensive research notes on LLM prompt injection, context and instruction boundaries, multimodal input, and layered safeguards. The public repository presents concepts and proposed mitigations; its stated test figures are not independently validated on this page." data-bn="LLM prompt injection, context ও instruction boundary, multimodal input এবং layered safeguard নিয়ে প্রতিরক্ষামূলক গবেষণা-নোট। প্রকাশ্য repository-তে ধারণা ও প্রস্তাবিত প্রতিরোধ আছে; সেখানে দেওয়া পরীক্ষার পরিসংখ্যান এই পৃষ্ঠায় স্বাধীনভাবে যাচাই করা হয়নি।">Defensive research notes on LLM prompt injection, context and instruction boundaries, multimodal input, and layered safeguards. The public repository presents concepts and proposed mitigations; its stated test figures are not independently validated on this page.</p>
          <div class="portfolio-tags"><span>Prompt-injection defense</span><span>Guardrails</span><span>AI safety</span></div>
          <a class="portfolio-card-link" href="https://github.com/blackshadowteamnet-netizen/AI-Security-Research" target="_blank" rel="noopener noreferrer"><span data-en="View research notes" data-bn="গবেষণা নোট দেখুন">View research notes</span><span aria-hidden="true">↗</span></a>
        </article>
        <article class="portfolio-card">
          <div class="portfolio-card-top"><span class="portfolio-index">04 / DEFENSIVE AI</span><span class="portfolio-status" data-en="Framework documentation" data-bn="ফ্রেমওয়ার্ক নথি">Framework documentation</span></div>
          <h3>LLM-Defense-Core</h3>
          <p data-en="A documented defensive framework concept for LLM hardening, including threat taxonomy, input/context handling, trust boundaries, and layered validation. Treat the repository as research documentation—not a production-ready security product or independently confirmed benchmark." data-bn="LLM hardening-এর জন্য threat taxonomy, input/context handling, trust boundary এবং layered validation-সহ প্রতিরক্ষামূলক framework-এর ধারণা ও নথি। এটিকে গবেষণা নথি হিসেবে দেখুন—production-ready security product বা স্বাধীনভাবে নিশ্চিত benchmark হিসেবে নয়।">A documented defensive framework concept for LLM hardening, including threat taxonomy, input/context handling, trust boundaries, and layered validation. Treat the repository as research documentation—not a production-ready security product or independently confirmed benchmark.</p>
          <div class="portfolio-tags"><span>LLM hardening</span><span>Defense in depth</span><span>Documentation</span></div>
          <a class="portfolio-card-link" href="https://github.com/blackshadowteamnet-netizen/LLM-Defense-Core" target="_blank" rel="noopener noreferrer"><span data-en="Explore the repository" data-bn="Repository দেখুন">Explore the repository</span><span aria-hidden="true">↗</span></a>
        </article>
        <article class="portfolio-card">
          <div class="portfolio-card-top"><span class="portfolio-index">05 / WEB</span><span class="portfolio-status" data-en="Static website" data-bn="স্ট্যাটিক ওয়েবসাইট">Static website</span></div>
          <h3>Black Shadow Team Website</h3>
          <p data-en="A responsive bilingual company profile built as a static site, with an English/Bangla language switch, accessibility-minded motion controls, team information, research highlights, and links to public profiles." data-bn="English/Bangla language switch, accessibility-সচেতন animation control, দল��র পরিচিতি, গবেষণার সংক্ষিপ্তসার ও public profile link-সহ responsive bilingual company profile—একটি static site হিসেবে তৈরি।">A responsive bilingual company profile built as a static site, with an English/Bangla language switch, accessibility-minded motion controls, team information, research highlights, and links to public profiles.</p>
          <div class="portfolio-tags"><span>Responsive web</span><span>English + বাংলা</span><span>Vercel-ready</span></div>
          <a class="portfolio-card-link" href="https://github.com/black-shadow-team/black-shadow-team-website" target="_blank" rel="noopener noreferrer"><span data-en="View website source" data-bn="ওয়েবসাইটের কোড দেখুন">View website source</span><span aria-hidden="true">↗</span></a>
        </article>
        <article class="portfolio-card">
          <div class="portfolio-card-top"><span class="portfolio-index">06 / WRITING</span><span class="portfolio-status" data-en="Articles & notes" data-bn="প্রবন্ধ ও নোট">Articles & notes</span></div>
          <h3>Technical publishing</h3>
          <p data-en="Public writing and research communication through DEV Community and Hashnode, with topics spanning AI safety, LLM architecture, security, and practical technology learning. Read the platforms directly for current articles and publication dates." data-bn="DEV Community ও Hashnode-এ AI safety, LLM architecture, security এবং প্রযুক্তি শেখা নিয়ে প্রকাশ্য লেখা ও গবেষণা-যোগাযোগ। সাম্প্রতিক প্রবন্ধ ও তারিখের জন্য সরাসরি প্ল্যাটফর্মগুলো দেখুন।">Public writing and research communication through DEV Community and Hashnode, with topics spanning AI safety, LLM architecture, security, and practical technology learning. Read the platforms directly for current articles and publication dates.</p>
          <div class="portfolio-tags"><span>DEV Community</span><span>Hashnode</span><span>Technical writing</span></div>
          <a class="portfolio-card-link" href="https://dev.to/black_shadow_team" target="_blank" rel="noopener noreferrer"><span data-en="Read on DEV" data-bn="DEV-এ পড়ুন">Read on DEV</span><span aria-hidden="true">↗</span></a>
          <span class="portfolio-card-link portfolio-second-link"><a href="https://hashnode.com/@black-shadow-team" target="_blank" rel="noopener noreferrer" data-en="Read on Hashnode" data-bn="Hashnode-এ পড়ুন">Read on Hashnode</a><span aria-hidden="true">↗</span></span>
        </article>
      </div>
      <p class="portfolio-disclaimer" data-en="Accuracy note: this overview summarizes public repository descriptions and documentation. Research proposals, unvalidated measurements, and design concepts are labeled as such; they should not be read as proof of deployed products, peer review, or independently reproduced results." data-bn="তথ্য-নির্ভুলতার নোট: এই পরিচিতি public repository-র description ও নথির সারাংশ। গবেষণা প্রস্তাব, যাচাই না-করা পরিমাপ এবং নকশার ধারণাকে সেভাবেই চিহ্নিত করা হয়েছে; এগুলোকে deployed product, peer review বা স্বাধীনভাবে পুনরুৎপাদিত ফলাফলের প্রমাণ হিসেবে ধরবেন না।">Accuracy note: this overview summarizes public repository descriptions and documentation. Research proposals, unvalidated measurements, and design concepts are labeled as such; they should not be read as proof of deployed products, peer review, or independently reproduced results.</p>
      <div class="portfolio-timeline" aria-label="Team timeline">
        <div class="portfolio-milestone"><strong>2022</strong><span data-en="Black Shadow Team founded" data-bn="Black Shadow Team প্রতিষ্ঠা">Black Shadow Team founded</span></div>
        <div class="portfolio-milestone"><strong>2025–2026</strong><span data-en="Public presence and publishing expanded" data-bn="প্রকাশ্য উপস্থিতি ও প্রকাশনা বিস্তৃত">Public presence and publishing expanded</span></div>
        <div class="portfolio-milestone"><strong data-en="In progress" data-bn="চলমান">In progress</strong><span data-en="Research notes, technical writing, and digital projects" data-bn="গবেষণা নোট, প্রযুক্তিগত লেখা ও ডিজিটাল প্রকল্প">Research notes, technical writing, and digital projects</span></div>
      </div>
    </div>`;
  focusSection.parentNode.insertBefore(section, focusSection);

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = new URL('./portfolio.css', document.baseURI).href;
  document.head.appendChild(stylesheet);

  if (typeof window.setBstLanguage === 'function') {
    window.setBstLanguage(document.documentElement.lang === 'bn' ? 'bn' : 'en');
  }
})();

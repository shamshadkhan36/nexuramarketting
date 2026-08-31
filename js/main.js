/**
 * main.js - Global App Controller, Navigation & White/Dark Theme Toggle
 * NEXURA Creative Agency
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLucideIcons();
  initStickyNavbar();
  initMobileMenu();
  initBackToTop();
  initLegalModals();
  initNewsletter();
  initSmoothScrollLinks();
});

/* --------------------------------------------------------------------------
   0. THEME SWITCHER (DEFAULT: WHITE / LIGHT THEME)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const savedTheme = localStorage.getItem('nexura-theme') || 'light';
  applyTheme(savedTheme);

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('nexura-theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update theme toggle button icons
  const toggleIcons = document.querySelectorAll('.theme-toggle-icon');
  toggleIcons.forEach(icon => {
    if (theme === 'dark') {
      icon.setAttribute('data-lucide', 'sun');
    } else {
      icon.setAttribute('data-lucide', 'moon');
    }
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* --------------------------------------------------------------------------
   1. LUCIDE ICONS INITIALIZATION
   -------------------------------------------------------------------------- */
function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* --------------------------------------------------------------------------
   2. STICKY NAVBAR SCROLL STATE
   -------------------------------------------------------------------------- */
function initStickyNavbar() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('shadow-lg', 'shadow-slate-900/5', 'border-b');
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-slate-900/5');
    }
  });
}

/* --------------------------------------------------------------------------
   3. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-mobile-menu');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileDrawer) return;

  function openMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileDrawer.classList.add('translate-x-full');
    document.body.style.overflow = 'auto';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* --------------------------------------------------------------------------
   4. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   5. LEGAL MODALS (Privacy Policy & Terms)
   -------------------------------------------------------------------------- */
function initLegalModals() {
  const legalModal = document.getElementById('legal-modal');
  const modalTitle = document.getElementById('legal-modal-title');
  const modalBody = document.getElementById('legal-modal-body');
  const closeBtn = document.getElementById('close-legal-modal');

  const privacyTriggers = document.querySelectorAll('[data-open-privacy]');
  const termsTriggers = document.querySelectorAll('[data-open-terms]');

  if (!legalModal || !modalTitle || !modalBody) return;

  privacyTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalTitle.textContent = 'Privacy Policy';
      modalBody.innerHTML = `
        <div class="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          <p><strong>Effective Date:</strong> January 2026</p>
          <p>At <strong>NEXURA Creative & Growth Agency</strong>, your privacy is a paramount priority. We are committed to protecting the personal and business information you share with us.</p>
          <h4 class="text-slate-900 dark:text-white font-bold text-base mt-4">1. Information We Collect</h4>
          <p>We collect information provided directly through our contact forms, project estimators, and strategy sessions, including your name, corporate email, phone number, and marketing campaign goals.</p>
          <h4 class="text-slate-900 dark:text-white font-bold text-base mt-4">2. How We Use Information</h4>
          <p>Your details are used exclusively to deliver customized digital marketing proposals, schedule consultation calls, execute approved creative campaigns, and communicate project deliverables. We never sell or lease your information to third-party data brokers.</p>
          <h4 class="text-slate-900 dark:text-white font-bold text-base mt-4">3. Data Security & Confidentiality</h4>
          <p>All client proprietary strategies, ad accounts, creative collateral, and analytical data are safeguarded with enterprise-grade encryption and stringent non-disclosure standards.</p>
        </div>
      `;
      openModal();
    });
  });

  termsTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalTitle.textContent = 'Terms & Conditions';
      modalBody.innerHTML = `
        <div class="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          <p><strong>Last Updated:</strong> January 2026</p>
          <p>Welcome to <strong>NEXURA Creative Agency</strong>. By accessing our website and engaging our services, you agree to the following operational terms:</p>
          <h4 class="text-slate-900 dark:text-white font-bold text-base mt-4">1. Scope of Creative & Marketing Deliverables</h4>
          <p>All creative deliverables, ad management timelines, and strategy milestones are tailored to client agreements documented in individual Statements of Work (SOW).</p>
          <h4 class="text-slate-900 dark:text-white font-bold text-base mt-4">2. Intellectual Property Rights</h4>
          <p>Upon final settlement of invoices, all finalized brand identities, graphic assets, and custom design collateral transfer full ownership rights to the client, while NEXURA retains the right to display non-confidential deliverables for portfolio and case study presentation.</p>
          <h4 class="text-slate-900 dark:text-white font-bold text-base mt-4">3. Performance Disclaimers</h4>
          <p>While our data-driven strategies consistently outperform industry benchmarks, external ad platform algorithms (Meta, Google, TikTok) are subject to third-party dynamics. Performance targets represent rigorous projections based on historical data.</p>
        </div>
      `;
      openModal();
    });
  });

  function openModal() {
    legalModal.classList.remove('hidden');
    legalModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    legalModal.classList.add('hidden');
    legalModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  legalModal.addEventListener('click', (e) => {
    if (e.target === legalModal) closeModal();
  });
}

/* --------------------------------------------------------------------------
   6. NEWSLETTER SUBSCRIPTION
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  const feedback = document.getElementById('newsletter-feedback');

  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      if (feedback) {
        feedback.textContent = 'Please enter a valid email address';
        feedback.className = 'text-xs text-rose-500 mt-2 block font-medium';
      }
      return;
    }

    if (feedback) {
      feedback.textContent = '✓ You are subscribed to Agency Growth Insights!';
      feedback.className = 'text-xs text-emerald-600 dark:text-emerald-400 mt-2 block font-medium';
    }
    input.value = '';
  });
}

/* --------------------------------------------------------------------------
   7. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   -------------------------------------------------------------------------- */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

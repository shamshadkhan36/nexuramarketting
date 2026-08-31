/**
 * main.js - AGENCEE Interactive Controller
 * Handles Navigation, Video Modal, Mobile Drawer & Global Actions
 */

document.addEventListener('DOMContentLoaded', () => {
  initLucideIcons();
  initStickyNavbar();
  initMobileMenu();
  initVideoModal();
  initBackToTop();
  initNewsletter();
  initSmoothScrollLinks();
  initContactForm();
});

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
      navbar.classList.add('py-3');
      navbar.classList.remove('py-5');
    } else {
      navbar.classList.add('py-5');
      navbar.classList.remove('py-3');
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
   4. VIDEO MODAL PLAYER (FOR PLAY VIDEO BADGE)
   -------------------------------------------------------------------------- */
function initVideoModal() {
  const playTriggers = document.querySelectorAll('.play-video-trigger');
  const videoModal = document.getElementById('video-modal');
  const closeVideoBtn = document.getElementById('close-video-modal');
  const iframeContainer = document.getElementById('video-iframe-container');

  if (!videoModal || !closeVideoBtn) return;

  playTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (iframeContainer) {
        // Embed high quality creative agency showreel
        iframeContainer.innerHTML = `
          <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
            <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0" title="Agency Showreel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        `;
      }
      videoModal.classList.remove('hidden');
      videoModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeVideo() {
    videoModal.classList.add('hidden');
    videoModal.classList.remove('flex');
    if (iframeContainer) iframeContainer.innerHTML = '';
    document.body.style.overflow = 'auto';
  }

  closeVideoBtn.addEventListener('click', closeVideo);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
      closeVideo();
    }
  });
}

/* --------------------------------------------------------------------------
   5. BACK TO TOP BUTTON
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
   6. CONTACT FORM VALIDATION & DIRECT ACTIONS
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('agency-contact-form');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');

    if (!nameInput.value.trim() || !emailInput.value.trim()) {
      alert('Please enter your Name and Work Email to continue.');
      return;
    }

    const origHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-black inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Submitting...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = origHtml;
      const successModal = document.getElementById('inquiry-success-modal');
      const nameSpan = document.getElementById('success-user-name');
      if (nameSpan) nameSpan.textContent = nameInput.value;
      if (successModal) {
        successModal.classList.remove('hidden');
        successModal.classList.add('flex');
      }
      form.reset();
    }, 1000);
  });

  // Direct WhatsApp Button
  const waButtons = document.querySelectorAll('.direct-whatsapp-btn');
  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = encodeURIComponent("Hi AGENCEE Team! I want to discuss a Digital Marketing and Branding project.");
      window.open(`https://wa.me/18005550199?text=${msg}`, '_blank');
    });
  });
}

/* --------------------------------------------------------------------------
   7. NEWSLETTER SUBSCRIPTION
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  const feedback = document.getElementById('newsletter-feedback');

  if (!form || !input) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!email) return;

    if (feedback) {
      feedback.textContent = '✓ Subscribed! Welcome to our exclusive agency insights.';
      feedback.className = 'text-xs text-[#ff7a00] mt-2 block font-bold';
    }
    input.value = '';
  });
}

/* --------------------------------------------------------------------------
   8. SMOOTH SCROLL ANCHORS
   -------------------------------------------------------------------------- */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update active class on nav pills
        document.querySelectorAll('.nav-pill-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
}

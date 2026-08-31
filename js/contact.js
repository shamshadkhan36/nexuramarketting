/**
 * contact.js - Form validation, direct WhatsApp link, and submission modals
 * NEXURA Creative Agency
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initWhatsAppDirect();
  initServicePills();
});

/* --------------------------------------------------------------------------
   1. SERVICE SELECTOR PILLS
   -------------------------------------------------------------------------- */
function initServicePills() {
  const pills = document.querySelectorAll('.service-pill-btn');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pill.classList.toggle('active');
      pill.classList.toggle('bg-violet-600');
      pill.classList.toggle('text-white');
      pill.classList.toggle('border-violet-500');
      pill.classList.toggle('bg-white/5');
      pill.classList.toggle('text-slate-300');
      pill.classList.toggle('border-white/10');
      
      const checkbox = pill.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. CONTACT FORM VALIDATION & SUBMISSION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('agency-contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const toast = document.getElementById('contact-toast');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('contact-phone');
    const companyInput = document.getElementById('contact-company');
    const detailsInput = document.getElementById('contact-details');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showFieldError(nameInput, 'Please enter your full name');
      isValid = false;
    } else {
      clearFieldError(nameInput);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError(emailInput, 'Please enter a valid work email address');
      isValid = false;
    } else {
      clearFieldError(emailInput);
    }

    // Validate Phone
    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 6) {
      showFieldError(phoneInput, 'Please enter a valid phone number');
      isValid = false;
    } else {
      clearFieldError(phoneInput);
    }

    if (!isValid) return;

    // Gather selected services
    const activeServices = [];
    document.querySelectorAll('.service-pill-btn.active').forEach(p => {
      activeServices.push(p.innerText.trim());
    });

    const budgetInput = form.querySelector('input[name="budget"]:checked');
    const budgetVal = budgetInput ? budgetInput.value : 'Custom';

    // Show button loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending Inquiry...
    `;

    // Simulate API submission
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showSuccessModal(nameInput.value, emailInput.value);
      form.reset();
      
      // Reset service pills
      document.querySelectorAll('.service-pill-btn').forEach(p => {
        p.classList.remove('active', 'bg-violet-600', 'text-white', 'border-violet-500');
        p.classList.add('bg-white/5', 'text-slate-300', 'border-white/10');
      });
    }, 1200);
  });
}

function showFieldError(input, message) {
  input.classList.add('border-rose-500', 'focus:border-rose-500');
  let err = input.parentElement.querySelector('.field-error-msg');
  if (!err) {
    err = document.createElement('span');
    err.className = 'field-error-msg text-xs text-rose-400 mt-1 block';
    input.parentElement.appendChild(err);
  }
  err.textContent = message;
}

function clearFieldError(input) {
  input.classList.remove('border-rose-500', 'focus:border-rose-500');
  const err = input.parentElement.querySelector('.field-error-msg');
  if (err) err.remove();
}

function showSuccessModal(name, email) {
  const modal = document.getElementById('inquiry-success-modal');
  const nameSpan = document.getElementById('success-user-name');
  if (nameSpan) nameSpan.textContent = name || 'Friend';
  
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  } else {
    alert(`Thank you ${name}! Your inquiry has been received. Our strategy team will reach out to ${email} within 2 hours.`);
  }
}

/* --------------------------------------------------------------------------
   3. WHATSAPP DIRECT ACTION
   -------------------------------------------------------------------------- */
function initWhatsAppDirect() {
  const waButtons = document.querySelectorAll('.direct-whatsapp-btn');
  const defaultPhone = '18005550199'; // Agency WhatsApp business number

  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = encodeURIComponent(
        "Hi NEXURA Team! I'm interested in scaling my brand with your Digital Marketing & Creative Graphic Design services. Let's talk!"
      );
      window.open(`https://wa.me/${defaultPhone}?text=${message}`, '_blank');
    });
  });
}

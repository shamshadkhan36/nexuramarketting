/**
 * calculator.js - Interactive Project Scope & Growth Estimator
 * NEXURA Creative Agency
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectEstimator();
});

function initProjectEstimator() {
  const serviceOptions = document.querySelectorAll('.estimator-service-chip');
  const budgetOptions = document.querySelectorAll('.estimator-budget-chip');
  const timelineEl = document.getElementById('est-timeline');
  const reachEl = document.getElementById('est-reach');
  const leadsEl = document.getElementById('est-leads');
  const roasEl = document.getElementById('est-roas');
  const teamEl = document.getElementById('est-team');
  const applyBtn = document.getElementById('est-apply-btn');

  if (!serviceOptions.length || !budgetOptions.length) return;

  let selectedServices = ['marketing', 'design'];
  let selectedBudget = 'growth';

  // Toggle Services
  serviceOptions.forEach(chip => {
    chip.addEventListener('click', () => {
      const service = chip.getAttribute('data-service');
      
      if (selectedServices.includes(service)) {
        if (selectedServices.length > 1) { // keep at least 1 selected
          selectedServices = selectedServices.filter(s => s !== service);
          chip.classList.remove('active');
        }
      } else {
        selectedServices.push(service);
        chip.classList.add('active');
      }
      updateCalculations();
    });
  });

  // Select Budget Tier
  budgetOptions.forEach(chip => {
    chip.addEventListener('click', () => {
      budgetOptions.forEach(b => b.classList.remove('active'));
      chip.classList.add('active');
      selectedBudget = chip.getAttribute('data-budget');
      updateCalculations();
    });
  });

  function updateCalculations() {
    let baseReach = 150; // in thousands
    let baseLeads = 45;
    let baseRoas = 3.2;
    let daysToLaunch = 7;
    let teamMembers = ['Senior Creative Lead', 'Growth Strategist'];

    // Multipliers by budget
    if (selectedBudget === 'starter') {
      baseReach *= 0.8;
      baseLeads *= 0.7;
      baseRoas = 2.8;
      daysToLaunch = 5;
      teamMembers = ['Creative Designer', 'Paid Ads Specialist'];
    } else if (selectedBudget === 'growth') {
      baseReach *= 1.8;
      baseLeads *= 1.9;
      baseRoas = 3.8;
      daysToLaunch = 7;
      teamMembers = ['Creative Director', 'Senior Media Buyer', 'Motion Designer'];
    } else if (selectedBudget === 'scale') {
      baseReach *= 4.5;
      baseLeads *= 4.2;
      baseRoas = 4.8;
      daysToLaunch = 10;
      teamMembers = ['Executive Creative Director', 'Full Growth Squad', '3D Motion Designer', 'Conversion Copywriter'];
    }

    // Service add-on bonuses
    if (selectedServices.includes('branding')) {
      teamMembers.push('Brand Architect');
      baseRoas += 0.3;
    }
    if (selectedServices.includes('social')) {
      baseReach *= 1.4;
    }
    if (selectedServices.includes('seo')) {
      baseLeads *= 1.2;
    }

    // Update DOM
    if (reachEl) reachEl.textContent = `${Math.round(baseReach)}K+`;
    if (leadsEl) leadsEl.textContent = `${Math.round(baseLeads)}+ / mo`;
    if (roasEl) roasEl.textContent = `${baseRoas.toFixed(1)}X`;
    if (timelineEl) timelineEl.textContent = `${daysToLaunch} Business Days`;
    if (teamEl) teamEl.textContent = teamMembers.slice(0, 3).join(', ') + (teamMembers.length > 3 ? ` +${teamMembers.length - 3} more` : '');
  }

  // Pre-fill contact form when clicking "Apply Estimate to Project"
  if (applyBtn) {
    applyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Auto-select budget in contact form
        const budgetRadio = document.querySelector(`input[name="budget"][value="${selectedBudget}"]`);
        if (budgetRadio) budgetRadio.checked = true;

        // Auto-fill project details field
        const detailsInput = document.getElementById('contact-details');
        if (detailsInput && !detailsInput.value) {
          detailsInput.value = `Estimated Project Tier: ${selectedBudget.toUpperCase()}. Focus areas: ${selectedServices.join(', ')}. Looking to achieve target ROAS and lead scaling.`;
        }
      }
    });
  }

  // Initial calculation run
  updateCalculations();
}

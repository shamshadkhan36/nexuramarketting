/**
 * portfolio.js - Interactive Portfolio Filtering & Detailed Case Study Modal
 * NEXURA Creative Agency (Light/White & Dark Theme Support)
 */

const portfolioData = [
  {
    id: 'velox',
    title: 'Velox Kinetic',
    category: 'branding',
    categoryLabel: 'Brand Identity & Performance Launch',
    tag: 'Branding',
    shortDesc: 'Complete visual identity, 3D product motion, and omnichannel digital launch for a high-performance EV & tech brand.',
    imageBg: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #06b6d4 100%)',
    metrics: [
      { label: 'Revenue Growth', value: '+340%' },
      { label: 'ROAS', value: '4.8X' },
      { label: 'Global Reach', value: '1.4M+' }
    ],
    challenge: 'Velox needed to stand out against established tech giants with a fresh, future-forward visual language and an aggressive D2C acquisition funnel.',
    solution: 'Designed a bold typographic system, metallic 3D asset library, dynamic web experience, and multi-tier Meta & Google Ads acquisition funnel.',
    deliverables: ['Full Brand Identity System', '3D Motion Creatives', 'High-Converting Landing Pages', 'Meta & Google Ads Campaign Architecture'],
    testimonial: '"NEXURA transformed Velox from a stealth startup into an industry-recognized category leader in less than 90 days."'
  },
  {
    id: 'aura',
    title: 'Aura Botanicals',
    category: 'graphic-design',
    categoryLabel: 'Packaging & Social Media Creatives',
    tag: 'Graphic Design',
    shortDesc: 'Luxury organic skincare packaging system, retail display collateral, and high-converting Instagram ad creative suite.',
    imageBg: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
    metrics: [
      { label: 'Conversion Rate', value: '+190%' },
      { label: 'Cost Per Acquisition', value: '-38%' },
      { label: 'Follower Growth', value: '+85K' }
    ],
    challenge: 'Aura suffered from low click-through rates on social ads and needed packaging that conveyed organic luxury on retail shelves.',
    solution: 'Engineered sustainable foil-stamped packaging mockups and crafted 40+ high-converting short-form video and static ad creatives.',
    deliverables: ['Luxury Box & Bottle Packaging', 'Social Media Ad Design Pack (50+ Assets)', 'Influencer PR Unboxing Kit', 'Product Launch Campaign'],
    testimonial: '"Our customer acquisition cost plummeted by 38% after launching the new creative system designed by NEXURA."'
  },
  {
    id: 'novacrest',
    title: 'NovaCrest Capital',
    category: 'digital-campaigns',
    categoryLabel: 'Lead Generation & Growth Marketing',
    tag: 'Digital Campaigns',
    shortDesc: 'High-ticket B2B lead generation campaign, LinkedIn thought-leadership branding, and funnel optimization for wealth management.',
    imageBg: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #8b5cf6 100%)',
    metrics: [
      { label: 'Qualified Pipeline', value: '$4.2M' },
      { label: 'Lead Volume', value: '+72%' },
      { label: 'Cost Per Lead', value: '-44%' }
    ],
    challenge: 'Wealth management is a low-trust, competitive niche requiring authoritative positioning and precision targeting for ultra-high-net-worth prospects.',
    solution: 'Built high-converting editorial whitepaper funnels, LinkedIn Ads account-based marketing, and video masterclasses with founder authority positioning.',
    deliverables: ['B2B Account-Based Marketing Funnel', 'LinkedIn Thought Leadership Creatives', 'Automated Email Nurture Sequences', 'Lead Scoring Architecture'],
    testimonial: '"The pipeline generated in Q1 alone covered our agency investment 10x over. Truly world-class strategy."'
  },
  {
    id: 'hyperpulse',
    title: 'HyperPulse Energy',
    category: 'social-media',
    categoryLabel: 'Social Media Management & Viral Content',
    tag: 'Social Media',
    shortDesc: 'Viral TikTok & Instagram Reels strategy, creator partnerships, and energetic 3D social visuals for Gen-Z energy beverage.',
    imageBg: 'linear-gradient(135deg, #831843 0%, #db2777 50%, #f43f5e 100%)',
    metrics: [
      { label: 'Total Video Views', value: '4.8M+' },
      { label: 'Engagement Rate', value: '+140%' },
      { label: 'Retail Sell-Out', value: '14 Days' }
    ],
    challenge: 'Entering a crowded beverage market required instant viral cultural relevance and hyper-engaging visual storytelling.',
    solution: 'Produced 60+ weekly short-form video concepts, dynamic 3D can animations, and community challenge campaigns.',
    deliverables: ['Short-Form Video Production (Reels/TikTok)', 'Monthly Content Editorial Calendar', 'Community Engagement & Influencer Seeding', 'Viral Spark Ads'],
    testimonial: '"NEXURA understands modern internet culture better than any agency we have ever worked with."'
  },
  {
    id: 'kroma',
    title: 'Kroma Studio',
    category: 'branding',
    categoryLabel: 'Brand Identity & Guidelines',
    tag: 'Branding',
    shortDesc: 'Architectural studio branding, luxury print editorial, bespoke typography, and minimalist portfolio presentation.',
    imageBg: 'linear-gradient(135deg, #09090b 0%, #1e293b 60%, #38bdf8 100%)',
    metrics: [
      { label: 'Client Inquiries', value: '+210%' },
      { label: 'Avg Project Size', value: '+65%' },
      { label: 'Press Features', value: '12' }
    ],
    challenge: 'Kroma needed an editorial-grade identity to attract international commercial architecture bids and high-net-worth residential projects.',
    solution: 'Crafted a bespoke monochrome visual identity with foil emboss print guidelines, Swiss-style typography grid, and an interactive digital showcase.',
    deliverables: ['Custom Wordmark & Monogram', '200-Page Hardcover Brand Book', 'Luxury Print Stationary & Business Cards', 'Interactive Portfolio Website Design'],
    testimonial: '"The new brand identity positioned us in an entirely new league of enterprise architectural clients."'
  },
  {
    id: 'zenith',
    title: 'Zenith Health',
    category: 'advertising',
    categoryLabel: 'Meta & Google Ads Performance Scaling',
    tag: 'Advertising',
    shortDesc: 'Omnichannel paid acquisition architecture, dynamic search ads, and video creative testing pipeline for telehealth platform.',
    imageBg: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #06b6d4 100%)',
    metrics: [
      { label: 'ROAS', value: '4.2X' },
      { label: 'Monthly Signups', value: '3,200+' },
      { label: 'CPA Reduction', value: '-32%' }
    ],
    challenge: 'High cost per acquisition on Google search and restrictive healthcare ad policies were hindering subscriber growth.',
    solution: 'Re-engineered compliant UGC video ad hooks, developed dynamic search landing pages, and implemented conversion API server-side tracking.',
    deliverables: ['Compliant UGC Ad Video Scripts & Edits', 'Google Search & Performance Max Campaigns', 'Meta Conversion API Tracking', 'Weekly CRO Iteration Sprints'],
    testimonial: '"Our monthly recurring revenue tripled within 5 months of handing ad operations to the NEXURA performance team."'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFiltering();
  initPortfolioModal();
});

/* --------------------------------------------------------------------------
   1. PORTFOLIO FILTERING
   -------------------------------------------------------------------------- */
function initPortfolioFiltering() {
  const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
  const cards = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => {
        b.classList.remove('active', 'bg-violet-600', 'text-white', 'border-violet-600');
        b.classList.add('bg-white', 'dark:bg-white/5', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-white/10');
      });

      btn.classList.remove('bg-white', 'dark:bg-white/5', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-white/10');
      btn.classList.add('active', 'bg-violet-600', 'text-white', 'border-violet-600');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   2. PORTFOLIO CASE STUDY MODAL
   -------------------------------------------------------------------------- */
function initPortfolioModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-project-modal');
  const modalContentContainer = document.getElementById('project-modal-body');
  const projectTriggers = document.querySelectorAll('[data-project-id]');

  if (!modal || !closeBtn || !modalContentContainer) return;

  projectTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-project-id');
      const project = portfolioData.find(p => p.id === projectId);

      if (project) {
        renderModalContent(project);
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

function renderModalContent(p) {
  const modalBody = document.getElementById('project-modal-body');
  if (!modalBody) return;

  const metricsHtml = p.metrics.map(m => `
    <div class="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-center">
      <div class="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 font-heading">
        ${m.value}
      </div>
      <div class="text-xs text-slate-600 dark:text-slate-400 mt-1 uppercase tracking-wider font-bold">${m.label}</div>
    </div>
  `).join('');

  const deliverablesHtml = p.deliverables.map(d => `
    <li class="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
      ${d}
    </li>
  `).join('');

  modalBody.innerHTML = `
    <!-- Modal Hero Visual -->
    <div class="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden flex flex-col justify-end p-6 sm:p-8" style="background: ${p.imageBg};">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div class="relative z-10">
        <span class="inline-block px-3 py-1 text-xs font-bold text-violet-200 bg-violet-900/70 border border-violet-400/40 rounded-full mb-2">
          ${p.tag}
        </span>
        <h3 class="text-2xl sm:text-4xl font-black text-white font-heading">${p.title}</h3>
        <p class="text-sm sm:text-base text-slate-200 mt-1">${p.categoryLabel}</p>
      </div>
    </div>

    <!-- Metrics Grid -->
    <div class="grid grid-cols-3 gap-3 sm:gap-4 my-6">
      ${metricsHtml}
    </div>

    <!-- Story Breakdown -->
    <div class="grid md:grid-cols-2 gap-6 my-6 text-sm sm:text-base">
      <div class="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-5">
        <h4 class="text-violet-700 dark:text-violet-400 font-bold mb-2 flex items-center gap-2">
          <i data-lucide="crosshair" class="w-4 h-4"></i> The Challenge
        </h4>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${p.challenge}</p>
      </div>
      <div class="bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-5">
        <h4 class="text-cyan-700 dark:text-cyan-400 font-bold mb-2 flex items-center gap-2">
          <i data-lucide="zap" class="w-4 h-4"></i> Strategy & Solution
        </h4>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${p.solution}</p>
      </div>
    </div>

    <!-- Deliverables & Testimonial -->
    <div class="bg-gradient-to-r from-violet-50 via-slate-50 to-cyan-50 dark:from-violet-950/40 dark:to-slate-900/60 border border-slate-200 dark:border-white/10 rounded-2xl p-6 mb-6">
      <h4 class="text-slate-900 dark:text-white font-bold mb-3 flex items-center gap-2">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i> Core Deliverables
      </h4>
      <ul class="grid sm:grid-cols-2 gap-2.5">
        ${deliverablesHtml}
      </ul>

      <div class="mt-6 pt-5 border-t border-slate-200 dark:border-white/10">
        <p class="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mb-1">Client Feedback</p>
        <p class="italic text-slate-800 dark:text-slate-200 text-sm sm:text-base">${p.testimonial}</p>
      </div>
    </div>

    <!-- CTA inside modal -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
      <span class="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left font-medium">
        Want results like this for your business?
      </span>
      <a href="#contact" onclick="document.getElementById('close-project-modal').click();" class="btn-primary w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-center">
        Launch Similar Campaign →
      </a>
    </div>
  `;

  if (window.lucide) {
    lucide.createIcons();
  }
}

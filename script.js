// 1. FLOATING GOLD DUST PARTICLES + FAIL-SAFE OPENING CURTAIN AUTO-DISMISS
    function createParticles() {
      const container = document.getElementById('particles');
      if (!container) return;
      container.innerHTML = '';
      for (let i = 0; i < 28; i++) {
        const p = document.createElement('span');
        p.className = 'particle';
        const size = (Math.random() * 2.8 + 1.2).toFixed(1) + 'px';
        p.style.width = size;
        p.style.height = size;
        p.style.left = (Math.random() * 100) + '%';
        p.style.top = (Math.random() * 100) + '%';
        p.style.setProperty('--dur', (Math.random() * 5 + 4).toFixed(1) + 's');
        p.style.setProperty('--delay', (Math.random() * 3).toFixed(1) + 's');
        p.style.setProperty('--max-op', (Math.random() * 0.45 + 0.15).toFixed(2));
        p.style.setProperty('--drift', ((Math.random() - 0.5) * 50).toFixed(0) + 'px');
        container.appendChild(p);
      }
    }

    createParticles();

    const introOverlay = document.getElementById('introOverlay');
    setTimeout(() => {
      introOverlay.classList.add('intro-dismissed');
    }, 5650);

    // 2. ALL 12 CATEGORIES AS EXPANDABLE LUXURY HEADINGS WITH EXACT INDIAN CULTURAL IMAGERY
    const FALLBACK_INDIAN_IMAGE = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85';

    const allCategories = [
      {
        num: '01',
        name: 'Birthday Shoots',
        tag: 'Traditional Indian Family Milestones',
        img: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1000&q=85',
        desc: 'Joyful Indian birthday celebrations captured amidst glowing candles, bespoke birthday cakes, festive lights, and candid family laughter.',
        deliverables: 'Candid & Traditional Coverage • Edited High-Res Gallery • Highlight Reel',
        setup: '3–5 Hours • Home / Banquet Hall'
      },
      {
        num: '02',
        name: 'Pre-Birthday Shoots',
        tag: 'Ethnic Child Portraits',
        img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85',
        desc: 'Heartwarming milestone portraits of little ones dressed in traditional ethnic attire, pattu pavadai, and festive props ahead of their big day.',
        deliverables: '25+ Retouched Portraits • Traditional & Custom Props • Print-Ready Archive',
        setup: '2–3 Hours • Studio or Heritage Courtyard'
      },
      {
        num: '03',
        name: 'Baby Shower',
        tag: 'Seemantham & Godh Bharai',
        img: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1000&q=85',
        desc: 'Graceful Seemantham and Godh Bharai storytelling honoring motherhood with silk sarees, glass bangles, jasmine garlands, and sacred blessings.',
        deliverables: 'Traditional & Candid Photos • Cinematic Blessing Film • Fine-Art Prints',
        setup: '4 Hours • Home or Traditional Mandapam'
      },
      {
        num: '04',
        name: 'Half Saree Shoot',
        tag: 'Langa Voni & Temple Heritage',
        img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
        desc: 'Regal South Indian Langa Voni / Half Saree ceremony portraits styled with pure silk weaves, antique temple gold jewelry, and fresh jasmine.',
        deliverables: 'Editorial Heritage Portraits • Slow-Motion Reels • Heirloom Album Option',
        setup: 'Half-Day • Temple / Heritage Courtyard'
      },
      {
        num: '05',
        name: 'Wedding Shoots',
        tag: 'Sacred Muhurtham & Pheras',
        img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
        desc: 'Grand multi-camera traditional and candid coverage preserving Kanyadaan, Jeelakarra Bellam, Mangalsutra, Saptapadi pheras, and floral varmala rituals.',
        deliverables: 'Traditional & Candid Photo/Video • Designer Albums • Raw + Edited Pendrive',
        setup: 'Full-Day / Multi-Day • Royal Production Crew'
      },
      {
        num: '06',
        name: 'Engagement Shoot',
        tag: 'Nishchayathartham & Ring Ceremony',
        img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=85',
        desc: 'Intimate couple portraits featuring detailed mehndi hands, ring-exchange close-ups, and joyous family union rituals.',
        deliverables: 'Candid & Traditional Coverage • Couple Portrait Session • Teaser Film',
        setup: '4–6 Hours • Convention Hall & Portrait Session'
      },
      {
        num: '07',
        name: 'Haldi Photo & Video Shoot',
        tag: 'Turmeric & Marigold Festivities',
        img: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&w=1000&q=85',
        desc: 'Vibrant yellow turmeric rituals, marigold flower showers, dhol beats, and candid splashes of joy captured in high-speed slow motion.',
        deliverables: 'Candid Photography • Slow-Motion Cinema Reel • Full Edited Gallery',
        setup: '3–4 Hours • Open Courtyard / Poolside'
      },
      {
        num: '08',
        name: 'Pre-Wedding Photo & Video Shoot',
        tag: 'Royal Palace & Heritage Romance',
        img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1000&q=85',
        desc: 'Cinematic couple storytelling amidst majestic Indian palace arches, lakefronts, and golden-hour landscapes in flowing ethnic couture.',
        deliverables: '4K Pre-Wedding Film • 40+ Editorial Portraits • Dedicated Pendrive',
        setup: 'Full-Day • Heritage Palace / Scenic Location'
      },
      {
        num: '09',
        name: 'Reception Shoot',
        tag: 'Grand Evening Gala',
        img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
        desc: 'Regal evening stage portraits, dramatic spotlight couple entry cinema, and glamorous banquet celebrations with family and guests.',
        deliverables: 'Stage Portraits • Candid Banquet Coverage • Cinematic Entry Film',
        setup: '4–5 Hours • Evening Gala Lighting Setup'
      },
      {
        num: '10',
        name: 'Song Shoot',
        tag: '4K Indian Romantic Music Film',
        img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85',
        desc: 'Choreographed Indian romantic music videos directed with fluid gimbal movement, rich silk ensembles, and cinema-grade color grading.',
        deliverables: '4K Master Music Video • Teaser Cuts • Dedicated Pendrive Copy',
        setup: 'Full-Day • Multi-Location Cinema Rig'
      },
      {
        num: '11',
        name: 'Model Shoot',
        tag: 'Bridal & Ethnic Couture Editorial',
        img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
        desc: 'High-fashion Indian bridal lookbooks, designer lehenga showcases, and dramatic portrait series styled with heirloom Kundan and temple gold jewelry.',
        deliverables: 'Magazine-Grade Retouched Portraits • Lookbook Gallery • Commercial Rights',
        setup: '3–4 Hours • Studio Strobe / Heritage Architecture'
      },
      {
        num: '12',
        name: 'Brand Promotion',
        tag: 'Jewelry, Handloom & Luxury Brands',
        img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
        desc: 'Bespoke commercial campaigns for Indian gold & diamond jewelers, Kanjeevaram silk houses, and luxury ethnic lifestyle labels.',
        deliverables: 'Commercial Hero Film • Vertical Reels • High-Res Product Stills',
        setup: 'Custom Production • Studio or Flagship Showroom'
      }
    ];

    const categoriesAccordion = document.getElementById('categoriesAccordion');
    categoriesAccordion.innerHTML = allCategories.map((cat, idx) => `
      <div class="category-item rounded-2xl bg-obsidian gold-hairline overflow-hidden" id="cat-item-${idx}">
        <!-- Visible Heading Row Only -->
        <button type="button"
                onclick="toggleCategory(this)"
                aria-expanded="false"
                aria-controls="cat-panel-${idx}"
                class="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left hover:bg-gold/[0.04] transition-colors">
          <div class="flex items-center gap-4 sm:gap-6">
            <span class="font-cinzel text-sm sm:text-base font-bold text-gold tracking-widest">${cat.num}</span>
            <h3 class="font-cinzel text-lg sm:text-2xl font-semibold text-white tracking-wide">
              ${cat.name}
            </h3>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <span class="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light/70">
              ${cat.tag}
            </span>
            <span class="w-9 h-9 rounded-full bg-charcoal border border-gold/35 text-gold-light flex items-center justify-center text-lg font-light category-chevron">
              +
            </span>
          </div>
        </button>

        <!-- Expandable Details + Indian Cultural Preview Image Panel (Hidden Until Heading Clicked) -->
        <div id="cat-panel-${idx}" class="category-panel">
          <div class="category-panel-inner">
            <div class="px-6 sm:px-8 pb-7 pt-5 border-t border-gold/15 bg-gradient-to-b from-gold/[0.03] to-transparent">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                <!-- Framed Category Preview Image -->
                <div class="md:col-span-5">
                  <div onclick="event.stopPropagation(); openRegistrationModal({ category: '${cat.name}', package: 'Signature Package' })"
                       class="cursor-pointer group/img relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#231b0e] via-charcoal to-obsidian border border-gold/35 hover:border-gold aspect-[4/3] shadow-xl">
                    <img src="${cat.img}"
                         alt="${cat.name} — ${cat.tag}"
                         loading="lazy"
                         onerror="this.onerror=null;this.src='${FALLBACK_INDIAN_IMAGE}';"
                         class="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent"></div>
                    <div class="absolute top-3 right-3">
                      <button type="button"
                              onclick="event.stopPropagation(); openLightbox('${cat.img}', '${cat.num} • ${cat.name} — ${cat.tag}')"
                              class="px-3 py-1.5 rounded-full bg-obsidian/85 border border-gold/45 text-[10px] font-semibold uppercase tracking-wider text-gold-light hover:bg-gold hover:text-obsidian transition-colors">
                        Expand Photo ⤢
                      </button>
                    </div>
                    <div class="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2">
                      <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light truncate">${cat.tag}</span>
                      <span class="shrink-0 px-3 py-1 rounded-full bg-gold text-obsidian text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                        Book Shoot →
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Editorial Details & Registration CTA -->
                <div class="md:col-span-7 flex flex-col justify-between">
                  <p class="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-5">
                    ${cat.desc}
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div class="p-3.5 rounded-xl bg-charcoal/90 border border-gold/20">
                      <span class="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-1">Key Deliverables</span>
                      <span class="text-xs text-gray-200">${cat.deliverables}</span>
                    </div>
                    <div class="p-3.5 rounded-xl bg-charcoal/90 border border-gold/20">
                      <span class="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-1">Production Setup</span>
                      <span class="text-xs text-gray-200">${cat.setup}</span>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-center justify-between gap-4">
                    <span class="text-[11px] tracking-[0.2em] uppercase text-gold-light/80">Aura Captures • Bespoke Concierge</span>
                    <button type="button"
                            onclick="event.stopPropagation(); openRegistrationModal({ category: '${cat.name}', package: 'Signature Package' })"
                            class="px-7 py-3.5 rounded-full btn-gold-luxury text-xs font-extrabold tracking-[0.2em] uppercase">
                      Select & Book This Shoot →
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    function toggleCategory(buttonEl) {
      const targetItem = buttonEl.closest('.category-item');
      if (!targetItem) return;
      const isCurrentlyOpen = targetItem.classList.contains('is-open');

      // Collapse all other category items for a clean editorial accordion experience
      document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('is-open');
        const btn = item.querySelector('button[aria-expanded]');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isCurrentlyOpen) {
        targetItem.classList.add('is-open');
        buttonEl.setAttribute('aria-expanded', 'true');
      }
    }

    // Category Image Lightbox Functions
    const imageLightboxModal = document.getElementById('imageLightboxModal');
    function openLightbox(imgSrc, caption) {
      const parts = caption.split(' — ');
      const titlePart = parts[0] || caption;
      const tagPart = parts[1] || 'Aura Captures • Category Lookbook';
      const cleanCategoryName = titlePart.replace(/^\d+\s*•\s*/, '').trim();

      document.getElementById('lightboxTag').textContent = tagPart;
      document.getElementById('lightboxTitle').textContent = titlePart;
      const imgEl = document.getElementById('lightboxImg');
      imgEl.style.opacity = '1';
      imgEl.src = imgSrc;
      imgEl.alt = caption;

      document.getElementById('lightboxBookBtn').onclick = () => {
        closeImageLightbox();
        openRegistrationModal({ category: cleanCategoryName, package: 'Signature Package' });
      };

      imageLightboxModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeImageLightbox() {
      imageLightboxModal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    imageLightboxModal.addEventListener('click', (e) => {
      if (e.target === imageLightboxModal) closeImageLightbox();
    });

    // 3. CURATED PORTFOLIO GALLERY WITH AUTHENTIC INDIAN CULTURAL PHOTOGRAPHY
    const portfolioItems = [
      {
        title: 'Sacred Muhurtham & Pheras',
        filter: 'weddings',
        category: 'Wedding Shoots',
        tag: 'Weddings & Haldi',
        img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85'
      },
      {
        title: 'Marigold & Turmeric Haldi',
        filter: 'weddings',
        category: 'Haldi Photo & Video Shoot',
        tag: 'Weddings & Haldi',
        img: 'https://images.unsplash.com/photo-1623091410901-00e2d268901f?auto=format&fit=crop&w=1000&q=85'
      },
      {
        title: 'Royal Heritage Palace Pre-Wedding',
        filter: 'prewedding',
        category: 'Pre-Wedding Photo & Video Shoot',
        tag: 'Pre-Wedding & Songs',
        img: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=1000&q=85'
      },
      {
        title: 'South Indian Half Saree (Langa Voni)',
        filter: 'milestones',
        category: 'Half Saree Shoot',
        tag: 'Half Saree & Milestones',
        img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85'
      },
      {
        title: 'Cinematic Indian Love Song Film',
        filter: 'prewedding',
        category: 'Song Shoot',
        tag: 'Pre-Wedding & Songs',
        img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85'
      },
      {
        title: 'Temple Gold & Bridal Couture Editorial',
        filter: 'commercial',
        category: 'Model Shoot',
        tag: 'Model & Brand',
        img: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?auto=format&fit=crop&w=1000&q=85'
      }
    ];

    const portfolioGrid = document.getElementById('portfolioGrid');

    function renderPortfolio(filter = 'all') {
      const filtered = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.filter === filter);
      portfolioGrid.innerHTML = filtered.map(item => `
        <div onclick="openRegistrationModal({ category: '${item.category}', package: 'Signature Package' })"
             class="cursor-pointer group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1f190e] via-charcoal to-obsidian gold-hairline aspect-[4/5]">
          <img src="${item.img}" alt="${item.title}" loading="lazy"
               onerror="this.onerror=null;this.src='${FALLBACK_INDIAN_IMAGE}';"
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
            <span class="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold mb-1.5">${item.tag}</span>
            <h3 class="font-cinzel text-xl font-semibold text-white mb-4">${item.title}</h3>
            <span class="inline-flex items-center justify-center w-full py-3 px-4 rounded-full bg-obsidian/85 border border-gold/50 text-gold-light text-xs font-bold uppercase tracking-[0.18em] group-hover:bg-gold group-hover:text-obsidian transition-all">
              Book This Style →
            </span>
          </div>
        </div>
      `).join('');
    }

    renderPortfolio('all');

    document.querySelectorAll('.filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(b => {
          b.classList.remove('bg-gold', 'text-obsidian', 'font-bold');
          b.classList.add('bg-charcoal', 'text-gray-300', 'font-medium');
        });
        btn.classList.remove('bg-charcoal', 'text-gray-300', 'font-medium');
        btn.classList.add('bg-gold', 'text-obsidian', 'font-bold');
        renderPortfolio(btn.dataset.filter);
      });
    });

    // 4. PACKAGE DELIVERABLES DICTIONARY & MODAL CONTROLS
    const packageDeliverablesMap = {
      'Modern Package': '1. Traditional Photography • 2. Traditional Videography • 3. 1 Premium Designer Album • 4. 1 Photo Frame (12×18) • 5. 1 Pendrive containing all raw footage + edited photos & videos.',
      'Premium Package': '1. Traditional Photography • 2. Traditional Videography • 3. Candid Photography • 4. Outdoor Pre-Wedding Shoot • 5. 2 Premium Designer Albums • 6. 1 Photo Frame (16×24) • 7. 1 Pendrive containing all raw footage + edited photos & videos.',
      'Signature Package': '1. Traditional Photo & Video • 2. Candid Photo & Cinematography • 3. Cinematic Song Shoot & Pre-Wedding Shoot • 4. 2 Premium Designer Albums • 5. 2 Photo Frames (12×18 & 16×24) • 6. 2 Pendrives (Pre-Wedding/Song + All Raw & Edited Footage).',
      'Total Wedding Package': 'Bespoke multi-day wedding production covering Engagement, Haldi, Sangeet, Muhurtham & Reception with full photo, cinema, albums, frames & dual pendrives.',
      'Custom / Single Event': 'Tailored photography & cinematography crew, edited gallery, and high-resolution digital archive customized to your exact schedule.'
    };

    const registrationModal = document.getElementById('registrationModal');
    const eventCategorySelect = document.getElementById('eventCategory');
    const packageTierSelect = document.getElementById('packageTier');
    const modalFormContainer = document.getElementById('modalFormContainer');
    const modalPassContainer = document.getElementById('modalPassContainer');

    function updateModalCategoryBadge() {
      const selectedCatName = eventCategorySelect.value;
      const matchedCat = allCategories.find(c => c.name.toLowerCase() === selectedCatName.toLowerCase());

      const thumbEl = document.getElementById('modalCategoryThumb');
      const tagEl = document.getElementById('modalCategoryTagBadge');
      const nameEl = document.getElementById('modalCategoryNameBadge');
      const setupEl = document.getElementById('modalCategorySetupBadge');

      if (matchedCat) {
        thumbEl.src = matchedCat.img;
        thumbEl.alt = matchedCat.name;
        tagEl.textContent = `${matchedCat.num} • ${matchedCat.tag}`;
        nameEl.textContent = matchedCat.name;
        setupEl.textContent = `${matchedCat.setup} • ${matchedCat.deliverables}`;
      } else {
        thumbEl.src = FALLBACK_INDIAN_IMAGE;
        thumbEl.alt = selectedCatName;
        tagEl.textContent = 'Bespoke Multi-Day Celebration';
        nameEl.textContent = selectedCatName;
        setupEl.textContent = 'Full-Scale Multi-Event Wedding Production Crew';
      }
    }

    function updateDeliverablesBox() {
      const selectedPkg = packageTierSelect.value;
      document.getElementById('deliverablesTitle').textContent = `${selectedPkg} Deliverables`;
      document.getElementById('deliverablesSummary').textContent = packageDeliverablesMap[selectedPkg] || packageDeliverablesMap['Signature Package'];
    }

    function openRegistrationModal({ category = 'Wedding Shoots', package: pkg = 'Signature Package' } = {}) {
      resetModalToForm();
      if (category) eventCategorySelect.value = category;
      if (pkg) packageTierSelect.value = pkg;
      updateModalCategoryBadge();
      updateDeliverablesBox();
      registrationModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeRegistrationModal() {
      registrationModal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    function resetModalToForm() {
      modalPassContainer.classList.add('hidden');
      modalFormContainer.classList.remove('hidden');
    }

    // Close modal on backdrop click or Escape key
    registrationModal.addEventListener('click', (e) => {
      if (e.target === registrationModal) closeRegistrationModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!registrationModal.classList.contains('hidden')) closeRegistrationModal();
        if (!imageLightboxModal.classList.contains('hidden')) closeImageLightbox();
      }
    });

    // 5. VIP PASS GENERATION, WHATSAPP LINK & COPY RECEIPT
    let lastReceiptText = '';

    document.getElementById('vipRegistrationForm').addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const phone = document.getElementById('clientPhone').value.trim();
      const category = eventCategorySelect.value;
      const pkg = packageTierSelect.value;
      const date = document.getElementById('eventDate').value || 'Flexible / To Be Finalized';
      const venue = document.getElementById('eventVenue').value.trim() || 'To Be Confirmed';
      const notes = document.getElementById('visionNotes').value.trim() || 'Standard luxury studio consultation';

      const randomNum = Math.floor(100 + Math.random() * 900);
      const passId = `#AC-2026-${randomNum}`;
      document.getElementById('vipPassCode').textContent = passId;

      const fields = [
        { label: 'Client Name', value: name },
        { label: 'Contact / WhatsApp', value: phone },
        { label: 'Shoot Category', value: category },
        { label: 'Selected Package', value: pkg },
        { label: 'Preferred Date', value: date },
        { label: 'Venue / City', value: venue }
      ];

      document.getElementById('vipPassGrid').innerHTML = fields.map(f => `
        <div class="p-3 rounded-xl bg-obsidian/80 border border-gold/20">
          <span class="block text-[10px] uppercase tracking-[0.18em] text-gold-light/75">${f.label}</span>
          <span class="block text-white font-semibold mt-0.5">${f.value}</span>
        </div>
      `).join('');

      lastReceiptText = [
        `AURA CAPTURES — VIP SHOOT PASS (${passId})`,
        `Client: ${name}`,
        `Phone: ${phone}`,
        `Category: ${category}`,
        `Package: ${pkg}`,
        `Date: ${date}`,
        `Venue/City: ${venue}`,
        `Notes: ${notes}`,
        `Tagline: FREEZE • FRAME • FOREVER`
      ].join('\n');

      const waMessage = encodeURIComponent(`Hello Aura Captures! I would like to register a shoot:\n\n${lastReceiptText}`);
      document.getElementById('whatsappShareLink').href = `https://wa.me/?text=${waMessage}`;

      modalFormContainer.classList.add('hidden');
      modalPassContainer.classList.remove('hidden');
    });

    function copyPassDetails() {
      const tempArea = document.createElement('textarea');
      tempArea.value = lastReceiptText;
      document.body.appendChild(tempArea);
      tempArea.select();
      document.execCommand('copy');
      document.body.removeChild(tempArea);

      const btn = document.getElementById('copyPassBtn');
      const original = btn.textContent;
      btn.textContent = '✓ Copied to Clipboard';
      setTimeout(() => { btn.textContent = original; }, 2200);
    }

    // Mobile Menu & Footer Year
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => document.getElementById('mobileMenu').classList.add('hidden'));
    });
    document.getElementById('footerYear').textContent = new Date().getFullYear();

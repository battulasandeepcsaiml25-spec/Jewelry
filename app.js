// Sahira Jewelry Design - Interactive Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    cart: JSON.parse(localStorage.getItem('sahira_cart')) || [],
    currentSlide: 0,
    currentAnnouncement: 0,
    currentFilter: 'all',
    freeShippingThreshold: 125.00
  };

  // DOM Elements Cache
  const elements = {
    announcementItems: document.querySelectorAll('.announcement-item'),
    announcementPrev: document.querySelector('.announcement-prev'),
    announcementNext: document.querySelector('.announcement-next'),
    
    header: document.querySelector('.site-header'),
    cartBtn: document.getElementById('cart-toggle-btn'),
    cartBadge: document.getElementById('cart-count-badge'),
    cartOverlay: document.getElementById('cart-drawer-overlay'),
    cartCloseBtn: document.getElementById('cart-close-btn'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    shippingProgressFill: document.getElementById('goal-progress-fill'),
    shippingGoalText: document.getElementById('shipping-goal-text'),
    
    heroSlides: document.querySelectorAll('.hero-slide'),
    heroDots: document.querySelectorAll('.hero-dot'),
    
    filterTabs: document.querySelectorAll('.tab-btn'),
    productsContainer: document.getElementById('products-grid'),
    spotlightContainer: document.getElementById('spotlight-grid'),
    reviewsContainer: document.getElementById('reviews-grid'),
    
    quickViewOverlay: document.getElementById('quickview-modal-overlay'),
    quickViewCloseBtn: document.getElementById('quickview-close-btn'),
    
    searchBtn: document.getElementById('search-toggle-btn'),
    searchOverlay: document.getElementById('search-overlay'),
    searchCloseBtn: document.getElementById('search-close-btn'),
    searchInput: document.getElementById('search-input'),
    searchResults: document.getElementById('search-results'),
    
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    mobileNavDrawer: document.getElementById('mobile-nav-drawer'),
    mobileNavClose: document.getElementById('mobile-nav-close'),
    
    toast: document.getElementById('toast-notice'),
    toastText: document.getElementById('toast-text'),
    
    newsletterForm: document.getElementById('newsletter-form')
  };

  /* ==========================================================================
     1. Announcement Bar Carousel
     ========================================================================== */
  function updateAnnouncement(index) {
    if (!elements.announcementItems.length) return;
    elements.announcementItems.forEach(item => item.classList.remove('active'));
    state.currentAnnouncement = (index + elements.announcementItems.length) % elements.announcementItems.length;
    elements.announcementItems[state.currentAnnouncement].classList.add('active');
  }

  if (elements.announcementPrev && elements.announcementNext) {
    elements.announcementPrev.addEventListener('click', () => updateAnnouncement(state.currentAnnouncement - 1));
    elements.announcementNext.addEventListener('click', () => updateAnnouncement(state.currentAnnouncement + 1));
    setInterval(() => updateAnnouncement(state.currentAnnouncement + 1), 4500);
  }

  /* ==========================================================================
     2. Sticky Header Scroll Effect
     ========================================================================== */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      elements.header.classList.add('scrolled');
    } else {
      elements.header.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     3. Hero Slideshow
     ========================================================================== */
  function showSlide(index) {
    if (!elements.heroSlides.length) return;
    elements.heroSlides.forEach(slide => slide.classList.remove('active'));
    elements.heroDots.forEach(dot => dot.classList.remove('active'));
    
    state.currentSlide = (index + elements.heroSlides.length) % elements.heroSlides.length;
    elements.heroSlides[state.currentSlide].classList.add('active');
    if (elements.heroDots[state.currentSlide]) {
      elements.heroDots[state.currentSlide].classList.add('active');
    }
  }

  elements.heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
  });

  let heroInterval = setInterval(() => showSlide(state.currentSlide + 1), 6000);
  const heroSection = document.querySelector('.hero-slideshow');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => clearInterval(heroInterval));
    heroSection.addEventListener('mouseleave', () => {
      heroInterval = setInterval(() => showSlide(state.currentSlide + 1), 6000);
    });
  }

  /* ==========================================================================
     4. Render Products & Filtering
     ========================================================================== */
  function renderProducts(filter = 'all') {
    if (!elements.productsContainer) return;
    elements.productsContainer.innerHTML = '';
    
    const items = filter === 'all' 
      ? STORE_DATA.products 
      : STORE_DATA.products.filter(p => p.category.toLowerCase() === filter.toLowerCase());

    items.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      
      const badgeClass = product.badge.toLowerCase().includes('water') ? 'waterproof' : 'bestseller';
      const compareHtml = product.comparePrice ? `<span class="compare-price">$${product.comparePrice.toFixed(2)}</span>` : '';

      card.innerHTML = `
        <div class="product-media">
          <span class="product-badge ${badgeClass}">${product.badge}</span>
          <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
          <img src="${product.hoverImage}" alt="${product.title}" class="product-image hover-image" loading="lazy">
          <div class="quick-actions-bar">
            <button class="quick-add-btn" data-id="${product.id}">+ Quick Add</button>
            <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-rating">
            <span>★★★★★</span>
            <span class="count">(${product.reviewsCount})</span>
          </div>
          <h3 class="product-title">${product.title}</h3>
          <div class="product-price-row">
            <span class="current-price">$${product.price.toFixed(2)} USD</span>
            ${compareHtml}
          </div>
        </div>
      `;

      // Quick Add handler
      card.querySelector('.quick-add-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product.id, '18k Gold Plated');
      });

      // Quick View handler
      card.querySelector('.quick-view-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openQuickView(product.id);
      });

      // Click card to open quick view
      card.addEventListener('click', () => openQuickView(product.id));

      elements.productsContainer.appendChild(card);
    });
  }

  // Filter tabs click
  elements.filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      elements.filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-filter');
      state.currentFilter = cat;
      renderProducts(cat);
    });
  });

  /* ==========================================================================
     5. Render Spotlight Collections & Reviews
     ========================================================================== */
  function renderSpotlights() {
    if (!elements.spotlightContainer) return;
    elements.spotlightContainer.innerHTML = '';
    STORE_DATA.spotlightCollections.forEach(col => {
      const card = document.createElement('div');
      card.className = 'spotlight-card';
      card.innerHTML = `
        <img src="${col.image}" alt="${col.title}" class="spotlight-bg" loading="lazy">
        <div class="spotlight-overlay"></div>
        <div class="spotlight-content">
          <h3 class="spotlight-title">${col.title}</h3>
          <p class="spotlight-tagline">${col.tagline}</p>
          <a href="${col.link}" class="spotlight-link">Explore Collection &rarr;</a>
        </div>
      `;
      elements.spotlightContainer.appendChild(card);
    });
  }

  function renderReviews() {
    if (!elements.reviewsContainer) return;
    elements.reviewsContainer.innerHTML = '';
    STORE_DATA.testimonials.forEach(item => {
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML = `
        <div>
          <div class="review-stars">★★★★★</div>
          <h4 class="review-headline">"${item.headline}"</h4>
          <p class="review-body">"${item.review}"</p>
        </div>
        <div class="review-author-row">
          <span class="review-author">${item.name}</span>
          <span class="verified-pill">✓ Verified Buyer</span>
        </div>
      `;
      elements.reviewsContainer.appendChild(card);
    });
  }

  /* ==========================================================================
     6. Cart State & Drawer Logic
     ========================================================================== */
  function saveCart() {
    localStorage.setItem('sahira_cart', JSON.stringify(state.cart));
    updateCartUI();
  }

  function addToCart(productId, metalVariant = '18k Gold Plated', quantity = 1) {
    const product = STORE_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(
      item => item.id === productId && item.variant === metalVariant
    );

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        variant: metalVariant,
        quantity: quantity
      });
    }

    saveCart();
    showToast(`Added "${product.title}" to your bag!`);
    openCartDrawer();
  }

  function updateQuantity(index, delta) {
    if (!state.cart[index]) return;
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
  }

  function removeFromCart(index) {
    if (!state.cart[index]) return;
    state.cart.splice(index, 1);
    saveCart();
  }

  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update Header Badge
    if (elements.cartBadge) {
      elements.cartBadge.textContent = totalCount;
      elements.cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    // Update Subtotal
    if (elements.cartSubtotal) {
      elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)} USD`;
    }

    // Update Free Shipping Bar ($125 threshold)
    if (elements.shippingGoalText && elements.shippingProgressFill) {
      const remaining = state.freeShippingThreshold - subtotal;
      if (remaining <= 0) {
        elements.shippingGoalText.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked FREE shipping!`;
        elements.shippingProgressFill.style.width = '100%';
      } else {
        const percent = Math.min(100, Math.round((subtotal / state.freeShippingThreshold) * 100));
        elements.shippingGoalText.innerHTML = `Add <strong>$${remaining.toFixed(2)} USD</strong> more to unlock <strong>FREE DOMESTIC SHIPPING</strong>!`;
        elements.shippingProgressFill.style.width = `${percent}%`;
      }
    }

    // Render Cart Drawer Items
    if (!elements.cartItemsList) return;
    elements.cartItemsList.innerHTML = '';

    if (state.cart.length === 0) {
      elements.cartItemsList.innerHTML = `
        <div class="cart-empty-message">
          <p>Your bag is currently empty.</p>
          <button class="btn btn-primary" style="margin-top: 16px; border: 1px solid var(--color-black);" onclick="document.getElementById('cart-close-btn').click();">
            Shop New Arrivals
          </button>
        </div>
      `;
      return;
    }

    state.cart.forEach((item, index) => {
      const itemRow = document.createElement('div');
      itemRow.className = 'cart-item';
      itemRow.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-details">
          <div>
            <div class="cart-item-title">${item.title}</div>
            <div style="font-size: 11px; color: var(--color-text-muted); margin: 2px 0;">${item.variant}</div>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} USD</div>
          </div>
          <div class="cart-qty-row">
            <div class="qty-control">
              <button class="qty-btn qty-dec" data-idx="${index}">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn qty-inc" data-idx="${index}">+</button>
            </div>
            <span class="cart-item-remove" data-idx="${index}">Remove</span>
          </div>
        </div>
      `;

      itemRow.querySelector('.qty-dec').addEventListener('click', () => updateQuantity(index, -1));
      itemRow.querySelector('.qty-inc').addEventListener('click', () => updateQuantity(index, 1));
      itemRow.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(index));

      elements.cartItemsList.appendChild(itemRow);
    });
  }

  function openCartDrawer() {
    elements.cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    elements.cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (elements.cartBtn) elements.cartBtn.addEventListener('click', openCartDrawer);
  if (elements.cartCloseBtn) elements.cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (elements.cartOverlay) {
    elements.cartOverlay.addEventListener('click', (e) => {
      if (e.target === elements.cartOverlay) closeCartDrawer();
    });
  }

  /* ==========================================================================
     7. Quick View Modal
     ========================================================================== */
  function openQuickView(productId) {
    const product = STORE_DATA.products.find(p => p.id === productId);
    if (!product || !elements.quickViewOverlay) return;

    let selectedMetal = '18k Gold Plated';

    const content = elements.quickViewOverlay.querySelector('.modal-container');
    content.innerHTML = `
      <button class="modal-close-btn" id="modal-close-trigger">&times;</button>
      <div class="quickview-layout">
        <div class="quickview-media">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="quickview-details">
          <span class="quickview-badge">${product.badge}</span>
          <h2 class="quickview-title">${product.title}</h2>
          <div class="quickview-price">$${product.price.toFixed(2)} USD</div>
          <p class="quickview-desc">${product.description}</p>
          
          <div class="metal-options">
            <span class="metal-label">Metal Finish:</span>
            <div class="metal-buttons">
              <button class="metal-btn selected" data-metal="18k Gold Plated">18K Gold Plated</button>
              <button class="metal-btn" data-metal="925 Sterling Silver">925 Sterling Silver</button>
            </div>
          </div>

          <div style="font-size: 12px; margin-bottom: 24px; color: var(--color-text-muted);">
            <div>✓ <strong>Hypoallergenic</strong> (Lead & Nickel Free)</div>
            <div>✓ <strong>Water & Sweat Resistant</strong> (Shower & Swim Safe)</div>
            <div>✓ <strong>Tarnish-Free Guarantee</strong></div>
          </div>

          <button class="btn btn-primary" id="modal-add-to-cart" style="background: var(--color-black); color: var(--color-white); width: 100%;">
            Add to Bag - $${product.price.toFixed(2)} USD
          </button>
        </div>
      </div>
    `;

    // Metal toggle
    content.querySelectorAll('.metal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        content.querySelectorAll('.metal-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedMetal = btn.getAttribute('data-metal');
      });
    });

    // Add to cart click
    content.querySelector('#modal-add-to-cart').addEventListener('click', () => {
      addToCart(product.id, selectedMetal, 1);
      closeQuickView();
    });

    // Close button
    content.querySelector('#modal-close-trigger').addEventListener('click', closeQuickView);

    elements.quickViewOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    if (elements.quickViewOverlay) {
      elements.quickViewOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (elements.quickViewCloseBtn) elements.quickViewCloseBtn.addEventListener('click', closeQuickView);
  if (elements.quickViewOverlay) {
    elements.quickViewOverlay.addEventListener('click', (e) => {
      if (e.target === elements.quickViewOverlay) closeQuickView();
    });
  }

  /* ==========================================================================
     8. Live Search Overlay
     ========================================================================== */
  function openSearch() {
    elements.searchOverlay.classList.add('open');
    elements.searchInput.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    elements.searchOverlay.classList.remove('open');
    elements.searchInput.value = '';
    elements.searchResults.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (elements.searchBtn) elements.searchBtn.addEventListener('click', openSearch);
  if (elements.searchCloseBtn) elements.searchCloseBtn.addEventListener('click', closeSearch);

  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        elements.searchResults.innerHTML = '';
        return;
      }

      const matches = STORE_DATA.products.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) || 
        p.materials.toLowerCase().includes(q)
      );

      elements.searchResults.innerHTML = matches.map(p => `
        <div class="search-match-card" style="display: flex; gap: 12px; cursor: pointer; padding: 8px; border: 1px solid var(--color-border); border-radius: 2px;" data-id="${p.id}">
          <img src="${p.image}" alt="${p.title}" style="width: 50px; height: 60px; object-fit: cover;">
          <div>
            <div style="font-size: 13px; font-weight: 600;">${p.title}</div>
            <div style="font-size: 12px; color: var(--color-gold-dark);">$${p.price.toFixed(2)} USD</div>
          </div>
        </div>
      `).join('');

      elements.searchResults.querySelectorAll('.search-match-card').forEach(card => {
        card.addEventListener('click', () => {
          const pid = parseInt(card.getAttribute('data-id'), 10);
          closeSearch();
          openQuickView(pid);
        });
      });
    });
  }

  /* ==========================================================================
     9. Toast Notifications
     ========================================================================== */
  function showToast(msg) {
    if (!elements.toast) return;
    elements.toastText.textContent = msg;
    elements.toast.classList.add('show');
    setTimeout(() => {
      elements.toast.classList.remove('show');
    }, 3200);
  }

  /* ==========================================================================
     10. Newsletter Form
     ========================================================================== */
  if (elements.newsletterForm) {
    elements.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = elements.newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('🎉 Thank you! Check your inbox for your 15% discount code.');
        input.value = '';
      }
    });
  }

  /* ==========================================================================
     11. Mobile Navigation Drawer
     ========================================================================== */
  if (elements.mobileMenuToggle && elements.mobileNavDrawer) {
    elements.mobileMenuToggle.addEventListener('click', () => {
      elements.mobileNavDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    if (elements.mobileNavClose) {
      elements.mobileNavClose.addEventListener('click', () => {
        elements.mobileNavDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  }

  // Initialize
  renderProducts();
  renderSpotlights();
  renderReviews();
  updateCartUI();
});

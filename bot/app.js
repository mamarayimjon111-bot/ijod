/* ==========================================================================
   MEGAMARKET.UZ - CORE JAVASCRIPT APPLICATION
   ========================================================================== */

// 1. PRODUCTS DATA BANK
const PRODUCTS_DATA = [
    {
        id: "prod-1",
        title: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
        category: "smartphones",
        priceUZS: 16800000,
        oldPriceUZS: 18500000,
        rating: 4.9,
        reviewsCount: 142,
        stock: 8,
        tag: "🔥 TOP",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
        specs: ["A17 Pro Chip", "6.7\" Super Retina XDR OLED", "48 MP Asosiy Kamera", "Titan Korpus", "USB-C Type 3"]
    },
    {
        id: "prod-2",
        title: "Samsung Galaxy S24 Ultra 12GB/512GB Titanium Gray",
        category: "smartphones",
        priceUZS: 15400000,
        oldPriceUZS: 17200000,
        rating: 4.8,
        reviewsCount: 98,
        stock: 5,
        tag: "⚡ 10% Chegirma",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        specs: ["Snapdragon 8 Gen 3", "200 MP Galaxy AI Kamera", "S-Pen Ruchka", "5000 mAh Akkumulyator"]
    },
    {
        id: "prod-3",
        title: "Apple MacBook Air 15\" M3 Chip 16GB / 512GB Midnight",
        category: "laptops",
        priceUZS: 19500000,
        oldPriceUZS: 21000000,
        rating: 5.0,
        reviewsCount: 76,
        stock: 4,
        tag: "🆕 Yangi",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
        specs: ["Apple M3 8-core CPU", "15.3\" Liquid Retina", "18 soatlik batareya", "MagSafe 3 to'lov porti"]
    },
    {
        id: "prod-4",
        title: "Sony WH-1000XM5 Shovqin So'ndiruvchi Wireless Quloqchin",
        category: "audio",
        priceUZS: 4800000,
        oldPriceUZS: 5400000,
        rating: 4.9,
        reviewsCount: 210,
        stock: 12,
        tag: "🎧 Premium",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        specs: ["Industry-Leading ANC", "30 soat batareya", "Hi-Res LDAC Audio", "Mikrofon HD Speak-to-Chat"]
    },
    {
        id: "prod-5",
        title: "Apple Watch Series 9 GPS 45mm Starlight Aluminium",
        category: "smartwatch",
        priceUZS: 5600000,
        oldPriceUZS: 6200000,
        rating: 4.7,
        reviewsCount: 64,
        stock: 9,
        tag: "⚡ Chegirma",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
        specs: ["S9 SiP Chip", "Double Tap Ishorasi", "EKG va Qon kislorodi", "Always-On Retina Ekran"]
    },
    {
        id: "prod-6",
        title: "Sony PlayStation 5 Slim Digital Edition 1TB White",
        category: "gaming",
        priceUZS: 6900000,
        oldPriceUZS: 7800000,
        rating: 4.9,
        reviewsCount: 310,
        stock: 3,
        tag: "🎮 Gaming",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
        specs: ["Custom Ultra High Speed 1TB SSD", "DualSense Haptic Feedback", "4K 120Hz Ray Tracing"]
    },
    {
        id: "prod-7",
        title: "Apple AirPods Pro (2-avlod) USB-C MagSafe Case",
        category: "audio",
        priceUZS: 3100000,
        oldPriceUZS: 3500000,
        rating: 4.9,
        reviewsCount: 420,
        stock: 15,
        tag: "🔥 Xit",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
        specs: ["H2 Chipset", "Faol Shovqin So'ndirish 2x", "Fazoviy Audio Pro", "USB-C Quvvatlash"]
    },
    {
        id: "prod-8",
        title: "ASUS ROG Strix G16 i7-13650HX / 16GB / 1TB / RTX 4060",
        category: "laptops",
        priceUZS: 18200000,
        oldPriceUZS: 19900000,
        rating: 4.8,
        reviewsCount: 52,
        stock: 6,
        tag: "🎮 Gamer",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
        specs: ["Intel Core i7 13-Avlod", "NVIDIA RTX 4060 8GB", "165Hz ROG Nebula Display", "Aura Sync RGB"]
    },
    {
        id: "prod-9",
        title: "Xiaomi Smart Band 8 Pro Black Metallic",
        category: "smartwatch",
        priceUZS: 890000,
        oldPriceUZS: 1050000,
        rating: 4.6,
        reviewsCount: 180,
        stock: 22,
        tag: "⚡ Hamyonbop",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80",
        specs: ["1.74\" AMOLED Ekran", "O'rnatilgan GPS", "14 kun batareya", "150+ Sport rejimlar"]
    },
    {
        id: "prod-10",
        title: "Anker Prime 20,000mAh Power Bank 200W Output",
        category: "accessories",
        priceUZS: 1850000,
        oldPriceUZS: 2100000,
        rating: 4.9,
        reviewsCount: 88,
        stock: 14,
        tag: "🔋 Quvvat",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80",
        specs: ["200W Ultra Tezkor Quvvat", "Aqlli Smart Display", "3 ta Port (2x USB-C)", "Noutbuk quvvatlaydi"]
    },
    {
        id: "prod-11",
        title: "Marshall Stanmore III Bluetooth Akustik Kalonka",
        category: "audio",
        priceUZS: 5200000,
        oldPriceUZS: 5800000,
        rating: 4.9,
        reviewsCount: 41,
        stock: 4,
        tag: "🎵 Retro Luxury",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
        specs: ["Iconic Vintage Design", "Dynamic Loudness", "Bluetooth 5.2", "Faqat original ovoz"]
    },
    {
        id: "prod-12",
        title: "Samsung Galaxy Tab S9 Ultra 14.6\" 12GB/256GB 5G",
        category: "smartphones",
        priceUZS: 14200000,
        oldPriceUZS: 15800000,
        rating: 4.8,
        reviewsCount: 35,
        stock: 2,
        tag: "📱 Ultra",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
        specs: ["14.6\" Dynamic AMOLED 2X", "IP68 Suvdan himoya", "S-Pen Kiritilgan", "Snapdragon 8 Gen 2"]
    }
];

// PROMO CODES BANK
const PROMO_CODES = {
    "BOZOR10": { type: "percent", value: 10, name: "10% Chegirma" },
    "MEGAMARKET": { type: "percent", value: 15, name: "15% Maxsus Chegirma" },
    "WELCOME50": { type: "flat", value: 50000, name: "50,000 so'm Chegirma" }
};

const USD_RATE = 12800; // 1 USD = 12,800 UZS

// 2. STATE MANAGEMENT
let state = {
    products: [...PRODUCTS_DATA],
    cart: JSON.parse(localStorage.getItem('mm_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('mm_wishlist')) || [],
    activeCategory: 'all',
    searchQuery: '',
    maxPrice: 50000000,
    inStockOnly: false,
    sortBy: 'popular',
    appliedPromo: null,
    currency: 'UZS',
    theme: localStorage.getItem('mm_theme') || 'dark'
};

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEventListeners();
    startFlashSaleTimer();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
});

// 4. THEME INITIALIZER
function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const themeIcon = document.querySelector('#theme-toggle i');
    if (themeIcon) {
        themeIcon.className = state.theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mm_theme', state.theme);
    initTheme();
    showToast(`Rejim ${state.theme === 'dark' ? 'Qorong' : 'Yorug'}'ga o'zgartirildi`, 'info');
}

// 5. EVENT LISTENERS SETUP
function initEventListeners() {
    // Theme Toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Category Dropdown Toggle
    const catBtn = document.getElementById('category-dropdown-btn');
    const catMenu = document.getElementById('category-menu');
    catBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        catMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!catMenu.contains(e.target) && e.target !== catBtn) {
            catMenu.classList.remove('active');
        }
    });

    // Category Selector (from dropdown menu & chips)
    document.querySelectorAll('#category-menu a, #category-chips .chip').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = el.getAttribute('data-cat');
            setCategory(cat);
        });
    });

    // Search Input Logic
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const searchDropdown = document.getElementById('search-dropdown');

    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        clearSearchBtn.hidden = state.searchQuery.length === 0;
        handleSearchDropdown(state.searchQuery);
        renderProducts();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        clearSearchBtn.hidden = true;
        searchDropdown.classList.remove('active');
        renderProducts();
    });

    // Currency Switcher
    document.getElementById('currency-select').addEventListener('change', (e) => {
        state.currency = e.target.value;
        renderProducts();
        updateCartUI();
    });

    // Sort Dropdown
    document.getElementById('sort-select').addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });

    // Price Range Filter
    const priceRangeInput = document.getElementById('price-range');
    const priceRangeVal = document.getElementById('price-range-val');
    priceRangeInput.addEventListener('input', (e) => {
        state.maxPrice = Number(e.target.value);
        priceRangeVal.textContent = formatPrice(state.maxPrice);
        renderProducts();
    });

    // In Stock Only Checkbox
    document.getElementById('in-stock-only').addEventListener('change', (e) => {
        state.inStockOnly = e.target.checked;
        renderProducts();
    });

    // Reset Filters Button
    document.getElementById('reset-filters-btn').addEventListener('click', resetFilters);

    // Cart Drawers & Overlays
    const cartBtn = document.getElementById('cart-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');

    const openCart = () => {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
    };

    const closeCart = () => {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
    };

    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Wishlist Drawer & Overlay
    const wishlistBtn = document.getElementById('wishlist-btn');
    const wishlistDrawer = document.getElementById('wishlist-drawer');
    const wishlistOverlay = document.getElementById('wishlist-overlay');
    const closeWishlistBtn = document.getElementById('close-wishlist-btn');

    const openWishlist = () => {
        wishlistDrawer.classList.add('active');
        wishlistOverlay.classList.add('active');
    };

    const closeWishlist = () => {
        wishlistDrawer.classList.remove('active');
        wishlistOverlay.classList.remove('active');
    };

    wishlistBtn.addEventListener('click', openWishlist);
    closeWishlistBtn.addEventListener('click', closeWishlist);
    wishlistOverlay.addEventListener('click', closeWishlist);

    // Promokod Handler
    document.getElementById('apply-promo-btn').addEventListener('click', applyPromoCode);

    // Clear Cart
    document.getElementById('clear-cart-btn').addEventListener('click', () => {
        if (state.cart.length === 0) return;
        state.cart = [];
        saveCartState();
        updateCartUI();
        showToast("Savatcha tozalandi", "info");
    });

    // Checkout Flow
    const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');
    const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
    const closeCheckoutBtn = document.getElementById('close-checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');

    proceedCheckoutBtn.addEventListener('click', () => {
        if (state.cart.length === 0) {
            showToast("Savatchangiz bo'sh!", "warning");
            return;
        }
        closeCart();
        openCheckoutModal();
    });

    closeCheckoutBtn.addEventListener('click', () => {
        checkoutModalOverlay.classList.remove('active');
    });

    checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Success Modal Close
    document.getElementById('close-success-btn').addEventListener('click', () => {
        document.getElementById('success-modal-overlay').classList.remove('active');
    });

    // Quickview Modal Close
    document.getElementById('close-quickview-btn').addEventListener('click', () => {
        document.getElementById('quickview-modal-overlay').classList.remove('active');
    });

    // Banner Promo button
    document.getElementById('promo-banner-btn').addEventListener('click', () => {
        const promoInput = document.getElementById('promo-input');
        promoInput.value = 'BOZOR10';
        openCart();
        showToast("Promokod 'BOZOR10' kiritildi! Qo'llash tugmasini bosing", "info");
    });
}

// 6. CATEGORY SETTER
function setCategory(category) {
    state.activeCategory = category;

    // Update Chips
    document.querySelectorAll('#category-chips .chip').forEach(chip => {
        if (chip.getAttribute('data-cat') === category) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });

    // Update Dropdown Links
    document.querySelectorAll('#category-menu a').forEach(link => {
        if (link.getAttribute('data-cat') === category) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    renderProducts();
}

function resetFilters() {
    state.searchQuery = '';
    state.activeCategory = 'all';
    state.maxPrice = 50000000;
    state.inStockOnly = false;
    state.sortBy = 'popular';

    document.getElementById('search-input').value = '';
    document.getElementById('price-range').value = 50000000;
    document.getElementById('price-range-val').textContent = formatPrice(50000000);
    document.getElementById('in-stock-only').checked = false;
    document.getElementById('sort-select').value = 'popular';

    setCategory('all');
}

// 7. PRICE FORMATTER & CURRENCY CONVERTER
function formatPrice(amountUZS) {
    if (state.currency === 'USD') {
        const usdVal = (amountUZS / USD_RATE).toFixed(2);
        return `$${usdVal}`;
    }
    return new Intl.NumberFormat('uz-UZ').format(amountUZS) + " so'm";
}

// 8. PRODUCT RENDERING & FILTERING
function getFilteredProducts() {
    let list = [...PRODUCTS_DATA];

    // Category Filter
    if (state.activeCategory !== 'all') {
        list = list.filter(p => p.category === state.activeCategory);
    }

    // Search Query Filter
    if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        list = list.filter(p => 
            p.title.toLowerCase().includes(q) || 
            p.category.toLowerCase().includes(q) ||
            p.specs.some(s => s.toLowerCase().includes(q))
        );
    }

    // Price Filter
    list = list.filter(p => p.priceUZS <= state.maxPrice);

    // In-Stock Filter
    if (state.inStockOnly) {
        list = list.filter(p => p.stock > 0);
    }

    // Sorting
    if (state.sortBy === 'price-low') {
        list.sort((a, b) => a.priceUZS - b.priceUZS);
    } else if (state.sortBy === 'price-high') {
        list.sort((a, b) => b.priceUZS - a.priceUZS);
    } else if (state.sortBy === 'rating') {
        list.sort((a, b) => b.rating - a.rating);
    } else { // popular
        list.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    return list;
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const countBadge = document.getElementById('products-count-badge');
    
    const filteredList = getFilteredProducts();
    countBadge.textContent = filteredList.length;

    if (filteredList.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    grid.innerHTML = filteredList.map(prod => {
        const isFav = state.wishlist.some(item => item.id === prod.id);

        return `
        <div class="product-card" data-id="${prod.id}">
            ${prod.tag ? `<span class="product-badge-tag ${prod.tag.includes('Chegirma') ? 'sale' : ''}">${prod.tag}</span>` : ''}
            
            <button class="product-fav-btn ${isFav ? 'active' : ''}" onclick="toggleWishlist('${prod.id}', event)" title="Saralanganlarga saqlash">
                <i class="${isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
            </button>

            <div class="product-img-wrapper">
                <img src="${prod.image}" alt="${prod.title}" loading="lazy">
                <button class="quickview-btn-overlay" onclick="openQuickView('${prod.id}')">
                    <i class="fa-solid fa-eye"></i> Tezkor ko'rish
                </button>
            </div>

            <div class="product-details">
                <span class="product-category-name">${getCategoryDisplayName(prod.category)}</span>
                <h3 class="product-title" title="${prod.title}">${prod.title}</h3>
                
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    <strong>${prod.rating}</strong>
                    <span>(${prod.reviewsCount} sharh)</span>
                </div>

                <div class="product-footer">
                    <div class="product-price">
                        <span class="current-price">${formatPrice(prod.priceUZS)}</span>
                        ${prod.oldPriceUZS ? `<span class="old-price">${formatPrice(prod.oldPriceUZS)}</span>` : ''}
                    </div>

                    <button class="add-cart-btn" onclick="addToCart('${prod.id}')" title="Savatga qo'shish">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function getCategoryDisplayName(catKey) {
    const names = {
        smartphones: "Smartfonlar",
        laptops: "Noutbuklar",
        audio: "Audio va Quloqchinlar",
        smartwatch: "Aqlli Soatlar",
        accessories: "Aksessuarlar",
        gaming: "Gaming Qurilmalar"
    };
    return names[catKey] || catKey;
}

// 9. LIVE SEARCH DROPDOWN
function handleSearchDropdown(query) {
    const dropdown = document.getElementById('search-dropdown');
    if (!query) {
        dropdown.classList.remove('active');
        return;
    }

    const matches = PRODUCTS_DATA.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    if (matches.length === 0) {
        dropdown.innerHTML = `<div class="search-result-item" style="color:var(--text-muted); font-size:0.88rem;">Natijalar topilmadi</div>`;
    } else {
        dropdown.innerHTML = matches.map(m => `
            <div class="search-result-item" onclick="openQuickView('${m.id}')">
                <img src="${m.image}" alt="${m.title}">
                <div class="search-result-info">
                    <h5>${m.title}</h5>
                    <p>${formatPrice(m.priceUZS)}</p>
                </div>
            </div>
        `).join('');
    }

    dropdown.classList.add('active');
}

// 10. CART MANAGEMENT
function addToCart(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
        state.cart[existingIndex].qty += 1;
    } else {
        state.cart.push({
            id: product.id,
            title: product.title,
            priceUZS: product.priceUZS,
            image: product.image,
            qty: 1
        });
    }

    saveCartState();
    updateCartUI();
    showToast(`"${product.title.slice(0, 24)}..." savatchaga qo'shildi!`, "success");
}

function updateCartQty(productId, change) {
    const index = state.cart.findIndex(item => item.id === productId);
    if (index > -1) {
        state.cart[index].qty += change;
        if (state.cart[index].qty <= 0) {
            state.cart.splice(index, 1);
        }
        saveCartState();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCartState();
    updateCartUI();
    showToast("Mahsulot savatchadan olib tashlandi", "info");
}

function saveCartState() {
    localStorage.setItem('mm_cart', JSON.stringify(state.cart));
}

function calculateCartTotals() {
    const subtotalUZS = state.cart.reduce((sum, item) => sum + (item.priceUZS * item.qty), 0);
    let discountUZS = 0;

    if (state.appliedPromo) {
        const promo = PROMO_CODES[state.appliedPromo];
        if (promo) {
            if (promo.type === "percent") {
                discountUZS = (subtotalUZS * promo.value) / 100;
            } else if (promo.type === "flat") {
                discountUZS = promo.value;
            }
        }
    }

    const totalUZS = Math.max(0, subtotalUZS - discountUZS);
    const totalItemsCount = state.cart.reduce((count, item) => count + item.qty, 0);

    return { subtotalUZS, discountUZS, totalUZS, totalItemsCount };
}

function updateCartUI() {
    const { subtotalUZS, discountUZS, totalUZS, totalItemsCount } = calculateCartTotals();

    // Badges
    document.getElementById('cart-count').textContent = totalItemsCount;
    document.getElementById('drawer-cart-count').textContent = totalItemsCount;
    document.getElementById('header-cart-total').textContent = formatPrice(totalUZS);

    // Items list in drawer
    const container = document.getElementById('cart-items-container');

    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="padding: 40px 0;">
                <i class="fa-solid fa-cart-shopping" style="font-size: 3rem; color: var(--text-muted);"></i>
                <h4 style="margin-top: 12px; font-size: 1.1rem;">Savatchangiz bo'sh</h4>
                <p style="font-size: 0.85rem;">Xarid qilish uchun mahsulotlar tanlang</p>
            </div>
        `;
    } else {
        container.innerHTML = state.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">${formatPrice(item.priceUZS * item.qty)}</div>
                    
                    <div class="cart-item-controls">
                        <div class="qty-counter">
                            <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                        </div>

                        <button class="remove-cart-item" onclick="removeFromCart('${item.id}')" title="O'chirish">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Totals in drawer
    document.getElementById('cart-subtotal').textContent = formatPrice(subtotalUZS);
    
    const discountRow = document.getElementById('discount-row');
    if (discountUZS > 0) {
        discountRow.classList.remove('hidden');
        document.getElementById('cart-discount').textContent = `- ${formatPrice(discountUZS)}`;
    } else {
        discountRow.classList.add('hidden');
    }

    document.getElementById('cart-total-amount').textContent = formatPrice(totalUZS);
}

// 11. PROMO CODE APPLIER
function applyPromoCode() {
    const code = document.getElementById('promo-input').value.trim().toUpperCase();
    if (!code) return;

    if (PROMO_CODES[code]) {
        state.appliedPromo = code;
        updateCartUI();
        showToast(`Promokod "${code}" muvaffaqiyatli qo'llandi! (${PROMO_CODES[code].name})`, "success");
    } else {
        showToast("Kiritilgan promokod yaroqsiz", "warning");
    }
}

// 12. WISHLIST MANAGEMENT
function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const existsIndex = state.wishlist.findIndex(item => item.id === productId);

    if (existsIndex > -1) {
        state.wishlist.splice(existsIndex, 1);
        showToast("Saralanganlardan olib tashlandi", "info");
    } else {
        state.wishlist.push(product);
        showToast("Saralanganlarga qo'shildi!", "success");
    }

    localStorage.setItem('mm_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
    renderProducts();
}

function updateWishlistUI() {
    const countBadge = document.getElementById('wishlist-count');
    countBadge.textContent = state.wishlist.length;

    const container = document.getElementById('wishlist-items-container');

    if (state.wishlist.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="padding: 40px 0;">
                <i class="fa-regular fa-heart" style="font-size: 3rem; color: var(--text-muted);"></i>
                <h4 style="margin-top: 12px; font-size: 1.1rem;">Saralanganlar ro'yxati bo'sh</h4>
                <p style="font-size: 0.85rem;">Sizga yoqqan mahsulotlarning yurakchasini bosing</p>
            </div>
        `;
    } else {
        container.innerHTML = state.wishlist.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">${formatPrice(item.priceUZS)}</div>
                    
                    <div class="cart-item-controls" style="margin-top: 10px;">
                        <button class="btn btn-sm btn-primary" onclick="addToCart('${item.id}')">
                            <i class="fa-solid fa-cart-plus"></i> Savatga
                        </button>
                        <button class="remove-cart-item" onclick="toggleWishlist('${item.id}')">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// 13. QUICK VIEW MODAL
function openQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const modalOverlay = document.getElementById('quickview-modal-overlay');
    const content = document.getElementById('quickview-content');

    const isFav = state.wishlist.some(item => item.id === product.id);

    content.innerHTML = `
        <div>
            <img src="${product.image}" alt="${product.title}" class="quickview-img">
        </div>
        <div class="quickview-info">
            <span class="product-category-name">${getCategoryDisplayName(product.category)}</span>
            <h3>${product.title}</h3>
            
            <div class="product-rating" style="margin-bottom: 12px;">
                <i class="fa-solid fa-star"></i>
                <strong>${product.rating}</strong>
                <span>(${product.reviewsCount} sharh)</span>
                <span style="margin-left: 12px; color: ${product.stock > 0 ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; font-weight:700;">
                    ${product.stock > 0 ? `Sotuvda mavjud (${product.stock} ta)` : 'Tugagan'}
                </span>
            </div>

            <div class="product-price" style="margin-bottom: 16px;">
                <span class="current-price" style="font-size: 1.6rem;">${formatPrice(product.priceUZS)}</span>
                ${product.oldPriceUZS ? `<span class="old-price">${formatPrice(product.oldPriceUZS)}</span>` : ''}
            </div>

            <div class="quickview-desc">
                Eng zamonaviy texnologiyalar va rasmiy kafolat bilan ta'minlangan ushbu model sizga yuqori unumdorlik va qulaylik taqdim etadi.
            </div>

            <div style="margin-bottom: 24px;">
                <h5 style="margin-bottom: 8px; font-size: 0.9rem;">Asosiy ko'rsatkichlar:</h5>
                <ul style="list-style: disc; padding-left: 20px; font-size: 0.85rem; color: var(--text-secondary);">
                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>

            <div style="display: flex; gap: 14px;">
                <button class="btn btn-primary btn-lg glow-effect" style="flex:1;" onclick="addToCart('${product.id}'); document.getElementById('quickview-modal-overlay').classList.remove('active');">
                    <i class="fa-solid fa-cart-plus"></i> Savatga qo'shish
                </button>
                <button class="btn btn-outline btn-lg" onclick="toggleWishlist('${product.id}')">
                    <i class="${isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
                </button>
            </div>
        </div>
    `;

    modalOverlay.classList.add('active');
}

// 14. CHECKOUT FLOW
function openCheckoutModal() {
    const { totalUZS, totalItemsCount } = calculateCartTotals();
    document.getElementById('checkout-items-qty').textContent = `${totalItemsCount} ta`;
    document.getElementById('checkout-final-price').textContent = formatPrice(totalUZS);
    document.getElementById('checkout-modal-overlay').classList.add('active');
}

function handleCheckoutSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const city = document.getElementById('cust-city').value;
    const address = document.getElementById('cust-address').value.trim();
    const payment = document.querySelector('input[name="payment-method"]:checked').value;

    const { totalUZS } = calculateCartTotals();
    const orderId = '#MM-' + Math.floor(10000 + Math.random() * 90000);

    // Populate Success Receipt
    document.getElementById('order-id-display').textContent = orderId;
    document.getElementById('order-phone-display').textContent = phone;

    const receipt = document.getElementById('receipt-preview');
    receipt.innerHTML = `
        <div class="receipt-row"><span>Mijoz:</span> <strong>${name}</strong></div>
        <div class="receipt-row"><span>Manzil:</span> <strong>${city}, ${address}</strong></div>
        <div class="receipt-row"><span>To'lov turi:</span> <strong>${payment}</strong></div>
        <div class="receipt-row" style="margin-top:10px; border-top:1px dashed var(--bg-card-border); padding-top:6px;">
            <span>Jami to'langan:</span> <strong style="color:var(--primary); font-size:1rem;">${formatPrice(totalUZS)}</strong>
        </div>
    `;

    // Clear state
    state.cart = [];
    state.appliedPromo = null;
    saveCartState();
    updateCartUI();

    // Hide checkout modal and show success modal
    document.getElementById('checkout-modal-overlay').classList.remove('active');
    document.getElementById('success-modal-overlay').classList.add('active');

    showToast("Buyurtma muvaffaqiyatli rasmiylashtirildi!", "success");
}

// 15. TOAST SYSTEM
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: 'fa-solid fa-circle-check',
        info: 'fa-solid fa-circle-info',
        warning: 'fa-solid fa-triangle-exclamation'
    };

    toast.innerHTML = `
        <i class="${icons[type] || icons.info}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// 16. FLASH SALE COUNTDOWN TIMER
function startFlashSaleTimer() {
    let duration = (14 * 3600) + (32 * 60) + 45; // 14 hours 32 mins 45 secs

    const timerInterval = setInterval(() => {
        if (duration <= 0) {
            clearInterval(timerInterval);
            return;
        }

        duration--;

        const h = Math.floor(duration / 3600);
        const m = Math.floor((duration % 3600) / 60);
        const s = Math.floor(duration % 60);

        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
    }, 1000);
}

// ===== RUAA E-COMMERCE - FULL APP =====

// ===== DATA & STATE =====
let storeData = {
    settings: {
        storeName: 'Ruaa',
        tagline: 'Fashion Meets You',
        adminPassword: 'admin123',
        contactEmail: '',
        autoReplySubject: 'Thank you for contacting Ruaa',
        autoReplyMessage: 'Thank you for reaching out! We will get back to you soon.',
        paymentCOD: true,
        paymentUPI: false,
        paymentCard: false,
        paymentBank: false
    },
    homepage: {
        announcement: 'Free shipping for all orders within India | We ship worldwide',
        announcementEnabled: true,
        newArrivalsTitle: 'New Arrivals',
        bestSellersTitle: 'Best Sellers',
        categoriesTitle: 'Shop by Category',
        heroSliders: [
            { image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600', link: '' },
            { image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600', link: '' }
        ]
    },
    products: [
        {
            id: 1,
            name: 'Elegant Lawn Suit',
            price: 2499,
            originalPrice: 2999,
            category: 'new-arrivals',
            image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600',
            images: [],
            description: 'Beautiful Pakistani lawn suit with intricate embroidery. Perfect for summer occasions.',
            sizes: ['S', 'M', 'L', 'XL'],
            status: 'in-stock'
        },
        {
            id: 2,
            name: 'Premium Formal Set',
            price: 3999,
            originalPrice: null,
            category: 'best-sellers',
            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600',
            images: [],
            description: 'Elegant formal set for special occasions.',
            sizes: ['M', 'L', 'XL'],
            status: 'in-stock'
        },
        {
            id: 3,
            name: 'Designer Co-ord Set',
            price: 3299,
            originalPrice: 3999,
            category: 'new-arrivals',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
            images: [],
            description: 'Trendy co-ord set for the modern woman.',
            sizes: ['S', 'M', 'L'],
            status: 'on-sale'
        },
        {
            id: 4,
            name: 'Classic Silk Suit',
            price: 5499,
            originalPrice: null,
            category: 'best-sellers',
            image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600',
            images: [],
            description: 'Premium silk suit with hand embroidery.',
            sizes: ['M', 'L'],
            status: 'sold-out'
        },
        {
            id: 5,
            name: 'Casual Farshi Salwar',
            price: 1899,
            originalPrice: null,
            category: 'new-arrivals',
            image: 'https://images.unsplash.com/photo-1612216039984-8952374d0c59?w=600',
            images: [],
            description: 'Comfortable farshi salwar for everyday wear.',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            status: 'in-stock'
        },
        {
            id: 6,
            name: 'Bridal Collection',
            price: 8999,
            originalPrice: 9999,
            category: 'best-sellers',
            image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600',
            images: [],
            description: 'Exquisite bridal wear with heavy embellishments.',
            sizes: ['M', 'L', 'XL'],
            status: 'on-sale'
        }
    ],
    categories: [
        { id: 1, name: 'Lawn Suits', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600' },
        { id: 2, name: 'Formal Sets', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600' },
        { id: 3, name: 'Co-ord Sets', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600' },
        { id: 4, name: 'Silk Suits', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600' }
    ],
    sizeCategories: [
        { id: 1, name: 'Clothing Sizes', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
        { id: 2, name: 'Footwear', sizes: ['6', '7', '8', '9', '10', '11'] },
        { id: 3, name: 'Rings', sizes: ['5', '6', '7', '8', '9', '10'] },
        { id: 4, name: 'Bangles', sizes: ['2.2', '2.4', '2.6', '2.8', '2.10'] },
        { id: 5, name: 'Waist', sizes: ['26', '28', '30', '32', '34', '36', '38', '40'] }
    ],
    pages: {
        about: {
            title: 'About Us',
            image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
            content: 'Welcome to Ruaa, where style meets sophistication. We are a premium fashion brand dedicated to bringing you the finest Pakistani suits and ethnic wear.',
            founderImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
            founderText: 'Founded by a passionate entrepreneur, Ruaa aims to make luxury fashion accessible to everyone.'
        },
        contact: {
            title: 'Contact Us',
            info: '<p>We would love to hear from you!</p><p>Email: hello@ruaa.com</p><p>Phone: +91 98765 43210</p><p>Address: Mumbai, India</p>'
        }
    }
};

let cart = JSON.parse(localStorage.getItem('ruaa-cart')) || [];
let currentProduct = null;
let selectedSize = null;
let isAdminLoggedIn = false;
let editingProductId = null;
let editingCategoryId = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadStoreData();
    initCustomer();
    initAdmin();
    
    // Hide loader after 2 seconds
    setTimeout(() => {
        const loader = document.getElementById('loader') || document.querySelector('.loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 2000);
});

// ===== DATA PERSISTENCE =====
function loadStoreData() {
    const saved = localStorage.getItem('ruaa-store-data');
    if (saved) {
        storeData = JSON.parse(saved);
    } else {
        saveStoreData();
    }
}

function saveStoreData() {
    localStorage.setItem('ruaa-store-data', JSON.stringify(storeData));
}

// ===== CUSTOMER FUNCTIONS =====
function initCustomer() {
    initNavigation();
    initMobileMenu();
    initSearch();
    initCart();
    loadCustomerContent();
    updateCartCount();
}

function initNavigation() {
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });
}

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
        document.querySelectorAll(`.nav-link[data-page="${page}"]`).forEach(l => l.classList.add('active'));
        window.scrollTo(0, 0);
    }
    
    closeMobileMenu();
    closeSearch();
}

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mobileNav');
    const close = document.getElementById('mobileClose');
    
    if (btn) btn.addEventListener('click', () => nav.classList.add('active'));
    if (close) close.addEventListener('click', () => nav.classList.remove('active'));
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });
}

function closeMobileMenu() {
    const nav = document.getElementById('mobileNav');
    if (nav) nav.classList.remove('active');
}

function initSearch() {
    const btn = document.getElementById('searchBtn');
    const modal = document.getElementById('searchModal');
    const close = document.getElementById('searchClose');
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    
    if (btn) btn.addEventListener('click', () => modal.classList.add('active'));
    if (close) close.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
    
    if (input) {
        input.addEventListener('input', () => {
            const query = input.value.toLowerCase();
            if (query.length > 1) {
                const matches = storeData.products.filter(p => 
                    p.name.toLowerCase().includes(query)
                );
                results.innerHTML = matches.map(p => `
                    <div class="product-card" onclick="showProduct(${p.id})">
                        <img src="${p.image}" alt="${p.name}">
                        <div class="product-info">
                            <h3>${p.name}</h3>
                            <p>₹${p.price.toLocaleString()}</p>
                        </div>
                    </div>
                `).join('');
            } else {
                results.innerHTML = '';
            }
        });
    }
}

function closeSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) modal.classList.remove('active');
}

function initCart() {
    document.getElementById('cartBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('cart');
        renderCart();
    });
    
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = e.target.querySelector('input[type="text"]').value;
        const email = e.target.querySelector('input[type="email"]').value;
        const phone = e.target.querySelector('input[type="tel"]').value;
        const message = e.target.querySelector('textarea').value;
        
        const subject = encodeURIComponent(`Contact from ${name} - ${storeData.settings.storeName}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
        
        if (storeData.settings.contactEmail) {
            window.location.href = `mailto:${storeData.settings.contactEmail}?subject=${subject}&body=${body}`;
            showToast('Opening email client...');
        } else {
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
            showToast('Opening email client...');
        }
        e.target.reset();
    });
    
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Login functionality coming soon!');
    });
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = count;
}

function addToCart(productId, size, quantity = 1) {
    const existing = cart.find(item => item.id === productId && item.size === size);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ id: productId, size, quantity });
    }
    localStorage.setItem('ruaa-cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Added to cart!');
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    localStorage.setItem('ruaa-cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cartContent');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <h2>Your cart is empty</h2>
                <p>Add items to your cart</p>
                <a href="#" class="btn btn-primary" data-page="products">Shop Now</a>
            </div>
        `;
        container.querySelector('[data-page]')?.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('products');
        });
        return;
    }
    
    let total = 0;
    const items = cart.map(item => {
        const product = storeData.products.find(p => p.id === item.id);
        if (!product) return '';
        const subtotal = product.price * item.quantity;
        total += subtotal;
        return `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>Size: ${item.size}</p>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div class="cart-item-price">
                    <p>₹${subtotal.toLocaleString()}</p>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</button>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = `
        <a href="#" class="section-link" data-page="products" style="display:inline-block;margin-bottom:24px;">← Continue Shopping</a>
        ${items}
        <div class="cart-summary">
            <p><strong>Total:</strong> ₹${total.toLocaleString()}</p>
            <button class="btn btn-primary" onclick="openCheckout()">Proceed to Checkout</button>
        </div>
    `;
    
    container.querySelector('[data-page]')?.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('products');
    });
}

function openCheckout() {
    if (cart.length === 0) return;
    
    let total = cart.reduce((sum, item) => {
        const product = storeData.products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    let paymentOptions = [];
    if (storeData.settings.paymentCOD) {
        paymentOptions.push(`<label class="payment-option"><input type="radio" name="payment" value="COD" checked> <span>💵 Cash on Delivery (COD)</span></label>`);
    }
    if (storeData.settings.paymentUPI) {
        paymentOptions.push(`<label class="payment-option"><input type="radio" name="payment" value="UPI"> <span>📱 UPI Payment</span></label>`);
    }
    if (storeData.settings.paymentCard) {
        paymentOptions.push(`<label class="payment-option"><input type="radio" name="payment" value="Card"> <span>💳 Credit/Debit Card</span></label>`);
    }
    if (storeData.settings.paymentBank) {
        paymentOptions.push(`<label class="payment-option"><input type="radio" name="payment" value="Bank"> <span>🏦 Bank Transfer</span></label>`);
    }
    
    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'modal active';
    checkoutModal.id = 'checkoutModal';
    checkoutModal.innerHTML = `
        <div class="modal-content checkout-modal">
            <div class="modal-header">
                <h2>Checkout</h2>
                <button class="modal-close" onclick="closeCheckout()">&times;</button>
            </div>
            <form id="checkoutForm">
                <div class="checkout-section">
                    <h3>Contact Information</h3>
                    <div class="form-group">
                        <label>Full Name *</label>
                        <input type="text" id="checkoutName" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label>Email *</label>
                        <input type="email" id="checkoutEmail" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label>Phone *</label>
                        <input type="tel" id="checkoutPhone" class="form-input" required>
                    </div>
                </div>
                <div class="checkout-section">
                    <h3>Shipping Address</h3>
                    <div class="form-group">
                        <label>Address *</label>
                        <textarea id="checkoutAddress" class="form-input" rows="3" required></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>City *</label>
                            <input type="text" id="checkoutCity" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label>Pincode *</label>
                            <input type="text" id="checkoutPincode" class="form-input" required>
                        </div>
                    </div>
                </div>
                <div class="checkout-section">
                    <h3>Payment Method</h3>
                    <div class="payment-options">
                        ${paymentOptions.join('')}
                    </div>
                </div>
                <div class="checkout-section">
                    <h3>Order Summary</h3>
                    <div class="checkout-items">
                        ${cart.map(item => {
                            const product = storeData.products.find(p => p.id === item.id);
                            if (!product) return '';
                            return `
                                <div class="checkout-item">
                                    <span>${product.name} (${item.size}) x ${item.quantity}</span>
                                    <span>₹${(product.price * item.quantity).toLocaleString()}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    <div class="checkout-total">
                        <strong>Total: ₹${total.toLocaleString()}</strong>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;margin-top:16px;">Place Order</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(checkoutModal);
    
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        placeOrder();
    });
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.remove();
}

function placeOrder() {
    const name = document.getElementById('checkoutName').value;
    const email = document.getElementById('checkoutEmail').value;
    const phone = document.getElementById('checkoutPhone').value;
    const address = document.getElementById('checkoutAddress').value;
    const city = document.getElementById('checkoutCity').value;
    const pincode = document.getElementById('checkoutPincode').value;
    const payment = document.querySelector('input[name="payment"]:checked')?.value || 'COD';
    
    let orderItems = cart.map(item => {
        const product = storeData.products.find(p => p.id === item.id);
        return `${product?.name || 'Unknown'} (${item.size}) x ${item.quantity}`;
    }).join(', ');
    
    let total = cart.reduce((sum, item) => {
        const product = storeData.products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const subject = encodeURIComponent(`New Order from ${name} - ${storeData.settings.storeName}`);
    const body = encodeURIComponent(
`NEW ORDER DETAILS
==================

Customer Info:
Name: ${name}
Email: ${email}
Phone: ${phone}

Shipping Address:
${address}
${city} - ${pincode}

Payment Method: ${payment}

Order Items:
${cart.map(item => {
    const product = storeData.products.find(p => p.id === item.id);
    return `- ${product?.name || 'Unknown'} (Size: ${item.size}) x ${item.quantity} = ₹${(product?.price || 0) * item.quantity}`;
}).join('\n')}

TOTAL: ₹${total.toLocaleString()}
==================`
    );
    
    if (storeData.settings.contactEmail) {
        window.location.href = `mailto:${storeData.settings.contactEmail}?subject=${subject}&body=${body}`;
    } else {
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }
    
    cart = [];
    localStorage.setItem('ruaa-cart', JSON.stringify(cart));
    updateCartCount();
    closeCheckout();
    
    showToast('Order placed! Check your email app to send the order.');
    
    setTimeout(() => {
        navigateTo('home');
    }, 1000);
}

function showProduct(productId) {
    const product = storeData.products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    selectedSize = product.sizes[0];
    
    document.getElementById('galleryMainImage').src = product.image;
    document.getElementById('galleryMainImage').alt = product.name;
    document.getElementById('productTitle').textContent = product.name;
    
    const priceHTML = product.originalPrice
        ? `<span class="original">₹${product.originalPrice.toLocaleString()}</span> <span class="sale">₹${product.price.toLocaleString()}</span>`
        : `₹${product.price.toLocaleString()}`;
    document.getElementById('productPrice').innerHTML = priceHTML;
    document.getElementById('productDescription').innerHTML = product.description || '';
    
    const sizesHTML = product.sizes.map((size, i) => 
        `<button class="size-option ${i === 0 ? 'active' : ''}" onclick="selectSize('${size}', this)">${size}</button>`
    ).join('');
    document.getElementById('sizeOptions').innerHTML = sizesHTML;
    
    document.getElementById('qtyInput').value = 1;
    
    document.getElementById('addToCartBtn').onclick = () => {
        if (currentProduct && selectedSize) {
            const qty = parseInt(document.getElementById('qtyInput').value);
            addToCart(currentProduct.id, selectedSize, qty);
        }
    };
    
    navigateTo('product');
}

function selectSize(size, btn) {
    document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = size;
}

function loadCustomerContent() {
    // Update brand settings
    document.getElementById('logoText').textContent = storeData.settings.storeName;
    document.getElementById('footerLogo').textContent = storeData.settings.storeName;
    document.getElementById('footerTagline').textContent = storeData.settings.tagline;
    document.getElementById('footerBrand').textContent = storeData.settings.storeName;
    document.getElementById('footerYear').textContent = new Date().getFullYear();
    document.title = `${storeData.settings.storeName} - ${storeData.settings.tagline}`;
    
    // Announcement
    const announcementBar = document.getElementById('announcementBar');
    if (announcementBar) {
        announcementBar.style.display = storeData.homepage.announcementEnabled ? 'block' : 'none';
        document.getElementById('announcementText').innerHTML = storeData.homepage.announcement.replace(/\|/g, '<span class="separator">|</span>');
    }
    
    // Hero Sliders
    const sliderContainer = document.getElementById('heroSlides');
    const sliderNav = document.getElementById('sliderNav');
    if (sliderContainer) {
        const slideTitles = ['New Collection 2024', 'Summer Essentials'];
        const slideSubtitles = ['Discover the latest trends in ethnic fashion', 'Elegant styles for every occasion'];
        sliderContainer.innerHTML = storeData.homepage.heroSliders.map((slide, i) => 
            `<div class="slide">
                <img src="${slide.image}" alt="Slide ${i+1}" class="slide-image">
                <div class="slide-content">
                    <h2 class="slide-title">${slideTitles[i] || 'Welcome'}</h2>
                    <p class="slide-subtitle">${slideSubtitles[i] || ''}</p>
                    <a href="#" class="btn" onclick="event.preventDefault();navigateTo('products')">Shop Now</a>
                </div>
            </div>`
        ).join('');
        sliderNav.innerHTML = storeData.homepage.heroSliders.map((_, i) => 
            `<button class="slider-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></button>`
        ).join('');
        
        initSlider();
    }
    
    // Section Titles
    document.getElementById('newArrivalsTitle').textContent = storeData.homepage.newArrivalsTitle;
    document.getElementById('bestSellersTitle').textContent = storeData.homepage.bestSellersTitle;
    document.getElementById('categoriesTitle').textContent = storeData.homepage.categoriesTitle;
    
    // Products
    loadProducts();
    
    // Categories
    loadCategories();
    
    // Pages
    loadPages();
}

function loadProducts() {
    const newArrivals = storeData.products.filter(p => p.category === 'new-arrivals');
    const bestSellers = storeData.products.filter(p => p.category === 'best-sellers');
    const allProducts = storeData.products;
    
    document.getElementById('newArrivalsGrid').innerHTML = newArrivals.map(p => createProductCard(p)).join('');
    document.getElementById('bestSellersGrid').innerHTML = bestSellers.map(p => createProductCard(p)).join('');
    document.getElementById('allProductsGrid').innerHTML = allProducts.map(p => createProductCard(p)).join('');
}

function createProductCard(product) {
    let badge = '';
    if (product.status === 'sold-out') badge = '<span class="product-badge sold-out">Sold Out</span>';
    else if (product.status === 'on-sale') badge = '<span class="product-badge on-sale">On Sale</span>';
    else if (product.originalPrice) {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        badge = `<span class="product-badge discount">${discount}% OFF</span>`;
    }
    
    const priceHTML = product.originalPrice
        ? `<span class="original">₹${product.originalPrice.toLocaleString()}</span> <span class="sale">₹${product.price.toLocaleString()}</span>`
        : `₹${product.price.toLocaleString()}`;
    
    return `
        <div class="product-card" onclick="showProduct(${product.id})">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                ${badge}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${priceHTML}</div>
            </div>
        </div>
    `;
}

function loadCategories() {
    document.getElementById('categoriesGrid').innerHTML = storeData.categories.map(cat => `
        <div class="category-card" onclick="navigateTo('products')">
            <img src="${cat.image}" alt="${cat.name}" loading="lazy">
            <div class="category-overlay">
                <h3 class="category-title">${cat.name}</h3>
            </div>
        </div>
    `).join('');
}

function loadPages() {
    const about = storeData.pages.about;
    document.getElementById('aboutPageTitle').textContent = about.title;
    document.getElementById('aboutImage').src = about.image;
    document.getElementById('aboutContent').innerHTML = `
        <h2 class="about-section-title">Our Story</h2>
        <p class="about-text">${about.content}</p>
    `;
    document.getElementById('founderImage').src = about.founderImage;
    document.getElementById('founderText').innerHTML = about.founderText.split('. ').map(p => `<p class="about-text">${p}</p>`).join('');
    
    const contact = storeData.pages.contact;
    document.getElementById('contactPageTitle').textContent = contact.title;
    document.getElementById('contactInfo').innerHTML = contact.info;
}

function initSlider() {
    const dots = document.querySelectorAll('.slider-dot');
    const sliderTrack = document.getElementById('heroSlides');
    let currentSlide = 0;
    const totalSlides = dots.length;
    let autoSlideInterval;
    
    function goToSlide(index) {
        currentSlide = index;
        if (sliderTrack) {
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetAutoSlide();
        });
    });
    
    function nextSlide() {
        goToSlide((currentSlide + 1) % totalSlides);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    // Initialize auto slide
    autoSlideInterval = setInterval(nextSlide, 5000);
}

// ===== ADMIN FUNCTIONS =====
function initAdmin() {
    // Check if admin was logged in
    if (sessionStorage.getItem('ruaa-admin') === 'true') {
        isAdminLoggedIn = true;
        showAdminPanel();
    }
    
    // Admin Login
    document.getElementById('adminLoginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('adminPasswordInput').value;
        if (password === storeData.settings.adminPassword) {
            isAdminLoggedIn = true;
            sessionStorage.setItem('ruaa-admin', 'true');
            document.getElementById('adminLoginModal').classList.remove('active');
            showAdminPanel();
            showToast('Welcome to Admin Panel!');
        } else {
            showToast('Incorrect password!');
        }
    });
    
    // Admin Navigation
    document.querySelectorAll('.admin-nav li').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            showAdminSection(section);
        });
    });
    
    // Initialize Size Categories
    renderSizeCategories();
    
    // Admin Header Buttons
    document.getElementById('viewSiteBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideAdminPanel();
    });
    
    document.getElementById('adminLogout')?.addEventListener('click', () => {
        isAdminLoggedIn = false;
        sessionStorage.removeItem('ruaa-admin');
        hideAdminPanel();
        showToast('Logged out');
    });
    
    // Admin Mobile Menu
    document.getElementById('adminMenuToggle')?.addEventListener('click', () => {
        document.getElementById('adminSidebar').classList.toggle('active');
    });
    
    // Product Form
    document.getElementById('productForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        saveProduct();
    });
    
    // Category Form
    document.getElementById('categoryForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        saveCategory();
    });
}

function showAdminPanel() {
    document.getElementById('customerSite').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'flex';
    loadAdminData();
}

function hideAdminPanel() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('customerSite').style.display = 'block';
}

function showAdminSection(section) {
    document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.admin-nav li').forEach(l => l.classList.remove('active'));
    
    document.getElementById(`section-${section}`)?.classList.add('active');
    document.querySelector(`.admin-nav li[data-section="${section}"]`)?.classList.add('active');
    
    // Close mobile sidebar
    document.getElementById('adminSidebar').classList.remove('active');
}

function loadAdminData() {
    // Stats
    document.getElementById('statProducts').textContent = storeData.products.length;
    document.getElementById('statCategories').textContent = storeData.categories.length;
    document.getElementById('statOrders').textContent = cart.length;
    
    // Homepage
    document.getElementById('adminAnnouncement').value = storeData.homepage.announcement;
    document.getElementById('adminAnnouncementEnabled').checked = storeData.homepage.announcementEnabled;
    document.getElementById('adminNewArrivalsTitle').value = storeData.homepage.newArrivalsTitle;
    document.getElementById('adminBestSellersTitle').value = storeData.homepage.bestSellersTitle;
    document.getElementById('adminCategoriesTitle').value = storeData.homepage.categoriesTitle;
    
    // Hero Sliders Admin
    renderHeroSlidersAdmin();
    
    // Products
    renderProductsTable();
    
    // Categories
    renderCategoriesAdmin();
    
    // Pages
    const about = storeData.pages.about;
    document.getElementById('adminAboutTitle').value = about.title;
    document.getElementById('adminAboutImage').value = about.image;
    document.getElementById('adminAboutContent').value = about.content;
    document.getElementById('adminFounderImage').value = about.founderImage;
    document.getElementById('adminFounderText').value = about.founderText;
    
    const contact = storeData.pages.contact;
    document.getElementById('adminContactTitle').value = contact.title;
    document.getElementById('adminContactInfo').value = contact.info;
    
    // Settings
    document.getElementById('adminStoreName').value = storeData.settings.storeName;
    document.getElementById('adminTagline').value = storeData.settings.tagline;
    document.getElementById('adminContactEmail').value = storeData.settings.contactEmail || '';
    document.getElementById('adminAutoReplySubject').value = storeData.settings.autoReplySubject || 'Thank you for contacting Ruaa';
    document.getElementById('adminAutoReplyMessage').value = storeData.settings.autoReplyMessage || 'Thank you for reaching out!';
    
    // Payment Settings
    document.getElementById('paymentCOD').checked = storeData.settings.paymentCOD !== false;
    document.getElementById('paymentUPI').checked = storeData.settings.paymentUPI || false;
    document.getElementById('paymentCard').checked = storeData.settings.paymentCard || false;
    document.getElementById('paymentBank').checked = storeData.settings.paymentBank || false;
}

function renderHeroSlidersAdmin() {
    const container = document.getElementById('heroSlidersAdmin');
    container.innerHTML = storeData.homepage.heroSliders.map((slide, i) => `
        <div class="hero-slide-admin">
            <img src="${slide.image}" alt="Slide ${i+1}">
            <div class="info">
                <input type="text" class="form-input" value="${slide.image}" 
                    onchange="updateHeroSlide(${i}, 'image', this.value)" placeholder="Image URL">
            </div>
            <div class="actions">
                <button class="btn btn-secondary btn-sm" onclick="deleteHeroSlide(${i})">Delete</button>
            </div>
        </div>
    `).join('');
}

function addHeroSlide() {
    storeData.homepage.heroSliders.push({
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
        link: ''
    });
    saveStoreData();
    renderHeroSlidersAdmin();
    showToast('Slide added!');
}

function updateHeroSlide(index, field, value) {
    storeData.homepage.heroSliders[index][field] = value;
    saveStoreData();
}

function deleteHeroSlide(index) {
    if (storeData.homepage.heroSliders.length > 1) {
        storeData.homepage.heroSliders.splice(index, 1);
        saveStoreData();
        renderHeroSlidersAdmin();
        showToast('Slide deleted!');
    } else {
        showToast('Keep at least one slide!');
    }
}

function saveHomepageSettings() {
    storeData.homepage.announcement = document.getElementById('adminAnnouncement').value;
    storeData.homepage.announcementEnabled = document.getElementById('adminAnnouncementEnabled').checked;
    storeData.homepage.newArrivalsTitle = document.getElementById('adminNewArrivalsTitle').value;
    storeData.homepage.bestSellersTitle = document.getElementById('adminBestSellersTitle').value;
    storeData.homepage.categoriesTitle = document.getElementById('adminCategoriesTitle').value;
    
    saveStoreData();
    loadCustomerContent();
    showToast('Homepage settings saved!');
}

function renderProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = storeData.products.map(p => `
        <tr>
            <td><img src="${p.image}" alt="${p.name}"></td>
            <td>${p.name}</td>
            <td>₹${p.price.toLocaleString()}</td>
            <td>${p.category}</td>
            <td><span class="product-badge ${p.status === 'sold-out' ? 'sold-out' : 'on-sale'}">${p.status}</span></td>
            <td class="actions">
                <button class="btn btn-edit btn-sm" onclick="editProduct(${p.id})">Edit</button>
                <button class="btn btn-delete btn-sm" onclick="deleteProduct(${p.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function openProductModal(product = null) {
    editingProductId = product?.id || null;
    document.getElementById('productModalTitle').textContent = product ? 'Edit Product' : 'Add Product';
    
    // Populate size categories
    populateSizeCategorySelect();
    
    document.getElementById('productId').value = product?.id || '';
    document.getElementById('productName').value = product?.name || '';
    document.getElementById('productPrice').value = product?.price || '';
    document.getElementById('productOriginalPrice').value = product?.originalPrice || '';
    document.getElementById('productCategory').value = product?.category || 'new-arrivals';
    document.getElementById('productImage').value = product?.image || '';
    document.getElementById('productDescription').value = product?.description || '';
    
    // Handle size category
    if (product?.sizeCategoryId) {
        document.getElementById('productSizeCategory').value = product.sizeCategoryId;
        document.getElementById('productSizes').value = '';
        toggleSizeInput();
    } else {
        document.getElementById('productSizeCategory').value = '';
        document.getElementById('productSizes').value = product?.sizes?.join(', ') || '';
        toggleSizeInput();
    }
    
    document.getElementById('productStatus').value = product?.status || 'in-stock';
    
    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    editingProductId = null;
}

function editProduct(id) {
    const product = storeData.products.find(p => p.id === id);
    if (product) openProductModal(product);
}

function saveProduct() {
    const name = document.getElementById('productName').value;
    const price = parseInt(document.getElementById('productPrice').value);
    const originalPrice = parseInt(document.getElementById('productOriginalPrice').value) || null;
    const category = document.getElementById('productCategory').value;
    const image = document.getElementById('productImage').value;
    const description = document.getElementById('productDescription').value;
    const sizeCategoryId = document.getElementById('productSizeCategory').value ? parseInt(document.getElementById('productSizeCategory').value) : null;
    const sizes = sizeCategoryId ? [] : document.getElementById('productSizes').value.split(',').map(s => s.trim()).filter(s => s);
    const status = document.getElementById('productStatus').value;
    
    if (!name || !price || !image) {
        showToast('Please fill all required fields!');
        return;
    }
    
    if (editingProductId) {
        const index = storeData.products.findIndex(p => p.id === editingProductId);
        if (index !== -1) {
            storeData.products[index] = {
                ...storeData.products[index],
                name, price, originalPrice, category, image, description, sizeCategoryId, sizes, status
            };
        }
    } else {
        const newProduct = {
            id: Date.now(),
            name, price, originalPrice, category, image, images: [], description, sizeCategoryId, sizes, status
        };
        storeData.products.push(newProduct);
    }
    
    saveStoreData();
    loadCustomerContent();
    renderProductsTable();
    closeProductModal();
    showToast('Product saved!');
}

function deleteProduct(id) {
    if (confirm('Delete this product?')) {
        storeData.products = storeData.products.filter(p => p.id !== id);
        saveStoreData();
        loadCustomerContent();
        renderProductsTable();
        showToast('Product deleted!');
    }
}

function renderCategoriesAdmin() {
    const container = document.getElementById('categoriesAdminGrid');
    container.innerHTML = storeData.categories.map(cat => `
        <div class="category-admin-card">
            <img src="${cat.image}" alt="${cat.name}">
            <div class="info">
                <h3>${cat.name}</h3>
                <div class="actions">
                    <button class="btn btn-edit btn-sm" onclick="editCategory(${cat.id})">Edit</button>
                    <button class="btn btn-delete btn-sm" onclick="deleteCategory(${cat.id})">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openCategoryModal(category = null) {
    editingCategoryId = category?.id || null;
    document.getElementById('categoryModalTitle').textContent = category ? 'Edit Category' : 'Add Category';
    document.getElementById('categoryName').value = category?.name || '';
    document.getElementById('categoryImage').value = category?.image || '';
    document.getElementById('categoryModal').classList.add('active');
}

function closeCategoryModal() {
    document.getElementById('categoryModal').classList.remove('active');
    editingCategoryId = null;
}

function editCategory(id) {
    const category = storeData.categories.find(c => c.id === id);
    if (category) openCategoryModal(category);
}

function saveCategory() {
    const name = document.getElementById('categoryName').value;
    const image = document.getElementById('categoryImage').value;
    
    if (!name || !image) {
        showToast('Please fill all fields!');
        return;
    }
    
    if (editingCategoryId) {
        const index = storeData.categories.findIndex(c => c.id === editingCategoryId);
        if (index !== -1) {
            storeData.categories[index] = { ...storeData.categories[index], name, image };
        }
    } else {
        storeData.categories.push({ id: Date.now(), name, image });
    }
    
    saveStoreData();
    loadCustomerContent();
    renderCategoriesAdmin();
    closeCategoryModal();
    showToast('Category saved!');
}

function deleteCategory(id) {
    if (confirm('Delete this category?')) {
        storeData.categories = storeData.categories.filter(c => c.id !== id);
        saveStoreData();
        loadCustomerContent();
        renderCategoriesAdmin();
        showToast('Category deleted!');
    }
}

// ===== SIZE CATEGORIES =====
let editingSizeCategoryId = null;

function renderSizeCategories() {
    const container = document.getElementById('sizeCategoriesAdminGrid');
    if (!container) return;
    
    if (!storeData.sizeCategories || storeData.sizeCategories.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light); text-align: center; padding: 40px;">No size categories yet. Click + to add one.</p>';
        return;
    }
    
    container.innerHTML = storeData.sizeCategories.map(sc => `
        <div class="category-card">
            <h3>${sc.name}</h3>
            ${sc.description ? `<p style="color: var(--text-light); font-size: 13px; margin-bottom: 8px;">${sc.description}</p>` : ''}
            <div class="sizes-preview">
                ${sc.sizes.map(s => `<span class="size-chip">${s}</span>`).join('')}
            </div>
            <div class="category-actions">
                <button class="btn btn-sm" onclick="editSizeCategory(${sc.id})">Edit</button>
                <button class="btn btn-delete btn-sm" onclick="deleteSizeCategory(${sc.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function openSizeCategoryModal(id = null) {
    editingSizeCategoryId = id;
    const modal = document.getElementById('sizeCategoryModal');
    const title = document.getElementById('sizeCategoryModalTitle');
    
    if (id) {
        const sc = storeData.sizeCategories.find(s => s.id === id);
        title.textContent = 'Edit Size Category';
        document.getElementById('sizeCategoryName').value = sc.name;
        document.getElementById('sizeCategorySizes').value = sc.sizes.join(', ');
        document.getElementById('sizeCategoryDesc').value = sc.description || '';
    } else {
        title.textContent = 'Add Size Category';
        document.getElementById('sizeCategoryName').value = '';
        document.getElementById('sizeCategorySizes').value = '';
        document.getElementById('sizeCategoryDesc').value = '';
    }
    
    modal.classList.add('active');
}

function closeSizeCategoryModal() {
    document.getElementById('sizeCategoryModal').classList.remove('active');
    editingSizeCategoryId = null;
}

function saveSizeCategory(e) {
    e.preventDefault();
    
    const name = document.getElementById('sizeCategoryName').value.trim();
    const sizesStr = document.getElementById('sizeCategorySizes').value.trim();
    const description = document.getElementById('sizeCategoryDesc').value.trim();
    
    if (!name || !sizesStr) {
        showToast('Please fill required fields');
        return;
    }
    
    const sizes = sizesStr.split(/[,]+/).map(s => s.trim()).filter(s => s);
    
    if (sizes.length === 0) {
        showToast('Please enter at least one size');
        return;
    }
    
    if (editingSizeCategoryId) {
        const index = storeData.sizeCategories.findIndex(s => s.id === editingSizeCategoryId);
        storeData.sizeCategories[index] = { 
            ...storeData.sizeCategories[index], 
            name, 
            sizes, 
            description 
        };
    } else {
        storeData.sizeCategories.push({ 
            id: Date.now(), 
            name, 
            sizes, 
            description 
        });
    }
    
    saveStoreData();
    renderSizeCategories();
    populateSizeCategorySelect();
    closeSizeCategoryModal();
    showToast('Size category saved!');
}

function editSizeCategory(id) {
    openSizeCategoryModal(id);
}

function deleteSizeCategory(id) {
    if (confirm('Delete this size category?')) {
        storeData.sizeCategories = storeData.sizeCategories.filter(s => s.id !== id);
        saveStoreData();
        renderSizeCategories();
        populateSizeCategorySelect();
        showToast('Size category deleted');
    }
}

function populateSizeCategorySelect() {
    const select = document.getElementById('productSizeCategory');
    if (!select) return;
    
    select.innerHTML = '<option value="">-- Select Size Category --</option>';
    
    if (storeData.sizeCategories) {
        storeData.sizeCategories.forEach(sc => {
            const option = document.createElement('option');
            option.value = sc.id;
            option.textContent = sc.name;
            select.appendChild(option);
        });
    }
}

function toggleSizeInput() {
    const select = document.getElementById('productSizeCategory');
    const customGroup = document.getElementById('customSizesGroup');
    
    if (select.value) {
        customGroup.style.opacity = '0.5';
        customGroup.style.pointerEvents = 'none';
    } else {
        customGroup.style.opacity = '1';
        customGroup.style.pointerEvents = 'auto';
    }
}

function getProductSizes(product) {
    if (product.sizeCategoryId) {
        const sc = storeData.sizeCategories?.find(s => s.id === product.sizeCategoryId);
        if (sc) return sc.sizes;
    }
    return product.sizes || [];
}

function savePagesSettings() {
    storeData.pages.about = {
        title: document.getElementById('adminAboutTitle').value,
        image: document.getElementById('adminAboutImage').value,
        content: document.getElementById('adminAboutContent').value,
        founderImage: document.getElementById('adminFounderImage').value,
        founderText: document.getElementById('adminFounderText').value
    };
    
    storeData.pages.contact = {
        title: document.getElementById('adminContactTitle').value,
        info: document.getElementById('adminContactInfo').value
    };
    
    saveStoreData();
    loadCustomerContent();
    showToast('Pages saved!');
}

function saveSettings() {
    storeData.settings.storeName = document.getElementById('adminStoreName').value;
    storeData.settings.tagline = document.getElementById('adminTagline').value;
    storeData.settings.contactEmail = document.getElementById('adminContactEmail').value;
    storeData.settings.autoReplySubject = document.getElementById('adminAutoReplySubject').value;
    storeData.settings.autoReplyMessage = document.getElementById('adminAutoReplyMessage').value;
    
    // Payment Settings
    storeData.settings.paymentCOD = document.getElementById('paymentCOD').checked;
    storeData.settings.paymentUPI = document.getElementById('paymentUPI').checked;
    storeData.settings.paymentCard = document.getElementById('paymentCard').checked;
    storeData.settings.paymentBank = document.getElementById('paymentBank').checked;
    
    const newPassword = document.getElementById('adminNewPassword').value;
    if (newPassword) {
        storeData.settings.adminPassword = newPassword;
        showToast('Password updated!');
    }
    
    saveStoreData();
    loadCustomerContent();
    showToast('Settings saved!');
}

// ===== UTILITY =====
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Admin access via URL parameter
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('admin') === 'true') {
    document.getElementById('adminLoginModal').classList.add('active');
}

// Qty buttons
document.addEventListener('click', (e) => {
    if (e.target.id === 'qtyMinus') {
        const input = document.getElementById('qtyInput');
        input.value = Math.max(1, parseInt(input.value) - 1);
    }
    if (e.target.id === 'qtyPlus') {
        const input = document.getElementById('qtyInput');
        input.value = parseInt(input.value) + 1;
    }
});

// ===== IMAGE UPLOAD & PROCESSING =====
let currentCropImage = null;
let currentCropCanvas = null;

function initImageUpload() {
    const uploadArea = document.getElementById('imageUploadArea');
    const uploadInput = document.getElementById('imageUploadInput');
    
    if (!uploadArea || !uploadInput) return;
    
    uploadArea.addEventListener('click', () => uploadInput.click());
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            processImageUpload(file);
        }
    });
    
    uploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            processImageUpload(file);
        }
    });
    
    renderUploadedImages();
}

function processImageUpload(file) {
    if (file.size > 5 * 1024 * 1024) {
        showToast('Image too large! Max 5MB allowed.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            openCropModal(img);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function openCropModal(img) {
    const modal = document.getElementById('cropModal');
    const cropImg = document.getElementById('cropImage');
    
    // Create canvas for processing
    currentCropCanvas = document.createElement('canvas');
    const ctx = currentCropCanvas.getContext('2d');
    
    // Set canvas size (max 1200px for optimization)
    const maxSize = 1200;
    let width = img.width;
    let height = img.height;
    
    if (width > maxSize || height > maxSize) {
        if (width > height) {
            height = (height / width) * maxSize;
            width = maxSize;
        } else {
            width = (width / height) * maxSize;
            height = maxSize;
        }
    }
    
    currentCropCanvas.width = width;
    currentCropCanvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    
    currentCropImage = img;
    cropImg.src = currentCropCanvas.toDataURL('image/jpeg', 0.9);
    modal.classList.add('active');
}

function closeCropModal() {
    const modal = document.getElementById('cropModal');
    modal.classList.remove('active');
    currentCropImage = null;
    currentCropCanvas = null;
}

function cropAndSaveImage() {
    if (!currentCropCanvas) return;
    
    // Create square crop from center
    const size = Math.min(currentCropCanvas.width, currentCropCanvas.height);
    const cropCanvas = document.createElement('canvas');
    cropCanvas.width = 800; // Standard size for web
    cropCanvas.height = 800;
    const ctx = cropCanvas.getContext('2d');
    
    // Center crop
    const sx = (currentCropCanvas.width - size) / 2;
    const sy = (currentCropCanvas.height - size) / 2;
    ctx.drawImage(currentCropCanvas, sx, sy, size, size, 0, 0, 800, 800);
    
    // Save as WebP for optimization
    const dataUrl = cropCanvas.toDataURL('image/webp', 0.85);
    
    // Save to storeData
    if (!storeData.images) storeData.images = [];
    storeData.images.push({
        id: Date.now(),
        name: `img_${Date.now()}.webp`,
        data: dataUrl,
        created: new Date().toISOString()
    });
    
    saveStoreData();
    renderUploadedImages();
    closeCropModal();
    showToast('Image uploaded and optimized!');
}

function renderUploadedImages() {
    const container = document.getElementById('uploadedImages');
    if (!container) return;
    
    if (!storeData.images || storeData.images.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light); text-align: center;">No images uploaded yet</p>';
        return;
    }
    
    container.innerHTML = storeData.images.map(img => `
        <div class="uploaded-image">
            <img src="${img.data}" alt="${img.name}">
            <div class="uploaded-image-actions">
                <button onclick="copyImageUrl('${img.data}')">Copy</button>
                <button onclick="deleteImage(${img.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function copyImageUrl(dataUrl) {
    navigator.clipboard.writeText(dataUrl).then(() => {
        showToast('Image URL copied!');
    }).catch(() => {
        showToast('Copied to clipboard');
    });
}

function deleteImage(id) {
    if (confirm('Delete this image?')) {
        storeData.images = storeData.images.filter(img => img.id !== id);
        saveStoreData();
        renderUploadedImages();
        showToast('Image deleted');
    }
}

// Initialize image upload
setTimeout(initImageUpload, 500);

// ===== CUSTOMER AUTHENTICATION =====
let currentCustomer = null;
let pendingRegistration = null;
let currentOTP = null;

// Customer storage
function getCustomers() {
    const data = localStorage.getItem('ruaa-customers');
    return data ? JSON.parse(data) : [];
}

function saveCustomers(customers) {
    localStorage.setItem('ruaa-customers', JSON.stringify(customers));
}

function getCurrentCustomer() {
    const data = sessionStorage.getItem('ruaa-customer');
    return data ? JSON.parse(data) : null;
}

function setCurrentCustomer(customer) {
    if (customer) {
        sessionStorage.setItem('ruaa-customer', JSON.stringify(customer));
    } else {
        sessionStorage.removeItem('ruaa-customer');
    }
    currentCustomer = customer;
    updateAccountIcon();
}

// Update account icon based on login status
function updateAccountIcon() {
    const icon = document.getElementById('accountIcon');
    if (icon) {
        if (currentCustomer) {
            icon.innerHTML = `<span style="color: var(--accent); font-weight: 600;">${currentCustomer.name.charAt(0).toUpperCase()}</span>`;
        } else {
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`;
        }
    }
}

// Switch between login/register tabs
function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-content').forEach(c => c.classList.remove('active'));
    
    document.querySelector(`.auth-tab[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(`${tab}Content`).classList.add('active');
}

// Show account content
function showAccountContent() {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-content').forEach(c => c.classList.remove('active'));
    document.getElementById('accountContent').classList.add('active');
    
    const customer = getCurrentCustomer();
    if (customer) {
        document.getElementById('accountName').textContent = customer.name;
        document.getElementById('accountEmail').textContent = customer.email;
    }
}

// Generate OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP (mock - in production, use email service)
function sendOTP(email, otp, type) {
    // In production, integrate with email service like SendGrid, Mailgun, etc.
    // For demo, we'll use mailto as fallback
    const subject = encodeURIComponent(`Your ${storeData.settings.storeName} Verification Code`);
    const body = encodeURIComponent(`Your verification code is: ${otp}\n\nThis code expires in 10 minutes.\n\nIf you didn't request this, please ignore this email.`);
    
    // Store OTP temporarily
    sessionStorage.setItem('ruaa-otp', JSON.stringify({
        code: otp,
        email: email,
        type: type,
        expires: Date.now() + 600000 // 10 minutes
    }));
    
    // For demo: show OTP in console and toast
    console.log(`OTP for ${email}: ${otp}`);
    showToast(`Demo: OTP sent to ${email} - Code: ${otp}`);
    
    // Open email client as fallback
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
}

// Resend OTP
function resendOTP() {
    const stored = JSON.parse(sessionStorage.getItem('ruaa-otp') || '{}');
    if (stored.email) {
        const newOTP = generateOTP();
        sendOTP(stored.email, newOTP, stored.type);
        showToast('New OTP sent!');
    }
}

// Customer Login
function customerLogin(email, password) {
    const customers = getCustomers();
    const customer = customers.find(c => c.email === email && c.password === password);
    
    if (customer) {
        if (!customer.verified) {
            // Send OTP for verification
            const otp = generateOTP();
            sendOTP(email, otp, 'login');
            
            pendingRegistration = { email, password, name: customer.name };
            document.getElementById('otpEmail').textContent = email;
            switchAuthTab('otp');
            showToast('Verification required. Check your email.');
            return;
        }
        
        setCurrentCustomer(customer);
        showAccountContent();
        showToast('Welcome back!');
        navigateTo('home');
    } else {
        throw new Error('Invalid email or password');
    }
}

// Customer Registration
function customerRegister(name, email, password) {
    const customers = getCustomers();
    
    // Check if email exists
    if (customers.find(c => c.email === email)) {
        throw new Error('Email already registered');
    }
    
    // Generate OTP
    const otp = generateOTP();
    sendOTP(email, otp, 'register');
    
    // Store pending registration
    pendingRegistration = { name, email, password };
    document.getElementById('otpEmail').textContent = email;
    switchAuthTab('otp');
    showToast('Verification code sent to your email.');
}

// Verify OTP
function verifyOTP(otp) {
    const stored = JSON.parse(sessionStorage.getItem('ruaa-otp') || '{}');
    
    if (!stored.code || Date.now() > stored.expires) {
        throw new Error('OTP expired. Please request a new one.');
    }
    
    if (otp !== stored.code) {
        throw new Error('Invalid OTP. Please try again.');
    }
    
    // OTP valid
    sessionStorage.removeItem('ruaa-otp');
    
    if (stored.type === 'register' && pendingRegistration) {
        // Create customer account
        const customers = getCustomers();
        const newCustomer = {
            id: Date.now(),
            name: pendingRegistration.name,
            email: pendingRegistration.email,
            password: pendingRegistration.password,
            verified: true,
            created: new Date().toISOString(),
            addresses: [],
            orders: []
        };
        
        customers.push(newCustomer);
        saveCustomers(customers);
        
        setCurrentCustomer(newCustomer);
        showAccountContent();
        showToast('Account created successfully!');
        navigateTo('home');
        
        pendingRegistration = null;
    } else if (stored.type === 'login' && pendingRegistration) {
        // Mark as verified and login
        const customers = getCustomers();
        const idx = customers.findIndex(c => c.email === pendingRegistration.email);
        if (idx !== -1) {
            customers[idx].verified = true;
            saveCustomers(customers);
        }
        
        setCurrentCustomer(customers[idx]);
        showAccountContent();
        showToast('Email verified! Welcome!');
        navigateTo('home');
        
        pendingRegistration = null;
    }
}

// Logout
function logout() {
    setCurrentCustomer(null);
    switchAuthTab('login');
    document.getElementById('customerLoginForm').reset();
    showToast('Logged out successfully');
    navigateTo('home');
}

// Shopify Login (mock)
function loginWithShopify() {
    // In production, integrate with Shopify's OAuth
    // For demo, create a mock Shopify customer
    showToast('Shopify login would redirect to Shopify OAuth');
    
    // Demo: Auto-create Shopify customer
    const mockShopifyCustomer = {
        id: 'shopify_' + Date.now(),
        name: 'Shopify User',
        email: 'shopify.user@shop.com',
        verified: true,
        source: 'shopify',
        created: new Date().toISOString()
    };
    
    setCurrentCustomer(mockShopifyCustomer);
    showAccountContent();
    showToast('Logged in via Shopify (Demo)');
    navigateTo('home');
}

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for existing session
    currentCustomer = getCurrentCustomer();
    updateAccountIcon();
    updateLoginButton();
    
    // Auth tab switching
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
    });
    
    // Customer login form
    document.getElementById('customerLoginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        try {
            customerLogin(email, password);
        } catch (err) {
            showToast(err.message);
        }
    });
    
    // Registration form
    document.getElementById('registerForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        try {
            customerRegister(name, email, password);
        } catch (err) {
            showToast(err.message);
        }
    });
    
    // OTP form
    document.getElementById('otpForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const otp = document.getElementById('otpCode').value;
        try {
            verifyOTP(otp);
        } catch (err) {
            showToast(err.message);
        }
    });
    
    // Account modal/icon click
    document.getElementById('loginBtn')?.addEventListener('click', (e) => {
        if (currentCustomer) {
            e.preventDefault();
            showAccountContent();
            navigateTo('login');
        }
    });
});

function updateLoginButton() {
    const btn = document.getElementById('loginBtn');
    if (btn) {
        if (currentCustomer) {
            btn.textContent = 'My Account';
        } else {
            btn.textContent = 'Login';
        }
    }
}

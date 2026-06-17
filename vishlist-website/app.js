// Ruaa - E-Commerce Application

// Product Data
const products = [
    // New Arrivals
    {
        id: 1,
        name: "Shifa Pakistani Farshi Salwar Suit 11",
        price: 1650,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/0BE8D51F-5406-4517-8499-396F73BEDA3D.jpg?v=1781429428&width=533",
            "https://thevishlist.com/cdn/shop/files/2A637DB8-864A-4584-9CE3-FE8F72C91D99.jpg?v=1781429428&width=533",
            "https://thevishlist.com/cdn/shop/files/02D2AE07-1636-4EA5-96E9-175FED467046.jpg?v=1781429428&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true },
            { name: "L (Chest 40)", available: false },
            { name: "XL (Chest 42)", available: false },
            { name: "XXL (Chest 44)", available: false }
        ],
        description: "Get ready to rock the summer in style with the <strong>Shifa Pakistani Farshi Salwar Suit.</strong> This fully stitched farshi salwar suit is crafted from breathable cotton and paired with a beautiful self-work dupatta, keeping you cool while you turn heads.",
        category: "new-arrivals",
        soldOut: false
    },
    {
        id: 2,
        name: "Shifa Pakistani Suit 10",
        price: 1850,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/F49FC180-D506-4C16-8E58-655D4FC236E5.jpg?v=1781429428&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Elegant Pakistani suit crafted with premium fabric for a sophisticated look.",
        category: "new-arrivals",
        soldOut: false
    },
    {
        id: 3,
        name: "Shifa Pakistani Farshi Salwar Suit 09",
        price: 1950,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/11F5A3BD-405F-4FC0-B8EF-919EBCD57322.jpg?v=1781429428&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Stunning farshi salwar suit perfect for festive occasions.",
        category: "new-arrivals",
        soldOut: false
    },
    {
        id: 4,
        name: "Shifa Pakistani Farshi Salwar Suit 08",
        price: 1950,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/E1083C7D-03C2-40A8-B0F3-98542300642E.jpg?v=1781429428&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Beautiful farshi salwar suit with intricate detailing.",
        category: "new-arrivals",
        soldOut: false
    },
    {
        id: 5,
        name: "Shifa Pakistani A-line Suit 07",
        price: 2499,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/D2FC03E3-A374-42B2-8AE9-AC8076371A99.jpg?v=1781429429&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Chic A-line suit for the modern woman.",
        category: "new-arrivals",
        soldOut: true
    },
    {
        id: 6,
        name: "Shifa Pakistani A-line Suit 06",
        price: 2499,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/CE3668C3-BF7D-4056-9C21-3C74EAA50478.jpg?v=1781429428&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Elegant A-line silhouette with premium fabric.",
        category: "new-arrivals",
        soldOut: true
    },
    {
        id: 7,
        name: "Shifa Pakistani Farshi Salwar Suit 05",
        price: 1499,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/FDA5A7A5-35B4-46D5-8DE4-5FD3B34ACFAE.jpg?v=1781429428&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Budget-friendly farshi salwar suit with style.",
        category: "new-arrivals",
        soldOut: false
    },
    {
        id: 8,
        name: "Shifa Pakistani Farshi Salwar Suit 04",
        price: 1499,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/37B162DC-8502-483C-A219-43EFDC265592.jpg?v=1781429428&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Classic farshi salwar suit design.",
        category: "new-arrivals",
        soldOut: true
    },
    // Best Sellers
    {
        id: 9,
        name: "Mahenoor Pakistani Formal Set 01",
        price: 2250,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/78BF4754-E289-4F0C-9101-A2641FB20FB7.jpg?v=1756638758&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Premium formal set for special occasions.",
        category: "best-sellers",
        soldOut: false
    },
    {
        id: 10,
        name: "Dananeer Pakistani Luxe Lawn Set 05",
        price: 2350,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/400357B0-56E2-457A-8A39-76CD04DD43B8.jpg?v=1773332093&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Luxe lawn collection for summer elegance.",
        category: "best-sellers",
        soldOut: false
    },
    {
        id: 11,
        name: "Anah Pakistani Lawn Set 06",
        price: 2350,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/C8F430AE-E52D-4B00-8828-B70BB0DAF935.jpg?v=1768478044&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Beautiful lawn set with delicate embroidery.",
        category: "best-sellers",
        soldOut: false
    },
    {
        id: 12,
        name: "Shafa Pakistani Farshi Salwar Set 05",
        price: 2250,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/1A2E82FC-79CF-47CE-8640-EE9B1A894267.jpg?v=1772802213&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Trendy farshi salwar set with modern design.",
        category: "best-sellers",
        soldOut: false
    },
    {
        id: 13,
        name: "Masoom Pakistani Lawn Set 01",
        price: 1950,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/901375C2-2214-484B-9D4D-0EF0D1EA15CD.jpg?v=1769944805&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Classic lawn set for everyday elegance.",
        category: "best-sellers",
        soldOut: false
    },
    {
        id: 14,
        name: "Masoom Pakistani Lawn Set 02",
        price: 1950,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/7C4E14CE-BCD5-4173-B973-11300B33DA32.jpg?v=1769944704&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Elegant lawn set with subtle detailing.",
        category: "best-sellers",
        soldOut: false
    },
    {
        id: 15,
        name: "Sonal Pakistani Formal Set 01",
        price: 1950,
        originalPrice: 2250,
        images: [
            "https://thevishlist.com/cdn/shop/files/EBBFD8B9-D878-4184-9654-21B69F9F65EF.jpg?v=1773157666&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Formal set with 13% OFF - limited time offer!",
        category: "best-sellers",
        soldOut: false,
        discount: 13
    },
    {
        id: 16,
        name: "Zifra Pakistani Formal Set 06",
        price: 2499,
        originalPrice: null,
        images: [
            "https://thevishlist.com/cdn/shop/files/060E43C4-757B-4DD1-B6C5-EE93CB5146A8.jpg?v=1773071990&width=533"
        ],
        sizes: [
            { name: "Free size upto M", available: true }
        ],
        description: "Premium formal set with intricate work.",
        category: "best-sellers",
        soldOut: false
    }
];

// Categories Data
const categories = [
    {
        id: 1,
        name: "Pakistani Lawn Suits",
        image: "https://thevishlist.com/cdn/shop/files/0BE8D51F-5406-4517-8499-396F73BEDA3D.jpg?v=1781429428&width=1500",
        link: "pakistani-lawn"
    },
    {
        id: 2,
        name: "Pakistani Formals",
        image: "https://thevishlist.com/cdn/shop/files/99578ED4-41C3-4369-BE0A-BF31C76A45B8.jpg?v=1780832730&width=1500",
        link: "pakistani-formals"
    },
    {
        id: 3,
        name: "Co-ord Sets",
        image: "https://thevishlist.com/cdn/shop/files/0BE8D51F-5406-4517-8499-396F73BEDA3D.jpg?v=1781429428&width=1500",
        link: "co-ord-sets"
    },
    {
        id: 4,
        name: "Indo Western Collection",
        image: "https://thevishlist.com/cdn/shop/files/184B2312-527B-48A1-A03A-2C4D607BB51B.jpg?v=1768734895&width=1500",
        link: "indo-western"
    },
    {
        id: 5,
        name: "Pakistani Silk Suits",
        image: "https://thevishlist.com/cdn/shop/files/99578ED4-41C3-4369-BE0A-BF31C76A45B8.jpg?v=1780832730&width=1500",
        link: "silk-suits"
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('vishlist-cart')) || [];
let currentProduct = null;
let selectedSize = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSlider();
    initMobileMenu();
    initSearch();
    initNewsletter();
    initCart();
    initProductDetail();
    loadContent();
    updateCartCount();
});

// Navigation
function initNavigation() {
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            navigateTo(page);
        });
    });
}

function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    // Show target page
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Close mobile menu
    document.getElementById('mobileNav').classList.remove('active');
}

// Slider
function initSlider() {
    const dots = document.querySelectorAll('.slider-dot');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
    
    function updateSlider() {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    // Auto-advance
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }, 5000);
}

// Mobile Menu
function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mobileNav');
    
    btn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    
    // Close on link click
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// Search
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchModal.querySelector('.search-input').focus();
    });
    
    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });
    
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });
}

// Newsletter
function initNewsletter() {
    const forms = document.querySelectorAll('.newsletter-form, .footer-newsletter-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input.value) {
                showToast('Successfully subscribed!');
                input.value = '';
            }
        });
    });
}

// Cart
function initCart() {
    document.getElementById('cartBtn').addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('cart');
        renderCart();
    });
    
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent successfully!');
        e.target.reset();
    });
    
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Login functionality coming soon!');
    });
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function addToCart(productId, size, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            size: size,
            quantity: quantity
        });
    }
    
    localStorage.setItem('vishlist-cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Added to cart!');
}

function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    localStorage.setItem('vishlist-cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Product Detail
function initProductDetail() {
    document.getElementById('qtyMinus').addEventListener('click', () => {
        const input = document.getElementById('qtyInput');
        input.value = Math.max(1, parseInt(input.value) - 1);
    });
    
    document.getElementById('qtyPlus').addEventListener('click', () => {
        const input = document.getElementById('qtyInput');
        input.value = parseInt(input.value) + 1;
    });
    
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        if (currentProduct && selectedSize) {
            const quantity = parseInt(document.getElementById('qtyInput').value);
            addToCart(currentProduct.id, selectedSize, quantity);
        } else {
            showToast('Please select a size');
        }
    });
}

// Load Content
function loadContent() {
    loadNewArrivals();
    loadBestSellers();
    loadCategories();
    loadAllProducts();
}

function loadNewArrivals() {
    const grid = document.getElementById('newArrivalsGrid');
    const newArrivals = products.filter(p => p.category === 'new-arrivals');
    grid.innerHTML = newArrivals.map(product => createProductCard(product)).join('');
}

function loadBestSellers() {
    const grid = document.getElementById('bestSellersGrid');
    const bestSellers = products.filter(p => p.category === 'best-sellers');
    grid.innerHTML = bestSellers.map(product => createProductCard(product)).join('');
}

function loadCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categories.map(category => `
        <div class="category-card" data-page="${category.link}">
            <img src="${category.image}" alt="${category.name}">
            <div class="category-overlay">
                <h3 class="category-title">${category.name}</h3>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    grid.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            navigateTo('products');
        });
    });
}

function loadAllProducts() {
    const grid = document.getElementById('allProductsGrid');
    grid.innerHTML = products.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const badge = product.soldOut ? 
        '<span class="product-badge sold-out">Sold out</span>' :
        product.discount ?
        `<span class="product-badge discount">${product.discount}% OFF</span>` : '';
    
    const priceHTML = product.originalPrice ?
        `<span class="original">Rs. ${product.originalPrice.toLocaleString()}.00</span>
         <span class="sale">Rs. ${product.price.toLocaleString()}.00</span>` :
        `<span>Rs. ${product.price.toLocaleString()}.00</span>`;
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                ${badge}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${priceHTML}</div>
            </div>
        </div>
    `;
}

function renderCart() {
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="cart-empty">
                <h2>Your cart is empty</h2>
                <p>Add items to your cart to checkout</p>
                <a href="#" class="btn btn-primary" data-page="products">Continue shopping</a>
            </div>
        `;
        return;
    }
    
    let total = 0;
    const itemsHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <img src="${product.images[0]}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p>Size: ${item.size}</p>
                    <p>Qty: ${item.quantity}</p>
                </div>
                <div class="cart-item-price">
                    <p>Rs. ${itemTotal.toLocaleString()}.00</p>
                    <button onclick="removeFromCart(${item.id}, '${item.size}')" style="background: none; border: none; color: #c44536; cursor: pointer; margin-top: 10px;">Remove</button>
                </div>
            </div>
        `;
    }).join('');
    
    cartContent.innerHTML = `
        <a href="#" class="section-link" data-page="products" style="display: inline-block; margin-bottom: 30px;">← Continue shopping</a>
        ${itemsHTML}
        <div class="cart-summary">
            <p><strong>Estimated total:</strong> Rs. ${total.toLocaleString()}.00</p>
            <p style="font-size: 14px; color: #666;">Taxes included. Discounts and shipping calculated at checkout.</p>
            <button class="btn btn-primary">Check out</button>
        </div>
    `;
}

// Show Product Detail
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    selectedSize = null;
    
    // Set images
    document.getElementById('galleryMainImage').src = product.images[0];
    document.getElementById('galleryMainImage').alt = product.name;
    
    // Set thumbs
    const thumbs = document.getElementById('galleryThumbs');
    thumbs.innerHTML = product.images.map((img, i) => `
        <img src="${img}" alt="${product.name}" class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">
    `).join('');
    
    // Set info
    document.getElementById('productTitle').textContent = product.name;
    
    const priceHTML = product.originalPrice ?
        `<span class="original" style="text-decoration: line-through; margin-right: 15px; color: #666;">Rs. ${product.originalPrice.toLocaleString()}.00</span>
         <span style="color: #c44536;">Rs. ${product.price.toLocaleString()}.00</span>` :
        `Rs. ${product.price.toLocaleString()}.00`;
    document.getElementById('productPrice').innerHTML = priceHTML;
    
    // Set sizes
    const sizes = document.getElementById('sizeOptions');
    sizes.innerHTML = product.sizes.map((size, i) => `
        <button class="size-option ${!size.available ? 'disabled' : ''} ${i === 0 && size.available ? 'active' : ''}" 
                ${!size.available ? 'disabled' : ''}
                onclick="selectSize('${size.name}', this)">
            ${size.name}
        </button>
    `).join('');
    
    if (product.sizes[0].available) {
        selectedSize = product.sizes[0].name;
    }
    
    // Set description
    document.getElementById('productDescription').innerHTML = product.description;
    
    // Reset quantity
    document.getElementById('qtyInput').value = 1;
    
    // Navigate to page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-product-detail').classList.add('active');
    window.scrollTo(0, 0);
}

function changeImage(src, thumb) {
    document.getElementById('galleryMainImage').src = src;
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

function selectSize(size, btn) {
    document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = size;
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Product card click handler
document.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card) {
        const productId = parseInt(card.dataset.productId);
        showProductDetail(productId);
    }
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuClose = document.getElementById('menu-close');
    const menuOverlay = document.getElementById('menu-overlay');

    // Search functionality
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchProductsGrid = document.getElementById('search-products-grid');

    // Base de datos de productos para búsqueda
    const productsDatabase = [
        {
            id: 1,
            name: "CAMISETA DALIX ORIGINAL",
            price: "45.000",
            originalPrice: null,
            image: "public/img/RopaDalix1.jpg",
            keywords: ["camiseta", "dalix", "original", "cam", "shirt", "basica"]
        },
        {
            id: 2,
            name: "HOODIE DALIX PREMIUM",
            price: "85.000",
            originalPrice: null,
            image: "public/img/RopaDalix2.jpg",
            keywords: ["hoodie", "dalix", "premium", "sudaderas", "abrigo"]
        },
        {
            id: 3,
            name: "CAMISETA DALIX VINTAGE",
            price: "42.000",
            originalPrice: null,
            image: "public/img/RopaDalix3.jpg",
            keywords: ["camiseta", "dalix", "vintage", "retro", "cam", "shirt"]
        },
        {
            id: 4,
            name: "SUDADERA DALIX CLÁSICA",
            price: "65.000",
            originalPrice: null,
            image: "public/img/RopaDalix4.jpg",
            keywords: ["sudadera", "dalix", "clasica", "abrigo", "sweater"]
        },
        {
            id: 5,
            name: "CAMISETA DALIX MINIMALISTA",
            price: "38.000",
            originalPrice: null,
            image: "public/img/RopaDalix5.jpg",
            keywords: ["camiseta", "dalix", "minimalista", "simple", "cam", "shirt"]
        },
        {
            id: 6,
            name: "HOODIE DALIX OVERSIZE",
            price: "90.000",
            originalPrice: null,
            image: "public/img/RopaDalix6.jpg",
            keywords: ["hoodie", "dalix", "oversize", "grande", "abrigo"]
        },
        {
            id: 7,
            name: "CAMISETA DALIX ESTAMPADA",
            price: "48.000",
            originalPrice: null,
            image: "public/img/RopaDalix7.jpg",
            keywords: ["camiseta", "dalix", "estampada", "diseño", "cam", "shirt"]
        },
        {
            id: 8,
            name: "SUDADERA DALIX DEPORTIVA",
            price: "70.000",
            originalPrice: null,
            image: "public/img/RopaDalix8.jpg",
            keywords: ["sudadera", "dalix", "deportiva", "sport", "ejercicio"]
        },
        {
            id: 9,
            name: "CAMISETA DALIX URBANA",
            price: "40.000",
            originalPrice: null,
            image: "public/img/RopaDalix9.jpg",
            keywords: ["camiseta", "dalix", "urbana", "ciudad", "cam", "shirt"]
        },
        {
            id: 10,
            name: "HOODIE DALIX LIMITED",
            price: "95.000",
            originalPrice: null,
            image: "public/img/RopaDalix10.jpg",
            keywords: ["hoodie", "dalix", "limited", "edicion", "exclusivo"]
        },
        {
            id: 11,
            name: "CAMISETA DALIX SIGNATURE",
            price: "52.000",
            originalPrice: null,
            image: "public/img/RopaDalix11.jpg",
            keywords: ["camiseta", "dalix", "signature", "firma", "cam", "shirt"]
        },
        {
            id: 12,
            name: "HOODIE DALIX ELITE",
            price: "88.000",
            originalPrice: null,
            image: "public/img/RopaDalix12.jpg",
            keywords: ["hoodie", "dalix", "elite", "premium", "exclusivo"]
        },
        {
            id: 13,
            name: "CAMISETA DALIX PRO",
            price: "46.000",
            originalPrice: null,
            image: "public/img/RopaDalix13.jpg",
            keywords: ["camiseta", "dalix", "pro", "profesional", "cam", "shirt"]
        },
        {
            id: 14,
            name: "SUDADERA DALIX SPORT",
            price: "75.000",
            originalPrice: null,
            image: "public/img/RopaDalix14.jpg",
            keywords: ["sudadera", "dalix", "sport", "deportiva", "ejercicio"]
        }
    ];

    // Function to open the menu
    function openMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    // Function to close the menu
    function closeMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Function to open search
    function openSearch() {
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Focus on input after animation
        setTimeout(() => {
            searchInput.focus();
        }, 300);
    }

    // Function to close search
    function closeSearch() {
        searchOverlay.classList.remove('active');
        searchOverlay.classList.remove('has-results');
        document.body.style.overflow = '';
        searchInput.value = ''; // Clear search
        searchResults.classList.remove('show'); // Hide results
        showAllProducts(); // Show all products when closing
    }

    // Function to search products in database
    function searchProducts(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        if (term.length === 0) {
            searchResults.classList.remove('show');
            searchOverlay.classList.remove('has-results');
            return [];
        }

        const results = productsDatabase.filter(product => {
            return product.keywords.some(keyword => 
                keyword.toLowerCase().includes(term)
            ) || product.name.toLowerCase().includes(term);
        });

        return results;
    }

    // Function to render search results
    function renderSearchResults(products) {
        if (products.length === 0) {
            searchResults.classList.remove('show');
            searchOverlay.classList.remove('has-results');
            return;
        }

        searchProductsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productElement = document.createElement('a');
            productElement.href = 'catalog.html';
            productElement.className = 'search-product-item';
            
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="search-product-image">
                <div class="search-product-info">
                    <h3 class="search-product-name">${product.name}</h3>
                    <p class="search-product-price">
                        <span class="current-price">$${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                    </p>
                </div>
            `;
            
            searchProductsGrid.appendChild(productElement);
        });

        searchResults.classList.add('show');
        searchOverlay.classList.add('has-results');
    }

    // Function to handle tab switching
    function initSearchTabs() {
        const tabs = document.querySelectorAll('.search-tab');
        const tabContents = document.querySelectorAll('.search-tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                document.getElementById(targetTab + '-content').classList.add('active');
            });
        });
    }

    // Function to filter products
    function filterProducts(searchTerm) {
        const products = document.querySelectorAll('.product[data-product-name]');
        const term = searchTerm.toLowerCase().trim();

        products.forEach(function(product) {
            const productName = product.getAttribute('data-product-name').toLowerCase();
            
            if (term === '' || productName.includes(term)) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    }

    // Function to show all products
    function showAllProducts() {
        const products = document.querySelectorAll('.product[data-product-name]');
        products.forEach(function(product) {
            product.classList.remove('hidden');
        });
    }

    // Menu event listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            openMenu();
        });
    }

    if (menuClose) {
        menuClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
    }

    // Close menu when clicking on overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function() {
            closeMenu();
        });
    }

    // Search event listeners
    if (searchToggle) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            openSearch();
        });
    }

    if (searchClose) {
        searchClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeSearch();
        });
    }

    // Close search when clicking on overlay
    if (searchOverlay) {
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                closeSearch();
            }
        });
    }

    // Real-time search filtering
    if (searchInput) {
        // Auto uppercase functionality
        searchInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.toUpperCase();
        });

        searchInput.addEventListener('input', function() {
            const searchTerm = this.value;
            
            // Search in products database for detailed results
            const searchResults = searchProducts(searchTerm);
            renderSearchResults(searchResults);
            
            // Also filter main page products
            filterProducts(searchTerm);
        });
    }

    // Initialize search tabs
    initSearchTabs();

    // Handle mouse leave from search area specifically
    if (searchOverlay) {
        searchOverlay.addEventListener('mouseleave', function() {
            if (this.classList.contains('active')) {
                this.classList.add('transparent');
            }
        });

        searchOverlay.addEventListener('mouseenter', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('transparent');
            }
        });
    }

    // Close search/menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (searchOverlay.classList.contains('active')) {
                closeSearch();
            } else if (mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        }
    });

    // Close menu when clicking on a menu link (for better UX on single page)
    const menuLinks = document.querySelectorAll('.mobile-menu__link');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Add a small delay to allow navigation
            setTimeout(closeMenu, 100);
        });
    });

    // Product Gallery Functionality
    const galleryItems = document.querySelectorAll('.product-gallery__item');
    const mainImage = document.querySelector('.product-purchase__image');

    if (galleryItems.length > 0 && mainImage) {
        // Function to update active thumbnail
        function updateActiveThumbnail(index) {
            galleryItems.forEach(function(item, i) {
                item.classList.toggle('product-gallery__item--active', i === index);
            });
        }

        // Function to change main image
        function changeMainImage(imageSrc) {
            mainImage.src = imageSrc;
        }

        // Event listeners for thumbnail clicks
        galleryItems.forEach(function(item, index) {
            item.addEventListener('click', function() {
                const imageSrc = item.getAttribute('data-image');
                changeMainImage(imageSrc);
                updateActiveThumbnail(index);
            });
        });
    }

    // Horizontal scroll functionality for Nueva Colección
    const newCollectionGrid = document.querySelector('.new-collection__grid');
    
    if (newCollectionGrid) {
        let isDown = false;
        let startX;
        let scrollLeft;
        let velocity = 0;
        let lastTime = 0;
        let lastScrollLeft = 0;
        let animationId = null;
        
        // Smooth scroll function (Culture Legacy style)
        function smoothScrollTo(targetScroll) {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            
            const startScroll = newCollectionGrid.scrollLeft;
            const distance = targetScroll - startScroll;
            const duration = 200; // Slightly longer duration like Culture Legacy
            let startTime = null;
            
            function animate(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                
                // Easing function similar to Culture Legacy (easeOutQuart)
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                
                newCollectionGrid.scrollLeft = startScroll + (distance * easeOutQuart);
                
                if (progress < 1) {
                    animationId = requestAnimationFrame(animate);
                }
            }
            
            animationId = requestAnimationFrame(animate);
        }
        
        // Mouse events
        newCollectionGrid.addEventListener('mousedown', (e) => {
            isDown = true;
            newCollectionGrid.classList.add('active');
            startX = e.pageX - newCollectionGrid.offsetLeft;
            scrollLeft = newCollectionGrid.scrollLeft;
            velocity = 0;
            lastTime = Date.now();
            lastScrollLeft = scrollLeft;
            
            // Cancel any ongoing smooth scroll
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            
            // Prevent text selection while dragging
            e.preventDefault();
        });
        
        newCollectionGrid.addEventListener('mouseleave', () => {
            isDown = false;
            newCollectionGrid.classList.remove('active');
        });
        
        newCollectionGrid.addEventListener('mouseup', () => {
            isDown = false;
            newCollectionGrid.classList.remove('active');
            
            // Apply momentum scrolling for moderate movements (like Culture Legacy)
            if (Math.abs(velocity) > 0.8) {
                applyMomentum();
            }
        });
        
        newCollectionGrid.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            
            const currentTime = Date.now();
            const x = e.pageX - newCollectionGrid.offsetLeft;
            const walk = (x - startX) * 1.2; // Balanced sensitivity like Culture Legacy
            newCollectionGrid.scrollLeft = scrollLeft - walk;
            
            // Calculate velocity for momentum
            if (currentTime - lastTime > 0) {
                velocity = (newCollectionGrid.scrollLeft - lastScrollLeft) / (currentTime - lastTime);
                lastTime = currentTime;
                lastScrollLeft = newCollectionGrid.scrollLeft;
            }
        });
        
        // Touch events for mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;
        let touchVelocity = 0;
        let touchLastTime = 0;
        let touchLastScrollLeft = 0;
        
        newCollectionGrid.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX;
            touchScrollLeft = newCollectionGrid.scrollLeft;
            touchVelocity = 0;
            touchLastTime = Date.now();
            touchLastScrollLeft = touchScrollLeft;
            
            // Cancel any ongoing smooth scroll
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        });
        
        newCollectionGrid.addEventListener('touchmove', (e) => {
            if (!touchStartX) return;
            e.preventDefault();
            
            const currentTime = Date.now();
            const touchX = e.touches[0].pageX;
            const walk = (touchStartX - touchX) * 1.2; // Balanced sensitivity like Culture Legacy
            newCollectionGrid.scrollLeft = touchScrollLeft + walk;
            
            // Calculate velocity for momentum
            if (currentTime - touchLastTime > 0) {
                touchVelocity = (newCollectionGrid.scrollLeft - touchLastScrollLeft) / (currentTime - touchLastTime);
                touchLastTime = currentTime;
                touchLastScrollLeft = newCollectionGrid.scrollLeft;
            }
        });
        
        newCollectionGrid.addEventListener('touchend', () => {
            if (Math.abs(touchVelocity) > 0.8) {
                applyTouchMomentum();
            }
            touchStartX = 0;
        });
        
        // Wheel event for smooth scrolling (Culture Legacy style)
        newCollectionGrid.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            // Cancel any ongoing momentum
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            
            const targetScroll = newCollectionGrid.scrollLeft + (e.deltaY * 0.8); // Balanced wheel sensitivity like Culture Legacy
            smoothScrollTo(targetScroll);
        });
        
        // Momentum scrolling function (Culture Legacy style)
        function applyMomentum() {
            const friction = 0.88; // Balanced friction like Culture Legacy
            const minVelocity = 0.2; // Moderate threshold
            const maxDistance = 300; // More generous momentum distance
            
            function animate() {
                if (Math.abs(velocity) < minVelocity) return;
                
                const momentumDistance = velocity * 12; // Stronger momentum like Culture Legacy
                const clampedDistance = Math.max(-maxDistance, Math.min(maxDistance, momentumDistance));
                
                newCollectionGrid.scrollLeft += clampedDistance;
                velocity *= friction;
                
                requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        // Touch momentum scrolling function (Culture Legacy style)
        function applyTouchMomentum() {
            const friction = 0.85; // Balanced friction like Culture Legacy
            const minVelocity = 0.2; // Moderate threshold
            const maxDistance = 250; // More generous momentum distance
            
            function animate() {
                if (Math.abs(touchVelocity) < minVelocity) return;
                
                const momentumDistance = touchVelocity * 10; // Stronger momentum like Culture Legacy
                const clampedDistance = Math.max(-maxDistance, Math.min(maxDistance, momentumDistance));
                
                newCollectionGrid.scrollLeft += clampedDistance;
                touchVelocity *= friction;
                
                requestAnimationFrame(animate);
            }
            
            animate();
        }
        
        // Add visual feedback on hover
        newCollectionGrid.addEventListener('mouseenter', () => {
            newCollectionGrid.style.cursor = 'grab';
        });
        
        newCollectionGrid.addEventListener('mouseleave', () => {
            if (!isDown) {
                newCollectionGrid.style.cursor = 'grab';
            }
        });
    }

    // Controls Bar - View Toggle Functionality
    const viewButtons = document.querySelectorAll('.controls-bar__view-btn');
    const catalogGrid = document.querySelector('.catalog__grid');

    if (viewButtons.length > 0 && catalogGrid) {
        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                viewButtons.forEach(btn => btn.classList.remove('controls-bar__view-btn--active'));
                
                // Add active class to clicked button
                button.classList.add('controls-bar__view-btn--active');
                
                // Get the view type
                const viewType = button.getAttribute('data-view');
                
                // Remove all view classes
                catalogGrid.classList.remove('catalog__grid--grid-2', 'catalog__grid--grid-3', 'catalog__grid--list');
                
                // Add the new view class
                catalogGrid.classList.add(`catalog__grid--${viewType}`);
                
                // Store the current view in localStorage
                localStorage.setItem('catalogView', viewType);
            });
        });

        // Load saved view preference
        const savedView = localStorage.getItem('catalogView') || 'grid-2';
        const savedButton = document.querySelector(`[data-view="${savedView}"]`);
        if (savedButton) {
            savedButton.click();
        }
    }

    // Catalog Search Functionality
    const catalogSearchInput = document.getElementById('catalog-search-input');
    const catalogCards = document.querySelectorAll('.catalog__card');

    if (catalogSearchInput && catalogCards.length > 0) {
        // Auto uppercase functionality
        catalogSearchInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase();
        });

        // Real-time filtering
        catalogSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            catalogCards.forEach(card => {
                const productName = card.querySelector('.catalog__name').textContent.toLowerCase();
                const productPrice = card.querySelector('.catalog__price').textContent.toLowerCase();
                
                // Search in product name and price
                if (productName.includes(searchTerm) || productPrice.includes(searchTerm)) {
                    card.style.display = 'flex';
                    card.classList.remove('hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }
            });
        });

        // Clear search on escape key
        catalogSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                catalogSearchInput.value = '';
                catalogCards.forEach(card => {
                    card.style.display = 'flex';
                    card.classList.remove('hidden');
                });
            }
        });
    }
});

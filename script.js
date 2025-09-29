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

    // Función para detectar imágenes disponibles automáticamente
    function detectAvailableImages() {
        // Lista de imágenes que sabemos que existen
        // En un entorno real, esto se haría con una llamada al servidor
        const knownImages = [
            "RopaDalix1.jpg", "RopaDalix2.jpg", "RopaDalix3.jpg", "RopaDalix4.jpg", "RopaDalix5.jpg",
            "RopaDalix6.jpg", "RopaDalix7.jpg", "RopaDalix8.jpg", "RopaDalix9.jpg", "RopaDalix10.jpg",
            "RopaDalix11.jpg", "RopaDalix12.jpg", "RopaDalix13.jpg", "RopaDalix14.jpg", "RopaDalix15.jpg",
            "RopaDalix16.jpg", "RopaDalix17.jpg", "RopaDalix18.jpg", "RopaDalix19.jpg", "RopaDalix20.jpg"
        ];

        // Verificar qué imágenes realmente existen (simulado)
        // En un entorno real, esto verificaría con el servidor
        const availableImages = knownImages.filter(imageName => {
            // Simular verificación de existencia
            // En producción, esto haría una petición HEAD al servidor
            return true; // Por ahora, asumimos que todas existen
        });

        console.log(`Detectadas ${availableImages.length} imágenes disponibles:`, availableImages);
        return availableImages;
    }

    // Función para agregar nuevas imágenes fácilmente
    function addNewImage(imageName) {
        const knownImages = [
            "RopaDalix1.jpg", "RopaDalix2.jpg", "RopaDalix3.jpg", "RopaDalix4.jpg", "RopaDalix5.jpg",
            "RopaDalix6.jpg", "RopaDalix7.jpg", "RopaDalix8.jpg", "RopaDalix9.jpg", "RopaDalix10.jpg",
            "RopaDalix11.jpg", "RopaDalix12.jpg", "RopaDalix13.jpg", "RopaDalix14.jpg", "RopaDalix15.jpg",
            "RopaDalix16.jpg", "RopaDalix17.jpg", "RopaDalix18.jpg", "RopaDalix19.jpg", "RopaDalix20.jpg"
        ];
        
        // Agregar nueva imagen si no existe
        if (!knownImages.includes(imageName)) {
            knownImages.push(imageName);
            console.log(`Nueva imagen agregada: ${imageName}`);
            // Regenerar productos con la nueva imagen
            regenerateProductsAndCatalog();
        }
    }

    // Función para regenerar productos y catálogo
    function regenerateProductsAndCatalog() {
        // Regenerar base de datos de productos
        window.productsDatabase = generateDynamicProductsDatabase();
        
        // Regenerar HTML del catálogo
        regenerateCatalogHTML();
        
        console.log('Catálogo regenerado automáticamente');
    }

    // Sistema dinámico de productos basado en imágenes disponibles
    function generateDynamicProductsDatabase() {
        // Detectar imágenes disponibles automáticamente
        const availableImages = detectAvailableImages();

        const productTypes = [
            { base: "CAMISETA DALIX", keywords: ["camiseta", "dalix", "cam", "shirt"] },
            { base: "HOODIE DALIX", keywords: ["hoodie", "dalix", "abrigo", "sudaderas"] },
            { base: "SUDADERA DALIX", keywords: ["sudadera", "dalix", "abrigo", "sweater"] },
            { base: "JERSEY DALIX", keywords: ["jersey", "dalix", "deportivo", "sport"] },
            { base: "CAMISA DALIX", keywords: ["camisa", "dalix", "formal", "elegante"] }
        ];

        const productStyles = [
            { suffix: "ORIGINAL", price: 45000, keywords: ["original", "basica", "clasica"] },
            { suffix: "PREMIUM", price: 85000, keywords: ["premium", "calidad", "exclusivo"] },
            { suffix: "VINTAGE", price: 42000, keywords: ["vintage", "retro", "clasico"] },
            { suffix: "CLÁSICA", price: 65000, keywords: ["clasica", "tradicional", "basica"] },
            { suffix: "MINIMALISTA", price: 38000, keywords: ["minimalista", "simple", "clean"] },
            { suffix: "OVERSIZE", price: 90000, keywords: ["oversize", "grande", "comodo"] },
            { suffix: "ESTAMPADA", price: 48000, keywords: ["estampada", "diseño", "grafico"] },
            { suffix: "DEPORTIVA", price: 70000, keywords: ["deportiva", "sport", "ejercicio"] },
            { suffix: "URBANA", price: 40000, keywords: ["urbana", "ciudad", "moderna"] },
            { suffix: "LIMITED", price: 95000, keywords: ["limited", "edicion", "exclusivo"] },
            { suffix: "SIGNATURE", price: 52000, keywords: ["signature", "firma", "personalizado"] },
            { suffix: "ELITE", price: 88000, keywords: ["elite", "premium", "exclusivo"] },
            { suffix: "PRO", price: 46000, keywords: ["pro", "profesional", "trabajo"] },
            { suffix: "SPORT", price: 75000, keywords: ["sport", "deportiva", "ejercicio"] },
            { suffix: "COLLECTION", price: 60000, keywords: ["collection", "coleccion", "serie"] }
        ];

        const products = [];

        availableImages.forEach((imageName, index) => {
            const imageNumber = parseInt(imageName.match(/\d+/)[0]);
            const productType = productTypes[index % productTypes.length];
            const productStyle = productStyles[index % productStyles.length];
            
            const productName = `${productType.base} ${productStyle.suffix}`;
            const allKeywords = [...productType.keywords, ...productStyle.keywords, "dalix"];
            
            // Agregar variaciones de precio (±20%)
            const basePrice = productStyle.price;
            const priceVariation = Math.floor(basePrice * (0.8 + Math.random() * 0.4));
            const finalPrice = Math.round(priceVariation / 1000) * 1000; // Redondear a miles

            products.push({
                id: index + 1,
                name: productName,
                price: `${finalPrice.toLocaleString('es-CO')} COP`,
                originalPrice: null,
                image: `public/img/${imageName}`,
                keywords: allKeywords
            });
        });

        console.log(`Generados ${products.length} productos dinámicamente basados en ${availableImages.length} imágenes`);
        return products;
    }

    // Generar la base de datos de productos dinámicamente
    const productsDatabase = generateDynamicProductsDatabase();

    // Base de datos de colecciones para búsqueda (SOLO TÍTULO)
    function getCollectionsDatabase() {
        // Obtener el título dinámico de la página
        const purezaTitle = document.querySelector('.collection-pureza__title');
        const purezaDescription = document.querySelector('.collection-pureza__description');
        
        const titleText = purezaTitle ? purezaTitle.textContent.trim() : "P U R E Z A";
        const descriptionText = purezaDescription ? purezaDescription.textContent.trim() : "Diseños minimalistas y elegantes que reflejan la esencia pura del estilo DALIX";
        
        // SOLO usar el título para búsqueda - sin keywords adicionales
        const titleKeywords = [];
        
        // Agregar el título completo como keyword
        titleKeywords.push(titleText.toLowerCase());
        
        // Agregar cada carácter individual del título
        const titleChars = titleText.toLowerCase().replace(/\s+/g, '');
        for (let i = 0; i < titleChars.length; i++) {
            if (titleChars[i] !== ' ') {
                titleKeywords.push(titleChars[i]);
            }
        }
        
        // Debug: mostrar qué se está buscando
        console.log('Título actual:', titleText);
        console.log('Solo keywords del título:', titleKeywords);
        
        return [
            {
                id: 1,
                name: titleText,
                description: descriptionText,
                image: "public/img/RopaDalix1.jpg",
                keywords: titleKeywords, // SOLO keywords del título
                products: [15, 16, 17]
            }
        ];
    }

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

    // Function to search collections
    function searchCollections(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        if (term.length === 0) {
            return [];
        }

        const collectionsDatabase = getCollectionsDatabase();
        const results = collectionsDatabase.filter(collection => {
            return collection.keywords.some(keyword => 
                keyword.toLowerCase().includes(term)
            ) || collection.name.toLowerCase().includes(term);
        });

        return results;
    }

    // Function to render search results for products
    function renderSearchResults(products) {
        const searchProductsGrid = document.getElementById('search-products-grid');
        if (!searchProductsGrid) return;

        searchProductsGrid.innerHTML = '';
        
        if (products.length === 0) {
            searchProductsGrid.innerHTML = '<p class="no-results">No se encontraron productos</p>';
            return;
        }
        
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
    }

    // Function to render search results for collections
    function renderCollectionResults(collections) {
        const searchCollectionsGrid = document.querySelector('#colecciones-content .search-collections');
        if (!searchCollectionsGrid) return;

        searchCollectionsGrid.innerHTML = '';
        
        if (collections.length === 0) {
            searchCollectionsGrid.innerHTML = '<p class="no-results">No se encontraron colecciones</p>';
            return;
        }

        collections.forEach(collection => {
            const collectionElement = document.createElement('a');
            collectionElement.href = 'collection.html';
            collectionElement.className = 'search-collection-item';
            
            collectionElement.innerHTML = `
                <img src="${collection.image}" alt="${collection.name}" class="search-collection-image">
                <div class="search-collection-info">
                    <h3 class="search-collection-name">${collection.name}</h3>
                    <p class="search-collection-description">${collection.description}</p>
                </div>
            `;
            
            searchCollectionsGrid.appendChild(collectionElement);
        });
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
            const productResults = searchProducts(searchTerm);
            const collectionResults = searchCollections(searchTerm);
            
            // Render results in their respective tabs
            renderSearchResults(productResults);
            renderCollectionResults(collectionResults);
            
            // Show results if there are any
            if (productResults.length > 0 || collectionResults.length > 0) {
                searchResults.classList.add('show');
                searchOverlay.classList.add('has-results');
            } else {
                searchResults.classList.remove('show');
                searchOverlay.classList.remove('has-results');
            }
            
            // Also filter main page products
            filterProducts(searchTerm);
        });
    }

    // Initialize search tabs
    initSearchTabs();

    // Ensure logo functionality works correctly
    const logo = document.querySelector('.header__logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            console.log('Logo clicked - navigating to index.html');
            // Ensure the link works correctly
            window.location.href = 'index.html';
        });
    }

    // Función para regenerar dinámicamente el catálogo HTML
    function regenerateCatalogHTML() {
        const catalogGrid = document.querySelector('.catalog__grid');
        if (!catalogGrid) return;

        // Limpiar el grid existente
        catalogGrid.innerHTML = '';

        // Generar tarjetas de productos dinámicamente
        productsDatabase.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'catalog__card';
            productCard.setAttribute('data-category', 'productos');
            
            productCard.innerHTML = `
                <a href="buys.html">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="catalog__image"
                    />
                </a>
                <h2 class="catalog__name">${product.name}</h2>
                <p class="catalog__price">$${product.price}</p>
            `;
            
            catalogGrid.appendChild(productCard);
        });

        console.log(`Regenerado catálogo HTML con ${productsDatabase.length} productos`);
    }

    // Regenerar el catálogo cuando se carga la página
    if (document.querySelector('.catalog__grid')) {
        regenerateCatalogHTML();
    }

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
        
        // Check if we're on mobile and grid-3 is hidden
        const isMobile = window.innerWidth <= 480;
        const grid3Button = document.querySelector(`[data-view="grid-3"]`);
        const isGrid3Hidden = grid3Button && window.getComputedStyle(grid3Button).display === 'none';
        
        if (savedButton && !(isMobile && savedView === 'grid-3' && isGrid3Hidden)) {
            savedButton.click();
        } else if (isMobile && savedView === 'grid-3' && isGrid3Hidden) {
            // If grid-3 is selected but hidden on mobile, default to grid-2
            const grid2Button = document.querySelector(`[data-view="grid-2"]`);
            if (grid2Button) {
                grid2Button.click();
            }
        }
        
        // Handle window resize to manage grid-3 visibility
        window.addEventListener('resize', () => {
            const isMobileNow = window.innerWidth <= 480;
            const grid3Button = document.querySelector(`[data-view="grid-3"]`);
            const currentView = localStorage.getItem('catalogView') || 'grid-2';
            
            if (isMobileNow && currentView === 'grid-3') {
                // Switch to grid-2 if currently on grid-3 and switching to mobile
                const grid2Button = document.querySelector(`[data-view="grid-2"]`);
                if (grid2Button) {
                    grid2Button.click();
                }
            }
        });
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

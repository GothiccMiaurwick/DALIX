# DALIX - Tienda de Ropa Online

![DALIX Logo](https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80)

## 📋 Descripción

DALIX es una tienda de ropa online moderna y elegante que ofrece prendas de alta calidad con diseños únicos. El sitio web presenta una experiencia de usuario fluida con navegación intuitiva, búsqueda avanzada y un diseño responsivo que se adapta perfectamente a dispositivos móviles y de escritorio.

## ✨ Características Principales

### 🎨 Diseño y UX
- **Diseño Responsivo**: Optimizado para móviles, tablets y escritorio
- **Interfaz Moderna**: Diseño limpio y minimalista con elementos visuales atractivos
- **Navegación Intuitiva**: Menú móvil deslizable y navegación clara
- **Animaciones Suaves**: Transiciones y efectos visuales elegantes

### 🔍 Funcionalidades de Búsqueda
- **Búsqueda Global**: Sistema de búsqueda en tiempo real con overlay elegante
- **Filtrado Inteligente**: Búsqueda por productos y colecciones
- **Resultados Dinámicos**: Muestra resultados instantáneos mientras escribes
- **Base de Datos de Productos**: Catálogo integrado con palabras clave para búsquedas precisas

### 🛍️ Catálogo y Productos
- **Múltiples Vistas**: Vista de cuadrícula (2x2, 3x3) y vista de lista
- **Filtrado en Tiempo Real**: Búsqueda instantánea en el catálogo
- **Productos Destacados**: Sección de nueva colección con scroll horizontal suave
- **Páginas de Producto**: Páginas detalladas con selección de tallas y compra

### 📱 Experiencia Móvil
- **Menú Deslizable**: Menú lateral elegante con overlay
- **Scroll Horizontal**: Navegación fluida en la sección de productos
- **Touch Optimizado**: Gestos táctiles naturales para dispositivos móviles
- **Responsive Design**: Adaptación perfecta a diferentes tamaños de pantalla

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript Vanilla**: Funcionalidad interactiva sin dependencias
- **Flaticon**: Iconografía profesional y consistente
- **Unsplash**: Imágenes de alta calidad para productos

## 📁 Estructura del Proyecto

```
DALIX/
├── index.html          # Página principal
├── catalog.html        # Catálogo de productos
├── collection.html      # Nueva colección
├── buys.html          # Página de compra
├── style.css          # Estilos principales
├── script.js          # Funcionalidad JavaScript
├── README.md          # Documentación del proyecto
└── .gitignore         # Archivos ignorados por Git
```

## 🎯 Páginas del Sitio

### 🏠 Página Principal (`index.html`)
- Hero section con imagen principal
- Sección de nueva colección con scroll horizontal
- Sección de marca con slogan
- Call-to-action para ver el catálogo
- Footer con información de contacto

### 📦 Catálogo (`catalog.html`)
- Barra de controles con búsqueda y vistas
- Grid de productos con múltiples vistas (2x2, 3x3, lista)
- Filtrado en tiempo real
- Navegación fluida entre productos

### 🆕 Nueva Colección (`collection.html`)
- Hero section de la colección
- Grid de productos destacados
- Sección de características y beneficios
- Diseño enfocado en la nueva línea

### 🛒 Página de Compra (`buys.html`)
- Vista detallada del producto
- Selección de tallas
- Información de precio y descripción
- Botón de compra por WhatsApp

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: Grises (#333, #444, #666)
- **Secundario**: Blancos y grises claros (#f8f8f8, #e0e0e0)
- **Acentos**: Negro (#222) para elementos destacados

### Tipografía
- **Fuente Principal**: Arial, sans-serif
- **Pesos**: 400 (normal), 500 (medium), 600 (semi-bold), 700 (bold)
- **Tamaños**: Escalable desde móvil hasta escritorio

### Espaciado
- **Padding**: Sistema consistente (0.5rem, 1rem, 1.5rem, 2rem)
- **Margins**: Espaciado vertical armonioso
- **Gaps**: Espaciado uniforme en grids y flexbox

## 🔧 Funcionalidades JavaScript

### Sistema de Búsqueda
```javascript
// Búsqueda en tiempo real con base de datos de productos
const productsDatabase = [
    {
        id: 1,
        name: "CAMISETA NEGRA INSTINTO",
        price: "204.900,00",
        keywords: ["camiseta", "negra", "instinto", "cam", "shirt", "black"]
    }
    // ... más productos
];
```

### Navegación Móvil
- Menú deslizable con overlay
- Cierre automático al hacer clic en enlaces
- Prevención de scroll cuando el menú está abierto

### Scroll Horizontal
- Scroll suave con momentum
- Soporte para mouse y touch
- Animaciones fluidas tipo "Culture Legacy"

### Vistas del Catálogo
- Cambio dinámico entre vistas (grid-2, grid-3, list)
- Persistencia de preferencias en localStorage
- Filtrado en tiempo real

## 📱 Responsive Design

### Breakpoints
- **Móvil**: < 480px
- **Tablet**: 481px - 768px
- **Escritorio**: > 768px

### Adaptaciones Móviles
- Menú lateral en lugar de navegación superior
- Grid de productos adaptativo
- Imágenes optimizadas para diferentes tamaños
- Touch-friendly buttons y controles

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/dalix.git
   cd dalix
   ```

2. **Abrir en el navegador**:
   - Simplemente abre `index.html` en tu navegador web
   - O usa un servidor local para desarrollo:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   ```

3. **Acceder al sitio**:
   - Local: `http://localhost:8000`
   - El sitio funcionará completamente sin necesidad de servidor backend

## 🎯 Características Destacadas

### 🔍 Sistema de Búsqueda Avanzado
- Búsqueda en tiempo real con overlay elegante
- Filtrado por productos y colecciones
- Base de datos integrada con palabras clave
- Resultados instantáneos y precisos

### 📱 Experiencia Móvil Optimizada
- Menú deslizable con animaciones suaves
- Scroll horizontal con momentum natural
- Touch gestures optimizados
- Diseño adaptativo perfecto

### 🎨 Diseño Moderno y Elegante
- Estética minimalista y profesional
- Animaciones y transiciones fluidas
- Iconografía consistente con Flaticon
- Paleta de colores armoniosa

### ⚡ Rendimiento Optimizado
- JavaScript vanilla sin dependencias
- CSS optimizado con metodología BEM
- Imágenes optimizadas desde Unsplash
- Carga rápida y experiencia fluida

## 📞 Información de Contacto

- **Dirección**: Calle 5g#48-64 Barrio La Nevada
- **Teléfono**: +57 800 000 000
- **Email**: dalixprendas@gmail.com
- **WhatsApp**: Disponible para compras directas

## 🌟 Futuras Mejoras

- [ ] Integración con sistema de pagos
- [ ] Carrito de compras persistente
- [ ] Sistema de usuarios y cuentas
- [ ] Panel de administración
- [ ] Integración con redes sociales
- [ ] Optimización SEO avanzada
- [ ] PWA (Progressive Web App)
- [ ] Internacionalización (i18n)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📸 Capturas de Pantalla

### Página Principal
![Homepage](https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80)

### Catálogo
![Catalog](https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80)

### Nueva Colección
![Collection](https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80)

---

**DALIX** - *Más que ropa, es una historia que vistes* 🎭

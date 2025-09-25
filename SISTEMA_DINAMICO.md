# 🚀 Sistema Dinámico de Catálogo DALIX

## 📋 Descripción
El catálogo de productos ahora se genera automáticamente basándose en las imágenes disponibles en la carpeta `public/img/`. Cuando agregues nuevas imágenes, el sistema creará productos automáticamente.

## 🛠️ Cómo Agregar Nuevas Imágenes

### 1. **Agregar la imagen físicamente**
- Coloca tu nueva imagen en la carpeta `public/img/`
- Usa el formato: `RopaDalix[NÚMERO].jpg`
- Ejemplo: `RopaDalix16.jpg`, `RopaDalix17.jpg`, etc.

### 2. **Actualizar la lista en el código**
Abre el archivo `script.js` y busca la función `detectAvailableImages()`:

```javascript
const knownImages = [
    "RopaDalix1.jpg", "RopaDalix2.jpg", "RopaDalix3.jpg", "RopaDalix4.jpg", "RopaDalix5.jpg",
    "RopaDalix6.jpg", "RopaDalix7.jpg", "RopaDalix8.jpg", "RopaDalix9.jpg", "RopaDalix10.jpg",
    "RopaDalix11.jpg", "RopaDalix12.jpg", "RopaDalix13.jpg", "RopaDalix14.jpg", "RopaDalix15.jpg",
    "RopaDalix16.jpg" // ← Agregar aquí tu nueva imagen
];
```

### 3. **¡Listo!**
- El sistema generará automáticamente un nuevo producto
- Se asignará un nombre, precio y keywords automáticamente
- Aparecerá en el catálogo, búsqueda y filtros

## 🎯 Características del Sistema

### **Generación Automática de Productos:**
- **Nombres**: Combinación de tipo + estilo (ej: "CAMISETA DALIX PREMIUM")
- **Precios**: Variaciones automáticas basadas en el estilo
- **Keywords**: Para búsqueda y filtros
- **Imágenes**: Asignación automática de rutas

### **Tipos de Productos Disponibles:**
- CAMISETA DALIX
- HOODIE DALIX  
- SUDADERA DALIX
- JERSEY DALIX
- CAMISA DALIX

### **Estilos Disponibles:**
- ORIGINAL, PREMIUM, VINTAGE, CLÁSICA, MINIMALISTA
- OVERSIZE, ESTAMPADA, DEPORTIVA, URBANA, LIMITED
- SIGNATURE, ELITE, PRO, SPORT, COLLECTION

## 🔧 Funciones Técnicas

### `detectAvailableImages()`
- Detecta qué imágenes están disponibles
- Retorna lista de nombres de archivos

### `generateDynamicProductsDatabase()`
- Genera productos basados en imágenes
- Asigna nombres, precios y keywords
- Retorna base de datos completa

### `regenerateCatalogHTML()`
- Regenera el HTML del catálogo
- Crea tarjetas de productos dinámicamente
- Mantiene estilos y funcionalidad

### `addNewImage(imageName)`
- Función para agregar nuevas imágenes programáticamente
- Regenera automáticamente el catálogo

## 📊 Ejemplo de Uso

```javascript
// Para agregar una nueva imagen programáticamente:
addNewImage("RopaDalix16.jpg");

// El sistema automáticamente:
// 1. Detecta la nueva imagen
// 2. Genera un producto con nombre, precio y keywords
// 3. Regenera el HTML del catálogo
// 4. Actualiza la búsqueda y filtros
```

## 🎨 Personalización

### **Modificar Tipos de Productos:**
Edita el array `productTypes` en `generateDynamicProductsDatabase()`:

```javascript
const productTypes = [
    { base: "TU_TIPO_DALIX", keywords: ["tu", "tipo", "keywords"] },
    // ... más tipos
];
```

### **Modificar Estilos:**
Edita el array `productStyles` en `generateDynamicProductsDatabase()`:

```javascript
const productStyles = [
    { suffix: "TU_ESTILO", price: 50000, keywords: ["tu", "estilo", "keywords"] },
    // ... más estilos
];
```

## ✅ Ventajas del Sistema

1. **🔄 Automático**: No necesitas editar HTML manualmente
2. **📈 Escalable**: Fácil agregar nuevos productos
3. **🎯 Consistente**: Nombres y precios uniformes
4. **🔍 Buscable**: Keywords automáticas para búsqueda
5. **🎨 Flexible**: Fácil personalizar tipos y estilos

## 🚨 Notas Importantes

- **Formato de imagen**: Usa siempre `.jpg`
- **Nomenclatura**: `RopaDalix[NÚMERO].jpg`
- **Actualización**: Siempre actualiza la lista en `knownImages`
- **Backup**: El HTML original se reemplaza dinámicamente

¡Tu catálogo ahora crece automáticamente con tus imágenes! 🎉

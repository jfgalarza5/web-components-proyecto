```markdown
# ESPE Shop Web Components

Este repositorio contiene dos Web Components de Lit para la tienda **ESPE Shop**:

- **`<header-component>`**  
  Cabecera al estilo “Amazon → ESPE Shop” con:
  - Logo y buscador.
  - Dropdowns de **Idioma** y **Cuenta y Listas**.
  - Botón **Todo** que despliega un menú lateral con overlay.
  - Cierre automático al clicar fuera.

- **`<footer-carousel>`**  
  Pie de página con:
  - Carrusel horizontal de imágenes con flechas de navegación.
  - Scroll-snap para ver “páginas” de ítems.
  - Pie de cuatro columnas de enlaces en fondo verde ESPE.

---

## 📂 Estructura de carpetas

```

/
├── components
│   └── headerFooter
│       ├── header-component.js    # <header-component>
│       ├── footer-carousel.js     # <footer-carousel>
│       └── README.md              # (documentación interna)
├── docs
│   └── .gitkeep
├── examples
│   └── .gitkeep
├── img
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── …
│   └── img18.jpg
├── node\_modules
├── services
│   ├── main.js            # importa ambos componentes
│   ├── index.html         # demo de uso y montaje de los tags
│   └── ESPECIFICACIONES.md
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md              # este archivo

````

---

## ⚙️ Instalación y desarrollo

1. **Clonar repositorio**  
   ```bash
   git clone https://github.com/tu-usuario/web-components-proyecto.git
   cd web-components-proyecto
````

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Levantar servidor de desarrollo (Vite)**

   ```bash
   npm run dev
   ```

   Por defecto abrirá `http://localhost:5173/services/index.html`.

---

## 🚀 Uso

### 1. Importar componentes

En `services/main.js`:

```js
import '../components/headerFooter/header-component.js';
import '../components/headerFooter/footer-carousel.js';
```

### 2. Definir tu HTML

En `services/index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>ESPE Shop</title>
  <script type="module" src="./main.js"></script>
</head>
<body>
  <!-- Cabecera -->
  <header-component></header-component>

  <main>
    <h1>Bienvenidos a ESPE Shop</h1>
    <p>Tu contenido aquí…</p>
  </main>

  <!-- Carrusel + Pie -->
  <footer-carousel>
    <!-- Slot de imágenes -->
    <img src="../img/img1.jpg" alt="Producto 1">
    <img src="../img/img2.jpg" alt="Producto 2">
    <!-- …hasta img18.jpg -->
  </footer-carousel>
</body>
</html>
```

---

## 🎨 Personalización

* **Colores**

  * Header-top: `#006935`
  * Header-bottom: `#1D1D1BBF`
  * Footer: `#006935BF`

  Edita las variables CSS directamente en cada componente si quieres otro esquema.

* **Tamaño del carrusel**
  Ajusta en `footer-carousel.js`:

  ```css
  ::slotted(*) {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  ```

* **Imágenes**
  Se recomienda proporción **1:1** y mínimo **240×240 px** (para retina).
  Fuentes gratis y libres de copyright:

  * [Unsplash](https://unsplash.com)
  * [Pexels](https://pexels.com)
  * [Pixabay](https://pixabay.com)
  * Placeholders: `https://picsum.photos/240/240`

---

## 📝 Detalle de los Web Components

### `<header-component>`

* **Propiedades**

  * `menuOpen` – controla el sidebar
  * `showLangMenu` – dropdown Idioma
  * `showAccountMenu` – dropdown Cuenta

* **Eventos**

  * Overlay clic → cierra sidebar
  * Clic fuera (window) → cierra dropdowns y sidebar

### `<footer-carousel>`

* **Métodos**

  * `_prev()` / `_next()` → navegan el scroll por “páginas”
* **Scroll-snap** para experiencia táctil y de teclado

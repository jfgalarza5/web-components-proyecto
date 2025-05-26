# Sistema de Diseño - ESPE E-commerce

## Componentes de Carrito y Compras

### 1. Resumen de Compra

Componente que muestra el detalle del pedido antes de proceder al pago.

**Elementos:**
- Subtotal de productos
- Costo de envío
- Total general
- Botón **"Continuar compra"**

**Estado - Envio gratis:**
- Si el envío tiene valor 0, se muestra el texto "GRATIS" en lugar del precio.

### 2. Resumen de Opiniones

Visualización del puntaje general de un producto basado en calificaciones de usuarios.

**Elementos:**
- Promedio de estrellas (0 a 5).
- Total de valoraciones.
- Gráfico de distribución por cantidad de estrellas (5 a 1 estrella).

### 3. Botón de Carrito con Estado

Botón flotante que representa el acceso al carrito de compras.

**Elementos:**
- Número total de productos en el carrito.
- Icono del carrito.

**Estado - Carrito vacio**
- Si el carrito tiene 0 productos entonces no se muestra el contador.

### 4. Mensajes Flotantes de Acción

Alertas que informan al usuario sobre cambios en su carrito.

**Tipos de mensajes:**
- Producto **agregado**:
  `"Agregado al carrito – Ingresa al carrito para seguir con tu pedido"`
- Producto **eliminado**:  
  `"Eliminado del carrito – Este producto ya no aparecerá en tu carrito"`

**Características:**
- Apareceran en la parte inferior del navegador.
- Se posicionan de forma flotante.
- Desaparecen automáticamente despues de unos segundos.

### 5. Barra de Envío Gratis

Indicador visual que muestra el progreso hacia el envío gratuito.

**Elementos incluidos:**
- Barra de progreso dinámica
- Texto con el estado del envío
- Indicación visual y textual al alcanzar el envío gratuito (`"Envío gratis"`)

**Comportamiento:**
- Se actualiza automáticamente según el total acumulado del carrito

## Componentes de Información de Producto

Estos componentes forman la base visual del catálogo de productos y reflejan estados comerciales como promociones, disponibilidad o destaque.

### ProductCard

Tarjeta principal que muestra información resumida del producto. Tiene variantes según el contexto.

#### Variantes y Estados

| Variante  | Descripción                              | Estilo Principal                     | Interacciones           |
|-----------|------------------------------------------|--------------------------------------|--------------------------|
| Default   | Tarjeta estándar para producto disponible. | Color neutro, botón activo           | Hover: sombra suave     |
| Featured  | Producto destacado o en promoción.         | Precio en verde, badge               | Hover: resalta fondo     |
| SoldOut   | Producto agotado, no disponible para compra. | Imagen con opacidad, botón deshabilitado | Sin interacciones       |

#### Estructura General

| Elemento            | Tipo                          | Detalles / Comportamiento                                 |
|---------------------|-------------------------------|-----------------------------------------------------------|
| Imagen del producto | ProductImage/HoverZoom        | Zoom al pasar el mouse, borde redondeado                  |
| Nombre / descripción| Texto                         | 2 líneas máximo, truncado con puntos suspensivos          |
| Precio              | Price/Normal o Price/Discounted| Según si aplica promoción                                 |
| Botón acción        | Button/Primary                | “Agregar al carrito”, adaptativo según estado             |
| Badges              | Badge/Discount, Badge/Oferta  | Posicionados en esquina superior                          |
| Estado adicional    | Texto informativo             | Ej: “Envío gratis”, “Producto agotado”                    |

---

### Componente: Price

Permite mostrar precios con o sin descuento. Se adapta a distintos contextos visuales (catálogo, detalle, resumen).

#### Tipos de Precio

| Variante   | Ejemplo visual       | Detalles                                                  |
|------------|----------------------|------------------------------------------------------------|
| Normal     | $19.99               | Precio sin oferta, color neutro oscuro `#111827`          |
| Discounted | $29.99 $19.99        | Precio tachado y resaltado, badge de descuento            |

#### Especificaciones visuales

| Propiedad           | Valor                          |
|---------------------|--------------------------------|
| Fuente              | Montserrat SemiBold            |
| Tamaño de fuente    | 1.1rem - 1.5rem (según dispositivo) |
| Color - normal      | `#111827`                      |
| Color - destacado   | `#10B981` (verde)              |
| Color - descuento   | `#F87171` (rojo claro)         |

---

### Componente: ProductImage/HoverZoom

Permite interactividad visual sobre las imágenes del producto en tarjetas o galerías.

#### Comportamiento

- Al pasar el cursor, la imagen se escala al 110%.
- Transición suave con `ease-in-out` en `0.3s`.
- Fallback para pantallas táctiles (no hace zoom en mobile).

#### Estilos

```css
.product-image:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

## Componentes de navegacion (Duran Giovanny) 

- Menú superior con buscador
- Selector de idioma y ubicación
- Menú desplegable de cuenta de usuario
- Carrito de compras
- Paginación
- Menú lateral responsive
- Categorías por íconos (estilo "historias" o accesos directos)

## Componentes de Entrada de Usuario (Jordan Guevara)
### Tipografía

- Familia: Sans-serif (sugerida: **Roboto** o **Montserrat**)
- Tamaños estándar: `12px`, `14px`, `16px`
- Peso: Regular / Bold

---

##  Componentes Atómicos

### Botón

Botón reutilizable para acciones primarias.

Estados:
- Default: verde oscuro `#006B3F`, texto blanco
- Hover/Active: verde más claro
- Disabled: fondo desaturado, texto gris claro

---

### Tabs (Pestañas de Navegación)



Estados:
- Activo: fondo verde con texto blanco
- Inactivo: fondo blanco, borde punteado

---

### Inputs (Campos de texto)


Estados:
- Normal: borde gris
- Validado: borde verde
- Deshabilitado: fondo gris claro
- Error: borde rojo + mensaje de error

---

### Checkbox + Texto legal


- Incluye texto informativo con enlace institucional
- Icono de validación en verde
- Útil para formularios con consentimiento

---

### ⬛ Botones Flotantes (Icon Buttons / FABs)

```html
<button class="fab"><i class="icon-filtro"></i></button>
<button class="fab"><i class="icon-busqueda"></i></button>
<button class="fab"><i class="icon-carrito"></i></button>
```

- Estilo circular (`border-radius: 50%`)
- Íconos representativos: filtro, búsqueda, carrito
- Usos: acciones rápidas o accesos flotantes en móviles

##  Componentes Incluidos

### 1. `barra-superior`
Barra de navegación con:
- Logo
- Campo de búsqueda
- Selector de idioma y país
- Cuenta de usuario
- Enlace a devoluciones y pedidos
- Carrito de compras

### 2. `menu-lateral`
Menú desplegable lateral con:
- Enlaces a secciones como ofertas, listas, región, servicio al cliente
- Acceso a cuentas y dispositivos

### 3. `menu-categorias`
Barra visual de categorías con íconos redondos para:
- Vehículos, tecnología, ropa, hogar, deportes, etc.

### 4. `paginacion-productos`
Controles de paginación con botones:
- Anterior / Siguiente
- Números de página dinámicos
## 🧠 Comportamiento

### 🔹 `barra-superior`

- El campo de búsqueda permite ingresar texto y muestra sugerencias dinámicas (simuladas).
- El botón de lupa despliega una lista con resultados recientes.
- El ícono de usuario muestra un menú desplegable con opciones como:
  - Crear listas
  - Ver pedidos
  - Administrar cuenta y membresías
- El selector de idioma permite cambiar entre Español e Inglés. También muestra la región seleccionada.

### 🔹 `menu-lateral`

- Al hacer clic en el botón de menú (☰), se despliega un panel lateral desde la izquierda.
- Contiene enlaces organizados por sección:
  - Navegación principal (Ofertas, Listas, Región, etc.)
  - Sección de "Hola, inicia sesión" con accesos directos a contenido digital como:
    - Kindle, Prime Video, Alexa, Audible, etc.
- Se oculta automáticamente al hacer clic fuera del panel.

### 🔹 `menu-categorias`

- Muestra una fila de íconos redondos representando categorías destacadas como:
  - Tecnología, Electrodomésticos, Ropa, Mascotas, etc.
- Al hacer clic en una categoría, simula la navegación a una sección de productos.
- Se adapta a pantallas pequeñas ocultando el texto y ajustando el tamaño de los íconos.

### 🔹 `paginacion-productos`

- Muestra botones numéricos para navegar entre páginas.
- El botón “Anterior” se desactiva en la primera página.
- Al seleccionar una página o “Siguiente”, se actualiza la vista activa (simulado).

## Referencias
- [Enlace del Figma](https://www.figma.com/design/8tMipBuMrbw83sfuhSUQY7/Sistema-de-Dise%C3%B1o---ESPE-E-commerce?node-id=0-1&t=WuUwI7GtVpzrKKdF-1)
- [Enlace de Imagen de referencia ESPE](https://drive.google.com/file/d/1eKjbo4xj1IXpu0F81JfsnHHbXcAf4ab1/view?usp=sharing)

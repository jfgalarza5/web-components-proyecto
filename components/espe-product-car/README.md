# `<espe-product-car>`

Componente Web personalizado basado en LitElement que representa un ítem dentro del carrito de compras. Este componente visualiza la información básica de un producto añadido al carrito, permite modificar la cantidad de unidades y proporciona una opción para eliminar el producto.

## Descripción 

Este componente presenta una tarjeta horizontal optimizada para mostrar un producto en contexto de carrito. Su diseño compacto incluye imagen del producto, título, precios (actual, anterior y oferta), controles de cantidad y un botón de eliminación.

## Características

- Visualización de información del producto (imagen, título, precios, oferta).
- Comparación de precios: precio anterior tachado y precio actual resaltado, solo si hay oferta.
- Campo de cantidad con botones para incrementar o disminuir unidades.
- Despacho de eventos personalizados:
  - `quantity-changed`: cuando el usuario modifica la cantidad.
  - `remove-from-cart`: cuando el usuario decide eliminar el producto del carrito.

## API del componente

| Propiedad     | Tipo     | Descripción                                                      |
|---------------|----------|------------------------------------------------------------------|
| `title`       | `String` | Nombre o descripción corta del producto.                        |
| `ofert`       | `String` | Texto de oferta visible si existe junto a dos precios.          |
| `priceCurrent`| `String` | Precio actual del producto.                                     |
| `priceNormal` | `String` | Precio anterior, visible con tachado si hay oferta activa.      |
| `imageSrc`    | `String` | Ruta de la imagen del producto.                                 |
| `quantity`    | `Number` | Número de unidades seleccionadas del producto.                  |

## Eventos personalizados

| Evento              | Detalle emitido                                    |
|---------------------|----------------------------------------------------|
| `quantity-changed`  | `{ title: String, quantity: Number }`              |
| `remove-from-cart`  | `{ title: String }`                                |

## Estilos y diseño

- Utiliza Flexbox para alinear imagen, información y acciones en una misma fila.
- Estilos personalizados mediante variables CSS (`--color-primary`, `--color-secondary`, etc.).
- Encapsulado mediante Shadow DOM para aislar estilos.

## Lógica de renderizado

- Si existen `ofert`, `priceCurrent` y `priceNormal`, se muestra el bloque completo con el precio tachado, el precio actual y el texto de oferta.
- Si solo hay `priceNormal` y no hay oferta, se muestra ese precio como valor principal sin tachado.
- Si solo se especifica un precio (`priceCurrent` o `priceNormal`), se muestra como precio activo.

## Ejemplo de uso

```html
<espe-product-car
  title="Laptop Gamer"
  ofert="30% OFF"
  priceCurrent="$700"
  priceNormal="$1000"
  imageSrc="./assets/laptop.png"
  quantity="1"
></espe-product-car>

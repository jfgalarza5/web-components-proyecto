# `<espe-producto-preview>`

Componente Web personalizado basado en LitElement para representar visualmente un producto individual en una tarjeta interactiva, con énfasis en diseño modular y propiedades dinámicas para su integración en catálogos de productos o tiendas en línea.

## Características

- Visualización compacta del producto, con imagen, título, descripción y precios.
- Compatibilidad con precios en oferta y precios normales.
- Comportamiento condicional para mostrar u ocultar elementos como oferta o precios tachados.
- Estilización encapsulada mediante Shadow DOM y variables CSS personalizables.
- Comportamiento interactivo con un botón "Añadir al carrito" que dispara una alerta contextual.
- Adaptación visual responsive para contenedores de ancho limitado (hasta 250px).

## API del componente

| Atributo       | Tipo     | Descripción                                                                 |
|----------------|----------|-----------------------------------------------------------------------------|
| `title`        | `String` | Título del producto.                                                        |
| `description`  | `String` | Descripción corta del producto.                                             |
| `priceCurrent` | `String` | Precio actual del producto.                                                 |
| `priceNormal`  | `String` | Precio original (se muestra tachado si hay una oferta activa).             |
| `ofert`        | `String` | Etiqueta de oferta (por ejemplo "20%"). Solo se muestra si hay dos precios.|
| `imageSrc`     | `String` | Ruta de la imagen del producto.                                             |

## Renderizado Condicional

El componente gestiona tres escenarios para mostrar el precio:

1. **Con oferta activa**: si existen `ofert`, `priceCurrent` y `priceNormal`, se renderiza el precio normal tachado, el precio actual y la insignia de oferta.
2. **Solo precio normal (sin oferta)**: si existe solo `priceNormal`, se renderiza como precio actual sin tachar.
3. **Precio único**: si solo se proporciona `priceCurrent`, se renderiza como el precio final.

## Ejemplo de uso

```html
<espe-producto-preview
  title="Laptop Gamer ESPE"
  description="Procesador Intel i7 y tarjeta RTX 3060"
  priceCurrent="$1200"
  priceNormal="$1500"
  ofert="20%"
  imageSrc="./assets/laptop.png"
></espe-producto-preview>

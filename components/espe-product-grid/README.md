# `<espe-product-grid>`

Componente Web personalizado basado en LitElement que actúa como contenedor de diseño para elementos hijos, especialmente diseñado para mostrar componentes `<espe-producto-preview>` en una estructura de cuadrícula adaptable.

## Descripción

Este componente encapsula una estructura de `grid layout` con soporte para diseño responsivo, utilizando `CSS Grid` para distribuir los elementos hijos de forma uniforme. Sirve como contenedor visual y estructural, permitiendo una organización automática de productos o tarjetas.

## Características

- Sistema de cuadrícula responsive usando `grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))`.
- Alineación automática de tarjetas con `gap` entre columnas y filas.
- Encapsulamiento de estilos mediante Shadow DOM.
- Uso de `<slot>` para insertar cualquier tipo de contenido hijo.

## API del componente

| Propiedad/Slot | Tipo      | Descripción                                                                 |
|----------------|-----------|-----------------------------------------------------------------------------|
| `<slot>`       | `Slot`    | Contenedor de elementos hijos, como múltiples `<espe-producto-preview>`.     |

## Estilos internos

```css
:host {
  display: block;
  padding: 100px;
  max-width: 67%;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
}

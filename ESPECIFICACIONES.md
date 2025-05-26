# Especificaciones de Web Components para eCommerce

## Breakpoints para Responsive Design

Para el uso de los breakpoints se usara la siguiente estructura `CSS` en cada uno de los web components:

```css
@media (min-width: 480px) { /* Teléfonos pequeños (portrait) */ }
@media (min-width: 768px) { /* Tablets / Teléfonos grandes (landscape) */ }
@media (min-width: 1024px) { /* Laptops y pantallas medianas */ }
@media (min-width: 1280px) { /* Desktops */ }
@media (min-width: 1536px) { /* Pantallas grandes */ }
```

## Convenciones de Nombres para Componentes

Se usara nombres jerarquicos y legibles para cada componente siguiendo el patron:
`[Componente]/[Variante]` o `Categoria/Componente/Estado`.

## 1. Componentes de Entrada de Usuario

| Componente                 | Nombre Convención                      |
|----------------------------|----------------------------------------|
| Botón primario             | Button/Primary                         |
| Botón secundario           | Button/Secondary                       |
| Botón deshabilitado        | Button/Disabled                        |
| Input de texto normal      | Input/Text/Normal                      |
| Input hover                | Input/Text/Hover                       |
| Input en foco              | Input/Text/Focus                       |
| Input con error            | Input/Text/Error                       |
| Selector / Dropdown        | Input/Select/Default                   |
| Checkbox activo            | Input/Checkbox/Checked                 |
| Checkbox inactivo          | Input/Checkbox/Unchecked               |
| Radio seleccionado         | Input/Radio/Selected                   |
| Radio no seleccionado      | Input/Radio/Unselected                 |
| Botón cantidad             | Button/Quantity/Increment y Decrement  |


## 2. Componentes de Información de Producto

| Componente                   | Nombre Convención         |
|------------------------------|---------------------------|
| Tarjeta normal               | ProductCard/Default       |
| Tarjeta destacada            | ProductCard/Featured      |
| Tarjeta agotada              | ProductCard/SoldOut       |
| Precio normal                | Price/Normal              |
| Precio con descuento         | Price/Discounted          |
| Imagen con hover zoom        | ProductImage/HoverZoom    |


## 3. Componentes de Formularios y Validación

| Componente                   | Nombre Convención                         |
|------------------------------|-------------------------------------------|
| Formulario de registro       | Form/Auth/Register                        |
| Formulario de login          | Form/Auth/Login                           |
| Formulario de checkout       | Form/Checkout                             |
| Campo con validación         | Input/Validated/Success                   |
| Dirección de envío           | Form/Shipping/AddressField                |


## 4. Componentes de Navegación

| Componente                 | Nombre Convención             |
|----------------------------|-------------------------------|
| Barra de navegación        | Navbar/Default                |
| Menú de categorías         | Menu/Categories/Dropdown      |
| Breadcrumbs                | Navigation/Breadcrumbs        |
| Paginación                 | Navigation/Pagination         |


## 5. Componentes de Feedback y Estado

| Componente                   | Nombre Convención         |
|------------------------------|---------------------------|
| Alerta de éxito              | Alert/Success             |
| Alerta de error              | Alert/Error               |
| Alerta de advertencia        | Alert/Warning             |
| Loader / Spinner             | Feedback/Spinner          |
| Modal (añadir al carrito)    | Modal/AddToCart           |
| Tooltip                      | Tooltip/Default           |
| Notificación flotante        | Notification/Floating     |

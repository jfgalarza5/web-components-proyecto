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

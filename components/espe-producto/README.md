
---

## 📘 `README_product-rating.md`

```markdown
# 🌟 Componente `<product-rating>`

Este componente representa la vista de un producto con la funcionalidad de calificarlo mediante **estrellas interactivas**.

---

## 📌 Funcionalidades

- Mostrar imagen del producto (placeholder).
- Título "Califica el producto".
- Calificación del producto de 1 a 5 estrellas.
- Estrellas llenas o vacías según la puntuación dada.
- Botón de "Calificar" sin funcionalidad activa (solo visual).

---

## 🧩 Propiedades

| Propiedad | Tipo   | Descripción                           |
|-----------|--------|---------------------------------------|
| `rating`  | Number | Número de estrellas seleccionadas (1-5)|

---

## 🧠 Lógica de estrellas

- Las estrellas son íconos `★` que cambian su color a **oro** (`gold`) si están seleccionadas.
- Se utiliza un bucle `map()` para renderizar dinámicamente las estrellas.

---

## 🎨 Estilos

- Fondo gris claro `#f1efef`
- Imagen redonda del producto
- Estrellas grandes e interactivas
- Estilo limpio, con botón visualmente centrado

---

## 💡 Ejemplo de uso

```html
<product-rating></product-rating>


---

## 📘 `README_product-comment.md`

```markdown
# 💬 Componente `<product-comment>`

Este componente permite al usuario escribir una opinión sobre un producto y manejar hasta 4 estados visuales según el botón presionado: **inicial, cancelado, enviado**, y visualmente actualizado con colores y textos específicos.

---

## 📌 Funcionalidades

- Caja de texto para escribir comentario (máximo 1500 caracteres).
- Botones para **Enviar opinión** y **Cancelar**.
- Indicador circular que cambia de color según el estado.
- Texto del botón cambia dinámicamente.

---

## 🧩 Propiedades

| Propiedad | Tipo   | Descripción                                           |
|-----------|--------|-------------------------------------------------------|
| `status`  | String | Puede ser `"initial"`, `"cancelled"`, `"sent"`       |
| `comment` | String | Contenido actual del comentario (textarea)           |

---

## 🧠 Estados de comportamiento

1. **Inicial** (`status = 'initial'`):
   - Círculo gris
   - Botones normales: "Enviar opinión", "Cancelar"

2. **Cancelado** (`status = 'cancelled'`):
   - Círculo rojo (`#F20F13`)
   - Botón de cancelar cambia a color rojo y texto "Opinión cancelada"

3. **Enviado** (`status = 'sent'`):
   - Círculo verde (`#006935`)
   - Botón de enviar cambia a verde y texto "Opinión enviada"

---

## 🎨 Estilos

- Fondo gris claro `#d8d0ce`
- Botones redondeados con color dinámico
- Indicador circular (parte superior izquierda)
- Límite visible de caracteres en tiempo real

---

## 💡 Ejemplo de uso

```html
<product-comment></product-comment>

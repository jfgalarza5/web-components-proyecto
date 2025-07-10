# 🔷 Componente `<user-profile>`

Este componente muestra un perfil de usuario con dos estados posibles: **Invitado** y **Usuario registrado**. Muestra un avatar, el nombre del usuario, su correo y un botón para cambiar de estado.

---

## 📌 Funcionalidades

- Mostrar **perfil de invitado** por defecto.
- Mostrar nombre y correo reales al cambiar al estado de **usuario**.
- Cambiar dinámicamente entre los dos estados al hacer clic en el botón.
- Estilos visuales que imitan una tarjeta elegante con esquinas redondeadas.

---

## 🧩 Propiedades

| Propiedad  | Tipo    | Descripción                        |
|------------|---------|------------------------------------|
| `isGuest`  | Boolean | `true` si está en modo invitado.   |

---

## 🎨 Estilos

- Fondo gris claro `#f1efef`
- Avatar redondo con ícono de usuario (`👤`)
- Tipografía sencilla y centrada
- Botón estilizado con color neutro

---

## 💡 Ejemplo de uso

```html
<user-profile></user-profile>

# 🔐 Componente `<login-form>`

Este componente permite al usuario iniciar sesión ingresando su correo electrónico y contraseña. Valida ambos campos y proporciona retroalimentación visual en función de si los datos son válidos o no. Además, incluye una funcionalidad para mostrar/ocultar la contraseña y un botón para redirigir a registro.

---

## 📌 Funcionalidades

- Campo para ingresar el correo electrónico.
- Campo para ingresar la contraseña con botón tipo "ojo" 👁️ para mostrarla u ocultarla.
- Validación de email (formato correcto) y contraseña (mínimo 6 caracteres).
- Retroalimentación visual con bordes de colores:
  - Azul `#0077FF` si es válido
  - Rojo `#F20F13` si es inválido
- Botón "Iniciar Sesión" que muestra una alerta si los datos son correctos.
- Botón secundario "No tienes cuenta, Regístrate".

---

## 🧩 Propiedades

| Propiedad       | Tipo     | Descripción                                                    |
|-----------------|----------|----------------------------------------------------------------|
| `email`         | String   | Valor actual del campo de correo electrónico                   |
| `password`      | String   | Valor actual del campo de contraseña                           |
| `showPassword`  | Boolean  | Define si la contraseña se muestra como texto o como puntos    |
| `validEmail`    | Boolean  | Indica si el correo electrónico tiene formato válido           |
| `validPassword` | Boolean  | Indica si la contraseña cumple con la longitud mínima requerida |

---

## 🧠 Estados de comportamiento

1. **Campo de correo válido**:
   - Borde inferior azul
   - Se permite enviar

2. **Campo de correo inválido**:
   - Borde inferior rojo
   - Se bloquea el envío

3. **Campo de contraseña válida (≥ 6 caracteres)**:
   - Borde azul

4. **Campo de contraseña inválida (< 6 caracteres)**:
   - Borde rojo

5. **Mostrar contraseña activado**:
   - El campo muestra el texto ingresado

6. **Mostrar contraseña desactivado**:
   - El campo oculta el texto ingresado (tipo password)

---

## 🎨 Estilos

- Fondo principal: gris oscuro `#1e1e1e`
- Tarjeta del formulario: fondo gris claro `#d8d0ce` con bordes redondeados `30px`
- Inputs: estilo limpio con transición de borde al validar
- Icono 👁️ de mostrar/ocultar contraseña posicionado a la derecha del campo
- Botones:
  - Principal: ancho completo, fondo igual al contenedor
  - Secundario: color más claro `#b3a7a4`, texto pequeño

---

## 💡 Ejemplo de uso

```html
<!-- Importar el componente -->
<script type="module" src="./components/login-form.js"></script>

<!-- Usar el componente en tu HTML -->
<login-form></login-form>

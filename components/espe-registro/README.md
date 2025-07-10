# 📝 Componente `<register-form>`

Este componente permite a un usuario registrarse ingresando su nombre completo, correo electrónico y contraseña. Incluye validaciones individuales para cada campo y proporciona retroalimentación visual inmediata. También ofrece un botón secundario para redirigir al formulario de inicio de sesión.

---

## 📌 Funcionalidades

- Campo de texto para ingresar nombre completo.
- Campo para correo electrónico con validación de formato.
- Campo para contraseña con verificación de longitud mínima.
- Validación visual:
  - Azul `#0077FF` si es válido
  - Rojo `#F20F13` si es inválido
- Botón "Registrate" que valida los campos y muestra alerta si son correctos.
- Botón secundario "Si tienes cuenta Inicia Sesión".

---

## 🧩 Propiedades

| Propiedad       | Tipo     | Descripción                                                    |
|-----------------|----------|----------------------------------------------------------------|
| `name`          | String   | Valor del campo de nombre completo                             |
| `email`         | String   | Valor del campo de correo electrónico                          |
| `password`      | String   | Valor del campo de contraseña                                  |
| `validName`     | Boolean  | Indica si el nombre no está vacío                              |
| `validEmail`    | Boolean  | Indica si el correo electrónico tiene formato válido           |
| `validPassword` | Boolean  | Indica si la contraseña cumple con la longitud mínima requerida |

---

## 🧠 Estados de comportamiento

1. **Campo nombre válido**:
   - Input con borde inferior azul.

2. **Campo nombre inválido (vacío)**:
   - Input con borde inferior rojo.

3. **Correo válido**:
   - Borde azul; se permite continuar.

4. **Correo inválido (mal formato)**:
   - Borde rojo; se impide continuar.

5. **Contraseña válida (≥ 6 caracteres)**:
   - Borde azul.

6. **Contraseña inválida (< 6 caracteres)**:
   - Borde rojo.

7. **Todos los campos válidos**:
   - Muestra alerta `Registro exitoso ✅`.

---

## 🎨 Estilos

- Fondo principal oscuro `#1e1e1e`.
- Tarjeta de formulario con fondo claro `#d8d0ce` y bordes redondeados `30px`.
- Inputs con borde inferior que cambia de color según validez.
- Botones:
  - Principal: ancho completo, sin bordes, texto en negrita.
  - Secundario: más claro `#b3a7a4`, texto más pequeño.
- Fuente general: Arial, sans-serif.

---

## 💡 Ejemplo de uso

```html
<!-- Importar el componente -->
<script type="module" src="./components/register-form.js"></script>

<!-- Usar el componente -->
<register-form></register-form>

# Componente: `<espe-envio-gratis>`

Este componente fue creado para mostrar una barra de progreso que indica cuanto falta para que el usuario obtenga el envio gratis. Utiliza propiedades configurables, estilos dinamicos con CSS variables, validacion automatica y permite adaptarse a tema claro u oscuro. Es un complemento perfecto para interfaces de carrito o resumen de compra.

---

## Cambio de tema con CSS Variables

El componente usa la propiedad `tema` que puede ser `"claro"` o `"oscuro"`. Al cambiarla, se actualizan los colores visuales mediante variables CSS internas.

```html
<espe-envio-gratis total-actual="42" total-gratis="50" tema="oscuro"></espe-envio-gratis>
```
Los colores como fondo, texto, barra activa y borde se ajustan automaticamente segun el modo.

## Comunicacion entre componentes

Este componente puede trabajar en conjunto con otros. Por ejemplo, el resumen de compra puede emitir un evento o actualizar la propiedad total-actual en tiempo real para reflejar el avance del usuario hacia el monto minimo de envio gratuito.

## Validacion de atributos

Para evitar errores, el componente valida que los valores de totalActual y totalGratis sean numeros. Si detecta un valor no numerico, lanza una advertencia en consola y reinicia la propiedad a 0.

```js
updated() {
  ['totalActual', 'totalGratis'].forEach(prop => {
    if (typeof this[prop] !== 'number' || isNaN(this[prop])) {
      console.warn(`Propiedad ${prop} no valida, se reinicia a 0`);
      this[prop] = 0;
    }
  });
}
```

## Como funciona
La barra de progreso se llena en proporcion a cuanto ha acumulado el usuario (totalActual) respecto al minimo requerido (totalGratis).

- Si totalActual es menor: se muestra un mensaje con el monto restante
- Si totalActual alcanza o supera totalGratis: se muestra "Envio gratis" en color verde

## Ejemplo de uso
```html
<espe-envio-gratis
  total-actual="35"
  total-gratis="50"
  tema="claro"
></espe-envio-gratis>
```

## Capturas

Modo claro
![Modo Claro](/docs/espe-envio-gratis/claro.png)

Modo oscuro
![Modo Claro](/docs/espe-envio-gratis/oscuro.png)
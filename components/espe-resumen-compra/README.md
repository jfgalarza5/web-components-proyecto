# Componente: `<espe-resumen-compra>`

Este componente fue creado como una solucion practica para mostrar un resumen de compra con productos, envio, impuestos y total, todo en un diseño ordenado y adaptable. Ademas, incluye caracteristicas utiles como el cambio entre modo claro u oscuro, eventos personalizados para comunicarse con otros componentes y validacion automatica de datos.

---

## Temas claro/oscuro con CSS Variables

Tiene una propiedad llamada `tema` que acepta `"claro"` o `"oscuro"`. Dependiendo del valor, ajusta automaticamente los colores usando variables CSS. No hay que definir estilos externos, el componente los aplica por si solo.

```js
_aplicarTema() {
  if (this.tema === 'oscuro') {
    this.style.setProperty('--fondo', '#121212');
    this.style.setProperty('--texto', '#f0f0f0');
    this.style.setProperty('--verde', '#66bb6a');
    this.style.setProperty('--verde-hover', '#4caf50');
    this.style.setProperty('--borde', '#444444');
  } else {
    this.style.setProperty('--fondo', '#ffffff');
    this.style.setProperty('--texto', '#000000');
    this.style.setProperty('--verde', '#28a745');
    this.style.setProperty('--verde-hover', '#218838');
    this.style.setProperty('--borde', '#cccccc');
  }
}
```

## Comunicacion entre componentes
El componente puede recibir eventos personalizados. Por ejemplo, si otro elemento lanza el evento producto-agregado, el resumen actualiza su total de productos:
```js
this.dispatchEvent(new CustomEvent('producto-agregado', {
  detail: { precio: 49.99 },
  bubbles: true,
  composed: true
}));
```
Internamente, el componente lo escucha y suma ese precio al valor actual de productos.

## Validacion automatica
Si se le pasan valores incorrectos a productos, envio o impuestos, el componente revisa que sean numeros. Si no lo son, lanza una advertencia en consola y reinicia el valor a 0, evitando errores de calculo.

## Que muestra
Una vista ordenada con:
- Precio de productos
- Impuestos
- Envio (si es 0, se muestra "Gratis" en color verde)
- Total calculado automaticamente

Y un boton de "Continuar compra" bien destacado.

## Ejemplo de uso
```html
<espe-resumen-compra
  productos="120"
  envio="0"
  impuestos="24"
  tema="oscuro"
></espe-resumen-compra>
```

## Capturas
Modo claro

![Modo Claro](/docs/espe-resumen-compra/claro.png)

Modo oscuro

![Modo Claro](/docs/espe-resumen-compra/oscuro.png)
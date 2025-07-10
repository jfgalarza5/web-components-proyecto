# Componente: `<espe-boton-carrito>`

Este componente muestra un icono de carrito con una insignia que indica la cantidad de productos. Utiliza propiedades configurables, estilos con CSS variables para modo claro y oscuro, y validacion automatica de atributos.

---

## Propiedades disponibles

- `cantidad`: cantidad numerica de productos en el carrito (insignia)
- `tema`: valor `"claro"` o `"oscuro"` para cambiar estilos

---

## Cambio de tema con CSS Variables

La propiedad `tema` actualiza automaticamente los estilos internos con variables CSS. No necesita configuracion externa, se adapta por si solo:

```js
_aplicarTema() {
  const s = this.style;
  if (this.tema === 'oscuro') {
    s.setProperty('--fondo-icono', '#2e7d32');
    s.setProperty('--color-icono', '#ffffff');
    s.setProperty('--color-badge', '#43a047');
  } else {
    s.setProperty('--fondo-icono', '#e0f2f1');
    s.setProperty('--color-icono', '#2e7d32');
    s.setProperty('--color-badge', '#2e7d32');
  }
}
```
## Validacion de atributos
El componente valida que cantidad sea un numero. Si no lo es, se lanza un aviso en consola y se reinicia a cero para evitar fallos visuales:
```js
updated() {
  this._aplicarTema();
  if (typeof this.cantidad !== 'number' || isNaN(this.cantidad)) {
    console.warn('Propiedad cantidad no valida, se reinicia a 0');
    this.cantidad = 0;
  }
}
```
## Evento personalizado: carrito-click

Cada vez que el usuario hace clic sobre el icono del carrito, el componente lanza un evento personalizado llamado `carrito-click`.

Esto permite que otros componentes o scripts escuchen la interaccion y tomen accion, como abrir un panel lateral, redirigir a la pagina del resumen o mostrar un modal.


```js
this.dispatchEvent(new CustomEvent('carrito-click', {
  detail: { cantidad: this.cantidad },
  bubbles: true,
  composed: true
}));
```

## Uso del componente
```html
<espe-icono-carrito cantidad="5" tema="claro"></espe-icono-carrito>
```
La insignia se muestra solo si cantidad es mayor a 0. En caso contrario, se oculta.

## Capturas

Al llamar el componente en tu html se ve asi:

![Componente](/docs/espe-boton-carrito/boton.png)
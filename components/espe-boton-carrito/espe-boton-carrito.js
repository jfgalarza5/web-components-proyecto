import { LitElement, html } from 'lit';

class ESPEBotonCarrito extends LitElement {
  static get properties() {
    return {
      cantidad: { type: Number },
      tema: { type: String }
    };
  }

  constructor() {
    super();
    this.cantidad = 0;
    this.tema = 'claro';
  }

  updated() {
    this._aplicarTema();
  }

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

  render() {
    return html`
      <div style="background-color: var(--fondo-icono); color: var(--color-icono); padding: 10px; border-radius: 50%;">
        Boton carrito
      </div>
    `;
  }
}

customElements.define('espe-boton-carrito', ESPEBotonCarrito);

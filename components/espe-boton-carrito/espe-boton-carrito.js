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
      <div class="contenedor-icono">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.65 2.83L5.35 6.38H10.31L12.25 2.83H3.65ZM2.98 1.42H13.42C13.69 1.42 13.9 1.54 14.04 1.78C14.18 2.02 14.19 2.27 14.06 2.51L11.55 7.05C11.42 7.28 11.24 7.47 11.02 7.6C10.81 7.73 10.57 7.79 10.31 7.79H5.03L4.25 9.21H12.04C12.24 9.21 12.41 9.28 12.55 9.41C12.68 9.55 12.75 9.72 12.75 9.92C12.75 10.12 12.68 10.29 12.55 10.42C12.41 10.56 12.24 10.63 12.04 10.63H4.25C3.72 10.63 3.32 10.39 3.05 9.93C2.77 9.46 2.76 9 3.01 8.54L3.97 6.8L1.42 1.42H0.71C0.51 1.42 0.34 1.35 0.2 1.21C0.07 1.08 0 0.91 0 0.71C0 0.51 0.07 0.34 0.2 0.2C0.34 0.07 0.51 0 0.71 0H1.86C1.99 0 2.11 0.04 2.23 0.11C2.35 0.18 2.44 0.28 2.5 0.41L2.98 1.42Z"/>
        </svg>
      </div>
    `;
  }
}

customElements.define('espe-boton-carrito', ESPEBotonCarrito);

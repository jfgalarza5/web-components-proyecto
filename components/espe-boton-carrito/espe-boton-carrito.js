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

  render() {
    return html`
      <div>Boton carrito</div>
    `;
  }
}

customElements.define('espe-boton-carrito', ESPEBotonCarrito);

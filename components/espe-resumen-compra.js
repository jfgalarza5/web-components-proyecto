import { LitElement, html } from 'lit';

class ESPEResumenCompra extends LitElement {
  static get properties() {
    return {
      productos: { type: Number },
      envio: { type: Number },
      impuestos: { type: Number }
    };
  }

  constructor() {
    super();
    this.productos = 0;
    this.envio = 0;
    this.impuestos = 0;
  }

  render() {
    return html`<p>Resumen de compra</p>`;
  }
}

customElements.define('espe-resumen-compra', ESPEResumenCompra);

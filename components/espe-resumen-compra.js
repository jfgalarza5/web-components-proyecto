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

  calcularTotal() {
    return `$${(this.productos + this.envio + this.impuestos).toFixed(2).replace('.', ',')}`;
  }

  render() {
    return html`
      <div>
        <h2>Resumen de compra</h2>
        <p>Productos: $${this.productos.toFixed(2).replace('.', ',')}</p>
        <p>Impuestos: $${this.impuestos.toFixed(2).replace('.', ',')}</p>
        <p>Envío: $${this.envio.toFixed(2).replace('.', ',')}</p>
        <p>Total: ${this.calcularTotal()}</p>
      </div>
    `;
  }
}

customElements.define('espe-resumen-compra', ESPEResumenCompra);

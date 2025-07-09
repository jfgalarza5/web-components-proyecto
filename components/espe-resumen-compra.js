import { LitElement, html, css } from 'lit';

class ESPEResumenCompra extends LitElement {
  static get properties() {
    return {
      productos: { type: Number },
      envio: { type: Number },
      impuestos: { type: Number }
    };
  }

  static get styles() {
    return (() => {
      return css`
        :host {
          display: block;
          max-width: 400px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
        }

        .contenedor-resumen {
          border: 1px solid #e0e0e0;
          border-radius: 16px;
          padding: 16px;
          background-color: #ffffff;
        }

        .titulo {
          font-size: 16px;
          border-bottom: 1px solid #cccccc;
          padding-bottom: 15px;
        }

        .fila, .fila-total {
          display: flex;
          font-size: 15px;
          justify-content: space-between;
          margin: 8px 0;
        }

        .fila-total {
          font-weight: bold;
          font-size: 16px;
          margin-top: 16px;
          border-top: 1px solid #cccccc;
          padding-top: 8px;
        }

        .envio-gratis {
          color: #28a745;
          font-weight: bold;
        }

        .boton-continuar {
          display: block;
          margin-top: 20px;
          padding: 12px;
          background-color: #28a745;
          color: #ffffff;
          text-align: center;
          text-decoration: none;
          font-weight: bolder;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .boton-continuar:hover {
          background-color: #218838;
        }
      `;
    })();
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

  renderEnvio() {
    if (this.envio === 0) {
      return html`<span class="envio-gratis">Gratis</span>`;
    }
    return html`$${this.envio.toFixed(2).replace('.', ',')}`;
  }

  render() {
    return html`
      <div class="contenedor-resumen">
        <h2 class="titulo">Resumen de compra</h2>
        <div class="fila">
          <span>Productos</span>
          <span>$${this.productos.toFixed(2).replace('.', ',')}</span>
        </div>
        <div class="fila">
          <span>Impuestos</span>
          <span>${this.impuestos.toFixed(2).replace('.', ',')}</span>
        </div>
        <div class="fila">
          <span>Envío</span>
          <span>${this.renderEnvio()}</span>
        </div>
        <div class="fila-total">
          <span>Total</span>
          <span>${this.calcularTotal()}</span>
        </div>
        <a href="#" class="boton-continuar">Continuar compra</a>
      </div>
    `;
  }
}

customElements.define('espe-resumen-compra', ESPEResumenCompra);

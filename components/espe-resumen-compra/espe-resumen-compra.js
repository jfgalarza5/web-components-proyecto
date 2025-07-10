import { LitElement, html, css } from 'lit';

class ESPEResumenCompra extends LitElement {
  static get properties() {
    return {
      productos: { type: Number },
      envio: { type: Number },
      impuestos: { type: Number },
      tema: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 400px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
      }

      .contenedor-resumen {
        border: 1px solid var(--borde);
        border-radius: 16px;
        padding: 16px;
        background-color: var(--fondo);
        color: var(--texto);
      }

      .titulo {
        font-size: 16px;
        border-bottom: 1px solid var(--borde);
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
        border-top: 1px solid var(--borde);
        padding-top: 8px;
      }

      .envio-gratis {
        color: var(--verde);
        font-weight: bold;
      }

      .boton-continuar {
        display: block;
        margin-top: 20px;
        padding: 12px;
        background-color: var(--verde);
        color: #ffffff;
        text-align: center;
        text-decoration: none;
        font-weight: bolder;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .boton-continuar:hover {
        background-color: var(--verde-hover);
      }
    `;
  }

  constructor() {
    super();
    this.productos = 0;
    this.envio = 0;
    this.impuestos = 0;
    this.tema = 'claro'; // Por defecto claro
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('producto-agregado', (e) => {
      if (typeof e.detail?.precio === 'number') {
        this.productos += e.detail.precio;
      }
    });
  }

  updated(changedProps) {
    this._aplicarTema();

    ['productos', 'envio', 'impuestos'].forEach(prop => {
      if (typeof this[prop] !== 'number' || isNaN(this[prop])) {
        console.warn(`Propiedad ${prop} no válida, se reinicia a 0`);
        this[prop] = 0;
      }
    });
  }

  _aplicarTema() {
    const root = this.style;
    if (this.tema === 'oscuro') {
      root.setProperty('--fondo', '#121212');
      root.setProperty('--texto', '#f0f0f0');
      root.setProperty('--verde', '#66bb6a');
      root.setProperty('--verde-hover', '#4caf50');
      root.setProperty('--borde', '#444444');
    } else {
      root.setProperty('--fondo', '#ffffff');
      root.setProperty('--texto', '#000000');
      root.setProperty('--verde', '#28a745');
      root.setProperty('--verde-hover', '#218838');
      root.setProperty('--borde', '#cccccc');
    }
  }

  calcularTotal() {
    return `$${(this.productos + this.envio + this.impuestos).toFixed(2).replace('.', ',')}`;
  }

  renderEnvio() {
    return this.envio === 0
      ? html`<span class="envio-gratis">Gratis</span>`
      : html`$${this.envio.toFixed(2).replace('.', ',')}`;
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
          <span>$${this.impuestos.toFixed(2).replace('.', ',')}</span>
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
import { LitElement, html } from 'lit';

class ESPEEnvioGratis extends LitElement {
  static get properties() {
    return {
      totalActual: { type: Number },
      totalGratis: { type: Number },
      tema: { type: String }
    };
  }

  constructor() {
    super();
    this.totalActual = 0;
    this.totalGratis = 50;
    this.tema = 'claro';
  }

  connectedCallback() {
    super.connectedCallback();
    this._aplicarTema();
  }

  updated() {
    this._aplicarTema();
    ['totalActual', 'totalGratis'].forEach(prop => {
      if (typeof this[prop] !== 'number' || isNaN(this[prop])) {
        console.warn(`Propiedad ${prop} no válida, se reinicia a 0`);
        this[prop] = 0;
      }
    });
  }

  _aplicarTema() {
    const root = this.style;
    if (this.tema === 'oscuro') {
      root.setProperty('--envio-fondo', '#222');
      root.setProperty('--envio-texto', '#eee');
    } else {
      root.setProperty('--envio-fondo', '#f9f9f9');
      root.setProperty('--envio-texto', '#333');
    }
  }

  render() {
    return html`
      <div style="background: var(--envio-fondo); color: var(--envio-texto); padding: 10px;">
        Tema: ${this.tema}
      </div>
    `;
  }
}

customElements.define('espe-envio-gratis', ESPEEnvioGratis);

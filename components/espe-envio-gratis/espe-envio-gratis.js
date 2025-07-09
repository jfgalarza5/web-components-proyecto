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

  render() {
    return html`<p>Total actual: ${this.totalActual}</p>`;
  }
}

customElements.define('espe-envio-gratis', ESPEEnvioGratis);

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

  calcularProgreso() {
    const porcentaje = Math.min((this.totalActual / this.totalGratis) * 100, 100);
    return `${porcentaje}%`;
  }

  renderEstado() {
    if (this.totalActual >= this.totalGratis) {
      return html`<p>¡Envío gratis!</p>`;
    }
    const faltante = (this.totalGratis - this.totalActual).toFixed(2);
    return html`<p>Te faltan $${faltante} para el envío gratis</p>`;
  }

  render() {
    return html`
      <div>
        <h3>Envío</h3>
        ${this.renderEstado()}
        <div>Progreso: ${this.calcularProgreso()}</div>
      </div>
    `;
  }
}

customElements.define('espe-envio-gratis', ESPEEnvioGratis);

import { LitElement, html, css } from 'lit';

class ESPEBotonCarrito extends LitElement {
  static get properties() {
    return {
      cantidad: { type: Number },
      tema: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      .contenedor-icono {
        position: relative;
        width: 30px;
        height: 30px;
        background-color: var(--fondo-icono);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-icono);
        font-size: 20px;
        cursor: pointer;
      }

      .badge {
        position: absolute;
        top: -2px;
        right: -4px;
        background-color: var(--color-badge);
        color: white;
        font-size: 8px;
        font-weight: bold;
        padding: 2px 6px;
        border-radius: 12px;
      }
    `;
  }

  constructor() {
    super();
    this.cantidad = 0;
    this.tema = 'claro';
  }

  updated() {
    this._aplicarTema();

    if (typeof this.cantidad !== 'number' || isNaN(this.cantidad)) {
      console.warn('Propiedad cantidad no valida, se reinicia a 0');
      this.cantidad = 0;
    }
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

  _emitirEventoClick() {
    this.dispatchEvent(new CustomEvent('carrito-click', {
      detail: { cantidad: this.cantidad },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="contenedor-icono" @click=${this._emitirEventoClick}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.25 14.1667C3.86042 14.1667 3.52691 14.028 3.24948 13.7505C2.97205 13.4731 2.83333 13.1396 2.83333 12.75C2.83333 12.3604 2.97205 12.0269 3.24948 11.7495C3.52691 11.472 3.86042 11.3333 4.25 11.3333C4.63958 11.3333 4.97309 11.472 5.25052 11.7495C5.52795 12.0269 5.66667 12.3604 5.66667 12.75C5.66667 13.1396 5.52795 13.4731 5.25052 13.7505C4.97309 14.028 4.63958 14.1667 4.25 14.1667ZM11.3333 14.1667C10.9437 14.1667 10.6102 14.028 10.3328 13.7505C10.0554 13.4731 9.91667 13.1396 9.91667 12.75C9.91667 12.3604 10.0554 12.0269 10.3328 11.7495C10.6102 11.472 10.9437 11.3333 11.3333 11.3333C11.7229 11.3333 12.0564 11.472 12.3339 11.7495C12.6113 12.0269 12.75 12.3604 12.75 12.75C12.75 13.1396 12.6113 13.4731 12.3339 13.7505C12.0564 14.028 11.7229 14.1667 11.3333 14.1667ZM3.64792 2.83333L5.34792 6.375H10.3062L12.2542 2.83333H3.64792ZM2.975 1.41667H13.4229C13.6944 1.41667 13.901 1.53767 14.0427 1.77969C14.1844 2.0217 14.1903 2.26667 14.0604 2.51458L11.5458 7.04792C11.416 7.28403 11.2418 7.46701 11.0234 7.59688C10.805 7.72674 10.566 7.79167 10.3062 7.79167H5.02917L4.25 9.20833H12.0417C12.2424 9.20833 12.4106 9.27622 12.5464 9.41198C12.6821 9.54774 12.75 9.71597 12.75 9.91667C12.75 10.1174 12.6821 10.2856 12.5464 10.4214C12.4106 10.5571 12.2424 10.625 12.0417 10.625H4.25C3.71875 10.625 3.31736 10.3918 3.04583 9.92552C2.77431 9.4592 2.7625 8.99583 3.01042 8.53542L3.96667 6.8L1.41667 1.41667H0.708333C0.507639 1.41667 0.33941 1.34878 0.203646 1.21302C0.0678819 1.07726 0 0.909028 0 0.708333C0 0.507639 0.0678819 0.33941 0.203646 0.203646C0.33941 0.067882 0.507639 0 0.708333 0H1.85937C1.98924 0 2.11319 0.0354167 2.23125 0.10625C2.34931 0.177083 2.43785 0.277431 2.49688 0.407292L2.975 1.41667Z" fill="black"/>
        </svg>

        ${this.cantidad > 0
          ? html`<span class="badge">${this.cantidad}</span>`
          : ''}
      </div>
    `;
  }
}

customElements.define('espe-boton-carrito', ESPEBotonCarrito);

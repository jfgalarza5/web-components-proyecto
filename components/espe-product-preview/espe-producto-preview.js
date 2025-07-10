import { LitElement, html, css } from 'lit';

export class EspeProductoPreview extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    ofert:{type:String},
    priceCurrent: { type: String },
    priceNormal: { type: String },
    imageSrc: { type: String },
    enCarrito: { type: Boolean } 
  };

  static styles = css`
    :host {
      --color-default: #f0f0f0;
      --color-primary: #006935;
      --color-secondary: #E63329;
      --color-third: #FFE700;
      --color-fourth: #A05C00;
      --color-fifth: #892301;
      --color-sixth: #000000;
      --color-text-primary: #1D1D1B;
      --color-text-secondary: #1D1D1B;
      display: block;
      max-width: 250px;
      background-color: var(--color-default);
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      color: var(--color-text-primary);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      overflow: hidden;
      user-select: none;
      margin: 1rem auto;
    }

    .image-container {
      width: 100%;
      height: 200px;
      overflow: hidden;
      border-bottom: 2px solid var(--color-primary);
    }

    .image-container img {
      width: 90%;
      height: 90%;
      object-fit: cover;
      border-radius: 12px 12px 0 0;
      transition: transform 0.3s ease;
      cursor: pointer;
    }
    .image-container img:hover {
      transform: scale(1.05);
    }

    .info {
      padding: 1rem 1.25rem;
      text-align: left;
    }

    .product-title {
      font-size: 1.3rem;
      font-weight: 700;
      margin: 0 0 0.4rem 0;
      color: var(--color-text-primary);
    }

    .product-description {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      margin-bottom: 1rem;
      min-height: 40px;
    }

    .price {
      display: flex;
      align-items: baseline;
      gap: 0.8rem;
      margin-bottom: 1rem;
    }

    .price-current {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--color-primary);
    }

    .price-normal {
      font-size: 0.95rem;
      color: var(--color-text-secondary);
      text-decoration: line-through;
    }
    .ofert {
      background-color: none;
      color: var(--color-secondary);
      padding: 0.2rem 0.5rem;
      border-radius: 100px;
      border: 2px solid var(--color-secondary);
      font-size: 0.8rem;
      font-weight: 600;
      margin-left: 0.5rem;
      display: inline-block;
    }


    button {
      width: 100%;
      background-color: var(--color-default);
      color: var(--color-text-primary);
      font-weight: 600;
      padding: 0.7rem 0;
      border: none;
      border-radius: 100px;
      cursor: pointer;
      border: 2px solid var(--color-sixth);
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: var(--color-primary);
      color: var(--color-default);
    }

    button.en-carrito {
      background-color: var(--color-primary);
      color: var(--color-default);
      border-color: var(--color-primary);
    }
  `;

  constructor() {
    super();
    this.title = '';
    this.ofert = '';
    this.description = '';
    this.priceCurrent = '';
    this.priceNormal = '';
    this.imageSrc = '';
    this.enCarrito = false;
  }

  render() {
    const showOfertaCompleta = this.ofert && this.priceCurrent && this.priceNormal;
    const mostrarSoloNormal = !this.ofert && this.priceNormal;

    return html`
      <div class="image-container">
        <img src="${this.imageSrc}" alt="Producto computadora" />
      </div>
      <div class="info">
        <h3 class="product-title">${this.title}</h3>
        <div class="price">
          ${showOfertaCompleta
            ? html`
                <span class="price-normal">${this.priceNormal}</span>
                <span class="price-current">${this.priceCurrent}</span>
                <span class="ofert">${this.ofert}</span>
              `
            : mostrarSoloNormal
            ? html`<span class="price-current">${this.priceNormal}</span>`
            : html`<span class="price-current">${this.priceCurrent || this.priceNormal}</span>`}
        </div>
        <p class="product-description">${this.description}</p>
        <button
          class="${this.enCarrito ? 'en-carrito' : ''}"
          @click=${this._toggleCarrito}
        >
          ${this.enCarrito ? 'Quitar del carrito' : 'Añadir al carrito'}
        </button>
      </div>
    `;
  }

  _toggleCarrito() {
    this.enCarrito = !this.enCarrito;

    this.dispatchEvent(new CustomEvent(
      this.enCarrito ? 'producto-anadido' : 'producto-removido',
      {
        detail: { producto: this.title },
        bubbles: true,
        composed: true
      }
    ));
  }
}

customElements.define('espe-producto-preview', EspeProductoPreview);
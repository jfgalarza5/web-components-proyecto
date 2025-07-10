import { LitElement, html, css } from 'lit';

export class EspeCartItem extends LitElement {
  static properties = {
    title: { type: String },
    ofert: { type: String },
    priceCurrent: { type: String },
    priceNormal: { type: String },
    imageSrc: { type: String },
    quantity: { type: Number }
  };

  static styles = css`
    :host {
      --color-default: #f0f0f0;
      --color-primary: #006935;
      --color-secondary: #E63329;
      --color-third: #FFE700;
      --color-text-primary: #1D1D1B;
      --color-text-secondary: #1D1D1B;
      --color-sixth: #000000;

      display: block;
      background-color: var(--color-default);
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: var(--color-text-primary);
      padding: 1rem;
      margin: 1rem auto;
      max-width: 600px;
    }

    .container {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .image-container img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 8px;
      border: 1px solid #ccc;
    }

    .info {
      flex: 1;
    }

    .product-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }

    .price {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .price-current {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-primary);
    }

    .price-normal {
      font-size: 0.9rem;
      text-decoration: line-through;
      color: var(--color-text-secondary);
    }

    .ofert {
      font-size: 0.8rem;
      border: 1px solid var(--color-secondary);
      color: var(--color-secondary);
      padding: 0.2rem 0.6rem;
      border-radius: 100px;
      font-weight: 600;
    }

    .quantity {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .quantity button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: none;
      background-color: var(--color-primary);
      color: white;
      cursor: pointer;
      font-size: 0.5rem;
    }

    .quantity button:disabled {
      background-color: #aaa;
      cursor: not-allowed;
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .remove-btn {
      background: none;
      border: none;
      color: var(--color-secondary);
      cursor: pointer;
      font-size: 0.9rem;
    }

    .remove-btn:hover {
      text-decoration: underline;
    }
  `;

  constructor() {
    super();
    this.title = '';
    this.ofert = '';
    this.priceCurrent = '';
    this.priceNormal = '';
    this.imageSrc = '';
    this.quantity = 0;
  }

  render() {
    const showOfertaCompleta = this.ofert && this.priceCurrent && this.priceNormal;
    const mostrarSoloNormal = !this.ofert && this.priceNormal;

    return html`
      <div class="container">
        <div class="image-container">
          <img src="${this.imageSrc}" alt="Imagen del producto" />
        </div>
        <div class="info">
          <div class="product-title">${this.title}</div>
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

          <div class="quantity">
            <button @click=${this._decreaseQuantity} ?disabled=${this.quantity <= 0}>−</button>
            <span>${this.quantity}</span>
            <button @click=${this._increaseQuantity}>+</button>
          </div>
        </div>
        <div class="actions">
          <button class="remove-btn" @click=${this._removeItem}>Eliminar</button>
        </div>
      </div>
    `;
  }

  _increaseQuantity() {
    this.quantity++;
    this._dispatchQuantityChanged();
  }

  _decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this._dispatchQuantityChanged();
    }
  }

  _dispatchQuantityChanged() {
    this.dispatchEvent(new CustomEvent('quantity-changed', {
      detail: { title: this.title, quantity: this.quantity },
      bubbles: true,
      composed: true
    }));
  }

  _removeItem() {
    this.dispatchEvent(new CustomEvent('remove-from-cart', {
      detail: { title: this.title },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('espe-product-car', EspeCartItem);

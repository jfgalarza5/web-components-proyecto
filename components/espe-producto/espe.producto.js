import { LitElement, html, css } from 'lit';

export class ProductRating extends LitElement {
  static properties = {
    rating: { type: Number }
  };

  constructor() {
    super();
    this.rating = 0;
  }

  static styles = css`
    :host {
      display: block;
      width: 230px;
      background-color: #f1efef;
      border-radius: 20px;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }

    img {
      width: 120px;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .stars span {
      font-size: 25px;
      cursor: pointer;
      color: #ccc;
    }

    .stars .filled {
      color: gold;
    }

    button {
      margin-top: 10px;
      background-color: #d8d0ce;
      padding: 8px 20px;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 6px;
    }
  `;

  setRating(value) {
    this.rating = value;
  }

  render() {
    return html`
      <img src="https://tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg" alt="Producto" />
      <h3>Califica el producto</h3>
      <div class="stars">
        ${[1, 2, 3, 4, 5].map(
          star => html`
            <span
              class=${this.rating >= star ? 'filled' : ''}
              @click=${() => this.setRating(star)}
              >★</span
            >
          `
        )}
      </div>
      <button>Calificar</button>
    `;
  }
}

customElements.define('product-rating', ProductRating);

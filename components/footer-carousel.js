import { LitElement, html, css } from 'lit';

class FooterCarousel extends LitElement {
  static styles = css`
    footer {
      background-color: #FFD700;
      color: #000;
      padding: 16px;
      text-align: center;
      font-family: Arial, sans-serif;
    }
  `;

  render() {
    return html`
      <footer>
        <p>© 2025 ESPE Shop - Todos los derechos reservados</p>
      </footer>
    `;
  }
}

customElements.define('footer-carousel', FooterCarousel);

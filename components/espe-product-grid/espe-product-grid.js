import { LitElement, html, css } from 'lit';

export class EspeProductGrid extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 100px;
      max-width: 67%;
      margin: 0 auto;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 2rem;
    }
  `;

  render() {
    return html`
      <div class="grid">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('espe-product-grid', EspeProductGrid);

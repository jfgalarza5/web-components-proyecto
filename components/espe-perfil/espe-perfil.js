import { LitElement, html, css } from 'lit';

export class UserProfile extends LitElement {
  static properties = {
    isGuest: { type: Boolean }
  };

  constructor() {
    super();
    this.isGuest = true;
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

    .avatar {
      width: 100px;
      height: 100px;
      background-color: #ccc;
      border-radius: 50%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
    }

    h3 {
      margin: 10px 0 5px;
    }

    p {
      margin: 0;
      font-size: 0.9rem;
      color: #666;
    }

    button {
      margin-top: 15px;
      background-color: #d8d0ce;
      padding: 8px 20px;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 6px;
    }
  `;

  toggleState() {
    this.isGuest = !this.isGuest;
  }

  render() {
    return html`
      <div class="avatar">👤</div>
      <h3>${this.isGuest ? 'Invitado' : 'Gissela Saldarriaga'}</h3>
      <p>${this.isGuest ? 'correo@correo.com' : 'gesaldarriaga@espe.edu.ec'}</p>
      <button @click=${this.toggleState}>
        ${this.isGuest ? 'Invitado' : 'Usuario'}
      </button>
    `;
  }
}

customElements.define('user-profile', UserProfile);

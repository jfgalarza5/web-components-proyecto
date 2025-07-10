import { LitElement, html, css } from 'lit';

class HeaderComponent extends LitElement {
  static properties = {
    menuOpen:        { type: Boolean },
    showLangMenu:    { type: Boolean },
    showAccountMenu: { type: Boolean }
  };

  constructor() {
    super();
    this.menuOpen        = false;
    this.showLangMenu    = false;
    this.showAccountMenu = false;
    this._onOutsideClick = this._onOutsideClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', this._onOutsideClick);
  }

  disconnectedCallback() {
    window.removeEventListener('click', this._onOutsideClick);
    super.disconnectedCallback();
  }

  static styles = css`
    :host { display: block; font-family: Arial, sans-serif; }

    /* Overlay para sidebar */
    .overlay {
      position: fixed; top:0; left:0;
      width:100vw; height:100vh;
      background: rgba(0,0,0,0.5);
      display: none; z-index: 99;
    }
    .overlay.show { display: block; }

    /* Header superior */
    .header-top {
      background: #006935; color: white;
      display: flex; align-items: center;
      padding: 10px 20px; gap: 20px; flex-wrap: wrap;
    }
    .logo { font-size: 1.2rem; font-weight: bold; }
    .search-bar { flex:1; display:flex; max-width:500px; }
    .search-bar select, .search-bar input { padding:6px; border:none; }
    .search-bar input { flex:1; }
    .search-bar button {
      background: #febd69; border:none; padding:6px 10px; cursor:pointer;
    }

    .user-actions {
      display: flex; gap:15px; position: relative;
    }
    .user-actions > div { cursor: pointer; position: relative; }

    /* Dropdown common */
    .dropdown {
      position: absolute; top: 100%; right: 0;
      background: white; color: black;
      border: 1px solid #ccc; border-radius: 4px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      z-index: 100; padding: 8px; min-width: 150px;
    }
    .dropdown ul { list-style:none; margin:0; padding:0; }
    .dropdown li {
      padding:4px 8px; white-space: nowrap; cursor: pointer;
    }
    .dropdown li:hover { background: #f0f0f0; }

    /* Header inferior */
    .header-bottom {
      background: #1D1D1BBF; color: white;
      display:flex; align-items:center;
      gap:20px; padding:10px 20px; font-size:0.85rem;
    }
    .menu-button { cursor:pointer; display:flex; align-items:center; gap:5px; }

    /* Sidebar */
    .sidebar-menu {
      position: fixed; top:0; left:0;
      width:300px; height:100vh; background:white; padding:20px;
      box-shadow: 2px 0 5px rgba(0,0,0,0.3);
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index:1000;
    }
    .sidebar-menu.show { transform: translateX(0); }
    .sidebar-menu h3 {
      margin-top:20px; border-bottom:1px solid #ccc; padding-bottom:5px;
    }
    .sidebar-menu ul { list-style:none; padding:0; }
    .sidebar-menu li { margin:10px 0; cursor:pointer; }
  `;

  // alterna sidebar
  toggleSidebar(e) {
    e.stopPropagation();
    this.menuOpen = !this.menuOpen;
    this.showLangMenu = false;
    this.showAccountMenu = false;
  }

  // alterna dropdown idioma
  _toggleLang(e) {
    e.stopPropagation();
    this.showLangMenu = !this.showLangMenu;
    this.showAccountMenu = false;
  }

  // alterna dropdown cuenta
  _toggleAccount(e) {
    e.stopPropagation();
    this.showAccountMenu = !this.showAccountMenu;
    this.showLangMenu = false;
  }

  // cierra menus al clicar fuera
  _onOutsideClick(e) {
    const path = e.composedPath();

    // cerrar dropdown idioma
    if (this.showLangMenu) {
      const langBtn = this.renderRoot.querySelector('.lang-wrapper');
      if (!path.includes(langBtn)) this.showLangMenu = false;
    }

    // cerrar dropdown cuenta
    if (this.showAccountMenu) {
      const accBtn = this.renderRoot.querySelector('.acct-wrapper');
      if (!path.includes(accBtn)) this.showAccountMenu = false;
    }

    // cerrar sidebar
    if (this.menuOpen) {
      const sb = this.renderRoot.querySelector('.sidebar-menu');
      const btn = this.renderRoot.querySelector('.menu-button');
      if (!path.includes(sb) && !path.includes(btn)) this.menuOpen = false;
    }
  }

  render() {
    return html`
      <!-- overlay -->
      <div
        class="overlay ${this.menuOpen ? 'show' : ''}"
        @click="${this.toggleSidebar}"
      ></div>

      <!-- Header Top -->
      <div class="header-top">
        <div class="logo">ESPE Shop</div>
        <div class="search-bar">
          <select><option>Todos</option><option>Libros</option><option>Tecnología</option></select>
          <input type="text" placeholder="Buscar en ESPE Shop" />
          <button>🔍</button>
        </div>
        <div class="user-actions">
          <!-- Idioma -->
          <div class="lang-wrapper" @click="${this._toggleLang}">
            🇪🇸 ES ▾
            ${this.showLangMenu ? html`
              <div class="dropdown">
                <ul>
                  <li>Español – ES</li>
                  <li>English – EN</li>
                </ul>
              </div>` : ''}
          </div>

          <!-- Cuenta -->
          <div class="acct-wrapper" @click="${this._toggleAccount}">
            Hola, Giovanny<br /><strong>Cuenta y Listas</strong> ▾
            ${this.showAccountMenu ? html`
              <div class="dropdown">
                <ul>
                  <li><strong>Tus listas</strong></li>
                  <li>Crear una lista</li>
                  <li>Explorar una lista</li>
                </ul>
                <hr />
                <ul>
                  <li><strong>Tu cuenta</strong></li>
                  <li>Pedidos</li>
                  <li>Recomendaciones</li>
                </ul>
              </div>` : ''}
          </div>

          <!-- Carrito -->
          <div>🛒 Carrito</div>
        </div>
      </div>

      <!-- Header Bottom -->
      <div class="header-bottom">
        <div class="menu-button" @click="${this.toggleSidebar}">
          ☰ <strong>Todo</strong>
        </div>
        <div>Zona de envío gratis</div>
        <div>Ofertas del Día</div>
        <div>Comprar de Nuevo</div>
        <div>Historial</div>
        <div>Tarjetas de Regalo</div>
      </div>

      <!-- Sidebar -->
      <aside class="sidebar-menu ${this.menuOpen ? 'show' : ''}">
        <h3>Contenido y dispositivos digitales</h3>
        <ul>
          <li>ESPE Video</li>
          <li>Música ESPE</li>
        </ul>
        <h3>Buscar por departamento</h3>
        <ul>
          <li>Electrónicos</li>
          <li>Computadoras</li>
        </ul>
        <h3>Ayuda y configuración</h3>
      </aside>
    `;
  }
}

customElements.define('header-component', HeaderComponent);

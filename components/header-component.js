import { LitElement, html, css } from 'lit';

class HeaderComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    /* Overlay para oscurecer el fondo */
    .overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      z-index: 999;
    }
    .overlay.show {
      display: block;
    }

    .header {
      color: white;
    }

    .header-top {
      background-color: #131921;
      display: flex;
      align-items: center;
      padding: 10px;
      gap: 20px;
      flex-wrap: wrap;
    }

    .logo {
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
    }

    .search-bar {
      flex: 1;
      display: flex;
      max-width: 700px;
    }

    .search-bar select,
    .search-bar input {
      padding: 6px;
      border: none;
    }

    .search-bar input {
      flex: 1;
    }

    .search-bar button {
      background-color: #febd69;
      border: none;
      padding: 6px 10px;
    }

    .user-actions {
      display: flex;
      gap: 15px;
      font-size: 0.85rem;
    }

    .header-bottom {
      background-color: #232f3e;
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 0.85rem;
    }

    .menu-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .sidebar-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 300px;
      height: 100vh;
      background-color: white;
      color: black;
      padding: 20px;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
      overflow-y: auto;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index: 1000;
    }

    .sidebar-menu.show {
      transform: translateX(0);
    }

    .sidebar-menu h3 {
      margin-top: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 5px;
    }

    .sidebar-menu ul {
      list-style: none;
      padding: 0;
    }

    .sidebar-menu li {
      margin: 10px 0;
      cursor: pointer;
    }
  `;

  toggleSidebar() {
    const menu = this.renderRoot.querySelector('.sidebar-menu');
    const overlay = this.renderRoot.querySelector('.overlay');
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
  }

  render() {
    return html`
      <!-- Overlay: cubre toda la pantalla y cierra el menú al hacer clic -->
      <div class="overlay" @click="${this.toggleSidebar}"></div>

      <header class="header">
        <!-- Barra superior -->
        <div class="header-top">
          <div class="logo">ESPE Shop</div>

          <div class="search-bar">
            <select>
              <option value="all">Todos</option>
              <option value="books">Libros</option>
              <option value="tech">Tecnología</option>
            </select>
            <input type="text" placeholder="Buscar en ESPE Shop" />
            <button>🔍</button>
          </div>

          <div class="user-actions">
            <div>🇪🇸 ES</div>
            <div>Hola Giovanny<br /><strong>Cuenta y Listas</strong></div>
            <div>Devoluciones<br /><strong>y pedidos</strong></div>
            <div>🛒 Carrito</div>
          </div>
        </div>

        <!-- Barra inferior -->
        <nav class="header-bottom">
          <div class="menu-button" @click="${this.toggleSidebar}">
            ☰ <strong>Todo</strong>
          </div>
          <div>Zona de envío gratis</div>
          <div>Ofertas del Día</div>
          <div>Comprar de Nuevo</div>
          <div>Historial</div>
          <div>Tarjetas de Regalo</div>
          <div>Amazon de Giovanny</div>
          <div>Vender</div>
          <div>Servicio al Cliente</div>
        </nav>

        <!-- Menú lateral -->
        <aside class="sidebar-menu">
          <h3>Contenido y dispositivos digitales</h3>
          <ul>
            <li>Prime Video</li>
            <li>Amazon Music</li>
            <li>Kindle y Libros</li>
            <li>Appstore</li>
          </ul>

          <h3>Buscar por departamento</h3>
          <ul>
            <li>Electrónicos</li>
            <li>Computadoras</li>
            <li>Smart Home</li>
            <li>Arte y artesanías</li>
            <li>Ver todo</li>
          </ul>

          <h3>Programas y funcionalidades</h3>
          <ul>
            <li>Tarjetas de Regalo</li>
            <li>Comprar por interés</li>
            <li>Amazon Live</li>
            <li>Tienda internacional</li>
          </ul>

          <h3>Ayuda y configuración</h3>
        </aside>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);

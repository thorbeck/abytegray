import { h } from 'embla';

class NotFoundPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '';
      
      const content = (
        <div>
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          
          <nav style={{ margin: '2rem 0' }}>
            <embla-link href="/">Go Home</embla-link>
          </nav>
        </div>
      );

      this.shadowRoot.appendChild(content);
    }
  }
}

customElements.define('page-notfound', NotFoundPage);

import { h } from 'embla';

class HomePage extends HTMLElement {
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
          <h1>Home Page</h1>
          <p>Welcome to Abytegray - A modern web component blog</p>
          
          <nav style={{ margin: '2rem 0' }}>
            <embla-link href="/about">About</embla-link>
            {' | '}
            <embla-link href="/articles">Articles</embla-link>
            {' | '}
            <embla-link href="/article/123">Sample Article</embla-link>
          </nav>
        </div>
      );

      this.shadowRoot.appendChild(content);
    }
  }
}

customElements.define('page-home', HomePage);

import { h } from 'embla';

class ArticlesPage extends HTMLElement {
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
          <h1>Articles</h1>
          <p>Browse all articles:</p>
          
          <ul style={{ margin: '1rem 0', padding: '0 0 0 1.5rem' }}>
            <li><embla-link href="/article/1">Article 1: Getting Started</embla-link></li>
            <li><embla-link href="/article/2">Article 2: Advanced Topics</embla-link></li>
            <li><embla-link href="/article/123">Article 123: Router Demo</embla-link></li>
          </ul>
          
          <nav style={{ margin: '2rem 0' }}>
            <embla-link href="/">Home</embla-link>
            {' | '}
            <embla-link href="/about">About</embla-link>
          </nav>
        </div>
      );

      this.shadowRoot.appendChild(content);
    }
  }
}

customElements.define('page-articles', ArticlesPage);

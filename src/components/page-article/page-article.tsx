import { h } from 'embla';

class ArticlePage extends HTMLElement {
  static get observedAttributes() {
    return ['id'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const articleId = this.getAttribute('id') || 'unknown';
    
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '';
      
      const content = (
        <div>
          <h1>Article {articleId}</h1>
          <p>This is article number {articleId}. The ID was extracted from the URL route parameter.</p>
          
          <div style={{ margin: '1rem 0', padding: '1rem', background: '#f0f0f0', borderRadius: '4px' }}>
            <strong>Route Parameter Demo:</strong>
            <p>URL pattern: <code>/article/:id</code></p>
            <p>Current ID: <code>{articleId}</code></p>
          </div>
          
          <nav style={{ margin: '2rem 0' }}>
            <embla-link href="/">Home</embla-link>
            {' | '}
            <embla-link href="/articles">All Articles</embla-link>
            {' | '}
            <embla-link href="/about">About</embla-link>
          </nav>
        </div>
      );

      this.shadowRoot.appendChild(content);
    }
  }
}

customElements.define('page-article', ArticlePage);

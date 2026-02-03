import { h } from 'embla';

class AboutPage extends HTMLElement {
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
          <h1>About</h1>
          <p>This is a demonstration of the Embla router with web components.</p>
          
          <nav style={{ margin: '2rem 0' }}>
            <embla-link href="/">Home</embla-link>
            {' | '}
            <embla-link href="/articles">Articles</embla-link>
          </nav>
        </div>
      );

      this.shadowRoot.appendChild(content);
    }
  }
}

customElements.define('page-about', AboutPage);

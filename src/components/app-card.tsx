import { h } from '../utils/jsx-factory';

export class AppCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;

    const title = this.getAttribute('title') || 'Card Title';
    const content = this.getAttribute('content') || 'Card content goes here.';

    // Clear shadow root
    this.shadowRoot.innerHTML = '';

    // Create elements using JSX
    const styleEl = (
      <style>{this.getStyles()}</style>
    );

    const cardEl = (
      <div className="app-card">
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
        <slot></slot>
      </div>
    );

    // Append to shadow root
    this.shadowRoot.appendChild(styleEl);
    this.shadowRoot.appendChild(cardEl);
  }

  getStyles(): string {
    return `
      /* Inline styles for shadow DOM */
      .app-card {
        display: block;
        padding: 1.5rem;
        border: 1px solid var(--border-color, #e0e0e0);
        border-radius: 8px;
        background-color: var(--bg-color, #ffffff);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .title {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
        color: var(--title-color, #333333);
      }

      .content {
        margin: 0;
        line-height: 1.6;
        color: var(--text-color, #666666);
      }
    `;
  }

  static get observedAttributes() {
    return ['title', 'content'];
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}

// Register the custom element
customElements.define('app-card', AppCard);

import styles from './app-card.module.css';

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

    this.shadowRoot.innerHTML = `
      <style>
        ${this.getStyles()}
      </style>
      <div class="app-card">
        <h2 class="title">${title}</h2>
        <p class="content">${content}</p>
        <slot></slot>
      </div>
    `;
  }

  getStyles(): string {
    // Convert CSS module classes to scoped styles
    return Object.entries(styles)
      .map(([className, scopedName]) => {
        // In development, Vite returns scoped class names
        // We need to extract the original CSS and apply it
        return '';
      })
      .join('\n') + `
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

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}

// Register the custom element
customElements.define('app-card', AppCard);

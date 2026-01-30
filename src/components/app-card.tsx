import { h } from '../utils/jsx-factory';
import styles from './app-card.module.css?inline';

// Create stylesheet once, shared across all instances
const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

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

    // Adopt the shared stylesheet (efficient, reused across all instances)
    this.shadowRoot.adoptedStyleSheets = [sheet];

    const cardEl = (
      <div className="app-card">
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
        <slot></slot>
      </div>
    );

    // Append to shadow root
    this.shadowRoot.appendChild(cardEl);
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

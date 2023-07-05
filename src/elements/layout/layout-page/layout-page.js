import styles from './layout-page.module.scss';

class LayoutPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  // When element is added to DOM
  connectedCallback() {
    this.classList.add(styles['layout-page']);
  }
}

customElements.define('abg-layout-page', LayoutPage);

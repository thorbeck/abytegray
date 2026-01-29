import styles from './layout-list.module.scss';

class LayoutList extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  // When element is added to DOM
  connectedCallback() {
    this.classList.add(styles['layout-list']);
  }
}

customElements.define('abg-layout-list', LayoutList);

import styles from './layout.module.scss';


class Layout extends HTMLElement {
  constructor() {
		// Always call super first in constructor
    super();
  }

	// When element is added to DOM
  connectedCallback() {
    this.classList.add(styles.layout);
  }
}

customElements.define('abg-layout', Layout);

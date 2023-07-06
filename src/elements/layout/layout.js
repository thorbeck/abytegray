import styles from "./layout.module.scss";

class Layout extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    this.classList.add(styles.layout);
  }

  // When element is added to DOM
  connectedCallback() {}
}

customElements.define("abg-layout", Layout);

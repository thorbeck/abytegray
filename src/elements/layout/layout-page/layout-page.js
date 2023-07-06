import styles from "./layout-page.module.scss";

class LayoutPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    this.classList.add(styles["layout-page"]);
  }

  // When element is added to DOM
  connectedCallback() {}
}

customElements.define("abg-layout-page", LayoutPage);

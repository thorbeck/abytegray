import styles from './content.module.scss';

export class ContentElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('ContentElement connected');
    this.classList.add(styles['abg-content']);
  }
}

customElements.define('abg-content', ContentElement);

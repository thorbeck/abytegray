import styles from './logo.shadow.scss';

class LogoElement extends HTMLElement {
  constructor() {
    super();
    // fetch svg
    fetch('./logo.svg')
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        // Add css and svg to shadow dom
        this.attachShadow({
          mode: 'open',
        }).innerHTML = `<style>${styles}</style>${data}<h1>abytegray</h1>`;
      });
  }
}

customElements.define('abg-logo', LogoElement);

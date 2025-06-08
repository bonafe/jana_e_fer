export class FloresDeFundo extends HTMLElement {
    connectedCallback() {
      fetch('./html/flores-de-fundo.html')
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define('flores-de-fundo', FloresDeFundo);
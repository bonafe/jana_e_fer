export class FloresDeFundo extends HTMLElement {
  connectedCallback() {
    const url = new URL('./flores-de-fundo.html', import.meta.url);
    fetch(url)
      .then(res => res.text())
      .then(html => { this.innerHTML = html; });
  }
}
customElements.define('flores-de-fundo', FloresDeFundo);

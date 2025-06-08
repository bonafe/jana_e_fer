export class PaisNoivos extends HTMLElement {
  connectedCallback() {
    const url = new URL('./pais-noivos.html', import.meta.url);
    fetch(url)
      .then(res => res.text())
      .then(html => { this.innerHTML = html; });
  }
}
customElements.define('pais-noivos', PaisNoivos);

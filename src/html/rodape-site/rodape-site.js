export class RodapeSite extends HTMLElement {
  connectedCallback() {
    const url = new URL('./rodape-site.html', import.meta.url);
    fetch(url)
      .then(res => res.text())
      .then(html => { this.innerHTML = html; });
  }
}
customElements.define('rodape-site', RodapeSite);

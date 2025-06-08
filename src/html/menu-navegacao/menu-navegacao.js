export class MenuNavegacao extends HTMLElement {
  connectedCallback() {
    const url = new URL('./menu-navegacao.html', import.meta.url);
    fetch(url)
      .then(res => res.text())
      .then(html => { this.innerHTML = html; });
  }
}
customElements.define('menu-navegacao', MenuNavegacao);

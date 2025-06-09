export class CitacaoBiblia extends HTMLElement {
  connectedCallback() {
    const url = new URL('./citacao-biblia.html', import.meta.url);
    fetch(url)
      .then(res => res.text())
      .then(html => { this.innerHTML = html; });
  }
}
customElements.define('citacao-biblia', CitacaoBiblia);

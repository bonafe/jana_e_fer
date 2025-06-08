export class CabecalhoConvite extends HTMLElement {
  connectedCallback() {
    fetch('./citacao-biblia.html')
      .then(res => res.text())
      .then(html => { this.innerHTML = html; });
  }
}
customElements.define('cabecalho-convite', CabecalhoConvite);

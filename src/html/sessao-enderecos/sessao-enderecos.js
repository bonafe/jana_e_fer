export class SessaoEnderecos extends HTMLElement {
  connectedCallback() {
    const url = new URL('./sessao-enderecos.html', import.meta.url);
    fetch(url)
      .then(res => res.text())
      .then(html => { this.innerHTML = html; });
  }
}
customElements.define('sessao-enderecos', SessaoEnderecos);

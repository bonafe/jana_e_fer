import { PaisNoivos } from "../pais-noivos/pais-noivos.js";
import { SessaoEnderecos } from "../sessao-enderecos/sessao-enderecos.js";
import { SessaoRsvp } from "../sessao-rsvp/sessao-rsvp.js";

export class CorpoConvite extends HTMLElement {
  connectedCallback() {
    const url = new URL('./corpo-convite.html', import.meta.url);
    fetch(url)
      .then(res => res.text())
      .then(html => { this.innerHTML = html; });
  }
}
customElements.define('corpo-convite', CorpoConvite);

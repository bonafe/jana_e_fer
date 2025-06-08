export class SessaoRsvp extends HTMLElement {
  connectedCallback() {
    const url = new URL('./sessao-rsvp.html', import.meta.url);
    fetch(url)
      .then(res => res.text())
      .then(html => { this.innerHTML = html; });
  }
}
customElements.define('sessao-rsvp', SessaoRsvp);

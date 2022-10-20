import { LitElement, html } from 'lit-element';
//import './card-list.js';
import './book-detail.js';

class Card extends LitElement {

  static get properties () {
    return {
      path: { attribute: false },
      book: { type: Object }
    }
  }

  constructor() {
    super();
    this.path = window.location.pathname;
    this.book = {};
  }

  firstUpdated() {
    window.addEventListener('popstate',  () => {
      this.path = window.location.pathname;
    });
    this.showDetail();
  }

  showDetail() {
    if(this.path !== '/') {
      if(!this.book) {
        window.location.pathname = '/';
      }
    }
  }

  bookClicked({detail}){
    console.log('Evento',detail)
    this.path = `/${detail.book_title}`;
    this.book = detail;
    window.history.pushState({}, '', this.path);
  }

  render() {
    return html`
      ${this.path === '/' ?
        html `<card-list @book-clicked=${this.bookClicked}></card-list>`:
        html `<book-detail .book=${this.book}></book-detail>`
      }
    `;
  }
}

customElements.define('app-card', Card);

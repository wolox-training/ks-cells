import {LitElement, html} from 'lit';

import equalizer from '../application.js';
import styles from './book-detail-styles.js';

class BookDatail extends LitElement {

  static get properties(){
    return {
      book: { type: Object }
    }
  }

  constructor(){
    super();
    this.book = {}
  }

  static get styles () {
    return [equalizer, styles]
  }

  render() {
    console.log('Detalle: ',this.book);
    return html`
      <div class="card">
        <a class="back-button" href="/">Atrás</a>
        <div class="container">
          <div class="book">
            <img class="book-cover" src="${this.book.img}" alt="book cover">
          </div>
          <h1 class="title">${this.book.book_title}</h1>
          <span class="title-information">(${this.book.gendr})</span> 
          <div class="book-information">
            <h2 class="sub-title">Autor del libro: 
            <span class="information">${this.book.author}</span>
            </h2>
            <h2 class="sub-title">Editorial: 
            <span class="information">${this.book.publisher}</span>
            </h2>
            <h2 class="sub-title">Año de publicación: 
            <span class="information">${this.book.year}</span>
            </h2>
          </div>
        </div>
        </div>  
    `;
  }
}
customElements.define('book-detail', BookDatail);
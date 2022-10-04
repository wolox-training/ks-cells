import {LitElement, html} from 'lit';

import styles from '../application.js';
import book_styles from './book-container-styles.js';

class BookContainer extends LitElement {

  static properties = {
    img: {},
    book_title: {},
    author: {}
  }

  static get styles () {
    return [styles, book_styles]
  }

  render() {
    return html`
      <a class="book-container">
        <div class="book">
          <img class="cover" src="${this.img}" alt="book cover">
          <div class="title-book" id="Title">${this.book_title}</div>
          <div class="autor-book">${this.author}</div>       
        </div>
      </a>
    `;
  }
}
customElements.define('book-container', BookContainer);
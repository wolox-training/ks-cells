import { LitElement, html } from 'lit-element';
import equalizer from '../application.js';
import styles from './card-list-styles.js';

class CardList extends LitElement {

	static get properties() {
		return {
			books: [],
			data: [],
			icon: '',
			placeholder: '',
		}
	}

	static get styles() {
		return [equalizer, styles];
	}

	constructor() {
		super()
		this.placeholder = "Buscá por título del libro...";
		this.books = [];
		this.getDataJSON();
		this.icon = "./assets/images/Search-Button.png";
    	this.path = window.location.pathname;
	}

	async getDataJSON() {
    this.data = await fetch('../json/books.json').then(response => response.json());
		this.ShortData();
	}

	ShortData() {
		this.books = this.data.map(({ img, book_title, author, year, gendr, publisher }) =>
			({ img, book_title, author, year, gendr, publisher })
		);
	}

	filterData() {
		const Value = this.shadowRoot.querySelector("#Search").value.toLowerCase();
    this.books = this.data.filter( element => element.book_title.toLowerCase().indexOf(Value) !== -1 || element.author.toLowerCase().indexOf(Value) !== -1);
		if (this.books.length < 1) {
			this.books.push({ img: "../assets/images/book-cover.png", book_title: "Libro No Encontrado", author: "404", });
		}
	}

	get template() {
		return html` 
			<div class="search">
				<input @keyup  = ${this.filterData}  type="text" id="Search" class="input_search" placeholder="${this.placeholder}">
				<button @click = ${this.filterData} class="search_button"><img src="${this.icon}" class="search_button"></button>
			</div>
			${this.books.map(element => {
        if(element.author=="404"){
          return html`<book-container img="${element.img}" book_title="${element.book_title}" author="${element.author}"></book-container>`
        }
        else {
          return html`<book-container @click=${()=>this.onClick(element)} img="${element.img}" book_title="${element.book_title}" author="${element.author}"></book-container>`
        }
		  })}
		`
	}

  onClick(book) {
    console.log(book.book_title)
    let event = new CustomEvent('book-clicked', {detail: book});
    this.dispatchEvent(event);
  }

	render() {
		return html`<div class="card-list">${this.template}</div>`;
	}
}

customElements.define('card-list', CardList);

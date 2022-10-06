import { LitElement, html } from 'lit';
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
	}

	async getDataJSON() {
		const data = await fetch('../json/books.json').then(response => response.json());
		this.data = data;
		this.ShortData();
	}

	ShortData() {
		const temporalData = [];
		this.data.map(element => {
			temporalData.push({ img: element.img, book_title: element.book_title, author: element.author });
		});
		this.books = temporalData;
	}

	filterData() {
		const value = this.shadowRoot.querySelector("#Search").value.toLowerCase();
		const temporalData = [];

		this.data.map( element => {
			const title = element.book_title.toLowerCase();
			const author = element.author.toLowerCase();

			if (title.indexOf(value) !== -1 || author.indexOf(value) !== -1) {
				console.log("Libro: ", element.book_title);
				temporalData.push({ img: element.img, book_title: element.book_title, author: element.author });
			}
		})

		if (temporalData.length < 1) {
			temporalData.push({ img: "../assets/images/book-cover.png", book_title: "Libro No Encontrado", author: "" });
		}

		this.books = temporalData;
	}

	get template() {
		console.log("Template data: ", this.data);
		return html` 
			<div class="search">
				<input @keyup  = ${this.filterData}  type="text" id="Search" class="input_search" placeholder="${this.placeholder}">
				<button @click = ${this.filterData} class="search_button"><img src="${this.icon}" class="search_button"></button>
			</div>
			${this.books.map(element => {
			return html`<book-container img="${element.img}" book_title="${element.book_title}" author="${element.author}"></book-container>`
			})}
		`
	}

	render() {
		return html`${this.template}`;
	}
}

customElements.define('card-list', CardList);

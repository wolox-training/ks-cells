import { css } from 'lit-element';

export default css`

  .book-container {
    grid-area: "content";
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 300px;
    width: 198px;
    background-color: #FFF;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
    transition: transform 0.5s; }
    .book-container:hover {
      transform: scale(1.05, 1.05); }
    .book-container .book {
      height: 90%;
      display: flex;
      flex-flow: wrap column;
      justify-content: space-evenly; }
      .book-container .book .cover {
        align-self: center;
        height: 200px;
        width: 142px; }
      .book-container .book .autor-book {
        color: #828282;
        font-size: 14px; }
      .book-container .book .title-book {
        color: #000;
        font-size: 16px;
        font-weight: 700; }
`
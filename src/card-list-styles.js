import { css } from 'lit-element';

export default css`

  .search {
    align-items: center;
    grid-area: search;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    background-color: #fff;
    width: 600px;
    height: 40px;
    margin-bottom: 30px;
    position: relative;
    border-radius: 7px;
    border: solid #b6b6b6;
  }

  .search .search_button {
    height: 25px;
    right: 6px;
  }

  .search .input_search {
    height: 40px;
    grid-area: search;
    background-color: #fff;
    width: 90%;
    height: 30px;
    border-radius: 7px;
  }

`
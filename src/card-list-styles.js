import { css } from 'lit-element';

export default css`

  .card-list {
    background-color: #F4F4F4;
    display: grid;
    grid-template-areas: "search search search search"
                            "content content content content";
    gap: 36px;
    justify-content: center;
    justify-items: center;
    padding: 15px 0 10% 0;
    width: 100%;
    height: 100%;
  }

  .card-list .search {
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

  .card-list .search .search_button {
    height: 25px;
    right: 6px;
  }

  .card-list .search .input_search {
    height: 40px;
    grid-area: search;
    background-color: #fff;
    width: 90%;
    height: 30px;
    border-radius: 7px;
  }
`

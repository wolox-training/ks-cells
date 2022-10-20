import { css } from 'lit-element';

export default css`

  .card {
    padding: 10% 10%;
    display: grid;
    gap: 30px;
    grid-template-areas: "back" "container";
    height: 100vh;
    background-color: #F4F4F4; 
  }

  .card .back-button {
    grid-area: back;
    align-items: center;
    display: grid;
    grid-template-columns: 15px auto;
    font-size: 20px;
    grid-gap: 12px; 
  }

  .card .back-button::before { 
    content: url("../assets/images/back-arrow-20.png"); 
  }

  .card .container {
    grid-area: container;
    display: grid;
    align-items: start;
    grid-template-columns: 30%;
    grid-template-rows: 20%;
    gap: 5px 20px;
    padding: 20px;
    grid-template-areas: "cover title title-2" 
                          "cover information information";
    background-color: #FFF;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
  }

  .card .container .book {
    position: relative;
    grid-area: cover;
    width: 250px;
    display: grid;
    justify-items: center; 
  }

  .card .container .book .book-cover { width: 100%; }

  .card .container .book::after {
    content: '';
    background-image: url("../assets/images/badge.png");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 75%;
    left: 75%;
    height: 110px;
    width: 80px;
    transform: rotate(15deg); 
  }

  .card .container .title {
    grid-area: title;
    grid-column-start: title;
    grid-column-end: title-2;
    font-size: 32px;
    font-weight: 700; 
  }

  .card .container .title-information {
    color: #828282;
    font-size: calc(32px - 8px);
    font-weight: 700;
    grid-area: title-2;
    grid-column-start: title;
    grid-column-end: title-2;
    position: relative;
    padding: 5px 0 0 350px;
  }

  .card .container .title-information::after {
    background-color: #BED23C;
    content: '';
    display: block;
    height: 4px;
    position: absolute;
    margin-top: 10px;
    right: 0;
    width: 100%;
    animation-name: rainbow;
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }

  .card .container .book-information {
    grid-area: information; 
  }
  
  .card .container .book-information .sub-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;
    width: 100%; 
  }

  .card .container .book-information .sub-title .information {
    color: #828282;
    font-size: 20px; 
  }

  @media only screen and (max-width: 1024px) {

    .card .container {
      align-items: center;
      grid-template-areas: "title title" "title-2 title-2" "cover information";
      grid-template-rows: auto auto 1fr;
      grid-template-columns: 40% auto;
      justify-items: center;
      animation-name: rainbow-headboard;
      animation-duration: 8s;
      animation-iteration-count: infinite; 
    }

    .card .container .title-information {
      padding: 0; 
    }

    .card .container .title-information::after {
      visibility: hidden; 
    }

    .card .container .book-information .sub-title {
      margin: 10px;
      font-size: 20px; 
    } 
  }

  @media only screen and (max-width: 700px) {

    .card {
      grid-template-areas: "container" "back";
      padding: 10px;
      justify-items: center; 
    }

    .card .back-button {
      justify-content: center;
      grid-area: back; 
    }

    .card .container {
      grid-template-areas: "title" "cover" "title-2" "information";
      grid-template-columns: 100%;
      grid-template-rows: auto; 
    }

    .card .container .book {
      width: 212px; 
    }

    .card .container .book .book-cover {
      width: 100%; 
    }

    .card .container .book::after {
      width: calc( 80px * 0.7);
      height: calc( 110px * 0.7);
      bottom: 80%;
      left: 80%; 
    }

    .card .container .title {
      font-size: calc(32px - 8px); 
    }

    .card .container .title-information {
      text-align: center;
      font-size: calc( calc(32px - 8px) - 8px);
      width: 100%; 
    }

    .card .container .title-information::after {
      visibility: visible; 
    }

    .card .container .book-information .sub-title {
      font-size: calc(20px - 6px); 
    }

    .card .container .book-information .sub-title .information {
      font-size: calc(20px - 6px); 
    }
  }
`
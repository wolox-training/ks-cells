import { css } from 'lit-element';

export default css`

  * {
    box-sizing: border-box;
    font-family: sans-serif;
    margin: 0;
    padding: 0; }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  label,
  input,
  a,
  button,
  select,
  textarea {
    color: #000;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    margin: 0; }
    h1:focus,
    h2:focus,
    h3:focus,
    h4:focus,
    h5:focus,
    h6:focus,
    p:focus,
    span:focus,
    label:focus,
    input:focus,
    a:focus,
    button:focus,
    select:focus,
    textarea:focus {
      outline: none; }

  select {
    -moz-appearance: none;
    -webkit-appearance: none; }

  table {
    border-collapse: collapse;
    table-layout: fixed; }

  input,
  select,
  textarea,
  button {
    border: 0;
    border-radius: 0; }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; }

  button {
    background: transparent;
    cursor: pointer; }

  button::-moz-focus-inner {
    border: 0; }

  a {
    cursor: pointer;
    text-decoration: none; }
    a:focus, a:active, a:hover {
      color: #000;
      text-decoration: none; }

  ul,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0; }

  ::placeholder {
    color: #999;
    opacity: 1; }
  `

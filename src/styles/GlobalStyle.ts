import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    font-family: "Montserrat", sans-serif;
  }
`;
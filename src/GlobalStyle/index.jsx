import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  a, button {
    text-decoration: none;
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    outline: none;
  }
  
  a:hover, a:active, a:focus {
    color: inherit;
    text-decoration: none;
  }
  
  input, select, textarea {
    font-family: 'Inter', sans-serif;
    border: none;
    outline: none;
  }
  
  ul, ol {
    list-style: none;
    padding-left: 0;
  }
  
  blockquote, figure {
    margin: 0;
    padding: 0;
  }
  
  u {
    text-decoration: none;
  }
  
  body, html {
    height: 100%;
    width: 100%;
  }
  
  button {
    appearance: none;
  }
  
  a {
    appearance: none;
  }
  
  input {
    appearance: none;
  }
  
  select {
    appearance: none;
  }
`;

export default GlobalStyle;

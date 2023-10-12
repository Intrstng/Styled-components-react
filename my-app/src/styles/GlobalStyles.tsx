import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
    background-color: #f5f5f5;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`
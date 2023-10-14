import { createGlobalStyle } from 'styled-components';
import myTheme from './Theme.styled';

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
    background-color: ${myTheme.colors.bground};
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    @media ${myTheme.media.tablet} {
      background-color: ${myTheme.colors.grey.darker};
    }
  }
`
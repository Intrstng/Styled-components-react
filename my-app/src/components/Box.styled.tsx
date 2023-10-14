import styled, { css } from 'styled-components';
import myTheme from '../styles/Theme.styled';

const Box = styled.div `
  width: 30rem;
  height: 35rem;
  padding-top: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0rem 0.4rem 2rem 0.5rem ${myTheme.colors.shadow};
`
const Container = styled.div `
  width: 70vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export { Box, Container }; 
import styled from 'styled-components';

const Box = styled.div `
  width: 30rem;
  height: 35rem;
  padding-top: 1rem;
  border-radius: 1.5rem;
  background: #FFFFFF;
  box-shadow: 0rem 0.4rem 2rem 0.5rem rgba(0, 0, 0, 0.10);
`
const Container = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export { Box, Container }; 
import styled from 'styled-components';
import myTheme from '../styles/Theme.styled';

const Text = styled.p `
  width: 26rem;
  margin: 0 auto 1.9rem;
  color: ${myTheme.colors.font};
  font-family: Inter;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
`

export default Text;
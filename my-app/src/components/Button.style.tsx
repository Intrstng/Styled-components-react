import styled from 'styled-components';
import { MyAnimation } from '../styles/animations/Animation';

export const CardBtn = styled.button<{ primary?: boolean; }>`
  width: 8.6rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #4E71FE;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.primary ? "#4E71FE" : "#FFFFFF"};
  color: ${props => props.primary ? "#FFFFFF" : "#4E71FE"};
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;
  transition: 0.25s transform ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
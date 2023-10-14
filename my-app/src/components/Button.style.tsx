import styled, { css } from 'styled-components';
import { MyAnimation } from '../styles/animations/Animation';
import myTheme from '../styles/Theme.styled';

type CardBtnType = {
  btnType?: 'primary' | 'outlined'
  colorType: string
  active?: boolean
}

const CardBtn = styled.button<CardBtnType>`
  width: 8.6rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  ${props => props.btnType === 'primary' && css<CardBtnType> `
    background: ${props => props.colorType || `${myTheme.colors.standart}`};
    border: none;
    color: ${myTheme.colors.light};
    &:hover {
      border: 0.2rem solid ${props => props.colorType || `${myTheme.colors.standart}`};
      background: transparent;
      color: ${props => props.colorType || `${myTheme.colors.standart}`};
    }
  `};
  ${props => props.btnType === 'outlined' && css<CardBtnType> `
    border: 2px solid ${props.colorType};
    background: transparent;
    color: ${props.colorType};
    &:hover {
      border: none;
      background: ${props.colorType};
      color: ${myTheme.colors.light};
    }
  `};

  ${props => props.active && css<CardBtnType> `
      box-shadow: 0px 4px 20px 5px ${myTheme.colors.shadow};
    `};
  `;

export default CardBtn;
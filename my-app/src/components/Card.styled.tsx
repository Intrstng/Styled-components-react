import styled from 'styled-components';
import { Box } from './Box.styled';
import CardBtn from './Button.style';
import Title from './Title.styled';
import Text from './Text.styled';
import Image from './Image.styled';
import BtnWrapper from './BtnWrapper.styled';

type CardPropsType = {
  picture: string
  title: string
  text: string
  color: string
}

function Card(props: CardPropsType) {
  return (
    <Box>
      <Image backGround={props.picture}/>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <BtnWrapper>
        <CardBtn btnType={'primary'} colorType={props.color} active>See more</CardBtn>
        <CardBtn btnType={'outlined'} colorType={props.color}>Save</CardBtn>
      </BtnWrapper>
    </Box>
  )
}

export default Card;
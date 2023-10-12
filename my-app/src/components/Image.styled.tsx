import styled from 'styled-components';

type ImagePropsType = {
  backGround: string;
}

const Image = styled.div<ImagePropsType>`
  margin: 0 auto 2rem;
  width: 28rem;
  height: 17rem;
  background-image: ${(props) => `url(${props.backGround})`};
  background-color: lightgray 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-content: center;
  border-radius: 1rem;
`

export default Image;
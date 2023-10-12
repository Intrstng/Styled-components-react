import React from 'react';
import Card from './components/Card.styled';
import { Container } from './components/Box.styled';
import img_1 from './img/1.jpg';
import img_2 from './img/2.jpg'; 
import img_3 from './img/3.jpg';

function App() {
    return (
      <Container>
        <Card 
          picture={img_1}
          title={'Headline'}
          text={'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.'}
          color={"#4E71FE"}
        />
          <Card 
            picture={img_2}
            title={'Title 2'}
            text={'Sit molestie ornare in venen.'}
            color={"#166f1f"}
          />
            <Card 
              picture={img_3}
              title={'Title 3'}
              text={'Lorem ipsum.'}
              color={"#d624d6"}
            />
      </Container>
    );
}

export default App;

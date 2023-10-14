import React from 'react';
import Card from './components/Card.styled';
import { Container } from './components/Box.styled';
import myTheme from './styles/Theme.styled';
import img_1 from './img/1.jpg';
import img_2 from './img/2.jpg'; 
import img_3 from './img/3.jpg';

function App() {
    return (
      <Container>
        <Card 
          picture={img_1}
          title={'Title 1'}
          text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
          color={myTheme.colors.primary}
        />
          <Card 
            picture={img_2}
            title={'Title 2'}
            text={'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'}
            color={myTheme.colors.outlined}
          />
            <Card 
              picture={img_3}
              title={'Title 3'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit id est laborum.'}
              color={myTheme.colors.secondary}
            />
      </Container>
    );
}

export default App;
import styled from '@emotion/styled';
import Cards from 'containers/Cards';
import Footer from 'containers/Footer';
import Header from 'containers/Header';
import React from 'react';
import { centerContent, fillContainer } from 'style/modifiers';

const Bg = styled.div`
  ${fillContainer};
  ${centerContent};
  align-items: flex-start;
  overflow-y: auto;
  overflow-x: hidden;

  background: linear-gradient(29deg, #ff6d70 -29%, #277d8f 100%);
`;

const Container = styled.div`
  position: relative;
  width: 1080px;
  height: 1920px;
  padding: 0 64px;
  flex-shrink: 0;

  display: grid;
  grid-template-rows: 400px minmax(0, 1fr) 200px;
`;

const App = () => (
  <Bg>
    <Container>
      <Header />
      <Cards />
      <Footer />
    </Container>
  </Bg>
);

export default App;

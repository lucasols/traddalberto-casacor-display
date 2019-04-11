import styled from '@emotion/styled';
import Cards from 'containers/Cards';
import Footer from 'containers/Footer';
import Header from 'containers/Header';
import React from 'react';
import { fillContainer } from 'style/modifiers';

const Container = styled.div`
  width: 1080px;
  height: 1920px;
  /* ${fillContainer}; */

  background: linear-gradient(29deg, #ff6d70 -29%, #277d8f 100%);
`;

const App = () => (
  <Container>
    <Header />
    <Cards />
    <Footer />
  </Container>
  );

export default App;

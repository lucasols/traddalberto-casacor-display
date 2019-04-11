import React from 'react';
import styled from '@emotion/styled';
import AirProperties from 'containers/AirProperties';

const Container = styled.div`
  width: 100%;
  padding: 0 64px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, auto);
  gap: 20px;
`;

const Cards = () => (
  <Container>
    <AirProperties />
  </Container>
);

export default Cards;

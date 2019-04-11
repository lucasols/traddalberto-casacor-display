import React from 'react';
import styled from '@emotion/styled';
import AirProperties from 'containers/AirProperties';
import EnergyWaste from 'containers/EnergyWaste';
import PeopleFlow from 'containers/PeopleFlow';
import Cabins from 'containers/Cabins';

const Container = styled.div`
  width: 100%;
  padding: 0 64px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  gap: 20px;
`;

const Cards = () => (
  <Container>
    <AirProperties />
    <PeopleFlow />
    <EnergyWaste />
    <Cabins />
  </Container>
);

export default Cards;

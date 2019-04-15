import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import AirProperties from 'containers/AirProperties';
import EnergyWaste from 'containers/EnergyConsumption';
import PeopleFlow from 'containers/PeopleFlow';
import Cabins from 'containers/Cabins';
import Sinks from 'containers/Sinks';
import Charts from 'containers/Charts';
import { fetchData } from 'state/sensors';

const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto minmax(0, 1fr);
  gap: 20px;
`;

const Cards = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <AirProperties />
      <PeopleFlow />
      <EnergyWaste />
      <Cabins />
      <Sinks />
      <Charts />
    </Container>
  );
};

export default Cards;

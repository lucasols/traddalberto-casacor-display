import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import AirProperties from 'containers/AirProperties';
import EnergyWaste from 'containers/EnergyConsumption';
import PeopleFlow from 'containers/PeopleFlow';
import Cabins from 'containers/Cabins';
import Sinks from 'containers/Sinks';
import Charts from 'containers/Charts';
import { fetchData, fetchCabin } from 'state/sensors';
import WaterConsumptionTotal from 'containers/WaterConsumptionTotal';
import WaterSensors from 'containers/WaterSensors';

const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto minmax(0, 1fr);
  gap: 20px;
  pointer-events: none;
`;

const Cards = () => {
  useEffect(() => {
    fetchData();
    fetchCabin(1);
    fetchCabin(2);
    fetchCabin(3);
  }, []);

  return (
    <Container>
      <AirProperties />
      <Cabins />
      <PeopleFlow />
      <WaterConsumptionTotal />
      <EnergyWaste />
      {/* <Sinks /> */}
      {/* <WaterSensors /> */}
      <Charts />
    </Container>
  );
};

export default Cards;

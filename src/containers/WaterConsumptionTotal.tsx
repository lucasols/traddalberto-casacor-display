import Card from 'components/Card';
import Odometer from 'components/Odometer';
import { Unit, fontSize, titleSize } from 'containers/PeopleFlow';
import React from 'react';
import sensorsState from 'state/sensors';
import WaterConsumption from 'components/WaterConsumption';
import styled from '@emotion/styled';
import { centerContent } from 'style/modifiers';

const OdometerWrapper = styled.div`
  width: 100%;
  /* height: 240px; */
  margin-top: -20px;
  ${centerContent};

  .odometer {
    font-weight: 300;
  }
`;

const WaterConsumptionGeneral = () => {
  const [cabin1Consumption] = sensorsState.useStore('vaso1');
  const [cabin2Consumption] = sensorsState.useStore('vaso2');
  const [cabin3Consumption] = sensorsState.useStore('vaso3');
  const [sink1Consumption] = sensorsState.useStore('pia1');
  const [sink2Consumption] = sensorsState.useStore('pia2');
  const [sink3Consumption] = sensorsState.useStore('pia3');
  const [sink4Consumption] = sensorsState.useStore('pia4');

  const values = cabin1Consumption
    + cabin2Consumption
    + cabin3Consumption
    + sink1Consumption
    + sink2Consumption
    + sink3Consumption
    + sink4Consumption;

  return (
    <Card title="Consumo de Água" titleSize={titleSize} icon="water" gridCollumSpan={1} gridCollum={2}>
      <OdometerWrapper>
        <WaterConsumption
          value={values}
          size={206}
          fontSize={58}
          minDigits={4}
          disableUnitAbreviation
        />
      </OdometerWrapper>
    </Card>
  );
};

export default WaterConsumptionGeneral;

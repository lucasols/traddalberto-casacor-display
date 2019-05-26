import Card from 'components/Card';
import Odometer from 'components/Odometer';
import { Unit, fontSize, titleSize } from 'containers/PeopleFlow';
import React from 'react';
import sensorsState from 'state/sensors';
import WaterConsumption from 'components/WaterConsumption';
import styled from '@emotion/styled';
import { centerContent } from 'style/modifiers';
import { letterSpacing } from 'style/helpers';

const OdometerWrapper = styled.div`
  width: 100%;
  /* height: 240px; */
  margin-top: 20px;
  margin-bottom: -10px;
  ${centerContent};

  .odometer {
    font-weight: 300;
  }
`;

const Disclaimer = styled.div`
  margin-top: -48px;
  width: 100%;
  font-size: 13px;
  font-weight: 300;
  opacity: 0.7;
  ${letterSpacing(0.1)};
  text-align: center;
`;

const WaterConsumptionGeneral = () => {
  const [cabin1Consumption] = sensorsState.useStore('vaso1');
  const [cabin2Consumption] = sensorsState.useStore('vaso2');
  const [cabin3Consumption] = sensorsState.useStore('vaso3');
  const [sink1Consumption] = sensorsState.useStore('pia1');
  const [sink2Consumption] = sensorsState.useStore('pia2');
  const [sink3Consumption] = sensorsState.useStore('pia3');
  const [sink4Consumption] = sensorsState.useStore('pia4');

  const values =
    cabin1Consumption
    + cabin2Consumption
    + cabin3Consumption
    + sink1Consumption
    + sink2Consumption
    + sink3Consumption
    + sink4Consumption;

  return (
    <Card
      title="Consumo de Água"
      titleSize={titleSize}
      icon="water"
      gridCollumSpan={1}
      gridCollum={2}
      paddingTop={24}
    >
      <Disclaimer>Atualizado a cada hora</Disclaimer>
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

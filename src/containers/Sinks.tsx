import styled from '@emotion/styled';
import Card from 'components/Card';
import WaterConsumption from 'components/WaterConsumption';
import React from 'react';
import sensorsState from 'state/sensors';
import { letterSpacing } from 'style/helpers';
import { centerContent, centerContentCollum } from 'style/modifiers';

const CabinsContainer = styled.div`
  ${centerContent};
  width: 100%;
  /* height: 280px; */
  padding: 0 24px;
`;

const Sink = styled.div`
  ${centerContentCollum};

  width: 300px;
  flex-grow: 2;
  height: 100%;

  h1 {
    position: absolute;
    top: 32px;

    font-weight: 400;
    height: 24px;
    margin-bottom: 8px;

    text-align: center;
    font-size: 11px;
    ${letterSpacing(0.08)};
    text-transform: uppercase;
  }
`;

const Sinks = () => {
  // const cabin1Consumption = useRamdomIncrement(0, 5000, 5);
  // const cabin2Consumption = useRamdomIncrement(0, 5000, 5);
  // const cabin3Consumption = useRamdomIncrement(0, 5000, 5);
  const [sink1Consumption] = sensorsState.useStore('pia1');
  const [sink2Consumption] = sensorsState.useStore('pia2');
  const [sink3Consumption] = sensorsState.useStore('pia3');
  const [sink4Consumption] = sensorsState.useStore('pia4');

  const waterConsumptionProps = {
    size: 172,
    fontSize: 48,
    minDigits: 4,
    disableUnitAbreviation: true,
  };

  return (
    <Card title="Cubas e Sanitários" icon="water">
      <CabinsContainer>
        <Sink>
          <h1>Cuba 1</h1>
          <WaterConsumption
            value={sink1Consumption}
            {...waterConsumptionProps}
          />
        </Sink>

        <Sink>
          <h1>Cuba 2</h1>
          <WaterConsumption
            value={sink2Consumption}
            {...waterConsumptionProps}
          />
        </Sink>

        <Sink>
          <h1>Cuba 3</h1>
          <WaterConsumption
            value={sink3Consumption}
            {...waterConsumptionProps}
          />
        </Sink>

        <Sink>
          <h1>Cuba Cabine</h1>
          <WaterConsumption
            value={sink4Consumption}
            {...waterConsumptionProps}
          />
        </Sink>
      </CabinsContainer>
    </Card>
  );
};

export default Sinks;

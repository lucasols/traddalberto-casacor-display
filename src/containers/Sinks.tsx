import React from 'react';
import styled from '@emotion/styled';
import Card from 'components/Card';
import { centerContent, centerContentCollum } from 'style/modifiers';
import { colors } from 'style/theme';
import { letterSpacing } from 'style/helpers';
import CabinStatus from 'components/CabinStatus';
import { useAlternateValues, useRamdomIncrement } from 'utils/hooks/testValues';
import WaterConsumption from 'components/WaterConsumption';
import sensorsState from 'state/sensors';

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
    top: 16px;

    font-weight: 400;
    height: 24px;
    margin-bottom: 8px;

    text-align: center;
    font-size: 14px;
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
    size: 192,
    fontSize: 54,
    minDigits: 4,
    disableUnitAbreviation: true,
  };

  return (
    <Card title="Pias" icon="water">
      <CabinsContainer>
        <Sink>
          <h1>Pia 1</h1>
          <WaterConsumption
            value={sink1Consumption}
            {...waterConsumptionProps}
          />
        </Sink>

        <Sink>
          <h1>Pia 2</h1>
          <WaterConsumption
            value={sink2Consumption}
            {...waterConsumptionProps}
          />
        </Sink>

        <Sink>
          <h1>Pia 3</h1>
          <WaterConsumption
            value={sink3Consumption}
            {...waterConsumptionProps}
          />
        </Sink>

        <Sink>
          <h1>Pia 4</h1>
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

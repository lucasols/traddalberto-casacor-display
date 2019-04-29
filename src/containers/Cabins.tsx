import React, { useMemo } from 'react';
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

const Cabin = styled.div`
  ${centerContentCollum};
  justify-content: start;

  width: 300px;
  flex-grow: 2;
  height: 100%;

  h1 {
    font-weight: 400;
    height: 24px;
    width: 100%;
    margin-bottom: 20px;

    text-align: center;
    font-size: 20px;
    ${letterSpacing(0.08)};
    text-transform: uppercase;
  }
`;

const Divider = styled.div`
  height: 120px;
  width: 1px;
  background: ${colors.divider};
`;

const waterConsumptionProps = {
  size: 200,
  fontSize: 47,
  minDigits: 4,
  disableUnitAbreviation: true,
};

const Cabins = () => {
  // const cabin1Status = useAlternateValues(false, true, 2500);
  // const cabin2Status = useAlternateValues(false, true, 4200);
  // const cabin3Status = useAlternateValues(true, false, 3300);
  // const cabin1Consumption = useRamdomIncrement(0, 5000, 5);
  // const cabin2Consumption = useRamdomIncrement(0, 5000, 5);
  // const cabin3Consumption = useRamdomIncrement(0, 5000, 5);
  const [cabin1Status] = sensorsState.useStore('livre1');
  const [cabin2Status] = sensorsState.useStore('livre2');
  const [cabin3Status] = sensorsState.useStore('livre3');

  return (
    <Card title="Cabines" icon="toilet">
      <CabinsContainer>
        <Cabin>
          <h1>Cabine 1</h1>
          <CabinStatus isFree={cabin1Status} />
        </Cabin>

        <Divider />

        <Cabin>
          <h1>Cabine 2</h1>
          <CabinStatus isFree={cabin2Status} />
        </Cabin>

        <Divider />

        <Cabin>
          <h1>Cabine 3</h1>
          <CabinStatus isFree={cabin3Status} />
        </Cabin>
      </CabinsContainer>
    </Card>
  );
};

export default Cabins;

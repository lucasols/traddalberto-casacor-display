import styled from '@emotion/styled';
import Card from 'components/Card';
import Odometer from 'components/Odometer';
import React from 'react';
import sensorsState from 'state/sensors';
import { centerContent } from 'style/modifiers';
import { colors } from 'style/theme';

export const fontSize = 120;

export const Unit = styled.div`
  font-size: 16px;
  text-align: center;
  width: 100%;
  letter-spacing: 0.24em;
  text-transform: uppercase;

  color: ${colors.cardText};
`;

export const OdometerWrapper = styled.div`
  width: 100%;
  /* height: 240px; */
  margin-top: -20px;
  ${centerContent};

  .odometer {
    font-weight: 300;
  }
`;

const PeopleFlow = () => {
  // const passagesCounter = useRamdomIncrement(18, 2000, 2);
  const [passagesCounter] = sensorsState.useStore('pessoas');

  return (
    <Card title="Fluxo de Pessoas" icon="door" gridCollumSpan={1}>
      <OdometerWrapper>
        <Odometer value={passagesCounter} fontSize={fontSize} minDigits={4} />
      </OdometerWrapper>
      <Unit>Passagens pela Porta</Unit>
    </Card>
  );
};

export default PeopleFlow;

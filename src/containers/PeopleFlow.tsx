import styled from '@emotion/styled';
import Card from 'components/Card';
import Odometer from 'components/Odometer';
import React from 'react';
import sensorsState from 'state/sensors';
import { centerContent } from 'style/modifiers';
import { colors } from 'style/theme';

export const fontSize = 130;
export const titleSize = 20;

export const Unit = styled.div`
  font-size: 14px;
  text-align: center;
  width: 100%;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  margin-top: 16px;

  color: ${colors.cardText};
`;

export const OdometerWrapper = styled.div`
  ${centerContent};
  width: 100%;
  /* height: 240px; */
  margin-top: -40px;
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

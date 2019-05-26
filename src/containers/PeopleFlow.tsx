import styled from '@emotion/styled';
import Card from 'components/Card';
import Odometer from 'components/Odometer';
import React from 'react';
import sensorsState from 'state/sensors';
import { centerContent } from 'style/modifiers';
import { colors } from 'style/theme';
import { letterSpacing } from 'style/helpers';

export const fontSize = 106;
export const titleSize = 20;

export const Unit = styled.div`
  font-size: 13px;
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
  margin-top: -10px;
`;

const Disclaimer = styled.div`
  position: absolute;
  margin-top: -48px;
  width: 100%;
  font-size: 13px;
  font-weight: 300;
  opacity: 0.7;
  ${letterSpacing(0.1)};
  text-align: center;
`;

const PeopleFlow = () => {
  // const passagesCounter = useRamdomIncrement(18, 2000, 2);
  const [passagesCounter] = sensorsState.useStore('pessoas');

  return (
    <Card
      title="Fluxo de Pessoas"
      titleSize={titleSize}
      icon="door"
      gridCollumSpan={1}
      paddingTop={24}
    >
      <Disclaimer>Atualizado a cada hora</Disclaimer>
      <OdometerWrapper>
        <Odometer value={passagesCounter} fontSize={fontSize} minDigits={4} />
      </OdometerWrapper>
      <Unit>Passagens pela Porta</Unit>
    </Card>
  );
};

export default PeopleFlow;

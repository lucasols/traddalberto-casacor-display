import React from 'react';
import styled from '@emotion/styled';
import Card from 'components/Card';
import { useRamdomIncrement } from 'utils/hooks/testValues';
import { colors } from 'style/theme';
import Odometer from 'components/Odometer';
import { centerContent } from 'style/modifiers';

const Unit = styled.div`
  font-size: 18px;
  text-align: center;
  width: 100%;
  letter-spacing: 0.24em;
  text-transform: uppercase;

  color: ${colors.cardText};
`;

const OdometerWrapper = styled.div`
  width: 100%;
  height: 240px;
  margin-top: -16px;
  ${centerContent};

  .odometer {
    font-weight: 300;
  }
`;

const EnergyWaste = () => {
  const kwh = useRamdomIncrement(18, 2000, 2);

  return (
    <Card title="Gasto de Energia" icon="energy" gridCollumSpan={1} gridCollum={2}>
      <OdometerWrapper>
        <Odometer value={kwh} fontSize={160} minDigits={3} />
      </OdometerWrapper>
      <Unit>Quilowat/hora</Unit>
    </Card>
  );
};

export default EnergyWaste;

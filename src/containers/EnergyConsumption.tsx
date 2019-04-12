import React from 'react';
import styled from '@emotion/styled';
import Card from 'components/Card';
import { useRamdomIncrement } from 'utils/hooks/testValues';
import { colors } from 'style/theme';
import Odometer from 'components/Odometer';
import { centerContent } from 'style/modifiers';
import { OdometerWrapper, Unit } from 'containers/PeopleFlow';

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

import Card from 'components/Card';
import Odometer from 'components/Odometer';
import { OdometerWrapper, Unit, fontSize } from 'containers/PeopleFlow';
import React from 'react';
import { useRamdomIncrement } from 'utils/hooks/testValues';
import sensorsState from 'state/sensors';

const EnergyWaste = () => {
  // const kwh = useRamdomIncrement(18, 2000, 2);
  const [kwh] = sensorsState.useStore('energia');

  return (
    <Card title="Gasto de Energia" icon="energy" gridCollumSpan={1} gridCollum={2}>
      <OdometerWrapper>
        <Odometer value={kwh} fontSize={fontSize} minDigits={4} />
      </OdometerWrapper>
      <Unit>Quilowat/hora</Unit>
    </Card>
  );
};

export default EnergyWaste;

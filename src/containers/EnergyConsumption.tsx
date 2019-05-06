import Card from 'components/Card';
import Odometer from 'components/Odometer';
import { OdometerWrapper, Unit, fontSize, titleSize } from 'containers/PeopleFlow';
import React from 'react';
import sensorsState from 'state/sensors';

const EnergyWaste = () => {
  const [kwh] = sensorsState.useStore('energia');

  return (
    <Card title="Consumo de Energia" titleSize={titleSize} icon="energy" gridCollumSpan={1} gridCollum={3}>
      <OdometerWrapper>
        <Odometer value={kwh} fontSize={fontSize} minDigits={4} />
      </OdometerWrapper>
      <Unit>Quilowatt-hora</Unit>
    </Card>
  );
};

export default EnergyWaste;

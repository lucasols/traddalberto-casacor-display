import Card from 'components/Card';
import Odometer from 'components/Odometer';
import { OdometerWrapper, Unit, fontSize, titleSize } from 'containers/PeopleFlow';
import React from 'react';
import sensorsState from 'state/sensors';

const EnergyWaste = () => {
  const [wh] = sensorsState.useStore('energia');

  return (
    <Card title="Consumo de Energia" icon="energy" gridCollumSpan={1} gridCollum={2}>
      <OdometerWrapper>
        <Odometer value={wh / 10} fontSize={fontSize} format="d,dd" minDigits={3} />
      </OdometerWrapper>
      <Unit>Quilowatt-hora</Unit>
    </Card>
  );
};

export default EnergyWaste;

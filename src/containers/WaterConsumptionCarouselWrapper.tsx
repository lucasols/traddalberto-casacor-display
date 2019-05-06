import styled from '@emotion/styled';
import Card from 'components/Card';
import WaterConsumptionCarousel from 'containers/WaterConsumptionCarousel';
import React from 'react';
import { centerContent } from 'style/modifiers';

const OdometerWrapper = styled.div`
  width: 100%;
  /* height: 240px; */
  margin-top: -20px;
  ${centerContent};

  .odometer {
    font-weight: 300;
  }
`;

const GeneralWaterConsumption = () => (
  <Card
    title="Consumo de Água"
    titleSize={20}
    icon="water"
    gridCollumSpan={1}
    gridCollum={2}
  >
    <OdometerWrapper>
      <WaterConsumptionCarousel />
    </OdometerWrapper>
  </Card>
  );

export default GeneralWaterConsumption;

import styled from '@emotion/styled';
import Card from 'components/Card';
import WaterConsumption from 'components/WaterConsumption';
import React, { useState, useMemo } from 'react';
import sensorsState from 'state/sensors';
import { letterSpacing } from 'style/helpers';
import { centerContent, centerContentCollum } from 'style/modifiers';
import { useInterval } from 'utils/hooks/useInterval';
import { easeInOut } from 'style/theme';

const SinksContainer = styled.div`
  ${centerContent};
  width: 100%;
  /* height: 280px; */
  padding: 0 24px;
  transition: ${easeInOut} 500ms;
`;

const ToiletsContainer = styled.div`
  ${centerContent};
  position: absolute;
  /* top: 0; */
  width: 100%;
  /* height: 280px; */
  padding: 0 24px;
  transition: ${easeInOut} 500ms;
`;

const WaterCircle = styled.div<{ order: number; total: number }>`
  ${centerContentCollum};

  width: 300px;
  flex-grow: 2;
  height: 100%;
  transition: ${easeInOut} 1s ${({ order, total }) => (order / total) * 400}ms;

  h1 {
    position: absolute;
    top: 32px;

    font-weight: 400;
    height: 24px;
    margin-bottom: 8px;

    text-align: center;
    font-size: 11px;
    ${letterSpacing(0.08)};
    text-transform: uppercase;
    line-height: 1.4;
  }
`;

const waterConsumptionProps = {
  size: 172,
  fontSize: 48,
  minDigits: 4,
  disableUnitAbreviation: true,
};

const WaterSensors = () => {
  const [sink1Consumption] = sensorsState.useStore('pia1');
  const [sink2Consumption] = sensorsState.useStore('pia2');
  const [sink3Consumption] = sensorsState.useStore('pia3');
  const [sink4Consumption] = sensorsState.useStore('pia4');
  const [cabin1Consumption] = sensorsState.useStore('vaso1');
  const [cabin2Consumption] = sensorsState.useStore('vaso2');
  const [cabin3Consumption] = sensorsState.useStore('vaso3');

  const [showSinks, setShowSinks] = useState(true);

  useInterval(() => {
    setShowSinks(!showSinks);
  }, 7000);

  const toiletStyle = useMemo(
    () => ({
      transform: `translate3d(0, ${showSinks ? '-100%' : '0'}, 0)`,
      opacity: showSinks ? 0 : 1,
    }),
    [showSinks],
  );

  const sinktStyle = useMemo(
    () => ({
      transform: `translate3d(0, ${!showSinks ? '100%' : '0'}, 0)`,
      opacity: !showSinks ? 0 : 1,
    }),
    [showSinks],
  );

  return (
    <Card
      title="Lavatórios e Vasos Sanitários"
      titleSize={24}
      icon="water"
      overflowHidden
    >
      <ToiletsContainer>
        <WaterCircle order={0} total={3} style={toiletStyle}>
          <h1>Vaso 1</h1>
          <WaterConsumption
            value={cabin1Consumption}
            {...waterConsumptionProps}
          />
        </WaterCircle>

        <WaterCircle order={1} total={3} style={toiletStyle}>
          <h1>Vaso 2</h1>
          <WaterConsumption
            value={cabin2Consumption}
            {...waterConsumptionProps}
          />
        </WaterCircle>

        <WaterCircle order={2} total={3} style={toiletStyle}>
          <h1>Vaso 3</h1>
          <WaterConsumption
            value={cabin3Consumption}
            {...waterConsumptionProps}
          />
        </WaterCircle>
      </ToiletsContainer>
      <SinksContainer>
        <WaterCircle order={0} total={4} style={sinktStyle}>
          <h1>Lavatório 1</h1>
          <WaterConsumption
            value={sink1Consumption}
            {...waterConsumptionProps}
          />
        </WaterCircle>

        <WaterCircle order={1} total={4} style={sinktStyle}>
          <h1>Lavatório 2</h1>
          <WaterConsumption
            value={sink2Consumption}
            {...waterConsumptionProps}
          />
        </WaterCircle>

        <WaterCircle order={2} total={4} style={sinktStyle}>
          <h1>Lavatório 3</h1>
          <WaterConsumption
            value={sink3Consumption}
            {...waterConsumptionProps}
          />
        </WaterCircle>

        <WaterCircle order={3} total={4} style={sinktStyle}>
          <h1 css={{ marginTop: -8 }}>Lavatório<br /> Cabine</h1>
          <WaterConsumption
            value={sink4Consumption}
            {...waterConsumptionProps}
          />
        </WaterCircle>
      </SinksContainer>
    </Card>
  );
};

export default WaterSensors;

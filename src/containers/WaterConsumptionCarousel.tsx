import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import Odometer from 'components/Odometer';
import React, { useRef, useState } from 'react';
import sensorsState from 'state/sensors';
import { letterSpacing } from 'style/helpers';
import { centerContent } from 'style/modifiers';
import { colors, colorsRgba, easeInOut } from 'style/theme';
import { useInterval } from 'utils/hooks/useInterval';

const Container = styled.div`
  ${centerContent};
  border: 1.5px solid ${colors.blueAccent};
  border-radius: 400px;
  overflow: hidden;
`;

const swell = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const Wave = styled.svg`
  position: absolute;
  width: 500%;
  height: 52%;
  bottom: 0;
  left: 0;
  fill: ${colorsRgba.blue(0.4)};

  animation-name: ${swell};
  animation-duration: 20s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const CarouselWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const OdometerWrapper = styled.div`
  position: absolute;
  ${centerContent};
  height: 100%;
  width: 100%;
  overflow: hidden;

  transition: 1s ${easeInOut};

  h1 {
    font-weight: 300;
    font-size: 14px;
    position: absolute;
    text-align: center;
    bottom: 148px;
    white-space: pre-line;
    /* ${letterSpacing(0.04)} */
    text-transform: uppercase;
  }
`;

function getSensorPos(pos: number, carouselPos: number, lenght: number) {
  const normalizePos = (p: number) =>
    (p > lenght - 1 ? 0 : p < 0 ? lenght - 1 : p);

  if (pos === carouselPos) return 0;

  if (pos === normalizePos(carouselPos + 1)) {
    return 1;
  }

  if (pos === normalizePos(carouselPos - 1)) {
    return -1;
  }

  return -2;
}

const UnitBottom = styled.div`
  position: absolute;
  bottom: 38px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.48em;
  margin-left: 0.24em;
`;

const WaterConsumptionCarousel = () => {
  const size = 210;
  const fontSize = 68;
  const minDigits = 4;

  const [cabin1Consumption] = sensorsState.useStore('vaso1');
  const [cabin2Consumption] = sensorsState.useStore('vaso2');
  const [cabin3Consumption] = sensorsState.useStore('vaso3');
  const [sink1Consumption] = sensorsState.useStore('pia1');
  const [sink2Consumption] = sensorsState.useStore('pia2');
  const [sink3Consumption] = sensorsState.useStore('pia3');
  const [sink4Consumption] = sensorsState.useStore('pia4');

  const sensors = [
    {
      label: 'Cabine 1',
      value: cabin1Consumption,
    },
    {
      label: 'Lavatório 1',
      value: sink1Consumption,
    },
    {
      label: 'Cabine 2',
      value: cabin2Consumption,
    },
    {
      label: 'Lavatório 2',
      value: sink2Consumption,
    },
    {
      label: 'Cabine 3',
      value: cabin3Consumption,
    },
    {
      label: 'Lavatório 3',
      value: sink3Consumption,
    },
    {
      label: 'Lavatório\n Cabine',
      value: sink4Consumption,
    },
  ];

  const wavesAnimationDelay = useRef(Math.random() * 3);

  const [carouselPos, setCarouselPos] = useState(0);

  useInterval(() => {
    setCarouselPos(carouselPos + 1 < sensors.length ? carouselPos + 1 : 0);
  }, 1000 * 14);

  return (
    <Container
      css={{
        width: size,
        height: size,
      }}
    >
      <Wave viewBox="0 0 12960 1120" preserveAspectRatio="none">
        <path d="M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z">
          <animate
            dur="8s"
            repeatCount="indefinite"
            attributeName="d"
            begin={`${wavesAnimationDelay.current}s`}
            values="
              M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z;
              M9720,0C8100,0,8100,319,6480,319S4860,0,3240,0,1620,320,0,320v800H12960V320C11340,320,11340,0,9720,0Z;
              M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z
            "
          />
        </path>
      </Wave>
      <CarouselWrapper>
        {sensors.map((sensor, i) => {
          const pos = getSensorPos(i, carouselPos, sensors.length);

          return (
            <OdometerWrapper
              key={i}
              style={{
                transform:
                  pos >= -1 ? `translate3d(${100 * pos}%, 0, 0` : undefined,
                opacity: pos === 0 ? 1 : 0,
                display: pos === -2 ? 'none' : undefined,
              }}
            >
              <h1>{sensor.label}</h1>
              {pos !== -2 && (
                <Odometer
                  value={sensor.value}
                  fontSize={fontSize}
                  minDigits={minDigits}
                  fade="top"
                />
              )}
            </OdometerWrapper>
          );
        })}
      </CarouselWrapper>
      <Wave
        viewBox="0 0 12960 1120"
        preserveAspectRatio="none"
        css={css`
          margin-left: -4px;
          height: 48%;
          /* width: 500%; */
          animation-duration: 16s;
        `}
      >
        <path d="M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z">
          <animate
            dur="8s"
            repeatCount="indefinite"
            attributeName="d"
            begin={`${wavesAnimationDelay.current + 0.5}s`}
            values="
              M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z;
              M9720,0C8100,0,8100,319,6480,319S4860,0,3240,0,1620,320,0,320v800H12960V320C11340,320,11340,0,9720,0Z;
              M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z
            "
          />
        </path>
      </Wave>
      <UnitBottom>LITROS</UnitBottom>
    </Container>
  );
};

export default WaterConsumptionCarousel;

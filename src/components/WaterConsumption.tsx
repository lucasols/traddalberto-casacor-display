import React, { useRef, memo } from 'react';
import styled from '@emotion/styled';
import { colors, colorsRgba } from 'style/theme';
import Odometer from 'components/Odometer';
import { centerContent } from 'style/modifiers';
import { keyframes, css } from '@emotion/core';
import { letterSpacing } from 'style/helpers';

type Props = {
  size: number;
  value: number;
  fontSize: number;
  minDigits: number;
  disableUnitAbreviation?: boolean;
};

const Container = styled.div`
  ${centerContent};
  border: 1.5px solid ${colors.blueAccent};
  border-radius: 400px;
  overflow: hidden;

  .odometer {
  }
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
  fill: ${colorsRgba.blue(0.32)};

  animation-name: ${swell};
  animation-duration: 20s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Unit = styled.span`
  font-size: 26px;
  font-weight: 300;
`;

const UnitBottom = styled.div`
  position: absolute;
  bottom: 38px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.48em;
  margin-left: 0.24em;
`;

const WaterConsumption = ({
  size,
  value,
  fontSize,
  minDigits,
  disableUnitAbreviation = false,
}: Props) => {
  const wavesAnimationDelay = useRef(Math.random() * 3);

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
      <div>
        <Odometer
          value={value}
          fontSize={fontSize}
          minDigits={minDigits}
          fade="top"
        />
        {!disableUnitAbreviation && <Unit>L</Unit>}
      </div>
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
      {disableUnitAbreviation && (
        <UnitBottom>
          LITROS
        </UnitBottom>
      )}
    </Container>
  );
};

export default memo(WaterConsumption);

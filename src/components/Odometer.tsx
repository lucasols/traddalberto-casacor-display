import css from '@emotion/css';
import styled from '@emotion/styled';
import OdometerJs from 'utils/odometer-js';
import React, { useEffect, useRef } from 'react';
import { fontNumber, colorsRgba, colors } from 'style/theme';
import { useThrottle } from 'utils/hooks/useThrottle';
import { fillContainer } from 'style/modifiers';

type Props = {
  value: number;
  fontSize: number;
  duration?: number;
  font?: string;
  minDigits?: number;
  fade?: 'top' | 'booth' | 'bottom' | 'none';
};

const OdometerTheme = css`
  .odometer-inside {
    white-space: nowrap;
  }

  .odometer.odometer-auto-theme,
  .odometer.odometer-theme-plaza {
    display: inline-block;
    position: relative;
  }
  .odometer.odometer-auto-theme .odometer-digit,
  .odometer.odometer-theme-plaza .odometer-digit {
    display: inline-block;
    position: relative;
  }
  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,
  .odometer.odometer-theme-plaza .odometer-digit .odometer-digit-spacer {
    display: inline-block;
    visibility: hidden;
  }
  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
  .odometer.odometer-theme-plaza .odometer-digit .odometer-digit-inner {
    text-align: left;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,
  .odometer.odometer-theme-plaza .odometer-digit .odometer-ribbon {
    display: block;
    text-align: center;
  }
  .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,
  .odometer.odometer-theme-plaza .odometer-digit .odometer-ribbon-inner {
    display: block;
    backface-visibility: hidden;
  }
  .odometer.odometer-auto-theme .odometer-digit .odometer-value,
  .odometer.odometer-theme-plaza .odometer-digit .odometer-value {
    display: block;
    width: 100%;
    transform: translateZ(0);
  }
  .odometer.odometer-auto-theme
    .odometer-digit
    .odometer-value.odometer-last-value,
  .odometer.odometer-theme-plaza
    .odometer-digit
    .odometer-value.odometer-last-value {
    position: absolute;
  }
  .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,
  .odometer.odometer-theme-plaza.odometer-animating-up .odometer-ribbon-inner {
    transition: transform 1500ms ease;
  }
  .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating
    .odometer-ribbon-inner,
  .odometer.odometer-theme-plaza.odometer-animating-up.odometer-animating
    .odometer-ribbon-inner {
    transform: translateY(-100%);
  }
  .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,
  .odometer.odometer-theme-plaza.odometer-animating-down
    .odometer-ribbon-inner {
    transform: translateY(-100%);
  }
  .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating
    .odometer-ribbon-inner,
  .odometer.odometer-theme-plaza.odometer-animating-down.odometer-animating
    .odometer-ribbon-inner {
    transition: transform 1500ms ease;
    transform: translateY(0);
  }

  .odometer.odometer-auto-theme,
  .odometer.odometer-theme-plaza {
    /* font-weight: 100; */
    /* padding: 0 0.12em; */
    line-height: 1.2em;
  }
  .odometer.odometer-auto-theme .odometer-digit,
  .odometer.odometer-theme-plaza .odometer-digit {
    padding: 0 2px;
  }
  .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,
  .odometer.odometer-theme-plaza .odometer-digit .odometer-digit-inner {
    left: 2px;
  }
`;

const Container = styled.div`
  display: inline-block;
  color: #fff;

  ${OdometerTheme};
`;

const Odometer = ({
  value,
  fontSize,
  duration = 2000,
  font = fontNumber,
  minDigits = 2,
  fade = 'booth',
}: Props) => {
  const odometerElem = useRef<HTMLDivElement>(null);
  const odometer = useRef<OdometerJs>();

  const throttleValue = useThrottle(value, duration + 100);

  useEffect(() => {
    odometer.current = new OdometerJs({
      el: odometerElem.current!,
      duration,
      value,
      numberLength: minDigits,
    });
  }, []);

  useEffect(() => {
    odometer.current!.update(throttleValue);
  }, [throttleValue]);

  return (
    <Container
      css={{
        fontSize,
        fontFamily: font,
      }}
    >
      <div ref={odometerElem} />
      {fade !== 'none' && (
        <div
          css={css`
            ${fillContainer};

            background: linear-gradient(
              0deg,
              ${(fade === 'bottom' || fade === 'booth') && `${colors.bg} 0%,`}
              ${colorsRgba.bg(0)} 20%,
              ${colorsRgba.bg(0)} 80%
              ${(fade === 'top' || fade === 'booth') && `, ${colors.bg} 100%`}
            );
          `}
        />
      )}
    </Container>
  );
};

export default Odometer;

import styled from '@emotion/styled';
import React from 'react';
import { colors, colorsRgba, easeInOut, easeOut } from 'style/theme';
import { fillContainer, centerContent } from 'style/modifiers';
import { letterSpacing } from 'style/helpers';

type Props = {
  isFree: boolean;
};

const Container = styled.div`
  height: 44px;
  width: 198px;
  border-radius: 40px;

  border: 1.5px solid;

  transition: 1s;
  overflow: hidden;
`;

const StatusWrapper = styled.div`
  width: 200%;
  height: 100%;

  transition: transform 1s ${easeInOut};
`;

const Status = styled.div`
  height: 100%;
  width: 50%;
  ${centerContent};
  float: left;

  text-transform: uppercase;
  font-size: 24px;

  span {
    ${letterSpacing(0.04)};
  }
`;

const CabinStatus = ({ isFree }: Props) => (
  <Container
    style={{
      borderColor: isFree ? colors.green : colors.red,
    }}
  >
    <StatusWrapper
      style={{
        transform: `translate3d(${isFree ? -50 : 0}%, 0, 0)`,
      }}
    >
      <Status
        css={{ background: colorsRgba.red(0.3) }}
        >
        <span>Ocupada</span>
      </Status>
      <Status
        css={{ background: colorsRgba.green(0.3) }}
      >
        <span>Livre</span>
      </Status>
    </StatusWrapper>
  </Container>
);

export default CabinStatus;

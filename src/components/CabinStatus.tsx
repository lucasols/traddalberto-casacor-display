import styled from '@emotion/styled';
import React, { memo } from 'react';
import { letterSpacing } from 'style/helpers';
import { centerContent } from 'style/modifiers';
import { colors, colorsRgba, easeInOut } from 'style/theme';

type Props = {
  isFree: boolean;
};

const Container = styled.div`
  height: 80px;
  width: 264px;
  border-radius: 200px;
  margin-bottom: 18px;

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
  color: #fff;

  text-transform: uppercase;
  font-size: 30px;

  span {
    ${letterSpacing(0.12)};
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

export default memo(CabinStatus);

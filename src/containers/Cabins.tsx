import React from 'react';
import styled from '@emotion/styled';
import Card from 'components/Card';
import { centerContent, centerContentCollum } from 'style/modifiers';
import { colors } from 'style/theme';
import { letterSpacing } from 'style/helpers';
import CabinStatus from 'components/CabinStatus';
import { useAlternateValues } from 'utils/hooks/testValues';

const CabinsContainer = styled.div`
  ${centerContent};
  width: 100%;
  height: 254px;
  padding: 0 24px;
`;

const Cabin = styled.div`
  ${centerContentCollum};
  justify-content: start;

  width: 300px;
  flex-grow: 2;
  height: 100%;

  h1 {
    font-weight: 400;
    height: 24px;
    width: 100%;
    margin-bottom: 8px;

    text-align: center;
    font-size: 14px;
    ${letterSpacing(0.08)};
    text-transform: uppercase;
    margin-left: 12px;
  }
`;

const Divider = styled.div`
  height: 160px;
  width: 1px;
  background: ${colors.divider};
`;

const Cabins = () => {
  const cabin1Status = useAlternateValues(false, true, 2500);
  const cabin2Status = useAlternateValues(false, true, 4200);
  const cabin3Status = useAlternateValues(true, false, 3300);

  return (
    <Card title="Cabines" icon="toilet">
      <CabinsContainer>
        <Cabin>
          <h1>Cabine 1</h1>
          <CabinStatus isFree={cabin1Status} />
        </Cabin>

        <Divider />

        <Cabin>
          <h1>Cabine 2</h1>
          <CabinStatus isFree={cabin2Status} />
        </Cabin>

        <Divider />

        <Cabin>
          <h1>Cabine 3</h1>
          <CabinStatus isFree={cabin3Status} />
        </Cabin>
      </CabinsContainer>
    </Card>
  );
};

export default Cabins;

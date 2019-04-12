import styled from '@emotion/styled';
import Card from 'components/Card';
import React from 'react';
import { letterSpacing } from 'style/helpers';
import { centerContent, fillContainer } from 'style/modifiers';
import { colors, fontNumber, fontPrimary } from 'style/theme';

const ChartsContainer = styled.div`
  ${fillContainer};
  ${centerContent};
`;

const MiniChart = styled.div`
  ${centerContent};
  width: 230px;
  height: 100%;
  flex-grow: 1;

  > h1 {
    position: absolute;
    top: 26px;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Divider = styled.div`
  height: 100px;
  width: 1px;
  background: ${colors.divider};
`;

const Average = styled.div`
  position: absolute;
  margin-top: 70px;
  text-align: center;

  h1 {
    font-size: 11px;
    font-weight: 300;
    text-transform: uppercase;
    ${letterSpacing(0.32)};
  }

  div {
    font-family: ${fontNumber};
    font-size: 28px;
    line-height: 1.3;
    letter-spacing: 0.2em;
    color: #fff;
    font-weight: 600;
  }

  span {
    font-family: ${fontPrimary};
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 0;
    color: ${colors.cardText};
  }
`;

const AverageLabel = () => <h1>Média Diária</h1>;

const Charts = () => {
  const averagePeopleFlow = 25326;
  const averageEnergyConsumption = 253.6;
  const averageWaterConsumption = 25326;
  const averageAirQualityIndex = 190;
  const averageAirQualityLevel = 'Boa';

  return (
    <Card>
      <ChartsContainer>
        <MiniChart>
          <h1>Fluxo de Pessoas</h1>
          <Average>
            <AverageLabel />
            <div>{averagePeopleFlow}</div>
          </Average>
        </MiniChart>

        <Divider />

        <MiniChart>
          <h1>Gasto de Energia</h1>
          <Average>
            <AverageLabel />
            <div>
              {averageEnergyConsumption}
              <span>kWh</span>
            </div>
          </Average>
        </MiniChart>

        <Divider />

        <MiniChart>
          <h1>Gasto Total de Água</h1>
          <Average>
            <AverageLabel />
            <div>
              {averageWaterConsumption}
              <span>L</span>
            </div>
          </Average>
        </MiniChart>

        <Divider />

        <MiniChart>
          <h1>Índice de Qualidade do Ar</h1>
          <Average>
            <AverageLabel />
            <div>
              {averageAirQualityIndex}
              <span>({averageAirQualityLevel})</span>
            </div>
          </Average>
        </MiniChart>
      </ChartsContainer>
    </Card>
  );
};

export default Charts;
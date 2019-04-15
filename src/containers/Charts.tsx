import styled from '@emotion/styled';
import Card from 'components/Card';
import React from 'react';
import { letterSpacing } from 'style/helpers';
import { centerContent, fillContainer } from 'style/modifiers';
import { colors, fontNumber, fontPrimary } from 'style/theme';
import MiniChart from 'components/MiniChart';
import sensorsState, { valueHistory } from 'state/sensors';
import { getQualityLevel, scaleLevels } from 'utils/getQualityLevel';
import { takeRight } from 'lodash-es';

const ChartsContainer = styled.div`
  ${fillContainer};
  ${centerContent};
  padding: 0 8px;
`;

const ChartWrapper = styled.div`
  ${centerContent};
  width: 230px;
  height: 100%;
  flex-grow: 1;

  > h1 {
    position: absolute;
    top: 26px;
    font-size: 16px;
    font-weight: 300;
  }
`;

const Divider = styled.div`
  height: 100px;
  width: 1px;
  background: ${colors.divider};
`;

const Average = styled.div`
  position: absolute;
  margin-top: 80px;
  text-align: center;

  h1 {
    font-size: 10px;
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
    vertical-align: middle;
  }
`;

// TODO: fix digit is bigger than defined

const AverageLabel = () => <h1>Média Diária</h1>;

const daysOfWeek = ['Do', 'Se', 'Te', 'Qa', 'Qu', 'Sx', 'Sa'];

function sameDay(d1: Date, d2: [number, number, number]) {
  return d1.getFullYear() === d2[0] &&
    d1.getMonth() + 1 === d2[1] &&
    d1.getDate() === d2[2];
}

function getAverageAndDataset(
  history: valueHistory,
  current: number[],
): [number, { label: string; value: number }[]] {
  const dataset = [];
  const today = new Date();

  for (let i = 7; i > 0; i--) {
    const day = new Date(2019, today.getMonth(), today.getDate() - i);
    const historyEquivalent = history.find(d => sameDay(day, d.data));

    dataset.push({
      label: daysOfWeek[day.getDay()],
      value: historyEquivalent ? historyEquivalent.valor : 0,
    });
  }

  const nonZero = dataset.filter(({ value }) => value !== 0);
  const todayValue = current.reduce((a, b) => a + b);

  return [
    nonZero.length !== 0
      ? Math.round(nonZero.reduce((a, { value }) => a + value, 0) / (nonZero.length || 1))
      : todayValue,
    takeRight([...dataset, {
      label: 'Hoje',
      value: todayValue,
    }], 7),
  ];
}

const Charts = () => {
  const [history] = sensorsState.useStore('historico');
  const [passagesCounter] = sensorsState.useStore('pessoas');
  const [IQA] = sensorsState.useStore('iaq');
  const [kwh] = sensorsState.useStore('energia');
  const [sink1] = sensorsState.useStore('pia1');
  const [sink2] = sensorsState.useStore('pia2');
  const [sink3] = sensorsState.useStore('pia3');
  const [sink4] = sensorsState.useStore('pia4');
  const [cabin1] = sensorsState.useStore('vaso1');
  const [cabin2] = sensorsState.useStore('vaso1');
  const [cabin3] = sensorsState.useStore('vaso1');

  const [averagePeopleFlow, peopleFlowData] = getAverageAndDataset(
    history.pessoas_historico,
    [passagesCounter],
  );
  const [averageEnergy, energyData] = getAverageAndDataset(
    history.energia_historico,
    [kwh],
  );
  const [averageWater, waterData] = getAverageAndDataset(
    history.agua_historico,
    [sink1, sink2, sink3, sink4, cabin1, cabin2, cabin3],
  );
  const [averageAqi, aqiData] = getAverageAndDataset(history.iqa_historico, [
    IQA,
  ]);

  const averageAirQualityLevel = scaleLevels[getQualityLevel(averageAqi) - 1].label;

  return (
    <Card>
      <ChartsContainer>
        <ChartWrapper>
          <h1>Fluxo de Pessoas</h1>
          <MiniChart data={peopleFlowData} />
          <Average>
            <AverageLabel />
            <div>{averagePeopleFlow}</div>
          </Average>
        </ChartWrapper>

        <Divider />

        <ChartWrapper>
          <h1>Gasto de Energia</h1>
          <MiniChart data={energyData} />
          <Average>
            <AverageLabel />
            <div>
              {averageEnergy}
              <span>kWh</span>
            </div>
          </Average>
        </ChartWrapper>

        <Divider />

        <ChartWrapper>
          <h1>Gasto Total de Água</h1>
          <MiniChart data={waterData} />
          <Average>
            <AverageLabel />
            <div>
              {averageWater}
              <span>L</span>
            </div>
          </Average>
        </ChartWrapper>

        <Divider />

        <ChartWrapper>
          <h1>Índice de Qualidade do Ar</h1>
          <MiniChart data={aqiData} />
          <Average>
            <AverageLabel />
            <div>
              {averageAqi}
              <span style={{ fontSize: 14 }}>({averageAirQualityLevel})</span>
            </div>
          </Average>
        </ChartWrapper>
      </ChartsContainer>
    </Card>
  );
};

export default Charts;

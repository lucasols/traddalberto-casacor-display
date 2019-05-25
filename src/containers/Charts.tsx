import styled from '@emotion/styled';
import Card from 'components/Card';
import React, { useState, useEffect } from 'react';
import { letterSpacing } from 'style/helpers';
import { centerContent, fillContainer } from 'style/modifiers';
import { colors, fontNumber, fontPrimary } from 'style/theme';
import MiniChart from 'components/MiniChart';
import sensorsState, { valueHistory } from 'state/sensors';
import { getQualityLevel, scaleLevels } from 'utils/getQualityLevel';
import { takeRight } from 'lodash-es';
import { useThrottle } from 'utils/hooks/useThrottle';
import Icon from 'components/Icon';

const ChartsContainer = styled.div`
  ${fillContainer};
  ${centerContent};
  padding: 4px 8px;
`;

const ChartWrapper = styled.div`
  ${centerContent};
  width: 230px;
  height: 100%;
  flex-grow: 1;

  > h1 {
    ${centerContent};
    position: absolute;
    top: 28px;
    font-size: 20px;
    font-weight: 300;
    ${letterSpacing(0.08)};
  }

  .icon {
    margin-right: 8px;
  }
`;

const Divider = styled.div`
  margin-top: 10px;
  height: 200px;
  width: 1px;
  background: ${colors.divider};
`;

const Average = styled.div`
  position: absolute;
  margin-top: 76px;
  text-align: center;

  h1 {
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
    ${letterSpacing(0.32)};
  }

  div {
    font-family: ${fontNumber};
    font-size: 30px;
    line-height: 1.3;
    letter-spacing: 0.2em;
    color: #fff;
    font-weight: 600;
  }

  span {
    font-family: ${fontPrimary};
    font-weight: 300;
    font-size: 20px;
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
  // const [sink1] = sensorsState.useStore('pia1');
  // const [sink2] = sensorsState.useStore('pia2');
  // const [sink3] = sensorsState.useStore('pia3');
  // const [sink4] = sensorsState.useStore('pia4');
  // const [cabin1] = sensorsState.useStore('vaso1');
  // const [cabin2] = sensorsState.useStore('vaso1');
  // const [cabin3] = sensorsState.useStore('vaso1');

  const [throttle, setThrottle] = useState(1000);

  const [averagePeopleFlow, peopleFlowData] = useThrottle(getAverageAndDataset(
    history.pessoas_historico,
    [passagesCounter],
  ), throttle);
  const [averageEnergy, energyData] = useThrottle(getAverageAndDataset(
    history.energia_historico,
    [kwh],
  ), throttle);
  // const [averageWater, waterData] = useThrottle(getAverageAndDataset(
  //   history.agua_historico,
  //   [sink1, sink2, sink3, sink4, cabin1, cabin2, cabin3],
  // ), throttle);
  const [averageAqi, aqiData] = useThrottle(getAverageAndDataset(history.iqa_historico, [
    IQA,
  ]), throttle);

  const averageAirQualityLevel = scaleLevels[getQualityLevel(averageAqi) - 1].label;

  useEffect(() => {
    setTimeout(() => setThrottle(2 * 60 * 1000), 10000);
  }, []);

  return (
    <Card>
      <ChartsContainer>
        <ChartWrapper>
          <h1><Icon name="door" size={24} />Fluxo de Pessoas</h1>
          <MiniChart data={peopleFlowData} />
          <Average>
            <AverageLabel />
            <div>{averagePeopleFlow}</div>
          </Average>
        </ChartWrapper>

        <Divider />

        <ChartWrapper>
          <h1><Icon name="energy" size={24} />Consumo de Energia</h1>
          <MiniChart data={energyData} />
          <Average>
            <AverageLabel />
            <div>
              {averageEnergy}
              <span>Wh</span>
            </div>
          </Average>
        </ChartWrapper>

        <Divider />

        <ChartWrapper>
          <h1><Icon name="speedometer" size={24} />Qualidade do Ar</h1>
          <MiniChart data={aqiData} />
          <Average>
            <AverageLabel />
            <div>
              {Math.round(averageAqi / 2)}
              <span style={{ fontSize: 18 }}>% ({averageAirQualityLevel})</span>
            </div>
          </Average>
        </ChartWrapper>
      </ChartsContainer>
    </Card>
  );
};

export default Charts;

/* eslint-disable @typescript-eslint/camelcase */
import { createStore } from 'hookstated';
import { Omit } from 'typings/utils';
import { clamp } from 'utils/clamp';

export type valueHistory = {
  data: [number, number, number];
  valor: number;
}[];

type SensorsState = {
  pia1: number;
  pia2: number;
  pia3: number;
  pia4: number;
  vaso1: number;
  vaso2: number;
  vaso3: number;
  livre1: boolean;
  livre2: boolean;
  livre3: boolean;
  energia: number;
  pessoas: number;
  temperatura: number;
  umidade: number;
  iaq: number;
  historico: {
    energia_historico: valueHistory;
    pessoas_historico: valueHistory;
    iqa_historico: valueHistory;
    agua_historico: valueHistory;
  };
};

type Actions = {
  updateSensors: {
    newState: Omit<SensorsState, 'historico'>;
  };
  updateHistory: {
    newHistory: SensorsState['historico'];
  };
};

const sensorsState = createStore<SensorsState, Actions>('sensors', {
  state: {
    pia1: 0,
    pia2: 0,
    pia3: 0,
    pia4: 0,
    vaso1: 0,
    vaso2: 0,
    vaso3: 0,
    livre1: true,
    livre2: true,
    livre3: true,
    energia: 0,
    pessoas: 0,
    temperatura: 18,
    umidade: 10,
    iaq: 20,
    historico: {
      pessoas_historico: [
        {
          data: [2019, 4, 11],
          valor: 0,
        },
        {
          data: [2019, 4, 10],
          valor: 3564,
        },
        {
          data: [2019, 4, 9],
          valor: 0,
        },
        {
          data: [2019, 4, 8],
          valor: 6786,
        },
        {
          data: [2019, 4, 7],
          valor: 3546,
        },
        {
          data: [2019, 4, 6],
          valor: 6548,
        },
        {
          data: [2019, 4, 5],
          valor: 9875,
        },
      ],
      energia_historico: [
        {
          data: [2019, 4, 11],
          valor: 239,
        },
        {
          data: [2019, 4, 10],
          valor: 645,
        },
        {
          data: [2019, 4, 9],
          valor: 485,
        },
        {
          data: [2019, 4, 8],
          valor: 867,
        },
        {
          data: [2019, 4, 7],
          valor: 465,
        },
        {
          data: [2019, 4, 6],
          valor: 485,
        },
        {
          data: [2019, 4, 5],
          valor: 758,
        },
      ],
      agua_historico: [
        {
          data: [2019, 4, 11],
          valor: 92239,
        },
        {
          data: [2019, 4, 10],
          valor: 56645,
        },
        {
          data: [2019, 4, 9],
          valor: 54485,
        },
        {
          data: [2019, 4, 8],
          valor: 78867,
        },
        {
          data: [2019, 4, 7],
          valor: 54465,
        },
        {
          data: [2019, 4, 6],
          valor: 54485,
        },
        {
          data: [2019, 4, 5],
          valor: 87758,
        },
      ],
      iqa_historico: [
        {
          data: [2019, 4, 11],
          valor: 0,
        },
        {
          data: [2019, 4, 10],
          valor: 62,
        },
        {
          data: [2019, 4, 9],
          valor: 163,
        },
        {
          data: [2019, 4, 8],
          valor: 145,
        },
        {
          data: [2019, 4, 7],
          valor: 100,
        },
        {
          data: [2019, 4, 6],
          valor: 120,
        },
        {
          data: [2019, 4, 5],
          valor: 199,
        },
        {
          data: [2019, 4, 6],
          valor: 199,
        },
      ],
    },
  },
  reducers: {
    updateSensors: (state, payload): SensorsState => ({
      ...state,
      ...payload.newState,
    }),
    updateHistory: (state, payload): SensorsState => ({
      ...state,
      historico: payload.newHistory,
    }),
  },
});

function randomVariation(
  prop: keyof SensorsState,
  [min, max]: [number, number],
  maxDelta: number,
  [minInterval, maxInterval]: [number, number],
  callback: (newValue: number) => void = () => {},
) {
  function update() {
    const value = sensorsState.getState()[prop] as number;

    const newValue = value + Math.round((Math.random() * 2 - 1) * maxDelta);
    sensorsState.setKey(prop, clamp(newValue, min, max));
    callback(newValue);

    setTimeout(
      update,
      minInterval + Math.random() * (maxInterval - minInterval),
    );
  }

  update();
}

function alternateValues(
  prop: keyof SensorsState,
  minInterval: number,
  maxInterval: number,
) {
  function update() {
    const value = sensorsState.getState()[prop] as number;

    sensorsState.setKey(prop, !value);

    setTimeout(
      update,
      minInterval + Math.random() * (maxInterval - minInterval),
    );
  }

  update();
}

function randomIncrement(
  prop: keyof SensorsState,
  maxDelta: number,
  minInterval: number,
  maxInterval: number,
) {
  function update() {
    const value = sensorsState.getState()[prop] as number;
    sensorsState.setKey(prop, value + Math.round(Math.random() * maxDelta));

    setTimeout(
      update,
      minInterval + Math.random() * (maxInterval - minInterval),
    );
  }

  update();
}

export function fetchData() {
  const forceDev = false;

  if (__DEV__ || forceDev) {
    const sinkProps = [5, 3000, 5000] as const;
    randomIncrement('pia1', ...sinkProps);
    randomIncrement('pia2', ...sinkProps);
    randomIncrement('pia3', ...sinkProps);
    randomIncrement('pia4', ...sinkProps);

    randomIncrement('vaso1', ...sinkProps);
    randomIncrement('vaso2', ...sinkProps);
    randomIncrement('vaso3', ...sinkProps);

    alternateValues('livre1', 3000, 5000);
    alternateValues('livre2', 3000, 5000);
    alternateValues('livre3', 3000, 5000);

    randomIncrement('energia', 2, 2000, 3000);
    randomIncrement('pessoas', 2, 3000, 5000);

    randomVariation('temperatura', [9, 40], 2, [2000, 3000]);
    randomVariation('umidade', [0, 80], 2, [2000, 3000]);
    randomVariation('iaq', [0, 200], 10, [2000, 3000]);

    return;
  }

  fetch('./data.json')
    .then(
      resp =>
        resp.json() as Promise<
          Omit<SensorsState, 'historico'> & SensorsState['historico']
        >,
    )
    .then(data => {
      const currentState = sensorsState.getState();

      const {
        agua_historico,
        energia_historico,
        pessoas_historico,
        iqa_historico,
        ...sensors
      } = data;

      sensorsState.dispatch('updateSensors', {
        newState: sensors,
      });

      const history = {
        agua_historico,
        energia_historico,
        pessoas_historico,
        iqa_historico,
      };

      const historyIsDiff =
        JSON.stringify(history) !== JSON.stringify(currentState.historico);

      if (historyIsDiff) {
        sensorsState.dispatch('updateHistory', { newHistory: history });
      }

      setTimeout(fetchData, 2000);
    })
    .catch(err => {
      console.error(err);
      setTimeout(fetchData, 4000);
    });
}

export default sensorsState;

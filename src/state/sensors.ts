/* eslint-disable @typescript-eslint/camelcase */
import { createStore } from 'hookstated';
import { Omit } from 'typings/utils';
import { clamp } from 'utils/clamp';

const forceDev = true;
const forceProd = false;

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
  livre1: 0 | 1;
  livre2: 0 | 1;
  livre3: 0 | 1;
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
    newState: Omit<SensorsState, 'historico' | 'livre1' | 'livre2' | 'livre3'>;
  };
  updateHistory: {
    newHistory: SensorsState['historico'];
  };
};

const yesterday = new Date().getDate() - 1;
const currentMonth = new Date().getMonth() + 1;

const sensorsState = createStore<SensorsState, Actions>('sensors', {
  state: {
    pia1: 39,
    pia2: 46,
    pia3: 96,
    pia4: 82,
    vaso1: 124,
    vaso2: 256,
    vaso3: 268,
    livre1: 1,
    livre2: 1,
    livre3: 0,
    energia: 190,
    pessoas: 35,
    temperatura: 22,
    umidade: 60,
    iaq: 180,
    historico: {
      pessoas_historico: [
        {
          data: [2019, currentMonth, yesterday],
          valor: 0,
        },
        {
          data: [2019, currentMonth, yesterday - 1],
          valor: 3564,
        },
        {
          data: [2019, currentMonth, yesterday - 2],
          valor: 0,
        },
        {
          data: [2019, currentMonth, yesterday - 3],
          valor: 6786,
        },
        {
          data: [2019, currentMonth, yesterday - 4],
          valor: 3546,
        },
        {
          data: [2019, currentMonth, yesterday - 5],
          valor: 6548,
        },
        {
          data: [2019, currentMonth, yesterday - 6],
          valor: 9875,
        },
      ],
      energia_historico: [
        {
          data: [2019, currentMonth, yesterday],
          valor: 239,
        },
        {
          data: [2019, currentMonth, yesterday - 1],
          valor: 645,
        },
        {
          data: [2019, currentMonth, yesterday - 2],
          valor: 485,
        },
        {
          data: [2019, currentMonth, yesterday - 3],
          valor: 867,
        },
        {
          data: [2019, currentMonth, yesterday - 4],
          valor: 465,
        },
        {
          data: [2019, currentMonth, yesterday - 5],
          valor: 485,
        },
        {
          data: [2019, currentMonth, yesterday - 6],
          valor: 758,
        },
      ],
      agua_historico: [
        {
          data: [2019, currentMonth, yesterday],
          valor: 92239,
        },
        {
          data: [2019, currentMonth, yesterday - 1],
          valor: 56645,
        },
        {
          data: [2019, currentMonth, yesterday - 2],
          valor: 54485,
        },
        {
          data: [2019, currentMonth, yesterday - 3],
          valor: 78867,
        },
        {
          data: [2019, currentMonth, yesterday - 4],
          valor: 54465,
        },
        {
          data: [2019, currentMonth, yesterday - 5],
          valor: 54485,
        },
        {
          data: [2019, currentMonth, yesterday - 6],
          valor: 87758,
        },
      ],
      iqa_historico: [
        {
          data: [2019, currentMonth, yesterday],
          valor: 0,
        },
        {
          data: [2019, currentMonth, yesterday - 1],
          valor: 62,
        },
        {
          data: [2019, currentMonth, yesterday - 2],
          valor: 163,
        },
        {
          data: [2019, currentMonth, yesterday - 3],
          valor: 145,
        },
        {
          data: [2019, currentMonth, yesterday - 4],
          valor: 100,
        },
        {
          data: [2019, currentMonth, yesterday - 5],
          valor: 120,
        },
        {
          data: [2019, currentMonth, yesterday - 6],
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

    sensorsState.setKey(prop, value ? 0 : 1);

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
  if (!forceProd && (__DEV__ || forceDev)) {
    const sinkProps = [1, 10000, 15000] as const;
    randomIncrement('pia1', ...sinkProps);
    randomIncrement('pia2', ...sinkProps);
    randomIncrement('pia3', ...sinkProps);
    randomIncrement('pia4', ...sinkProps);

    const toiletProps = [55, 30000, 40000] as const;
    randomIncrement('vaso1', ...toiletProps);
    randomIncrement('vaso2', ...toiletProps);
    randomIncrement('vaso3', ...toiletProps);

    alternateValues('livre1', 5000, 8000);
    alternateValues('livre2', 5000, 8000);
    alternateValues('livre3', 5000, 8000);

    randomIncrement('energia', 1, 3000, 5000);
    randomIncrement('pessoas', 1, 4000, 6000);

    randomVariation('temperatura', [9, 40], 1, [10000, 20000]);
    randomVariation('umidade', [10, 80], 1, [10000, 20000]);
    randomVariation('iaq', [0, 200], 5, [8000, 20000]);

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
        livre1,
        livre2,
        livre3,
        ...sensors
      } = data;

      sensorsState.dispatch('updateSensors', {
        newState: {
          ...sensors,
          iaq: 200 - sensors.iaq,
        },
      });

      const history = {
        agua_historico,
        energia_historico,
        pessoas_historico,
        iqa_historico: iqa_historico.map(day => ({
          ...day,
          valor: 200 - day.valor,
        })),
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

export function fetchCabin(id: number) {
  if (!forceProd && (__DEV__ || forceDev)) return;

  fetch(`./livre${id}.json`)
    .then(resp => resp.json() as Promise<{ estaLivre: SensorsState['livre1'] }>)
    .then(data => {
      const key = (`livre${id}` as 'livre1' | 'livre2' | 'livre3');

      const currentState: SensorsState['livre1'] = sensorsState.getState()[
        key
      ];

      const { estaLivre } = data;

      if (estaLivre !== currentState) {
        sensorsState.setKey(key, estaLivre);
      }

      setTimeout(() => fetchCabin(id), 1500);
    })
    .catch(err => {
      console.error(err);
      setTimeout(() => fetchCabin(id), 3500);
    });
}

export default sensorsState;

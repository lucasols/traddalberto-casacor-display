import fs from 'fs';
import path from 'path';
import { clamp } from '../src/utils/clamp';

/* eslint-disable @typescript-eslint/camelcase */
import sensors from '../dist/data.json';

type props = keyof typeof sensors;

function randomVariation(
  prop: props,
  [min, max]: [number, number],
  maxDelta: number,
  [minInterval, maxInterval]: [number, number],
  callback: (newValue: number) => void = () => {},
) {
  function update() {
    const value = sensors[prop] as number;

    const newValue = value + Math.round((Math.random() * 2 - 1) * maxDelta);
    sensors[prop] = clamp(newValue, min, max);
    callback(sensors[prop] as number);

    setTimeout(
      update,
      minInterval + Math.random() * (maxInterval - minInterval),
    );
  }

  update();
}

function alternateValues(
  prop: props,
  minInterval: number,
  maxInterval: number,
) {
  function update() {
    const value = sensors[prop];

    sensors[prop] = !value;

    setTimeout(
      update,
      minInterval + Math.random() * (maxInterval - minInterval),
    );
  }

  update();
}

function randomIncrement(
  prop: props,
  maxDelta: number,
  minInterval: number,
  maxInterval: number,
) {
  function update() {
    const value = sensors[prop] as number;
    sensors[prop] = value + Math.round(Math.random() * maxDelta);

    setTimeout(
      update,
      minInterval + Math.random() * (maxInterval - minInterval),
    );
  }

  update();
}

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
randomVariation('iaq', [0, 200], 10, [2000, 3000], IQA => {
  sensors.iaq_class = Math.round((1 - IQA / 200) * 4 + 1);
});

let updateCount = 1;

setInterval(() => {
  fs.writeFile(
    path.join(__dirname, '../dist/data.json'),
    JSON.stringify(sensors, null, 2),
    err => {
      if (err) throw err;

      console.log(`JSON updated ${updateCount}!`);
      updateCount++;
    },
  );
}, 1000);

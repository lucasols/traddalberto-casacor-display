const fs = require('fs');
const path = require('path');

function clamp(num, min, max) {
  return num > max ? max : num < min ? min : num;
}

/* eslint-disable @typescript-eslint/camelcase */
const sensors = require('./dist/data.json');

function randomVariation(
  prop,
  [min, max],
  maxDelta,
  [minInterval, maxInterval],
  callback = () => {},
) {
  function update() {
    const value = sensors[prop];

    const newValue = value + Math.round((Math.random() * 2 - 1) * maxDelta);
    sensors[prop] = clamp(newValue, min, max);
    callback(sensors[prop]);

    setTimeout(
      update,
      minInterval + Math.random() * (maxInterval - minInterval),
    );
  }

  update();
}

function alternateValues(
  prop,
  minInterval,
  maxInterval,
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
  prop,
  maxDelta,
  minInterval,
  maxInterval,
) {
  function update() {
    const value = sensors[prop];
    sensors[prop] = value + Math.round(Math.random() * maxDelta);

    setTimeout(
      update,
      minInterval + Math.random() * (maxInterval - minInterval),
    );
  }

  update();
}

const sinkProps = [5, 3000, 5000];
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
    path.join(__dirname, './dist/data.json'),
    JSON.stringify(sensors, null, 2),
    err => {
      if (err) throw err;

      console.log(`JSON updated ${updateCount}!`);
      updateCount++;
    },
  );
}, 1000);

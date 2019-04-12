/* eslint-disable @typescript-eslint/camelcase */

function generateRandom() {

}

function createJson() {
  return {
    pia1: 18,
    pia2: 26,
    pia3: 96,
    pia4: 123,

    vaso1: 12,
    vaso2: 96,
    vaso3: 30,

    livre1: false,
    livre2: true,
    livre3: false,

    energia: 68,
    pessoas: 85,

    temperatura: 18,
    umidade: 12,
    iaq: 50,
    iaq_class: 1,
  };
}

fs.writeFile(
  path.join(__dirname, outputFile),
  JSON.stringify(icons, null, 2),
  err => {
    if (err) throw err;

    console.log('JSON svg icon set created!');
  }
);

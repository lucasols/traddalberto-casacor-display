/* eslint-disable quote-props */
/* react icon set creator v1.0.1 */

const fs = require('fs');
const path = require('path');
const clipboardy = require('clipboardy');
const SVGO = require('svgo-sync');


// TODO: merge sets

/* settings */
const inputFolder = '../resources/icons/';
const outputFile = '../src/data/icons.json';
const input = {
  water: `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0851 4.55064C13.0254 4.47606 12.9675 4.40413 12.9114 4.33499C12.3634 3.65887 12 3.25 12 3.25C12 3.25 11.6366 3.65887 11.0886 4.33499C11.031 4.40597 10.9715 4.47988 10.9101 4.55658C10.909 4.55794 10.9079 4.5593 10.9068 4.56065C10.366 5.23666 9.68309 6.12883 9 7.125C8.25002 8.21872 7.50001 9.43748 6.9375 10.6328C6.3753 11.8275 6 12.9996 6 14C6 15.5664 6.61254 17.0697 7.70498 18.1896C7.72232 18.2074 7.73978 18.2251 7.75736 18.2426C8.88258 19.3679 10.4087 20 12 20C13.5913 20 15.1174 19.3679 16.2426 18.2426C17.3679 17.1174 18 15.5913 18 14C18 12.9996 17.6247 11.8275 17.0625 10.6328C16.5 9.43748 15.75 8.21872 15 7.125C14.3169 6.12883 13.634 5.23666 13.0931 4.56065C13.0905 4.55731 13.0878 4.55397 13.0851 4.55064ZM14.7253 9.26997C14.4435 8.80986 14.1462 8.35549 13.8454 7.91674C13.5195 7.44146 13.193 6.98984 12.8826 6.57523C12.5657 6.15194 12.2656 5.76723 12 5.43531C11.7344 5.76723 11.4343 6.15194 11.1174 6.57523C10.9723 6.76906 10.8237 6.97098 10.6732 7.17963C10.5019 7.41728 10.3282 7.66366 10.1546 7.91674C9.79565 8.44024 9.44187 8.98597 9.11321 9.53715C8.77677 10.1014 8.46666 10.6713 8.20425 11.2289C8.09186 11.4677 7.99106 11.6985 7.90196 11.9204C7.56948 12.7485 7.4 13.4539 7.4 14C7.4 15.22 7.88464 16.39 8.74731 17.2527C8.85514 17.3605 8.96778 17.4625 9.08471 17.5583C9.90326 18.2289 10.9325 18.6 12 18.6C13.0675 18.6 14.0967 18.2289 14.9153 17.5583C15.0322 17.4625 15.1449 17.3605 15.2527 17.2527C16.1154 16.39 16.6 15.22 16.6 14C16.6 13.4538 16.4305 12.7482 16.0978 11.9199C16.0088 11.6981 15.9081 11.4676 15.7958 11.2289C15.5333 10.6713 15.2232 10.1014 14.8868 9.53715C14.8855 9.53498 14.8842 9.53282 14.8829 9.53065C14.8309 9.44348 14.7783 9.35657 14.7253 9.26997Z" fill="#FF6D70"/>
  </svg>
  `
};
const renames = {
  'turn-left': 'left',
  'turn-right': 'right',
};
/* settings end */

/* code start */
const icons = {};

const svgo = new SVGO({
  plugins: [{ convertShapeToPath: true }, { mergePaths: true }],
});

function isNumericStr(str) {
  return /^\d+\.\d+$/.test(str);
}

function forEachMatch(regex, string, callback) {
  let result;
  while ((result = regex.exec(string)) !== null) {
    callback(...result);
  }
}

// function ifHasProp(prop, string, callback) {
//   const match = RegExp(`${prop}="(.+)"`, 'g').exec(string);
//   if (match[1]) callback(match[1]);
// }

function convertSvg(content) {
  // get viewBox
  const viewBox = /viewBox="(.*?)"/g.exec(content)[1];
  let paths = [];
  const rects = [];
  let colors = [];
  let finalContent = content;
  let colorIndex = 1;

  // get colors
  forEachMatch(/fill="(.+?)"/g, content, (full, color) => {
    if (color !== 'none' && !colors.includes(color)) {
      finalContent = finalContent.replace(RegExp(color, 'g'), colorIndex);
      colors.push(color);
      colorIndex++;
    }
  });

  // check colors
  if (colors.length < 2) {
    colors = [];
    finalContent = finalContent.replace(/fill=".+?"/g, '');
  }

  // get paths
  forEachMatch(/<path.+?\/>/g, finalContent, (fullMatch) => {
    const elem = {};

    forEachMatch(/(\S+?)="(.+?)"/g, fullMatch, (full, prop, value) => {
      elem[prop] = isNumericStr(value) ? Number(value) : value;
    });

    paths.push(elem);
  });

  paths = paths.map(elem => Object.keys(elem).reduce((object, key) => {
    if (['fill-rule', 'clip-rule'].includes(key)) {
      object.evenodd = true;
    } else {
      object[key] = elem[key];
    }

    return object;
  }, {}));

  // get rects
  forEachMatch(/<rect.+?\/>/g, finalContent, (fullMatch) => {
    const elem = {};

    forEachMatch(/(\S+?)="(.+?)"/g, fullMatch, (full, prop, value) => {
      elem[prop] = isNumericStr(value) ? Number(value) : value;
    });

    rects.push(elem);
  });

  if (paths.length === 0 && rects.length === 0) {
    return false;
  }

  return {
    viewBox,
    ...colors.length > 0 && { colors },
    ...paths.length > 0 && { paths },
    ...rects.length > 0 && { rects },
  };
}

function addIcon(name, fileDir) {
  // const data = fs.readFileSync(fileDir, 'utf8');
  const { data } = svgo.optimizeSync(fs.readFileSync(fileDir, 'utf8'));

  const convertedSvg = convertSvg(data);

  if (!convertedSvg) {
    console.error(`ERR! svg '${name}' has invalid elements`);
  } else {
    icons[renames[name] || name] = convertedSvg;
  }
}

function addSVGFromFolder(folder, prefix = '') {
  const files = fs.readdirSync(folder);

  files.forEach((file) => {
    const fileDir = path.join(folder, file);
    const fileName = path.basename(fileDir, '.svg');

    if (fs.statSync(fileDir).isDirectory()) {
      addSVGFromFolder(fileDir, `${prefix}${fileName}-`);
    } else {
      addIcon(`${prefix}${fileName}`, fileDir);
    }
  });
}

const inputIcons = Object.keys(input);

if (!input[inputIcons[0]]) {
  addSVGFromFolder(path.join(__dirname, inputFolder));

  fs.writeFile(path.join(__dirname, outputFile), JSON.stringify(icons, null, 2), (err) => {
    if (err) throw err;

    console.log('JSON svg icon set created!');
  });
} else {
  let copyIcons = '';

  inputIcons.forEach((icon) => {
    const { data } = svgo.optimizeSync(input[icon]);
    copyIcons = `${copyIcons}"${icon}": ${JSON.stringify(convertSvg(data), null, 2)},\n`;
  });

  copyIcons = copyIcons.slice(0, -2);

  clipboardy.writeSync(copyIcons);
  process.stdout.write(`${copyIcons}\n\n Copied to clipboard!`);
}

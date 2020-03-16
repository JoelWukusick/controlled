const hexFunctions = require('./hexFunctions.js');
const fade = require('./fade.js');

module.exports = {
  'N': (array, balanced) => {
    let rowLength = Math.sqrt(array.length);
    let stepColors = fade.fade(array[0], array[array.length - 1], rowLength, balanced);
    return array.map((hex, i) => {
      return stepColors[Math.floor(i / rowLength)];
    })
  },
  'E': (array, balanced) => {
    let rowLength = Math.sqrt(array.length);
    let stepColors = fade.fade(array[0], array[array.length - 1], rowLength, balanced);
    return array.map((hex, i) => {
      return stepColors[i % rowLength];
    })
  },
  'NE': (array, balanced) => {
    let rowLength = Math.sqrt(array.length);
    let stepColors = fade.fade(array[array.length - rowLength], array[rowLength - 1], 2 * rowLength - 1, balanced);
    return array.map((hex, i) => {
      return stepColors[(i) % rowLength - Math.floor(i / 12) + rowLength - 1];
    })
  },
  'NW': (array, balanced) => {
    let rowLength = Math.sqrt(array.length);
    let stepColors = fade.fade(array[0], array[array.length - 1], 2 * rowLength - 1, balanced);
    return array.map((hex, i) => {
      return stepColors[Math.floor(i / 12) + (i) % rowLength];
    })
  },
  'X': (array, balanced) => {
    let rowLength = Math.sqrt(array.length);
    let stepColors = []
    let stepColorsFirst = fade.fade(array[0], array[array.length - rowLength], rowLength, balanced);
    let stepColorsLast = fade.fade(array[rowLength - 1], array[array.length - 1], rowLength, balanced);
    for (var i = 0; i < rowLength; i++) {
      stepColors = stepColors.concat(fade.fade(stepColorsFirst[i], stepColorsLast[i], rowLength, balanced));
    }
    return stepColors;

  },
  'O': (array, balanced) => {
    let rowLength = Math.sqrt(array.length);
    stepColors = fade.fade(array[array.length / 2 - rowLength / 2 - 1], array[0], rowLength - 1, balanced);
    return array.map((hex, i) => {
      let originVert = 6;
      let originHor = 6;
      if (i % 12 < 6) {
        originVert = 5;
      }
      if (i < array.length / 2) {
        originHor = 5;
      }
      return stepColors[Math.abs(originVert - i % 12) + Math.abs(originHor - Math.floor(i / 12))]
    })
  },
  // let stepColorsFirst = fade.fade(array[0], array[array.length - rowLength], rowLength, balanced);
  // let stepColorsLast = fade.fade(array[rowLength - 1], array[array.length - 1], rowLength, balanced);
  // for (var i = 0; i < rowLength; i++) {
  //   stepColors = stepColors.concat(fade.fade(stepColorsFirst[i], stepColorsLast[i], rowLength, balanced));
  // }

  'solid': (array, balanced) => {
    return array.map((hex, i) => {
      return array[0];
    })
  }
}
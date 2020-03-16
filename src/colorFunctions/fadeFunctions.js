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
    console.log(stepColors)
    return array.map((hex, i) => {
      return stepColors[(i) % rowLength - Math.floor(i / 12) + rowLength - 1];
    })
  },
  'NW': (array, balanced) => {
    let rowLength = Math.sqrt(array.length);
    let stepColors = fade.fade(array[0], array[array.length - 1], 2 * rowLength - 1, balanced);
    console.log(stepColors)
    return array.map((hex, i) => {
      return stepColors[ Math.floor(i / 12) + (i) % rowLength ];
    })
  },
  // 'X': (array, balanced) => {
  //   let rowLength = Math.sqrt(array.length);
  //   let stepColors = fade.fade(array[array.length - rowLength], array[rowLength - 1], 2 * rowLength - 1, balanced);
  //   console.log(stepColors)
  //   return array.map((hex, i) => {
  //     return stepColors[(i) % rowLength - Math.floor(i / 12) + rowLength - 1];
  //   })
  // },
  // 'O': (array, balanced) => {
  //   let rowLength = Math.sqrt(array.length);
  //   let stepColors = fade.fade(array[array.length - rowLength], array[rowLength - 1], 2 * rowLength - 1, balanced);
  //   console.log(stepColors)
  //   return array.map((hex, i) => {
  //     return stepColors[(i) % rowLength - Math.floor(i / 12) + rowLength - 1];
  //   })
  // },
  'solid': (array, balanced) => {
    return array.map((hex, i) => {
      return array[0];
    })
  }
}
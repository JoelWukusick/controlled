const hexFunctions = require('./hexFunctions.js');
const fade = require('./fade.js');

module.exports = function (array, balanced) {
  console.log(balanced);
  let rowLength = Math.sqrt(array.length);
  let stepColors = fade.fade(array[0], array[array.length - 1], rowLength , balanced);
  //map array colors
  return array.map((hex, i) => {
    return stepColors[Math.floor(i / rowLength)];
  })
}
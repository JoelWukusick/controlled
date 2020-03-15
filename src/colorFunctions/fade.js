const hexFunctions = require('./hexFunctions.js');

module.exports = {
  fade: (startHex, endHex, n = 12, balanced = false) => {
    let startRGB = hexFunctions.split(startHex);
    let endRGB = hexFunctions.split(endHex);
    let output = [];
    for (var i = 0; i < n; i++) {
      let fadeRGB = [0, 0, 0];
      fadeRGB = fadeRGB.map((color, index) => {
        if (balanced) {
          let step = (endRGB[index] ** 2 - startRGB[index] ** 2) / (n - 1);
          return Math.round(Math.sqrt(startRGB[index] ** 2 + i * step));
        } else {
          let step = (endRGB[index] - startRGB[index] ) / (n - 1);
          return Math.round(startRGB[index] + i * step);
        }
      })
      output.push(hexFunctions.compile(fadeRGB));
    }
    return output;
  }
}


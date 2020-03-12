const hexFunctions = require ('./hexFunctions.js');

module.exports = function (array) {
  let start = hexFunctions.split(array[0]); //split into rgb
  let end = hexFunctions.split(array[array.length - 1]) //split into rgb
  let rowLength = Math.sqrt(array.length);

  //map array colors
  return array.map((hex, i) => {
    //split color into rgb
    let rgb = [00, 00, 00]
    //each color = start + (end - start)/(arraylength - 1) * i
    rgb = rgb.map((n, rgb) => {
      let snap = Math.floor(i / rowLength) * rowLength;
      return Math.round(
        (start[rgb] + ((end[rgb] - start[rgb]) / (array.length - rowLength)) * snap)
      );
    })
    //compile color again
    return hexFunctions.compile(rgb);
  })
}
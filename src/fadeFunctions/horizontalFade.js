
let split = function (hex) {
  return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
}

let compile = function (rgb) {
  let r = rgb[0].toString(16);
  let g = rgb[1].toString(16);
  let b = rgb[2].toString(16);
  if (r.length === 1) {
    r = '0' + r;
  }
  if (g.length === 1) {
    g = '0' + g;
  }
  if (b.length === 1) {
    b = '0' + b;
  }

  return '#' + r + g + b;
}

module.exports = function (array) {
  let start = split(array[0]); //split into rgb
  let end = split(array[array.length - 1]) //split into rgb
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
    return compile(rgb);
  })
}

// let testArray = [
//   "#000000",
//   "#e3d9d2",
//   "#d7c5ba",
//   "#bd7258",
//   "#efebe5",
//   "#efebe5",
//   "#e6e1d8",
//   "#e6e1d8",
//   "#bc8774",
//   "#e2dacb",
//   "#e2dacb",
//   "#e0d5bf",
//   "#e0d5bf",
//   "#d5cebf",
//   "#bd7258",
//   "#efebe5",
//   "#efebe5",
//   "#e6e1d8",
//   "#e6e1d8",
//   "#bc8774",
//   "#e2dacb",
//   "#e2dacb",
//   "#e0d5bf",
//   "#e0d5bf",
//   "#ffffff"
// ]

module.exports = {
  split: function (hex) {
    return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
  },

  compile: function (rgb) {
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
  },
  invert: function (hex) {
    let rgb = module.exports.split(hex);
    rgb = rgb.map(color => {
      return Math.round(Math.sqrt(255 ** 2 - color ** 2))
    })
    return module.exports.compile(rgb);
  },
  rotateGrey: function (hex) {
    let rgb = module.exports.split(hex);
    let rotatedAverage = Math.round((rgb[0] + rgb[1] + rgb[2]) / 3 + 128) % 255
    rgb = [rotatedAverage, rotatedAverage, rotatedAverage];
    return module.exports.compile(rgb);
  }
}
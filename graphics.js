var c;
var ctx;



function init(widthScale = 1, heightScale = 1) {
  c = document.getElementById('c');
  ctx = c.getContext("2d");

  c.setAttribute('width', window.innerWidth * widthScale);
  c.setAttribute('height', window.innerHeight * heightScale)
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.sqrt( a*a + b*b ); // https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas
}

line = (x1, y1, x2, y2, color = '#000000') => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.closePath()
  ctx.strokeStyle = color;
  ctx.stroke();
}

function circle(x, y, r, color = '#000000', fill = false) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0 * Math.PI, 1.5 * Math.PI);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = color;
    ctx.fill();
  }
  else {
    ctx.strokeStyle = color;
    ctx.stroke();
  }
}

pixel = (a, b, color = '#000000') => {
  line(a, b, a + 1, b + 1, color)
}
function clear() {
  ctx.clearRect(0, 0, c.width, c.height)
}

square = (width, height, degrees, color = "#000000", useDegrees = false, fill = false) => {
  ctx.translate(c.width / 2, c.height / 2);

  if (useDegrees)
    ctx.rotate((degrees * Math.PI / 180) % 360);
  else
    ctx.rotate(degrees) // Use radions;
  ctx.beginPath();
  ctx.rect(width / -2, height / -2, width, height);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = color;
    ctx.fill();
  }
  else {
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function HSLToHex(h, s, l) {

  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

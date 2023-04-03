function rgb(r, g, b) {
  [r, g, b] = [r, g, b].map((el) => {
    el < 0
      ? (el = Math.max(0, el).toString(16))
      : (el = Math.min(255, el).toString(16));
    return el.length === 1 ? "0" + el : el;
  });
  return `${red}${green}${blue}`.toUpperCase();
}

//-------------Refactoring-------------
function rgb(r, g, b) {
  const rgbBound = (num) => Math.max(0, Math.min(255, num));
  const toHex = (num) => num.toString(16).padStart(2, "0");

  const red = toHex(rgbBound(r));
  const green = toHex(rgbBound(g));
  const blue = toHex(rgbBound(b));

  return `${red}${green}${blue}`.toUpperCase();
}

rgb(285, 218, 12); // 'FFDA0C'
// rgb(0, 0, 0); // '000000'
// rgb(0, 0, -20); // '000000'
// rgb(300, 255, 255); // 'FFFFFF'

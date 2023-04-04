function towerBuilder(floors) {
  const layerLen = floors * 2 - 1;
  let layer = Array(layerLen).fill(" ");
  const centerIndx = Math.floor(layerLen / 2);
  let pyramid = [];

  for (let i = 0; i < floors; i++) {
    layer[centerIndx - i] = "*";
    layer[centerIndx + i] = "*";
    pyramid.push([...layer].join(""));
  }
  return pyramid;
}

//-------------Refactoring-------------
function towerBuilder(floors) {
  const layerLen = floors * 2 - 1;
  const layer = Array(layerLen).fill(" ");
  const centerIndx = Math.floor(layerLen / 2);

  const pyramid = [...Array(floors)].map((_, i) => {
    return layer.fill("*", centerIndx - i, centerIndx + i + 1).join("");
  });
  return pyramid;
}
// towerBuilder(1); // ["*"];
// towerBuilder(2); // [" * ", "***"];
towerBuilder(3); // ["  *  ", " *** ", "*****"];
// towerBuilder(4);
// towerBuilder(5);
// towerBuilder(6);
// [
//   "     *     ", 1
//   "    ***    ", 2
//   "   *****   ", 3
//   "  *******  ", 4
//   " ********* ", 5
//   "***********"  6
// ]

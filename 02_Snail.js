snail = function (arrays) {
  let snail = [];

  while (arrays.length !== 0) {
    const firstLine = arrays.shift();
    let lastLine = arrays.pop() || [];
    let endEl = [];
    let startEl = [];

    for (let j = 0; j < arrays.length; j++) {
      endEl.push(...arrays[j].splice(-1, 1));
      startEl.push(...arrays[j].splice(0, 1));
    }
    lastLine = lastLine.reverse();
    startEl = startEl.reverse();
    snail = [...snail, ...firstLine, endEl, ...lastLine, startEl];
  }
  return snail.flat();
};

//-------------Refactoring-------------
snail = function (arrays) {
  let snail = [];

  while (arrays.length !== 0) {
    const firstLine = arrays.shift();
    let lastLine = arrays.pop() || [];
    let startEl = [];
    const endEl = [];

    for (const arr of arrays) {
      endEl.push(...arr.splice(-1, 1));
      startEl.push(...arr.splice(0, 1));
    }
    snail = [...snail, firstLine, endEl, lastLine.reverse(), startEl.reverse()];
  }
  return snail.flat();
};

snail([
  [01, 02, 03, 04, 05, 06],
  [20, 21, 22, 23, 24, 07],
  [19, 32, 33, 34, 25, 08],
  [18, 31, 36, 35, 26, 09],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
]);
[
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

// snail([
//   [01, 02, 03, 04, 05],
//   [16, 17, 18, 19, 06],
//   [15, 24, 25, 20, 07],
//   [14, 23, 22, 21, 08],
//   [13, 12, 11, 10, 09],
// ]);
// // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

// snail([
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5],
// ]);
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

// snail([[]]); // []
// snail([[1]]); // [1]

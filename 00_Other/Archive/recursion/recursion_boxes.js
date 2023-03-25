const BoxWithBoxes = [
  // [3, [3, [3]]],
  // [1, 2, 3],
  // [1, 5, 4, [1, 3]],
  [7, 3],
  [9, [0, 1]],
];
const key = 0;

const findKeyInBoxes = (boxes, key, currentBoxIndex = 0) => {
  for (let i = 0; i < boxes.length; i++) {
    const item = boxes[i];

    if (Array.isArray(item)) {
      const keyIndex = findKeyInBoxes(item, key, currentBoxIndex + i);

      if (keyIndex !== -1) {
        return keyIndex;
      }
    } else if (item === key) {
      return { currentBoxIndex: currentBoxIndex + i, key };
    }
  }
  return -1;
};

console.log(findKeyInBoxes(BoxWithBoxes, key));

//----------------------------
function factorial(n) {
  if (n === 0) {
    return 1; // базовый случай
  } else {
    const newCall = factorial(n - 1);
    return n * newCall; // рекурсивный вызов с меньшим аргументом
  }
}

console.log(factorial(2)); // выводит 2

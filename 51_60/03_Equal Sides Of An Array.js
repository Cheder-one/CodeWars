function findEvenIndex(arr) {
  arr.unshift(null);
  arr.push(null);
  for (let i = 1; i < arr.length; i++) {
    const l = arr.slice(0, i).reduce((a, b) => a + b);
    const r = arr.slice(i - 1).reduce((a, b) => a + b);
    if (l === r) {
      return i - 2;
    }
  }
  return -1;
}

//-------------Refactoring-------------

function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((a, b) => a + b);
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum;
    arr[i];
    leftSum += arr[i];
  }
  return -1;
}

// findEvenIndex([1, 2, 3, 4, 3, 2, 1]); // 3
// findEvenIndex([1, 100, 50, -51, 1, 1]); // 1
// findEvenIndex([1, 2, 3, 4, 5, 6]); // -1
// findEvenIndex([20, 10, 30, 10, 10, 15, 35]); // 3
// findEvenIndex([20, 10, -80, 10, 10, 15, 35]); // 0
// findEvenIndex([0, 0, 0, 0, 0]); // 0
findEvenIndex([10, -80, 10, 10, 15, 35, 20]); // 6

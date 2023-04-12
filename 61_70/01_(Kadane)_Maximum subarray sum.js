var maxSequence = function (arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (const el of arr) {
    currentSum += el;
    if (currentSum < 0) currentSum = 0;
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
};

//-------------Refactoring-------------
var maxSequence = function (arr) {
  let currentSum = 0;
  let maxSum = 0;

  // Замена ветвления с помощью Math.max()
  for (const el of arr) {
    currentSum = Math.max(0, currentSum + el);
    // Вернет либо 0, либо то что > 0
    maxSum = Math.max(maxSum, currentSum);
    // Вернет либо maxSum, либо то что > maxSum
  }
  return maxSum;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // should be 6: [4, -1, 2, 1]
// maxSequence([-2, -3, 4, -1, -2, 1, 5, -3]); // 7
// maxSequence([1, 2, 3, 4]); // 10
// maxSequence([-1, -2, -3, -4]); // 0
// maxSequence([3, -1, 2, -1]); // 4
// maxSequence([]); // 0;

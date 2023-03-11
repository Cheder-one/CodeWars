// class Solution {
//   mergeSortedArray(a, b) {
//     return [...a, ...b].sort((a, b) => a - b);
//   }
// }

// A = [1, 2, 3, 4];
// B = [2, 4, 5, 6];

// const res = new Solution().mergeSortedArray(A, B);
// console.log(res);

//---------------------------------------------------------

class Solution {
  twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      const mainEl = numbers[i];
      for (let j = 1; j < numbers.length; j++) {
        const el = numbers[j];
        const res = mainEl + el;
        if (res === target) {
          return [i, j].sort((a, b) => a - b);
        }
      }
    }
  }
}

numbers = [1, 7, 4, 11, 15, 2];
target = 9;

const res = new Solution().twoSum(numbers, target);
console.log(res);

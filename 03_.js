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
  twoSum(numbers, target) {}
}

numbers = [7, 2, 11, 15];
target = 9;

const res = new Solution().twoSum(numbers, target);
console.log(res);

// 1) Это найти те два числа которые дают в сумме target
// 2) Узнать и вернуть их индексы
// 3) Отсортировать индексы по возрастанию

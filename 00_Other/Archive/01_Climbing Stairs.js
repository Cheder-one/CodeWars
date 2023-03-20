var climbStairs = function (n) {
  const table = [];
  table[1] = 1;
  table[2] = 2;

  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
    table;
  }
  return table[n];
};
// Чтобы найти следующую сумму возможных вариантов комбинаций элемента, нужно сложить прошлые

// console.log(climbStairs(2));
// console.log(climbStairs(3));
console.log(climbStairs(4));
// console.log(climbStairs(5));
// console.log(climbStairs(6));

// console.assert(climbStairs(2) === 2);
// console.assert(climbStairs(3) === 3);
// console.assert(climbStairs(4) === 5);
// console.assert(climbStairs(5) === 8);
// console.assert(climbStairs(6) === 13);

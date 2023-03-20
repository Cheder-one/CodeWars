var mySqrt = function (x = 0) {
  if (x === 0) return 0;
  let approx = x / 2;

  for (let i = 0; i < 20; i++) {
    approx = 0.5 * (approx + x / approx);
  }
  return Math.floor(approx);
};

//-------------Refactoring-------------

console.log(mySqrt(0)); // Output: 0
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
console.log(mySqrt(0)); // Output: 0
console.log(mySqrt(1)); // Output: 1
console.log(mySqrt(2147395599)); // Output: 46339

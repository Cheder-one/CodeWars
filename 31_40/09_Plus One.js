var plusOne = function (digits) {
  return (BigInt(digits.join("")) + 1n).toString().split("").map(Number);
};

let digits = [1, 2, 3]; // [1,2,4]
console.log(plusOne(digits));

digits = [9, 9]; // [1,0]
console.log(plusOne(digits));

digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits)); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

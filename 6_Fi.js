// Напиши функцию фибоначчи
function fibonacci(signature, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      result.push(i);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result;
}
console.log(fibonacci([1, 2], 10)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(sign, n) {
  const res = [...sign];
  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res;
}

console.log(fibonacci([1, 2], 5)); // [1, 2, 3, 5, 8]
// console.log(fibonacci([0, 1], 8)); // [0, 1, 1, 2, 3, 5, 8, 13]

function tribonacci(sign, n) {
  const res = [...sign];
  for (let i = 3; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2] + res[i - 3];
  }
  return res.slice(0, n);
}

console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]

function Xbonacci(sign, n) {
  let res = [...sign];
  for (let i = sign.length; i < n; i++) {
    const sum = sign.map((_, j) => `res[${i - j - 1}] +`);
    res[i] = eval(sum.join(" ").slice(0, -2));
  }
  return res.slice(0, n);
}

console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10)); // [1,0,0,0,0,0,1,2,3,6]

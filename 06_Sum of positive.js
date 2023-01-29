function positiveSum(arr) {
   let positive = arr.filter(el => el > 0)
   const res = positive.reduce((acc, cur) => acc + cur, 0)
   return res
}

positiveSum([-4,9,46,-14,-40,-65,-96])

//-------------Refactoring-------------
function positiveSum(arr) {
   return arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0)
}

console.log(positiveSum([-4,9,46,-14,-40,-65,-96]));
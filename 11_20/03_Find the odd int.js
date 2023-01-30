function findOdd(arr) {
   const countNumbers = {};

   for (const el of arr) {
      !countNumbers[el]
        ? countNumbers[el] = 1
        : countNumbers[el]++
   }

   for (const el in countNumbers) {
      if (countNumbers[el] % 2 !== 0) {
         return Number(el)
      }
   }
}

console.log(findOdd([7])) // 7
console.log(findOdd([0])) // 0
console.log(findOdd([1, 1, 2])) // 2
console.log(findOdd([0, 1, 0, 1, 0])) // 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])) // 4
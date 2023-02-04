function findOutlier(int) {
   let even = [];
   for (let i = 0; i < 3; i++) {
      const el = int[i];
      if (el % 2 === 0) {
         even.push(el)
      }
   }
   if (even.length > 1) {
      return int.find(el => el % 2 !== 0)
   }
   return int.find(el => el % 2 === 0)
}

//-------------Refactoring-------------
function findOutlier(int) {
   const even = int.filter(a => a % 2 == 0);
   const odd = int.filter(a => a % 2 !== 0);
   return even.length > 1 ? odd[0] : even[0]
}

console.log(findOutlier([0, 1, 2])) // 1
console.log(findOutlier([1, 2, 3])) // 2
console.log(findOutlier([2, 6, 8, 10, 3])) // 3
console.log(findOutlier([0, 0, 3, 0, 0])) // 3
console.log(findOutlier([1, 1, 0, 1, 1])) // 0


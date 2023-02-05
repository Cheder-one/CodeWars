var uniqueInOrder = function (iterable) {
   let arr = [];
   try {
      iterable = iterable.join('')
   } catch { }

   while (iterable.length !== 0) {
      if (isNaN(iterable[0])) {
         arr.push(iterable[0]);
      } else {
         arr.push(Number(iterable[0]));
      }
      for (let j = 0; j < iterable.length; j++) {
         if (iterable[0] !== iterable[j]) {
            iterable = iterable.slice(j)
            break
         }
         let check = iterable.split('').every((el) => el === iterable[0])
         if (check) {
            iterable = []
         }
      }
   }
   return arr
}

//-------------Refactoring-------------
var uniqueInOrder = function (iterable) {
   try {
      iterable = iterable.split('');
   } catch { }

   return iterable.reduce((sum, n) => {
      if (sum[sum.length - 1] !== n) {
         sum.push(n)
      }
      return sum
   }, [])
};

//-------------Analog-------------
function uniqueInOrder(iterable) {
   var result = []
   var last

   for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] !== last) {
         result.push(last = iterable[i])
      }
   // Or
      // if (iterable[i] !== result[result.length-1]) {
      //    result.push(iterable[i])
      // }
   }
   return result
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1,2,3]

var uniqueInOrder = function (iterable) {
   try {
      iterable = iterable.join('')
   } catch { }

   let arr = []
   
   for (let i = 0; i < iterable.length; ?) {
      console.log('iterable1:', iterable);
      console.log('iterable1:', iterable[i]);
      arr.push(iterable[?]);
      for (let j = 1; j < iterable.length; j++) {
         if (iterable[?] !== iterable[j]) {
            iterable = iterable.slice(j, iterable.length - 1)
            console.log('iterable2:', iterable);
            break
         }
      }
   }
   return arr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1,2,3]

// console.log('AAAABBBCCDAABBB'.slice(0, 4));
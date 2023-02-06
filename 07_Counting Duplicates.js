function duplicateCount(text) {
   text = text.toLowerCase().split('');
   let arr = [];

   for (let i = 0; i < text.length; i++) {
      if (!arr.includes(text[i])) {
         arr.push(text[i]);
      }
   }
   return arr
}

// console.log(duplicateCount("")) // 0 
// console.log(duplicateCount("abcde")) // 0 
console.log(duplicateCount("abbcdea")) // 2 
// console.log(duplicateCount("aabBcde")) // 2 should ignore case
// console.log(duplicateCount("Indivisibility")) // 1
console.log(duplicateCount("Indivisibilities")) // 2 "characters may not be adjacent")


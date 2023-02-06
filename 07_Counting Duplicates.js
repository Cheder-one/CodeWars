https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
   text = text.toLowerCase().split('');
   let arr = [];

   for (let i = 0; i < text.length; i++) {
      let el = text[i];
      if (arr.indexOf(el) === -1) {
         arr.push(el);
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


function duplicateCount(text) {
   text = text.toLowerCase().split('');
   let uniqueChr = [], duplicateChr = [];

   for (let i = 0; i < text.length; i++) {
      if (! uniqueChr.includes(text[i])) {
          uniqueChr.push(text[i]);
      } else {
         duplicateChr.push(text[i]);
      }
   }
   return [...new Set(duplicateChr)].length
}

//-------------Refactoring-------------
function duplicateCount(text) {
   let uniqueChars = new Set();
   let duplicateChars = new Set();
   text = text.toLowerCase();

   for (let i = 0; i < text.length; i++) {
      if (uniqueChars.has(text[i])) {
         duplicateChars.add(text[i]);
      } else {
         uniqueChars.add(text[i]);
      }
   }
   return duplicateChars.size;
}


// console.log(duplicateCount("")) // 0 
// console.log(duplicateCount("abcde")) // 0 
console.log(duplicateCount("abbcdea")) // 2 
// console.log(duplicateCount("aabBcde")) // 2 should ignore case
// console.log(duplicateCount("Indivisibility")) // 1
console.log(duplicateCount("Indivisibilities")) // 2 "characters may not be adjacent")

x = new Set()
x.add(1)
x.add(2)
x.add(3)
x.size()

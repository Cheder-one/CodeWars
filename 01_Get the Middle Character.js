function getMiddle(s) {
   s = s.split('');

   if (s.length % 2 === 0) {
      while (s.length !== 2) {
         s.shift()
         s.pop()
      }
      return s.join('')
   } else {
      while (s.length !== 1) {
         s.shift()
         s.pop()
      }
      return s.join('')
   }
}

console.log(getMiddle("test")) // "es"
console.log(getMiddle("testing")) // "t"
console.log(getMiddle("middle")) // "dd"
console.log(getMiddle("A")) // "A"
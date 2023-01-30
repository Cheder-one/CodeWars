function spinWords(string){
   let words = string.split(' ');
   words = words.map((el) => {
      if (el.length >= 5) {
         return el.split('').reverse().join('')
      } else {
         return el
      }
   })
   return words.join(' ')
}

//-------------Refactoring-------------
function spinWords(string){
   let words = string.split(' ');
   words = words.map((el) => 
      el.length >= 5
        ? el.split('').reverse().join('')
        : el
   )
   return words.join(' ')
}

console.log(spinWords( "Hey fellow warriors" )) // "Hey wollef sroirraw" 
console.log(spinWords( "This is a test")) // "This is a test" 
console.log(spinWords( "This is another test" )) // "This is rehtona test"


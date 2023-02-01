var isSquare = function (n) {
   if (n < 0) {
      return false
   }
   if (n === 0 || n === 1) {
      return true
   }
   
   for (let i = 0; i < n; i++) {
      const isNumSqr = (n / i) === i
      if (isNumSqr) {
         return true
      } 
   }
   return false
}

//-------------Refactoring-------------
var isSquare = function (n) {
   // return n >= 0 && n === 1 && Math.sqrt(n) % 2 === 0
   // return n >= 0 && Math.sqrt(n) % 1 === 0;
   return Math.sqrt(n) % 1 === 0;
}


console.log(
   isSquare(-1),
   isSquare(0),
   isSquare(1),
   isSquare(4),
   isSquare(25),
   isSquare(26)
);

// Нужно узнать какое n число имеет в себе корень из одного числа 
console.log(!!Math.sqrt(-1)); // 5

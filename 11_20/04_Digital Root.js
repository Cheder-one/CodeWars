function digitalRoot(n) {
   let splitNum = String(n).split('');
   let res = splitNum.reduce((a, b) => a + b)
   
   while (splitNum.length !== 1) {
      splitNum = String(res).split('')
      for (let i = 0; i < splitNum.length; i++) {
         splitNum[i] = Number(splitNum[i])
      }
      res = splitNum.reduce((a, b) => a + b)
   }
   console.log(res);
}

//-------------Refactoring-------------
function digitalRoot(n) {
   while (n >= 10) {
      n = n.toString().split('').reduce((a, b) => a + Number(b), 0)
   }
   console.log(n);
}


digitalRoot(16) // 7 
digitalRoot(493193) //  2

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

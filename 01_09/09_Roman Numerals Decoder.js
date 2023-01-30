const romanNum = [];

function solution(roman) {
   createRomanNum()

   return romanNum.indexOf(roman)
}

function createRomanNum() {

   const search = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
   }

   const generateRomanNum = (num) => {
      let roman = '';
      for (let el in search) {
         while (num >= search[el]) {
            roman += el
            num -= search[el]
         }
      }
      return roman
   }

   for (let i = 0; i < 10000; i++) {
      romanNum.push(generateRomanNum(i))
   }
}

//-------------Refactoring-------------
function solution(roman){
   var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
   
   return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((sum, roman) => sum + conversion[roman], 0);
}


console.log(solution('XXI')) //  21
console.log(solution('I')) //  1
console.log(solution('IV')) //  4
console.log(solution('MMVIII')) //  2008
console.log(solution('MDCLXVI')) //  1666


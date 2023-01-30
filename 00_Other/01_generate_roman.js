let romanNum = [''];

function createRomanNumbers () {

  const lookup = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1
  };

  function convertToRoman(num) {
    let roman = "";
    for (let el in lookup) {
      while (num >= lookup[el]) {
        roman += el;
        num -= lookup[el];
      }
    }
    return roman;
  }

  for (let i = 1; i <= 1000; i++) {
    romanNum.push(convertToRoman(i));
  }
}
createRomanNumbers ()
console.log(romanNum);

//-------------Roman decryption-------------
function solution(roman){
  var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
  
  return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((sum, roman) => sum + conversion[roman], 0);
}

console.log(solution('XXI')) //  21
console.log(solution('I')) //  1
console.log(solution('IV')) //  4
console.log(solution('MMVIII')) //  2008
console.log(solution('MDCLXVI')) //  1666

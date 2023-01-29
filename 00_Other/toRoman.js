function calculator(num1, operator, num2) {
  let result;
  if (isRoman(num1) && isRoman(num2)) {
      num1 = toInt(num1);
      num2 = toInt(num2);
  }
  switch (operator) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          result = num1 / num2;
          break;
      default:
          throw new Error("Invalid operator");
  }
  if (isRoman(num1) || isRoman(num2)) {
      result = toRoman(result);
  }
  return result;
}

function isRoman(str) {
  let isRoman = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return isRoman.test(str);
}

function toInt(roman) {
  let romanToInt = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  };
  let int = 0;
  for (let i = 0; i < roman.length; i++) {
      if (i > 0 && romanToInt[roman[i]] > romanToInt[roman[i - 1]]) {
          int += romanToInt[roman[i]] - 2 * romanToInt[roman[i - 1]];
      } else {
          int += romanToInt[roman[i]];
      }
  }
  return int;
}

function toRoman(int) {
  let intToRoman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M"];
  return intToRoman[int];
}

console.log(calculator("MCMLIV", "+", "XLV"));
console.log(calculator("MCMLIV", "*", "XLV"));
console.log(calculator("MCMLIV", "-", "XLV"));
console.log(calculator("MCMLIV", "/", "XLV"));


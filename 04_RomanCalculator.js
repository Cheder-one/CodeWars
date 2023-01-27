function calculator(string) {
  const splittedStr = string.split(/\s+/);
  const romanNumbers = [""];

  // Проверка на наличие строго двух операндов и одного оператора
  const operator =
    splittedStr.filter((el) => regex.allowOperators.test(el));
  const arabicOperands =
    splittedStr.filter((el) => regex.allArabicNum.test(el));
  const romanOperands =
    splittedStr.filter((el) => regex.allRomanNum.test(el));

  if (operator.length !== 1) {
    console.log(operator);
    return "There can be only 1 operator";
  } 

  // if (arabicOperands.length !== 2) {
  //   console.log('arabicOperands:',arabicOperands);
  //   return "There can be only 2 Arabic operands";
  // } 
  // else if (romanOperands.length !== 2) {
  //   console.log('romanOperands:',romanOperands);
  //   return "There can be only 2 Roman operands";
  // } 

  // Проверка оператора
  if (!regex.allowOperators.test(operator)) {
    return "Invalid operator!";
  }

  // Проверка вида системы счета
  if (arabicOperands.length === 2) {
    const arabicResult = Math.floor(eval(string));
    return String(arabicResult);
  } 
  else if (romanOperands.length === 2) {
    createRomanNumbers();

    // Узнаем значение числа по индексу
    for (let i = 0; i < splittedStr.length; i++) {
      const romanValue = romanNumbers.indexOf(splittedStr[i]);
      if (romanValue > 0) {
        splittedStr[i] = romanValue;
      }
    }

    const arabicResult = Math.floor(eval(splittedStr.join("")));
    let romanResult = romanNumbers[arabicResult];

    if (arabicResult < 0) {
      romanResult = "";
      return romanResult;
    }
    return romanResult;
  }

  // Проверка диапазона чисел

  // Проверка числа на целое число

  function createRomanNumbers() {
    const lookup = {
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
      I: 1,
    };

    const generateRomanNumbers = (num) => {
      result = "";
      for (const el in lookup) {
        while (num >= lookup[el]) {
          result += el;
          num -= lookup[el];
        }
      }
      return result;
    };

    for (let i = 1; i < 1000; i++) {
      romanNumbers.push(generateRomanNumbers(i));
    }
  }
}

function regExp() {
  return {
    allRomanNum: /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,
    allArabicNum: /^-?\d+\.?\d*$/,
    allowOperators: /^[\/\*\-\+]$/,
    rangeArabic: /^([1-9]|10)$/,
    rangeRoman: /^(X|(IX|IV|V?I{0,3}))$/,
  };
}
const regex = regExp()

console.log(calculator('1 + 1')) // ('2');
console.log(calculator('10 - 1')) // ('9');
console.log(calculator('4 - 4')) // ('0');
console.log(calculator('4 - 5')) // ('-1');
console.log(calculator('10 * 10')) // ('100');
console.log(calculator('10 % 1')) // ('10');
console.log(calculator('0 / 4')) // ('0');

console.log(calculator("I + I")); // ('II');
console.log(calculator("X - I")); // ('IX');
console.log(calculator("IV - IV")); // ('');
console.log(calculator("I - X")); // ('');
console.log(calculator("X * X")); // ('C');
console.log(calculator("V * I")); // ('V');
console.log(calculator("X / I")); // ('X');
console.log(calculator("VI / II")); // ('III');
console.log(calculator("II / IV")); // ('');
console.log(calculator("V / IV")); // ('I');
console.log(calculator("V % IV")); // ('10');

// 'должен выбрасывать ошибку на некорректных данных'
calculator(""); // toThrowError();
calculator(" "); // toThrowError();
calculator("     "); // toThrowError();
calculator("4"); // toThrowError();
calculator("+"); // toThrowError();
calculator("++1"); // toThrowError();
calculator("V"); // toThrowError();
calculator("3 % 4"); // toThrowError();
calculator("1 + 1 + 1"); // toThrowError();
calculator("11 + 1"); // toThrowError();
calculator("1 + 11"); // toThrowError();
calculator("XI + I"); // toThrowError();
calculator("I + XI"); // toThrowError();
calculator("1 + V"); // toThrowError();
calculator("I + 1"); // toThrowError();
calculator("5 / 0"); // toThrowError();
calculator("0 + 1"); // toThrowError();
calculator("1 + 0"); // toThrowError();

// console.log(calculator('1 + 1')); // );('2');
// console.log(calculator('1 + 2')); // ('3');
// console.log(calculator('4 + 3')); // ('7');
// console.log(calculator('10 + 10')); // ('20');

// console.log(calculator('10 - 1')); // ('9');
// console.log(calculator('5 - 4')); // ('1');
// console.log(calculator('4 - 4')); // ('0');
// console.log(calculator('1 - 10')); // ('-9');
// console.log(calculator('4 - 5')); // ('-1');

// console.log(calculator('10 * 10')); // ('100');
// console.log(calculator('4 * 10')); // ('40');
// console.log(calculator('5 * 1')); // ('5');
// console.log(calculator('5 * 5')); // ('25');

// console.log(calculator('10 / 1')); // ('10');
// console.log(calculator('6 / 2')); // ('3');
// console.log(calculator('5 / 4')); // ('1');
// console.log(calculator('2 / 4')); // ('0');

// console.log(calculator('I + I'))  // ('II')
// console.log(calculator('I + II'))  // ('III')
// console.log(calculator('IV + III'))  // ('VII')
// console.log(calculator('X + X'))  // ('XX')
// console.log(calculator('X + IX'))  // ('XIX')

// console.log(calculator('X - I'))  // ('IX')
// console.log(calculator('V - IV'))  // ('I')
// console.log(calculator('IV - IV'))  // ('')
// console.log(calculator('I - X'))  // ('')
// console.log(calculator('IV - V'))  // ('')

// console.log(calculator('X * X'))  // ('C')
// console.log(calculator('IV * X'))  // ('XL')
// console.log(calculator('V * I'))  // ('V')
// console.log(calculator('V * V'))  // ('XXV')

// console.log(calculator('X / I'))  // ('X')
// console.log(calculator('VI / II'))  // ('III')
// console.log(calculator('V / IV'))  // ('I')
// console.log(calculator('II / IV'))  // ('')

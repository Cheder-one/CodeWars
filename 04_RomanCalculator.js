function calculator(string) {
  const rangeArabic = /^([1-9]|10)$/;
  const allowOperators = /^[\/\*\-\+]$/;
  const rangeRoman = /^(X|(IX|IV|V?I{0,3}))$/;
  string = string.trim();
  const romanNumbers = [""];
  const splittedStr = string.split(/\s+/);

  const operator = splittedStr.filter((el) => allowOperators.test(el));
  const arabicNum = splittedStr.filter((el) => rangeArabic.test(el));
  const romanNum = splittedStr.filter(
    (el) => rangeRoman.test(el) && Boolean(el.trim())
  );

  try {
    // Проверка на наличие двух операндов и их значений
    if (arabicNum.length !== 2 && romanNum.length === 0) {
      throw new Error(
        "Должно быть 2 операнда со значениями от 1 до 10"
      );
    } else if (arabicNum.length === 0 && romanNum.length !== 2) {
      throw new Error(
        "Должно быть 2 операнда со значениями от 1 до 10"
      );
    }

    // Проверка оператора
    if (!allowOperators.test(operator)) {
      throw new Error(
        "Выражение должно иметь один оператор из: |+|-|*|/|"
      );
    }

    // Проверка операндов на одинаковость систем счета
    if (arabicNum.length === 1 && romanNum.length === 1) {
      throw new Error(
        "Система счета должна быть только Римской или только Арабской"
      );
    }
  } catch (error) {
    console.log(error);
  }

  // Выбор способа вычисления согласно системе счета
  if (arabicNum.length === 2) {
    let arabicResult = Math.floor(eval(string));
    return String(arabicResult);
  } else if (romanNum.length === 2) {
    createRomanNumbers();

    // Узнаем значение числа по индексу
    for (let i = 0; i < splittedStr.length; i++) {
      const romanNum = romanNumbers.indexOf(splittedStr[i]);
      if (romanNum > 0) {
        splittedStr[i] = romanNum;
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

console.log(calculator("")); // ('2');
console.log(calculator("10 - 1")); // ('9');
console.log(calculator("4 - 4")); // ('0');
console.log(calculator("4 - 5")); // ('-1');
console.log(calculator("10 * 10")); // ('100');
console.log(calculator("10 % 1")); // ('10');
console.log(calculator("0 / 4")); // ('0');

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
console.log("1:", calculator("")); // toThrowError();
console.log("2:", calculator(" ")); // toThrowError();
console.log("3:", calculator("     ")); // toThrowError();
console.log("4:", calculator("4")); // toThrowError();
console.log("5:", calculator("+")); // toThrowError();
console.log("6:", calculator("++1")); // toThrowError();
console.log("7:", calculator("V")); // toThrowError();
console.log("8:", calculator("3 % 4")); // toThrowError();
console.log("9:", calculator("1 + 1 + 1")); // toThrowError();
console.log("10:", calculator("11 + 1")); // toThrowError();
console.log("11:", calculator("1 + 11")); // toThrowError();
console.log("12:", calculator("XI + I")); // toThrowError();
console.log("13:", calculator("I + XI")); // toThrowError();
console.log("14:", calculator("1 + V")); // toThrowError();
console.log("15:", calculator("I + 1")); // toThrowError();
console.log("16:", calculator("5 / 0")); // toThrowError();
console.log("17:", calculator("0 + 1")); // toThrowError();
console.log("18:", calculator("1 + 0")); // toThrowError();

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

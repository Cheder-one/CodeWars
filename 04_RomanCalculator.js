function calculator(string) {
  const rangeArabic = /^([1-9]|10)$/;
  const allowOperators = /^[\/\*\-\+]$/;
  const rangeRoman = /^(X|(IX|IV|V?I{0,3}))$/;
  string = string.trim();
  const romanNumbers = [""];
  const splittedStr = string.split(/\s+/);

  const operator = splittedStr.filter((el) => allowOperators.test(el));
  const arabicOperands = splittedStr.filter((el) => rangeArabic.test(el));
  const romanOperands = splittedStr.filter(
    (el) => rangeRoman.test(el) && Boolean(el.trim())
  );

  // Проверка на наличие двух операндов и их значений
  if (arabicOperands.length !== 2 && romanOperands.length === 0) {
    return "Должно быть 2 операнда с натуральными значениями от 1 до 10";
  } else if (arabicOperands.length === 0 && romanOperands.length !== 2) {
    return "Должно быть 2 операнда с натуральными значениями от 1 до 10";
  }

  // Проверка оператора
  if (!allowOperators.test(operator)) {
    return "Выражение должно иметь один оператор. Доступные операторы: |+|-|*|/|";
  }

  // Проверка операндов на одинаковость систем счета
  if (arabicOperands.length === 1 && romanOperands.length === 1) {
    return "Система счета должна быть только Римской или только Арабской";
  }

  // Выбор способа вычисления согласно системе счета
  if (arabicOperands.length > 0) {
    let arabicResult = Math.floor(eval(string));
    return String(arabicResult);
  } else if (romanOperands.length > 0) {
    createRomanNumbers();

    // Узнаем значение числа по индексу
    for (let i = 0; i < splittedStr.length; i++) {
      const romanOperands = romanNumbers.indexOf(splittedStr[i]);
      if (romanOperands > 0) {
        splittedStr[i] = romanOperands;
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

// Операнды от 1 до 10 включительно, без ноля
// Только целые числа
// Результат на выходе всегда строка с целым числом. В делении учитываем только целую часть - десятичную отбрасываем, например 2 / 4 = 0,5 - вернём 0.
// Только арабские или только римские
// 0 в римском ответе == ''

// console.log(calculator("1.4 + 1,3")); // Error только целые числа
console.log(calculator("10 - 1")); // ('9');
// console.log(calculator("4 - 4")); // ('0');
// console.log(calculator("4 - 5")); // ('-1');
// console.log(calculator("10 * 10")); // ('100');
// console.log(calculator("10 % 1")); // ('10');
// console.log(calculator("0 / 4")); // ('0');

// console.log(calculator("I + I")); // ('II');
// console.log(calculator("X - I")); // ('IX');
// console.log(calculator("IV - IV")); // ('');
// console.log(calculator("I - X")); // ('');
// console.log(calculator("X * X")); // ('C');
// console.log(calculator("V * I")); // ('V');
// console.log(calculator("X / I")); // ('X');
// console.log(calculator("VI / II")); // ('III');
// console.log(calculator("II / IV")); // ('');
// console.log(calculator("V / IV")); // ('I');
// console.log(calculator("V % IV")); // ('10');

// // 'должен выбрасывать ошибку на некорректных данных'
// console.log("1:", calculator("")); // toThrowError();
// console.log("2:", calculator(" ")); // toThrowError();
// console.log("3:", calculator("     ")); // toThrowError();
// console.log("4:", calculator("4")); // toThrowError();
// console.log("5:", calculator("+")); // toThrowError();
// console.log("6:", calculator("++1")); // toThrowError();
// console.log("7:", calculator("V")); // toThrowError();
// console.log("8:", calculator("3 % 4")); // toThrowError();
// console.log("9:", calculator("1 + 1 + 1")); // toThrowError();
// console.log("10:", calculator("11 + 1")); // toThrowError();
// console.log("11:", calculator("1 + 11")); // toThrowError();
// console.log("12:", calculator("XI + I")); // toThrowError();
// console.log("13:", calculator("I + XI")); // toThrowError();
// console.log("14:", calculator("1 + V")); // toThrowError();
// console.log("15:", calculator("I + 1")); // toThrowError();
// console.log("16:", calculator("5 / 0")); // toThrowError();
// console.log("17:", calculator("0 + 1")); // toThrowError();
// console.log("18:", calculator("1 + 0")); // toThrowError();

//--------------------------
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

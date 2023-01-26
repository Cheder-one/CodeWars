function calculator(string) {
  const splittedStr = string.split(/\s+/);
  const romanNumbers = [''];
  const romanCheck =
    /M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/;
  
  const allowedOperators = /^[\/\*\-\+]$/;
  const allNumbers = /^-?\d+\.?\d*$/
  const rangeArabic = /^([1-9]|10)$/;
  const rangeRoman = /^(X|(IX|IV|V?I{0,3}))$/;

  // Проверка на наличие строго двух операндов и одного оператора
  const operator = splittedStr.filter(el => allowedOperators.test(el))
  const operands = splittedStr.filter(el => allNumbers.test(el))

  console.log('operands:',operands);

  // Проверка валидности оператора 
  if (!allowedOperators.test(operator)) {
    return ('Invalid operator!')
  }

  // Проверка вида системы счета 
  for (let i = 0; i < splittedStr.length; i++) {
    if (allNumbers.test(splittedStr[i])) {
      
    }
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
      I: 1
    };

    const generateRomanNumbers = (num) => {
      result = '';
      for (const el in lookup) {
        while (num >= lookup[el]) {
          result += el;
          num -= lookup[el];
        }
      }
      return result
    }

    for (let i = 1; i < 1000; i++) {
      romanNumbers.push(generateRomanNumbers(i))
    }
  }
  createRomanNumbers();

  // Находим в римском массиве совпадения переданных римских чисел, тем самым узнаем значение числа по индексу
  for (let i = 0; i < splittedStr.length; i++) {
    const romanValue = romanNumbers.indexOf(splittedStr[i])
    if (romanValue > 0) {
      splittedStr[i] = romanValue;
    }
  }
  const arabicResult = Math.floor(eval(splittedStr.join('')));
  let romanResult = romanNumbers[arabicResult];


  if (arabicResult < 0) {
    romanResult = ''
    return romanResult
  }
  return romanResult
}

console.log(calculator('1 + 1')) // ('2');
console.log(calculator('10 - 1')) // ('9');
console.log(calculator('4 - 4')) // ('0');
console.log(calculator('4 - 5')) // ('-1');
console.log(calculator('10 * 10')) // ('100');
console.log(calculator('10 % 1')) // ('10');
console.log(calculator('0 / 4')) // ('0');

// console.log(calculator('I + I')) // ('II');
// console.log(calculator('X - I')) // ('IX');
// console.log(calculator('IV - IV')) // ('');
// console.log(calculator('I - X')) // ('');
// console.log(calculator('X * X')) // ('C');
// console.log(calculator('V * I')) // ('V');
// console.log(calculator('X / I')) // ('X');
// console.log(calculator('VI / II')) // ('III');
// console.log(calculator('II / IV')) // ('');
// console.log(calculator('V / IV')) // ('I');
// console.log(calculator('V % IV')) // ('10');


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


// // 'должен выбрасывать ошибку на некорректных данных'
//   calculator('') // toThrowError();
//   calculator(' ') // toThrowError();
//   calculator('     ') // toThrowError();
//   calculator('4') // toThrowError();
//   calculator('+') // toThrowError();
//   calculator('++1') // toThrowError();
//   calculator('V') // toThrowError();
//   calculator('3 % 4') // toThrowError();
//   calculator('1 + 1 + 1') // toThrowError();
//   calculator('11 + 1') // toThrowError();
//   calculator('1 + 11') // toThrowError();
//   calculator('XI + I') // toThrowError();
//   calculator('I + XI') // toThrowError();
//   calculator('1 + V') // toThrowError();
//   calculator('I + 1') // toThrowError();
//   calculator('5 / 0') // toThrowError();
//   calculator('0 + 1') // toThrowError();
//   calculator('1 + 0') // toThrowError();

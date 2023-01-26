function calculator(string) {
  const allowedOperators = ['+', '-', '*', '/'];
  const splittedStr = string.split(/\s+/);
  const romanCheck = 
    /M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/;
  const romanNumbers = [''];

  const createRomanNumbers = () => {
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

    const generateRomanNumbers = (num) => {
      result = '';
      for (const el in lookup) {
        while (num >= lookup[el]) {
          result += el;
          num -= lookup[el]
        }
      }
      return result
    }

    for (let i = 1; i < 1000; i++) {
      romanNumbers.push(generateRomanNumbers(i))
    }
  }
  createRomanNumbers()

  for (let i = 0; i < splittedStr.length; i++) {
    const romanValue = romanNumbers.indexOf(splittedStr[i])
    if (romanValue > 0) {
      splittedStr[i] = romanValue
    }
  }

  const resultOperation = Math.floor(eval(splittedStr.join('')));

  try {
    
  } catch (error) {
    
  }

  console.log(resultOperation);

}

// calculator('1 + 1') // ('2');
// calculator('10 - 1') // ('9');
// calculator('4 - 4') // ('0');
// calculator('4 - 5') // ('-1');
// calculator('10 * 10') // ('100');
// calculator('10 % 1') // ('10');
// calculator('0 / 4') // ('0');

calculator('I + I') // ('II');
calculator('X - I') // ('IX');
calculator('IV - IV') // ('');
calculator('I - X') // ('');
calculator('X * X') // ('C');
calculator('V * I') // ('V');
calculator('X / I') // ('X');
calculator('VI / II') // ('III');
calculator('V / IV') // ('I');
calculator('II / IV') // ('');


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

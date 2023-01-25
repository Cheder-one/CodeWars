function calculator(string) {
  const res = string.split(/[-+*/]/).map((el) => Number(el))

  console.log(res);
}


// 'должен работать с десятичными числами (сложение)'
  calculator('1 + 1') // ('2');
  calculator('1 + 2') // ('3');
  calculator('4 + 3') // ('7');
  calculator('10 + 10') // ('20');


// // 'должен работать с десятичными числами (вычитание)'
//   calculator('10 - 1') // ('9');
//   calculator('5 - 4') // ('1');
//   calculator('4 - 4') // ('0');
//   calculator('1 - 10') // ('-9');
//   calculator('4 - 5') // ('-1');



// // 'должен работать с десятичными числами (умножение)'
//   calculator('10 * 10') // ('100');
//   calculator('4 * 10') // ('40');
//   calculator('5 * 1') // ('5');
//   calculator('5 * 5') // ('25');



// // 'должен работать с десятичными числами (деление)'
//   calculator('10 / 1') // ('10');
//   calculator('6 / 2') // ('3');
//   calculator('5 / 4') // ('1');
//   calculator('2 / 4') // ('0');


// // 'должен работать с римскими числами (сложение)'
//   calculator('I + I') // ('II');
//   calculator('I + II') // ('III');
//   calculator('IV + III') // ('VII');
//   calculator('X + X') // ('XX');
//   calculator('X + IX') // ('XIX');


// // 'должен работать с римскими числами (вычитание)'
//   calculator('X - I') // ('IX');
//   calculator('V - IV') // ('I');
//   calculator('IV - IV') // ('');
//   calculator('I - X') // ('');
//   calculator('IV - V') // ('');


// // 'должен работать с римскими числами (умножение)'
//   calculator('X * X') // ('C');
//   calculator('IV * X') // ('XL');
//   calculator('V * I') // ('V');
//   calculator('V * V') // ('XXV');


// // 'должен работать с римскими числами (деление)'
//   calculator('X / I') // ('X');
//   calculator('VI / II') // ('III');
//   calculator('V / IV') // ('I');
//   calculator('II / IV') // ('');


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

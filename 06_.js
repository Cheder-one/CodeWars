function getPINs(observed) {
  observed = observed.split("");
  const adjacentDigits = {
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["5", "7", "8", "9", "0"],
    9: ["6", "8", "9"],
    0: ["0", "8"],
  };

  const variousDigit = observed.map((digit) => adjacentDigits[digit]);

  variousDigit;
  // 2 3 6 /2 3 8 /2 3 9
  // 2 5 6 /2 5 8 /2 5 9

  variousDigit.map((comb, i) => {
    mainComb = comb;
    otherCombs = [...new Set(variousDigit.join().split(","))];
  });

  let cartesianProduct = mainComb.flatMap((mainEl) =>
    otherCombs.map((otherEl) => mainEl + otherEl)
  );

  return cartesianProduct;
}

// console.log(getPINs("8")); // ["5","7","8","9","0"]
// console.log(getPINs("11")); // ["11","21","41","12","22","42","14","24","44"]
console.log(getPINs("36")); // ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]

function getPINs(observed) {
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

  const numberVariants = observed
    .split("")
    .map((digit) => adjacentDigits[digit]);

  function getCombinations(arrays) {
    if (arrays.length === 0) {
      return [[]];
    }

    let result = [];
    let subCombinations = getCombinations(arrays.slice(1));

    for (let i = 0; i < arrays[0].length; i++) {
      for (let j = 0; j < subCombinations.length; j++) {
        result.push([arrays[0][i], ...subCombinations[j]]);
      }
    }
    return result.map((el) => el.join(""));
  }

  return getCombinations(numberVariants);
}
// console.log(getPINs("8")); // ["5","7","8","9","0"]
// console.log(getPINs("11")); // ["11","21","41","12","22","42","14","24","44"]
console.log(getPINs("369")); // ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]

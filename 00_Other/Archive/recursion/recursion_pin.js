function getPINs(observed) {
  const adjacentDigits = {
    0: ["0", "8"],
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
  };

  [
    ["0", "8"],
    ["1", "2", "4"],
    ["2", "3", "6"],
  ];

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
    return result;
  }

  getCombinations(numberVariants);
}

// console.log(getPINs("0"));
console.log(getPINs("013"));
// console.log(getPINs("012"));
// console.log(getPINs("0123"));

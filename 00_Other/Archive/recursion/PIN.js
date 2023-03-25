function getPINs(observed) {
  const adjacent = {
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

  let result = [];

  function generatePins(pin) {
    if (pin.length === observed.length) {
      result.push(pin);
      return;
    }
    let currentDigit = observed[pin.length];

    let neighbors = adjacent[currentDigit];

    for (let neighbor of neighbors) {
      generatePins(pin + neighbor);
    }
  }

  generatePins("");

  return result;
}

console.log(getPINs("36"));
// [ '23', '25', '26', '29', '33', '35', '36', '39', '63', '65', '66', '69' ]

// console.log(getPINs("369"));
// ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]

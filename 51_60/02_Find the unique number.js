function findUniq(arr) {
  if (arr[0] === arr[1]) {
    return arr.find((el) => el !== arr[0]);
  } else if (arr[0] === arr[2]) {
    return arr.find((el) => el !== arr[0]);
  } else {
    return arr.find((el) => el !== arr[1]);
  }
}

//-------------Refactoring-------------
function findUniq(arr) {
  const [a, b, c] = arr.slice(0, 3);

  if (a !== b && a !== c) {
    return a;
  } else {
    return arr.find((el) => el !== (a === b ? b : a));
  }
}

console.log(findUniq([1, 0, 0])); // 1
console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([0, 0, 1])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([1, 1, 2, 1, 1])); // 2

//-------------OR-------------
function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

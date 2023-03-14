function duplicateEncode(word) {
  word = word.toLowerCase();
  const chars = new Map();

  for (let elem of word) {
    if (chars.has(elem)) {
      chars.set(elem, chars.get(elem) + 1);
    } else {
      chars.set(elem, 1);
    }
  }

  return word
    .split("")
    .map((el) => {
      return chars.get(el) > 1 ? ")" : "(";
    })
    .join("");
}

// duplicateEncode("Dann"); // "(())"
// duplicateEncode("recede"); // "()()()"
// duplicateEncode("Success"); // ")())())" should ignore case
console.log(duplicateEncode("(( @")); // "))(("

// const arr = [1, 2, 3, 2, 1, 3, 2, 1];
// const counts = new Map();

// counts.set(arr[1], 1);
// console.log(counts);
// console.log(counts.get(arr[1]));

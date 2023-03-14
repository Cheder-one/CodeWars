function duplicateEncode(word) {
  word = word.toLowerCase();
  const map = new Map();
  console.log(map);
}

duplicateEncode("Bin"); // "((("
// duplicateEncode("recede"); // "()()()"
// duplicateEncode("Success"); // ")())())" should ignore case
// duplicateEncode("(( @"); // "))(("

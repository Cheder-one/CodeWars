function isPangram(string) {
  const uniqStrVal = new Set(string.toLowerCase().replace(/[^a-zA-Z]/g, ""));
  return Array.from(uniqStrVal).length === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true

//-------------Or-------------
function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}
// console.log(isPangram("This is not a pangram.")); // false

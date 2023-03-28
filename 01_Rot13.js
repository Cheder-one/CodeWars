function rot13(text) {
  return text
    .split("")
    .map((char) => {
      if (Boolean(char.match(/[^a-zA-Z]/g))) {
        return char;
      }

      if (char === char.toLowerCase()) {
        const charShift = char.charCodeAt() + 13;
        if (charShift > 122) {
          const cryptAsci = charShift - 122 + 97;
          return String.fromCharCode(cryptAsci - 1);
        } else {
          return String.fromCharCode(charShift);
        }
      } else {
        const charShift = char.charCodeAt() + 13;
        if (charShift > 90) {
          const cryptAsci = charShift - 90 + 65;
          return String.fromCharCode(cryptAsci - 1);
        } else {
          return String.fromCharCode(charShift);
        }
      }
    })
    .join("");
}

//-------------Refactoring-------------
// function rot13(text) {

// }

// console.log(rot13("Test")); // "Grfg"
console.log(rot13("Ruby is cool!")); // 'Ehol vf pbby!'

"a".charCodeAt();
"z".charCodeAt();

"A".charCodeAt();
"Z".charCodeAt();

console.log('"a".charCodeAt()', "a".charCodeAt()); // 97

//-------------Refactoring-------------
// function rot13(text) {
//   return text.replace(/[a-zA-Z]/g, (char) => {
//     let charCode = char.charCodeAt(0);
//     if (charCode >= 65 && charCode <= 90) {
//       charCode = ((charCode - 65 + 13) % 26) + 65;
//     } else if (charCode >= 97 && charCode <= 122) {
//       charCode = ((charCode - 97 + 13) % 26) + 97;
//     }
//     return String.fromCharCode(charCode);
//   });
// }

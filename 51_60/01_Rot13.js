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
function rot13(text) {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const charInAsci = char.charCodeAt();
    const offset = charInAsci >= 97 ? 97 : 65;
    const crypt = ((charInAsci + 13 - offset) % 26) + offset;
    return String.fromCharCode(crypt);
  });
}

console.log(rot13("Ruby is cool!")); // 'Ehol vf pbby!'

//-------------OR-------------
function rot13(message) {
  var abc =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => abc[abc.indexOf(c) + 13]);
}

"a".charCodeAt();
"z".charCodeAt();

"A".charCodeAt();
"Z".charCodeAt();

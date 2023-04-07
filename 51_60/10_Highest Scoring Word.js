function high(str) {
  const words = str.split(" ");

  const wordWeight = words.map((word) => {
    const charAsci = word.split("").map((char) => char.charCodeAt() - 96);

    return charAsci.reduce((acc, n) => acc + n);
  });
  const heaviestWordIndex = wordWeight.indexOf(Math.max(...wordWeight));
  return words[heaviestWordIndex];
}

//-------------Refactoring-------------
function high(str) {
  const words = str.split(" ");

  const wordWeights = words.map((word) => {
    const charCodes = [...word].map((char) => char.charCodeAt() - 96);
    return charCodes.reduce((acc, n) => acc + n);
  });

  const heaviestWordIndex = wordWeights.indexOf(Math.max(...wordWeights));
  return words[heaviestWordIndex];
}

// high("man i need a taxi up to ubud"); // "taxi"
// high("climbing volcano"); // "volcano"
// high("take me to semynak"); // "semynak"
// high("aa b"); // "aa"
high("b aa"); // "b"
// high("bb d"); // "bb"
// high("d bb"); // "d"
// high("aaa b"); // "aaa"

decodeMorse = function (morseCode) {
  const morse = new Map();
  morse.set(".-", "A");
  morse.set("-...", "B");
  morse.set("-.-.", "C");
  morse.set("-..", "D");
  morse.set(".", "E");
  morse.set("..-.", "F");
  morse.set("--.", "G");
  morse.set("....", "H");
  morse.set("..", "I");
  morse.set(".---", "J");
  morse.set("-.-", "K");
  morse.set(".-..", "L");
  morse.set("--", "M");
  morse.set("-.", "N");
  morse.set("---", "O");
  morse.set(".--.", "P");
  morse.set("--.-", "Q");
  morse.set(".-.", "R");
  morse.set("...", "S");
  morse.set("-", "T");
  morse.set("..-", "U");
  morse.set("...-", "V");
  morse.set(".--", "W");
  morse.set("-..-", "X");
  morse.set("-.--", "Y");
  morse.set("--..", "Z");
  morse.set("-----", "0");
  morse.set(".----", "1");
  morse.set("..---", "2");
  morse.set("...--", "3");
  morse.set("....-", "4");
  morse.set(".....", "5");
  morse.set("-....", "6");
  morse.set("--...", "7");
  morse.set("---..", "8");
  morse.set("----.", "9");
  morse.set(".-.-.-", ".");
  morse.set("--..--", ",");
  morse.set("..--..", "?");
  morse.set("-.-.--", "!");
  morse.set("-....-", "-");
  morse.set("-..-.", "/");
  morse.set(".--.-.", "@");
  morse.set("-.--.", "(");
  morse.set("-.--.-", ")");
  morse.set("-...-", "=");
  morse.set("...---...", "SOS");
  morse.set("", " ");

  morseCode = morseCode.split("   ").map((el) => el.split(" "));
  let result = [];

  for (const word of morseCode) {
    const dcrptWord = word.map((letter) => {
      return morse.get(letter);
    });
    result = [...result, ...dcrptWord, " "];
  }
  return result.join("").trim();
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. .")); // 'HEY JUDE'

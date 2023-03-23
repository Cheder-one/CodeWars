function pigIt(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    const punctuation = str[i].match(/^[\!\,\.\?]$/);
    if (!punctuation) {
      const modWord = str[i].slice(1) + str[i].slice(0, 1) + "ay";
      str[i] = modWord;
    } else {
      str[i] = punctuation;
    }
  }
  return str.join(" ");
}

console.log(pigIt("Hello world !")); // elloHay orldway !
// console.log(pigIt("Pig latin is cool")); // 'igPay atinlay siay oolcay

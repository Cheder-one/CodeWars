const findMissingLetter = (array) => {
  const firstChar = array[0].charCodeAt();

  for (let i = 0, j = firstChar; i < array.length; i++, j++) {
    const char = array[i];
    const charCode = char.charCodeAt();

    if (charCode !== j) {
      return String.fromCharCode(charCode - 1);
    }
  }
};

findMissingLetter(["a", "b", "c", "d", "f"]); // 'e'
findMissingLetter(["O", "Q", "R", "S"]); // 'P'

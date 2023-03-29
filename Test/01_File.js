function rot13(text) {
  return text.replace(/[a-zA-Z]/g, (char) => {
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + 13) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + 13) % 26) + 97;
    }
    return String.fromCharCode(charCode);
  });
}

module.exports = rot13;

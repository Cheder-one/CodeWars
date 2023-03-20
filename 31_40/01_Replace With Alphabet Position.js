function alphabetPosition(text) {
  text = text
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((el) => {
      let ascii = el.charCodeAt(0);
      if (ascii >= 65 && ascii <= 90) {
        return ascii - 65 + 1;
      } else if (ascii >= 97 && ascii <= 122) {
        return ascii - 97 + 1;
      }
    });
  return text.join(" ").toString();
}

//-------------Refactoring-------------
function alphabetPosition(text) {
  return text
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("")
    .map((el) => {
      let ascii = el.charCodeAt(0);
      return ascii - 96;
    })
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

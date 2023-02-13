function isIsogram(str) {
   str = str.toLowerCase().split('');
   let arr = {}
   for (let item of str) {
      arr[item] = arr[item] ? arr[item] + 1 : 1;
      if (arr[item] > 1) {
         return false;
      }
   }
   return true
}

// isIsogram("Dermatoglyphics") // true
isIsogram("isogram") // true
// isIsogram("aba") // false, "same chars may not be adjacent"
isIsogram("moOse") // false, "same chars may not be same case"
// isIsogram("isIsogram") // false
// isIsogram("") // true, "an empty string is a valid isogram"

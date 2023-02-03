var longestCommonPrefix = function (strs) {
   for (let i = 0; i < strs.length; i++) {
      var prefix = '';
      for (let j = 0; j < strs[0].length; j++) {
         if (strs[0][j].includes(strs[i][j])) {
            prefix += strs[i][j]
         } else {
            strs[0] = prefix
            break
         }
      }
   }
   return prefix;
};

//-------------Refactoring-------------
var longestCommonPrefix = function (strs) {
   for (let i = 0; i < strs.length; i++) {
      for (let j = 0; j < strs[0].length; j++) {
         if (strs[0][j] !== strs[i][j]) {
            strs[0] = strs[0].slice(0, j)
         }
      }
   }
   return strs[0]
}

//-------------Refactoring-------------
// Здесь мы сравниваем не каждую букву первого слова с каждой буквой каждого слова.
// А сравниваем первую букву с первой буквой каждого слова. Тем самым, если в каком-то слове этой буквы не будет, нам не нужно ждать очереди пока дойдет проверка сначала до этого слова , а потом по этой буквы. Мы сразу все слова проверяем на валидность очереди букв.
// Получается чтобы пройтись  не по словам, а по 1й букве каждого слова, затем по 2й букве каждого слова, нужно делать внешнюю итерацию по буквам, а внутреннюю по словам.
var longestCommonPrefix = function (strs) {
   for (let j = 0; j < strs[0].length; j++) {
      for (let i = 1; i < strs.length; i++) {
         if (strs[0][j] !== strs[i][j]) {
            return strs[0].slice(0, j)
         }
      }
   }
   return strs[0]
}

console.log(longestCommonPrefix(["aaa", "aa", "aaa"])); // aа
console.log(longestCommonPrefix(["cir", "car"])); // c
console.log(longestCommonPrefix(["a"])); // a
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 'fl'
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ''


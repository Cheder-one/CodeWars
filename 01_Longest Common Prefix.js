var longestCommonPrefix = function (strs) {
   if (strs.length === 1 && strs[0].length > 0) {
      return strs[0];
   }
   if (strs.length <= 1) {
      return "";
   }
   for (const el of strs) {
      if (el.length < 1)
         return "";
   }

   let prefix = '';
   for (let i = 1; i < strs.length; i++) {
      for (let j = 0; j < strs[0].length; j++) {
        
      }
      return prefix;
   }
};

console.log(longestCommonPrefix(["aaa", "aa", "aaa"])); // aа
console.log(longestCommonPrefix(["cir", "car"])); // c
console.log(longestCommonPrefix(["a"])); // a
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 'fl'
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ''


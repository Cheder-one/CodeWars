https://leetcode.com/problems/longest-common-prefix/description/
https://leetcode.com/problems/greatest-common-divisor-of-strings/
https://www.youtube.com/watch?v=lJiEoWH_n74

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

   for (let i = 0; i < strs.length; i++) {
      for (let j = 1; j < strs[0].length; j++) {
         if (strs[0][i]) {
            
         }
      }
   }

};

console.log(longestCommonPrefix(["cir", "car"])); // c
// console.log(longestCommonPrefix(["a"])); // a
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 'fl'
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ''


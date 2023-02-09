var isValid = function (s) {
   const patterns = ['()', '[]', '{}'];

   while (s.length % 2 === 0) {
      const before = s.length
      for (const el of patterns) {
         s = s.split(el).join('');
      }
      const after = s.length;

      if (s.length === 0) {
         return true
      } else if (before === after) {
         return false
      }
   }
   return false
};

//-------------Refactoring-------------
var isValid = function (s) {
   const stack = [];
   const mapping = {
      "(": ")",
      "[": "]",
      "{": "}",
   };

   for (let i = 0; i < s.length; i++) {
      const el = s[i];
      

   }

};


// isValid("()"); // true
// isValid("()[]{}"); // true
// isValid("[()]{}"); // true
// isValid("[[()[]]]"); // true

// isValid("(]"); // false
// isValid("[{]"); // false
// isValid("([)]"); // false
// isValid("[[()[]]]({}[[][]{{}})]"); // false



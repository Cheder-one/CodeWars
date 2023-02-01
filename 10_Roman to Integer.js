var romanToInt = function (s) {
   s = s.split('')

   const lookup = {
      M:  1000,
      CM: 900,
      D:  500,
      CD: 400,
      C:  100,
      XC: 90,
      L:  50,
      XL: 40,
      X:  10,
      IX: 9,
      V:  5,
      IV: 4,
      I:  1
   }

   for (const el in lookup) {
      const elVal = lookup[el]
      
   }
};

romanToInt("III"); // 3
romanToInt("LVIII"); // 58
romanToInt("MCMXCIV"); // 1994

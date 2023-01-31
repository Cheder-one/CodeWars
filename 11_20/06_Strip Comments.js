function solution(input, markers) {
   input = input.split('\n');
   for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < markers.length; j++) {
         const idx = input[i].indexOf(markers[j])
         if (idx > -1) {
            input[i] = input[i].slice(0, idx).trim();
            break;
         }
      }
   }
   return input.join('\n')
};

const callFn = solution(" $lol # apples, \npears # and bananas\ngrapes\nbananas !apples", ["$", "#", "!"])
console.log(callFn);

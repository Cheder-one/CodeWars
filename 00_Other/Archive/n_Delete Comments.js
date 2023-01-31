function solution(input, markers) {
   let arr = input.split("\n");
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < markers.length; j++) {
         let idx = arr[i].indexOf(markers[j]);
         if (idx !== -1) {
            arr[i] = arr[i].substring(0, idx).trim();
            break;
         }
      }
   }
   return arr.join("\n");
}


const callFn = solution(" $lol # apples, \npears # and bananas\ngrapes\nbananas !apples", ["$", "#", "!"])
console.log(callFn);

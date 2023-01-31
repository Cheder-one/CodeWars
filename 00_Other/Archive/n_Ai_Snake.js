function snail(array) {
   let result = [];
   while (array.length) {
      result = result.concat(array.shift());
      for (let i = 0; i < array.length; i++) {
         result.push(array[i].pop());
      }
      result = result.concat((array.pop() || []).reverse());
      for (let i = array.length - 1; i >= 0; i--) {
         result.push(array[i].shift());
      }
   }
   return result;
}
const array = [
   [01, 02, 03, 04, 05],
   [16, 17, 18, 19, 06],
   [15, 24, 25, 20, 07],
   [14, 23, 22, 21, 08],
   [13, 12, 11, 10, 09],
];

console.log(snail(array));
function thirdLargest(arr) {
   for (let i = 0; i < arr.length; i++) {
      const maxNum = Math.max(...arr);
      const indxMaxNum = arr.indexOf(maxNum);
      arr.splice(indxMaxNum, 1);
      if (i === 2) {
         return maxNum
      }
   }
}

//-------------Refactoring with method-------------
function thirdLargest(arr) {
   arr.sort((a, b) => a - b)
   return arr[2]
 }

let input = [52, 352, 574, 346, 594];
console.log("Third largest number in array:", thirdLargest(input));

/*
Нужно найти в массиве 3е по величине число

Упрощение:
Как ты находишь 3е по величине? 
Прохожусь по всем числам и Нахожу наибольшее число
Нахожу второе наибольшее сравнивая его со всеми остальными
Так же нахожу 3е
То есть я всегда нахожу наибольшее среди оставшихся. И так 3 раза!

И как вывести 3е наибольшее? 
Вырезать первые 2 найденных наибольших числа 
А 3е наибольшее вернуть в результат 
*/

let x = [52, 352, 574, 346, 594]

let m = Math.max(...x)
const inx = x.indexOf(m)
x.splice(inx, 1)
x
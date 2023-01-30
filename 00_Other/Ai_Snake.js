const arr = [   
   [1, 2, 3, 4, 5],
   [16, 17, 18, 19, 6],
   [15, 24, 25, 20, 7],
   [14, 23, 22, 21, 8],
   [13, 12, 11, 10, 9],
];

const result = [];

// Определяем верхний левый и нижний правый углы матрицы
let top = 0;
let bottom = arr.length - 1;
let left = 0;
let right = arr[0].length - 1;

// Цикл будет выполняться, пока углы не сойдутся
while (top <= bottom && left <= right) {
   // Идем вправо
   for (let i = left; i <= right; i++) {
      result.push(arr[top][i]);
   }
   top++;

   // Идем вниз
   for (let i = top; i <= bottom; i++) {
      result.push(arr[i][right]);
   }
   right--;

   // Если не дошли до нижнего края, идем влево
   if (top <= bottom) {
      for (let i = right; i >= left; i--) {
         result.push(arr[bottom][i]);
      }
      bottom--;
   }

   // Если не дошли до левого края, идем вверх
   if (left <= right) {
      for (let i = bottom; i >= top; i--) {
         result.push(arr[i][left]);
      }
      left++;
   }
}

console.log(result);

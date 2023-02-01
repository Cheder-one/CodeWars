var twoSum = function (n, target) {
   for (let i = 0; i < n.length; i++) {
      for (let j = i+1; j < n.length; j++) {
         if (target === n[i] + n[j]) {
            return [i, j]
         }
      }
   }
};

//-------------Refactoring-------------
const twoSum = (nums, target) => {
   const map = {};
   for (let i = 0; i < nums.length; i++) {
      const el = nums[i]
      const complement = target - el;
      if (map[complement] !== undefined) {
         return [map[complement], i];
      }
      map[el] = i;
   }
};



console.log(
   twoSum([2, 7, 11, 15], 9), // [0,1]
   twoSum([3, 2, 4], 6), // [1,2]
   twoSum([3, 3], 6), // [0,1]
   twoSum([2, 5, 5, 11], 10) // [1,2]
);

// Нужно вернуть индекс чисел образующих сумму числа `target`
// Мы сразу отбрасываем числа в массиве которые > числа `target`
// Чтобы найти подходящую сумму необходимо складывать элементы
// n1 + n2,3,4... ; n2 + n3,4...
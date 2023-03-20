function moveZeros(arr) {
  return [...arr.filter((el) => el !== 0), ...arr.filter((el) => el === 0)];
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]

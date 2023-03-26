function order(words) {
  let correctOrder = [];
  words = words.split(" ");
  const wordQueueNum = words.map((el) => el.replace(/[^\d+]/g, "") - 1);

  for (let i = 0; i < wordQueueNum.length; i++) {
    const queue = wordQueueNum[i];
    correctOrder[queue] = words[i];
  }
  return correctOrder.join(" ");
}
//-------------Refactoring-------------
function order(words) {
  let correctOrder = [];

  words.split(" ").map((el, i) => {
    const queue = el.replace(/[^\d+]/g, "") - 1;
    correctOrder[queue] = el;
  });
  return correctOrder.join(" ");
}
//-------------Refactoring-------------
// const order = (words) => {
//   let correctOrder = [];
//   words.split(" ").forEach((word) => {
//     const queue = word.replace(/[^\d+]/g, "") - 1;
//     correctOrder[queue] = word;
//   });
//   return correctOrder.join(" ");
// };

console.log(order("is2 Thi1s T4est 3a"));
// "Thi1s is2 3a T4est");

// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
// // ("Fo1r the2 g3ood 4of th5e pe6ople");

// console.log(order(""));
// // "", "empty input should return empty string");

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

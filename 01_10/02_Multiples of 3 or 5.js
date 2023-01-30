// function solution(num){
//   const multiples = [3, 5]
//   return Array.from({length: num - 1}, (_, i) => i + 1)
//     .filter(num => multiples.some(multiple => num % multiple === 0))
//     .reduce((previous, current) => previous + current, 0)
// }

console.log(solution(3));
console.log(solution(10));
console.log(solution(17));
console.log(solution(23));

//------------Another solution--------------
// Это более правильный и быстрый код

function solution(number){
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  if (number < 0) {
    return 0
  }
  return sum
}

console.log(solution(3));
console.log(solution(10));
console.log(solution(17));
console.log(solution(23));

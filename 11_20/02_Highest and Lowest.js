function highAndLow(num) {
   num = num.split(' ')
   return `${Math.max(...num)} ${Math.min(...num)}`
}

console.log(
   '|1|:',highAndLow("1 2 3 4 5"), // return "5 1"
   '|2|:',highAndLow("1 2 -3 4 5"), // return "5 -3"
   '|3|:',highAndLow("1 9 3 4 -5") // return "9 -5"
);


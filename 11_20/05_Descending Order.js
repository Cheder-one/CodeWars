function descendingOrder(n) {
   n = n.toString().split('').sort((a, b) => b - a)
   return Number(n.join(''))
}

console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321

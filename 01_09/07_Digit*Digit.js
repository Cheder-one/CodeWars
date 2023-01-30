function squareDigits(num) {
   const res = String(num).split('')
      .map((el) => el**2).join('')
   return Number(res)
}

console.log(
   squareDigits(9119),
   squareDigits(765)
);

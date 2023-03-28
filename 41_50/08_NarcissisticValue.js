function narcissistic(value) {
  const valueInStr = value.toString();
  const power = valueInStr.length;
  return (
    value === valueInStr.split("").reduce((acc, cur) => acc + cur ** power, 0)
  );
}

console.log(narcissistic(153)); // true
// console.log(narcissistic(1652)); // false
// console.log(narcissistic(7)); // true

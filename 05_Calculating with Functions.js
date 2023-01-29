function zero(operator) {
  const zero = 0;
  try {
    const result = `${zero} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return zero
  }
}
function one(operator) {
  const one = 1;
  try {
    const result = `${one} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return one
  }
}
function two(operator) {
  const two = 2;
  try {
    const result = `${two} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return two
  }
}
function three(operator) {
  const three = 3;
  try {
    const result = `${three} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return three
  }
}
function four(operator) {
  const four = 4;
  try {
    const result = `${four} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return four
  }
}
function five(operator) {
  const five = 5;
  try {
    const result = `${five} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return five
  }
}
function six(operator) {
  const six = 6;
  try {
    const result = `${six} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return six
  }
}
function seven(operator) {
  const seven = 7;
  try {
    const result = `${seven} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return seven
  }
}
function eight(operator) {
  const eight = 8;
  try {
    const result = `${eight} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return eight
  }
}
function nine(operator) {
  const nine = 9;
  try {
    const result = `${nine} ${operator}`
    return Math.floor(eval(result))
  } catch {
    return nine
  }
}

function plus(operand) {
  const plus = '+';
  return `${plus} ${operand}`
}
function minus(operand) {
  const minus = '-';
  return `${minus} ${operand}`
}
function times(operand) {
  const times = '*';
  return `${times} ${operand}`
}
function dividedBy(operand) {
  const dividedBy = '/';
  return `${dividedBy} ${operand}`
}
console.log(
 'r1:', zero(plus(three())),
 'r2:', zero(minus(seven())),
);

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3


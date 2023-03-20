function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let x = 0;
  let y = 0;

  for (const el of walk) {
    switch (el) {
      case "n":
        x++;
        break;
      case "s":
        x--;
        break;
      case "w":
        y++;
        break;
      case "e":
        y--;
        break;
    }
  }
  return x === 0 && y === 0;
}

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // 'should return true');

// console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])); // 'should return true');

// console.log(isValidWalk(["w"])); // 'should return false');

console.log(isValidWalk(["n", "n", "n", "n", "s", "s", "s", "s", "w", "w"])); // 'should return false');

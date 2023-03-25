let n = 5;

for (let i = 1; i <= n; i++) {
  console.log(i);
}
//----------------------------
function printNumbers(n) {
  if (n <= 0) {
    return;
  }
  printNumbers(n - 1);
  console.log(n);
}

printNumbers(5); // 1 2 3 4 5
//---------------------------------------------------------

n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    console.log(i + j);
  }
}
//----------------------------
function print(n, i = 1, j = 1) {
  if (i > n) {
    return;
  }
  if (j > n) {
    print(n, i + 1, 1);
    return;
  }
  console.log(i + j);
  print(n, i, j + 1);
}

print(5); // 1 2 3 4 5 ... 5x5 таблица умножения
//---------------------------------------------------------

let m = 5;
let p = 5;
n = 5;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let z = 0; z < p; z++) {
      console.log(i, j, z);
    }
  }
}
//----------------------------
function recurse(i, j, z, n, m, p) {
  console.log(i, j, z);
  if (z < p - 1) {
    recurse(i, j, z + 1, n, m, p);
  } else if (j < m - 1) {
    recurse(i, j + 1, 0, n, m, p);
  } else if (i < n - 1) {
    recurse(i + 1, 0, 0, n, m, p);
  }
}

recurse(0, 0, 0, 5, 5, 5);

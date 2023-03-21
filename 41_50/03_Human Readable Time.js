function humanReadable(ss) {
  const hh = Math.floor(ss / 3600);
  const mm = Math.floor((ss - hh * 3600) / 60);
  ss = Math.floor(ss - mm * 60);
  return `${hh}:${mm}:${ss}`;
}

//-------------Refactoring-------------
function humanReadable(ss) {
  const hh = Math.floor(ss / 3600)
    .toString()
    .padStart(2, "0");
  const mm = Math.floor((ss % 3600) / 60)
    .toString()
    .padStart(2, "0");
  // (ss % 3600) == (ss - hh * 3600)
  ss = Math.floor(ss % 60)
    .toString()
    .padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

// console.log(humanReadable(0)); // "00:00:00"
// console.log(humanReadable(59)); // "00:00:59"
// console.log(humanReadable(60)); // "00:01:00"
// console.log(humanReadable(90)); // "00:01:30"
// console.log(humanReadable(3599)); // "00:59:59"
// console.log(humanReadable(3600)); // "01:00:00"
console.log(humanReadable(45296)); // "12:34:56"
// console.log(humanReadable(86399)); // "23:59:59"
// console.log(humanReadable(86400)); // "24:00:00"
// console.log(humanReadable(359999)); // "99:59:59"

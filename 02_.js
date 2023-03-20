function humanReadable(sec) {}

console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(3600));

// console.assert(humanReadable(0) == "00:00:00", "humanReadable(0)");
// console.assert(humanReadable(59) == "00:00:59", "humanReadable(59)");
// console.assert(humanReadable(60) == "00:01:00", "humanReadable(60)");
// console.assert(humanReadable(90) == "00:01:30", "humanReadable(90)");
// console.assert(humanReadable(3599) == "00:59:59", "humanReadable(3599)");
// console.assert(humanReadable(3600) == "01:00:00", "humanReadable(3600)");
// console.assert(humanReadable(45296) == "12:34:56", "humanReadable(45296)");
// console.assert(humanReadable(86399) == "23:59:59", "humanReadable(86399)");
// console.assert(humanReadable(86400) == "24:00:00", "humanReadable(86400)");
// console.assert(humanReadable(359999) == "99:59:59", "humanReadable(359999)");

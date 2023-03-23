function formatDuration(sec) {
  if (sec === 0) return "now";

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  let partsOfTime = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const time = Math.floor(sec / interval.seconds);

    if (time > 0) {
      partsOfTime.push(
        time === 1 ? `${time} ${interval.label}` : `${time} ${interval.label}s`
      );

      sec -= time * interval.seconds;
    }
  }

  if (partsOfTime.length > 1) {
    const lastPart = partsOfTime.pop();
    return partsOfTime.splice(0).join(", ") + " and " + lastPart;
  } else {
    return partsOfTime.join("");
  }
}

// console.log(formatDuration(0)); // "now"
// console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
// console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(90062)); // "1 day, 1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(31626062)); // "1 year, 1 day, 1 hour, 1 minute and 2 seconds"
// console.log(formatDuration(63183006)); // "2 years, 3 days, 4 hours, 5 minutes and 6 seconds"
// console.log(formatDuration(31626061)); // "1 year, 1 day, 1 hour, 1 minute, and 1 second"

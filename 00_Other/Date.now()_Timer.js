const words = ["JS", "borderlands", "JS", "borderlands"];
const delay = [0].concat(words.map((el) => el.length * 300));

function setTimer(callback, t) {
  const startTime = Date.now();
  while ("go!") {
    const endTime = Date.now();
    if (endTime - startTime === t) {
      return callback;
    }
  }
}

// for (let i = 0; i < words.length; i++) {
//   let el = words[i];
//   console.log(setTimer(el, delay[i]));
// }

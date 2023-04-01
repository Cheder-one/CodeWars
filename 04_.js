function solution(str) {
  const strLen = str.split("").length;
  if (strLen === 0) return [];

  const isEval = strLen % 2 === 0;
  if (!isEval) str += "_";
  let splittedStr = str.split("");

  for (let i = 2; i < splittedStr.length; i += 2) {
    splittedStr[i] = "|" + splittedStr[i];
  }
  return splittedStr.join("").split("|");
}

//-------------Refactoring-------------
function solution(str) {
  if (str.length % 2 !== 0) str += "_";
  let res = [];
  for (let i = 2; i <= str.length; i += 2) {
    res.push(str[i - 2] + str[i - 1]);
  }
  return res;
}

//-------------OR-------------
function solution(str) {
  return str.length === 0
    ? []
    : (str.length % 2 ? str + "_" : str).match(/../g);
}

solution("abcdefg"); // ["ab", "cd", "ef", "g_"];
// solution("abcdef"); // ["ab", "cd", "ef"];
// solution(""); // [];

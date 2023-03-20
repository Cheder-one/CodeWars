var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

let haystack = "sadbutsad";
let needle = "sad";
// 0 "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.
console.log(strStr(haystack, needle));

(haystack = "leetcode"), (needle = "leeto"); // -1 "leeto" did not occur in "leetcode", so we return -1.
console.log(strStr(haystack, needle));

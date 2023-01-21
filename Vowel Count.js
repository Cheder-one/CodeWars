function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u' ]
  let strVowels = [];

  for (let i = 0; i < str.length; i++) {
    vowels.forEach(vowel => {
      if (str[i] === vowel) {
        strVowels.push(str[i]) 
      }
    });
  }
  return strVowels.length
}

//-------------Refactoring-------------
function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u' ]
  return str.split('').filter(letters => vowels.includes(letters)).length
}
console.log(getCount("abracadabra"));

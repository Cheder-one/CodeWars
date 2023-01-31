function accumulate(ltr) {
   let arr = []
   for (let i = 0; i < ltr.length; i++) {
      arr.push(ltr[i].toUpperCase())
      for (let j = 0; j < i; j++) {
         arr[i] += ltr[i].toLowerCase()
      }
   }
   console.log(arr.join('-'));
}

accumulate("abcd") // "A-Bb-Ccc-Dddd"
accumulate("RqaEzty") // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accumulate("cwAt") // "C-Ww-Aaa-Tttt"

// Нужно каждый элемент превратить в UpperCase()
// В зависимости от индекса элемента, такое кол-во раз продублировать маленькую букву
// Поместить составленные слова в массив. 
// Соединить слова через .join('-')

//-------------Refactoring-------------
function accumulate(ltr) {
   ltr = ltr.split('')
   return ltr.map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i)).join('-');
}

console.log(accumulate("abcd"));
console.log(accumulate("RqaEzty"));
console.log(accumulate("cwAt"));
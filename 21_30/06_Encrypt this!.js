const encryptThis = function (text) {
   text = text.split(' ');
   for (let i = 0; i < text.length; i++) {
      const el = text[i]
      const start = el[0].charCodeAt(0);
      const center = el.slice(2, el.length-1)
      const end = el[el.length-1]
      if (el.length >= 3) {
         text[i] = start + end + center + el[1]
      } else if (el.length === 2) {
         text[i] = start + end
      } else {
         text[i] = start
      }
   } 
   return text.join(' ')
}

// ("A  wise   old   owl   lived   in   an  oak")
// "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"

console.log(encryptThis("A wise old owl lived in an oak")) 
// "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"

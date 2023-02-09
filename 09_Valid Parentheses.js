var isValid = function (s) {
   const memory = [];
   const mapping = { 
      "(": ")", 
      "[": "]",
      "{": "}", 
   };

   for (let i = 0; i < s.length; i++) {
      const el = s[i];
      for (const open in mapping) {
         const close = mapping[open];

         // 1) Найти по open скобке, как выглядит close скобка 
         const openBracket = open.includes(el)
         if (openBracket) {
            close 
            // Узнали как выглядит закрывающая скобка. Что дальше?

         // 2) Нужно найти индексы open & close скобок и вырезать их
         
         
         }

      }
   }

};

isValid("()"); // true
// isValid("()[]{}"); // true
// isValid("[()]{}"); // true
// isValid("[[()[]]]"); // true


// isValid("(]"); // false
// isValid("[{]"); // false
// isValid("([)]"); // false

// "[[()[]]]({}[[][]{{}})]";

/*
"[[()[]]]";


*/

let x = "[[()[]]]({}[[][]{{}})]"
x = x.split('()').join('').split('[]').join('').split('{}').join('')
x

while (x.length > 0) {
   // x.split('()').join('').split('[]').join('').split('{}').join('')
   
}

// let x = "[[()[]]]({}[[][]{{}})]";
// x = x.split('').splice(0, 1)

/*
Открытые скобки должны быть закрыты скобками того же типа. 
Открытые скобки должны быть закрыты в правильном порядке. 
Каждой закрывающей скобке соответствует открытая скобка того же типа. 

Как я понимаю что данный пример верен или не верен?
Я смотрю на первую скобку 
Ищу для нее закрывающую 
А как отличить ее закрывающую от не ее?
Если не было никаких открывающих скобок после моей, тогда первая закрывающая скобка такого же типа моя.

Мы взяли первую скобку, она должна быть открывающей.
Идем по массиву дальше, сверяем каждый элемент со значением ключа
Но что если следующим элементом идет не закрывающая, а другая открывающая?
Тогда берем ее ключ и начинаем искать ее значение.
Окей, предположим мы нашли пару для внутренней скобки по ее ключу.
Но дальше идут закрывающие скобки. И я то понимаю что эти скобки вероятнее всего относятся к прошлым открывающим, но алгоритм этого не помнит. Он реализовал последний актуальный ключ, новый не поступал. 
И что делать?
Значит он должен держать в памяти прошлые открытые скобки и закрывать их список с конца 
Как это сделать?


Допустим пока этого хватит 
И с помощью каких методов и подходов можно это реализовать?

Допустим мы взяли первую скобку. 
   Как мы это сделали?
   Взяли arr[i=0]
Начали искать ее закрывающую пару
   Как понять какая пара ее и как она выглядит?
   Взятый элемент arr[0] мы передаем в созданный заранее объект с ключами в виде открывающихся скобок и их значениями в виде закрывающихся.
   Когда мы передаем в объект ключ arr[0], мы получаем данные о том какой элемент искать для закрытия.
   Начинаем поиск полученного значения 
   Как мы его должны искать? 
   Допустим с помощью метода indexOf
   Допустим мы нашли значение и получили его индекс. Что дальше?
   Переходим к следующей открывающей скобке после нашего исследованного элемента 
   А что делать с той найденной закрывающей скобкой? 
   Лучше ее вырезать, как и ее отрывающую. Как по-другому игнорировать уже проверенные я пока не знаю.


При поиске ее пары мы должны искать закрывающую скобку ее типа. 
Если нам встречается открывающая скобка ее типа, то мы должны пропустить следующую найденную закрывающую скобку ее типа, тк это относится к внутренней скобки, а не к нашей внешней.


*/

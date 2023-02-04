function likes(names) {
   const people = names.length;
   if (people === 0) {
      return "no one likes this";
   } else if (people === 1) {
      return `${names} likes this`;
   } else if (people === 2) {
      return `${names[0]} and ${names[1]} like this`;
   } else if (people === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
   } else if (people >= 4) {
      return `${names[0]}, ${names[1]} and ${people - 2} others like this`;
   }
}

console.log(likes([])) // "no one likes this"
console.log(likes(["Peter"])) // "Peter likes this"
console.log(likes(["Jacob", "Alex"])) // "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])) // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])) // "Alex, Jacob and 2 others like this"

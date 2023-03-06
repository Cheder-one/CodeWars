const users = {
   fetchAll() {
      console.log('Fetching all users');
   }
};

const api = {
   users
};
/*
   То есть, Объект API на самом деле имеет следующую структуру для вызова: 
   1) API - сам главный объект обращения
   2) Объект users - объект вложенный в API 
   3) А объект users, в свою очередь, имеет в себе функцию fetchAll(). 

   То есть users имеет структуру: 
   users: { 
      fetchAll: [Function: fetchAll] 
   }

   Итого, при обращении к Объекту API, мы видим его вложенности как:

   API {
      users: {
         fetchAll: [Function: fetchAll]
      }
   }
*/

// console.log(api);

//----------------------------
// Define the users data as an array of objects
const usersData = [
   { id: 1, name: 'John' },
   { id: 2, name: 'Jane' },
   { id: 3, name: 'Bob' }
];

// Create a function that returns the users data
function fetchAll() {
   return usersData;
}

// Create the API object
const API = {
   users: {
      fetchAll: fetchAll
   }
};

// Access the users data using the API object
console.log(API.users);
// Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }]


// Write a function that accepts an 
// array of ages and returns 
// an array of ages greater than 18.

function checkAdults(users){
 return users.filter(item => item.age >= 18);
}

let usersList = [
    {id: 1, name: "Вася", age: 18},
    {id: 2, name: "Петя", age: 14},
    {id: 3, name: "Маша", age: 45},
    {id: 4, name: "Вася", age: 6},
    {id: 5, name: "Петя", age: 11},
    {id: 6, name: "Маша", age: 21},
  ];

   let filterArray = checkAdults(usersList);
   alert(filterArray.length);
   console.log(filterArray);
 
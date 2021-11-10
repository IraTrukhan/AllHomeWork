// return a secuence which include the developer who is the oldest
function searchDeveloperByAge(listDeveloper, age){
    return listDeveloper.filter(item => item.age === age);
}

function searchOldestAge(listDeveloper){
    let userMax = listDeveloper.reduce(function searchMaxAge(prev, current) {
    return (+current.age < +prev.age) ? prev : current;
    });
    return userMax.age;
}

let developerList = [
    {firstName: 'Gabriel', lastName: "X.", country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP'},
    {firstName: 'Andrew', lastName: "F.", country: 'Great Britain', continent: 'Europe', age: 36, language: 'Python'},
    {firstName: 'Blay', lastName: "G.", country: 'Australia', continent: 'Australia', age: 49, language: 'PHP'},
    {firstName: 'Haruki', lastName: "T.", country: 'Japan', continent: 'Asia', age: 39, language: 'Java'},
    {firstName: 'Diego', lastName: "H.", country: 'Argentina', continent: 'South America', age: 41, language: 'C++'},
  ];

  let listOldestDeveloper = searchDeveloperByAge(developerList, searchOldestAge(developerList));
  console.log(listOldestDeveloper);
function makeClass(...args){
    let newClass = {};
    for(let arg of args){
        newClass[arg] = arg;
    }
    return newClass;
}
const Animal = makeClass("name","species","age","health","weight","color");
console.log(Animal);
console.log(typeof (Animal));
//let rabbit = new Animal("Black","Rabbit", 3, 22, 8,"color");
  
  
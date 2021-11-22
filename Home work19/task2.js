function makeClass(...args){
    let count = 0;
    return class newClass {        
        constructor(...parameters){
            for(let arg of args){
                this[arg] = parameters[count];
                count ++;
            }
        count = 0;
        }
    }
}
const Animal = makeClass("name","species","age","health","weight","color");
let rabbit = new Animal("black","rabbit", 3, 22, 8,"color");

const Car = makeClass("marka","model","year", "color");
let car1 = new Car('Volswagen', 'Passat', '2012', 'black');
let rabbit1 = new Animal("white","rabbit", 12, 25, 7,"color");
console.log(rabbit);
console.log(rabbit1);
console.log(car1);
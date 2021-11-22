class Human {
    constructor(name) {
        this.name = name;
    }
    creation(Adam, Eve) {
        return [Adam, Eve];
    }
}
  
class Man extends Human {
    constructor(name) {
        super(name);
    }
}
  
class Woman extends Human {
    constructor(name) {
        super(name);
    }
}
const human = new Human('Proband');
const adam = new Man('Adam');
const eve = new Woman('Eve');
console.log(adam);
console.log(human.creation(adam, eve));






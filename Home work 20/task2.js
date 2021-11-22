class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get volume() {
        return this.length * this.width * this.height;
    }
    get surfaceArea() {
        return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
    }
}

class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}

let cuboid1 = new Cuboid(12, 15, 5);
console.log(cuboid1.volume);
let cube1 = new Cube(4);
console.log(cube1.volume);
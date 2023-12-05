interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Square implements Shape {
    sideLength: number;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }

    calculateArea(): number {
        return this.sideLength ** 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.calculateArea()); // Output: ~78.54

const mySquare = new Square(4);
console.log(mySquare.calculateArea()); // Output: 16

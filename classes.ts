class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Some generic sound";
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Woof! Woof!";
    }

    bark(): void {
        console.log("Barking...");
    }
}

const myDog = new Dog("Buddy");
console.log(myDog.name); // Output: Buddy
console.log(myDog.makeSound()); // Output: Woof! Woof!
myDog.bark(); // Output: Barking...

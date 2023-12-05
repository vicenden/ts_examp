interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "Hello, TypeScript!" };

function getValue<T>(box: Box<T>): T {
    return box.value;
}

console.log(getValue(numberBox)); // Output: 42
console.log(getValue(stringBox)); // Output: Hello, TypeScript!

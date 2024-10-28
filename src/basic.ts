

//Variable Declaration 
const a:number = 23;
const firstName:string = "Shakib";
const latstName:string = "Ali";



// Array declaration
let scores: number[] = [90, 85, 88];
let friend: [string, number] = ["Alice", 30];


// ---- Object---

//Inline Object Literal

const userName = {
    name: "Alice",
    age: 30,
    isEmployed: true
  };
  


// basic function 
function sayHello(name: string): string {
    return `Hello, ${name}`;
}

let message = sayHello("Alice");

// Basic Function with Parameters
function add(x: number, y: number): number {
    return x + y;
}

const result = add(5, 10);
console.log(result); // Output: 15

//Function with Optional Parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || 'Hello'}, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Good morning")); // Output: Good morning, Bob!

// Function with Default Parameters
function multiply(x: number, y: number = 1): number {
    return x * y;
}

console.log(multiply(5)); // Output: 5 (5 * 1)
console.log(multiply(5, 2)); // Output: 10

// Function with REST Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50

/*
Summary
--> Basic Parameters: Define types for each parameter.
--> Optional Parameters: Use ? to make parameters optional.
--> Default Parameters: Assign default values to parameters.
--> Rest Parameters: Use ... to accept multiple arguments as an array.
 
*/

//Interfaces
interface Person {
    name: string;
    age: number;
}

let user: Person = {
    name: "Bob",
    age: 25
};


// Class for typescript
class Animal {
    constructor(public name: string) {}
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog("Rex");
dog.speak(); // Rex barks.

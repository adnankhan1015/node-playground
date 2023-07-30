const { capitalizeWords, makeMoney } = require("./utils");
const Person = require("./Person");

console.log(capitalizeWords("hello world")); // Hello World
console.log(makeMoney(100)); // $100

const person1 = new Person("Shery", 22);
person1.greet(); // Hello, my name is John and I am 30

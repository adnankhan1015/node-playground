import { capitalizeWords, makeMoney } from "./modules/utils.js";
import Person from "./modules/Person.js";

const person = new Person("Mark", 29);
person.greet();

console.log(capitalizeWords("hello world"));
console.log(makeMoney(100));

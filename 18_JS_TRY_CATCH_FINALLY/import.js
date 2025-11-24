import { add, sub } from './export.js';
// add(10,6); in function use console.log not return
// sub(15,4);
console.log(add(14,7));
console.log(sub(12,2));

//default export
import walk from "./default.js";
walk();

//we use class
import { Student } from './export.js';
const st1 = new Student("vaishali" , 9773);
console.log("Student Details :",st1);

//export filed renamed
import { add as sum } from "./export.js";
console.log(sum(5,3));


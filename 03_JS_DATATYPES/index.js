// there are 8 data types in js
// 1.string
// 2.bigint
// 3.number
// 4.boolean
// 5.object
// 6.null
// 7.undefined
// 8.symbol

// Data Type     Description                                          Example
// String        Textual data.                                        'hello', "hello world!", etc.
// Number        An integer or a floating-point number.               3, 3.234, 3e-2, etc.
// BigInt        An integer with arbitrary precision.                 900719925124740999n, 1n, etc.
// Boolean       Any of two values: true or false.                    true, false
// Undefined     A variable that has not been initialized.            let a;
// Null          Represents a null value.                             let a = null;
// Symbol        Unique and immutable identifiers.                    let value = Symbol('hello');
// Object        A collection of key-value pairs.                     let student = { name: "John" };
// 📌 Primitive  Types: Stored in stack, immutable, passed by value.

// 📌 Non-Primitive  Types: Stored in heap, mutable, passed by reference.
// it is pass by value so num1 and num2 not change only copy value

const num1 = 25;
 num2 = num1;

 num2 = "***";

console.log(num1);
console.log(num2);

let num3 = 30;
 let num4 = num3;

console.log(num3);
console.log(num4);
// in class name is change in p1 and p2 both it is a pass by reference 

const p1 = {
    name : "borderland",
};
  const p2 = p1;
  console.log(p1);
console.log(p2);
p2.name = "alice";
console.log("name 1 :", p1);
console.log("name 2 :", p2);


// data type janva mate 

console.log("type of num1",typeof num1);
console.log("type of null",typeof null);
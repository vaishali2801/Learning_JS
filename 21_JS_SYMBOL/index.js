//symbol
//A Symbol is a primitive data type in JavaScript introduced in ES6 (ECMAScript 2015).
//It is used to create unique and immutable identifiers, mainly to avoid naming conflicts in objects.
const msg1 = Symbol("good morning");
const msg2 = Symbol("good morning");

console.log(msg1 === msg2);

const res1 = "hello";
const res2 = "hello";

console.log(res1 === res2);
// as you can see both values are similar but due to symbol it's not same due to that op will return false

//in object
let userId = Symbol("id");

let user = {
    name: "Vaishali",
    [userId]: 101,
    //userid: 111
};

console.log(user.name);      // Vaishali
console.log(user[userId]);   // 101
console.log(user);

//Template literals are a new way in ES6 to create strings easily.
//They use backticks (``) instead of quotes and allow:
const greet = (name) => {
    console.log(`hello my name is ${name}`);
}
greet("john");

const A = 6;
const B = 12;
console.log(`the sum of ${A} and ${B} is ${A + B}`);

const nested = (name, age) => {
    return `my name is ${name} and my age is ${age}.
    ${age >= 18 ? "i am able for voting" : "i am not able for voting"}`;

}
console.log(nested("alice", 17));
console.log(nested("bob", 22));

// tagged templates literals
// Tagged templates are an advanced form of template literals in JavaScript. They allow you to parse template literals with a function.
// Furthermore, you don't need to use parentheses () when passing the template literal to the function. For example,
const play = (game) => {
    console.log(`I am playing ${game}`);
};
play`GTA-5`;

console.log(`this is line 1
            this is line 2
            this is line 3
            this is line 4`);
//Using Template Literals – When We Press Enter, the Text Goes to the Next Line

console.log("this is line 1",
            "this is line 2",
            "this is line 3")
//but here is not possible
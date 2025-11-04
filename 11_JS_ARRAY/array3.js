// splice method
let array = [1, 2, 3, 4, 5, 6, 7, 8];
// array.splice(4,0,10,11)
console.log(array);

array.splice(3, 2, 12, 13);
console.log(array);

// This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.
//convert array to string 
const fruits = [
    "cherry", "apple", "banana", "orange", "strawberry", " mango"
]
console.log(fruits.join(" "));

const numArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
];
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

console.log("flattened number Array =>", numArray.flat());

let number = [1, 3, [7, 8, [3, 2, 4, [9, [10]]]]];
console.log(number.flat());
console.log(number.flat(2));
console.log(number.flat(Infinity));
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments

const fruits1 = [
    "apple",
    "banana",
    "cherry",
    "mango",
    "guava",
    "watermelon",
    "pineapple",
];
console.log(fruits1.slice(2, 5));
// The some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.

let ageValues = [5, 10, 12, 15, 18, 20];
let result = ageValues.some((age) => {
    return age > 18;
})
console.log("result", result);

let ageValues2 = [5, 10, 12, 15, 18];
let result2 = ageValues2.some((age) => {
    return age > 18;
})
console.log("result", result2);
// The reverse() method is used to reverse the order of elements in an array. It modifies the array in place and returns a reference to the same array with the reversed order.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("reverse array : " + num.reverse());

// The values() method returns a new Array Iterator object that contains the values for each index in the array.

const numIterators = num.values();

for (let value of numIterators) {
    console.log("value", value);
}
//indexof() -This method is used to find the index of a particular element in an array.
const movie = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Goodfellas",
    "Schindler's List"
]

console.log(movie.indexOf("the god")); // if not match give -1
console.log(movie.indexOf("Goodfellas")); // if match give index position 

// includes - This method is used to check whether the array contains the specified element or not.

let car = [
    "Toyota",
    "Honda",
    "Ford",
    "BMW",
    "Mercedes-Benz",
    "Tesla",
]

console.log("available in array ", car.includes("Toyota")); // true
console.log("not available in array ", car.includes("tata")); // false

// sort() - This method sorts the elements of an array in alphabetical order in ascending order.
let alpha = ["a", "b", "v", "w", 'u', 'c'];

console.log("alphabet sort ", alpha.sort());

// now what if we want to sort number data types values

console.log("number sort " + num.sort())// default sort is ascending order
console.log("descending order ", num.sort((a, b) => b - a));

// find & findIndex - This method finds out the first value which passes the
//  user-specified conditions and findIndex() method finds out the first index value which passes the user-specified conditions.
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = num.find((values) => values > 7);
console.log("find method ", result);
let result2 = num.find((values) => values > 9);
console.log("find method2 ", result2);

// slice() selects the specified number of elements without affecting the original array elements whereas
console.log("slice method ", car.slice(3, 5));

//  splice() removes the selected elements from the original array itself.
// splice() can add or remove element in array
car.splice(2, 0, "maruti");
console.log("splice method ", car);

// every()- method will check every element in array if every element satisfies the condition then try otherwise false
// all condition are true then print true if one condition is false then print false
num = [2, 3, 4, 78, 9, 6, 45, 64, 5, 5, 5];

console.log(
    "checking every elements that num greater than 5 is available :",
    num.every((values) => values > 5)
);
// will return true if every element satisfies the condition
console.log(
    "check number every number  is greater than 1 or not ?",
    num.every((values) => values > 1)
);

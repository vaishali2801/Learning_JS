//reduce mathod
//The reduce() method executes a callback function on each element of an array, resulting in a single output value.
//array.reduce(callbackFunction, initialValue)
let number = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log("sum", sum);

let sumAll = number.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0)
console.log("sum ", sumAll);

let marks = [56, 87, 36, 98, 74, 83];

let highMark = marks.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);

console.log("higher mark is : ", highMark);

const shoppingList = [
    {
        name: "Apples",
        price: 1500,
        quantity: 3,
    },
    {
        name: "Bananas",
        price: 750,
        quantity: 6,
    },
    {
        name: "Tomatoes",
        price: 2250,
        quantity: 4,
    },
    {
        name: "Oranges",
        price: 1800,
        quantity: 5,
    },
    {
        name: "Grapes",
        price: 2500,
        quantity: 2,
    },
    {
        name: "Mangoes",
        price: 2000,
        quantity: 3,
    },
    {
        name: "Pineapple",
        price: 2700,
        quantity: 1,
    },
    {
        name: "Strawberries",
        price: 3670,
        quantity: 2,
    },
];
let bill = shoppingList.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
}, 0);
console.log("total bill :", bill);


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(count);

const personDetails2 = [
    { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
    {
        name: "Emily Davis",
        age: 45,
        city: "Los Angeles",
        profession: "Graphic Designer",
    },
    { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
    { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
    { name: "rose", age: 25, city: "Houston", profession: "Teacher" },
    { name: "john", age: 25, city: "us", profession: "engineer" },
    {
        name: "David Martinez",
        age: 38,
        city: "San Francisco",
        profession: "Developer",
    },
];

let similarAge = personDetails2.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log("age ", similarAge);

const personAge = personDetails2.reduce((acc, curr)=> {
    if (curr.age > 40) {
        acc.push(curr.name);
    }

    return acc;
},[]);

console.log("personAge name which age is greater than 40: ", personAge);
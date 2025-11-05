//The filter() method is used to create a new array that contains only the elements which pass a certain condition
//filter() checks each item in an array and keeps only those that match your condition.

//HOF-A Higher-Order Function (HOF) is a function that takes another function as an argument or returns a function as its result.
//map(), filter(), and forEach() are all higher-order functions because they take another function (callback) as a parameter.
const number = [2,4,6,8,10,12,14,16,18,20];
console.log("value ",number);

const number1 = number.filter((num)=>num%3 === 0);
console.log("number1 ",number1);

const Information = [
    { RollNo: 76895, branch: "IT", BOD: "28/2/2007" },
    { RollNo: 45363, branch: "Civil", BOD: "20/1/2005"},
    { RollNo: 92977, branch: "CE", BOD:"19/9/2006" },
]

let info = Information.filter((person)=>person.RollNo > 50000)
console.log("Above 50000 roll no ",info);

//we use both method filter and map - chaining
let info2 = Information.filter((person)=>person.RollNo>50000).map((person)=>person.branch);
console.log("branch ",info2);

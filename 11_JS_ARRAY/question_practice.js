//1.Create an array of numbers and use map() to add 10 to each number.

let number = [1,2,3,4,5,6,7,8,9,10];

let addAll = number.map((sum) => {
    return sum + 10;
})
console.log("Add 10 :" ,addAll);

//2.Use map() to convert each string to uppercase from an array like ["red", "white", "blue"].

let color = ["red" , "white" , "black" ,"blue"];

let upperAll = color.map((color)=>color.toUpperCase());
console.log("in uppercase: ",upperAll);

//3.Given an array [2, 4, 6, 8], use map() to find the square of each number.

let array = [2,4,6,8];
let square = array.map((num)=>num*num);
console.log("square :",square);

//4.You have an array of objects:
const students = [
    { name: "Vaishali", marks: 85 },
    { name: "Krishna", marks: 92 },
    { name: "bhoomi", marks: 78 },
];
//Use map() to create a new array of only student names.
let nameAll = students.map((person)=>person.name);
console.log("names all :",nameAll);

//5.Use map() to create an array of marks increased by 5 for all students.
let marks = [87,56,38,76,77,46];
let totalMark = marks.map((mark)=>{
    return mark + 5;
})
console.log("Total mark is: ",totalMark);

// filter questions
//1.From an array [10, 25, 30, 45, 60], use filter() to get numbers greater than 30.
const Array = [10,25,30,45,60];
let greaterNum = Array.filter((num)=> num>30);
console.log("greater than 30 value is :",greaterNum);

//2.From ["apple", "banana", "grapes", "kiwi"], use filter() to keep only words longer than 5 letters.
const fruits = ["apple","banana","grapes","kiwi"];

let bigName = fruits.filter((ch)=>ch.length>5);
console.log("longer name :",bigName);

//3.You have:
const ages = [12, 18, 20, 25, 30, 15];
//Use filter() to get only adults (age ≥ 18).
let adults = ages.filter((age)=>age>=18);
console.log("adults :",adults);

//4.Using the same students array:
const Students = [
    { name: "Vaishali", marks: 85 },
    { name: "Krisha", marks: 92 },
    { name: "Meet", marks: 78 },
];
//Use filter() to get students who scored more than 80 marks.
let higherScore = students.filter((score)=>score.marks >80);
console.log("more than 80 marks name :",higherScore);
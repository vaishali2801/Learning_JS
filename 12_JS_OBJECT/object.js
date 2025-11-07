//object literals
//An object in JavaScript is a collection of key–value pairs.
//It allows us to store multiple related pieces of data together in a structured way.
//Each key (also called a property name) represents some information, and each value can be anything — a string, number, array, or even another object.
const studentDetails = {
    name: "vaishali",
    age: 18,
    id: 9035,
    number: 8763647287,
}
console.log(typeof studentDetails);
//  Accessing specific property from the object
console.log(studentDetails.number);
//  Printing the whole object
console.log(studentDetails);

// creating object using object constructor
const Measurement = new Object();

// Adding properties to the object
Measurement.length = 500;
Measurement.width = 200;
Measurement.height = 100;

// Displaying the object
console.log(Measurement);

//using bracket
// 👉 Accessing object properties using bracket notation
console.log(studentDetails["id"]);
// 👉 Modifying existing property
studentDetails.age = "28";
// 👉 Adding a new property
studentDetails.department = "IT";
// Displaying updated object
console.log(studentDetails);

//destructing -extracting properties into variables

const { id } = studentDetails;
console.log(id);
// 👉 Renaming destructured variable    
const { name: names } = studentDetails;
console.log(names);

// now defining object using function constructor

function details(id, name, age, course) {
    (this.id = id), (this.name = name), (this.age = age), (this.course = course);

}
const student = new details(
    9377,
    "bhoomi",
    19,
    "backend development"
);
console.log(student);
// Creating new object instances using the constructor function
const student2 = new details(8558, "krishna", 19, "frontend development");
console.log(student2.course);
// adding properties to object we use prototype
details.prototype.email = "vaishali94@gmail.com";
// Accessing object property
console.log(student.name)

// The destructuring assignment introduced in ES6 makes it easy to assign array
//values and object properties to distinct variables. For example,
//Destructuring is an ES6 feature that allows you to extract values from
//arrays or objects and store them in variables quickly and cleanly.
//object
let student = {
    name: "vaishali",
    age:18,
    course:"IT"
}
console.log(student);
console.log(student.name)
console.log(student.age)
console.log(student.course);

const {name,age,course} = student;
console.log(name);
console.log(age);
console.log(course);

//array
let colors = ["red", "blue", "green"];

let first = colors[0];
let second = colors[1];
let third = colors[2];

console.log("without",first, second, third);

let colors2 = ["red", "blue", "green"];

let [first1, second1, third1] = colors;

console.log("destructing",first1, second1, third1);
// renaming
const {course:crs} = student
console.log("course :",crs)

//default value 
let user = { username: "Vaishali" };
let { username, age: userAge = 18 } = user;
console.log(username, userAge);


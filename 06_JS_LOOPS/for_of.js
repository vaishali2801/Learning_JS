
// JavaScript for…of statement iterates over the values of an iterable object (like Array, Map, Set, arguments object, …,etc), executing statements for each value of the object.

// JavaScript for…of loop makes it easy to loop through the elements without needing to handle the index or iteration logic which makes the code short and easier to understand.

let array = [10,20,30,40,50,60];

for(let x of array){
    console.log(x);
}

let str1 = "hello";

for(let i of str1){
    console.log("str :" + i);
}
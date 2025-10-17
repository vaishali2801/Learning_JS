
let text = "GOOD MORNING MISS";

console.log("simple text " + text);

// charAt() method  ==> returns the character at specified index(position) counting from zero. start 0 index

console.log("using charAt " + text.charAt(7));

// concat() method ==> returns two or more joint strings or merge string

console.log("using concat " + text.concat(" VAISHALI"));

// endsWith() method ==> returns true if the string ends with a specified value

console.log("using endsWith " + text.endsWith("S"));
console.log("using endsWith " + text.endsWith("s")); // false

// includes() method ==> returns true if the string contains a specified value

console.log("using includes " + text.includes("@")); // ex : we use in form for enter email
console.log("using includes " + text.includes("MISS")); // we use both string and character 
console.log("using includes " + text.includes("M"));

// indexOf() method ==> returns the index(position) of the first occurrence of a value in string

console.log("using indexOf " +text.indexOf("O"));
console.log("using indexOf " +text.indexOf("MISS"));
console.log("using indexOf " +text.indexOf("S"));
console.log("using indexOf " +text.indexOf("v"));

// lastIndexOf() method ==> returns the last occurrence of a value in string

console.log("using lastIndexOf " + text.lastIndexOf("S"));
console.log("using lastIndexOf " + text.lastIndexOf("V"));
console.log("using lastIndexOf " + text.lastIndexOf("z"));

// length returns the length of the string

console.log("using length " + text.length);
// there methods of string in js
// 1.match() method ==> searches a string for a value, or a regular expression, and returns the matches 
// 2.repeat() method ==> returns new string with a number of copies of strings
// 3.replace()  method ==> searches a string for a pattern and return a new string where First match are replace
// 4.replaceAll() method ==> searches a string for a pattern and returns a new string where all matches are replaced
// 5.search() method ==> searches a string for a value, or regular expression, and returns  the index(position) 
// 6.slice() method ==> extracts a part of a string and returns a new string
// 7.split() methods ==> Splits a string into an array of substrings
// 8.startsWith() methods ==> startswith method whether a string begins with specified characters
// 9.The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
// 10.toupperCase() ==> Returns a string converted to uppercase letters
// 11.tolowerCase() ==> toLowerCase()	Returns a string converted to lowercase letters
// 12.trim() Returns a string with removed whitespace

let greet = "HELLO GOOD AFTERNOON";

// 1.match()
console.log(greet.match("oo"));
console.log(greet.match("OO"));

//2.repeat()
console.log("2.repeat " + greet.repeat(4));

//3.replace()
console.log("3.replace " + greet.replace("GOOD" , "good"));
console.log("3.replace " + greet.replace("hello" ,"hoo"));

//4.replaceAll()
console.log("4.replaceAll " + greet.replaceAll("L" , "l"));
console.log("4.replaceAll " + greet.replaceAll("O" , "o"));

//5.search()
console.log("5.search " + greet.search("L"));
console.log("5.indexof " + greet.indexOf("L"));
console.log("5.indexof " + greet.indexOf("z"));
console.log("5.search " + greet.search("z"));
console.log("5.indexof " + greet.indexOf("N" , 17));

//6.slice() 
console.log("6.slice " + greet.slice(3));
console.log("6.slice " + greet.slice(9));
console.log("6.slice " + greet.slice(5,18));
console.log("6.slice " + greet.slice(-1)); // last character print

//7.split()
console.log("7.split " + greet.split(" "));
console.log("7.split " + greet.split(""));
console.log("7.split " + greet.split("O"));

//8.startWith() == boolean 
console.log("8.startWith " + greet.startsWith("H"));
console.log("8.startWith " + greet.startsWith("Z"));

//9.substring()
// The substring() method extracts characters from start to end (exclusive).
// The substring() method does not change the original string.
// If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
// Start or end values less than 0, are treated as 0
console.log("9.substring " + greet.substring(3));
console.log("9.substring " + greet.substring(3,9));
console.log("9.substring " + greet.substring(18,7));
console.log("9.substring " + greet.substring(-1)); // print all

//10.toUppercase()
console.log("10.toUppercase " + greet.toUpperCase());
let text = "ABCDEFGHIJK";

//11.toLowercase()
console.log("11.toLowercase " + text.toLowerCase());

//12.trim()
let trimEx = "                   abcdefghi                    ";
console.log("12.trim " + trimEx.length); //all count
console.log("12.trim " + trimEx.trim().length);// only text count
console.log("12.trim with start " + trimEx.trimStart().length); // starting part remove
console.log("12.trim with end " + trimEx.trimEnd().length); // last part remove


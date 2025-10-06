 //programming, type conversion is the process of converting data of one type to another. For example, converting string data to a number

 // There are two types of type conversion in JavaScript:

// Implicit Conversion - Automatic type conversion.
// Explicit Conversion - Manual type conversion.

// this is implicit conversion  
let n = "5"
let m = 10 
console.log("add" , n+m) // when we add a string and number in js ,it converts the number to string and concatenate them

let v = "hello"
let w = "false"

console.log("sub" , v - w) // when we subtract a string and boolean in js ,it converts both to number and then perform the operation
console.log("sub" , n - m) // when we subtract a string and number in js ,it converts the string to number and then perform the operation

// this is explicit conversion

let stringnum = "777"
console.log("string to number", Number(stringnum)) // converts string to number - 777

let decimalnum = 234.34
console.log(parseInt(decimalnum)) // converts decimal to integer - 234
console.log(parseFloat(decimalnum)) // converts to float - 234.34

console.log(typeof(decimalnum)) // number
console.log(typeof(stringnum)) // string


// Conversion            Method         Example                 Output
// String to Number      Number()       Number("42")            42
// String to Integer     parseInt()     parseInt("42.5")        42
// String to Float       parseFloat()   parseFloat("42.5")      42.5
// Number to String      String()       String(123)             "123"
// Boolean to Number     Number()       Number(true)            1
// Number to Boolean     Boolean()      Boolean(0)              false
// String to Boolean     Boolean()      Boolean("Hello")        true
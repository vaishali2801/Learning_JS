
// for/in loop: There is another advanced loop called for/in loop which runs through all the properties of an object. The loop will be executed once for each property of the object. The for/in loop can also be used over the properties of arrays. However, it is not advised to use for/in loop over arrays.  for/of and Array.forEach() loops are suggested to be used while working with arrays.

let object = {
    name : "charlie",
    age : 23,
    city : "new york"

}
let value1 = "";

for(value1 in object){
    console.log(object[value1]);

}
// for in loop use only for objects we can not use for arrays 
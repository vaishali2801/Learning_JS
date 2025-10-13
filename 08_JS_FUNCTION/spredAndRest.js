// Spread and Rest are shorthand syntax for working with array elements in JS.

// this is spread operator
// The spread operator is used to expand or spread elements of an array or object.
let array1 = [1,2,3,4,5]

let array2 = [...array1,6,7,8,9]

console.log(array2);

function AllVegetable(vegetable1){
    console.log(vegetable1);
}

let vegetables = ["potatoes","cucumber","cabbage","carrot","broccoli"]
AllVegetable(vegetables);

// Rest Operator
// The rest parameter (...) allows a function to treat a variable number of arguments as an array:

// function totalItems(a, b, c, d) {
//   console.log("total items", a, b, c, d);
// }

// totalItems("one", "two", "three", "four");

function Drama(...drama){
    console.log("you can watch :",...drama);
}
Drama(
    "dr.slump\n",
    "unforgettable love\n",
    "hidden love\n",
    "only for you\n",
    "queen of tears\n",
    "my demon\n",
    "business proposal\n",
    "crash landing on you\n"
)
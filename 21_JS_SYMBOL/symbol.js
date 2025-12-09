//Hidden - Symbol properties don’t show in loops
//Safe Keys - Prevents object key conflicts
//accessing symbol
const num = Symbol(777);
//print
console.log(num);
//access value
console.log(num.description);
//type of
console.log(typeof num); //symbol

//object and loop
const model = Symbol("model")
const ProductList = {
    price:50000,
    [model]:"M2"
}
console.log(ProductList);
// We cannot directly access Symbol keys using normal loops like:
// for...in
// Object.keys()
// Object.values()
// JSON.stringify()
// But Symbol properties can still be accessed using special methods like:
// Object.getOwnPropertySymbols()
// Reflect.ownKeys()
for(let key in ProductList){
    console.log([key],ProductList[key]);
}

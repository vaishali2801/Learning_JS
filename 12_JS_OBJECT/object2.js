// remove property from an object 
const clothes = {
    item: 3,
    price: 3000,
    total: 5,
}
console.log(clothes);
delete clothes.total;
console.log("shopping list", clothes);

//hasOwnProperty

const ItemAvailable = clothes.hasOwnProperty("price");
console.log("item is available ", ItemAvailable);
const notAvailable = clothes.hasOwnProperty("quantity");
console.log("not available ", notAvailable);
const shoppingList = {
    name: "grocery",
    total: 5000,
    items: 10,
};
for (let key in shoppingList) {
    console.log("access clothes list ", shoppingList[key]);
}

let country = ["India" , "UK" , "US" , "Nepal" , "Israel"];

for(let i = 0;i < country.length ; i++){
    console.log(country[i]);
}
//for of
for(let i of country){
    console.log(i);
}

let number = [1,3,3,5,5,6,78,9]

number.forEach((num)=>{
    const result = num*2;
    console.log(result);
})
// Conversion of an Array to String
console.log("converting an Array to String" + number.toString());




function recursion(num){
    if(num<0){
        return "not negative value";
    }else if(num === 0 || num === 1){
        return 1;
    }else{
        return num * recursion(num - 1);
    }
}
const factorial = recursion(6);
console.log(factorial)
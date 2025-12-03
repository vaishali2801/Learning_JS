const cart = ["pen", "pencil", "eraser", "scale"];
//this is producing code
//createCart promise is object
const createCart = new Promise((resolve, reject) => {
    if (cart.length > 0) {
        const Id = 8463;
        setTimeout(() => {
            resolve(Id);
        }, 3000);
    } else {
        reject("cart is empty");
    }
})
const paymentStatus = (Id) => {
    return new Promise((resolve, reject) => {
        let balance = 3000;
        if (Id && balance > 0) {
            setTimeout(() => {
                resolve("payment initiated successfully")
            }, 2000);
        } else {
            reject("insufficient balance")
        }
    })
}
const balanceDeducted = () =>{
    return new Promise((resolve,reject) =>{
        let deducted = true;
        if(deducted){
            setInterval(()=>{
                resolve("deducted successfully");
            },4000)
        }else{
            reject("failed....!");
        }
    })
}
const packOrder = () => {
    return new Promise((resolve) => {
        setTimeout(()=> resolve("order packed...!"),2500);
    }) 
}
const DeliveryOrder = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=> resolve("delivered successfully...!"),1500);
    })
}
// this is consuming code 
createCart.then((Id) => {
    console.log("id :", Id);
    return paymentStatus(Id);
})
.then((status) => {
    console.log("status :");
    return balanceDeducted();
})
.then((msg) => {
    console.log(msg);
    return packOrder();
})
.then((msg) =>{
    console.log(msg);
    return DeliveryOrder();
})
.then((message)=>{
    console.log(message);
    console.log("successfully completed");    
})
.catch((err) => {
    console.log(err);
})//error handling
//here we use .then this is attach not passing 
//so code is not grow like horizontally 
//and readable also 
//when we take multiple promise we return this
//if we can not return this output is undefined
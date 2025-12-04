
const getData = new Promise((resolve,reject)=>{
    resolve("async function.....!");
})

async function greet(){
    return getData
};

const call = greet();
console.log(call)

call.then((res)=>{
    console.log(res);
})
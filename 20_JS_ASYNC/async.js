// Functions running in parallel with other functions are called asynchronous.
// Asynchronous functions take some time to complete.
// With asynchronous programming, JavaScript programs can start long-running tasks and continue running other tasks in parallel.

// However, asynchronous programs can be difficult to write and debug.
// Because of this, most modern asynchronous JavaScript methods don't use callbacks.
//  Instead, asynchronous programming is solved using Promises and async-await.
// An async function always returns a Promise.
// JavaScript is a synchronous and single-threaded programming language.
// But you can perform asynchronous programming using callbacks, Promises, and async-await.

//*********/ async-await allows you to write asynchronous code in a synchronous manner.************
// This makes the code more readable and easier to maintain.

//Async programming helps JavaScript handle time-taking tasks without stopping the program, and async-await makes it easier to write and understand.

// async function greet(){
//     let say = "Good Morning! how are you?";
//     return say
// }
// console.log(greet());

const Get = new Promise((resolve,reject)=>{
        resolve("right pin");
})
async function Data(){
    return Get;
}

const result = Data();
console.log(result);
result.then((res)=>{
    console.log(res)
})

//await is used only inside async functions.
//It pauses the function until the Promise is done (resolved or rejected).

// First Promise - executes after 8 seconds
const greeting = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("this is execute after 8 sec...");
        resolve("First promise done");  // Resolving the promise
    },8000);
})
// Second Promise - executes after 5 seconds
const greeting2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("this is execute after 5 sec...");
        resolve("Second promise done");
    },5000);
})
async function Run(){
    // Waits for the first promise to complete (8 seconds)
    const result = await greeting;
    console.log(result);
    // After the first completes, it waits for the second (5 seconds)
    const result2 = await greeting2;
    console.log(result2);
    // This will run only when both async tasks are finished
    console.log("this will wait until my async program complete");
}
Run();// Calling the async function
//   async makes the function return a Promise
// ✔ await stops execution until the Promise resolves
// ✔ Code after await runs only when the promise is completed
// A Promise in JavaScript is like a guarantee or agreement that something will happen in the future.
// Example:
// If you order food online 🍔 → you don't get it immediately.You wait.
// The app gives you a promise that:
// If everything goes well → you receive the food (Success)
// If something goes wrong → you get a failure message (Error)
// So, a Promise helps manage tasks that take time, like:
// Pending ⏳	-Promise is still waiting (not finished yet)
// Fulfilled ✅	-Task completed successfully
// Rejected ❌	-Task failed
// To create a promise object, we use the Promise() constructor.
// let promise = new Promise(function(resolve, reject){
// do something
// });
// The Promise() constructor takes a function as an argument. 
// The function also accepts two functions resolve() and reject().
// If the promise returns successfully, the resolve() function is called.
// And, if an error occurs, the reject() function is called.

let promise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Task completed successfully!");
    } else {
        reject("Something went wrong!");
    }
});
// the above code is promise producing code
// and the below code is promise consuming code
promise
    .then(result => {
        console.log(result);    // Runs if resolve() is called
    })
    .catch(error => {
        console.log(error);     // Runs if reject() is called
    });

//another example
const paymentDetails = new Promise((resolve, reject) => {
    console.log("payment initialized");
    setTimeout(() => {
        console.log("checking payment details...");
    }, 2000);
    let payment = true;
    setTimeout(() => {
        if (payment === true) {
            resolve("payment successful completed");
        } else {
            reject("payment failed");
        }
    }, 3000);
});
//.then() - handles success - only when resolved
paymentDetails
    .then((message) => {
        console.log("success :", message);
    })
    .then(() => {
        console.log("quit now");
    })
    .then(() => { });

paymentDetails.catch((err) => {
    console.log("reject :", err);
});
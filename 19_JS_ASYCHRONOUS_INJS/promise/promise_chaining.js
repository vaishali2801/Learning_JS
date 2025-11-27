// another example of promise chaining with finally statements
//Promise chaining means running multiple .then() methods one after another, 
// where each .then() waits for the previous one to finish.
const payment = new Promise((resolve, reject) => {
    let paymentInitiate = true;

    if (paymentInitiate) {
        console.log("payment initiated");

        setTimeout(() => {
            console.log("checking payment details...");
            let payment = true;

            if (payment) {
                resolve("payment completed successfully");
            } else {
                reject("payment failed");
            }
        }, 2000);
    } else {
        reject("payment initiation failed");
    }
});

payment
    .then((checkPayment) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("success:", checkPayment);
                resolve();
            }, 2000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("fetching balance after payment deduction");
                resolve();
            }, 2000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("balance is:", "xxxxx amount left");
                resolve();
            }, 2000);
        });
    })//Each .then() returns a new promise, which allows the next .then() to execute.
    .catch((err) => {
        console.log("error:", err);
    })
    .finally(() => {
        setTimeout(() => {
            console.log("do you want to explore more?");
        }, 2000);
    });//The finally() method runs no matter what — whether the promise is resolved (successful) or rejected (failed).

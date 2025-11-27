//another example
let orderFood = new Promise((resolve, reject) => {
    let delivered = true;
    if (delivered) {
        resolve("Food delivered 🍕");
    } else {
        reject("Delivery failed ❌");
    }
});

orderFood
    .then((msg) => console.log(msg))  // For success
    .catch((error) => console.log(error))  // For error
    .finally(() => console.log("Thank you for using our service 😊"));

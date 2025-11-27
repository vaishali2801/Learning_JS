//Callback Hell (also known as the "Pyramid of Doom") happens when multiple nested callback functions
//are used one inside another—especially in asynchronous operations like fetching data, reading files, timers, etc.
//This makes code hard to read, debug, and maintain.
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}
function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}
function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}
function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 completed");
        callback();
    }, 1000);
}
// Callback Hell
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("All steps finished!");
            });
        });
    });
});
//why this happens?
//When async tasks depend on each other and are nested.
//Poor code structure.
//No use of modern alternatives like Promises or Async/Await.
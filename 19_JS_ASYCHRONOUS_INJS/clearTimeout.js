// in setTimeOut the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method.
//Cancels a scheduled setTimeout() before it runs.
let stopTimer; // will store timeout ID
let count = 3; // starting number

const countdown = () => {
    console.log(count);

    count--;

    if (count >= 0) {
        // keep running until countdown reaches 0
        stopTimer = setTimeout(countdown, 1000);
    } else {
        console.log("⏹ Countdown Finished!");
    }
};

// Start countdown
countdown();

// Stop timer manually after 3 seconds
setTimeout(() => {
    clearTimeout(stopTimer);
    console.log("🚫 Timer manually stopped before completing");
}, 3000);

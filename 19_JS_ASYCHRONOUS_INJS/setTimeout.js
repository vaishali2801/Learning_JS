// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
//Runs a function once after a given time (delay).
//Time is in milliseconds (ms) → 1000 ms = 1 second.
//setTimeout(function, delay);
const run = () => {
    console.log("running code");
    setTimeout(() => {
        console.log("setTimeout executed");
    }, 4000);
}
run();

//time display
function Timing() {
    console.log("checking time....");

    setTimeout(() => {
        const time = new Date().toLocaleString();
        console.log("current time", time);
    }, 6000);
};
Timing();
//Stops a function running repeatedly from setInterval().
// the program executes a block of code at every specified time interval. If you want to stop this function call, then you can use the clearInterval() method.
//clearInterval(intervalID);
let number = 1;
const printNumber = () => {
    console.log("Count:", number);
    number++;
};

const interval = setInterval(printNumber, 1000);
// Stop interval after 5 seconds
setTimeout(() => {
    clearInterval(interval);
    console.log("Counter stopped");
}, 5000);

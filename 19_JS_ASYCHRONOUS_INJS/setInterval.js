//Runs a function repeatedly after a fixed time gap.
//setInterval(function, delay);
//The setInterval() method repeats a block of code at every given timing event.
let count = 1;

let intervalId = setInterval(() => {
    console.log("Running... :" + count);
    count++;
}, 1000);//Hence the program displays the time once every 1 second.

// JavaScript ES6 (also known as ECMAScript2015 or ECMAScript6) is the sixth edition of JavaScript introduced in June 2015.
// ECMAScript (European Computer Manufacturers Association Script) is the standard specification of JavaScript to ensure compatibility in all browsers and environments.
// This tutorial provides a summary of commonly used features and syntax improvements of ES6.

function play(game) {
    console.log(game);
}
play();//undefined

function play2(game) {
    console.log(game);
}
play2("gta-5");//gta-5

// we can pass default parameter in our function

function play3(game = "candy crush") {
    console.log(game);
}
play3();//candy crush

// if we provided a argument and also provided default parameter then it will take argument instead of default parameter value
function play4(game = "temple run 2") {
    console.log(game);
}
play4("UNO");

// it will take argument values as first parameter and second value as default parameter
function game3(gameName1, gameName2 = "badminton") {
    console.log(
        `Right now i am  playing ${gameName1} then we will play ${gameName2}`
    );
}
game3("cricket");

function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
greet();
greet("Alice");
greet("Bob", "Hi");

// example with default parameter as a function
function getDefaultGame() {
    return "chess";
}

function game4(gameName = getDefaultGame()) {
    console.log(`I am playing ${gameName}`);
}

game4();
game4("tennis");

// example with default parameter as an object
function displayPlayer(player = { name: "Unknown", age: 0 }) {

    console.log(`Player: ${player.name}, Age: ${player.age}`);
}

displayPlayer();
displayPlayer({ name: "John", age: 25 });

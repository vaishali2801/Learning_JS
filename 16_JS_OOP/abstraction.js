//Abstraction** => Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.
//When you use a phone, you press buttons → you don’t see the internal circuits
//define class 
//here # is private class field /2022 ECMA script - everyone not access this 
class Engine {
    // Private property: This cannot be accessed from outside the class
    #enginStatus = "off";
    // Method to start the engine
    enginStart() {
        console.log("Started ");
        this.#enginStatus = "on"; // updating private property
    }
    // Method to stop the engine
    enginOff() {
        console.log("Off engine");
        this.#enginStatus = "off"; // updating private property
    }
    // Method to get the engine status
    enginStatus() {
        return this.#enginStatus; // returns "on" or "off"
    }
}
// Creating object of Engine class
const customer = new Engine();

customer.enginStart(); // calling start method
console.log(customer.enginStatus());

customer.enginOff(); // calling off method
console.log(customer.enginStatus());
//another example 
class TubeLight {
    #lightStatus = "on";

    startLight() {
        this.#lightStatus = "on";
        console.log("Light on");
    }
    turnOffLight() {
        this.#lightStatus = "off";
        console.log("Light Off");
    }
    LightStatus() {
        return this.#lightStatus;
    }
}
const light1 = new TubeLight();

light1.startLight();
light1.turnOffLight();



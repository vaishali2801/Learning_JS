//A static method is a function inside a class that you can call without creating an object.
//It belongs to the class itself, NOT to the objects of that class.
class Bank{
    constructor(acc,name,balance){
        this.acc = acc;
        this.name = name;
        this.balance;
    }
    //define static method
    static getBank(name){
        return name;
    }
}
//create instance of class
const bank1 = new Bank(26222146242,"xyz",12000);
console.log(bank1);
// if i try to invoke my static method on instance of bank1 object will throw an error
console.log(Bank.getBank("abc"));
//Encapsulation** => Encapsulation means keeping properties and methods private inside a class, so that they are not accessible from outside that class.
class Student {
    #password;
    #email;
    constructor(password, email, name, number) {
        this.#password = password;
        this.#email = email;
        this.name = name;
        this.number = number;
    }
}
const std1 = new Student("vaishali123", "xyz12@gmail.com", "vaishali", 1234567890);
console.log(std1);// we can access only name and number not password and email
console.log(std1.password);//undefined because this property is private 

//example
class Employee {
    // Private fields (Encapsulation)
    #name;
    #id;
    #password;
    constructor(name, id, password) {
        this.#name = name;
        this.#id = id;
        this.#password = password;
    }
    getName() {
        return this.#name;
    }
    setName(newName) {
        this.#name = newName;
    }
    // Method to display student details
    getDetails() {
        return `Name: ${this.#name}, id: ${this.#id}, password: ${this.#password}`;
    }
}   
const Employee1 = new Employee("bhoomi",645,"bhoomi123");
console.log(Employee1.getName());
console.log(Employee1.getDetails());
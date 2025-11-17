// get method is used inside a class to read a value like a property.
// It looks like a function, but you can use it like a variable.
// and you can not invoke this method
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    get grade() {
        return this.marks >= 35 ? "Pass" : "Fail";
    }
}
const s1 = new Student("Vaishali", 45);
console.log(s1.grade);

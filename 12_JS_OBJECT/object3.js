// creating objects using class constructor
class personDetails {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}
const person = new personDetails("vaishali", 18, "software developer");

//print object
console.log("person details ", person);

// creating one more  object with different values using object literals
const studentsDetails = {
    totalStudents: 500,
    exam: "common entrance test",
    block: "a-f",
};

// now merging two objects into one object
const MergeTwo = { ...person, ...studentsDetails }
console.log(MergeTwo);

// object length
console.log("Find length ", Object.keys(MergeTwo).length);
//create more object
class Clothes {
    constructor(color, quantity, price, total) {
        (this.color = color),
            (this.quantity = quantity),
            (this.price = price),
            (this.total = total);
    }
}
const clothesDetail = new Clothes("red", 4, 4000, 12000);
console.log("clothes list ", clothesDetail);

//get method
//Used to access property values like normal properties but run a function in the background
const CarDetail = {
    company: "mercedes",
    year: 2025,
    model: "g wagon",

    get CarModel() {
        return this.model;
    },
}
const carModel = CarDetail.CarModel;
console.log("carModel ", carModel);

// set method
//Used to assign property values but run a function when the property is set

const bikeDetail = {
    company: "Kawasaki",
    year: "",
    model: "ninja h2",

    set bikeModel(model) {
        this.year = year;
    },
};
const bikeModel = (bikeDetail.year = "2025");

console.log("bike detail", bikeDetail);
console.log(bikeModel); 
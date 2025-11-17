//A class is like a blueprint used to create objects.
// JavaScript classes are templates for JavaScript objects.
// A JavaScript class is not an object; it is a template for creating objects.
class List {
    constructor(product, price, rate) {
        this.product = product;
        this.price = price;
        this.rate = rate;
    }
}
const pr1 = new List("laptop", 60000, 10);
console.log(pr1);
console.log(typeof pr1);

// Here, the List class is a blueprint for creating list objects.
// The constructor method initializes properties in the list objects.
// pr1 is an instance of the list class.

//we can add property also
pr1.weight = "3kg";
console.log("adding property: ",pr1);

//second example
const pr2 = new List("iron", 2000, 5);
console.log("product name is: " + pr2.product + " price is: " + pr2.price + " rate is(%): " + pr2.rate);

class PerfumeList {
    constructor(fragrance, quality, marketPrice, country) {
        this.fragrance = fragrance;
        this.quality = quality;
        this.marketPrice = marketPrice;
        this.country = country;
    }
    madeInCountry() { // this is method - we can invoke this method 
        return this.country;
    }
}
const perfume1 = new PerfumeList("sweet", "very good", 2999, "US");
console.log("there are " + perfume1.fragrance + " fragrance with "
    + perfume1.quality + " quality and price is " + perfume1.marketPrice + " made in " + perfume1.country);

// with parameter 
class Employee{
    constructor(name,age,id,department,year){
        this.name = name;
        this.age = age;
        this.id = id;
        this.department = department;
        this.year = year
    }
    calculate(year){
        return this.year - year;
    }
}    
const count = new Employee("john",22,6578,"software",2025);
console.log("Employee1 :",count);
console.log("how many year of working this company? : ",count.calculate(2021));
console.log("name : ",count.name);
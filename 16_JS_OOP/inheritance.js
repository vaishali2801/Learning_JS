// **Inheritance** => Inheritance allows us to access parent class properties and methods in a child class.
//create class 
class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
const mobile_1 = new Mobile("iPhone", 70000);
// inheritance
class MobileDetails extends Mobile{
    constructor(brand,price,rate,discount) {
        super(brand,price);
        this.rate = rate;
        this.discount = discount;   
    }
}
const mobile2  = new MobileDetails("samsung","150000",13,"20%");
console.log(mobile2);
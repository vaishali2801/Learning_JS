// using setter we can set the properties of class object
//the set method (setter) is used to set/update the value of a property safely.
//define class
class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = "";
    }
    //set property
    set releaseYear(year){
        return this.year = year;
    }
}
//instance of class
const book1 = new Book("who will cry when you die","Robin Sharma");
//set value
book1.releaseYear = 2018;
console.log("Book1 :" ,book1);
//polymorphism
//In JavaScript OOP, polymorphism allows different classes to have methods with the same name,
// but each method can work differently depending on the object calling it.
//one thing, many forms.
class Play{
    constructor(game){
        this.game = game;
    }
    playGame(){
        return this.game;
    }
}
const p1 = new Play("Temple run 2");
console.log(p1);
class MultiPlay extends Play{
    constructor(game,rating){
        super(game);
        this.rating = rating;
    }
    playGame(){
        return `I am playing ${this.game} game and this game's rating is ${this.rating}`;
    }
}
const g1 = new MultiPlay("Candy Crush Saga",4.5);
console.log(g1);
//You can use the same method name in different classe
//another example
class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog barks 🐶");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Cat meows 🐱");
    }
}
const a1 = new Animal();
const d1 = new Dog();
const c1 = new Cat();
a1.sound(); 
d1.sound(); 
c1.sound(); 

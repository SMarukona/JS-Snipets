// //Defining Javascript Class
// class Person {
//     constructor(name, age){
//        this.name= name;
//        this.age = age;
//     }
//     greeting(){
//         console.log(`Hello ${this.name}! You are ${this.age} years old.`);
//     }
// }

// //Let's extends Person class to create Politician

// class Politician extends Person{
//     constructor(name, age, party){
//         super(name, age);
//         this.party = party;
//     }

//     campaign(){
//         console.log(`${this.name} is contest for ${this.party}`);
//     }
// }

// //Creating instance of Politician

// const politician1 = new Politician("Joe", 35, "Democratic Party.");

// politician1.greeting();
// politician1.campaign();

//Javascript this keyword
//This keyword in the function
function helloWorld(){
    console.log("Hellow world");
    console.log(this);
}
helloWorld();

//This keyword in JS object
const Bird = {
    name: "Sparrow",
    beakType: "Short",
    eat: function(){
        console.log(this.name + " eats rice");
    },
    telleaktype: function(){
        console.log(this.beakType);
    }

}

Bird.eat();
Bird.telleaktype();

//Accessing this while maintaining context
function telleaktype1(){
    console.log(this.beakType);
}
Bird.beak = telleaktype1;
Bird.beak();
telleaktype1();

//This on constructor function
class Person{
    constructor(name, age){
       this.name = name,
       this.age = age
    }
    intro(){
        console.log("My name is " + this.name + " and I'm " + this.age + " old.");
    }
}

const person1 = new Person("Mike", 25);

person1.intro();
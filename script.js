//Defining Javascript Class
class Person {
    constructor(name, age){
       this.name= name;
       this.age = age;
    }
    greeting(){
        console.log(`Hello ${this.name}! You are ${this.age} years old.`);
    }
}





//Let's extends Person class to create Politician

class Politician extends Person{
    constructor(name, age, party){
        super(name, age);
        this.party = party;
    }

    campaign(){
        console.log(`${this.name} is contest for ${this.party}`);
    }
}

//Creating instance of Politician

const politician1 = new Politician("Joe", 35, "Democratic Party.");

politician1.greeting();
politician1.campaign();
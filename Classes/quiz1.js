// Create a class called "Person" with properties for name, age, and country.

class Person {
    constructor(){
        this.name="rudra";
        this.age=45;
        this.country="New york";
    }

    details(){
        return console.log(`the person is ${this.name} and the age is ${this.age} and favorite place ${this.country}`);
    }
}

const person1=new Person();
person1.details();
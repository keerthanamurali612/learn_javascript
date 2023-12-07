// Write a JavaScript program that creates a class called 'Vehicle' with properties for color, model, and year.

class Vehicle{
    constructor(){
        this.color="Black";
        this.model="yamaha";
        this.year=1967;
    }

    ride(){
        return console.log(`the vehicle model is ${this.model} and color is ${this.color} and the year is ${this.year} `)
    }

}

const vehicle1=new Vehicle();
vehicle1.ride();
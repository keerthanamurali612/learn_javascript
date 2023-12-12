// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
// Include two methods to calculate rectangle area and perimeter. 
// Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle_Area_Perimeter {
    constructor(){
        this.width=6;
        this.height=8;
    }

    calculateAreaPerimeter(area,perimeter){
        this.area=this.width*this.height;
        this.perimeter=2*this.width*this.height;

        return console.log(`Area of Rectangle:${this.area} and Perimeter of Rectangle:${this.perimeter}`);

    }
}

const rectangle1=new Rectangle_Area_Perimeter();
rectangle1.calculateAreaPerimeter();





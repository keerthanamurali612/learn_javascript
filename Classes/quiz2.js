// Create a class called 'Rectangle' with properties for width and height.

class Rectangle{
    constructor(width_Size,height_Size){
        this.width=width_Size;
        this.height=height_Size;
    }
    properties(){
        return console.log(`width size is :${this.width} and height size is :${this.height}`);
    }

}

const rectangle=new Rectangle(300,200);

rectangle.properties();
// Write a JavaScript program that creates a class called 'Store' with properties for name, address, and products.

class Store{
    constructor(){
        this.name="Flora";
        this.address="435,Texas";
    }

    details(){
        return console.log(`the store name is ${this.name} and the place is ${this.address}`);
   }

}

class Products extends Store{
    constructor(products,price,quantity){
        super(products,price);
        this.products="Brew Coffee";
        this.price=`$14.50`;
        this.quantity=`4kg`;
    }

    products_details(){
        return console.log(`the store name is ${this.name}  whole product is ${this.products} and the price is ${this.price}`);
    }

}



const store1=new Store();
store1.details();

const product1=new Products();
product1.products_details();
// Write a JavaScript program that creates a class called 'Customer' with properties for name, address, and phone number.

class Customer{
    constructor(cus_name,cus_address,phone_num){
        this.name=cus_name;
        this.address=cus_address;
        this.phnum=phone_num;
    }

    custo_info(){
        return console.log(`the customer name : ${this.name} customer address : ${this.address} and contact information : ${this.phnum}`);
    }
}

const cust1=new Customer ("john joe","23 new bersely",123456789);
const cust2=new Customer ("kevin andrew","54 texas ",123456789);

cust1.custo_info();
cust2.custo_info();

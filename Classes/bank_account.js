// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance.

class BankAccount{
    constructor(account_num,balance){
        this.acc_num=account_num;
        this.balance=balance;
    }

    bank_details(){
        return console.log(`saving account number is ${this.acc_num} and total balance is ${this.balance}`);

    }
};

const bank1=new BankAccount(123141234,53000.45);
const bank2=new BankAccount(345646364,13000);

bank1.bank_details();
bank2.bank_details();
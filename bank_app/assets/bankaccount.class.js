class BankAccount {
    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log("\n Deposited $" + amount + " into account " + this.accountNumber);
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log("\n Withdrawn $" + amount + " from account " + this.accountNumber);
        }
        else{
            console.log("\n Insufficient funds");
        }
    }

    getBalance(){
        return this.balance;
    }

    displayAccountInfo(){
        console.log("\n Account Number : " + this.accountNumber);
        console.log(" Owner Name : " + this.ownerName)
        console.log(" Balance : $" + this.getBalance());

    }

}

const account1 = new BankAccount(10003, "Dwayne Johnson", 300);
const account2 = new BankAccount(10005, "Tommy Angelo", 200);

console.log("\n Initial Account Information : ");

account1.displayAccountInfo();
account2.displayAccountInfo();

console.log("\n Deposit and Withdrawal :");

account1.deposit(200);
account2.withdraw(220);

account2.deposit(100);
account1.withdraw(250);

console.log("\n Updated Account Information :");

account1.displayAccountInfo();
account2.displayAccountInfo();


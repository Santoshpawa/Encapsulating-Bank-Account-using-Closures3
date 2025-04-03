function createBankAccount(startingAmount){
    let balance= startingAmount;
    return{
        deposit: function(x){
            balance+=x;
            console.log("Net Balance:",balance)
        },
        withdraw: function(x){
            if(balance<x){
                console.log("Insufficient Amount")
                return;
            }
            balance-=x;
            console.log("Net Balance:",balance)
        },
        getBalance: function(){
            console.log("Net Balance:",balance)
        }
    }
}

const account = createBankAccount(1000);

account.deposit(500); 

account.withdraw(800); 

account.getBalance(); 
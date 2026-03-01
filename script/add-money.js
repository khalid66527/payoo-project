document.getElementById("add-money-btn").addEventListener("click",function(){
    //1- bank account get
    const bankAccount = getValueFromInput("add-money-bank")
    if(bankAccount =="Select a bank" ){
        alert('please select a bank');
        return;
    }
    //2- get bank account number
    const bankNumber = getValueFromInput("add-money-number");
    if(bankNumber.length != 11){
        alert("invalite Bank Number");
        return;
    }
    // get amount
    const addMoneyAmount = getValueFromInput("add-money-amount")
    const currentBalance = getBalance();

    const newBalance = currentBalance + Number(addMoneyAmount);
    // get pin 
    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`add money success form
            ${bankAccount} at ${new Date()}`);
        setBalance(newBalance)
    }
    else{
        alert("invalite pin")
        return;
    }


})
document.getElementById("cashout-btn").addEventListener('click',function(){
    // 1- get the agent Number &validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("invalite Number")
    }
    // 2- get the  amount 
    const cashoutAmount = getValueFromInput("cashout-amount");

     // 3- get the current baance , validate , convert to number
    const currentBalance =  getBalance();

    // 4- calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);

    if(newBalance < 0){
        alert("invalite Amount")
        return;
    }
    

    const Pin = getValueFromInput("cashout-pin");
    if(Pin === "1234"){
        alert(`cashout successfull
            ${cashoutNumber} at ${new Date()}`)
        setBalance(newBalance);
    }else{
        alert("invalite Pin")
    }

});


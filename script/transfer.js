document.getElementById("transfer-btn").addEventListener("click", function(){
    const transferNumber = getValueFromInput("transfer-number");
    if (transferNumber.length != 11){
        alert("invalite Number")
        return;
    }
    const transferAmount = getValueFromInput("transfer-amount")

    const mainBalance = getBalance();

    const newBalance = mainBalance - Number(transferAmount);
     if(newBalance < 0){
        alert("invalite Amount")
        return;
    }

    const transferPin = getValueFromInput("transfer-pin")
    if (transferPin === "1234"){
        alert(`Transfer Success form 
            ${transferNumber} at ${new Date()}`)
        setBalance(newBalance);
    }
    else{
        alert("invalite pin")
    }
})
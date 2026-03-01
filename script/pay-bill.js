document.getElementById("pay-bill-btn").addEventListener("click", function(){
    const payAccount = getValueFromInput("pay-bank");
    if(payAccount == "Select back"){
        alert("select a back")
    }

    const payAccountNumber = getValueFromInput("pay-account-number");
    if (payAccountNumber.length != 12){
        alert('invalite pay account')
        return;
    }

    const payBillAmount = getValueFromInput("pay-bill-amount");
    
    const mainBalance = getBalance()

    const newBalance = mainBalance - Number(payBillAmount);
    

    const Pin = getValueFromInput("pay-bill-pin");
    if(Pin === "1234"){
        alert('Pay Bill successfull')
        setBalance(newBalance);
    }else{
        alert("invalite Pin")
    }
})
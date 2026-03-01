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
        alert(`Pay Bill success form
            ${payAccount} at ${new Date()}`);
        setBalance(newBalance);
        //history-container ta ke dore niye asbo

        const history = document.getElementById("history-container")
        // new div create korbo 

        const newHistory = document.createElement("div")
        // new div  a innerhtml add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
          Pay Bill  ${payBillAmount} tk success to ${payAccountNumber}, at ${new Date()}
        </div>
        
        `
        //history container e newDib append korbo
        history.append(newHistory);
    }else{
        alert("invalite Pin")
    }
})
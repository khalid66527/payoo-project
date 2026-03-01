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
        //history-container ta ke dore niye asbo

        const history = document.getElementById("history-container")
        // new div create korbo 

        const newHistory = document.createElement("div")
        // new div  a innerhtml add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
          Transfer ${transferAmount} tk success to ${transferNumber}, at ${new Date()}
        </div>
        
        `
        //history container e newDib append korbo
        history.append(newHistory);
    }
    else{
        alert("invalite pin")
    }
})
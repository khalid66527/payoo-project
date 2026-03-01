document.getElementById("cashout-btn").addEventListener('click',function(){
    // 1- get the agent Number &validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("invalite Number")
    }
    // 2- get the  amount 
    const cashoutAmount = getValueFromInput("cashout-amount");

     // 3- get the current baance , validate , convert to number
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log(balance);
    // 4- calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    console.log(newBalance);

    if(newBalance < 0){
        alert("invalite Amount")
        return;
    }
    

    const Pin = getValueFromInput("cashout-pin");
    if(Pin === "1234"){
        alert('cashout successfull')
        balanceElement.innerText = newBalance;
    }else{
        alert("invalite Pin")
    }

});


// document.getElementById('cashout-btn').addEventListener('click', function(){
//         // 1- get the agent Number &validate
//         const cashoutNumberInput = document.getElementById('cashout-number');
//         const cashoutNumber = cashoutNumberInput.value;
//         console.log(cashoutNumber);
//         if(cashoutNumber.length !=11){
//             alert('Invalite Agent Number');
//             return
//         }

//         // 2- get the  amount , validate , convert to number
//         const cashoutAmountInput = document.getElementById('cashout-amount');
//         const cashoutAmount = cashoutAmountInput.value;
//         console.log(cashoutAmount);
//         // 3- get the current baance , validate , convert to number
//         const balanceElement = document.getElementById('balance');
//         const balance = balanceElement.innerText;
//         console.log(balance);
//         // 4- calculate new balance
//         const newBalance = Number(balance) - Number(cashoutAmount);
//         // console.log('New Balance :' , newBalance);
//         if(newBalance < 0){
//             alert("Invalite Amount")
//             return
//         }
        
//         // 5-get the pin verify
//         const cashoutPinInput = document.getElementById('cashout-pin');
//         const Pin = cashoutPinInput.value;
//         if(Pin ==='1234'){
//             // 5-1 true:: show an alert > balance
//             alert('cashout successfull')
//             console.log('new balance :', newBalance);
//             balanceElement.innerText = newBalance;

//         }
//         else{
//             // 5-2 true:: show anerror alert > return
//             alert('cashout full')
//         }

        

//     });
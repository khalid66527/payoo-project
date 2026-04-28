
// machine input 
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value =input.value;
    console.log(id ,value);
    return value;
}
// machine balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance =balanceElement.innerText;
    console.log("current balance:", Number(balance));
    return Number(balance);
}
// machince value --> set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}


// machine id > hide all show id
function showOnly(id){
    const addmoney = document.getElementById("Add-Money")
    const cashout = document.getElementById("Cashout")
    const transfer = document.getElementById("Transfer")
    const payBil = document.getElementById("pay-bill")
    const transacrions = document.getElementById("history")
    const bonus = document.getElementById("bonus")

    // hide all id

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transfer.classList.add("hidden");
    payBil.classList.add("hidden");
    transacrions.classList.add("hidden");
    if(bonus) bonus.classList.add("hidden");


    // onclick remove the id

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

    // handle active button styling
    const buttons = document.querySelectorAll('.buttons button');
    for (const btn of buttons) {
        btn.classList.remove("active-btn");
    }

    const activeButton = document.querySelector(`.buttons button[onclick="showOnly('${id}')"]`);
    if (activeButton) {
        activeButton.classList.add("active-btn");
    }
}



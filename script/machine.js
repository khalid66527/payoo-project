
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

    // hide all id

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transfer.classList.add("hidden");
    payBil.classList.add("hidden");

    // onclick remove the id

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}


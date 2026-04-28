document.getElementById("bonus-btn").addEventListener("click", function () {
    const coupon = getValueFromInput("bonus-coupon");
    
    // We will use a demo coupon code "PAYOO500" for 500 tk bonus
    if (coupon === "PAYOO500") {
        const currentBalance = getBalance();
        const newBalance = currentBalance + 500;
        
        setBalance(newBalance);
        
        alert("Bonus added successfully!");

        // History update
        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
          Got bonus 500 tk with coupon ${coupon}, at ${new Date()}
        </div>
        `;
        history.append(newHistory);
    } else {
        alert("Invalid coupon code");
    }
});
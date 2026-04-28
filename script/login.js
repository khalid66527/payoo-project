document.getElementById('btn-login')
    .addEventListener('click', function () {
        //   step-1 get mbile number 
        const numberInput = document.getElementById('input-number');
        const contactNumber = numberInput.value;
        console.log(contactNumber);
        // step -2 get the pin input
        const pinInput = document.getElementById('input-pin');
        const Pin = pinInput.value;
        console.log(Pin);
        // step-3 match pic &number number
        if(contactNumber=='01234567890'&&'1234'){
            // step-3-1 true::>>  alert homepage
            alert('login Success')
            // window.location.replace('/homepage.html')
            window.location.assign('./homepage.html')
        }
        else{
            alert('login Failled');
            return;
        }

    })
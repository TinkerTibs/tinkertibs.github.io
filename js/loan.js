function doPayment() {
    //INPUT 
        //values are taken from user input    
        let borrowed = parseFloat(document.getElementById("borrowed").value);
        let rate = parseFloat(document.getElementById("rate").value);
        let numberYears = parseFloat(document.getElementById("numberYears").value);    
        let paymentsPerYear = parseFloat(document.getElementById("paymentsPerYear").value);    
    //PROCESSING
        // calls function computePayment
        let result = computePayment(borrowed, rate, numberYears, paymentsPerYear);
    //OUTPUT
        //outputs result to user
        document.getElementById("paymentOutput").innerHTML = result;
}

function doBalance() {
    //INPUT 
        //values are taken from user input 
        let borrowed = parseFloat(document.getElementById("borrowed").value);
        let rate = parseFloat(document.getElementById("rate").value);
        let numberYears = parseFloat(document.getElementById("numberYears").value);    
        let paymentsPerYear = parseFloat(document.getElementById("paymentsPerYear").value);       
        let paymentsToDate = parseFloat(document.getElementById("paymentsToDate").value);
    //PROCESSING
        // calls function computeBalance
        let output = computeBalance(borrowed, rate, numberYears, paymentsPerYear, paymentsToDate);
    //OUTPUT
        //outputs result to user
        document.getElementById("BalanceOutput").innerHTML = output;
}

//this function does all the mathy things based on the arguments enetered on line 10 and returns the mathy's solution
function computePayment(principal, annualRate, years, periodsPerYear) {
    paymentAmount = (principal * (annualRate/periodsPerYear)) / (1 - Math.pow((1 + (annualRate/periodsPerYear)), -(years * periodsPerYear)));
    return "$" + paymentAmount.toFixed(2);
}


//this function does all the mathy things based on the arguments enetered on line 26 and returns the mathy's solution
function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate) {
    balanceAmount = principal * Math.pow((1 + (annualRate/periodsPerYear)), numberOfPaymentPaidToDate) - (((principal * (annualRate/periodsPerYear)) / (1 - Math.pow((1 + (annualRate/periodsPerYear)), -(years * periodsPerYear))) * (Math.pow(1 + (annualRate/periodsPerYear), numberOfPaymentPaidToDate) - 1)) / (annualRate/periodsPerYear))
    return "$" + balanceAmount.toFixed(2);
}
//my return is a little different from the figure image because theirs has a rounded payment per period number and I chose not to call the computePayment function inside the computeBalance function, because I wanted it to stand on its own.


    






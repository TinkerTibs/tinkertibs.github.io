function doFV() {
    //INPUT 
        //values are taken from user input
        let invested = parseFloat(document.getElementById("invested").value);
        let rate = parseFloat(document.getElementById("rate").value);
        let numberYears = parseFloat(document.getElementById("numberYears").value);
        let periodsPerYear = parseFloat(document.getElementById("periodsPerYear").value);
    //PROCESSING
        // calls second function
        let result = computeFutureValue(invested, rate, numberYears, periodsPerYear);
    //OUTPUT
        //outputs result to user
        document.getElementById("output").innerHTML = result;
    }
    
    //this function does all the mathy things based on the arguments enetered on line 10 and returns the mathy's solution
    function computeFutureValue(principal, annualRate, years, periodsPerYear) {
        futureValue = principal * Math.pow((1 + (annualRate/periodsPerYear)), (years * periodsPerYear));
        return "$" + futureValue.toFixed(2);
    }





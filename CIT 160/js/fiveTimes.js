function fiveTimes() {
    //INPUT
        // there is no input 
    //PROCESSING
    //loop 12 times
    let output = "";
    for (let i = 1; i <= 12; i ++) {
        output += "5 x " + i + " = " + i * 5 + "<br>";
    }
    //OUTPUT
    //outputs the times table
    document.getElementById("output").innerHTML = output;
}
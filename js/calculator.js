function checkAnswer() {
    //INPUT 
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operator = (document.getElementById("operator").value);
    let solution = parseFloat(document.getElementById("solution").value);
    //PROCESSING
    //creating switch to differentiate  operators
switch (operator) {
    case "+":
        answerKey = number1 + number2;
        break;
    case "-":
        answerKey = number1 - number2;
        break;
    case "*":
        answerKey = number1 * number2;
        break;
    case "/":
        answerKey = number1 / number2;
        break;
}
//if statement to verify if solution entered is correct
if (answerKey == solution) {
    message = "Correct!";
}   else {
    message = "Incorrect";
}
    //OUTPUT
    document.getElementById("output").textContent = message;
}
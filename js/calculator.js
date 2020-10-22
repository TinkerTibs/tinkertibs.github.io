function checkAnswer() {
    //INPUT
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operator = (document.getElementById("operator").value);
    let solution = parseFloat(document.getElementById("solution").value);
    //PROCESSING
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

if (answerKey == solution) {
    message = "Correct!"
}   else {
    message = "Incorrect"
}
    //OUTPUT
    document.getElementById("output").textContent = message;
}
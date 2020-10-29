function calculateTotal() {
    //INPUT

    //input user input and convert to float
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    // input from the computer to determine day of the week
//    let dayOfWeek = new Date().getDay();
    let dayOfWeek = 2;
    //PROCESSING

    if (subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
        subtotal = subtotal - (subtotal * .1 )
    }

    //OUTPUT

    //outputs the message
    document.getElementById("output").textContent = subtotal;
}
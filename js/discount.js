function calculateTotal() {
    //INPUT

    //input user input and convert to float
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    // input from the computer to determine day of the week
    let dayOfWeek = new Date().getDay();

    //PROCESSING

    //if statement to apply discount if the purchase is over 50 on tuesday or wednesday
    if (subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
        subtotal -= subtotal * .1;
    }

    //adding tax
    let withTax = subtotal * .06 + subtotal;

    //OUTPUT

    //outputs the cost after possible discount and tax are added
    document.getElementById("output").innerHTML = "$" + withTax.toFixed(2);
}
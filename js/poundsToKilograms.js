function poundsToKilograms() {
    //INPUT 
    let pounds = parseFloat(document.getElementById("pounds").value);
    //PROCESSING
    //conversion factor from pounds to kilograms
    let kilograms = pounds * 0.453592
    //OUTPUT
    document.getElementById("output").textContent = pounds + " Pounds equals " + kilograms.toFixed(1) + " Kilograms";
}
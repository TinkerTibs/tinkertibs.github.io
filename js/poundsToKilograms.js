function poundsToKilograms() {
    //INPUT 
    let pounds = parseFloat(document.getElementById("pounds").value);
    //PROCESSING
    //conversion factor from pounds to kilograms
    let kilograms = pounds / 2.20462262185
    //OUTPUT
    document.getElementById("output").textContent = pounds + " Pounds equals " + kilograms.toFixed(1) + " Kilograms";
}
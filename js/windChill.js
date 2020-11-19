//the lack of creativity on this function name is disappointing 
//while acurate, it also doesn't tell me what it's about
//maybe next semester name it function letsSeeIfItsReallyColdOutThere()
function doInputOutput() {
//INPUT 
    //values are taken from user input
    let temperature = parseFloat(document.getElementById("temperature").value);
    let windspeed = parseFloat(document.getElementById("windSpeed").value);
//PROCESSING
    //set windhill to string that says input is... well... wrong
    let windchill = "input does not meet specifications";
    //changes windchill to windChill's return if it is... you know... actaully cold and windy
    if (temperature < 50 && windspeed > 3) {
        windchill = windChill(temperature, windspeed);
    }
//OUTPUT
    //outputs windchill to user
    document.getElementById("output").innerHTML = windchill;
}




//this function processes the temp and speed as peramiters, 
//processes those peramiters through what I am calling the 'cold math' formula, 
//and then returns the solution of our cold math formula to windchill
//and I've set it to 2 dec places because that's standard (even though there was nothing on this in the instructions)
//although we all know that more 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986
//is always better this time of year
function windChill(tempF, speed) {
    windchill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
    return windchill.toFixed(2) + " degrees Fahrenheit";
}
//sometimes I crack myself up
function sleepCheck() {
    //INPUT
    
    // all the imput is taken from the computer
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();

    //PROCESSING

    //establishing base message to get up
    let message = "Get Up!";

    //if statement to change message to sleep in if the current days is any of the following...
    // in order elimates: sunday, sautrday, New Year’s Day, U.S. Independence Day, & Christmas
    if (dayOfWeek == 0 || dayOfWeek == 6 || (month == 0 && dayOfMonth == 1) || (month == 6 && dayOfMonth == 4) || (month == 11 && dayOfMonth == 25) ) {
        message = "Sleep in";
    } 

    //OUTPUT

    //outputs the message
    document.getElementById("output").textContent = message;
}
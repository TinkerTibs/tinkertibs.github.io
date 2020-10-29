function sleepCheck() {
    //INPUT
        // all the imput is taken from the computer
//    let now = new Date();
//    let month = now.getMonth();
//    let dayOfMonth = now.getDate();
//    let dayOfWeek = now.getDay();
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = 6;


    //PROCESSING
    let message = "Get Up!";
    if (dayOfWeek == 0 || dayOfWeek == 6 || (month == 0 && dayOfMonth == 1) || (month == 6 && dayOfMonth == 4) || (month == 11 && dayOfMonth == 25) ) {
        message = "Sleep in";
    } 
    //OUTPUT
    document.getElementById("output").textContent = message;
}
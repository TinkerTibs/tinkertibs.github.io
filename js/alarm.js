function sleepCheck() {
    //INPUT
        // all the imput is taken from the computer
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    //PROCESSING

    message = new Date();
    //OUTPUT
    document.getElementById("output").textContent = message;
}
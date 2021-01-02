function addOdds() {
    //INPUT
    
    // get n from user input
    let n = parseInt(document.getElementById("n").value);

    //PROCESSING

    //starting count at 0
    let count = 0;

    //when i is less then n we add 1 to i
    //when i is odd we add i to count
    for (let i = 1; i <=n; i++) {
        if ((i % 2) != 0) {
            count += i;
        }
    }

    //OUTPUT

    //outputs the added count
    document.getElementById("output").textContent = count;
}
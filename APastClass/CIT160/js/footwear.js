function getShoes() {
    //INPUT
        let shoes;
        //input weather from combo box
        let weather = document.getElementById("weather").value;
    //PROCESSING
        if (weather === "snow") {
            shoes = "Boots";
        } else if (weather === "rain") {
            shoes = "Galoshes";
        } else if (weather === "hot") {
            shoes = "Sandals";
        } else if (weather === "unknown") {
            shoes = "Shoes";
        }
    //OUTPUT
    document.getElementById("output").textContent = shoes;
}
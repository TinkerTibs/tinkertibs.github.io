// set the JSON source URL
const bookURL = "/week14/json/books.json";
const seriesURL = "/week14/json/series.json";
let windowSeriesLocation = window.location.pathname;

fetch(seriesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const ser = jsonObject["series"];
    //select output location
    const singleseriesfirst = document.querySelector(".singleseriesfirst");
    const seriesfilterone = ser.filter((x) => x.sitelink == windowSeriesLocation);
    seriesfilterone.forEach((ser) => {
      let seriesdivone = document.createElement("div");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      //use templet Literals
      h2.innerHTML = `${ser.authorname}`
      h3.innerHTML = `${ser.seriesname}`;
      
      seriesdivone.append(h2);
      seriesdivone.append(h3);
      singleseriesfirst.append(seriesdivone);
    });
  });


fetch(bookURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const book = jsonObject["books"];
    //select output location
    const singleseriessecond = document.querySelector(".singleseriessecond");
    const bookfilterseries = book.filter((x) => x.seriessitelink == windowSeriesLocation);
    bookfilterseries.forEach((book) => {
      let seriesdivtwo = document.createElement("div");
      let p = document.createElement("p");
      //use templet Literals
      p.innerHTML = `${book.seriesnumber} &emsp; ${book.title}`;
      seriesdivtwo.append(p);
      singleseriessecond.append(seriesdivtwo);
    });
  });

  fetch(seriesURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const ser = jsonObject["series"];
    //select output location
    const singleseriesthird = document.querySelector(".singleseriesthird");
    const seriesfiltertwo = ser.filter((x) => x.sitelink == windowSeriesLocation);
    seriesfiltertwo.forEach((ser) => {
      let seriesdivtwo = document.createElement("div");
      let p2 = document.createElement("p");
      //use templet Literals
      p2.innerHTML = `<b>Genre:</b> ${ser.genre}
      </p><p><b>Series Description</b>
      </p><p>${ser.summary}`

      
      seriesdivtwo.append(p2);

      singleseriesthird.append(seriesdivtwo);
    });
  });

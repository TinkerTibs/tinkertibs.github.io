// set the JSON source URL
const requestURL = "/week14/json/books.json";
let windowLocation = window.location.pathname;
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const book = jsonObject["books"];
    //select output location
    const singlebook = document.querySelector(".singlebook");
    //filters so that only the book that was clicked will display
    const bookfilter = book.filter((x) => x.sitelink == windowLocation);
    bookfilter.forEach((book) => {
      let singlebookdiv = document.createElement("div");
      singlebookdiv.className = "innerbookdiv";
      let section1 = document.createElement("section");
      section1.className = "booksection1";
      let section2 = document.createElement("section");
      section2.className = "booksection2";
      let section3 = document.createElement("section");
      section3.className = "booksection3";
      let cimg = document.createElement("img");
      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      let p = document.createElement("p");
      let p2 = document.createElement("p");

      //use templet Literals
      cimg.setAttribute("src", book.image);
      cimg.setAttribute("alt", `${book.title} - book cover`);
      h2.innerHTML = `${book.title}`;
      //limits series to only display if there is a series name
      if (`${book.seriesname}` != "") {
        h3.innerHTML = `<a href=${book.seriessitelink}>${book.seriesname} - ${book.seriesnumber}</a>`;
      }
      h4.innerHTML = `By ${book.authorfirstname} ${book.authorlastname}`;
      p.innerHTML = `Narrated By ${book.narratorfirstname} ${book.narratorlastname}
        </p><p><i>Published in ${book.yearpublished}</i>
        </p><p>Formats Owned: ${book.format}</p><p>Genre: ${book.genre}`;

      //changing ratings to stars instead of numbers:  
      //overall ratings change to stars
      let overallRating = "";
      if (`${book.ratingoverall}` == "5") {
        overallRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingoverall}` == "4") {
        overallRating = "&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingoverall}` == "3") {
        overallRating = "&#9733;&#9733;&#9733;";
      } else if (`${book.ratingoverall}` == "2") {
        overallRating = "&#9733;&#9733;";
      } else if (`${book.ratingoverall}` == "1") {
        overallRating = "&#9733;";
      } else {
        overallRating = "Not Yet Rated";
      }
      //plot ratings change to stars
      let plotRating = "";
      if (`${book.ratingplot}` == "5") {
        plotRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingplot}` == "4") {
        plotRating = "&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingplot}` == "3") {
        plotRating = "&#9733;&#9733;&#9733;";
      } else if (`${book.ratingplot}` == "2") {
        plotRating = "&#9733;&#9733;";
      } else if (`${book.ratingplot}` == "1") {
        plotRating = "&#9733;";
      } else {
        plotRating = "Not Yet Rated";
      }
      //character ratings change to stars
      let characterRating = "";
      if (`${book.ratingcharacters}` == "5") {
        characterRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingcharacters}` == "4") {
        characterRating = "&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingcharacters}` == "3") {
        characterRating = "&#9733;&#9733;&#9733;";
      } else if (`${book.ratingcharacters}` == "2") {
        characterRating = "&#9733;&#9733;";
      } else if (`${book.ratingcharacters}` == "1") {
        characterRating = "&#9733;";
      } else {
        characterRating = "Not Yet Rated";
      }
      //world ratings change to stars
      let worldRating = "";
      if (`${book.ratingworld}` == "5") {
        worldRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingworld}` == "4") {
        worldRating = "&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingworld}` == "3") {
        worldRating = "&#9733;&#9733;&#9733;";
      } else if (`${book.ratingworld}` == "2") {
        worldRating = "&#9733;&#9733;";
      } else if (`${book.ratingworld}` == "1") {
        worldRating = "&#9733;";
      } else {
        worldRating = "Not Yet Rated";
      }
      //narrator ratings change to stars
      let narratorRating = "";
      if (`${book.ratingnarrator}` == "5") {
        narratorRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingnarrator}` == "4") {
        narratorRating = "&#9733;&#9733;&#9733;&#9733;";
      } else if (`${book.ratingnarrator}` == "3") {
        narratorRating = "&#9733;&#9733;&#9733;";
      } else if (`${book.ratingnarrator}` == "2") {
        narratorRating = "&#9733;&#9733;";
      } else if (`${book.ratingnarrator}` == "1") {
        narratorRating = "&#9733;";
      } else {
        narratorRating = "Not Yet Rated";
      }

      p2.innerHTML =
        `<b>Ratings</b>
        </p><p>Overall: ` + overallRating +
        `<br>Plot: ` + plotRating +
        `<br>Character: ` + characterRating +
        `<br>World: ` + worldRating +
        `<br>Narrator: ` + narratorRating +
        `</p><p><b>Summary</b></p><p>${book.summary}`;

      section1.append(cimg);
      section2.append(h2);
      section2.append(h3);
      section2.append(h4);
      section2.append(p);
      section3.append(p2);
      singlebookdiv.append(section1);
      singlebookdiv.append(section2);
      singlebookdiv.append(section3);

      singlebook.append(singlebookdiv);
    });
  });

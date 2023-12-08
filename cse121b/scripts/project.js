// set the JSON source URL
const requestURL = "json/books.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const book = jsonObject["books"];
    //select output location
    const allbooks = document.querySelector(".allbooks");

    book.forEach((book) => {
      let bookdiv = document.createElement("div");
      let p = document.createElement("p");
      //use templet Literals
      p.innerHTML = `<img src="${book.image}" alt ="${book.title} - book cover">`;
      bookdiv.append(p);
      allbooks.append(bookdiv);
    });
  });

//filter based ob book title
function searchBookTitles() {
  let emptydiv = document.querySelector(".allbooks");
  emptydiv.innerHTML = "";
  filterBookTitles();
}
function filterBookTitles() {
  const searchterm = document.querySelector("#searchInputTitle").value;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const book = jsonObject["books"];
      //select output location
      let searchedbooks = document.querySelector(".allbooks");
      //filter the books - if they match the search term
      const searchbookfilter = book.filter((x) =>
        x.title.toUpperCase().includes(searchterm.toUpperCase())
      );
      searchbookfilter.forEach((book) => {
        let bookdiv = document.createElement("div");
        let p = document.createElement("p");
        //use templet Literals
        p.innerHTML = `<img src="${book.image}" alt ="${book.title} - book cover">`;
        bookdiv.prepend(p);
        searchedbooks.prepend(bookdiv);
      });
    });
}
//filter based on book author
function searchBookAuthor() {
  let emptydiv = document.querySelector(".allbooks");
  emptydiv.innerHTML = "";
  filterBookAuthor();
}
function filterBookAuthor() {
  const searchterm = document.querySelector("#searchInputAuthor").value;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const book = jsonObject["books"];
      //select output location
      let searchedbooks = document.querySelector(".allbooks");
      //filter the books - if they match the search term
      const searchbookfilter = book.filter((x) =>
        x.authorfirstname.toUpperCase().includes(searchterm.toUpperCase()) || x.authorlastname.toUpperCase().includes(searchterm.toUpperCase())
      );
      searchbookfilter.forEach((book) => {
        let bookdiv = document.createElement("div");
        let p = document.createElement("p");
        //use templet Literals
        p.innerHTML = `<img src="${book.image}" alt ="${book.title} - book cover">`;
        bookdiv.prepend(p);
        searchedbooks.prepend(bookdiv);
      });
    });
}
//filter based on book genre
function searchBookGenre() {
  let emptydiv = document.querySelector(".allbooks");
  emptydiv.innerHTML = "";
  filterBookGenre();
}
function filterBookGenre() {
  const searchterm = document.querySelector("#searchInputGenre").value;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const book = jsonObject["books"];
      //select output location
      let searchedbooks = document.querySelector(".allbooks");
      //filter the books - if they match the search term
      const searchbookfilter = book.filter((x) =>
        x.genre.toUpperCase().includes(searchterm.toUpperCase())
      );
      searchbookfilter.forEach((book) => {
        let bookdiv = document.createElement("div");
        let p = document.createElement("p");
        //use templet Literals
        p.innerHTML = `<img src="${book.image}" alt ="${book.title} - book cover">`;
        bookdiv.prepend(p);
        searchedbooks.prepend(bookdiv);
      });
    });
}


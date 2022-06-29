// set the JSON source URL
const requestURL = "json/books.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const book = jsonObject['books'];
    //select output location
    const allbooks = document.querySelector('.allbooks');

    book.forEach(book => {
        let bookdiv = document.createElement('div');
        let p = document.createElement('p');
        //use templet Literals
        p.innerHTML = `<a href=${book.sitelink}><img src="${book.image}" alt ="${book.title} - book cover"></a>`;
        bookdiv.append(p);
        allbooks.append(bookdiv);
    });
  });

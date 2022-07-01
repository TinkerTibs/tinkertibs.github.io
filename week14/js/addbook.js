//loads book based on the title that is entered
function loadBook() {
    //save series name
    var bookSeriesTitle = document.getElementById("bookTitle").value + `series`;
    var findSeries = localStorage.getItem(bookSeriesTitle);
    document.getElementById("bookseries").value = findSeries;
    //save series number
    var bookSeriesNumberTitle = document.getElementById("bookTitle").value + `seriesnumber`;
    var findSeriesNumber = localStorage.getItem(bookSeriesNumberTitle);
    document.getElementById("bookSeriesNumber").value = findSeriesNumber;
    // load author
    var bookAuthorTitle = document.getElementById("bookTitle").value + `author`;
    var findAuthor = localStorage.getItem(bookAuthorTitle);
    document.getElementById("bookAuthor").value = findAuthor;
    // load narrator
    var bookNarratorTitle = document.getElementById("bookTitle").value + `narrator`;
    var findnarrator = localStorage.getItem(bookNarratorTitle);
    document.getElementById("bookNarrator").value = findnarrator;
    //save year owned
    var bookYearTitle = document.getElementById("bookTitle").value + `year`;
    var findYear = localStorage.getItem(bookYearTitle);
    document.getElementById("bookYear").value = findYear;
    //save format owned
    var bookFormatTitle = document.getElementById("bookTitle").value + `format`;
    var findOwned = localStorage.getItem(bookFormatTitle);
    document.getElementById("bookOwned").value = findOwned;
    //save genre
    var bookGenreTitle = document.getElementById("bookTitle").value + `genre`;
    var findGenre = localStorage.getItem(bookGenreTitle);
    document.getElementById("bookGenre").value = findGenre;
    //save rating
    var bookRatingTitle = document.getElementById("bookTitle").value + `rating`;
    var findRating = localStorage.getItem(bookRatingTitle);
    document.getElementById("bookRating").value = findRating;
    //save summary
    var bookSummaryTitle = document.getElementById("bookTitle").value + `summary`;
    var findSummary = localStorage.getItem(bookSummaryTitle);
    document.getElementById("bookSummary").value = findSummary;
}

//saves all inputed book information into local storage
function saveBook() {
    //save series name
    var bookSeriesTitle = document.getElementById("bookTitle").value + `series`;
    var bookseries = document.getElementById("bookseries").value;
    localStorage.setItem(bookSeriesTitle, bookseries);
    //save series number
    var bookSeriesNumberTitle = document.getElementById("bookTitle").value + `seriesnumber`;
    var bookSeriesNumber = document.getElementById("bookSeriesNumber").value;
    localStorage.setItem(bookSeriesNumberTitle, bookSeriesNumber);
    // save author
    var bookAuthorTitle = document.getElementById("bookTitle").value + `author`;
    var bookAuthor = document.getElementById("bookAuthor").value;
    localStorage.setItem(bookAuthorTitle, bookAuthor);
    //save narrator
    var bookNarratorTitle = document.getElementById("bookTitle").value + `narrator`;
    var bookNarrator = document.getElementById("bookNarrator").value;
    localStorage.setItem(bookNarratorTitle, bookNarrator);
    //save year owned
    var bookYearTitle = document.getElementById("bookTitle").value + `year`;
    var bookYear = document.getElementById("bookYear").value;
    localStorage.setItem(bookYearTitle, bookYear);
    //save format owned
    var bookFormatTitle = document.getElementById("bookTitle").value + `format`;
    var bookOwned = document.getElementById("bookOwned").value;
    localStorage.setItem(bookFormatTitle, bookOwned);
    //save genre
    var bookGenreTitle = document.getElementById("bookTitle").value + `genre`;
    var bookGenre = document.getElementById("bookGenre").value;
    localStorage.setItem(bookGenreTitle, bookGenre);
    //save rating
    var bookRatingTitle = document.getElementById("bookTitle").value + `rating`;
    var bookRating = document.getElementById("bookRating").value;
    localStorage.setItem(bookRatingTitle, bookRating);
    //save summary
    var bookSummaryTitle = document.getElementById("bookTitle").value + `summary`;
    var bookSummary = document.getElementById("bookSummary").value;
    localStorage.setItem(bookSummaryTitle, bookSummary);
}

//displays book information from input fields
function displayBook() {
    //display title
    let displayTitle = document.getElementById("bookTitle").value;
    document.getElementById("displayTitle").innerHTML = displayTitle;
    // display series
    var displaySeries = document.getElementById("bookseries").value + ' - ';
    document.getElementById("displaySeries").innerHTML = displaySeries;
    // display series number
    var displaySeriesNumber = document.getElementById("bookSeriesNumber").value;
    document.getElementById("displaySeriesNumber").innerHTML = displaySeriesNumber;
    //display author
    var displayAuthor = 'By ' + document.getElementById("bookAuthor").value;
    document.getElementById("displayAuthor").innerHTML = displayAuthor;
    //display narrator
    var displayNarrator = 'Narrated By ' + document.getElementById("bookNarrator").value;
    document.getElementById("displayNarrator").innerHTML = displayNarrator;
    //display year
    var displayYear = 'Published in ' + document.getElementById("bookYear").value;
    document.getElementById("displayYear").innerHTML = displayYear;
    //display format
    var displayFormat = 'Formats Owned: ' + document.getElementById("bookOwned").value;
    document.getElementById("displayFormat").innerHTML = displayFormat;
    //display genre
    var displayGenre = 'Genre: ' + document.getElementById("bookGenre").value;
    document.getElementById("displayGenre").innerHTML = displayGenre;
    //display rating
    var displayRating = 'Rating: ' + document.getElementById("bookRating").value + ' Stars';
    document.getElementById("displayRating").innerHTML = displayRating;
    //display summary
    var displaySummary = '<b>Summary</b><br><br>' + document.getElementById("bookSummary").value;
    document.getElementById("displaySummary").innerHTML = displaySummary;
}
var lastTampering = document.lastModified;
document.getElementById("output").textContent =
  "Last Updated: " + lastTampering;
var currentYear = new Date();
document.getElementById("classYear").textContent = currentYear.getFullYear();

const links = [
  "<li>Week 1: <a href='/week1/notes.html'>Notes</a></li>",
  "<li>Week 1: <a href='/week1/story_editor.html'>Story Editor</a></li>", 
  "<hr><li>Week 2: <a href='/week2/notes.html'>Notes</a></li>",
  "<li>Week 2: <a href='/week2/groupwork.html'>Group Assignment: Calculator</a></li>",
  "<hr><li>Week 3: <a href='/week3/notes.html'>Notes</a></li>",
  "<li>Week 3: <a href='/week3/exersizes.html'>Examples & Exersizes</a></li>",
  "<li>Week 3: <a href='/week3/groupwork.html'>Group Assignment</a></li>",
  "<hr><li>Week 4: <a href='/week4/notes.html'>Notes</a></li>",
  "<li>Week 4: <a href='/week4/exersizes.html'>Examples & Exersizes</a></li>",
  "<li>Week 4: <a href='/week4/groupwork.html'>Group Assignment: Tic Tac Toe</a></li>",
  "<hr><li>Week 5: <a href='/week5/notes.html'>Notes</a></li>",
  "<li>Week 5: <a href='/week5/groupwork.html'>Group Assignment</a></li>",
  "<hr><li>Week 6: <a href='/week6/challenge.html'>Challenge One: To Do</a></li>",
  "<hr><li>Week 7: <a href='/week7/notes.html'>Notes</a></li>",
  "<li>Week 7: <a href='/week7/test1/newhike.html'>Group Assignment: Test 1</a></li>",
  "<li>Week 7: <a href='/week7/test2/test.html'>Group Assignment: Test 2</a></li>",
  "<li>Week 7: <a href='/week7/test3/test.html'>Group Assignment: Test 3</a></li>"
];
document.getElementById("toclist").innerHTML = links.join("");

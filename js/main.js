var lastTampering = document.lastModified;
document.getElementById("output").textContent = "Last Updated: " + lastTampering;
var currentYear = new Date();
document.getElementById("classYear").textContent = currentYear.getFullYear();



const links = [
   "<li>Week 1: <a href='/week1/notes.html'>Notes </a></li>",
   "<li>Week 1: <a href='/week1/story_editor.html'>Story Editor </a></li>",
   "<li>Week 2: <a href='/week2/notes.html'>Notes </a></li>",
   "<li>Week 2: <a href='/week2/groupwork.html'>Group Assignment </a></li>"
]
document.getElementById("toclist").innerHTML = links.join("");
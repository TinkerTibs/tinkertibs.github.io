var lastTampering = document.lastModified;
document.getElementById("output").textContent = "Last Updated: " + lastTampering;
var currentYear = new Date();
document.getElementById("classYear").textContent = currentYear.getFullYear();



const links = [
   "<li>Week 1: <a href='/weekone/notes.html'>Notes </a></li>",
   "<li>Week 1: <a href='/weekone/story_editor.html'>Story Editor </a></li>",
   "<li>Week 2: <a href='/weektwo/notes.html'>Notes </a></li>"
]
document.getElementById("toclist").innerHTML = links.join("");
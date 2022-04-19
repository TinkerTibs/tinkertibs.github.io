var lastTampering = document.lastModified;
document.getElementById("output").textContent = "Last Updated: " + lastTampering;
var currentYear = new Date();
document.getElementById("classYear").textContent = currentYear.getFullYear();



const links = [
   "<li>Week 1: <a href='weekone/exampleone.html'>Notes </a></li>",
   "<li>Week 1: <a href='weekone/exampleone.html'>Notes </a></li>",
   "<li>Week 1: <a href='weekone/exampleone.html'>Notes </a></li>"
]
document.getElementById("toclist").innerHTML = links.join("");
function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

var lastTampering = document.lastModified;
document.getElementById("output").textContent = "Last Updated: " + lastTampering;
var currentYear = new Date();
document.getElementById("classYear").textContent = currentYear.getFullYear();
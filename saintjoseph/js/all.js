const hamButton = document.querySelector('.colapseMenu');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{mainMenu.classList.toggle('responsive')}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        mainMenu.classList.remove('responsive');
    }
}

var lastTampering = document.lastModified;
document.getElementById("lastDate").textContent = "Last Updated: " + lastTampering;

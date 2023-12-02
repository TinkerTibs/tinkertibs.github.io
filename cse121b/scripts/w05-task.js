/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {

        // 1. Create article element
        const article = document.createElement('article'); 

        // 2. Create h3 element
        const h3Element = document.createElement('h3'); 
        h3Element.textContent = temple.templeName;  

        // 3. Create image element
        const imageElement = document.createElement('img');
        imageElement.src = temple.imageUrl;
        imageElement.alt = temple.location;

        // 4. Append h3 and image
        article.appendChild(h3Element);  
        article.appendChild(imageElement);

        // 5. Append article
        templesElement.appendChild(article); 
    })
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
      }
};

/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";
};

/* sortBy Function */

const sortBy = () => {

    reset();

    const filter = document.querySelector("#sortBy").value; 

    switch (filter) {
        case "utah":
            const utah = templeList.filter(temple => temple.location.includes('Utah'));
            displayTemples(utah);
            break;
        case "notutah":
            const nonutah = templeList.filter(temple => !temple.location.includes('Utah'));
            displayTemples(nonutah);
            break;
        case "older":
            const older = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(older);
            break;
        case "all":
            displayTemples(templeList);
            break;
    }

};

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

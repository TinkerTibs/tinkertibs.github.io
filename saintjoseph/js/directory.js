// set the JSON source URL
const requestURL = "json/businesses.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const eachBusiness = jsonObject['businesses'];
    //select output location
    const outputBusinesses = document.querySelector('#businesses');

    eachBusiness.forEach(businesses => {
        let section = document.createElement('section');
        let logoimg = document.createElement('img');
        let object = document.createElement('object');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        //use templet Literals
        logoimg.setAttribute('src', businesses.logo);
        logoimg.setAttribute('alt', `Logo for ${businesses.name}`)
        h2.innerHTML = `${businesses.name}`;
        p.innerHTML = `${businesses.contact} <br> ${businesses.weblink}`;
      
        object.append(logoimg);
        div.append(h2);
        div.append(p);
        section.append(object);
        section.append(div);
        outputBusinesses.append(section);
    });
  });

  function displayGrid() {
    document.getElementById("businesses").classList.add("directoryGrid");
    document.getElementById("listIcon").classList.remove("activeIcon");
    document.getElementById("gridIcon").classList.add("activeIcon");
  }
  function displayList() {
    document.getElementById("businesses").classList.remove("directoryGrid");
    document.getElementById("listIcon").classList.add("activeIcon");
    document.getElementById("gridIcon").classList.remove("activeIcon");
  }
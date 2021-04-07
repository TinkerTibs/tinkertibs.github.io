// set the JSON source URL
const requestURL = "json/businesses.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const eachBusiness = jsonObject['businesses'];
    //select output location
    const ads = document.querySelector('#busAds');

    const busfilter = eachBusiness.filter(x => x.ad == "yes");

    busfilter.forEach(ad => {
        let section = document.createElement('section');
        let logoimg = document.createElement('img');
        let object = document.createElement('object');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        //use templet Literals
        logoimg.setAttribute('src', ad.logo);
        logoimg.setAttribute('alt', `Logo for ${ad.name}`)
        h2.innerHTML = `${ad.name}`;
        p.innerHTML = `${ad.contact} <br> ${ad.weblink}`;
      
        object.append(logoimg);
        div.append(h2);
        div.append(p);
        section.append(object);
        section.append(div);
        ads.append(section);
    });
  });
// set the JSON source URL
const url = "json/events.json"
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const eachEvent = jsonObject['events'];
    //select output location
    const outputevents = document.querySelector('#homeEvents');

    const eventfilter = eachEvent.filter(x => x.home == "yes");

    eventfilter.forEach(events => {
        let section = document.createElement('section');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        //use templet Literals

        h3.innerHTML = `${events.name}`;
        p.innerHTML = `${events.overview}`;
      
        section.append(h3);
        section.append(p);
        outputevents.append(section);
    });
  });
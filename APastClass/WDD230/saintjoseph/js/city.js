// set the JSON source URL
const requestURL = "json/events.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const eachEvent = jsonObject['events'];
    //select output location
    const outputevents = document.querySelector('#events');

    eachEvent.forEach(events => {
        let section = document.createElement('section');
        let img = document.createElement('img');
        let object = document.createElement('object');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        //use templet Literals
        img.setAttribute('src', events.image);
        img.setAttribute('alt', `Image of ${events.name}`)
        h2.innerHTML = `${events.name}`;
        p.innerHTML = `${events.overview}</p><p><strong>Suggested Duration:</strong><br>${events.duration}</p><p><strong>Hours of Opporation:</strong><br>${events.hours}</p><p><strong>Address:</strong><br>${events.address}`;
      
        object.append(img);
        div.append(h2);
        div.append(p);
        section.append(object);
        section.append(div);
        outputevents.append(section);
    });
  });
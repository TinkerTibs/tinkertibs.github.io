const apiOnecallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.82437152956331&lon=-94.80195999271336&APPID&APPID=c1dcfb6c8efcda936d6f6f66d54711d8&units=imperial";

fetch(apiOnecallURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);


    document.getElementById('currentCond').textContent = jsObject.current.weather[0].description;
    document.getElementById('currentTemp').textContent = jsObject.current.temp;
    document.getElementById('currentHum').textContent = jsObject.current.humidity;
    document.getElementById('currentWind').textContent = jsObject.current.wind_speed;
    document.getElementById('currentFeel').textContent = jsObject.current.feels_like;



    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day = 1; day <= 3; day++) {
      var date = new Date();
      let forecastDate = date.getDay() + day;
      document.getElementById(`dayWeek${day}`).textContent = dayOfWeek[forecastDate];

      const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.daily[forecastDate].weather[0].icon + '@2x.png';
      const desc = jsObject.daily[forecastDate].weather[0].description;
      document.getElementById(`icon${day}`).setAttribute('src', imagesrc);
      document.getElementById(`icon${day}`).setAttribute('alt', desc);

      document.getElementById(`forecast${day}`).textContent = Math.round(jsObject.daily[day].temp.day);
    } 
});
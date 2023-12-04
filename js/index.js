const input = document.getElementById("input");
const ipAddressField =document.querySelector(".ipAddressField");
const timezoneInput = document.querySelector('.timezoneInput')
const countryLocationInput = document.querySelector('.locationInput')
const ispInput = document.querySelector('.ispInput')
var map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  var marker = L.marker([51.5, -0.09]).addTo(map);

  window.addEventListener("load", getData);

async function getData() {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=at_BQXBZa68xyd3RDr3jO5HPvZoFeqwc&ipAddress=${input.value}`
      );
      const dataJSON = await response.json();
      console.log(dataJSON)
      let ipAddress = dataJSON.ip;
      let timeZone=dataJSON.location.timezone;
      let countryLocation = dataJSON.location.country;
      let isp = dataJSON.isp;
       console.log(dataJSON)
      console.log(countryLocation)
      ipAddressField.innerHTML = ipAddress;
      timezoneInput.innerHTML = ` UTC ${timeZone}`
      countryLocationInput.innerHTML = `${countryLocation}`
      ispInput.innerHTML = isp

    } catch (error) {
        console.log(error)

        
    }
  }
  
  
 
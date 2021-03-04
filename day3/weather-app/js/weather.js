// API url api.openweathermap.org/data/2.5/weather?q={city name}&appid=ae9b20fe49863588f2d13125d0bfde0d
const cityTextBox = document.getElementById('cityTextBox')
const btnCity = document.getElementById('btnCity')
const infoUL = document.getElementById('infoUL')
let city = cityTextBox.value

btnCity.addEventListener('click', function () {

  getAllInfo()

})

function getAllInfo() {
  let city = cityTextBox.value
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae9b20fe49863588f2d13125d0bfde0d&units=imperial`
  fetch(weatherURL)
    .then((response) => {
      return response.json()
    }).then((info) => {
      console.log(info)
      let infoItems =
                    ` <div id='insideContainer'
                      <h1 id='header'>${city}</h1>
                      <li id="textItem">Temperature: ${info.main.temp}°F</li>
                      <li id="textItem">Maximum Temperature: ${info.main.temp_max}°F</li>
                      <li id="textItem">Minimun Temperature: ${info.main.temp_min}°F</li>
                      <li id="textItem">Pressure: ${info.main.pressure} mbar</li>
                      </div>
                    `
      infoUL.innerHTML = infoItems
    })

}


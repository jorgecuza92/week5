//const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=ae9b20fe49863588f2d13125d0bfde0d'

const tempHeading = document.getElementById('tempHeading')
const humidityHeading = document.getElementById('humidityHeading')
const getWeatherButton = document.getElementById('getWeatherButton')
const cityTextBox = document.getElementById('cityTextBox')

function getWeatherURLByCity(city) {
  return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae9b20fe49863588f2d13125d0bfde0d`
}

getWeatherButton.addEventListener('click', function() {
  const city = cityTextBox.value
  const weatherURL = getWeatherURLByCity(city)
  console.log(weatherURL)


  let request = new XMLHttpRequest()
  request.addEventListener('load', function() {

    let result = JSON.parse(this.responseText)
    let weatherMessage = `temp: ${result.main.temp}<br>
                          humidity: ${result.main.humidity}`
    tempHeading.innerHTML = weatherMessage
    humidityHeading.innerHTML = result.main.humidity
    


  })
  request.open('GET', weatherURL)
  request.send()
})



// let request = new XMLHttpRequest()
// // load means fire function when response is loaded
// request.addEventListener('load', function() {

//   // parses response text into JS object
//   //only works if response text is VALID JSON writing.
//   let result = JSON.parse(this.responseText)
//   console.log(result)
//   tempHeading.innerHTML = result.timezone
// })

// request.open('GET', weatherURL)
// request.send()
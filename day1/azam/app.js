// http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=ef0fd9866ca027e0dca474cee84c53be&units=imperial

const cityTextBox = document.getElementById("cityTextBox")
const tempHeading = document.getElementById("tempHeading")
const humidityHeading = document.getElementById("humidityHeading")
const getWeatherButton = document.getElementById("getWeatherButton")

//const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=ef0fd9866ca027e0dca474cee84c53be&units=imperial'

function getWeatherURLByCity(city) {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ef0fd9866ca027e0dca474cee84c53be&units=imperial`
}

getWeatherButton.addEventListener('click', function() {
    
    const city = cityTextBox.value 
    const weatherURL = getWeatherURLByCity(city)
    console.log(weatherURL)

    let request = new XMLHttpRequest() 
    request.addEventListener('load', function() {

        let result = JSON.parse(this.responseText)
        let weatherMessage = `Temp: ${result.main.temp}, Humidity: ${result.main.humidity}`
        
        tempHeading.innerHTML = result.main.temp 
        humidityHeading.innerHTML = result.main.humidity 

    })

    request.open('GET', weatherURL)
    request.send() 
})

/*
let request = new XMLHttpRequest() 
// load means fire the function when the response is loaded 
request.addEventListener('load', function() {
    console.log(this)
    console.log(this.responseText)

    // parses the response text into a JS object 
    // Only works if response text is VALID JSON string 
    let result = JSON.parse(this.responseText)

    console.log(result)
    //const temp = this.responseText.main.temp

    tempHeading.innerHTML = result.main.temp 
    humidityHeading.innerHTML = result.main.humidity 
})


request.open('GET',weatherURL)
request.send()
*/
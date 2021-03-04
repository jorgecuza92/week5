

const weatherDIV = document.getElementById("weatherDIV")
const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=ef0fd9866ca027e0dca474cee84c53be&units=imperial'

// async/await 
async function getWeather(onWeatherLoaded) {

    let response = await fetch(weatherURL)
    let result = await response.json()
    onWeatherLoaded(result)

    /*
    fetch(weatherURL)
        .then((response) => response.json())
        .then((result) => {
            onWeatherLoaded(result)
    }) */
}

function showUserLocation() {

    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position)
        }, function() {
            console.log("Error to locate position!")
        })

    } else {
        console.log("Geo location not available!")
    }
}

showUserLocation() 


function displayWeather(weather) {
    const weatherItem = `
                <h1>Temperature: ${weather.main.temp}</h1>
                <h3>Humidity: ${weather.main.humidity} </h3>
            `
    weatherDIV.innerHTML = weatherItem
}

function greet(a) {
    console.log(a)
}

//getWeather(greet)

/*
getWeather(function(weather) {
    displayWeather(weather)
}) */ 

//getWeather(displayWeather)



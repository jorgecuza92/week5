// http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa

// fetch all movies using async request 

const moviesUL = document.getElementById("moviesUL")

// Async request 
let request = new XMLHttpRequest() 

request.addEventListener("load", function() {
    console.log(this.responseText)

    let result = JSON.parse(this.responseText)

  let movieItems = result.Search.map((movie) => {
        return `<li>${movie.Title}</li>`
    })

    moviesUL.innerHTML = movieItems.join("")

    //console.log(result)

})

request.open('GET', 'http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
request.send() 


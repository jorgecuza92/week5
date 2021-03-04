// http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa

// fetch ('GET') all movies using async request

const moviesUL = document.getElementById('moviesUL')

// Async request
let request = new XMLHttpRequest()

request.addEventListener('load', function() {
  console.log(this.responseText) // text of response is now on console to preview url
  let result = JSON.parse(this.responseText)
  console.log(result)

  let movieItems = result.Search.map((movie) => {
    return `<li>${movie.Title}</li>`
  })
  moviesUL.innerHTML = movieItems
})

request.open('GET', 'http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
request.send()

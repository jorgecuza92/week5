const jokerURL = 'http://www.omdbapi.com/?s=joker&apikey=c68122f7'
const movieDIV = document.getElementById('movieDIV')
const extraDIV = document.getElementById('extraDIV')

function displayMovies() {
let request = new XMLHttpRequest()
request.addEventListener('load', function() {
  // console.log(this.responseText)
  const result = JSON.parse(this.responseText)
  // console.log(result)
  let movieFacts = result.Search.map((movie) => {
    const movieFacts = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=c68122f7`
                return `<div id="movieFacts">
                          <img src="${movie.Poster}" />
                          <!--<a href="${movieFacts}" /> -->
                          <p> ${movie.Title}</p></a>
                          <p>Year: ${movie.Year}</p>
                          <p>imdbID: ${movie.imdbID}</p>
                          <button onclick=movieDetails('${movie.imdbID}')>Movie Details</button>
                        </div>
                        `
  })
 
  movieDIV.innerHTML = movieFacts.join("")


})

request.open('GET', jokerURL)
request.send()
}

function movieDetails(imdbID) {
  console.log(imdbID)
  let url = `http://www.omdbapi.com/?i=${imdbID}&apikey=c68122f7`
  let request = new XMLHttpRequest()
  request.open('GET', url)
  request.send()
  request.addEventListener('load', function() {
    let movie = JSON.parse(this.responseText)
    let extraFacts = `
    <img src="${movie.Poster}" id="enlargedMoviePoster"/>
    <p>${movie.Title}</p>
    <p>${movie.Year}</p>
    <p>${movie.Rated}</p>
    <p>${movie.Director}</p>
    <p>${movie.Runtime}</p>
    `
    extraDIV.innerHTML = extraFacts
  })
}

displayMovies()


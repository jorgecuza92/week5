const movieTextBox = document.getElementById('movieTextBox')
const btnAddMovie = document.getElementById('btnAddMovie')
const moviesUL = document.getElementById('moviesUL')
console.log(db)

btnAddMovie.addEventListener('click', function() {
  const movie = movieTextBox.value 
  
  db.collection('movies')
    .add({
      movieTitle: movie
    }).then(function(docRef) {
      getAllMovies()
    })


})

function getAllMovies() {

  moviesUL.innerHTML = ''

  db.collection('movies')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let data = doc.data()
        let movieItem = `<li>${data.movieTitle}</li>`
        moviesUL.insertAdjacentHTML('beforeend', movieItem)
      })
    })

}
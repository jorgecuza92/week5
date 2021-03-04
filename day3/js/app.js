
// PROMISES 

// creating a promise
/*
let promise = new Promise(function(resolve, reject) {
    resolve([1,2,3,4,5])
    //reject("Opps we ran out of burgers!") 
})

promise.then(function(numbers) {
    console.log(numbers)
    console.log("Promise has been resolved")
    return numbers 
}).then(function(numbers) {
    return numbers.map((no) => no * 2)
})
.then(function(doubleNumbers) {
    console.log(doubleNumbers)
})
.catch(function(error) {
    console.log(error)
}) */

// XMLHTTPRequest 
/*
let request = new XMLHttpRequest() 
request.addEventListener('load', function() {
    console.log(this.responseText)
})

request.open('GET', 'http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
request.send()
*/

// FETCH 
/*
fetch('http://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
.then((response) => {
    return response.json()
}).then((json) => {
    console.log(json.Search)
}) */

const postsUL = document.getElementById("postsUL")

function getAllPosts(onPostLoaded) {

    // By default HTTP request is always a GET when using fetch 
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json()
        }).then((posts) => {
            onPostLoaded(posts)
        })
}

getAllPosts(function(posts) {
    console.log(posts)
}) 

// POST 
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
        title: 'Hello World', 
        body: 'Hello World Body', 
        userId: 100
    })
}).then(response => {
    return response.json() 
}).then(result => {
    console.log(result)
})


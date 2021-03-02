
// POST - CREATE 
// GET - GET data from the server 

const titleTextBox = document.getElementById("titleTextBox")
const userIdTextBox = document.getElementById("userIdTextBox")
const bodyTextBox = document.getElementById("bodyTextBox")
const addPostButton = document.getElementById("addPostButton") 

addPostButton.addEventListener("click", function() {

    const title = titleTextBox.value 
    const userId = userIdTextBox.value
    const body = bodyTextBox.value 

    const requestParams = {
        title: title, 
        userId: parseInt(userId), 
        body: body 
    }

    let request = new XMLHttpRequest() 
    request.addEventListener("load", function() {
        console.log(this.responseText)
    })

    request.open("POST","https://jsonplaceholder.typicode.com/posts")
    console.log(requestParams)
    console.log(JSON.stringify(requestParams))

    // set headers 
    request.setRequestHeader('Content-Type', 'application/json')

    // send the request and passes the post as a string 
    request.send(JSON.stringify(requestParams)) 

})
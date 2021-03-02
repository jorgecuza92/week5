
// POST i.e. creating an email account //
// https://jsonplaceholder.typicode.com/posts use postman to see if server side is running.


const titleTextBox = document.getElementById('titleTextBox')
const userIdTextBox = document.getElementById('userIdTextBox')
const bodyTextBox = document.getElementById('bodyTextBox')
const addPostButton = document.getElementById('addPostButton')


addPostButton.addEventListener('click', function() {

  const title = titleTextBox.value 
  const userId = userIdTextBox.value 
  const body = bodyTextBox.value 

  const requestParams = {
    title: title,
    userId: parseInt(userId),
    body: body
  }

  let request = new XMLHttpRequest()
  request.addEventListener('load', function() {
    console.log(this.responseText)
  })

  request.open('POST', 'https://jsonplaceholder.typicode.com/posts')
  console.log(requestParams)
  console.log(JSON.stringify(requestParams)) // converts OBJECT to STRING (oppisite of JSON.parse())
  
  request.setRequestHeader('Content-Type', 'application/json') // set headers

  request.send(JSON.stringify(requestParams)) // send the request and passes the post as a STRING

})
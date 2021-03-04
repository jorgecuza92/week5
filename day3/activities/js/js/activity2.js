// https://troubled-peaceful-hell.glitch.me/orders

// GET orders using fetch()
const displayOrdersUL = document.getElementById('displayOrdersUL')

let result = []

function getAllOrders(onOrdersLoaded) {
  fetch('https://troubled-peaceful-hell.glitch.me/orders')
    .then((response) => {
      return response.json
    }).then((posts) => {
      console.log(posts)
      onOrdersLoaded(posts)
    })
}

getAllOrders(function(posts) {
  console.log(posts)
})

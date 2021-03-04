
const emailTextBox = document.getElementById('emailTextBox')
const typeTextBox = document.getElementById('typeTextBox')
const sizeTextBox = document.getElementById('sizeTextBox')
const priceTextBox = document.getElementById('priceTextBox')
const btnPlaceOrder = document.getElementById('btnPlaceOrder')
const ordersUL = document.getElementById('ordersUL')
const serverURL = 'https://troubled-peaceful-hell.glitch.me/orders'

const searchTextBox = document.getElementById('searchTextBox')
const btnSearch = document.getElementById('btnSearch')
const searchOrderUL = document.getElementById('searchOrderUL')

const btnDelete = document.getElementById('btnDelete')

// Post- create order //
btnPlaceOrder.addEventListener('click', function() {
  const email = emailTextBox.value
  const type = typeTextBox.value
  const size = sizeTextBox.value
  const price = priceTextBox.value

  const requestParamaters = {
    email: email, 
    type: type,
    size: size,
    price: parseFloat(price)

  }

  let request = new XMLHttpRequest()
  request.addEventListener('load', function() {
    console.log(this.responseText)
  })
  request.open('POST', serverURL)
  // console.log(requestParamaters)
  // console.log(JSON.stringify(requestParamaters))

  // set headers
  request.setRequestHeader('Content-Type', 'application/json')
  request.send(JSON.stringify(requestParamaters))
})

// FETCH or GET orders //
function fetchOrders(onOrdersLoaded) {
  let request = new XMLHttpRequest()

  request.addEventListener('load', function() {
    let orders = JSON.parse(this.responseText)
    onOrdersLoaded(orders)

    })
    

  request.open('GET', serverURL)
  request.send()

}

function displayOrders(orders) {
  ordersUL.innerHTML = ''
  const orderItems = orders.map((order) => {
    return `<li>
              <b>${order.email}</b>
              <b>${order.type}</b>
              <b>${order.size}</b>
              <b>${order.price}</b>
            </li>
    `
})

    ordersUL.innerHTML = orderItems.join('')
}



fetchOrders(function(orders) {
  ordersUL.innerHTML = ''
  displayOrders(orders)
}) 

// search and GET order via email
btnSearch.addEventListener('click', function() {
  ordersUL.innerHTML = ''
  let emailAddress = searchTextBox.value 
  let request = new XMLHttpRequest()
  request.addEventListener('load', function() {
    let searchOrder = JSON.parse(this.responseText)
    let searchItems = `<li>
                        <b>${searchOrder.email}</b>
                        <b>${searchOrder.type}</b>
                        <b>${searchOrder.size}</b>
                        <b>${searchOrder.price}</b>
                      </li>

`
    searchOrderUL.innerHTML = searchItems
  })

  request.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/${emailAddress}`)
  request.send()
})

btnDelete.addEventListener('click', function() {
  searchOrderUL.innerHTML = ' '
  let emailAddress = searchTextBox.value 
  let request = new XMLHttpRequest()
  request.addEventListener('load', function() {
    displayOrders(orders)
    
  })
  request.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${emailAddress}`)
  request.send()
})
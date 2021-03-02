// STUDY AZAMS EXAMPLE! //
const titleTextBox = document.getElementById('titleTextBox')
const symbolTextBox = document.getElementById('symbolTextBox')
const priceTextBox = document.getElementById('priceTextBox')
const quantityTextBox = document.getElementById('quantityTextBox')
const addPostButton = document.getElementById('addPostButton')
const stocksUL = document.getElementById('stocksUL')

addPostButton.addEventListener('click', function() {
  const title = titleTextBox.value 
  const symbol = symbolTextBox.value 
  const price = priceTextBox.value
  const quantity = quantityTextBox.value 

  const requestParams = {
    title: title,
    symbol: symbol,
    price: parseFloat(price),
    quantity: parseInt(quantity),
  }

  let request = new XMLHttpRequest()
  request.addEventListener('load', function() {
    console.log(this.responseText)

    // let stocks = JSON.parse(this.responseText)

    // const stockItems = stocks.map((stock) => {
    //   return `<li>
    //             <b>${stock.title}</b>
    //             <b>${stock.symbol}</b>
    //             <b>${stock.price}</b>
    //             <b>${stock.quantity}</b>
    //             <b>${stock.quantity * stock.price}</b>
    //           </li>
    //          `

    //   stocksUL.innerHTML = stockItems.join("")
    // })
  })

  request.open('POST', 'https://endurable-bead-polo.glitch.me/stocks')
  console.log(requestParams)
  console.log(JSON.stringify(requestParams))

  request.setRequestHeader('Content-Type', 'application/json')

  request.send(JSON.stringify(requestParams))

})

// STUDY AZAMS EXAMPLE! //
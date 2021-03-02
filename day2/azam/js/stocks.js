
const stocksUL = document.getElementById("stocksUL")
const addStockButton = document.getElementById("addStockButton")

addStockButton.addEventListener("click", function() {

    // collect values from the textboxes 
    addStock("XYZ Company", "XYZ", 999, 345, function(){
        fetchStocks(displayStocks)
    })
})

function addStock(title, symbol, price, quantity, onStockAdded) {

    let request = new XMLHttpRequest() 

    request.addEventListener("load", function() {
        if(this.status == 200) {
            onStockAdded() 
        }
    })

    let requestParams = {
        title: title, 
        symbol: symbol, 
        price: parseFloat(price), 
        quantity: parseInt(quantity) 
    }

    request.open('POST', 'https://endurable-bead-polo.glitch.me/stocks')
    request.setRequestHeader('Content-Type','application/json')
    request.send(JSON.stringify(requestParams))

}


function fetchStocks(onStocksLoaded) {

    let request = new XMLHttpRequest()

    request.addEventListener("load", function () {

        let stocks = JSON.parse(this.responseText)
        onStocksLoaded(stocks)
    })

    request.open('GET', 'https://endurable-bead-polo.glitch.me/stocks')
    request.send()
}

function displayStocksOnConsole(stocks) {
    console.log(stocks)
}

function displayStocks(stocks) {
    
    stocksUL.innerHTML = ""

    const stockItems = stocks.map((stock) => {
        return `<li>
                    <b>${stock.title}</b>
                    <p>${stock.symbol}</p>
                    <p>$${stock.price}</p>
                    <p>${stock.quantity}</p>
                    <p>Amount:$ ${stock.quantity * stock.price}</p>
                </li>
        `
    })

    stocksUL.innerHTML = stockItems.join("")
}

// 1 
fetchStocks(function(stocks) {
    displayStocks(stocks)
}) 

// 1  
fetchStocks(displayStocks)

// 2
fetchStocks(function(stocks) {
    displayStocksOnConsole(stocks)
})

// 2 
fetchStocks(displayStocksOnConsole)


fetchStocks(function(stocks) {
    console.log(stocks)
})
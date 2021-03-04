
const emailTextBox = document.getElementById("emailTextBox")
const coffeeTypeTextBox = document.getElementById("coffeeTypeTextBox")
const sizeTextBox = document.getElementById("sizeTextBox")
const priceTextBox = document.getElementById("priceTextBox")
const orderCoffeeButton = document.getElementById("orderCoffeeButton")

orderCoffeeButton.addEventListener('click', () => {

    const order = {
        email: emailTextBox.value, 
        type: coffeeTypeTextBox.value, 
        size: sizeTextBox.value, 
        price: parseFloat(priceTextBox.value) 
    }

    submitOrder(order)

})

function submitOrder(order) {

    fetch("https://troubled-peaceful-hell.glitch.me/orders", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(order)
    }).then(response => response.json())
    .then(result => {
        // meaning coffee order has been placed 
        if(result.success) {
            // reload all coffee orders 
            // display them on the screen 
        }
    })
}

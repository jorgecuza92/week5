// POST
fetch('https://troubled-peaceful-hell.glitch.me/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'jorge@gmail.com',
    type: 'black coffee',
    size: 'small',
    price: 1
  })
}).then(response => {
  return response.json()

}).then(result => {
  console.log(result)
})
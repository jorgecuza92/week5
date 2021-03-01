// const catURL = 'https://cat-fact.herokuapp.com/facts'
// const catHeading = document.getElementById('catHeading')




// let request = new XMLHttpRequest()
// request.addEventListener('load', function() {
//   const catItems = catURL.map(function(cat) {
//     let result = JSON.parse(this.cat)
//     let message = `${result.text}`
//     catHeading.innerHTML = message 
//   })
// })
//   request.open('GET', catURL)
//   request.send()
// // function getCatFacts()


const catFactsURL = 'https://cat-fact.herokuapp.com/facts'
const catFactsUL = document.getElementById('catFactsUL')

let request = new XMLHttpRequest()
request.addEventListener('load', function() {
  console.log(this.responseText)

  let catFacts = JSON.parse(this.responseText)
  let catFactItems = catFacts.map((fact) => {
    return `<li>
              ${fact.text} - ${fact.createdAt}
            </li>`
    
  })
  catFactsUL.innerHTML = catFactItems.join("")
  console.log(catFacts)
})


request.open('GET', catFactsURL)
request.send()
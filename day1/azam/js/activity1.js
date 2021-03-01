

const catFactsUL = document.getElementById("catFactsUL")

const catFactsURL = 'https://cat-fact.herokuapp.com/facts'

let request = new XMLHttpRequest() 
request.addEventListener('load', function() {
    
    console.log(this.responseText)

    // allows us to get the object based on the text/string 
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
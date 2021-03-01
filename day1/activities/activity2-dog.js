const dogURL = 'https://dog.ceo/api/breeds/image/random'
const btnRandomDog = document.getElementById('btnRandomDog')

btnRandomDog.addEventListener('click', function() {
  let request = new XMLHttpRequest()
  request.addEventListener('load', function() {
    const dogPhotoResponse = JSON.parse(this.responseText)
    const dogIMG = `<img src="${dogPhotoResponse.message}`
    dogPic.innerHTML = dogIMG
  })

  request.open('GET', dogURL)
  request.send()
})

























// let request = new XMLHttpRequest()
// request.addEventListener('load', function() {
//   console.log(this.responseText)
//   btnRandomDog.addEventListener('click', function() {
    
//   })
  // let dogPics = JSON.parse(this.responseText)
  // let dogPicsURL = dogPics.message 
  // let message = `<img src="${dogPicsURL}">`
  // dogPic.innerHTML = message


// })


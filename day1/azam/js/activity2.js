
const btnRandomPhoto = document.getElementById("btnRandomPhoto")
const photoDIV = document.getElementById("photoDIV")

btnRandomPhoto.addEventListener('click', function() {

    let request = new XMLHttpRequest() 

    request.addEventListener('load', function(){
        console.log(this.responseText)

        const dogPhotoResponse = JSON.parse(this.responseText)

        const dogIMG = `<img src="${dogPhotoResponse.message}" />`

        photoDIV.innerHTML = dogIMG
    })


    request.open('GET', 'https://dog.ceo/api/breeds/image/random')
    request.send()

})

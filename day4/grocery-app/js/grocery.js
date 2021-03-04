const storeNameTextBox = document.getElementById('storeNameTextBox')
const addressTextBox = document.getElementById('addressTextBox')
const btnSubmit = document.getElementById('btnSubmit')

const searchStoreTextBox = document.getElementById('searchStoreTextBox')
const btnSearchStore = document.getElementById('btnSearchStore')
const displayStoreInfoUL = document.getElementById('displayStoreInfoUL')

btnSubmit.addEventListener('click', function () {


  const store = storeNameTextBox.value
  const address = addressTextBox.value

  db.collection('stores')
    .add({
      name: store,
      address: address
    }).then(function (docRef) {
      getAllStores()
    })

  storeNameTextBox.value = ''
  addressTextBox.value = ''

})



function getAllStores() {

  displayStoreInfoUL.innerHTML = ''

  db.collection('stores')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc)
        console.log(doc.id)
        let data = doc.data()
        let groceryStore = `<li>
                                <h2>${data.name}</h2>
                                <h6>${data.address}</h6>
                                <button onclick="deleteStore('${doc.id}')">Delete Store</button>
                           </li>`

        displayStoreInfoUL.insertAdjacentHTML('beforeend', groceryStore)

      })

    })


}

function deleteStore(documentId) {
  db.collection("stores")
        .doc(documentId)
        .delete()
        .then(() => {
            getAllStores()
        })
}

getAllStores()
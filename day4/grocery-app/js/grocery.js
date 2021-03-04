const stores = document.getElementById('stores')
const nameTextBox = document.getElementById('nameTextBox')
const addressTextBox = document.getElementById('addressTextBox')
const groceryItemTextBox = document.getElementById('groceryItemTextBox')
const btnSubmit = document.getElementById('btnSubmit')
const infoUL = document.getElementById('infoUL')

btnSubmit.addEventListener('click', function() {
  
  const store = stores.value
  const name = nameTextBox.value 
  const address = addressTextBox.value 
  const items = groceryItemTextBox.value 

  // add function automatically creates a unique id for each item
  db.collection('info')
    .add({
      store: store,
      name: name,
      address: address,
      items: items
    }).then(function(docRef) {
        getAllInfo()
    })
  
})


function deleteInfo(documentId) {
  db.collection('info')
    .doc(documentId)
    .delete()
    .then(() => {
      getAllInfo()
    })
}


function getAllInfo() {
  // clear the contents of infoUL
  infoUL.innerHTML = ''

  db.collection('info')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id)
        let data = doc.data()
        let groceryItems = `
            <li>
              <label>${data.items}</label><button onclick="deleteInfo('${doc.id}')">delete</button>
            </li>
        `
        
        infoUL.insertAdjacentHTML('beforeend', groceryItems)

      })
    })
}

getAllInfo()
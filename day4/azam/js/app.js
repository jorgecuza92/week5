
const taskNameTextBox = document.getElementById("taskNameTextBox")
const taskPriorityTextBox = document.getElementById("taskPriorityTextBox")
const addTaskButton = document.getElementById("addTaskButton")
const tasksUL = document.getElementById("tasksUL")

addTaskButton.addEventListener("click", function() {

    const taskName = taskNameTextBox.value 
    const priority = taskPriorityTextBox.value 
    
    // add function automatically creates a 
    // unique document id for each inserted document 
    db.collection("tasks")
        .add({
            name: taskName, 
            priority: priority
    }).then(function(docRef) {
        getAllTasks() 
    })
})


function deleteTask(documentId) {
    db.collection("tasks")
        .doc(documentId) // get document with the documentId 
        .delete() // delete the document 
        .then(() => { // fired after the document has been deleted  
            // get all documents so the deleted document will not show up since it has been deleted 
            getAllTasks()  
        })
}

function getAllTasks() {

    // clear the contents of the task UL 
    tasksUL.innerHTML = ""

    db.collection("tasks")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                //console.log(doc.id)
                let data = doc.data()
                let taskItem = `<li>
                    <label>${data.name}</label>
                    <button onclick="deleteTask('${doc.id}')">Delete</button>
                </li>`
                tasksUL.insertAdjacentHTML('beforeend', taskItem)
            })
        })
}

getAllTasks() 


const taskNameTextBox = document.getElementById('taskNameTextBox')
const taskPriorityTextBox = document.getElementById('taskPriorityTextBox')
const tasksUL = document.getElementById('tasksUL')
const addTaskButton = document.getElementById('addTaskButton')

addTaskButton.addEventListener("click", function() {

  const taskName = taskNameTextBox.value 
  const taskPriority = taskPriorityTextBox.value 
  // db.collection('tasks').set({
  //   name: taskName
  // })
  // addfunction automatically creates a unique id for each inserted document
  db.collection('tasks')
    .add({
      name: taskName,
      priority: taskPriority
    }).then(function(docRef) {
      getAllTasks()
    })

})

function getAllTasks() {
  // clear contents of UL each time
  tasksUL.innerHTML = ''

  db.collection('tasks')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let data = doc.data()
        let taskItem = `<li>${data.name}</li>`

        tasksUL.insertAdjacentHTML('beforeend', taskItem)
      })
    })
}

getAllTasks()
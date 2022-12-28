let tasks = [
    {
        title: "first",
        date: "12/12/12",
        completed: false,   
        id: 0,
    }
]

// tasks = JSON.parse(localStorage.getItem("tasks"))

function taskForm(){
    document.getElementById("todoList").innerHTML = ""
    for (task of tasks){

        let taskFormat =
            `
                <div class="todo">
        
                    <div class="textDate">
                        <h3 id="${task.completed}">${task.title}</h3>
                        <p id="${task.completed}">${task.date}</p>
                    </div>
        
                    <div class="icons">
                        <div id="editTodo" onclick="editTask(${task.id})" class="edit"><img src="/edit.svg" alt=""></div>
                        <div id="removeBtn" onclick="deleteTask(${task.id})" class="delete"><img src="/trash.svg" alt=""></div>
                        <div ondblclick="undoTask(${task.id})" id="doneTask" onclick="doneTask(${task.id})" class="done"><img src="/trash-true.svg" alt=""></div>
                    </div>
                </div>
            `
        document.getElementById("todoList").innerHTML += taskFormat

    }
}

taskForm()

function addTask(){
    let newTask = {
        title: document.getElementById("todoInput").value,
        date: new Date().toLocaleString(),
        completed: false,   
        id: task.id + 1,
    }
    tasks.push(newTask)
    localSt()
    taskForm()
}

function editTask(taskId){
    if (tasks[taskId].completed == true){
        alert("you can't")
    } else {
        let newTaskTitle = prompt("edit")
        if (newTaskTitle != null) { 
            tasks[taskId].title = newTaskTitle
            tasks[taskId].date = `Edited at ${new Date().toLocaleString()}`     
        }
    }
    localSt()
    taskForm()
}

function deleteTask(taskId){
    tasks.splice(taskId, 1)
    localSt()
    taskForm()
}

function doneTask(taskId){
    tasks[taskId].completed = true
    localSt()
    taskForm()
}

function undoTask(taskId){
    tasks[taskId].completed = false
    localSt()
    taskForm()
}


// function localSt(){
//     let tasksString = JSON.stringify(tasks)
//     localStorage.setItem("tasks", tasksString)  
//     taskForm()
// }

// localSt()


// 

function localSt(){
    let tasksString = JSON.stringify(tasks)
    localStorage.setItem("tasks", tasksString)
}
let tasks = [
    {
        title: "first",
        date: "12/12/12",
        completed: false,   
    }
]

tasks = JSON.parse(localStorage.getItem("tasks"))
function taskForm(){
    document.getElementById("todoList").innerHTML = ""
    let taskIndex = 0

    for (task of tasks){

        let taskFormat =
            `
                <div class="todo">
        
                    <div class="textDate">
                        <h3 id="${task.completed}">${task.title}</h3>
                        <p id="${task.completed}">${task.date}</p>
                    </div>
        
                    <div class="icons">
                        <div id="editTodo" onclick="editTask(${taskIndex})" class="edit"><img src="/edit.svg" alt=""></div>
                        <div id="removeBtn" onclick="deleteTask(${taskIndex})" class="delete"><img src="/trash.svg" alt=""></div>
                        <div ondblclick="undoTask(${taskIndex})" id="doneTask" onclick="doneTask(${taskIndex})" class="done"><img src="/trash-true.svg" alt=""></div>
                    </div>
                </div>
            `
        document.getElementById("todoList").innerHTML += taskFormat
        taskIndex++

    }
}

taskForm()

function addTask(){
    let inputValue = document.getElementById("todoInput").value
    let newTask = {
        title: inputValue,
        date: new Date().toLocaleString(),
        completed: false,   
    }

    if (inputValue.length == 0){
        alert("fuck off fnr")
    } else {
        tasks.push(newTask)
    }
    document.getElementById("todoInput").value = ""
    localSt()
    taskForm()
}

function editTask(taskIndex){
    if (tasks[taskIndex].completed == true){
        alert("you can't")
    } else {
        let newTaskTitle = prompt("edit")
        if (newTaskTitle != null) { 
            tasks[taskIndex].title = newTaskTitle
            tasks[taskIndex].date = `Edited at ${new Date().toLocaleString()}`     
        }
    }
    localSt()
    taskForm()
}

function deleteTask(taskIndex){
    tasks.splice(taskIndex, 1)
    localSt()
    taskForm()
}

function doneTask(taskIndex){
    tasks[taskIndex].completed = true
    localSt()
    taskForm()
}

function undoTask(taskIndex){
    tasks[taskIndex].completed = false
    localSt()
    taskForm()
}

function localSt(){
    let tasksString = JSON.stringify(tasks)
    localStorage.setItem("tasks", tasksString)
}
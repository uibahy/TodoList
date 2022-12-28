// let todos = [
//     {
//         title: "12",
//         date: "12",
//         completed: false
//     },
// ]

// function addTodo(){
//     todos.push({
//         title: document.getElementById("todoInput").value,
//         date: new Date().toLocaleString(),
//         completed: false
//     })
    
//     let todoFormat =
//     `
//         <div class="todo">

//             <div class="textDate">
//                 <h3 id="todoTitle">${todos[todos.length - 1].title}</h3>
//                 <p id="todoDate">${todos[todos.length - 1].date}</p>
//             </div>

//             <div class="icons">
//                 <div id="editTodo" onclick="editTodo(this)" class="edit"><img src="/edit.svg" alt=""></div>
//                 <div id="removeBtn" onclick="deleteTodo(this)" class="delete"><img src="/trash.svg" alt=""></div>
//                 <div onclick="doneTodo(this)" class="done"><img src="/trash-true.svg" alt=""></div>
//             </div>
//         </div>
//     `
//     console.log(JSON.stringify(todos))
//     localStorage.setItem("todos", JSON.stringify(todos))
//     return document.getElementById("todoList").innerHTML += todoFormat   
// }


// function deleteTodo(element){
//     return element.parentElement.parentElement.remove();
// }
// let todos = [
//     {
//         title: "",
//         date: "",
//         completed: false
//     }
// ]

// for (i = 0; i < todos.length; i++){

//     function todoAddList(index){
//         let todoFormat =
//         `
//             <div class="todo">
    
//                 <div class="textDate">
//                     <h3 id="todoTitle">${todos[index].title}</h3>
//                     <p id="todoDate">${todos[index].date}</p>
//                 </div>
    
//                 <div class="icons">
//                     <div id="editTodo" onclick="editTodo(this)" class="edit"><img src="/edit.svg" alt=""></div>
//                     <div id="removeBtn" onclick="deleteTodo(this)" class="delete"><img src="/trash.svg" alt=""></div>
//                     <div onclick="doneTodo(this)" class="done"><img src="/trash-true.svg" alt=""></div>
//                 </div>
//             </div>
//         `
//         return document.getElementById("todoList").innerHTML += todoFormat
//     }

//     function addTodo(){
//         todos.push({
//             title: document.getElementById("todoInput").value,
//             date: new Date().toLocaleString(),
//             completed: false
//         })   
//         todoAddList(i)
//     }

//     function deleteTodo(element){
//         todos.splice(i, 1);
//         return element.parentElement.parentElement.remove();
//     }

//     function editTodo(element){
//         let newTodoTitle = prompt("edit")
//         if (newTodoTitle != null) { 
//             todos[i].title = newTodoTitle
//             todos[i].date = new Date().toLocaleString()
//             element.parentElement.parentElement.querySelector("#todoTitle").textContent = newTodoTitle;
//             element.parentElement.parentElement.querySelector("#todoDate").textContent = `Edited at ${new Date().toLocaleString()}`
//             // todos[todos.length - 1].title = newTodoTitle
//           }
//     }
    
//     function doneTodo(element){
//         todos[i].completed = true
//         element.parentElement.parentElement.querySelector("#todoTitle").style.textDecoration = "line-through";
//         // setTimeout(function() { deleteTodo(element); }, 1000);
//     }

// }







// `
// <div class="todo">

//     <div class="textDate">
//         <h3 id="todoTitle">${task.title}</h3>
//         <p id="todoDate">${task.date}</p>
//     </div>

//     <div class="icons">
//         <div data-tippy-content="Edit your Task!" id="editTodo" onclick="editTask(this)" class="edit"><img src="/edit.svg" alt=""></div>
//         <div data-tippy-content="Delete your Task 😒😒" id="removeBtn" onclick="deleteTask(this)" class="delete"><img src="/trash.svg" alt=""></div>
//         <div data-tippy-content="Good Job! 😘😘" onclick="doneTask(this)" class="done"><img src="/trash-true.svg" alt=""></div>
//     </div>
// </div>
// `

// tippy('[data-tippy-content]');
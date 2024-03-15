const input = document.getElementById('input');
const btn = document.getElementById('btn');
const todobox = document.querySelector('.todobox');

let todos = JSON.parse(localStorage.getItem("todos")) || [];
if(todos){
  addTodo();
}


let findText;
let findTodoIndex;


btn.addEventListener('click',(e)=>{
    if(btn.innerHTML === "Add"){
      todos.push(input.value); 
    }
    else{
      todos[findTodoIndex] = input.value;
      todos.splice(findTodoIndex,1,todos[findTodoIndex]);
      btn.innerHTML === "Add"
    }
    localStorage.setItem("todos",JSON.stringify(todos))
    addTodo();
    input.value = "";
});


function addTodo(){
  removeChilds()
  todos.forEach(todo=>{
    let span = document.createElement('span');
    span.className = "Todoselement"
    span.innerHTML = `${todo}<i class="fa-solid fa-delete-left"></i>
    <i class="fa-solid fa-pen"></i> 
   `
    todobox.appendChild(span);
  });
}

function removeChilds(){
  Array.from(todobox.children).forEach(ele=>{
    ele.remove()
  })
}

todobox.addEventListener('click',(e)=>{  
 if(e.target.classList.contains('fa-delete-left')){
   findText = e.target.parentNode.innerText.trim()
   findTodoIndex = todos.findIndex(ele=>ele == findText);
   todos.splice(findTodoIndex,1);
   localStorage.setItem("todos",JSON.stringify(todos))
   addTodo();
 }
 else if(e.target.classList.contains('fa-pen')){
  findText = e.target.parentNode.innerText.trim();
  input.value = findText;
   findTodoIndex = todos.findIndex(ele=>ele == findText);
   console.log(findTodoIndex);
   btn.innerHTML = "Edit"
 }
});





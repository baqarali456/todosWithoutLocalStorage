const input = document.getElementById('input');
const btn = document.getElementById('btn');
const todobox = document.querySelector('.todobox');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let index = 0;
let findIndex;


if(todos.length > 0){
  setTodos();
}
else{
  todobox.innerHTML += `<p>No Todos in List</p>`;
}

function AddTodos(){
  index++;
  todos.push({id:index,text:input.value});
  localStorage.setItem("todos",JSON.stringify(todos))
}

btn.addEventListener('click',()=>{
  if(btn.innerHTML == "Add"){
    AddTodos();
  }
  else{
    btn.innerHTML = "Add"
    todos.splice(findIndex,1,{...todos[findIndex],text:input.value});
        localStorage.setItem('todos',JSON.stringify(todos))
  }
  setTodos();
});

function setTodos(){
  allChildrenRemove()
  todos.forEach(todo=>{
    let span = document.createElement("span");
    span.innerHTML = `${todo.text}<i class="fa-solid fa-delete-left"></i>
    <i class="fa-solid fa-pen"></i> 
   `
   todobox.appendChild(span);
  });
  input.value = "";
  
}

function allChildrenRemove(){
  Array.from(todobox.children).forEach(ele=>{
    ele.remove()
  })
}



todobox.addEventListener('click',(e)=>{
  if(e.target.classList.contains('fa-delete-left')){
    let targetText = e.target.parentElement.innerText.trim()
      
       findIndex = todos.findIndex(todo=>todo.text == targetText);
        todos.splice(findIndex,1);
        localStorage.setItem('todos',JSON.stringify(todos))
        setTodos();
  }
  else if(e.target.classList.contains('fa-pen')){
    btn.innerHTML = "Edit";
    let targetText = e.target.parentElement.innerText.trim();
    input.value = targetText;
      
       findIndex = todos.findIndex(todo=>todo.text == targetText); 
  }
})







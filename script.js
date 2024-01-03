const input = document.getElementById('input');
const btn = document.getElementById('btn');
const todobox = document.querySelector('.todobox');


let todos = [];
let str = "";

btn.addEventListener('click',(e)=>{
    if(btn.innerHTML === "Add"){
        todos.push(input.value);
        addTodo();
        input.value = "";
    }
})

function addTodo(){
    str = "";
 todos.forEach(todo=>{
   str += `<span class="todo">${todo}<span onclick="ondelete('${todo}')" class="delete"><i class="fa-solid fa-delete-left"></i></span><span onclick="onEdit('${todo}')" class="edit"><i class="fa-solid fa-pen"></i></span></span>`;
    
})
todobox.innerHTML = str
}

function ondelete(value){
  todos = todos.filter(todo=>todo !== value);
  addTodo()
}

function onEdit(value){
  let findDataIndex = todos.findIndex(todo=>todo === value);
//   console.log(findDataIndex);
  input.value = todos[findDataIndex];
  btn.innerHTML = "Edit";

  let datafind = todos.find(todo=>todo === input.value);
   console.log(datafind);
   
  
  
 
    btn.addEventListener('click',(e)=>{
       if(e.target.innerHTML === "Edit"){
          datafind = input.value;
          todos.splice(findDataIndex,1,datafind);
          addTodo();
          input.value = "";
          btn.innerHTML = "Add"
       }
        
    })
  
  
}

let input = document.getElementById("todo_input");
let form = document.getElementById("form");
let list = document.getElementById("todo_list");

form.addEventListener("submit", onTodoInputSubmit);

function onTodoInputSubmit(e){
    e.preventDefault()
    let li = document.createElement("li");
    li.innerText = input.value 
    list.appendChild(li)
    input.value = ""


}

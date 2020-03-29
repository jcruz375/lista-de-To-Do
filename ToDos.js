
const lista = document.querySelector('#app ul')
const input = document.querySelector('#app input')
const button = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderizar(){
    lista.innerHTML = ''

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('*Excluir*');
        
        linkElement.appendChild(linkText)

        linkElement.setAttribute('href', '#');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' +pos+ ')');


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)
        lista.appendChild(todoElement);
    }
}
renderizar();
function addTodo(){
    var todoinput = input.value;
    todos.push(todoinput);
    input.value = '';
    renderizar();
    saveStorage();
}

button.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderizar();
    saveStorage()
}


function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

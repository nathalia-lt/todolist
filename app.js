// Vaviables:

const form = document.querySelector('form');
const taskInput = document.getElementById('taskInput');
const taskContainer = document.getElementById('taskContainer')



// eu quero adicionar o que eu escrever na lista
//pra isso eu uso um event listener.
//eu quero 'armazenar' o que o user escreveu no form em uma 'div'

form.addEventListener('submit', (e) => {
    console.log(e)
    e.preventDefault();
    const taskToAdd = taskInput.value 
    taskInput.value = ''
    console.log(taskToAdd)
    const li = document.createElement('li')
    const button = document.createElement('button')
    li.classList.add('newTask')
    button.classList.add('newTaskBtn')
    document.getElementById('tasksContainer').append(button, li)
    li.innerText = taskToAdd
    console.log(li)
})
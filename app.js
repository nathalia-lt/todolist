// Vaviables:
const form = document.querySelector('form');
const taskInput = document.getElementById('taskInput');
const taskContainer = document.getElementById('taskContainer')
const taskList = document.getElementById('tasksList') //ul
const themeBtn = document.getElementById('themeBtn');
const body = document.querySelector('body')


// eu quero adicionar o que eu escrever na lista
//pra isso eu uso um event listener.
//eu quero 'armazenar' o que o user escreveu no form em uma 'div'

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskToAdd = taskInput.value 
    taskInput.value = ''
    console.log(taskToAdd)
    
    const li = document.createElement('li')
    const button = document.createElement('button')
    const text = document.createElement('span')
    li.classList.add('taskItem')
    button.classList.add('taskItemBtn')
    text.classList.add('taskItemText')
    text.innerText = taskToAdd
    li.append(button)
    li.append(text)
    taskList.append(li)
    
    button.addEventListener('click', () => {
        li.remove()
    })

    console.log(li)
})


//funcao toggle se tiver ele tira, ele tira e coloca a class no html, nesse caso
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('darkMode')
    })
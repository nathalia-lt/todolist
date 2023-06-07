
import { getFromStorage, setToStorage } from "./services/localStorage.js";


// Vaviables:
const form = document.querySelector('form');
const taskInput = document.getElementById('taskInput');
const taskContainer = document.getElementById('taskContainer')
const taskList = document.getElementById('tasksList') //ul
const themeBtn = document.getElementById('themeBtn');
const body = document.querySelector('body')


//se eu nao achar eu tenho uma array em branco
//getFromStorage('') || []


let itemList = getFromStorage('item') || []
//agora eu tenho que salvar no storage a cada vez que eu adiciono no carrinho
console.log('lista fora', itemList)


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


    //adicionando o input do meu user em uma array, assim posso adicionar no meu storage
    itemList.push(taskToAdd)

    //agora eu quero salvar no meu storage. 
    //o primeiro valor é como eu quero salvar no meu storage (string), e o segundo parametro, é o valor que que quero salvar
    setToStorage('item', itemList)
    

    button.addEventListener('click', () => {
        li.remove()
    })
    console.log(li)
})



//funcao toggle se tiver ele tira, ele tira e coloca a class no html, nesse caso
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('darkMode')
    })


    // local storage
    //web storage API provided by the browser
    //a way to persist data between sessions, as well the open and close of 
    //the browser. Everything is provided by the browser. We just need to use the right method.

    //the method names are: setItem, getItem, removeItem, clear

    //localStorage.setItem('name of the key', 'value');
    //becareful to not override the value of the key

    // const name = localStorage.getItem('which key are we looking for');
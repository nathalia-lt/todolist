import { getFromStorage, setToStorage } from "./services/localStorage.js";

//tudo que e funcao que e do seu objeto de negocio, adicionar, 
//retirar, apagar. fica no model, tudo que altera fica em um lugar.
export default class TasksModel {

    //meu construtor vai receber minha array de task, ou se nao vai criar uma array vazia
    constructor(type){
        this.type = type
        this.tasks = getFromStorage(this.type) || [];
    }
    // não modifica o estado do objeto, não altera nada, só retorna
    // Query => retornam algo, query quer dizer busca
    getTasks(){
        return this.tasks
    }

    // alteram o estado do objeto, alteram a array de tasks
    // Command => não retornam nada
    addTask(task){
        // verificar se o task já existe
        if (this.tasks.includes(task)){
            throw new Error('Task já existe')
        }
        this.tasks.push(task)
        //persiste os dados no storage
        setToStorage(this.type, this.tasks)
    }

    removeTask(taskToRemove){
        this.tasks = this.tasks.filter((task) => task !== taskToRemove)
        setToStorage(this.type, this.tasks)
    }
    
    editTask(index, newTask){
        this.tasks[index] = newTask
        setToStorage(this.type, this.tasks)
        //TODO
        //editTask(oldTask, newTask){
        // this.tasks = this.tasks.map(task =>{
        //     if (task === oldTask){
        //         return newTask
        //     }
        //     return task
        // })
    }
}
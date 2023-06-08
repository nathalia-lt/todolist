
import TasksModel from "./TasksModel.js"; 
import TaskView from "./taskView.js";

// Vaviables:
const form = document.querySelector('form');
const themeBtn = document.getElementById('themeBtn');

const tasks = new TasksModel('tasks')
const view = new TaskView(removeTaskCb)

view.render(tasks.getTasks())

function removeTaskCb(taskName){
    tasks.removeTask(taskName)
}

// eu quero adicionar o que eu escrever na lista
//pra isso eu uso um event listener.
//eu quero 'armazenar' o que o user escreveu no form em uma 'div'
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value 
    taskInput.value = ''
    console.log(taskName)
    
    //adicionando o input do meu user em uma array, assim posso adicionar no meu storage
    try {
        tasks.addTask(taskName)
        view.renderOne(taskName)
    } catch (error) {
        alert(error.message)
    }    
})

//funcao toggle se tiver ele tira, ele tira e coloca a class no html, nesse caso
themeBtn.addEventListener('click', () => {
    const body = document.querySelector('body')
    body.classList.toggle('darkMode')
})













    //ModalViewControler
    //e uma maneira de estruturar seu codigo para separar funcionalidades


    //tudo que e relacionado a atualizacao da tela seria view

    //tudo que e funcao que e do seu objeto de negocio, adicionar, 
    //retirar, apagar. fica no model, tudo que altera fica em um lugar.


    //controller e a interface que une o model e o view. normamente pega o click do 
    //usuario e vai falar pro view fazer alguma coisa. controla o fluxo.
    //pega a solicitacao do usuario e manda a solicitacao pro model e view executarem


    //podemos organizar o nosso codigo em funcoes ou em objetos.
    //no JS ele permite trabalhar nas duas formas, escolher como queremos.
    //entao para fazermos oritado ao objeto nos criamos classe.
    //classe seria uma abstracao dos objetos, e os objetos vao ser instances da classe. 
    //a classe seria uma abstracao e o objeto o que conseguimos manipular.

    //classes sao formadas por duas coisas: proprieadades (valores internos) e metodos (funcoes que a gente executa)

    // class copo {
    //     constructor( aqui eu coloco as propriedades do copo ex (cor, tamanho)){
    //         this.cor = cor; (a cor do copo vai ser a cor que vou receber no construtor)
    //         this.tamanho = tamanho;
    //     }
    //     encher(porcentagem){
    //         this.copo += porcentagem
    //     }
    // }

    // criando um copo
    // const copo1 = new copo (azul, pequeno)

    // const cor1 = copo1.cor

    //copo1.encher(50)

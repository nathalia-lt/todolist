//Isso e um servico externo ao nosso programa que estamos usando
//vamos criar esse aquivo para esse servico
//crio a pasta service

//Nesse arquivo, temos duas funcoes: getfromstorage e settostorage


//persist data between open and close the browser
//the methods name is setItem, getItem, removeItem, clear


//queremos saber o que queremos pegar
//key, pq queremos saber o que queremos pegar
function getFromStorage(key){
    const value = window.localStorage.getItem(key)
    
    //essa funcao get, ela retorna o que ela pegou no const value
    //ela vai retornar o que ela pegou
    //o que e isso? agora, ele esta tranformando uma string em um objJS ou array
    //e caso nao encontre, vai retonar um null
    return value ? JSON.parse(value) : null
}


//para salvar a nossa funcao: set, estamos rcebendo uma key e um valor
function setToStorage(key, value){
    //temos que receber um valor como sring no nosso storage, e para garantir
    //que o que estamos recebendo e uma string eu tenho que colocar o json.strinfy.
    //entao aqui, vamos pegar um valor que sera um objeto ou uma array, que vamos
    //estar salvando, esse array ou objeto eu salvo em uma string e coloco no local storage.
    window.localStorage.setItem(key, JSON.stringify(value))
}

export {getFromStorage, setToStorage}

//agora eu vou la na no meu app.js
//
//e pego a array de inputs do meu user e settostorage ex:  setToStorage('item', itemList)

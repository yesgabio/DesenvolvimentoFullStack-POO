console.log("-----------------Acessar arquivo externo------------------")
const fs = require('fs')
const onRead = function onRead(err, buf) {
    if (err)
        console.log("houve um erro")
    else
        console.log(buf.toString())
}
fs.readFile('textoQualquer.txt', onRead) //acessa o arquivo de texto e escreve o que está no arquivo

console.log("\n-----------------Promises------------------")
const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Successo!");
    }, 2000);
});
myFirstPromise.then((successMessage) => {
    console.log(`Finalizado! ${successMessage}`);
});
console.log("Fim do programa") //executa primeiro pois o a promise tem o tempo de 2seg para ser concluída, fica rodando em paralelo, inclusive retorna o texto anterior antes de finalizar com sucesso a promise

console.log("\n-----------------PromisesFail------------------")
const mySecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejeitado"), 2000);
});
let ifFail = (err) => console.log(`Uma exceção foi lançada`); //imprimi esse aqui apenas no final, o sistema informa a finalização, porém a promise só termina depois
mySecondPromise
    .then(
        null,
        (msg) => { throw "Não fui atendido!!!" })
    .catch(ifFail)
console.log("Fim do programa")

console.log("\n-----------------PromisesChain------------------")
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pedido atendido"), 2000);
});
promise
    .then(
        result => { console.log(result); return "valor"; })
    .then(
        result => console.log(result))
    .catch(
        error => console.log(error));

console.log("fim do programa") //faz o fim do programa primeiro

console.log("\n-----------------Async Function------------------")
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 2000);
    });
    let resultado = await promise; //await significa que o resultado deve esperar a promise ser concluída
    return resultado;
}
console.log("Iniciando o programa")
console.log(fazAlgo()) //Resolve a promise antes de finalizar o programa
console.log("Finalizando o programa")

console.log("\n-----------------Async Function------------------")
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 2000);
    });

    let resultado = await promise;

    return resultado;
}
console.log("Iniciando o programa")
fazAlgo().then((msg) => console.log(msg)) //não aguarda a promise ser concluída
console.log("Finalizando o programa")

console.log("\n-----------------Async Function------------------")
async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 2000);
    });
    let resultado = await promise;
    return resultado;
}
async function main() {
    console.log("Iniciando o programa")
    console.log(await (fazAlgo())) //await informa que o programa deve esperar a promise ser concluída
    console.log("Finalizando o programa")
}

main() //função assíncrona que chama uma função assíncrona
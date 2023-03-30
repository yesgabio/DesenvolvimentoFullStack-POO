console.log("---------Função sem parâmetros----------")
function funcaoSemRetorno() {
    console.log("Alô Mundo!");
}

function funcaoComReturn() {
    return "Alô Mundo!";
}
// a função pode ou não possuir retorno.
let msg = funcaoSemRetorno() // O resultado da função sem retorno já aparece assim que ela é chamada
console.log("Chamando a função sem retorno " + msg) //Quando ela não possui retorno não posso atribuir uma variável a ela - Esse trecho fica undefined
msg = funcaoComReturn()
console.log("Chamando a função com return " + msg) //Com o retorno consigo atribuir a variável e a saída neste caso fica correta

console.log("\n---------Função com parâmetros----------")
function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }
    return resultado;
}
console.log(potencia())//resulta como sem número, pois não foram passados os parâmetros para a função
console.log(potencia(4))//como foi passado apenas um número para a função, ela utiliza o segundo número como definido na função, no caso 2
console.log(potencia(2, 6))//como foram passados dois números, a função é feita com os números que lhe foram passados
console.log(potencia(2, 6, 18))//ao passar um valor a mais a função ignora este valor passado a mais e utiliza apenas os dois primeiros

console.log("\n---------Função como parâmetros----------")
//a função decision solicita 3 parâmetros (uma string e 2 funções), sendo que o primeiro define a execução de qual das funções passadas dos demais parâmetros será executada
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}
function showOk() { console.log("You agreed."); }
function showCancel() { console.log("You canceled the execution."); }

decision("OK", showOk, showCancel); //entra no if e executa a função showOk 
decision("Cancel", showOk, showCancel); // entra no else e executa a função showCancel
//a descrição da função poderia estar ao chamar a decision, poderia ser atribuída a uma variável e essa variável chamaria a função decision

console.log("\n---------Closure----------") //uma função que retorna outra função
function somaValores(x) {
    return function (y) { //a função somaValores retorna uma função sem nome que solicita o parâmetro y e soma os valores
        return x + y;
    };
}
var soma5 = somaValores(5); //a variável soma5 recebe a função somaValores, atribuído ao x o valor 5
console.log(soma5(2)); //imprimi a função somando 5+2


console.log("\n---------Arrow function----------") //forma mais curta de escrever funções usando =>
var somar = () => console.log("função sem parametros") //variável somar recebe arrow function sem nome sem parâmetro
somar()
somar(1) //se enviar o parâmetro ela ignora

somar = _ => console.log("usando underscore") //é possível fazer uma arrow function usando apenas _ 
somar()

somar = (x, y) => x + y; //variável somar recebe a função com dois parâmetros 
console.log(somar(1, 2)); //executa a função e soma os dois parâmetros = 3

somar = (x, y) => { return x + y }; //variável somar recebe a função com dois parâmetros e possui retorno
console.log(somar(3, 4)); //executa a função e soma os dois parâmetros = 7

somar = (x, y) => x > y ? x : y; //variável somar recebe a função com dois parâmetros e identifica qual deles é o maior número x é maior que y (?) se sim imprimi x se não (:) y - operador condicional ternário
console.log(somar(5, 6)); //executa a função e mostra o maior número y = 6

somar = (x, y) => { //função com o mesmo sentido da anterior, porém sem o operador condicional ternário, executando o if else de forma tradicional
    if (x > y)
        return x
    else
        return y
}
console.log(somar(7, 8)); //executa a função e mostra o maior número y = 8

console.log("\n---------SOME----------") //devolve um boolean informando se a solicitação é verdadeira ou falsa
array = [4, 5, 6, 7, 8, 9, 10]
regraImpar = (item) => item % 2 != 0 //função para verificar se o número é par
console.log("Há algum número impar? " + array.some(regraImpar)) //retorna true pois existem números ímpares no array

console.log("\n---------EVERY----------") //devolve um boolean informando se a solicitação é verdadeira ou falsa
console.log("Todos os números que são ímpares? " + array.every(regraImpar)) //retorna false pois nem todos os números no array são ímpares

console.log("\n---------FILTER----------") //devolve um novo array com os número que atendem a solicitação
console.log("Filtrar por número ímpares? " + array.filter(regraImpar)) //retorna array de números ímpares

console.log("\n---------FOREACH----------") //realiza um tratamento para cada item do array
array.forEach((nro) => console.log(nro + " -> " + (nro % 2 == 0 ? "par" : "ímpar"))) //para cada número do array realiza a arrow function que identifica se esse número é par ou ímpar 

console.log("\n---------REDUCE----------") //executa uma ação em cada item do array para reduzi-lo em um único valor
let resultado =
    array.reduce(
        (acc, val) => acc += (val % 2 == 0) ? val : 0, //a variável do array é zero? se sim soma essa variável, se não soma zero
        0 //informando que a conta se inicia com zero
    )
console.log("A soma dos números pares é " + resultado) //realiza a soma de todos os números pares no array

console.log("\n---------MAP----------") //executa uma ação em cada item do array e devolve oq ue for solicitado
var newArrayTeste = array.map((item) => item * 2) //pega cada número do array e multiplica ele por dois, formando um novo array
console.log(newArrayTeste)

newArray = array.map((item) => { return { x: item, y: 2 * item } }) //pega cada número do array e imprimi um objeto que contem ele e ele multiplicado por dois
console.log(newArray)

console.log("\n---------USANDO VÁRIAS FUNÇÕES----------")
array = [2, 3, 4, 5, 6, 7, 8, 9, 10]

nroDivisores = (item) => { //função para identificar quantos divisores tem cada número do array
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++)
        if ((item % divisor) == 0)
            ndiv++
    return ndiv;
}

array //array
    .filter((nro) => nroDivisores(nro) == 2) //primeiro filtra os números que possuem apenas dois divisores
    .map((item) => { return { x: item, par: (item % 2) == 0 } }) //dos números filtrados, mapeia aqueles que são pares, retornando um objeto que tem o número e a informação se é par
    .forEach((obj) => console.log(obj.x + " é par? " + obj.par)) //para cada objeto ele imprimi o objeto e o retorno boolean se é par
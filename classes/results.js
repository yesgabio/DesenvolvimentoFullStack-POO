//A classe results está requerendo as informações que estão na classe infos

const circulo = require('./infos'); //faz esta solicitação de como o cálculo é feito
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);
//desestruturando o objeto e acessando a função diretamente
const {area} = require('./infos');
console.log(`Área do círculo de raio 2 é ${area(2)}`);
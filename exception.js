//para o tratamento de exceção se utiliza o try catch e throw new Error para um erro genérico do javascript
try {
    throw new Error('Gerando um erro genérico!');
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
}

console.log("\n-------------------GERANDO UM ERRO----------------------")
class ValidationError extends Error {
    constructor(message) {
        super(message); // construtor da superclasse
        this.name = "ValidationError"; // alterando propriedade padrão de Error
    }
}

function vaiDarErro() {
    throw new ValidationError("Dados inválidos!");
}

try {
    vaiDarErro()
}
catch (e) {
    console.error(`${e.name}: ${e.message}`);
}

console.log("\n-------------------GERANDO UM ERRO----------------------")
let json = "incorreto"

try {
    let pessoa = JSON.parse(json);
    console.log(pessoa.nome);
}
catch (err) {
    if (err instanceof SyntaxError) {
        console.log(`Erro ${err.name}: ${err.message}`);
    } else {
        console.log("Relança a exceção pois não sabe como tratar");
        throw err;
    }
}
finally { //sempre é executado
    console.log("Encerra tratamento")
}
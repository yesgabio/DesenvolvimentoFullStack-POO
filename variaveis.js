function testVar() {
    var var01 = "var 01"
    {
        var var02 = "var 02"
        console.log("01a." + var01)
        console.log("01b." + var02)
    }
    console.log("02a." + var01)
    console.log("02b." + var02)
}

console.log("--------------TESTE VAR----------------") // Var --> variável que pode ter seu valor alterado em qualquer parte do código
testVar()

function testLet() {
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)
}
console.log("--------------TESTE LET----------------") // let --> variável que só pode ser alterada no trecho de código que está inserida
testLet()

function testConst() {
    const const01 = "const 01"
    {
        const const02 = "const 02"
        console.log("01a." + const01)
        console.log("01b." + const02)
    }
    const01 = "novo valor" //erro --> const não pode sofrer alteração após ter um valor atribuído
    console.log("02a." + const01)
    console.log("02b." + const02)
}

console.log("--------------TESTE CONST----------------") // Const --> variável constante que não pode ter seu valor alterado
testConst()
var a = []
a[0] = Math.random() // atribuir na primeira posição do array um número aleatório
console.log(a.length) //length retorna o tamanho do array
for (let val in a)
    console.log(" --> " + val)

console.log("----------------")

a.push(Math.random()) //push insere mais um número aleatório no array
console.log(a.length) //length retorna o tamanho que ficou o array
for (let val in a)
    console.log(" --> " + val)

console.log("----------------")
a[9] = Math.random() //atribuir na posição 9 do array um número aleatório
console.log(a.length) //length retorna o tamanho que ficou o array
for (let val of a)
    console.log(" --> " + val)

console.log("----------------")

for (let i = 0; i < a.length; i++) //outra forma de fazer o for
    console.log(" --> " + i + ": " + a[i])

console.log("\n-------------------LOOP---------------------")
var arr = []
arr[0] = Math.random() //atribuição de valores aleatórios para o array
arr[1] = Math.random()
arr[9] = Math.random()
console.log(arr.length) //length retorna o tamanho do array
console.log(" -for .. in- ")
console.log("-------------")
for (let val in arr) //in - exibe as variáveis que tem no array, sem considerar aquelas que não estão definidas
    console.log(" --> " + val)

console.log("-------------\n")
console.log(" -for .. of- ")//of - exibe as variáveis do array, porém demonstrando todos os espaços inclusive os não definidos
console.log("-------------")
for (let val of arr)
    console.log(" --> " + val)
console.log("-------------\n")
console.log(" -for (;;))- ")
console.log("-------------")
for (let i = 0; i < arr.length; i++)// outra forma de fazer o for, que se comporta assim como o foreach com of
    console.log("  -->" + i + ": " + arr[i])
var pessoa = require("./commons/pessoa");
otto = pessoa();
var soma = require("./commons/soma")
var imposto = require("./commons/calculoImposto")
var calculadora = require("./commons/calculadora")

console.log(JSON.stringify(otto))
console.log(soma(2,2))

console.log('Valor do produto com Imposto:' + imposto.adicionar(10))
console.log(`Valor do Imposto: ${imposto.valor(10)}`)
console.log(`Taxa do imposto: ${imposto.taxa}`)

console.log("CALCULADORA")
console.log(`Soma = ${calculadora.soma(48, 67)}`)
console.log(`Sbutração = ${calculadora.subtracao(87,14)}`)
console.log(`Multiplicação = ${calculadora.multiplicacao(45, 9)}`)
console.log(`Divisão = ${calculadora.divisao(118,8)}`)

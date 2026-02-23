const produtos = [
    {id:1,nome:"Camiseta",Preco:25.99},
    {id:2,nome:"Calça Jeans",Preco:125.99},
    {id:3,nome:"Tenis Nike",Preco:325.99}
]

console.log(produtos)
const produtosJson = JSON.stringify(produtos) //converter uma lista de objetos para JSON
console.log(produtosJson)

const produtosObj = JSON.parse(produtosJson) // convertendo um JSON em um Objeto
console.log(produtosObj)
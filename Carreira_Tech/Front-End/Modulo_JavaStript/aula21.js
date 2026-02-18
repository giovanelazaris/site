const carros = ["Fusca","Uno","Chevete","Gol","Polo","Escort", "Pulse Tributo"]
const conteudo = document.getElementById("conteudo")
var dados = ""
var i

function criaSecao(titulo, dadosF){
    let secao = document.createElement("div") /*cria elemento html dentro do javascript */
    secao.innerHTML = "<h2>"+titulo+"</h2>"+dadosF
    conteudo.appendChild(secao)

}

dados = ""
i = 0
while(i < carros.length){
    dados += "<p>"+carros[i]+"</p>"
    i++
}
criaSecao("Loop While", dados)


do {
   dados += "<p>"+carros[i]+"</p>"
   i++
} while(i < carros.length)

criaSecao("Loop Do While", dados)

dados = ""

for(i = 0; i < carros.length; i++){
    dados += "<p>"+carros[i]+"</p>"
}
criaSecao("Loop For", dados)

dados = ""

for(let carro of carros){
    dados += "<p>"+carro+"</p>"
}
criaSecao("Loop For of", dados)

dados = ""
let carro1 = {marca: "Ford", modelo:"Ka", ano:"2005"}
let carro2 = {marca: "Fiat", modelo:"Uno", ano:"2010"}

let carros2 = []
carros2.push(carro2)

for (let carro of carros2){
    let propriedade = ""

    for (let key in carro){
        propriedade += carro[key] + " | ";
    }

    dados += "<p>"+propriedade+"</p>"
}
criaSecao("Loop For in", dados)
/*for(let key in carro1){
    dados += "<p>"+key+": "+carro1[key]+"</p>"
}*/

dados = ""

carros.forEach((carro) => {dados += "<p>"+carro+"</p>"})
criaSecao("Loop ForEach", dados)


dados = ""
for(let carro of carros){
    if (carro === "Gol"){
        break
    }
    dados += "<p>"+carro+"</p>"
}
criaSecao("Loop For of com Break", dados)

dados = ""
for(let carro of carros){
    if (carro === "Gol"){
        continue
    }
    dados += "<p>"+carro+"</p>"
}
criaSecao("Loop For of com Continue", dados)


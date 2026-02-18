const carros = ["Fusca","Uno","Chevete","Gol","Polo","Escort", "Pulse Tributo"]
const conteudo = document.getElementById("conteudo")
var dados = ""
var i = 0

function criaSecao(dadosF){
    let secao = document.createElement("div") /*cria elemento html dentro do javascript */
    secao.innerHTML = dadosF
    conteudo.appendChild(secao)

}


do {
    dados += "<p>"+carros[i]+"</p>" 
    i++ 
    
    var resposta = confirm("Você deseja continuar?")   
    
    if(resposta == true){         
        continue
    } else {
        break
   } 

} while(i < carros.length)
    
    

   

criaSecao(dados)
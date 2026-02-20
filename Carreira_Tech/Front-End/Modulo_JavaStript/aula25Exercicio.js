
function clientePedido(){

    let numPed = parseInt(document.getElementById("numeroPedido").value)

   switch(numPed){
    case 1:
        alert("Pizza de Calabresa")
        break
    case 2:
        alert("Pizza de Quatro Queijos")
        break
    case 3:
        alert("Pizza de Frango com Catupiry")
        break
    case 4:
        alert("Pizza de Brigadeiro")
        break
    default:
        alert("Número do Pedido Inválido")
   }
    
}

document.getElementById("verificaPedido").addEventListener("click",function(){clientePedido()})
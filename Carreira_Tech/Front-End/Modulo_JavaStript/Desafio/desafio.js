function calculadesconto(){
    let valorProduto = document.getElementById("valorProduto").value
    let percDesconto = document.getElementById("percDesconto").value
    if ((valorProduto < 0) || (percDesconto < 0)){
        console.log("Valor inválido")
        alert("Valor negativo. Informe o valor Válido.")        
    } else {
        let desconto = (1 - (percDesconto / 100)) * valorProduto
        let totaldesconto = valorProduto - desconto
        console.log(desconto, totaldesconto)
        document.getElementById("resultado").innerHTML = `O valor do Produto é R$ ${valorProduto}, Valor do desconto R$ ${totaldesconto} e o preço final do produto é R$ ${desconto}.`

    }
}
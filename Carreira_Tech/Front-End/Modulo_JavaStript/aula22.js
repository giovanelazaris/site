function mostrarSaudacao(){
    let nome = document.getElementById("nome").value
    let hora = parseInt(document.getElementById("opcaoPeriodo").value, 10)
    let mensagem = document.getElementById("mensagem")
    mensagem.innerHTML = saudacaoPersonalizada(nome, hora)
}

function saudacaoPersonalizada(nome, hora){
    if (hora < 12){
        return "Bom dia, " + nome +"!"
    } else if (hora >=12 && hora < 18){
        return "Boa tarde, " + nome +"!"
    } else {
        return "Boa noite, " + nome +"!"
    }
}
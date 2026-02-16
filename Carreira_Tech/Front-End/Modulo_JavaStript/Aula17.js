function verificaAprovacao(){
    let nota = document.getElementById("nota").value //recurar o valor de um ID no html
    if (nota > 10){
        document.getElementById("resultado").innerHTML = "Nota Inválida, digite a nota novamente!"
        console.log("Nota inválida", nota)
        alert("Nota Inválida, digite a nota novamente!")
    } else {
        if (nota >= 7){
            document.getElementById("resultado").innerHTML = "Aluno Aprovado!"
            console.log("Nota inserira", nota)
            alert("Aluno Aprovado!")
        } else {
            document.getElementById("resultado").innerHTML = "Aluno Reprovado!"
            console.log("Nota inserira", nota)
            alert("Aluno Reprovado!")
        }
    }    
}

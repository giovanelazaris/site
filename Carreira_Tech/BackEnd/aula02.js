/* setTimeout no JavaScript é uma função nativa usada para agendar a execução de um bloco de código ou função apenas uma vez,
após um tempo de espera especificado (em milissegundos). É ideal para criar atrasos (delays), animações ou aguardar ações do 
usuário sem bloquear a execução principal do código
 */
/*function alerta(){
    console.log("Alerta")
}

setTimeout(alerta, 3000)

setTimeout(() => {
    console.log("Alerta")
    
}, 4000);*/

/*setInterval(() => {
    console.log("Alerta")
}, 3000)*/

function buscaDadosServidor(){
    //Codigo que busca dados do Servidor

    return new Promise((resolve, reject) => {
        console.log("Buscando dados do Servidor")

        setTimeout(()=>{
            let sucesso = Math.random() > 0.5
            if(sucesso){
                resolve("Dados Recebidos com sucesso")
            }else{
                reject("Falhas ao buscar dados do servidor")
            }
        }, 2000)
    })
}

buscaDadosServidor().then((mensagem) => console.log(mensagem)).catch((erro)=>console.log(erro))
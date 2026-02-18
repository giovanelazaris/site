function trocarIdioma(){
    let idioma = document.getElementById("idioma").value
    console.log(idioma)

    switch(idioma) {
        case "Alemão":
            frase = "Hallo, wie geht es dir?"
            break
        case "Albanês":
             frase = "Përshëndetje, si jeni??" 
            break
        case "Havaiano":
            frase = "Aloha pehea ʻoe?"          
            break
        case "Polonês":
            frase = "Cześć, jak się masz?"
            break
        case "Polonês":
            frase = "Cześć, jak się masz?"
            break
        case "Polonês":
            frase = "Cześć, jak się masz?"
            break
        case "Russo":
            frase = "Privet, kak dela?"
            break
         case "Sérvio":
            frase = "Zdravo, kako si?   "
            break
        case "Suéco":
            frase = "Hej, hur mår du?"
            break
        case "Tibetano":
            frase = "khams bzang / khyed rang bde po yin nam?"
            break
        case "Zapoteco":
            frase = "Xi tal xaa Xi modo nuulu?"
            break
        default:
            resultado = "Opção Inválida"
    }
    
    document.getElementById("mensagem").innerHTML = frase
}
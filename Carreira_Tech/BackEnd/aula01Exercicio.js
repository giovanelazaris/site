class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    mostrarDetalhes(){
        console.log(`Produto: ${this.nome}, Preço: ${this.preco}`)
    }
}

class Eletronico extends Produto{
    constructor(nome, preco, garantia){
        super(nome, preco)
        this.garantia = garantia
    }

    mostrarDetalhes(){
        console.log(`Produto: ${this.nome}, Preço: ${this.preco}, Garantia: ${this.garantia} dias`)
    }
}

const produto1 = new Produto("Cerveja", 2.49)
const eletronico = new Eletronico("Iphone 16", 4999, 365)
produto1.mostrarDetalhes()
eletronico.mostrarDetalhes()


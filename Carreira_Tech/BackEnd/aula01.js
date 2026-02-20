class Veiculo{
        constructor(fabricante, modelo, ano, tipo, qtdPortas){
        this.fabricante = fabricante
        this.modelo = modelo //propriedade da classe
        this.ano = ano
        this.tipo = tipo
        this.qtdPortas = qtdPortas
    }

    mostrarDadosVeiculo(){ // metodo da classe
        console.log(`${this.fabricante} ${this.modelo}, ${this.ano} (${this.tipo}), ${this.qtdPortas} portas`)
    }

    mostrarModelo(){
        console.log(`O modelo do moto é ${this.modelo}`)
    }

    acelerando(){
        console.log("Acelerando......")
    }
}

class Moto extends Veiculo{
    constructor(fabricante,modelo,ano, cilindradas){
        super(fabricante,modelo,ano);
        this.cilindradas = cilindradas

    }

    mostrarDadosVeiculo(){ // metodo da classe
        console.log(`${this.fabricante} ${this.modelo}, ${this.ano}, ${this.cilindradas} cilindradas`)
    }    
}

class Carro extends Veiculo{
    constructor(fabricante, modelo, ano, tipo, qtdPortas){
        super(fabricante, modelo, ano, tipo, qtdPortas)
    }

}

const meuCarro = new Carro("Fiat", "Pulse", "2005", "SUV", "4")
const minhaMoto = new Moto("Honda", "CG 125", "2026", 125)
meuCarro.mostrarDadosVeiculo()

minhaMoto.mostrarDadosVeiculo()




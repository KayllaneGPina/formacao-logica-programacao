// class formaDeBolo{
//     constructor(saborDaMassa, saborRecheio){
//         this.saborDaMassa = saborDaMassa;
//         this.saborRecheio = saborRecheio;
//     }
//     escrever(){
//         console.log(`Um delicioso de  ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
//     }

//     assar(){
//         console.log(`O bolo de ${this.saborDaMassa} está assando...`)
//     }
// }

// let boloFesta = new formaDeBolo("chocolate", "nutela")
// boloFesta.escrever()

// let boloPremium = new formaDeBolo("baunilha", "coco")
// boloPremium.escrever()
// boloPremium.assar()

// --------------------------------------
//             Guerreiro: 'Espada',
//             Mago: 'Magia',
//             Monge: 'Artes Maciais',
//             Ninja: 'Shuriken'

class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    tipoHerois(){
        this.tipo = ['Guerreiro', 'Mago', 'Monge', 'Ninja'];
    }
    
    ataqueDosHerois(){
        switch(this.tipo){
            case 'Guerreiro':
                return 'Espada';
            case 'Mago':
                return 'Magia';
            case 'Monge':
                return 'Artes Maciais';
            case 'Ninja':
                return 'Shuriken';
            default:
                return 'Ataque desconhecido';
        }
    }
}

let novoHeroi = new heroi("Naruto", 30, 'Ninja');
console.log(`O ${novoHeroi.tipo} atacou usando ${novoHeroi.ataqueDosHerois()}`);
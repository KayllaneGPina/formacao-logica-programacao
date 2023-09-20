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
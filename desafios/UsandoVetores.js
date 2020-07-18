// Segundo desafio feito no curso LauchBase da RocketSeat

// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.

const empresa = [
    {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Proramação',
        endereço: {
            rua: 'Rua Guilherme Gembala',
            numero: 260,
        }
    }
]

// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.


console.log(`A empresa ${empresa[0].nome} está localizada em ${empresa[0].endereço.rua}, ${empresa[0].endereço.numero}`)


const usuario = [
    {
        nome: 'wellington',
        idade: 21,
        tecnologias: [
            c = {nome: 'C', especialidade: 'Desktop'}, 
            python = {nome: 'Python', especialidade: 'Data Cience'},
            javaScript = {nome: 'JavaScript', especialidade: 'Web/Mobile'}
        ]
    }
]

console.log(`O usuário ${usuario[0].nome} tem ${usuario[0].idade} anos e usa a tecnologia ${usuario[0].tecnologias[1].nome} com especialidade em ${usuario[0].tecnologias[1].especialidade}`)















// Nomes: Kalan e Felipe

const ask = require('readline-sync')


let doadores = []


function main() {
    let menu = true
    while (menu) {
        console.clear()
        console.log(`

       ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
        [1] - Cadastrar doador
        [2] - Listar doadores
        [3] - Buscar doador por tipo sanguíneo
        [4] - Buscar doador por data da última doação
        [5] - Sair
        Escolha uma opção:

        `)

        let opcaousuario = Number(ask.question('Escolha uma opcao: '))

        switch (opcaousuario) {
            case 1:
                cadastrarDoador()
                break
            case 2:
                listarDoadores()
                break
            case 3:
                buscarDoadorPorDataDaUltimaDoacao()
                break
            case 4:
                buscarDoadorPorTipoSanguineo()
                break
            case 5:
                menu = false
                console.log('Saindo do programa...')
                break
            default:
                console.log('Opcao invalida. Tente novamente.')
                break
        }
    }
}


function cadastrarDoador(){
    
    console.clear()
    let nome = ask.question('Digite o nome do doador: ')
    let idade = ask.question('Digite a idade do doador: ')
    let peso = ask.question('Digite o peso do doador: ')
    let tipoSanguineo = ask.question('Digite o tipo sanguineo do doador: ')
    let dataDaUltimaDoacao = ask.question('Digite o ultimo dia / mes / ano, em que o paciente fez a doacao: ')

    let doador = {

        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        dataDaUltimaDoacao: dataDaUltimaDoacao

    }

    doadores.push(doador)
    console.log('Doador cadastrado!')


}

function listarDoadores(){

        console.clear()
        console.log(`
        
    --------------------
    LISTAGEM DE DOADORES:
    --------------------
    NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
    -----------------------------------------------------------------
    
    `)

    console.clear();
    if (doadores.length > 0) {
        doadores.forEach(doador => {
            console.log(`Nome: ${doador.nome}`)
            console.log(`Idade: ${doador.idade}`)
            console.log(`Peso: ${doador.peso}`)
            console.log(`Tipo Sanguineo: ${doador.tipoSanguineo}`)
            console.log(`Ultima doaçao: ${doador.dataDaUltimaDoacao}`)
            console.log('_____________________')
        })
        ask.question('Tecle ENTER para continuar...')
    }
    
    console.log('')
}

function buscarDoadorPorTipoSanguineo(){

    console.clear();
    if (doadores.length > 0) {
        doadores.forEach(objeto => {
            console.log(`Tipo Sanguineo: ${doador.tipoSanguineo}`)
            console.log('_____________________')
        })
        ask.question('Tecle ENTER para continuar...')
    } else {
        ask.question('Nao ha doadores. Tecle ENTER para continuar...')
    }

}

function buscarDoadorPorDataDaUltimaDoacao(){

}

main()
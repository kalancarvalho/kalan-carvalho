
const ask = require("readline-sync")

let numero1 = ask.question('Digite um numero: ')
let numero2 = ask.question('Digite um numero: ')

let calculadoraFuncionando = true


numero1 = Number(numero1)
numero2 = Number(numero2)

while (calculadoraFuncionando){
    console.log(`
Seus numeros sao: 

${numero1}
${numero2}`)
    let operacao = ask.question(`
    ____________________________________

    Quer calcular qual dessas operacoes:
    [1] - Soma
    [2] - Subtracao
    [3] - Multiplicar
    [4] - Divisao
    [5] - Mod
    [6] - Outros numeros
    [0] - Encerra
    Qual a operacao voce quer calcular? `)
    operacao = Number(operacao)
    console.clear()
    switch(operacao){
        
        case 1 :
           if (operacao == 1){
            console.log(numero1 + numero2)
           } break

        case 2: 
           if (operacao == 2){
            console.log(numero1 - numero2)
           } break
        case 3:
            if(operacao == 3){
                console.log(numero1 * numero2)
            } break
        case 4 :
                if (operacao == 4){
                    console.log(numero1 / numero2)
            } break
        case 5 : 
                if(operacao){
                    console.log(numero1 % numero2)
            }break
        case 6 :
                    numero1 = Number(ask.question('Digite o primeiro numero: '));
                    numero2 = Number(ask.question('Digite o segundo numero: '));
            break;
        case 0 :
                    calculadoraFuncionando = false
            break
           
    }
    ask.question(`
^ Resposta ^

Tecle ENTER para continuar... `)
        console.clear()
}


























































































































































































































































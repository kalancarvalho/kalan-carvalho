/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/

//1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a1 = 10;
let b1 = 5;
let c1 = a1 + b1;

a1 = a1 * 2;
b1 = b1 - 3;
c1 = c1 / 2;

console.log(a1, b1, c1); // a1= 20, b1= 2, c1= 7,5


//2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a2 = 7;
let b2 = 3;
let c2 = 10;

let resultado1_2 = (a2 > b2) && (c2 > a2);
let resultado2_2 = (b2 == 3) || (c2 < a2);
let resultado3_2 = !(a2 < c2);

console.log(resultado1_2, resultado2_2, resultado3_2); // resultado1_2 = true, resultado2_2 = true, resultado3_2 = false


//3. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a3 = 12;
let b3 = 8;
let c3 = 5;

let comparacao1_3 = a3 > b3 && b3 > c3;
let comparacao2_3 = a3 == 12 || c3 < 0;
let comparacao3_3 = b3 <= a3 && !(c3 == 5);

console.log(comparacao1_3, comparacao2_3, comparacao3_3); // comparacao1_3 = true, comparacao2_3 = true, comparacao3_3 = false


//4. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a4 = 15;
let b4 = 4;

let resultadoA_4 = (a4 / b4) > 3;
let resultadoB_4 = a4 % b4 == 3;
let resultadoC_4 = (a4 - b4) * 2 == 22;

console.log(resultadoA_4, resultadoB_4, resultadoC_4); // resultadoA_4 = true, resultadoB_4 = true, reultadoC_4 = true


//5. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a5 = 8;
let b5 = 6;
let c5 = 3;

let resultado1_5 = (a5 * b5) > (c5 * 10) || (b5 + c5) < 10;
let resultado2_5 = (a5 / c5) == b5 && (c5 - b5) < 0;
let resultado3_5 = !(a5 % b5 == 0) || c5 == 3;

console.log(resultado1_5, resultado2_5, resultado3_5); //  resultado1_5 = true, resultado2_5 = false, resultado3_5 = true


//6. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a6 = "5";
let b6 = 10;
let c6 = a6 + b6;
let d6 = Number(a6) + b6;
let e6 = b6.toString();

console.log(typeof a6, typeof b6, typeof c6, typeof d6, typeof e6); // typerof a6 = string, typerof b6 = number, typerof c6 = string, typerof d6 = number, typerof e6 = string


//7. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a7 = "15";
let b7 = 5;
let c7 = Number(a7) * b7;

let resultado1_7 = (typeof a7 == typeof b7);
let resultado2_7 = (a7 == b7);
let resultado3_7 = (c7 > 50) && (typeof c7 == "number");

console.log(resultado1_7, resultado2_7, resultado3_7); // resultado1_7 = false, resultado2_7 = false, resultado3_7 = true


//8. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a8 = "20";
let b8 = 10;
let c8 = a8 - b8;
let d8 = a8.toString() + b8.toString();

let resultadoA_8 = typeof c8 == "number" && typeof d8 == "string";
let resultadoB_8 = c8 == Number(a8) - b8;
let resultadoC_8 = d8 === a8 + b8.toString();

console.log(resultadoA_8, resultadoB_8, resultadoC_8); // resultadoA_8 = true, resultadoB_8 = true, resultadoC_8 = true


//9. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a9 = "30";
let b9 = 15;
let c9 = a9 / b9;
let d9 = (a9 * 2).toString();

let resultado1_9 = typeof c9 == "number";
let resultado2_9 = typeof d9 == "string";
let resultado3_9 = Number(a9) + b9 == c9 * b9;

console.log(resultado1_9, resultado2_9, resultado3_9); // resultado1_9 = true, resultado2_9 = true, resultado3_9 = false


//10. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a10 = "8";
let b10 = 4;
let c10 = Number(a10) + b10;
let d10 = c10.toString();

let resultado1_10 = typeof a10 == typeof d10;
let resultado2_10 = a10 + b10 == d10;
let resultado3_10 = c10 == Number(d10);

console.log(resultado1_10, resultado2_10, resultado3_10); // resultado1_10 = false, resultado2_10 = false, resultado3_10 = true


/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████

 ██████  ██████  ██████  ██  ██████   ██████
██      ██    ██ ██   ██ ██ ██       ██    ██
██      ██    ██ ██   ██ ██ ██   ███ ██    ██
██      ██    ██ ██   ██ ██ ██    ██ ██    ██
 ██████  ██████  ██████  ██  ██████   ██████

█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/

//11.
// Escreva um código que declare três variáveis: a11, b11, e c11.
// Atribua valores numéricos a elas e, em seguida, crie uma nova variável resultado11
// que armazene a soma de a11 e b11, multiplicada por c11.
// Exiba o valor de resultado11 no console.

let a11 = 1
let b11 = 2
let c11 = 3
let resultado11 = (a11 + b11) * c11
console.log(resultado11)


//12.
// Crie duas variáveis, x12 e y12, e atribua a elas valores inteiros diferentes.
// Escreva expressões que comparem se x12 é maior que y12, se y12 é menor ou igual a x12,
// e se x12 e y12 são iguais. Exiba os resultados dessas comparações no console.

let x12 = 1
let y12 = 2
console.log(x12 > y12, y12 <= x12)



//13.
// Crie uma variável para armazenar sua idade e outra para armazenar o ano atual.
// Em seguida, subtraia a idade do ano atual e converta o resultado para string.
// Exiba o resultado no console.

let idade = 18
let anoAtual = 2024
console.log((anoAtual - idade).toString())



//14.
// Declare duas variáveis, s14 e t14. Atribua um valor numérico a s14 e uma string numérica a t14.
// Converta t14 para número usando Number() e adicione-a a s14.
// Exiba o resultado da adição e o tipo da variável resultante no console usando typeof.

let s14 = 2
let t14 = "5"
num = Number(t14)
console.log(num +s14)
console.log(typeof(num + s14)) 

//15.
// Crie duas variáveis, u15 e v15, uma com um número e a outra com uma string que representa o mesmo número.
// Compare os tipos dessas variáveis usando typeof e exiba o resultado no console.
// Depois, verifique se as variáveis têm o mesmo valor usando == e ===.

let u15 = 2
let v15 = "2"
console.log(typeof u15, typeof v15)
console.log(u15 == v15, u15 === v15)


//16.
// Crie uma constante que armazena o preço de um produto.
// Crie uma variável que armazena a quantidade comprada desse produto.
// Multiplique os valores e exiba o resultado no console, convertendo-o para string.

const preco = 17 
let vendido = 10
console.log((preco * vendido).toString())




//17.
// Crie duas variáveis, z17 e a17, uma com uma string e outra com um número.
// Concatene as duas variáveis e exiba o resultado e o tipo da variável resultante no console.


let z17 = 2
let a17 = "2"
console.log( typeof (z17 + a17))

//18.
// Declare três variáveis, b18, c18, e d18, com valores numéricos,
// sendo que uma delas deve ser uma string numérica.
// Converta as variáveis para o tipo correto e calcule a média desses valores.
// Exiba a média no console.


let b18 = 1
let c18 = 2
let d18 = "3"
numero = Number(d18)
console.log(b18 + c18 + numero)

//19.
// Declare uma variável com um valor numérico e converta-a para uma string usando toString().
// Depois, converta a string de volta para número usando Number() e exiba o tipo da variável em cada etapa no console.

let numero1 = 2
numero2 = numero1.toString()
numero3 = Number(numero2)
console.log((numero2).toString())
console.log((numero3))

//20.
// Crie uma variável para armazenar a quantidade de horas trabalhadas e outra para armazenar o valor pago por hora.
// Calcule o total a receber e verifique se o valor é maior que 500.
// Exiba a resposta no console.

let horasTrabalhadas = 120
let pagoPorHora = 20
let valorReceber = horasTrabalhadas * pagoPorHora
console.log(valorReceber)
console.log(valorReceber > 500 )


//21.
// Declare uma constante com um valor booleano qualquer.
// Em seguida, converta esse valor para número e exiba o valor convertido no console.

const numero7 = true
numero8 = Number(numero7)
console.log(typeof(numero8))

//22.
// Declare uma constante para armazenar seu nome completo.
// Em seguida, crie uma variável que armazene a quantidade de caracteres desse nome.
// Exiba a quantidade de caracteres no console.

let nomeCompleto = "Kalan-Carvalho-de-Camargo"
let caracteres = nomeCompleto.length
console.log(caracteres)

//23.
// Crie duas variáveis para armazenar dois números quaisquer.
// Subtraia um número do outro e verifique se o resultado é negativo.
// Exiba a resposta no console.

let number = 1
let number2 = 2
console.log(number - number2)

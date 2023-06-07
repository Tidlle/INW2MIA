/*const leia = require("prompt-sync")
//pedi dois numeros ao usuário e mostra na tela junto com 
//uma mensagem o somatório destes numeros


let num1 = 0 

let num2 = 0 

let resultado 

num1 = parseInt(leia("Digite o primeiro número inteiro : "))

num2 = parseInt(leia("Digite o segundo número inteiro : "))

resultado = num1 * num2 

console.log("O resultado é "+resultado)*/

const leia = require("prompt-sync")()

// solicite ao usuário um numero inteiro 
// faça a raiz quadrada deste numero

let numero 

numero = parseInt(leia("Digite um numero : "))

console.log("Raiz quadrada : " +(Math.sqrt(numero)))
console.log("Numero ao cubo : " +(Math.pow(numero,3)))



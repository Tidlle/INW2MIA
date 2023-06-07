const leia = require("prompt-sync")()

let num1 = 0 

let num2 = 0 

let num3 = 0 

let num4 = 0 

let D 
num1 = parseInt(leia("Digite o valor de x1 : "))

num2 = parseInt(leia("Digite o valor de y1 : "))

num3 = parseInt(leia("Digite o valor de x2 : "))

num4 = parseInt(leia("Digite o valor de y2 : "))

D = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))

console.log("Resultado = "+D)
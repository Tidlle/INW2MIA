const leia = require("prompt-sync")()

let num1 = 0 

let num2 = 0 

let num3 = 0 

let R 

let S

let D 

num1 = parseInt(leia("Digite o valor de A : "))

num2 = parseInt(leia("Digite o valor de B : "))

num3 = parseInt(leia("Digite o valor de C : "))

R = Math.pow((num1+num2),2)

S = Math.pow((num2+num3),2)

D = (R+S)/2

console.log("O resultado é : "+D)

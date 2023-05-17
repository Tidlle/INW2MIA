//classes 
class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero
        this.cpf = cpf 
        this.saldo = saldo
        this.ativo = ativo 
    }

    ativar(){
        this.ativo = true
    }

    credito(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível realizar valor negativo...")
            }
            else if(valor == 0){
                console.log("Impossível realizar valor zerado...")
            }
            else{
                this.saldo = this.saldo + valor 
            }
    }
    else { 
        console.log("Conta está inativa...")
    }
 }
    debito(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível realizar valor negativo...")
            }
            else if(valor == 0){
                console.log("Impossível realizar valor zerado...")
            }
            else if(this.saldo<valor){
                console.log("Saldo insuficiente...")
            }
            else{
                this.saldo = this.saldo - valor 
            }
    }
    else { 
        console.log("Conta está inativa...")
    }
}
}



//programa principal 

const leia = require("prompt-sync")()
let op = ""
let valor = ""
let tipo = ""

console.log("1 - conta poupança")
console.log("2 - conta corrente")
console.log("3 - conta especial")
tipo = leia("Digite o número do tipo de conta a ser aberta : ")

if(tipo == "1"){
console.log("Conta Poupança")
}
else if(tipo == "2"){
    console.log("Conta Correte")
}
else(tipo == "3"){
    console.log("Conta Especial")
}

/*let numero = (leia("Digite o número da conta : "))
let cpf = leia("Digite o cpf : ")
let c1 = new Conta(numero,cpf,0,false)
c1.ativar()

for(let x=1; x<=10; x++){
    console.log("Movimento "+x)
    console.log("Saldo da conta R$ :"+c1.saldo)
    valor = parseInt(leia("Digite o valor : "))
    op = leia("Digite D - débito ou C - crédito :").toUpperCase()
    if(op == "C"){
        c1.credito(valor)
    }
    else if(op == "D"){
        c1.debito(valor)
    }
    
}


console.log("Saldo final da conta R$ : "+c1.saldo)*/


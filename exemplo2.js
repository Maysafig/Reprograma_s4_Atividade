// Exemplo 02	Descrição : For/Break/Continue	Utilize a estrutura de repetição for para imprimir no console conforme instruções:
// a) números de 1 a 50  
// b) quando chegar no número 25 interrompa a instrução e pare o loop 
// c) quando chegar no número 10 pule a instrução|

// a) números de 1 a 50  
for ( let numero = 1 ; numero <= 50 ; numero ++){
    console.log(numero)

//b) quando chegar no número 25 interrompa a instrução e pare o loop 
    if(numero === 25){
        break
    }
}
console.log("Deu o break")

// c) quando chegar no número 10 pule a instrução|

let counter = 0

while(counter < 10){
    counter ++

    if(counter === 10){
        console.log("CONTINUE")
        continue;
    }

    console.log(counter)
}
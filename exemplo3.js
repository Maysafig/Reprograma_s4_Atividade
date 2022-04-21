//Exemplo 03	Descrição : 10 em 10	Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".

let numero = 10

while (numero < 100){
    numero += 10

    if(numero === 60 || numero === 90){
        console.log("CONTINUE")
        continue
    }
    console.log(numero)
}
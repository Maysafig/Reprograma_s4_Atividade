// Exemplo 06 - Descrição : Fatorial - Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

let fatorialx = 3;
let resultado = fatorialx;
for (let i = fatorialx - 1 ; i > 0; i--) {
    console.log('i',i)
    resultado *= i;
}
console.log(resultado);

// Segunda forma 
let n = 3

let fatorial = n 

for (cont = 1 ; cont < n ; cont ++){
    fatorial = fatorial * (n - cont)
}
console.log(fatorial)
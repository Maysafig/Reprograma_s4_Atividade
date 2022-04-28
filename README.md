# Lógica aplicada - Estrutura de repetição, arrays, métodos e objetos 

**Semana 4 – Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)**
## Sumário

1. Estrutura de repetição
2. Objetos
3. Arrays
4. Métodos de iteração

## Estrutura de repetição

Você pode pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos em uma direção e Y passos em outra; por exemplo, a ideia "vá 5 passos para leste" pode ser expressa em um laço desta forma:

```
let passo
for (passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log('Ande um passo para o leste')
}
```

Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: repetir uma ação múltiplas vezes ( inclusive você poderá repetir 0 vezes). Os vários mecanismos diferentes de laços oferecem diferentes formas de determinar quando este irá começar ou terminar. Há várias situações em que é mais fácil resolver um problema utilizando um determinado tipo de laço do que outros.

Os possíveis laços de repetição em JavaScript:

`for`
Conceito for é a estrutura de repetição com variavél de controle, a gente usa quando sabe exatamente qual são os nossos pontos de partida e de chegada.

`do...while`
do...while primeiro executa o bloco e depois faz o teste lógico, garantindo que a instrução será executada pelo menos 1 vez.

`while`
while faz o teste lógico no início e sendo verdadeiro ele executa o bloco de código

`break`
podemos encerrar uma instrução

`continue`
podemos pular uma instrução

## Objetos

Objeto é um tipo de dado que contém uma coleção de propriedades organizadas em pares de chave (ou nome) e valor, sendo o valor qualquer tipo de dado (número, texto, função ou até mesmo outro objeto).

### Inicializando objetos

Para criar um novo Objeto, podemos atribuir a uma variável uma lista de elementos entre chaves, separados por vírgula e com a notação de `chave : valor`. Também é possível utilizando a palavra reservada `new` ou a partir de uma função.

```javascript
const pessoa = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
}
```

### Date

```js
const hoje = new Date()
console.log(hoje) // 2020-09-05T10:56:49.693Z
const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()
console.log(dia, mes, ano) // 5 8 2020 🤔
const dataFormatada = hoje.toLocaleDateString('pt-BR')
console.log(dataFormatada) // 05/09/2020
```

## Arrays

Um array (ou lista) permite armazenar um conjunto de dados e atribuí-los a uma variável, sendo esta a estrutura de dados mais simples possível.

Para acessar o valor de um Array, use a notação de colchetes e informe a posição que deseja acessar, lembrando que a contagem começa em zero.

```javascript
const alunasReprograma = ['Andreia', 'Fernanda', 'Mariana', ...];
console.log(alunasReprograma[0]) // Andreia
console.log(alunasReprograma[1]) // Fernanda
console.log(alunasReprograma[2]) // Mariana
```

### Métodos de iteração

- `length` retorna um número que representa o tamanho do array.
- `push` adiciona um item na última posição do array.
- `filter` retorna um novo array com os elementos filtrados.
- `find` retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
- `map` retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
- `sort` ordena o array
- `reduce` reduz o array para um único valor mediante a uma operação matemática
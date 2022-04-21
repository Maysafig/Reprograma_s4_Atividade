//Exemplo 01	Descrição : criar e acessar valores(objeto e array	Crie objetos e arrays e acesses os valors

//a) array lista de compras 

const listaCompras = ['café', 'arroz', 'leite', 'feijão', 'açúcar']

for (let compras = 0; compras < listaCompras.length; compras++){
    console.log(listaCompras[compras])
}

console.log(listaCompras.length)//lista toda
console.log(listaCompras[2])//item da posição 2


//b) objeto livro(nome, autora, editora, pagina, anoPublicao, jaLeu)

const livro1 = {
    nome: 'As Férias da Minha Vida',
    autora: 'Clara Savelli',
    editora: 'Intrínseca',
    pagina: 32,
    anoPublicacao: 2019,
    jaLeu: true
}

console.log(livro1.editora)
console.log(livro1.anoPublicacao)
console.log(livro1.jaLeu)

const livro2 = {
    nome: 'Céu sem estrelas',
    autora: 'Iris Figueiredo',
    editora: 'Seguinte',
    pagina: 360,
    anoPublicacao: 2018,
    jaLeu: false

}

console.log(livro2.editora)
console.log(livro2.anoPublicacao)
console.log(livro2.jaLeu)

//c) Criar um array com varios objetos de livros

const livros = [
    {
    nome: 'As Férias da Minha Vida',
    autora: 'Clara Savelli',
    editora: 'Intrínseca',
    pagina: 32,
    anoPublicacao: 2019,
    jaLeu: true
    },
    
    { 
    nome: 'Céu sem estrelas',
    autora: 'Iris Figueiredo',
    editora: 'Seguinte',
    pagina: 360,
    anoPublicacao: 2018,
    jaLeu: false
   }
]

console.log(livros[1].editora)
console.log(livros[0].anoPublicacao)
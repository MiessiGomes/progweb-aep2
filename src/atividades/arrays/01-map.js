//----------------------------------------------------------------------------------------------------MAP

const nums = [2, 4, 6, 8]
const dobro = numero => numero * 2
console.log(nums.map(dobro))

//const numeros = [1, 2, 3, 4, 5 ,6]
//const dobronum = numero => numero * 3
//console.log(numeros.map(dobronum))

//console.log(nums.map(numero => numero * 3))

//------------------------------------------------------------------------------------------------------

//const nomes = ['Caio', 'Leonardo', 'André', 'Natan', 'José Ricardo']
//const letras = nomes.map(text => text[0])
//console.log(letras)


//------------------------------------------------------------------------------------------------------

/*
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.99 },
]
const produtos = carrinho.map(item => item.nome)
//const produtos = carrinho.map(item => item.qtde)
//const produtos = carrinho.map(item => item.preco)
console.log(produtos)
*/

//------------------------------------------------------------------------------------------------------

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.99 },
]

//const valort = carrinho.map(item => item.qtde * item.preco)

const valor_total = carrinho.map(item => {
    let per_product = {
        ...item,
        valor: item.qtde * item.preco
    }

    return per_product
})

console.log(valor_total)
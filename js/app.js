// *PÁGINA DE DESAFIOS*
//
// Desafio: Carrinho de compras
// Autor: Allan Gomes
// Curso: Lógica de programação: praticando com desafios
// Instituição: Alura

// DECLARAÇÃO E ATRIBUÇÃO DE VARIÁVEIS
let campoProduto = document.getElementById('produto');
let botaoAdicionar = document.querySelector('.botao-adicionar');
let botaoLimpar = document.querySelector('.botao-limpar');
let listaDeProdutos = document.querySelector('.carrinho__produtos__produto');
let campoValorTotal = document.querySelector('.carrinho__total');
let campoQuantidade = document.getElementById('quantidade');

let produto;
let indexProduto;
let textProduto;
let quantidade;

let nomeDoProduto;
let valorDoProduto;
let apenasValor;
let somaValores = 0;

let arrayQuantidades = [];
let arrayProdutos = [];
let arrayValores = [];
let arrayCarrinho = [];

// DECLARAÇÃO DE FUNÇÕES
function limparCampo(campo) {
    campo.innerHTML = ''
}

function limpar() {
    limparCampo(listaDeProdutos);
    somaValores = 0;
    campoValorTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$00,00</span>`;
    arrayQuantidades = [];
    arrayProdutos = [];
    arrayValores = [];
    arrayCarrinho = [];
}

function adicionar() {
    produto = campoProduto.value;
    indexProduto = campoProduto.selectedIndex;
    textProduto = campoProduto.options[indexProduto].text;
    quantidade = parseInt(campoQuantidade.value);

    nomeDoProduto = produto.substring(produto.indexOf('-') + 0, -10);
    valorDoProduto = produto.substring(produto.indexOf('-') + 2);
    apenasValor = valorDoProduto.substring(valorDoProduto.indexOf('R$') + 2);

    console.log(produto);
    console.log(indexProduto);
    console.log(textProduto);
    console.log(quantidade);
    console.log(nomeDoProduto);
    console.log(valorDoProduto);

    if (!isNaN(quantidade) && quantidade > 0) {
        if (confirm(`Você realmente deseja adicionar este item ao seu carrinho?\n${quantidade}x ${produto}`)) {
            var valor = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(apenasValor);
            console.log(valor);

            somaValores += parseFloat(quantidade * apenasValor);
            console.log(somaValores);

            var valorTotal = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(somaValores);

            arrayQuantidades.push(quantidade);
            arrayProdutos.push(nomeDoProduto);
            arrayValores.push(valor);
            arrayCarrinho.push(`<span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">${valor}</span>`);

            //for (var i = 0; i < arrayProdutos.length; i++) {
            listaDeProdutos.innerHTML = arrayCarrinho.join('<br>');
            campoValorTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">${valorTotal}</span>`;
            //}
            console.log(arrayQuantidades);
            console.log(arrayProdutos);
            console.log(arrayValores);

            alert(`${quantidade}x ${produto}\n\nAdicionado com sucesso.`);
        }
    } else {
        alert('Insira uma quantidade válida');
    }
}

// PROGRAMA PRINCIPAL
const input = document.querySelector('input');

input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        console.log('Enter pressionado!');
        adicionar();
    }
})
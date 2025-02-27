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

let arrayCarrinho = [];

// DECLARAÇÃO DE FUNÇÕES
function limparCampo(campo) {
    campo.innerHTML = ''
}

function limpar() {
    limparCampo(listaDeProdutos);
    somaValores = 0;
    arrayCarrinho = [];
    campoValorTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$00,00</span>`;
}

function adicionar() {
    produto = campoProduto.value;
    indexProduto = campoProduto.selectedIndex;
    textProduto = campoProduto.options[indexProduto].text;
    quantidade = parseInt(campoQuantidade.value);

    nomeDoProduto = produto.split(' - ')[0];
    valorDoProduto = produto.split(' - ')[1];

    apenasValor = valorDoProduto.substring(valorDoProduto.indexOf('R$') + 2);

    if (!isNaN(quantidade) && quantidade > 0) {
        if (confirm(`Você realmente deseja adicionar este item ao seu carrinho?\n\n${quantidade}x ${produto}`)) {
            var valor = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(apenasValor);
            somaValores += parseFloat(quantidade * apenasValor);

            var valorTotal = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(somaValores);

            arrayCarrinho.push(`<span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">${valor}</span>`);

            listaDeProdutos.innerHTML = arrayCarrinho.join('<br>');
            campoValorTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">${valorTotal}</span>`;

            alert(`\n${quantidade}x ${produto}\n\nAdicionado com sucesso.`);
        }
    } else {
        alert('Insira uma quantidade válida');
    }
    campoQuantidade.value = '';
}

// PROGRAMA PRINCIPAL
const input = document.querySelector('input');

input.addEventListener("keyup", ({ key }) => {
    if (key === "Enter") {
        console.log('Enter pressionado!');
        adicionar();
    }
})
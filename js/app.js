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
let campoValorTotal = document.getElementById('valor-total');
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
let arrayCarrinhoSimplificado = [];

// DECLARAÇÃO DE FUNÇÕES
function limparCampo(campo) {
    campo.innerHTML = ''
}

function limpar() {
    if (confirm(`Você realmente deseja limpar o carrinho?\n\n${arrayCarrinhoSimplificado.join('\n')}`)) {
        if (confirm('Tem certeza?')) {
            limparCampo(listaDeProdutos);
            somaValores = 0;
            arrayCarrinho = [];
            campoValorTotal.innerHTML = `R$00,00`;
            alert('Carrinho limpo.');
        }
    }
    return
}

function adicionar() {
    produto = campoProduto.value;
    indexProduto = campoProduto.selectedIndex;
    textProduto = campoProduto.options[indexProduto].text;
    quantidade = parseInt(campoQuantidade.value);

    nomeDoProduto = produto.split(' - ')[0];
    valorDoProduto = produto.split(' - ')[1];

    apenasValor = valorDoProduto.substring(valorDoProduto.indexOf('R$') + 2);

    if (!produto || produto.trim() === '') {
        alert('Insira um produto válido');
        return
    } else {
        if (!isNaN(quantidade) && quantidade > 0) {
            if (confirm(`Você realmente deseja adicionar este item ao seu carrinho?\n\n${quantidade}x ${produto}`)) {
                var valor = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(apenasValor);
                somaValores += parseFloat(quantidade * apenasValor);

                var valorTotal = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(somaValores);

                arrayCarrinho.push(`<span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">${valor}</span>`);
                arrayCarrinhoSimplificado.push(`${quantidade}x ${nomeDoProduto} - ${valor}`);

                listaDeProdutos.innerHTML = arrayCarrinho.join('<br>');
                campoValorTotal.innerHTML = valorTotal;

                alert(`Item: \n\n${quantidade}x ${produto}\n\nAdicionado com sucesso.`);
            }
        } else {
            alert('Insira uma quantidade válida');
            return
        }
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
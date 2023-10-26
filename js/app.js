let totalGeral;
limpar();


function adicionar() {
    // recuperar valores: nome, quantidade e valor do produto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];//o split divide uma string em array, o 0 indica que vem antes do caractere indicado
    let valorUnitario = produto.split('R$')[1];//o 1 indica q vem após o R$
    let quant = document.getElementById('quantidade').value;
    let preco = quant * valorUnitario;// calcular o preço, subtotal
    
    // adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quant}x</span>${nomeProduto}<span class="texto-azul">R$ ${preco}</span>
    </section>`;

    // atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '.placeholder';//Essa deve ficar dentro da função, pois deve ser acionada toda vez em que o botão de adicionar for clicado.
}    


function limpar() {
    totalGeral = 0;
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = '';   
}
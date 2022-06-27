const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'Cotonete':
            console.log('Opção selecionada é Cotonete')
            resultado.innerHTML = "Higiene pessoal"
            break;
        case 'Maça':
            console.log('Opção selecionada é Maça')
            resultado.innerHTML = "Alimento Perecível"
            break
        case 'Arroz':
            console.log('Opção selecionada é Arroz')
            resultado.innerHTML = "Alimento não-perecível"
            break;
        case 'Açúcar':
            console.log('Opção selecionada é Açúcar')
            resultado.innerHTML = "Alimento não-perecível"
            break;
        case 'Camiseta do Inter':
            console.log('Opção selecionada é Camiseta do Inter')
            resultado.innerHTML = "Vestuário"
            break;
        case 'Sabão':
            console.log('Opção selecionada é Sabão')
            resultado.innerHTML = "Limpeza e utensílios domésticos"
            break;
    }
}

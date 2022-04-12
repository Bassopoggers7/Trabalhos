const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById ('resultado')
switch (opcao) {
    case 'Diamba Vencida':
        console.log('Opção selecionada é Diamba Vencida')
        resultado.innerHTML = "Opção é Diamba Vencida"
        break;
    case 'Pod de Abacate':
        console.log('Opção selecionada é Pod de Abacate')
        resultado.innerHTML = "Opção é Pod de Abacate"
        break;
    case 'Narguilé de Melancia':
        console.log('Opção selecionada é Vape de Pimentão')
        resultado.innerHTML = "Opção é Vape de Pimentão"
        break;             
    default:
        console.log('Opcao Invalida!');
        resultado.innerHTML = "Opção é Opção Inválida!"
        break;
}
}
const fruit = 'limao';

switch (fruit) {
    case 'banana' :
        console.log('R$ 3,00 / kg');
        break;
    case 'limao' :
    case 'pera':
        console.log('R$2,00 / kg ');
        break;
    default:
        console.log('Produto não existe no estoque');
        break;
}
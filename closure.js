function init() {
    const exemplo = 'Variavel';

    return function(){
        console.log('1 - 0 valor da variavel ex é: ${exemplo}.');

        return function(){
            console.log('2 - 0 valor da variavel ex é: ${exemplo}.');
            
        return function(){
                console.log('3 - 0 valor da variavel ex é: ${exemplo}.');    

    }
}
    }
}

init()()()();
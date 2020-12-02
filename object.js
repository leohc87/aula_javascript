let user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
}

// alternando a propiedade de um objeto
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user['prop'] = 'Outro nome 3';

//Criando uma propiedade
user.lastName = 'Cabrini da Silva';

//Deletando uma propiedade
delete user.name;
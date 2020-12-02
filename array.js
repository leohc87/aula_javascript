const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jenifer',
        age: 18,
        gender: gender.WOMAN
    }
];

//Retorna a quantidade de itens de um array
console.log('Items:', persons.length);

//Verificar se é array
console.log('A variavel persons é um array:' , Array.isArray(persons));

//Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log('Nome: ${person.name} ');
});

//FIltrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo MAP
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução javascript';
    return person;
});

console.log('\nPessoas com a adição do curso:' , personsWithCourse);

//transformar um array em outro tipo REDUCE
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
} , 0);
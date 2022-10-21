// numar
// let simple = 10 

// array
// let lista = ['', '..']

// functie
// let func = () => {}

// Fiecare linie reprezinta un student, iar ca tip de date, puteam reprezenta studentul folosind un obiect:
let student1 = {
  name: 'Bob',
  age: 19,
}

let student2 = { name: 'Yasmina', age: 18, };

let student3 = {
  name: 'Ion',
  age: 20,
};
// let students = [student1, student2, student3];

// Fiecare student reprezinta un rand din lista de studenti. Deci daca as vrea sa reprezint tabelul (lista de studenti), ar folosi un array, unde fiecare element din array este un student, adica un obiect.
const students = [
  {
    name: 'Bob',
    age: 19,
  },
  {
    name: 'Yasmina',
    age: 18,
  },
  {
    name: 'Ion',
    age: 20,
  },
];

students = 100;
students = [];
students = {};

students[0].age = 99;
students[2] = false;

console.log(students);

// Primul element din array va fi un obiect.
let firstStudent = students[0];
console.log(firstStudent.name);

// Varianta dintr-o bucata:
console.log(students[1].age);

// const variabilaConstanta = 100;
// variabilaConstanta = 99;


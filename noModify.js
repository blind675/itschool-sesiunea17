let salaries = [1000, 2000, 500, 490, 3000, 10000, 9000];

const doubleFunction = (value) => {
  return value * 2;
}

// map - Returneaza un array nou, in care fiecare element este transformat conform functiei pasate ca argument.
let doubledSalaries = salaries.map(doubleFunction);

console.log(salaries);
console.log(doubledSalaries);

// filter - Returneaza un array nou, care contine doar elementele ce indeplinesc conditia din functia pasata ca argument.
// Varianta prescurata (cu arrow function):
let bigSalaries = salaries.filter((value) => {
  if(value % 3 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(bigSalaries);

// find - Returneaza primul element din array care indeplineste conditia din functia pasata ca argument. Daca nu gaseste niciun element, returneaza undefined.
let exactSalary = salaries.find((value) => {
  if (value % 3 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(exactSalary);
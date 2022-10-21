
// let list = [14, 10, 1, 7, 20, 8, 21, 9];
// // [10, 14, 1, 7, 20, 8, 21, 9 ]; i = 0; / pas 1
// // [10, 1, 14, 7, 20, 8, 21, 9 ]; 1 = 1; // pas 2
// // ...
// // [10, 1 , 7, 14, 8, 20, 9, 21]; i = 8 // parecurgerea 1
// // [1, 7, 10, 8, 14, 9, 20, 21] // parcurgerea 3
// // [1, 7, 8, 10, 9, 14, 20, 21] 
// // ...
// // [1, 7, 8, 9 , 10, 14, 20, 21] pas x - ultimul pas / ultima parcurgere 

// folosim aceasta metoda pentru a efectua comparatia valorilor
// let sortingOption = (firsValue, secondValue) => {
//   if(firsValue > secondValue) {
//     return true;
//   } else {
//     return false;
//   }
// }

// implementarea algoritmului bubble sort
// https://technologystrive.com/bubble-sort/

// meoda de comparatie este data ca o functie callback pentru a putea acoperi mai multe cazuri (crescator, descrescator, ...)
// function sort(list, sortingFunction ) {
//   let isSorted = false;

//   while(!isSorted) {
//     isSorted = true;
    
//     for(let i=0; i <= list.length - 2; i++) {
//       let sortingResult = sortingFunction(list[i], list[i+1]);

//       if( sortingResult ) {
//           let aux = list[i+1];
//           list[i+1] = list[i];
//           list[i] = aux;

//           isSorted = false;
//       } 
//     }
//   }
// }

// sort(list, sortingOption);
// console.log(list)




// const myCallbackFunction = (myNumber, mySecondNumber) => {
//   console.log('Salut din functie');
//   console.log('myNumber = ', myNumber);
//   console.log('mySecondNumber = ', mySecondNumber);

//   return true;
// }

// myCallbackFunction(10);



// const myFunction = (callbackFunction) => {
//   console.log('1');
//   let functionReturn = callbackFunction(10, 12);
//   console.log('2');
//   console.log(functionReturn);
// }

// myFunction(myCallbackFunction);


// Functie care dubleaza un numar:
const doubleFunction = (value) => {
  return value * 2;
}

// Functie care tripleaza un numar:
const tripleFunction = (value) => {
  return value * 3;
}

let salaries = [1000, 2000, 500, 490, 3000, 10000, 9000];

// Aceasta functie primeste 2 parametri: un array si o alta functie. 
// myMap va returna un nou array, ce va contine elementele din array-ul primit ca parametru, MODIFCATE conform FUNCTIEI primite ca parametru.
function myMap(list, callback) {
  let newList = [];

  // Parcurgem array-ul primit ca parametru.
  for (let i = 0; i <= list.length - 1; i++) {
    let oldValue = list[i];
    // Functia pasata ca parametru este APELATA, returnand elementul modificat.
    let newValue = callback(oldValue);
    newList.push(newValue);
  }

  // Returnam array-ul rezultat.
  return newList;
} 

// Cand apelam functia, ii dam ca argumente array-ul pe care il dorim modificat, precum si FUNCTIA care decide cum se face modificarea.
// Ca sa pasam o functie ca argument (valoare pentru un parametru), scriem numele ei (NU apelul ei, intrucat cand apelam o functie, se returneaza o valoare!).
let doubledSalaries = myMap(salaries, doubleFunction);
console.log(doubledSalaries);
let tripledSalaries = myMap(salaries, tripleFunction);
console.log(tripledSalaries);
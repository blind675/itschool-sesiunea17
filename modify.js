// Adaugam un element la sfarsitul array-ului - push:
let animals = ["gaina", "oaie", "elefant", "purcel"];

// console.log(animals.push('zebra'));
// console.log(animals);

animals.push("crocodil", "porc");
console.log(animals);

// Scoatem ultimul element din array - pop:
animals.pop();
console.log(animals);

// Inversarea elementelor dintr-un array - reverse:
animals.reverse();
console.log(animals);

// Sortam elementele dintr-un array - sort:
animals.sort();
console.log(animals);

// ATENTIE! By default sort compara elementele ca si cum ar fi string-uri! Vom vedea mai jos cum putem customiza comportamentul lui sort folosind callbacks.
// b , a0 , a, f, c, b2
const myNumbers = [2, 10, 1, 8, 3, 21, 13];
myNumbers.sort();
console.log(myNumbers);

myNumbers = [2, 10, 1, 8, 3, 21, 13];

// functia care compara numerele pentru a le sorta 
// returneaza o valoare > 1 daca primul este mai mare ca al doilea si < 1 daca nu 
let sortingOption = (firsValue, secondValue) => {
  // console.log(' - ', typeof firsValue)
  if (firsValue > secondValue) {
    return 1;
  } else {
    return -1;
  }
};

myNumbers.sort(sortingOption);

console.log(myNumbers);

// Pentru lista (array-ul)
let salaries = [1036, 3205, 2030, 2945];

// 1.
// Creaza o functie care primeste ca parametrul lista si
// returneaza prima valoare dvizibila cu 5. ( o poti numi 'find' :) )
// Hint: poti folosi break pentru a opri parcurgerea listei cand ai gasit valoarea dorita.
function find(list) {
  let value;
  for(let i = 0; i < list.length; i++) {
    if(list[i] % 5 === 0) {
      value = list[i];
      break;
    }
  }

  return value;
}

console.log(find(salaries));

// 2.
// Creaza o functie care primeste o valoare si returneaza true daca este intre 2500 si 3000
function valueInRange(value) {
  return value > 2500 && value < 3000
}

// 3.
// Pornind de la codul functiei 'find' de mai sus creaza o functie care primeste ca parametrul lista si o functie callback
// si returneaza prima valoare care respecta conditia testata in functia callaback ( o poti numi 'findWithCallback' )
// Apeleaza functia 'findWithCallback' folosind functia de la punctul 2 ca si functie de callback

function findWithCallback(list, callback) {
  let value;

  for(let i = 0; i < list.length; i++) {
    if(callback(list[i])) {
      value = list[i];
      break;
    }
  }

  return value;
}

console.log(findWithCallback(salaries, valueInRange));

// 4. 
// Apeleaza functia de la punctul 3. cu lista (array-ul) salaries si o functie care testeaza ca o valoare e divizibila cu 10

let response = findWithCallback(salaries, (value) => value % 10 === 0);
console.log(response);

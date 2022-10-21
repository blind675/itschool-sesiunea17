// Crearea unui array:
let animals = ["gaina", "oaie", "elefant", "purcel"];

// Un array este un obiect ce are in plus proprietatea length + o serie de metode.
// let animals = {0: 'gaina', 1: 'oaie', 2: 'elefant', 3: 'purcel'};

// Lungimea unui array:
console.log(animals.length);

// Primul element:
console.log(animals[0]);
// Ultimul element:
console.log(animals[3]); // console.log(animals[animals.length - 1]);

let animal = animals[2]; // 'elefant'

// Modificarea unui element (array-ul este mutabil!):
animals[1] = "zebra";
console.log(animals);

// Parcurgere elemente array:
for (let i = 0; i < animals.length; i++) {
  let element = animals[i];
  console.log(element);

  if (element === 'elefant') {
    break;
  }
}

console.log('-----');

for (element of animals) {
  console.log(element);
}

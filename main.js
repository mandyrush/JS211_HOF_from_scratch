let animals = [
    'Dog',
    'Cat',
    'Horse',
    'Turtle',
    'Hippo'
]

// Foreach HOF
let uppercaseAnimals = animals.forEach(animal => console.log(animal.toUpperCase()));

// Foreach from scratch
let forEachFromScratch = () => {
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i].toUpperCase());
    }
}

forEachFromScratch();

// -----------------------------

// Filter HOF
let hAnimals = animals.filter(animal => animal[0] === 'H');
console.log('Animals that start with H: ', hAnimals);

// Filter from scratch
let filterFromScratch = () => {
    let hAnimalsArray = [];
    for (let i =0; i < animals.length; i++) {
        if (animals[i][0] === 'H') {
            hAnimalsArray.push(animals[i]);
        }
    }
    console.log('Animals that start with H from scratch: ', hAnimalsArray);
}

filterFromScratch();

// -----------------------------

// Find HOF
let findCat = animals.find(animal => animal === 'Cat');
console.log('Found the cat with HOF: ', findCat);

// Find from scratch
let findFromScratch = () => {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i] === 'Cat') {
            return animals[i];
        }
    }
}

console.log('Found the cat from scratch: ', findFromScratch());

// -----------------------------

// FindIndex HOF
let turtleIndex = animals.findIndex(animal => animal === 'Turtle');
console.log('The index of Turtle is: ', turtleIndex);

// FindIndex from scratch
let findIndexFromScratch = () => {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i] === 'Turtle') {
            return i;
        }
    }
}

console.log('The index of the Turtle from scratch is: ', findIndexFromScratch());